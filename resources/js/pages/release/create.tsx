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
import { Checkbox } from '@/components/ui/checkbox';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { toast } from 'sonner';
import Swal from 'sweetalert2';
import React from 'react';
import { X } from 'lucide-react';

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

interface Props {
    pressReleases: PressRelease[];
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Release', href: '/release' },
    { title: 'Buat Release', href: '/release/create' },
];

export default function ReleaseCreate({ pressReleases }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        judul: '',
        isi_berita: '',
        tanggal_publikasi: new Date().toISOString().split('T')[0],
        press_release_id: '',
        use_press_release_photos: false,
        foto1: null as File | null,
        foto2: null as File | null,
        foto3: null as File | null,
        foto4: null as File | null,
        foto5: null as File | null,
        deskripsi_foto1: '',
        deskripsi_foto2: '',
        deskripsi_foto3: '',
        deskripsi_foto4: '',
        deskripsi_foto5: '',
    });

    const [previews, setPreviews] = React.useState<{ [key: string]: string }>({});
    const [prPhotos, setPrPhotos] = React.useState<{ [key: string]: string }>({});
    const [prDescriptions, setPrDescriptions] = React.useState<{ [key: string]: string }>({});
    const [selectedPR, setSelectedPR] = React.useState<PressRelease | null>(null);

    const handlePressReleaseChange = async (value: string) => {
        setData('press_release_id', value);
        
        if (value) {
            const pr = pressReleases.find(p => p.id.toString() === value);
            setSelectedPR(pr || null);
            
            try {
                const response = await fetch(`/release/press-release-photos/${value}`);
                const data = await response.json();
                setPrPhotos(data.photos || {});
                setPrDescriptions(data.descriptions || {});
            } catch (error) {
                console.error('Failed to fetch photos:', error);
                setPrPhotos({});
                setPrDescriptions({});
            }
        } else {
            setSelectedPR(null);
            setPrPhotos({});
            setPrDescriptions({});
            setData('use_press_release_photos', false);
        }
    };

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const result = await Swal.fire({
            title: 'Konfirmasi Simpan',
            text: 'Apakah Anda yakin ingin membuat release ini?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3b82f6',
            cancelButtonColor: '#6b7280',
            confirmButtonText: 'Ya, Simpan!',
            cancelButtonText: 'Batal',
        });

        if (result.isConfirmed) {
            post('/release', {
                forceFormData: true,
                onSuccess: () => {
                    toast.success('Release berhasil dibuat');
                },
                onError: () => {
                    toast.error('Gagal membuat release');
                },
            });
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Form Release" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <h1 className="text-2xl font-bold">Form Release</h1>

                <div className="max-w-4xl rounded-lg border p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Pilih Press Release */}
                        <div className="space-y-2">
                            <Label htmlFor="press_release_id">Sumber Press Release (Opsional)</Label>
                            <Select value={data.press_release_id || undefined} onValueChange={handlePressReleaseChange}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Pilih Press Release sebagai referensi (atau kosongkan untuk manual)" />
                                </SelectTrigger>
                                <SelectContent>
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
                                Pilih press release sebagai referensi untuk menulis release ini
                            </p>
                        </div>

                        {/* Detail Press Release */}
                        {selectedPR && (
                            <div className="p-4 border rounded-lg bg-muted/30 space-y-4">
                                <h3 className="font-semibold text-sm">Referensi Press Release:</h3>
                                <div className="space-y-4">
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
                                    <div className="space-y-4 border-t pt-4">
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

                        {/* Foto Options */}
                        {data.press_release_id && Object.keys(prPhotos).length > 0 && (
                            <div className="space-y-4 p-4 border rounded-lg bg-muted/50">
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="use_press_release_photos"
                                        checked={data.use_press_release_photos}
                                        onCheckedChange={(checked) => setData('use_press_release_photos', checked as boolean)}
                                    />
                                    <Label htmlFor="use_press_release_photos" className="cursor-pointer">
                                        Gunakan foto dari Press Release
                                    </Label>
                                </div>
                                
                                {data.use_press_release_photos && (
                                    <div>
                                        <p className="text-sm text-muted-foreground mb-2">
                                            Foto dari Press Release ({Object.keys(prPhotos).length} foto):
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {Object.entries(prPhotos).map(([key, url]) => {
                                                const descKey = key.replace('foto', 'deskripsi_foto');
                                                const description = prDescriptions[descKey];
                                                return (
                                                    <div key={key} className="space-y-2">
                                                        <img 
                                                            src={url} 
                                                            alt={key}
                                                            className="h-32 w-full object-cover rounded border"
                                                        />
                                                        {description && (
                                                            <p className="text-xs text-muted-foreground p-2 bg-muted/50 rounded">
                                                                {description}
                                                            </p>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Upload Foto Manual */}
                        <div className="space-y-4">
                            <Label>
                                {data.use_press_release_photos 
                                    ? `Upload Foto Tambahan (Maksimal ${5 - Object.keys(prPhotos).length} foto lagi)`
                                    : 'Upload Foto dan Deskripsi (Maksimal 5)'}
                            </Label>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[1, 2, 3, 4, 5].map((num) => {
                                    const key = `foto${num}`;
                                    const descKey = `deskripsi_foto${num}`;
                                    const prPhotoCount = Object.keys(prPhotos).length;
                                    const isDisabled = data.use_press_release_photos && num <= prPhotoCount;
                                    
                                    if (isDisabled) return null;
                                    
                                    return (
                                        <div key={key} className="space-y-3 p-4 border rounded-lg">
                                            <h4 className="font-medium text-sm">
                                                Foto {data.use_press_release_photos ? num - prPhotoCount : num}
                                            </h4>
                                            {previews[key] ? (
                                                <div className="relative">
                                                    <img 
                                                        src={previews[key]} 
                                                        alt={`Preview ${num}`}
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
                                            ) : (
                                                <div className="h-32 border-2 border-dashed rounded-lg flex items-center justify-center">
                                                    <label htmlFor={key} className="cursor-pointer text-center p-2">
                                                        <p className="text-xs text-muted-foreground">
                                                            Upload Foto {data.use_press_release_photos ? num - prPhotoCount : num}
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
                                                <Label htmlFor={descKey} className="text-xs">
                                                    Deskripsi Foto {data.use_press_release_photos ? num - prPhotoCount : num}
                                                </Label>
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
                                Format: JPG, PNG. Maksimal 2MB per foto. Deskripsi foto bersifat opsional.
                                {data.use_press_release_photos && ` (Sudah ada ${Object.keys(prPhotos).length} foto dari Press Release)`}
                            </p>
                        </div>

                        <div className="flex gap-2">
                            <Button type="submit" disabled={processing}>
                                Simpan
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
