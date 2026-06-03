import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, router, useForm } from '@inertiajs/react';
import { Download, X } from 'lucide-react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { toast } from 'sonner';

interface PengajuanBan {
    id: number;
    tanggal_pengajuan: string;
    nama_driver: string;
    cabang: string;
    no_polisi: string;
    jenis_kendaraan: string;
    km_kendaraan: number;
    jenis_pengajuan: 'ban' | 'fulkanisir';
    tgl_penggantian_terakhir: string | null;
    posisi_ban_sebelumnya: string[] | null;
    posisi_ban_diajukan: string[];
    jumlah_ban: number;
    ukuran_ban: string;
    alasan_penggantian: string | null;
    foto_sebelum: string | null;
    pdf_persetujuan: string | null;
    foto_sesudah: string[] | null;
    foto_toko: string[] | null;
    kuitansi: string | null;
    status: 'pending' | 'setuju' | 'ditolak' | 'diperiksa' | 'finish';
    alasan_penolakan: string | null;
    user: { id: number; name: string };
}

interface Props {
    pengajuan: PengajuanBan;
    isAdmin: boolean;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Pengajuan Ban', href: '/pengajuan-ban' },
    { title: 'Detail', href: '#' },
];

const STATUS_LABEL: Record<string, string> = {
    pending: 'Menunggu Review',
    setuju: 'Disetujui',
    ditolak: 'Ditolak',
    diperiksa: 'Diperiksa',
    finish: 'Selesai',
};

const STATUS_VARIANT: Record<string, 'default' | 'secondary' | 'destructive' | 'outline'> = {
    pending: 'secondary',
    setuju: 'default',
    ditolak: 'destructive',
    diperiksa: 'secondary',
    finish: 'default',
};

function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
    return (
        <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
            <span className="text-sm text-muted-foreground sm:w-52 shrink-0">{label}</span>
            <span className="text-sm font-medium">{value}</span>
        </div>
    );
}

function ImagePreview({ src, alt }: { src: string; alt: string }) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <img
                src={src}
                alt={alt}
                className="h-24 w-24 object-cover rounded-lg border cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => setOpen(true)}
            />
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-w-3xl">
                    <DialogHeader>
                        <DialogTitle>{alt}</DialogTitle>
                    </DialogHeader>
                    <img src={src} alt={alt} className="max-h-[70vh] w-auto object-contain mx-auto rounded-lg" />
                </DialogContent>
            </Dialog>
        </>
    );
}

