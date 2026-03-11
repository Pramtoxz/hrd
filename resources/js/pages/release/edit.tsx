import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
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
import { X } from 'lucide-react';
import { compressImage, formatFileSize } from '@/utils/imageCompressor';

interface PressRelease {
    id: number;
    what: string;
    who: string;
    when: string;
    where: string;
    why: string;
    how: string;
    pemberi_kutipan_1?: string;
    isi_kutipan_1?: string;
    pemberi_kutipan_2?: string;
    isi_kutipan_2?: string;
    pemberi_kutipan_3?: string;
    isi_kutipan_3?: string;
    status: boolean;
}

interface Release {
    id: number;
    judul: string;
    isi_berita: string;
    tanggal_publikasi: string;
    status: boolean;
    press_release_id?: number;
    press_release?: PressRelease;
    fotos?: {
        foto1?: string;
        foto2?: string;
        foto3?: string;
        foto4?: string;
        foto5?: string;
        deskripsi_foto1?: string;
        deskripsi_foto2?: string;
        deskripsi_foto3?: string;
        deskripsi_foto4?: string;
        deskripsi_foto5?: string;
    }[];
}

interface Props {
    release: Release;
    pressReleases: PressRelease[];
    isAdmin: boolean;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Release', href: '/release' },
    { title: 'Edit Release', href: '#' },
];

