import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { toast } from 'sonner';
import Swal from 'sweetalert2';

interface UserLevel {
    id: number;
    nama_level: string;
    kode_level: string;
    keterangan: string;
    status_aktif: boolean;
}

interface Props {
    userLevel: UserLevel;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Level User', href: '/user-levels' },
    { title: 'Edit Level', href: '#' },
];

export default function UserLevelsEdit({ userLevel }: Props) {
    const { data, setData, put, processing, errors } = useForm({
        nama_level: userLevel.nama_level,
        kode_level: userLevel.kode_level,
        keterangan: userLevel.keterangan || '',
        status_aktif: userLevel.status_aktif,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const result = await Swal.fire({
            title: 'Konfirmasi Update',
            text: 'Apakah Anda yakin ingin memperbarui level user ini?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3b82f6',
            cancelButtonColor: '#6b7280',
            confirmButtonText: 'Ya, Update!',
            cancelButtonText: 'Batal',
        });

        if (result.isConfirmed) {
            put(`/user-levels/${userLevel.id}`, {
                onSuccess: () => {
                    toast.success('Level user berhasil diperbarui');
                },
                onError: () => {
                    toast.error('Gagal memperbarui level user');
                },
            });
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Level User" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <h1 className="text-2xl font-bold">Edit Level User</h1>

                <div className="max-w-2xl rounded-lg border p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="nama_level">Nama Level</Label>
                            <Input
                                id="nama_level"
                                value={data.nama_level}
                                onChange={(e) => setData('nama_level', e.target.value)}
                                required
                            />
                            {errors.nama_level && (
                                <p className="text-sm text-red-500">{errors.nama_level}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="kode_level">Kode Level</Label>
                            <Input
                                id="kode_level"
                                value={data.kode_level}
                                onChange={(e) => setData('kode_level', e.target.value)}
                                required
                            />
                            {errors.kode_level && (
                                <p className="text-sm text-red-500">{errors.kode_level}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="keterangan">Keterangan</Label>
                            <Textarea
                                id="keterangan"
                                value={data.keterangan}
                                onChange={(e) => setData('keterangan', e.target.value)}
                                rows={3}
                            />
                            {errors.keterangan && (
                                <p className="text-sm text-red-500">{errors.keterangan}</p>
                            )}
                        </div>

                        <div className="flex items-center space-x-2">
                            <Switch
                                id="status_aktif"
                                checked={data.status_aktif}
                                onCheckedChange={(checked) => setData('status_aktif', checked)}
                            />
                            <Label htmlFor="status_aktif">Status Aktif</Label>
                        </div>

                        <div className="flex gap-2">
                            <Button type="submit" disabled={processing}>
                                Update
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => window.history.back()}
                            >
                                Batal
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
