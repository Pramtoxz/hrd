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
import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { compressImage, formatFileSize } from '@/utils/imageCompressor';

interface Props {
    release: {
        id: number;
        what: string;
        who: string;
        when: string;
        where: string;
        why: string;
        how: string;
        pemberi_kutipan_1: string | null;
        isi_kutipan_1: string | null;
        pemberi_kutipan_2: string | null;
        isi_kutipan_2: string | null;
        pemberi_kutipan_3: string | null;
        isi_kutipan_3: string | null;
        status: boolean;
        fotos?: Array<{
            foto1: string | null;
            foto2: string | null;
            foto3: string | null;
            foto4: string | null;
            foto5: string | null;
            deskripsi_foto1: string | null;
            deskripsi_foto2: string | null;
            deskripsi_foto3: string | null;
            deskripsi_foto4: string | null;
            deskripsi_foto5: string | null;
        }>;
    };
    isAdmin: boolean;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Press Release', href: '/press-release' },
    { title: 'Edit Press Release', href: '#' },
];

export default function PressReleaseEdit({ release, isAdmin }: Props) {
    console.log('Release data:', release);
    
    const { data, setData, post, processing, errors } = useForm({
        what: release.what,
        who: release.who,
        when: release.when,
        where: release.where,
        why: release.why,
        how: release.how,
        pemberi_kutipan_1: release.pemberi_kutipan_1 ?? '',
        isi_kutipan_1: release.isi_kutipan_1 ?? '',
        pemberi_kutipan_2: release.pemberi_kutipan_2 ?? '',
        isi_kutipan_2: release.isi_kutipan_2 ?? '',
        pemberi_kutipan_3: release.pemberi_kutipan_3 ?? '',
        isi_kutipan_3: release.isi_kutipan_3 ?? '',
        status: release.status,
        foto1: null as File | null,
        foto2: null as File | null,
        foto3: null as File | null,
        foto4: null as File | null,
        foto5: null as File | null,
        deskripsi_foto1: (release.fotos && release.fotos.length > 0) ? release.fotos[0].deskripsi_foto1 ?? '' : '',
        deskripsi_foto2: (release.fotos && release.fotos.length > 0) ? release.fotos[0].deskripsi_foto2 ?? '' : '',
        deskripsi_foto3: (release.fotos && release.fotos.length > 0) ? release.fotos[0].deskripsi_foto3 ?? '' : '',
        deskripsi_foto4: (release.fotos && release.fotos.length > 0) ? release.fotos[0].deskripsi_foto4 ?? '' : '',
        deskripsi_foto5: (release.fotos && release.fotos.length > 0) ? release.fotos[0].deskripsi_foto5 ?? '' : '',
        _method: 'PUT',
    });

    const [previews, setPreviews] = React.useState<{ [key: string]: string }>({});
    
    // Initialize active quotes based on existing data
    const getInitialActiveQuotes = () => {
        const quotes = [];
        if (release.pemberi_kutipan_1 || release.isi_kutipan_1) quotes.push(1);
        if (release.pemberi_kutipan_2 || release.isi_kutipan_2) quotes.push(2);
        if (release.pemberi_kutipan_3 || release.isi_kutipan_3) quotes.push(3);
        return quotes;
    };
    
    const [activeQuotes, setActiveQuotes] = React.useState<number[]>(getInitialActiveQuotes());
    const existingFotos = (release.fotos && release.fotos.length > 0) ? release.fotos[0] : {
        foto1: null,
        foto2: null,
        foto3: null,
        foto4: null,
        foto5: null,
        deskripsi_foto1: null,
        deskripsi_foto2: null,
        deskripsi_foto3: null,
        deskripsi_foto4: null,
        deskripsi_foto5: null,
    };

    const addQuote = () => {
        const nextQuote = [1, 2, 3].find(num => !activeQuotes.includes(num));
        if (nextQuote) {
            setActiveQuotes([...activeQuotes, nextQuote]);
        }
    };

    const removeQuote = (quoteNum: number) => {
        setActiveQuotes(activeQuotes.filter(num => num !== quoteNum));
        // Clear the form data for removed quote
        setData(`pemberi_kutipan_${quoteNum}` as any, '');
        setData(`isi_kutipan_${quoteNum}` as any, '');
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const result = await Swal.fire({
            title: 'Konfirmasi Update',
            text: 'Apakah Anda yakin ingin mengupdate press release ini?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3b82f6',
            cancelButtonColor: '#6b7280',
            confirmButtonText: 'Ya, Update!',
            cancelButtonText: 'Batal',
        });

        if (result.isConfirmed) {
            post(`/press-release/${release.id}`, {
                onSuccess: () => {
                    toast.success('Press release berhasil diupdate');
                },
                onError: (errors) => {
                    // Translate field names to Indonesian
                    const fieldTranslations: { [key: string]: string } = {
                        'what': 'What (Apa)',
                        'who': 'Who (Siapa)',
                        'when': 'When (Kapan)',
                        'where': 'Where (Dimana)',
                        'why': 'Why (Mengapa)',
                        'how': 'How (Bagaimana)',
                        'pemberi_kutipan_1': 'Pemberi Kutipan 1',
                        'isi_kutipan_1': 'Isi Kutipan 1',
                        'pemberi_kutipan_2': 'Pemberi Kutipan 2',
                        'isi_kutipan_2': 'Isi Kutipan 2',
                        'pemberi_kutipan_3': 'Pemberi Kutipan 3',
                        'isi_kutipan_3': 'Isi Kutipan 3',
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
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Press Release" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <h1 className="text-2xl font-bold">Edit Press Release</h1>

                <div className="max-w-4xl rounded-lg border p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Status Toggle (Admin Only) */}
                        {isAdmin && (
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
                        )}

                        {/* 5W1H */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="what">What (Apa) *</Label>
                                <Textarea
                                    id="what"
                                    value={data.what}
                                    onChange={(e) => setData('what', e.target.value)}
                                    placeholder="Apa yang terjadi?"
                                    rows={3}
                                    required
                                />
                                {errors.what && <p className="text-sm text-red-500">{errors.what}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="who">Who (Siapa) *</Label>
                                <Textarea
                                    id="who"
                                    value={data.who}
                                    onChange={(e) => setData('who', e.target.value)}
                                    placeholder="Siapa yang terlibat?"
                                    rows={3}
                                    required
                                />
                                {errors.who && <p className="text-sm text-red-500">{errors.who}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="when">When (Kapan) *</Label>
                                <Textarea
                                    id="when"
                                    value={data.when}
                                    onChange={(e) => setData('when', e.target.value)}
                                    placeholder="Kapan terjadi?"
                                    rows={3}
                                    required
                                />
                                {errors.when && <p className="text-sm text-red-500">{errors.when}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="where">Where (Dimana) *</Label>
                                <Textarea
                                    id="where"
                                    value={data.where}
                                    onChange={(e) => setData('where', e.target.value)}
                                    placeholder="Dimana terjadi?"
                                    rows={3}
                                    required
                                />
                                {errors.where && <p className="text-sm text-red-500">{errors.where}</p>}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="why">Why (Mengapa) *</Label>
                            <Textarea
                                id="why"
                                value={data.why}
                                onChange={(e) => setData('why', e.target.value)}
                                placeholder="Mengapa terjadi?"
                                rows={3}
                                required
                            />
                            {errors.why && <p className="text-sm text-red-500">{errors.why}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="how">How (Bagaimana) *</Label>
                            <Textarea
                                id="how"
                                value={data.how}
                                onChange={(e) => setData('how', e.target.value)}
                                placeholder="Bagaimana prosesnya?"
                                rows={3}
                                required
                            />
                            {errors.how && <p className="text-sm text-red-500">{errors.how}</p>}
                        </div>

                        {/* Kutipan */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <Label className="text-base font-semibold">Kutipan (Maksimal 3)</Label>
                                {activeQuotes.length < 3 && (
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        onClick={addQuote}
                                        className="flex items-center gap-2"
                                    >
                                        <Plus className="h-4 w-4" />
                                        Tambah Kutipan
                                    </Button>
                                )}
                            </div>
                            
                            {activeQuotes.length === 0 && (
                                <div className="p-4 border-2 border-dashed rounded-lg text-center">
                                    <p className="text-sm text-muted-foreground mb-2">Belum ada kutipan</p>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        onClick={addQuote}
                                        className="flex items-center gap-2"
                                    >
                                        <Plus className="h-4 w-4" />
                                        Tambah Kutipan Pertama
                                    </Button>
                                </div>
                            )}
                            
                            {activeQuotes.map((num) => (
                                <div key={num} className="p-4 border rounded-lg space-y-4 relative">
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-medium text-sm">Kutipan {num}</h4>
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => removeQuote(num)}
                                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                        >
                                            <Minus className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor={`pemberi_kutipan_${num}`}>Pemberi Kutipan {num}</Label>
                                        <Textarea
                                            id={`pemberi_kutipan_${num}`}
                                            value={data[`pemberi_kutipan_${num}` as keyof typeof data] as string}
                                            onChange={(e) => setData(`pemberi_kutipan_${num}` as any, e.target.value)}
                                            placeholder="Nama dan jabatan pemberi kutipan"
                                            rows={2}
                                        />
                                        {errors[`pemberi_kutipan_${num}` as keyof typeof errors] && (
                                            <p className="text-sm text-red-500">{errors[`pemberi_kutipan_${num}` as keyof typeof errors]}</p>
                                        )}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor={`isi_kutipan_${num}`}>Isi Kutipan {num}</Label>
                                        <Textarea
                                            id={`isi_kutipan_${num}`}
                                            value={data[`isi_kutipan_${num}` as keyof typeof data] as string}
                                            onChange={(e) => setData(`isi_kutipan_${num}` as any, e.target.value)}
                                            placeholder="Isi kutipan"
                                            rows={3}
                                        />
                                        {errors[`isi_kutipan_${num}` as keyof typeof errors] && (
                                            <p className="text-sm text-red-500">{errors[`isi_kutipan_${num}` as keyof typeof errors]}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Foto Upload */}
                        <div className="space-y-4">
                            <Label>Foto dan Deskripsi (Maksimal 5)</Label>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[1, 2, 3, 4, 5].map((num) => {
                                    const key = `foto${num}`;
                                    const descKey = `deskripsi_foto${num}`;
                                    const existingFoto = existingFotos[key as keyof typeof existingFotos];
                                    const preview = previews[key];
                                    
                                    return (
                                        <div key={key} className="space-y-3 p-4 border rounded-lg">
                                            <h4 className="font-medium text-sm">Foto {num}</h4>
                                            {preview || existingFoto ? (
                                                <div className="relative">
                                                    <img 
                                                        src={preview || `/assets/images/press_release/${existingFoto}`} 
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
                                                        <p className="text-xs text-muted-foreground">Upload Foto {num}</p>
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
                                Format: JPG, PNG. Maksimal 2MB per foto. Deskripsi foto bersifat opsional.
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