export default function ReleaseEdit({ release, pressReleases, isAdmin }: Props) {
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
        press_release_id: release.press_release_id?.toString() || 'none',
        status: release.status || false,
        foto1: null as File | null,
        foto2: null as File | null,
        foto3: null as File | null,
        foto4: null as File | null,
        foto5: null as File | null,
        deskripsi_foto1: release.fotos?.[0]?.deskripsi_foto1 || '',
        deskripsi_foto2: release.fotos?.[0]?.deskripsi_foto2 || '',
        deskripsi_foto3: release.fotos?.[0]?.deskripsi_foto3 || '',
        deskripsi_foto4: release.fotos?.[0]?.deskripsi_foto4 || '',
        deskripsi_foto5: release.fotos?.[0]?.deskripsi_foto5 || '',
        _method: 'PUT',
    });

    const [previews, setPreviews] = React.useState<{ [key: string]: string }>({});
    const [deletedPhotos, setDeletedPhotos] = React.useState<string[]>([]);
    const [selectedPR, setSelectedPR] = React.useState<PressRelease | null>(release.press_release || null);
    const [showPRDetail, setShowPRDetail] = React.useState(false);
    const existingPhotos = release.fotos?.[0] || {};

    const handlePressReleaseChange = (value: string) => {
        if (value === 'none') {
            setData('press_release_id', 'none');
            setSelectedPR(null);
        } else {
            setData('press_release_id', value);
            const pr = pressReleases.find(p => p.id.toString() === value);
            setSelectedPR(pr || null);
        }
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
        const file = e.target.files?.[0] || null;
        
        if (!file) {
            setData(key as any, null);
            setPreviews(prev => {
                const newPreviews = { ...prev };
                delete newPreviews[key];
                return newPreviews;
            });
            return;
        }
        
        try {
            // Show loading toast
            const originalSize = formatFileSize(file.size);
            const loadingToast = toast.loading(`Memproses ${file.name} (${originalSize})...`);
            
            // Compress image if needed (target: 1.9MB with highest quality possible)
            const compressedFile = await compressImage(file, 1.9, 3840);
            const compressedSize = formatFileSize(compressedFile.size);
            
            // Dismiss loading toast
            toast.dismiss(loadingToast);
            
            // Show compression result if file was compressed
            if (compressedFile.size < file.size) {
                toast.success(`Foto berhasil dikompres: ${originalSize} → ${compressedSize}`);
            }
            
            setData(key as any, compressedFile);
            
            // Create preview
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviews(prev => ({ ...prev, [key]: reader.result as string }));
            };
            reader.readAsDataURL(compressedFile);
        } catch (error) {
            console.error('Error processing image:', error);
            toast.error('Gagal memproses foto. Silakan coba lagi.');
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
            // Convert 'none' to empty string for backend
            if (data.press_release_id === 'none') {
                setData('press_release_id', '');
            }
            
            setData('deleted_photos' as any, deletedPhotos);
            setTimeout(() => {
                post(`/release/${release.id}`, {
                    forceFormData: true,
                    onSuccess: () => {
                        toast.success('Release berhasil diupdate');
                    },
                    onError: (errors) => {
                        // Translate field names to Indonesian
                        const fieldTranslations: { [key: string]: string } = {
                            'judul': 'Judul',
                            'isi_berita': 'Isi Berita',
                            'tanggal_publikasi': 'Tanggal Publikasi',
                            'press_release_id': 'Sumber Press Release',
                            'foto1': 'Foto 1',
                            'foto2': 'Foto 2',
                            'foto3': 'Foto 3',
                            'foto4': 'Foto 4',
                            'foto5': 'Foto 5',
                            'deskripsi_foto1': 'Deskripsi Foto 1',
                            'deskripsi_foto2': 'Deskripsi Foto 2',
                            'deskripsi_foto3': 'Deskripsi Foto 3',
                            'deskripsi_foto4': 'Deskripsi Foto 4',
                            'deskripsi_foto5': 'Deskripsi Foto 5',
                        };
                        
                        const errorList = Object.entries(errors)
                            .map(([key, value]) => {
                                const fieldName = fieldTranslations[key] || key.replace(/_/g, ' ');
                                return `<div style="margin: 8px 0; padding: 8px; background: #fee; border-left: 3px solid #f87171; border-radius: 4px;">
                                    <strong style="color: #991b1b;">${fieldName}:</strong>
                                    <span style="color: #7f1d1d; margin-left: 8px;">${value}</span>
                                </div>`;
                            })
                            .join('');
                        
                        Swal.fire({
                            icon: 'error',
                            title: '<span style="color: #991b1b;">Validasi Gagal</span>',
                            html: `<div style="text-align: left; max-height: 400px; overflow-y: auto;">
                                <p style="margin-bottom: 16px; color: #374151; font-size: 14px;">Mohon perbaiki kesalahan berikut:</p>
                                ${errorList}
                            </div>`,
                            confirmButtonText: 'Mengerti',
                            confirmButtonColor: '#dc2626',
                            customClass: {
                                popup: 'swal-wide',
                                htmlContainer: 'swal-html-container'
                            }
                        });
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
                        {/* Pilih Press Release */}
                        <div className="space-y-2">
                            <Label htmlFor="press_release_id">Sumber Press Release (Opsional)</Label>
                            <Select value={data.press_release_id} onValueChange={handlePressReleaseChange}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Pilih Press Release sebagai referensi (atau kosongkan untuk manual)" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="none">Tidak ada referensi (Manual)</SelectItem>
                                    {pressReleases.length > 0 ? (
                                        pressReleases.map((pr) => (
                                            <SelectItem key={pr.id} value={pr.id.toString()}>
                                                <div className="flex flex-col">
                                                    <span className="font-medium truncate max-w-[300px]">
                                                        {pr.what.length > 50 ? `${pr.what.substring(0, 50)}...` : pr.what}
                                                    </span>
                                                    <span className="text-xs text-muted-foreground">
                                                        {pr.who.length > 30 ? `${pr.who.substring(0, 30)}...` : pr.who} • {pr.when.length > 20 ? `${pr.when.substring(0, 20)}...` : pr.when}
                                                    </span>
                                                </div>
                                            </SelectItem>
                                        ))
                                    ) : (
                                        <div className="p-2 text-sm text-muted-foreground text-center">
                                            Tidak ada Press Release yang tersedia
                                        </div>
                                    )}
                                </SelectContent>
                            </Select>
                            <p className="text-xs text-muted-foreground">
                                Pilih press release sebagai referensi untuk release ini
                            </p>
                        </div>

                        {/* Detail Press Release */}
                        {selectedPR && (
                            <div className="p-4 border rounded-lg bg-muted/30 space-y-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-semibold text-sm">Referensi Press Release</h3>
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => setShowPRDetail(!showPRDetail)}
                                        className="text-xs"
                                    >
                                        {showPRDetail ? 'Sembunyikan Detail' : 'Lihat Detail'}
                                    </Button>
                                </div>
                                
                                {/* Ringkasan singkat */}
                                <div className="text-sm text-muted-foreground space-y-1">
                                    <p><span className="font-medium">What:</span> {selectedPR.what.length > 100 ? `${selectedPR.what.substring(0, 100)}...` : selectedPR.what}</p>
                                    <p><span className="font-medium">Who:</span> {selectedPR.who.length > 80 ? `${selectedPR.who.substring(0, 80)}...` : selectedPR.who}</p>
                                </div>
                                
                                {/* Detail lengkap */}
                                {showPRDetail && (
                                    <div className="space-y-4 border-t pt-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-3">
                                                <div>
                                                    <span className="font-medium text-sm">What (Apa):</span>
                                                    <p className="text-sm text-muted-foreground mt-1 whitespace-pre-wrap">{selectedPR.what}</p>
                                                </div>
                                                <div>
                                                    <span className="font-medium text-sm">Who (Siapa):</span>
                                                    <p className="text-sm text-muted-foreground mt-1 whitespace-pre-wrap">{selectedPR.who}</p>
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                <div>
                                                    <span className="font-medium text-sm">When (Kapan):</span>
                                                    <p className="text-sm text-muted-foreground mt-1 whitespace-pre-wrap">{selectedPR.when}</p>
                                                </div>
                                                <div>
                                                    <span className="font-medium text-sm">Where (Dimana):</span>
                                                    <p className="text-sm text-muted-foreground mt-1 whitespace-pre-wrap">{selectedPR.where}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div>
                                                <span className="font-medium text-sm">Why (Mengapa):</span>
                                                <p className="text-sm text-muted-foreground mt-1 whitespace-pre-wrap">{selectedPR.why}</p>
                                            </div>
                                            <div>
                                                <span className="font-medium text-sm">How (Bagaimana):</span>
                                                <p className="text-sm text-muted-foreground mt-1 whitespace-pre-wrap">{selectedPR.how}</p>
                                            </div>
                                            {(selectedPR.pemberi_kutipan_1 || selectedPR.pemberi_kutipan_2 || selectedPR.pemberi_kutipan_3) && (
                                                <div className="space-y-3">
                                                    <span className="font-medium text-sm">Kutipan:</span>
                                                    {[1, 2, 3].map((num) => {
                                                        const pemberi = selectedPR[`pemberi_kutipan_${num}` as keyof PressRelease] as string;
                                                        const isi = selectedPR[`isi_kutipan_${num}` as keyof PressRelease] as string;
                                                        
                                                        if (!pemberi && !isi) return null;
                                                        
                                                        return (
                                                            <div key={num} className="pl-4 border-l-2 border-muted space-y-1">
                                                                {pemberi && (
                                                                    <p className="text-sm font-medium whitespace-pre-wrap">{pemberi}</p>
                                                                )}
                                                                {isi && (
                                                                    <p className="text-sm text-muted-foreground italic whitespace-pre-wrap">"{isi}"</p>
                                                                )}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Judul */}
                        <div className="space-y-2">
                            <Label htmlFor="judul">Judul *</Label>
                            <Textarea
                                id="judul"
                                value={data.judul}
                                onChange={(e) => setData('judul', e.target.value)}
                                placeholder="Masukkan judul release"
                                rows={3}
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

                        {/* Foto dan Deskripsi */}
                        <div className="space-y-4">
                            <Label>Foto dan Deskripsi (Maksimal 5)</Label>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[1, 2, 3, 4, 5].map((num) => {
                                    const key = `foto${num}` as keyof typeof existingPhotos;
                                    const descKey = `deskripsi_foto${num}`;
                                    const existingPhoto = existingPhotos[key];
                                    const preview = previews[key];
                                    const isDeleted = deletedPhotos.includes(key);
                                    
                                    return (
                                        <div key={key} className="space-y-3 p-4 border rounded-lg">
                                            <h4 className="font-medium text-sm">Foto {num}</h4>
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
                                                            {isDeleted ? 'Upload Foto Baru' : `Upload Foto ${num}`}
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
                                            <div className="space-y-2">
                                                <Label htmlFor={descKey} className="text-xs">Deskripsi Foto {num}</Label>
                                                <Textarea
                                                    id={descKey}
                                                    value={data[descKey as keyof typeof data] as string}
                                                    onChange={(e) => setData(descKey as any, e.target.value)}
                                                    placeholder="Deskripsi foto (opsional)"
                                                    rows={2}
                                                    className="text-xs"
                                                />
                                                {errors[descKey as keyof typeof errors] && (
                                                    <p className="text-xs text-red-500">{errors[descKey as keyof typeof errors]}</p>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Format: JPG, PNG. Maksimal 2MB per foto. Upload foto baru untuk mengganti foto lama. Deskripsi foto bersifat opsional.
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
