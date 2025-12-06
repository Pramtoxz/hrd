import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { toast } from 'sonner';
import Swal from 'sweetalert2';
import React from 'react';
import { X } from 'lucide-react';

interface Release {
    id: number;
    judul: string;
    isi_berita: string;
    tanggal_publikasi: string;
    status: boolean;
    press_release?: {
        what: string;
    };
    fotos?: {
        foto1?: string;
        foto2?: string;
        foto3?: string;
        foto4?: string;
        foto5?: string;
    }[];
}

interface Props {
    release: Release;
    isAdmin: boolean;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Release', href: '/release' },
    { title: 'Edit Release', href: '#' },
];

export default function ReleaseEdit({ release, isAdmin }: Props) {
    // Format tanggal ke YYYY-MM-DD untuk input date
    const formatDateForInput = (dateString: string) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toISOString().split('T')[0];
    };

    const { data, setData, post, processing, errors } = useForm({
        judul: release.judul || '',
        isi_berita: release.isi_berita || '',
        tanggal_publikasi: formatDateForInput(release.tanggal_publikasi) || '',
        status: release.status || false,
        foto1: null as File | null,
        foto2: null as File | null,
        foto3: null as File | null,
        foto4: null as File | null,
        foto5: null as File | null,
        _method: 'PUT',
    });

    const [previews, setPreviews] = React.useState<{ [key: string]: string }>({});
    const [deletedPhotos, setDeletedPhotos] = React.useState<string[]>([]);
    const existingPhotos = release.fotos?.[0] || {};

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
        const file = e.target.files?.[0] || null;
        setData(key as any, file);
        
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviews(prev => ({ ...prev, [key]: reader.result as string }));
            };
            reader.readAsDataURL(file);
        } else {
            setPreviews(prev => {
                const newPreviews = { ...prev };
                delete newPreviews[key];
                return newPreviews;
            });
        }
    };

    const removeFile = (key: string) => {
        setData(key as any, null);
        setPreviews(prev => {
            const newPreviews = { ...prev };
            delete newPreviews[key];
            return newPreviews;
        });
    };

    const removeExistingPhoto = (key: string) => {
        setDeletedPhotos(prev => [...prev, key]);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const result = await Swal.fire({
            title: 'Konfirmasi Update',
            text: 'Apakah Anda yakin ingin mengupdate release ini?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3b82f6',
            cancelButtonColor: '#6b7280',
            confirmButtonText: 'Ya, Update!',
            cancelButtonText: 'Batal',
        });

        if (result.isConfirmed) {
            setData('deleted_photos' as any, deletedPhotos);
            setTimeout(() => {
                post(`/release/${release.id}`, {
                    forceFormData: true,
                    onSuccess: () => {
                        toast.success('Release berhasil diupdate');
                    },
                    onError: () => {
                        toast.error('Gagal mengupdate release');
                    },
                });
            }, 100);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Release" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <h1 className="text-2xl font-bold">Edit Release</h1>

                <div className="max-w-4xl rounded-lg border p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Info Press Release */}
                        {release.press_release && (
                            <div className="p-4 bg-muted rounded-lg">
                                <p className="text-sm text-muted-foreground">
                                    Sumber: <span className="font-medium text-foreground">{release.press_release.what}</span>
                                </p>
                            </div>
                        )}

                        {/* Judul */}
                        <div className="space-y-2">
                            <Label htmlFor="judul">Judul *</Label>
                            <Input
                                id="judul"
                                value={data.judul}
                                onChange={(e) => setData('judul', e.target.value)}
                                placeholder="Masukkan judul release"
                                required
                            />
                            {errors.judul && <p className="text-sm text-red-500">{errors.judul}</p>}
                        </div>

                        {/* Isi Berita */}
                        <div className="space-y-2">
                            <Label htmlFor="isi_berita">Isi Berita *</Label>
                            <Textarea
                                id="isi_berita"
                                value={data.isi_berita}
                                onChange={(e) => setData('isi_berita', e.target.value)}
                                placeholder="Tulis isi berita lengkap"
                                rows={20}
                                className="min-h-[400px]"
                                required
                            />
                            {errors.isi_berita && <p className="text-sm text-red-500">{errors.isi_berita}</p>}
                        </div>

                        {/* Tanggal Publikasi */}
                        <div className="space-y-2">
                            <Label htmlFor="tanggal_publikasi">Tanggal Publikasi *</Label>
                            <Input
                                id="tanggal_publikasi"
                                type="date"
                                value={data.tanggal_publikasi}
                                onChange={(e) => setData('tanggal_publikasi', e.target.value)}
                                required
                            />
                            {errors.tanggal_publikasi && <p className="text-sm text-red-500">{errors.tanggal_publikasi}</p>}
                        </div>

                        {/* Status (Admin Only) */}
                        {isAdmin && (
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="status"
                                    checked={data.status}
                                    onCheckedChange={(checked) => setData('status', checked as boolean)}
                                />
                                <Label htmlFor="status" className="cursor-pointer">
                                    Setujui Release
                                </Label>
                            </div>
                        )}

                        {/* Foto */}
                        <div className="space-y-4">
                            <Label>Foto (Maksimal 5)</Label>
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                {[1, 2, 3, 4, 5].map((num) => {
                                    const key = `foto${num}` as keyof typeof existingPhotos;
                                    const existingPhoto = existingPhotos[key];
                                    const preview = previews[key];
                                    const isDeleted = deletedPhotos.includes(key);
                                    
                                    return (
                                        <div key={key} className="space-y-2">
                                            {preview ? (
                                                // New uploaded photo preview
                                                <div className="relative">
                                                    <img 
                                                        src={preview}
                                                        alt={`Foto ${num}`}
                                                        className="h-32 w-full object-cover rounded-lg border"
                                                    />
                                                    <Button
                                                        type="button"
                                                        variant="destructive"
                                                        size="sm"
                                                        className="absolute top-1 right-1"
                                                        onClick={() => removeFile(key)}
                                                    >
                                                        <X className="h-3 w-3" />
                                                    </Button>
                                                </div>
                                            ) : existingPhoto && !isDeleted ? (
                                                // Existing photo
                                                <div className="relative">
                                                    <img 
                                                        src={`/assets/images/release/${existingPhoto}`}
                                                        alt={`Foto ${num}`}
                                                        className="h-32 w-full object-cover rounded-lg border"
                                                    />
                                                    <Button
                                                        type="button"
                                                        variant="destructive"
                                                        size="sm"
                                                        className="absolute top-1 right-1"
                                                        onClick={() => removeExistingPhoto(key)}
                                                    >
                                                        <X className="h-3 w-3" />
                                                    </Button>
                                                </div>
                                            ) : (
                                                // Upload new photo
                                                <div className="h-32 border-2 border-dashed rounded-lg flex items-center justify-center">
                                                    <label htmlFor={key} className="cursor-pointer text-center p-2">
                                                        <p className="text-xs text-muted-foreground">
                                                            {isDeleted ? 'Upload Foto Baru' : `Foto ${num}`}
                                                        </p>
                                                        <Input
                                                            id={key}
                                                            type="file"
                                                            accept="image/*"
                                                            onChange={(e) => handleFileChange(e, key)}
                                                            className="hidden"
                                                        />
                                                    </label>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Format: JPG, PNG. Maksimal 2MB per foto. Upload foto baru untuk mengganti foto lama.
                            </p>
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