export default function PengajuanBanShow({ pengajuan, isAdmin }: Props) {
    const [showTolakDialog, setShowTolakDialog] = useState(false);
    const [showSetujuDialog, setShowSetujuDialog] = useState(false);
    const [showSelesaikanDialog, setShowSelesaikanDialog] = useState(false);

    const tolakForm = useForm({ alasan_penolakan: '' });
    const setujuForm = useForm({ pdf_persetujuan: null as File | null });
    const selesaikanForm = useForm<{
        foto_sesudah: File[];
        foto_toko: File[];
        kuitansi: File | null;
    }>({
        foto_sesudah: [],
        foto_toko: [],
        kuitansi: null,
    });

    const formatDate = (d: string | null) =>
        d ? new Date(d).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' }) : '-';

    const imgUrl = (filename: string) => `/assets/images/pengajuan_ban/${filename}`;

    const handleSetuju = (e: React.FormEvent) => {
        e.preventDefault();
        setujuForm.post(`/pengajuan-ban/${pengajuan.id}/setuju`, {
            forceFormData: true,
            onSuccess: () => {
                setShowSetujuDialog(false);
                toast.success('Pengajuan disetujui');
            },
            onError: () => toast.error('Gagal menyetujui pengajuan'),
        });
    };

    const handleTolak = (e: React.FormEvent) => {
        e.preventDefault();
        tolakForm.post(`/pengajuan-ban/${pengajuan.id}/tolak`, {
            onSuccess: () => {
                setShowTolakDialog(false);
                toast.success('Pengajuan ditolak');
            },
            onError: () => toast.error('Gagal menolak pengajuan'),
        });
    };

    const handleSelesaikan = (e: React.FormEvent) => {
        e.preventDefault();
        selesaikanForm.post(`/pengajuan-ban/${pengajuan.id}/selesaikan`, {
            forceFormData: true,
            onSuccess: () => {
                setShowSelesaikanDialog(false);
                toast.success('Berkas penyelesaian berhasil diupload');
            },
            onError: () => toast.error('Periksa kembali isian'),
        });
    };

    const handleFinish = async () => {
        const result = await Swal.fire({
            title: 'Konfirmasi Selesai',
            text: 'Tandai pengajuan ini sebagai selesai?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#10b981',
            cancelButtonColor: '#6b7280',
            confirmButtonText: 'Ya, Selesai!',
            cancelButtonText: 'Batal',
        });

        if (result.isConfirmed) {
            router.post(`/pengajuan-ban/${pengajuan.id}/finish`, {}, {
                onSuccess: () => toast.success('Pengajuan dinyatakan selesai'),
                onError: () => toast.error('Gagal menyelesaikan pengajuan'),
            });
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Detail Pengajuan Ban" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Detail Pengajuan Ban</h1>
                    <Badge variant={STATUS_VARIANT[pengajuan.status]} className="text-sm px-3 py-1">
                        {STATUS_LABEL[pengajuan.status]}
                    </Badge>
                </div>

                <div className="max-w-3xl space-y-6">
                    <div className="rounded-lg border p-6 space-y-3">
                        <h2 className="font-semibold text-base border-b pb-2">Data Kendaraan</h2>
                        <InfoRow label="Tanggal Pengajuan" value={formatDate(pengajuan.tanggal_pengajuan)} />
                        <InfoRow label="Nama Driver" value={pengajuan.nama_driver} />
                        <InfoRow label="Cabang" value={pengajuan.cabang} />
                        <InfoRow label="No. Polisi" value={<code className="rounded bg-muted px-2 py-1">{pengajuan.no_polisi}</code>} />
                        <InfoRow label="Jenis / Tipe Kendaraan" value={pengajuan.jenis_kendaraan} />
                        <InfoRow label="KM Kendaraan" value={pengajuan.km_kendaraan.toLocaleString('id-ID') + ' KM'} />
                        <InfoRow label="Diajukan Oleh" value={pengajuan.user?.name} />
                    </div>

                    <div className="rounded-lg border p-6 space-y-3">
                        <h2 className="font-semibold text-base border-b pb-2">
                            {pengajuan.jenis_pengajuan === 'ban' ? 'Pengajuan Penggantian Ban' : 'Pengajuan Fulkanisir'}
                        </h2>
                        <InfoRow label="Jenis Pengajuan" value={
                            <Badge variant="outline">
                                {pengajuan.jenis_pengajuan === 'ban' ? 'Penggantian Ban' : 'Fulkanisir'}
                            </Badge>
                        } />
                        <InfoRow label="Tgl. Penggantian Terakhir" value={formatDate(pengajuan.tgl_penggantian_terakhir)} />
                        <InfoRow
                            label="Posisi Ban Sebelumnya"
                            value={pengajuan.posisi_ban_sebelumnya?.join(', ') || '-'}
                        />
                        <InfoRow
                            label="Posisi Ban Diajukan"
                            value={pengajuan.posisi_ban_diajukan?.join(', ') || '-'}
                        />
                        <InfoRow label="Jumlah Ban" value={`${pengajuan.jumlah_ban} buah`} />
                        <InfoRow label="Ukuran Ban" value={pengajuan.ukuran_ban} />
                        {pengajuan.alasan_penggantian && (
                            <InfoRow label="Alasan Penggantian" value={pengajuan.alasan_penggantian} />
                        )}
                    </div>

                    {pengajuan.alasan_penolakan && (
                        <div className="rounded-lg border border-red-200 bg-red-50 dark:bg-red-950/20 p-6 space-y-2">
                            <h2 className="font-semibold text-base text-red-700 dark:text-red-400">Alasan Penolakan</h2>
                            <p className="text-sm text-red-600 dark:text-red-400">{pengajuan.alasan_penolakan}</p>
                        </div>
                    )}

                    <div className="rounded-lg border p-6 space-y-4">
                        <h2 className="font-semibold text-base border-b pb-2">Lampiran</h2>
                        {pengajuan.foto_sebelum && (
                            <div className="space-y-2">
                                <p className="text-sm text-muted-foreground">Foto Kondisi Ban Sebelum</p>
                                <ImagePreview src={imgUrl(pengajuan.foto_sebelum)} alt="Foto Sebelum" />
                            </div>
                        )}

                        {pengajuan.pdf_persetujuan && (
                            <div className="space-y-2">
                                <p className="text-sm text-muted-foreground">Surat Perintah (PDF)</p>
                                <Button variant="outline" asChild>
                                    <a href={imgUrl(pengajuan.pdf_persetujuan)} target="_blank" rel="noreferrer" download>
                                        <Download className="mr-2 h-4 w-4" />
                                        Download PDF Persetujuan
                                    </a>
                                </Button>
                            </div>
                        )}

                        {(pengajuan.foto_sesudah ?? []).length > 0 && (
                            <div className="space-y-2">
                                <p className="text-sm text-muted-foreground">Foto Kondisi Ban Sesudah</p>
                                <div className="flex flex-wrap gap-2">
                                    {pengajuan.foto_sesudah!.map((f, i) => (
                                        <ImagePreview key={i} src={imgUrl(f)} alt={`Foto Sesudah ${i + 1}`} />
                                    ))}
                                </div>
                            </div>
                        )}

                        {(pengajuan.foto_toko ?? []).length > 0 && (
                            <div className="space-y-2">
                                <p className="text-sm text-muted-foreground">Foto dari Toko Ban / Fulkanisir</p>
                                <div className="flex flex-wrap gap-2">
                                    {pengajuan.foto_toko!.map((f, i) => (
                                        <ImagePreview key={i} src={imgUrl(f)} alt={`Foto Toko ${i + 1}`} />
                                    ))}
                                </div>
                            </div>
                        )}

                        {pengajuan.kuitansi && (
                            <div className="space-y-2">
                                <p className="text-sm text-muted-foreground">Kuitansi Toko</p>
                                <ImagePreview src={imgUrl(pengajuan.kuitansi)} alt="Kuitansi" />
                            </div>
                        )}
                    </div>

                    <div className="flex flex-wrap gap-2">
                        <Button variant="outline" onClick={() => window.history.back()}>
                            Kembali
                        </Button>

                        {isAdmin && pengajuan.status === 'pending' && (
                            <>
                                <Button onClick={() => setShowSetujuDialog(true)}>
                                    Setujui & Upload PDF
                                </Button>
                                <Button variant="destructive" onClick={() => setShowTolakDialog(true)}>
                                    Tolak
                                </Button>
                            </>
                        )}

                        {!isAdmin && pengajuan.status === 'setuju' && (
                            <Button onClick={() => setShowSelesaikanDialog(true)}>
                                Selesaikan — Upload Bukti
                            </Button>
                        )}

                        {isAdmin && pengajuan.status === 'diperiksa' && (
                            <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={handleFinish}>
                                Konfirmasi Selesai
                            </Button>
                        )}
                    </div>
                </div>
            </div>

            <Dialog open={showSetujuDialog} onOpenChange={setShowSetujuDialog}>
                <DialogContent className="max-w-md">
                    <DialogHeader>
                        <DialogTitle>Setujui Pengajuan — Upload PDF</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleSetuju} className="space-y-4">
                        <div className="space-y-2">
                            <Label>Surat Perintah (PDF) *</Label>
                            <Input
                                type="file"
                                accept="application/pdf"
                                onChange={(e) => setujuForm.setData('pdf_persetujuan', e.target.files?.[0] ?? null)}
                                required
                            />
                            <p className="text-xs text-muted-foreground">Format PDF. Maks. 10MB</p>
                            {setujuForm.errors.pdf_persetujuan && (
                                <p className="text-sm text-red-500">{setujuForm.errors.pdf_persetujuan}</p>
                            )}
                        </div>
                        <div className="flex justify-end gap-2">
                            <Button type="button" variant="outline" onClick={() => setShowSetujuDialog(false)}>
                                Batal
                            </Button>
                            <Button type="submit" disabled={setujuForm.processing}>
                                {setujuForm.processing ? 'Menyimpan...' : 'Setujui'}
                            </Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>

            <Dialog open={showTolakDialog} onOpenChange={setShowTolakDialog}>
                <DialogContent className="max-w-md">
                    <DialogHeader>
                        <DialogTitle>Tolak Pengajuan</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleTolak} className="space-y-4">
                        <div className="space-y-2">
                            <Label>Alasan Penolakan *</Label>
                            <Textarea
                                value={tolakForm.data.alasan_penolakan}
                                onChange={(e) => tolakForm.setData('alasan_penolakan', e.target.value)}
                                placeholder="Jelaskan alasan penolakan..."
                                rows={4}
                                required
                            />
                            {tolakForm.errors.alasan_penolakan && (
                                <p className="text-sm text-red-500">{tolakForm.errors.alasan_penolakan}</p>
                            )}
                        </div>
                        <div className="flex justify-end gap-2">
                            <Button type="button" variant="outline" onClick={() => setShowTolakDialog(false)}>
                                Batal
                            </Button>
                            <Button type="submit" variant="destructive" disabled={tolakForm.processing}>
                                {tolakForm.processing ? 'Menyimpan...' : 'Tolak Pengajuan'}
                            </Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>

            <Dialog open={showSelesaikanDialog} onOpenChange={setShowSelesaikanDialog}>
                <DialogContent className="max-w-lg">
                    <DialogHeader>
                        <DialogTitle>Upload Bukti Penyelesaian</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleSelesaikan} className="space-y-4">
                        <div className="space-y-2">
                            <Label>Foto Kondisi Ban Sesudah * (maks. 6 foto)</Label>
                            <Input
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={(e) => {
                                    const files = Array.from(e.target.files ?? []).slice(0, 6);
                                    selesaikanForm.setData('foto_sesudah', files);
                                }}
                                required
                            />
                            {selesaikanForm.errors.foto_sesudah && (
                                <p className="text-sm text-red-500">{selesaikanForm.errors.foto_sesudah}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label>Foto dari Toko Ban / Fulkanisir (maks. 6 foto)</Label>
                            <Input
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={(e) => {
                                    const files = Array.from(e.target.files ?? []).slice(0, 6);
                                    selesaikanForm.setData('foto_toko', files);
                                }}
                            />
                            {selesaikanForm.errors.foto_toko && (
                                <p className="text-sm text-red-500">{selesaikanForm.errors.foto_toko}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label>Kuitansi dari Toko *</Label>
                            <Input
                                type="file"
                                accept="image/*"
                                onChange={(e) => selesaikanForm.setData('kuitansi', e.target.files?.[0] ?? null)}
                                required
                            />
                            {selesaikanForm.errors.kuitansi && (
                                <p className="text-sm text-red-500">{selesaikanForm.errors.kuitansi}</p>
                            )}
                        </div>

                        <div className="flex justify-end gap-2">
                            <Button type="button" variant="outline" onClick={() => setShowSelesaikanDialog(false)}>
                                Batal
                            </Button>
                            <Button type="submit" disabled={selesaikanForm.processing}>
                                {selesaikanForm.processing ? 'Mengupload...' : 'Upload & Selesaikan'}
                            </Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </AppLayout>
    );
}
