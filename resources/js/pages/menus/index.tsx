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

interface Menu {
    id: number;
    nama_menu: string;
    ikon: string;
    url: string;
    urutan: number;
    status_aktif: boolean;
    parent?: {
        nama_menu: string;
    };
    children?: Menu[];
}

interface Props {
    menus: Menu[];
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Menu', href: '/menus' },
];

export default function MenusIndex({ menus }: Props) {
    const handleDelete = async (id: number, name: string) => {
        const result = await Swal.fire({
            title: 'Konfirmasi Hapus',
            text: `Apakah Anda yakin ingin menghapus menu "${name}"?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ef4444',
            cancelButtonColor: '#6b7280',
            confirmButtonText: 'Ya, Hapus!',
            cancelButtonText: 'Batal',
        });

        if (result.isConfirmed) {
            router.delete(`/menus/${id}`, {
                onSuccess: () => {
                    toast.success(`${name} berhasil dihapus`);
                },
                onError: () => {
                    toast.error('Gagal menghapus menu');
                },
            });
        }
    };

    const renderMenuRow = (menu: Menu, isChild = false) => (
        <>
            <TableRow key={menu.id}>
                <TableCell className={isChild ? 'pl-8' : ''}>
                    {isChild && '└─ '}
                    <span className="font-medium">{menu.nama_menu}</span>
                </TableCell>
                <TableCell>
                    <code className="rounded bg-muted px-2 py-1 text-sm">{menu.ikon}</code>
                </TableCell>
                <TableCell>{menu.url || '-'}</TableCell>
                <TableCell>{menu.urutan}</TableCell>
                <TableCell>
                    {menu.status_aktif ? (
                        <Badge variant="default">Aktif</Badge>
                    ) : (
                        <Badge variant="destructive">Nonaktif</Badge>
                    )}
                </TableCell>
                <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm" asChild>
                            <Link href={`/menus/${menu.id}/edit`}>
                                <Pencil className="h-4 w-4" />
                            </Link>
                        </Button>
                        <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleDelete(menu.id, menu.nama_menu)}
                        >
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    </div>
                </TableCell>
            </TableRow>
            {menu.children?.map((child) => renderMenuRow(child, true))}
        </>
    );

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Menu" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Menu</h1>
                    <Button asChild>
                        <Link href="/menus/create">
                            <Plus className="mr-2 h-4 w-4" />
                            Tambah Menu
                        </Link>
                    </Button>
                </div>

                <div className="rounded-lg border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Nama Menu</TableHead>
                                <TableHead>Icon</TableHead>
                                <TableHead>URL</TableHead>
                                <TableHead>Urutan</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Aksi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {menus.map((menu) => renderMenuRow(menu))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </AppLayout>
    );
}
