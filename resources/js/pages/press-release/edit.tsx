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
import { X } from 'lucide-react';

interface Props {
    release: {
        id: number;
        what: string;
        who: string;
        when: string;
        where: string;
        why: string;
        how: string;
        pemberi_kutipan: string | null;
        isi_kutipan: string | null;
        status: boolean;
        fotos?: Array<{
            foto1: string | null;
            foto2: string | null;
            foto3: string | null;
            foto4: string | null;
            foto5: string | null;
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
        pemberi_kutipan: release.pemberi_kutipan ?? '',
        isi_kutipan: release.isi_kutipan ?? '',
        status: release.status,
        foto1: null as File | null,
        foto2: null as File | null,
        foto3: null as File | null,
        foto4: null as File | null,
        foto5: null as File | null,
        _method: 'PUT',
    });

    const [previews, setPreviews] = React.useState<{ [key: string]: string }>({});
    const existingFotos = (release.fotos && release.fotos.length > 0) ? release.fotos[0] : {
        foto1: null,
        foto2: null,
        foto3: null,
        foto4: null,
        foto5: null,
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
                onError: () => {
                    toast.error('Gagal mengupdate press release');
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
                                <Input
                                    id="what"
                                    value={data.what}
                                    onChange={(e) => setData('what', e.target.value)}
                                    placeholder="Apa yang terjadi?"
                                    required
                                />
                                {errors.what && <p className="text-sm text-red-500">{errors.what}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="who">Who (Siapa) *</Label>
                                <Input
                                    id="who"
                                    value={data.who}
                                    onChange={(e) => setData('who', e.target.value)}
                                    placeholder="Siapa yang terlibat?"
                                    required
                                />
                                {errors.who && <p className="text-sm text-red-500">{errors.who}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="when">When (Kapan) *</Label>
                                <Input
                                    id="when"
                                    value={data.when}
                                    onChange={(e) => setData('when', e.target.value)}
                                    placeholder="Kapan terjadi?"
                                    required
                                />
                                {errors.when && <p className="text-sm text-red-500">{errors.when}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="where">Where (Dimana) *</Label>
                                <Input
                                    id="where"
                                    value={data.where}
                                    onChange={(e) => setData('where', e.target.value)}
                                    placeholder="Dimana terjadi?"
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
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="pemberi_kutipan">Pemberi Kutipan</Label>
                                <Input
                                    id="pemberi_kutipan"
                                    value={data.pemberi_kutipan}
                                    onChange={(e) => setData('pemberi_kutipan', e.target.value)}
                                    placeholder="Nama pemberi kutipan"
                                />
                                {errors.pemberi_kutipan && <p className="text-sm text-red-500">{errors.pemberi_kutipan}</p>}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="isi_kutipan">Isi Kutipan</Label>
                            <Textarea
                                id="isi_kutipan"
                                value={data.isi_kutipan}
                                onChange={(e) => setData('isi_kutipan', e.target.value)}
                                placeholder="Isi kutipan"
                                rows={3}
                            />
                            {errors.isi_kutipan && <p className="text-sm text-red-500">{errors.isi_kutipan}</p>}
                        </div>

                        {/* Foto Upload */}
                        <div className="space-y-4">
                            <Label>Foto (Maksimal 5)</Label>
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                {[1, 2, 3, 4, 5].map((num) => {
                                    const key = `foto${num}`;
                                    const existingFoto = existingFotos[key as keyof typeof existingFotos];
                                    const preview = previews[key];
                                    
                                    return (
                                        <div key={key} className="space-y-2">
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
                                                        <p className="text-xs text-muted-foreground">Foto {num}</p>
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
