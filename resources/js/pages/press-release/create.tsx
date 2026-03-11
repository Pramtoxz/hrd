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
import { X, Plus, Minus } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Press Release', href: '/press-release' },
    { title: 'Buat Press Release', href: '/press-release/create' },
];

export default function PressReleaseCreate() {
    const { data, setData, post, processing, errors } = useForm({
        what: '',
        who: '',
        when: '',
        where: '',
        why: '',
        how: '',
        pemberi_kutipan_1: '',
        isi_kutipan_1: '',
        pemberi_kutipan_2: '',
        isi_kutipan_2: '',
        pemberi_kutipan_3: '',
        isi_kutipan_3: '',
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
    const [activeQuotes, setActiveQuotes] = React.useState<number[]>([]);

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
            text: 'Apakah Anda yakin ingin membuat press release ini?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3b82f6',
            cancelButtonColor: '#6b7280',
            confirmButtonText: 'Ya, Simpan!',
            cancelButtonText: 'Batal',
        });

        if (result.isConfirmed) {
            post('/press-release', {
                onSuccess: () => {
                    toast.success('Press release berhasil dibuat');
                },
                onError: () => {
                    toast.error('Gagal membuat press release');
                },
            });
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Form Press Release" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <h1 className="text-2xl font-bold">Form Press Release</h1>

                <div className="max-w-4xl rounded-lg border p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
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
                                    return (
                                        <div key={key} className="space-y-3 p-4 border rounded-lg">
                                            <h4 className="font-medium text-sm">Foto {num}</h4>
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
