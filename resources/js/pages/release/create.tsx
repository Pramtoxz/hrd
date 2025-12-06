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
    pemberi_kutipan?: string;
    isi_kutipan?: string;
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
    });

    const [previews, setPreviews] = React.useState<{ [key: string]: string }>({});
    const [prPhotos, setPrPhotos] = React.useState<{ [key: string]: string }>({});
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
            } catch (error) {
                console.error('Failed to fetch photos:', error);
                setPrPhotos({});
            }
        } else {
            setSelectedPR(null);
            setPrPhotos({});
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
                                                {pr.what} - {pr.who} ({pr.when})
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
                            <div className="p-4 border rounded-lg bg-muted/30 space-y-3">
                                <h3 className="font-semibold text-sm">Referensi Press Release:</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                    <div>
                                        <span className="font-medium">What:</span> {selectedPR.what}
                                    </div>
                                    <div>
                                        <span className="font-medium">Who:</span> {selectedPR.who}
                                    </div>
                                    <div>
                                        <span className="font-medium">When:</span> {selectedPR.when}
                                    </div>
                                    <div>
                                        <span className="font-medium">Where:</span> {selectedPR.where}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div>
                                        <span className="font-medium">Why:</span>
                                        <p className="text-muted-foreground mt-1">{selectedPR.why}</p>
                                    </div>
                                    <div>
                                        <span className="font-medium">How:</span>
                                        <p className="text-muted-foreground mt-1">{selectedPR.how}</p>
                                    </div>
                                    {selectedPR.pemberi_kutipan && (
                                        <div>
                                            <span className="font-medium">Kutipan dari {selectedPR.pemberi_kutipan}:</span>
                                            <p className="text-muted-foreground mt-1 italic">"{selectedPR.isi_kutipan}"</p>
                                        </div>
                                    )}
                                </div>
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
                                        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                                            {Object.entries(prPhotos).map(([key, url]) => (
                                                <img 
                                                    key={key}
                                                    src={url} 
                                                    alt={key}
                                                    className="h-24 w-full object-cover rounded border"
                                                />
                                            ))}
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
                                    : 'Upload Foto (Maksimal 5)'}
                            </Label>
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                {[1, 2, 3, 4, 5].map((num) => {
                                    const key = `foto${num}`;
                                    const prPhotoCount = Object.keys(prPhotos).length;
                                    const isDisabled = data.use_press_release_photos && num <= prPhotoCount;
                                    
                                    if (isDisabled) return null;
                                    
                                    return (
                                        <div key={key} className="space-y-2">
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
                                                            Foto {data.use_press_release_photos ? num - prPhotoCount : num}
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
                                Format: JPG, PNG. Maksimal 2MB per foto
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
