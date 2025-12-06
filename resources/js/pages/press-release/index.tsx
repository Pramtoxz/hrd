import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { Plus, Pencil, Trash2, Search, ChevronLeft, ChevronRight, CheckCircle, XCircle } from 'lucide-react';
import { toast } from 'sonner';
import Swal from 'sweetalert2';
import { useState, useEffect } from 'react';

interface PressRelease {
    id: number;
    what: string;
    who: string;
    when: string;
    where: string;
    status: boolean;
    user: {
        name: string;
    };
    created_at: string;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface Props {
    releases: {
        data: PressRelease[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
        links: PaginationLink[];
    };
    filters: {
        search?: string;
        status?: string;
    };
    isAdmin: boolean;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Press Release', href: '/press-release' },
];

export default function PressReleaseIndex({ releases, filters, isAdmin }: Props) {
    const [search, setSearch] = useState(filters.search || '');
    const [status, setStatus] = useState(filters.status || 'all');

    useEffect(() => {
        // Only trigger if search or status has actual value
        if (!search && status === 'all') return;
        
        const delayDebounceFn = setTimeout(() => {
            router.get('/press-release', { 
                search: search || undefined, 
                status: status === 'all' ? undefined : status 
            }, {
                preserveState: true,
                replace: true,
            });
        }, 300);

        return () => clearTimeout(delayDebounceFn);
    }, [search, status]);

    const handleDelete = async (id: number, what: string) => {
        const result = await Swal.fire({
            title: 'Konfirmasi Hapus',
            text: `Apakah Anda yakin ingin menghapus Press Release Ini?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ef4444',
            cancelButtonColor: '#6b7280',
            confirmButtonText: 'Ya, Hapus!',
            cancelButtonText: 'Batal',
        });

        if (result.isConfirmed) {
            router.delete(`/press-release/${id}`, {
                onSuccess: () => {
                    toast.success('Press release berhasil dihapus');
                },
                onError: () => {
                    toast.error('Gagal menghapus press release');
                },
            });
        }
    };

    const handleToggleStatus = async (id: number, currentStatus: boolean, what: string) => {
        const newStatus = !currentStatus;
        const statusText = newStatus ? 'Selesai' : 'Pending';
        
        const result = await Swal.fire({
            title: `Konfirmasi ${statusText}`,
            text: `Apakah Anda yakin ingin ${statusText.toLowerCase()} Press Release Ini?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: newStatus ? '#10b981' : '#ef4444',
            cancelButtonColor: '#6b7280',
            confirmButtonText: `Ya, ${statusText}!`,
            cancelButtonText: 'Batal',
        });

        if (result.isConfirmed) {
            router.patch(`/press-release/${id}/toggle-status`, {}, {
                onSuccess: () => {
                    toast.success(`Press release berhasil ${newStatus ? 'selesai' : 'pending'}`);
                },
                onError: () => {
                    toast.error('Gagal mengubah status press release');
                },
            });
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Press Release" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Press Release</h1>
                        <p className="text-sm text-muted-foreground">
                            Total: {releases.total} press release {!isAdmin && '(Milik Anda)'}
                        </p>
                    </div>
                    <Button asChild>
                        <Link href="/press-release/create">
                            <Plus className="h-1 w-1" />
                            Tambah Data
                        </Link>
                    </Button>
                </div>

                {/* Search & Filter */}
                <div className="flex items-center gap-2">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            placeholder="Cari what, who, where..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="pl-9"
                        />
                    </div>
                    <Select value={status} onValueChange={setStatus}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Filter Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Semua Status</SelectItem>
                            <SelectItem value="true">Selesai</SelectItem>
                            <SelectItem value="false">Pending</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="rounded-lg border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-16">No</TableHead>
                                <TableHead>What</TableHead>
                                <TableHead>Who</TableHead>
                                <TableHead>When</TableHead>
                                <TableHead>Where</TableHead>
                                <TableHead>Dibuat Oleh</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Aksi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {releases.data.length > 0 ? (
                                releases.data.map((release, index) => (
                                    <TableRow key={release.id}>
                                        <TableCell className="font-medium">
                                            {(releases.current_page - 1) * releases.per_page + index + 1}
                                        </TableCell>
                                        <TableCell className="font-medium max-w-xs truncate">
                                            {release.what}
                                        </TableCell>
                                        <TableCell>{release.who}</TableCell>
                                        <TableCell>{release.when}</TableCell>
                                        <TableCell>{release.where}</TableCell>
                                        <TableCell>{release.user.name}</TableCell>
                                        <TableCell>
                                            {release.status ? (
                                                <Badge variant="default">Selesai</Badge>
                                            ) : (
                                                <Badge variant="secondary">Pending</Badge>
                                            )}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex justify-end gap-2">
                                                {isAdmin && (
                                                    <Button
                                                        variant={release.status ? "outline" : "default"}
                                                        size="sm"
                                                        onClick={() => handleToggleStatus(release.id, release.status, release.what)}
                                                        title={release.status ? "Pending" : "Selesai"}
                                                        className={release.status ? "text-red-600 hover:text-red-700 hover:bg-red-50" : "bg-green-600 hover:bg-green-700"}
                                                    >
                                                        {release.status ? (
                                                            <XCircle className="h-4 w-4" />
                                                        ) : (
                                                            <CheckCircle className="h-4 w-4" />
                                                        )}
                                                    </Button>
                                                )}
                                                <Button variant="outline" size="sm" asChild>
                                                    <Link href={`/press-release/${release.id}/edit`}>
                                                        <Pencil className="h-4 w-4" />
                                                    </Link>
                                                </Button>
                                                <Button
                                                    variant="destructive"
                                                    size="sm"
                                                    onClick={() => handleDelete(release.id, release.what)}
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                                        Tidak ada data press release
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>

                {/* Pagination */}
                {releases.last_page > 1 && (
                    <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                            Menampilkan {((releases.current_page - 1) * releases.per_page) + 1} - {Math.min(releases.current_page * releases.per_page, releases.total)} dari {releases.total} data
                        </div>
                        <div className="flex gap-1">
                            {releases.links.map((link, index) => {
                                if (link.label === '&laquo; Previous') {
                                    return (
                                        <Button
                                            key={index}
                                            variant="outline"
                                            size="sm"
                                            disabled={!link.url}
                                            onClick={() => link.url && router.get(link.url, {}, {
                                                preserveState: true,
                                                preserveScroll: true,
                                            })}
                                        >
                                            <ChevronLeft className="h-4 w-4" />
                                        </Button>
                                    );
                                }
                                if (link.label === 'Next &raquo;') {
                                    return (
                                        <Button
                                            key={index}
                                            variant="outline"
                                            size="sm"
                                            disabled={!link.url}
                                            onClick={() => link.url && router.get(link.url, {}, {
                                                preserveState: true,
                                                preserveScroll: true,
                                            })}
                                        >
                                            <ChevronRight className="h-4 w-4" />
                                        </Button>
                                    );
                                }
                                return (
                                    <Button
                                        key={index}
                                        variant={link.active ? 'default' : 'outline'}
                                        size="sm"
                                        disabled={!link.url}
                                        onClick={() => link.url && router.get(link.url, {}, {
                                            preserveState: true,
                                            preserveScroll: true,
                                        })}
                                    >
                                        {link.label}
                                    </Button>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </AppLayout>
    );
}
