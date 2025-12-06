import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { Edit, Plus, Search, Trash2, CheckCircle, XCircle } from 'lucide-react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { toast } from 'sonner';

interface BukuTamu {
    id: number;
    nama_lengkap: string;
    instansi: string;
    tanggal: string;
    nomor_telepon: string;
    bertemu_dengan: string;
    keperluan: string;
    status: boolean;
}

interface Props {
    bukutamu: {
        data: BukuTamu[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
        links: Array<{
            url: string | null;
            label: string;
            active: boolean;
        }>;
    };
    filters: {
        search: string;
    };
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Buku Tamu', href: '#' },
];

export default function BukuTamuIndex({ bukutamu, filters }: Props) {
    const [search, setSearch] = useState(filters.search || '');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.get('/bukutamu', { search }, { preserveState: true });
    };

    const handleDelete = async (id: number, nama: string) => {
        const result = await Swal.fire({
            title: 'Konfirmasi Hapus',
            text: `Apakah Anda yakin ingin menghapus data ${nama}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ef4444',
            cancelButtonColor: '#6b7280',
            confirmButtonText: 'Ya, Hapus!',
            cancelButtonText: 'Batal',
        });

        if (result.isConfirmed) {
            router.delete(`/bukutamu/${id}`, {
                onSuccess: () => {
                    toast.success('Data buku tamu berhasil dihapus');
                },
                onError: () => {
                    toast.error('Gagal menghapus data buku tamu');
                },
            });
        }
    };

    const handleToggleStatus = async (id: number, currentStatus: boolean, nama: string) => {
        const newStatus = !currentStatus;
        const statusText = newStatus ? 'Selesai' : 'Pending';
        
        const result = await Swal.fire({
            title: `Konfirmasi Ubah Status`,
            text: `Ubah status ${nama} menjadi ${statusText}?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: newStatus ? '#10b981' : '#ef4444',
            cancelButtonColor: '#6b7280',
            confirmButtonText: `Ya, Ubah!`,
            cancelButtonText: 'Batal',
        });

        if (result.isConfirmed) {
            router.patch(`/bukutamu/${id}/toggle-status`, {}, {
                onSuccess: () => {
                    toast.success(`Status berhasil diubah menjadi ${statusText}`);
                },
                onError: () => {
                    toast.error('Gagal mengubah status');
                },
            });
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Buku Tamu" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Buku Tamu</h1>
                    <Link href="/bukutamu/create">
                        <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            Tambah Data
                        </Button>
                    </Link>
                </div>

                <div className="rounded-lg border bg-card">
                    <div className="p-4">
                        <form onSubmit={handleSearch} className="flex gap-2">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                <Input
                                    placeholder="Cari nama, instansi, nomor telepon..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="pl-9"
                                />
                            </div>
                            <Button type="submit">Cari</Button>
                            {filters.search && (
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => {
                                        setSearch('');
                                        router.get('/bukutamu');
                                    }}
                                >
                                    Reset
                                </Button>
                            )}
                        </form>
                    </div>

                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[50px]">No</TableHead>
                                <TableHead>Nama Lengkap</TableHead>
                                <TableHead>Instansi</TableHead>
                                <TableHead>Tanggal</TableHead>
                                <TableHead>No. Telepon</TableHead>
                                <TableHead>Bertemu Dengan</TableHead>
                                <TableHead>Keperluan</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Aksi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {bukutamu.data.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={9} className="text-center">
                                        Tidak ada data
                                    </TableCell>
                                </TableRow>
                            ) : (
                                bukutamu.data.map((item, index) => (
                                    <TableRow key={item.id}>
                                        <TableCell>
                                            {(bukutamu.current_page - 1) * bukutamu.per_page + index + 1}
                                        </TableCell>
                                        <TableCell className="font-medium">{item.nama_lengkap}</TableCell>
                                        <TableCell>{item.instansi}</TableCell>
                                        <TableCell>{formatDate(item.tanggal)}</TableCell>
                                        <TableCell>{item.nomor_telepon}</TableCell>
                                        <TableCell>{item.bertemu_dengan}</TableCell>
                                        <TableCell className="max-w-xs truncate">{item.keperluan}</TableCell>
                                        <TableCell>
                                            <Badge variant={item.status ? 'default' : 'secondary'}>
                                                {item.status ? 'Selesai' : 'Pending'}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex justify-end gap-2">
                                                <Button
                                                    variant={item.status ? "outline" : "default"}
                                                    size="sm"
                                                    onClick={() => handleToggleStatus(item.id, item.status, item.nama_lengkap)}
                                                    title={item.status ? "Ubah ke Pending" : "Tandai Selesai"}
                                                    className={item.status ? "text-red-600 hover:text-red-700 hover:bg-red-50" : "bg-green-600 hover:bg-green-700"}
                                                >
                                                    {item.status ? (
                                                        <XCircle className="h-4 w-4" />
                                                    ) : (
                                                        <CheckCircle className="h-4 w-4" />
                                                    )}
                                                </Button>
                                                <Link href={`/bukutamu/${item.id}/edit`}>
                                                    <Button variant="outline" size="sm">
                                                        <Edit className="h-4 w-4" />
                                                    </Button>
                                                </Link>
                                                <Button
                                                    variant="destructive"
                                                    size="sm"
                                                    onClick={() => handleDelete(item.id, item.nama_lengkap)}
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>

                    {bukutamu.last_page > 1 && (
                        <div className="flex items-center justify-between border-t p-4">
                            <div className="text-sm text-muted-foreground">
                                Menampilkan {(bukutamu.current_page - 1) * bukutamu.per_page + 1} -{' '}
                                {Math.min(bukutamu.current_page * bukutamu.per_page, bukutamu.total)} dari{' '}
                                {bukutamu.total} data
                            </div>
                            <div className="flex gap-1">
                                {bukutamu.links.map((link, index) => (
                                    <Button
                                        key={index}
                                        variant={link.active ? 'default' : 'outline'}
                                        size="sm"
                                        disabled={!link.url}
                                        onClick={() => link.url && router.get(link.url)}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
