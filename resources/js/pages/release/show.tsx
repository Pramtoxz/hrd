import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, Calendar, User, FileText, Image as ImageIcon, Download } from 'lucide-react';
import { toast } from 'sonner';

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

interface Release {
    id: number;
    judul: string;
    isi_berita: string;
    tanggal_publikasi: string;
    status: boolean;
    user: {
        name: string;
        email: string;
    };
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
    created_at: string;
    updated_at: string;
}

interface Props {
    release: Release;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Release', href: '/release' },
    { title: 'Detail Release', href: '#' },
];

export default function ReleaseShow({ release }: Props) {
    const releasePhotos = release.fotos?.[0];
    const prPhotos = release.press_release?.fotos?.[0];

    const handleDownloadImage = (imageUrl: string, filename: string) => {
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = filename;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast.success('Foto berhasil didownload');
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Detail Release - ${release.judul}`} />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Button variant="outline" size="sm" asChild>
                            <Link href="/release">
                                <ArrowLeft className="h-4 w-4" />
                                Kembali
                            </Link>
                        </Button>
                        <div>
                            <h1 className="text-2xl font-bold">Detail Release</h1>
                            <p className="text-sm text-muted-foreground">
                                Informasi lengkap release
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" asChild>
                            <Link href={`/release/${release.id}/edit`}>
                                Edit Release
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Release Info */}
                        <div className="rounded-lg border p-6 space-y-4">
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <h2 className="text-xl font-bold mb-2">{release.judul}</h2>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-4 w-4" />
                                            {new Date(release.tanggal_publikasi).toLocaleDateString('id-ID', {
                                                weekday: 'long',
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <User className="h-4 w-4" />
                                            {release.user.name}
                                        </div>
                                    </div>
                                </div>
                                <Badge variant={release.status ? "default" : "secondary"}>
                                    {release.status ? 'Aktif' : 'Tidak Aktif'}
                                </Badge>
                            </div>

                            <div className="border-t pt-4">
                                <div className="flex items-center gap-2 mb-3">
                                    <FileText className="h-5 w-5 text-muted-foreground" />
                                    <h3 className="font-semibold">Isi Berita</h3>
                                </div>
                                <div className="prose prose-sm max-w-none whitespace-pre-wrap">
                                    {release.isi_berita}
                                </div>
                            </div>
                        </div>

                        {/* Release Photos */}
                        {releasePhotos && (
                            <div className="rounded-lg border p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <ImageIcon className="h-5 w-5 text-muted-foreground" />
                                    <h3 className="font-semibold">Foto Release</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[1, 2, 3, 4, 5].map((num) => {
                                        const fotoKey = `foto${num}` as keyof typeof releasePhotos;
                                        const descKey = `deskripsi_foto${num}` as keyof typeof releasePhotos;
                                        const foto = releasePhotos[fotoKey];
                                        const desc = releasePhotos[descKey];

                                        if (!foto) return null;

                                        const imageUrl = `/assets/images/release/${foto}`;

                                        return (
                                            <div key={num} className="space-y-2">
                                                <div 
                                                    className="relative group cursor-pointer"
                                                    onClick={() => {
                                                        console.log('Clicked image:', imageUrl);
                                                        handleDownloadImage(imageUrl, foto as string);
                                                    }}
                                                >
                                                    <img
                                                        src={imageUrl}
                                                        alt={`Foto ${num}`}
                                                        className="w-full h-48 object-cover rounded-lg border transition-opacity group-hover:opacity-90"
                                                    />
                                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 rounded-lg pointer-events-none">
                                                        <div className="bg-white rounded-full p-3 shadow-lg">
                                                            <Download className="h-5 w-5 text-gray-700" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {desc && (
                                                    <p className="text-sm text-muted-foreground">{desc}</p>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Press Release Reference */}
                        {release.press_release && (
                            <div className="rounded-lg border p-6 space-y-4">
                                <h3 className="font-semibold">Referensi Press Release</h3>
                                
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <span className="font-medium text-muted-foreground">What (Apa):</span>
                                        <p className="mt-1">{release.press_release.what}</p>
                                    </div>
                                    <div>
                                        <span className="font-medium text-muted-foreground">Who (Siapa):</span>
                                        <p className="mt-1">{release.press_release.who}</p>
                                    </div>
                                    <div>
                                        <span className="font-medium text-muted-foreground">When (Kapan):</span>
                                        <p className="mt-1">{release.press_release.when}</p>
                                    </div>
                                    <div>
                                        <span className="font-medium text-muted-foreground">Where (Dimana):</span>
                                        <p className="mt-1">{release.press_release.where}</p>
                                    </div>
                                    <div>
                                        <span className="font-medium text-muted-foreground">Why (Mengapa):</span>
                                        <p className="mt-1">{release.press_release.why}</p>
                                    </div>
                                    <div>
                                        <span className="font-medium text-muted-foreground">How (Bagaimana):</span>
                                        <p className="mt-1">{release.press_release.how}</p>
                                    </div>

                                    {/* Kutipan */}
                                    {(release.press_release.pemberi_kutipan_1 || release.press_release.pemberi_kutipan_2 || release.press_release.pemberi_kutipan_3) && (
                                        <div className="border-t pt-3">
                                            <span className="font-medium text-muted-foreground">Kutipan:</span>
                                            <div className="mt-2 space-y-3">
                                                {[1, 2, 3].map((num) => {
                                                    const pemberi = release.press_release?.[`pemberi_kutipan_${num}` as keyof PressRelease] as string;
                                                    const isi = release.press_release?.[`isi_kutipan_${num}` as keyof PressRelease] as string;
                                                    
                                                    if (!pemberi && !isi) return null;
                                                    
                                                    return (
                                                        <div key={num} className="pl-3 border-l-2 border-muted">
                                                            {pemberi && (
                                                                <p className="font-medium text-xs">{pemberi}</p>
                                                            )}
                                                            {isi && (
                                                                <p className="text-xs text-muted-foreground italic mt-1">"{isi}"</p>
                                                            )}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Press Release Photos */}
                                {prPhotos && (
                                    <div className="border-t pt-4">
                                        <span className="font-medium text-sm text-muted-foreground">Foto Press Release:</span>
                                        <div className="grid grid-cols-2 gap-2 mt-2">
                                            {[1, 2, 3, 4, 5].map((num) => {
                                                const fotoKey = `foto${num}` as keyof typeof prPhotos;
                                                const descKey = `deskripsi_foto${num}` as keyof typeof prPhotos;
                                                const foto = prPhotos[fotoKey];
                                                const desc = prPhotos[descKey];

                                                if (!foto) return null;

                                                const imageUrl = `/assets/images/press_release/${foto}`;

                                                return (
                                                    <div key={num} className="space-y-1">
                                                        <div 
                                                            className="relative group cursor-pointer"
                                                            onClick={() => {
                                                                console.log('Clicked PR image:', imageUrl);
                                                                handleDownloadImage(imageUrl, foto as string);
                                                            }}
                                                        >
                                                            <img
                                                                src={imageUrl}
                                                                alt={`PR Foto ${num}`}
                                                                className="w-full h-20 object-cover rounded border transition-opacity group-hover:opacity-90"
                                                            />
                                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 rounded pointer-events-none">
                                                                <div className="bg-white rounded-full p-1.5 shadow-lg">
                                                                    <Download className="h-3 w-3 text-gray-700" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {desc && (
                                                            <p className="text-xs text-muted-foreground line-clamp-2">{desc}</p>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Metadata */}
                        <div className="rounded-lg border p-6 space-y-3 text-sm">
                            <h3 className="font-semibold">Informasi Tambahan</h3>
                            <div>
                                <span className="font-medium text-muted-foreground">Dibuat oleh:</span>
                                <p className="mt-1">{release.user.name}</p>
                                <p className="text-xs text-muted-foreground">{release.user.email}</p>
                            </div>
                            <div>
                                <span className="font-medium text-muted-foreground">Dibuat pada:</span>
                                <p className="mt-1">
                                    {new Date(release.created_at).toLocaleDateString('id-ID', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })}
                                </p>
                            </div>
                            <div>
                                <span className="font-medium text-muted-foreground">Terakhir diupdate:</span>
                                <p className="mt-1">
                                    {new Date(release.updated_at).toLocaleDateString('id-ID', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
