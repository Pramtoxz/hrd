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
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import Swal from 'sweetalert2';

interface UserLevel {
    id: number;
    nama_level: string;
    kode_level: string;
    keterangan: string;
    status_aktif: boolean;
    users_count: number;
}

interface Props {
    userLevels: UserLevel[];
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Level User', href: '/user-levels' },
];

export default function UserLevelsIndex({ userLevels }: Props) {
    const handleDelete = async (id: number, name: string) => {
        const result = await Swal.fire({
            title: 'Konfirmasi Hapus',
            text: `Apakah Anda yakin ingin menghapus level "${name}"?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ef4444',
            cancelButtonColor: '#6b7280',
            confirmButtonText: 'Ya, Hapus!',
            cancelButtonText: 'Batal',
        });

        if (result.isConfirmed) {
            router.delete(`/user-levels/${id}`, {
                onSuccess: () => {
                    toast.success(`${name} berhasil dihapus`);
                },
                onError: () => {
                    toast.error('Gagal menghapus level user');
                },
            });
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Level User" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Level User</h1>
                    <Button asChild>
                        <Link href="/user-levels/create">
                            <Plus className="mr-2 h-4 w-4" />
                            Tambah Level
                        </Link>
                    </Button>
                </div>

                <div className="rounded-lg border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Nama Level</TableHead>
                                <TableHead>Kode</TableHead>
                                <TableHead>Keterangan</TableHead>
                                <TableHead>Jumlah User</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Aksi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {userLevels.map((level) => (
                                <TableRow key={level.id}>
                                    <TableCell className="font-medium">{level.nama_level}</TableCell>
                                    <TableCell>
                                        <code className="rounded bg-muted px-2 py-1 text-sm">
                                            {level.kode_level}
                                        </code>
                                    </TableCell>
                                    <TableCell>{level.keterangan}</TableCell>
                                    <TableCell>
                                        <Badge variant="secondary">{level.users_count} user</Badge>
                                    </TableCell>
                                    <TableCell>
                                        {level.status_aktif ? (
                                            <Badge variant="default">Aktif</Badge>
                                        ) : (
                                            <Badge variant="destructive">Nonaktif</Badge>
                                        )}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-2">
                                            <Button variant="outline" size="sm" asChild>
                                                <Link href={`/user-levels/${level.id}/edit`}>
                                                    <Pencil className="h-4 w-4" />
                                                </Link>
                                            </Button>
                                            <Button
                                                variant="destructive"
                                                size="sm"
                                                onClick={() => handleDelete(level.id, level.nama_level)}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </AppLayout>
    );
}
