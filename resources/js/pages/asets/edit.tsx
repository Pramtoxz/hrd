import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { toast } from 'sonner';
import Swal from 'sweetalert2';
import React from 'react';

interface Aset {
    id: number;
    kode_aset: string;
    nama_aset: string;
    spesifikasi: string;
    pemilik_aset: string;
    kritikalitas: string;
    lokasi: string;
    label: string;
    tanggal_perolehan: string;
    usia_aset: number;
    status: string;
    metode_pemusnahan: string;
    keterangan: string;
    foto_aset: string;
}

interface Props {
    aset: Aset;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Aset', href: '/asets' },
    { title: 'Edit Aset', href: '#' },
];

export default function AsetsEdit({ aset }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        kode_aset: aset.kode_aset,
        nama_aset: aset.nama_aset,
        spesifikasi: aset.spesifikasi || '',
        pemilik_aset: aset.pemilik_aset || '',
        kritikalitas: aset.kritikalitas,
        lokasi: aset.lokasi || '',
        label: aset.label || '',
        tanggal_perolehan: aset.tanggal_perolehan || '',
        usia_aset: aset.usia_aset?.toString() || '',
        status: aset.status,
        metode_pemusnahan: aset.metode_pemusnahan || '',
        keterangan: aset.keterangan || '',
        foto_aset: null as File | null,
        _method: 'PUT',
    });

    const [previewUrl, setPreviewUrl] = React.useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setData('foto_aset', file);
        
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result as string);
            };
            reader.readAsDataURL(file);
        } else {
            setPreviewUrl(null);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const result = await Swal.fire({
            title: 'Konfirmasi Update',
            text: 'Apakah Anda yakin ingin memperbarui aset ini?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3b82f6',
            cancelButtonColor: '#6b7280',
            confirmButtonText: 'Ya, Update!',
            cancelButtonText: 'Batal',
        });

        if (result.isConfirmed) {
            post(`/asets/${aset.id}`, {
                onSuccess: () => {
                    toast.success('Aset berhasil diperbarui');
                },
                onError: () => {
                    toast.error('Gagal memperbarui aset');
                },
            });
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Aset" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <h1 className="text-2xl font-bold">Edit Aset</h1>

                <div className="max-w-4xl rounded-lg border p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Kode Aset */}
                            <div className="space-y-2">
                                <Label htmlFor="kode_aset">Kode Aset *</Label>
                                <Input
                                    id="kode_aset"
                                    value={data.kode_aset}
                                    onChange={(e) => setData('kode_aset', e.target.value)}
                                    required
                                />
                                {errors.kode_aset && (
                                    <p className="text-sm text-red-500">{errors.kode_aset}</p>
                                )}
                            </div>

                            {/* Nama Aset */}
                            <div className="space-y-2">
                                <Label htmlFor="nama_aset">Nama Aset *</Label>
                                <Input
                                    id="nama_aset"
                                    value={data.nama_aset}
                                    onChange={(e) => setData('nama_aset', e.target.value)}
                                    required
                                />
                                {errors.nama_aset && (
                                    <p className="text-sm text-red-500">{errors.nama_aset}</p>
                                )}
                            </div>

                            {/* Pemilik Aset */}
                            <div className="space-y-2">
                                <Label htmlFor="pemilik_aset">Pemilik Aset</Label>
                                <Input
                                    id="pemilik_aset"
                                    value={data.pemilik_aset}
                                    onChange={(e) => setData('pemilik_aset', e.target.value)}
                                />
                                {errors.pemilik_aset && (
                                    <p className="text-sm text-red-500">{errors.pemilik_aset}</p>
                                )}
                            </div>

                            {/* Lokasi */}
                            <div className="space-y-2">
                                <Label htmlFor="lokasi">Lokasi</Label>
                                <Input
                                    id="lokasi"
                                    value={data.lokasi}
                                    onChange={(e) => setData('lokasi', e.target.value)}
                                />
                                {errors.lokasi && (
                                    <p className="text-sm text-red-500">{errors.lokasi}</p>
                                )}
                            </div>

                            {/* Kritikalitas */}
                            <div className="space-y-2">
                                <Label htmlFor="kritikalitas">Kritikalitas *</Label>
                                <Select
                                    value={data.kritikalitas}
                                    onValueChange={(value) => setData('kritikalitas', value)}
                                >
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Rendah">Rendah</SelectItem>
                                        <SelectItem value="Sedang">Sedang</SelectItem>
                                        <SelectItem value="Tinggi">Tinggi</SelectItem>
                                        <SelectItem value="Kritis">Kritis</SelectItem>
                                    </SelectContent>
                                </Select>
                                {errors.kritikalitas && (
                                    <p className="text-sm text-red-500">{errors.kritikalitas}</p>
                                )}
                            </div>

                            {/* Status */}
                            <div className="space-y-2">
                                <Label htmlFor="status">Status *</Label>
                                <Select
                                    value={data.status}
                                    onValueChange={(value) => setData('status', value)}
                                >
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Aktif">Aktif</SelectItem>
                                        <SelectItem value="Maintenance">Maintenance</SelectItem>
                                        <SelectItem value="Rusak">Rusak</SelectItem>
                                        <SelectItem value="Dihapus">Dihapus</SelectItem>
                                    </SelectContent>
                                </Select>
                                {errors.status && (
                                    <p className="text-sm text-red-500">{errors.status}</p>
                                )}
                            </div>

                            {/* Label */}
                            <div className="space-y-2">
                                <Label htmlFor="label">Label</Label>
                                <Input
                                    id="label"
                                    value={data.label}
                                    onChange={(e) => setData('label', e.target.value)}
                                />
                                {errors.label && (
                                    <p className="text-sm text-red-500">{errors.label}</p>
                                )}
                            </div>

                            {/* Tanggal Perolehan */}
                            <div className="space-y-2">
                                <Label htmlFor="tanggal_perolehan">Tanggal Perolehan</Label>
                                <Input
                                    id="tanggal_perolehan"
                                    type="date"
                                    value={data.tanggal_perolehan}
                                    onChange={(e) => setData('tanggal_perolehan', e.target.value)}
                                />
                                {errors.tanggal_perolehan && (
                                    <p className="text-sm text-red-500">{errors.tanggal_perolehan}</p>
                                )}
                            </div>

                            {/* Usia Aset */}
                            <div className="space-y-2">
                                <Label htmlFor="usia_aset">Usia Aset (Tahun)</Label>
                                <Input
                                    id="usia_aset"
                                    type="number"
                                    value={data.usia_aset}
                                    onChange={(e) => setData('usia_aset', e.target.value)}
                                    min="0"
                                />
                                {errors.usia_aset && (
                                    <p className="text-sm text-red-500">{errors.usia_aset}</p>
                                )}
                            </div>

                            {/* Metode Pemusnahan */}
                            <div className="space-y-2">
                                <Label htmlFor="metode_pemusnahan">Metode Pemusnahan</Label>
                                <Input
                                    id="metode_pemusnahan"
                                    value={data.metode_pemusnahan}
                                    onChange={(e) => setData('metode_pemusnahan', e.target.value)}
                                />
                                {errors.metode_pemusnahan && (
                                    <p className="text-sm text-red-500">{errors.metode_pemusnahan}</p>
                                )}
                            </div>
                        </div>

                        {/* Spesifikasi */}
                        <div className="space-y-2">
                            <Label htmlFor="spesifikasi">Spesifikasi</Label>
                            <Textarea
                                id="spesifikasi"
                                value={data.spesifikasi}
                                onChange={(e) => setData('spesifikasi', e.target.value)}
                                rows={3}
                            />
                            {errors.spesifikasi && (
                                <p className="text-sm text-red-500">{errors.spesifikasi}</p>
                            )}
                        </div>

                        {/* Keterangan */}
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

                        {/* Foto Aset */}
                        <div className="space-y-2">
                            <Label htmlFor="foto_aset">Foto Aset</Label>
                            {(previewUrl || aset.foto_aset) && (
                                <div className="mb-2">
                                    <img 
                                        src={previewUrl || `/assets/images/foto_aset/${aset.foto_aset}`} 
                                        alt={aset.nama_aset}
                                        className="h-48 w-48 object-cover rounded-lg border"
                                    />
                                    <p className="text-xs text-muted-foreground mt-1">
                                        {previewUrl ? 'Preview foto baru' : 'Foto saat ini'}
                                    </p>
                                </div>
                            )}
                            <Input
                                id="foto_aset"
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                            <p className="text-xs text-muted-foreground">
                                Format: JPG, PNG. Maksimal 2MB. Kosongkan jika tidak ingin mengubah foto.
                            </p>
                            {errors.foto_aset && (
                                <p className="text-sm text-red-500">{errors.foto_aset}</p>
                            )}
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
