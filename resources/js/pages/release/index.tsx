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

interface Release {
    id: number;
    judul: string;
    isi_berita: string;
    tanggal_publikasi: string;
    status: boolean;
    user: {
        name: string;
    };
    press_release?: {
        what: string;
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
        data: Release[];
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
    { title: 'Release', href: '/release' },
];

export default function ReleaseIndex({ releases, filters, isAdmin }: Props) {
    const [search, setSearch] = useState(filters.search || '');
    const [status, setStatus] = useState(filters.status || 'all');

    useEffect(() => {
        if (!search && status === 'all') return;
        
        const delayDebounceFn = setTimeout(() => {
            router.get('/release', { 
                search: search || undefined, 
                status: status === 'all' ? undefined : status 
            }, {
                preserveState: true,
                replace: true,
            });
        }, 300);

        return () => clearTimeout(delayDebounceFn);
    }, [search, status]);

    const handleDelete = async (id: number, judul: string) => {
        const result = await Swal.fire({
            title: 'Konfirmasi Hapus',
            text: `Apakah Anda yakin ingin menghapus release Ini?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ef4444',
            cancelButtonColor: '#6b7280',
            confirmButtonText: 'Ya, Hapus!',
            cancelButtonText: 'Batal',
        });

        if (result.isConfirmed) {
            router.delete(`/release/${id}`, {
                onSuccess: () => {
                    toast.success('Release berhasil dihapus');
                },
                onError: () => {
                    toast.error('Gagal menghapus release');
                },
            });
        }
    };

    const handleToggleStatus = async (id: number, currentStatus: boolean, judul: string) => {
        const newStatus = !currentStatus;
        const statusText = newStatus ? 'Aktifkan' : 'Nonaktifkan';
        
        const result = await Swal.fire({
            title: `Konfirmasi ${statusText}`,
            text: `Apakah Anda yakin ingin ${statusText.toLowerCase()} Release Ini?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: newStatus ? '#10b981' : '#ef4444',
            cancelButtonColor: '#6b7280',
            confirmButtonText: `Ya, ${statusText}!`,
            cancelButtonText: 'Batal',
        });

        if (result.isConfirmed) {
            router.patch(`/release/${id}/toggle-status`, {}, {
                onSuccess: () => {
                    toast.success(`Release berhasil ${newStatus ? 'diaktifkan' : 'dinonaktifkan'}`);
                },
                onError: () => {
                    toast.error('Gagal mengubah status release');
                },
            });
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Release" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Release</h1>
                        <p className="text-sm text-muted-foreground">
                            Total: {releases.total} release {!isAdmin && '(Milik Anda)'}
                        </p>
                    </div>
                    <Button asChild>
                        <Link href="/release/create">
                            <Plus className="h-4 w-4" />
                            Tambah Release
                        </Link>
                    </Button>
                </div>

                {/* Search & Filter */}
                <div className="flex items-center gap-2">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            placeholder="Cari judul atau isi berita..."
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
                            <SelectItem value="true">Aktif</SelectItem>
                            <SelectItem value="false">Tidak Aktif</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="rounded-lg border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-16">No</TableHead>
                                <TableHead>Judul</TableHead>
                                <TableHead>Tanggal Publikasi</TableHead>
                                <TableHead>Sumber Press Release</TableHead>
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
                                        <TableCell className="font-medium max-w-xs">
                                            <div className="truncate">{release.judul}</div>
                                            <div className="text-xs text-muted-foreground truncate mt-1">
                                                {release.isi_berita.substring(0, 100)}...
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            {new Date(release.tanggal_publikasi).toLocaleDateString('id-ID')}
                                        </TableCell>
                                        <TableCell>
                                            {release.press_release ? (
                                                <Badge variant="outline">{release.press_release.what}</Badge>
                                            ) : (
                                                <span className="text-muted-foreground text-sm">Manual</span>
                                            )}
                                        </TableCell>
                                        <TableCell>{release.user.name}</TableCell>
                                        <TableCell>
                                            {release.status ? (
                                                <Badge variant="default">Aktif</Badge>
                                            ) : (
                                                <Badge variant="secondary">Tidak Aktif</Badge>
                                            )}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex justify-end gap-2">
                                                {isAdmin && (
                                                    <Button
                                                        variant={release.status ? "outline" : "default"}
                                                        size="sm"
                                                        onClick={() => handleToggleStatus(release.id, release.status, release.judul)}
                                                        title={release.status ? "Nonaktifkan" : "Aktifkan"}
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
                                                    <Link href={`/release/${release.id}/edit`}>
                                                        <Pencil className="h-4 w-4" />
                                                    </Link>
                                                </Button>
                                                <Button
                                                    variant="destructive"
                                                    size="sm"
                                                    onClick={() => handleDelete(release.id, release.judul)}
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                                        Tidak ada data release
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
