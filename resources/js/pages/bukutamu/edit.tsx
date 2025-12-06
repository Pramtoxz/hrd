import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { toast } from 'sonner';

interface Props {
    bukutamu: {
        id: number;
        nama_lengkap: string;
        instansi: string;
        tanggal: string;
        nomor_telepon: string;
        bertemu_dengan: string;
        keperluan: string;
        status: boolean;
    };
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Buku Tamu', href: '/bukutamu' },
    { title: 'Edit Buku Tamu', href: '#' },
];

export default function BukuTamuEdit({ bukutamu }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        nama_lengkap: bukutamu.nama_lengkap,
        instansi: bukutamu.instansi,
        tanggal: bukutamu.tanggal,
        nomor_telepon: bukutamu.nomor_telepon,
        bertemu_dengan: bukutamu.bertemu_dengan,
        keperluan: bukutamu.keperluan,
        status: bukutamu.status,
        _method: 'PUT',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(`/bukutamu/${bukutamu.id}`, {
            onSuccess: () => {
                toast.success('Data buku tamu berhasil diupdate');
            },
            onError: () => {
                toast.error('Gagal mengupdate data buku tamu');
            },
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Buku Tamu" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <h1 className="text-2xl font-bold">Edit Buku Tamu</h1>

                <div className="max-w-2xl rounded-lg border p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="flex items-center space-x-2 p-4 bg-muted rounded-lg">
                            <Switch
                                id="status"
                                checked={data.status}
                                onCheckedChange={(checked) => setData('status', checked)}
                            />
                            <Label htmlFor="status" className="cursor-pointer">
                                Status: {data.status ? 'Selesai' : 'Pending'}
                            </Label>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="nama_lengkap">Nama Lengkap *</Label>
                            <Input
                                id="nama_lengkap"
                                value={data.nama_lengkap}
                                onChange={(e) => setData('nama_lengkap', e.target.value)}
                                placeholder="Masukkan nama lengkap"
                                required
                            />
                            {errors.nama_lengkap && <p className="text-sm text-red-500">{errors.nama_lengkap}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="instansi">Instansi *</Label>
                            <Input
                                id="instansi"
                                value={data.instansi}
                                onChange={(e) => setData('instansi', e.target.value)}
                                placeholder="Masukkan nama instansi"
                                required
                            />
                            {errors.instansi && <p className="text-sm text-red-500">{errors.instansi}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="tanggal">Tanggal *</Label>
                            <Input
                                id="tanggal"
                                type="date"
                                value={data.tanggal}
                                onChange={(e) => setData('tanggal', e.target.value)}
                                required
                            />
                            {errors.tanggal && <p className="text-sm text-red-500">{errors.tanggal}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="nomor_telepon">Nomor Telepon *</Label>
                            <Input
                                id="nomor_telepon"
                                value={data.nomor_telepon}
                                onChange={(e) => setData('nomor_telepon', e.target.value)}
                                placeholder="Contoh: 08123456789"
                                required
                            />
                            {errors.nomor_telepon && <p className="text-sm text-red-500">{errors.nomor_telepon}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="bertemu_dengan">Bertemu Dengan *</Label>
                            <Input
                                id="bertemu_dengan"
                                value={data.bertemu_dengan}
                                onChange={(e) => setData('bertemu_dengan', e.target.value)}
                                placeholder="Nama orang yang ditemui"
                                required
                            />
                            {errors.bertemu_dengan && <p className="text-sm text-red-500">{errors.bertemu_dengan}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="keperluan">Keperluan *</Label>
                            <Textarea
                                id="keperluan"
                                value={data.keperluan}
                                onChange={(e) => setData('keperluan', e.target.value)}
                                placeholder="Jelaskan keperluan kunjungan"
                                rows={4}
                                required
                            />
                            {errors.keperluan && <p className="text-sm text-red-500">{errors.keperluan}</p>}
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
