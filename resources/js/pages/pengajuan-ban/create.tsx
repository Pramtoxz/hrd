import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { toast } from 'sonner';

interface Props {
    cabang: string;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Pengajuan Ban', href: '/pengajuan-ban' },
    { title: 'Ajukan', href: '/pengajuan-ban/create' },
];

const POSISI_OPTIONS = [
    { value: 'Depan Kiri', label: 'Depan Kiri' },
    { value: 'Depan Kanan', label: 'Depan Kanan' },
    { value: 'Belakang Kiri', label: 'Belakang Kiri' },
    { value: 'Belakang Kanan', label: 'Belakang Kanan' },
];

function CheckboxGroup({
    label,
    name,
    value,
    onChange,
    error,
}: {
    label: string;
    name: string;
    value: string[];
    onChange: (v: string[]) => void;
    error?: string;
}) {
    const toggle = (opt: string) => {
        onChange(value.includes(opt) ? value.filter((v) => v !== opt) : [...value, opt]);
    };

    return (
        <div className="space-y-2">
            <Label>{label}</Label>
            <div className="grid grid-cols-2 gap-2">
                {POSISI_OPTIONS.map((opt) => (
                    <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            name={name}
                            value={opt.value}
                            checked={value.includes(opt.value)}
                            onChange={() => toggle(opt.value)}
                            className="h-4 w-4 rounded border-gray-300"
                        />
                        <span className="text-sm">{opt.label}</span>
                    </label>
                ))}
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
    );
}

export default function PengajuanBanCreate({ cabang }: Props) {
    const [jenisPengajuan, setJenisPengajuan] = useState<'ban' | 'fulkanisir' | ''>('');

    const { data, setData, post, processing, errors } = useForm<{
        tanggal_pengajuan: string;
        nama_driver: string;
        no_polisi: string;
        jenis_kendaraan: string;
        km_kendaraan: string;
        jenis_pengajuan: string;
        tgl_penggantian_terakhir: string;
        posisi_ban_sebelumnya: string[];
        posisi_ban_diajukan: string[];
        jumlah_ban: string;
        ukuran_ban: string;
        alasan_penggantian: string;
        foto_sebelum: File[];
    }>({
        tanggal_pengajuan: new Date().toISOString().split('T')[0],
        nama_driver: '',
        no_polisi: '',
        jenis_kendaraan: '',
        km_kendaraan: '',
        jenis_pengajuan: '',
        tgl_penggantian_terakhir: '',
        posisi_ban_sebelumnya: [],
        posisi_ban_diajukan: [],
        jumlah_ban: '',
        ukuran_ban: '',
        alasan_penggantian: '',
        foto_sebelum: [],
    });

    const handleJenisChange = (v: 'ban' | 'fulkanisir') => {
        setJenisPengajuan(v);
        setData('jenis_pengajuan', v);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const result = await Swal.fire({
            title: 'Konfirmasi Pengajuan',
            text: 'Apakah data pengajuan sudah benar?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3b82f6',
            cancelButtonColor: '#6b7280',
            confirmButtonText: 'Ya, Kirim!',
            cancelButtonText: 'Batal',
        });

        if (result.isConfirmed) {
            post('/pengajuan-ban', {
                forceFormData: true,
                onSuccess: () => toast.success('Pengajuan berhasil dikirim'),
                onError: () => toast.error('Periksa kembali isian form'),
            });
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Ajukan Penggantian Ban" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <h1 className="text-2xl font-bold">Form Pengajuan Penggantian Ban Mobil</h1>

                <form onSubmit={handleSubmit} className="max-w-3xl space-y-8">
                    <div className="rounded-lg border p-6 space-y-4">
                        <h2 className="text-lg font-semibold border-b pb-2">Tanggal Pengajuan</h2>
                        <div className="space-y-2">
                            <Label htmlFor="tanggal_pengajuan">Tanggal Pengajuan *</Label>
                            <Input
                                id="tanggal_pengajuan"
                                type="date"
                                value={data.tanggal_pengajuan}
                                onChange={(e) => setData('tanggal_pengajuan', e.target.value)}
                                required
                            />
                            {errors.tanggal_pengajuan && (
                                <p className="text-sm text-red-500">{errors.tanggal_pengajuan}</p>
                            )}
                        </div>
                    </div>

                    <div className="rounded-lg border p-6 space-y-4">
                        <h2 className="text-lg font-semibold border-b pb-2">Data Kendaraan</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="nama_driver">Nama Driver *</Label>
                                <Input
                                    id="nama_driver"
                                    value={data.nama_driver}
                                    onChange={(e) => setData('nama_driver', e.target.value)}
                                    placeholder="Nama lengkap driver"
                                    required
                                />
                                {errors.nama_driver && (
                                    <p className="text-sm text-red-500">{errors.nama_driver}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label>Cabang</Label>
                                <div className="flex h-10 w-full items-center rounded-md border bg-muted px-3 text-sm font-medium">
                                    {cabang}
                                </div>
                                <p className="text-xs text-muted-foreground">Sesuai akun Kacab</p>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="no_polisi">No. Polisi *</Label>
                                <Input
                                    id="no_polisi"
                                    value={data.no_polisi}
                                    onChange={(e) => setData('no_polisi', e.target.value)}
                                    placeholder="Contoh: BA 1234 AB"
                                    required
                                />
                                {errors.no_polisi && (
                                    <p className="text-sm text-red-500">{errors.no_polisi}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="jenis_kendaraan">Jenis / Tipe Kendaraan *</Label>
                                <Input
                                    id="jenis_kendaraan"
                                    value={data.jenis_kendaraan}
                                    onChange={(e) => setData('jenis_kendaraan', e.target.value)}
                                    placeholder="Contoh: Toyota Avanza"
                                    required
                                />
                                {errors.jenis_kendaraan && (
                                    <p className="text-sm text-red-500">{errors.jenis_kendaraan}</p>
                                )}
                            </div>

                            <div className="space-y-2 md:col-span-2">
                                <Label htmlFor="km_kendaraan">KM Kendaraan Saat Ini *</Label>
                                <Input
                                    id="km_kendaraan"
                                    type="number"
                                    min="0"
                                    value={data.km_kendaraan}
                                    onChange={(e) => setData('km_kendaraan', e.target.value)}
                                    placeholder="Contoh: 75000"
                                    required
                                />
                                {errors.km_kendaraan && (
                                    <p className="text-sm text-red-500">{errors.km_kendaraan}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg border p-6 space-y-4">
                        <h2 className="text-lg font-semibold border-b pb-2">Jenis Pengajuan</h2>
                        <div className="flex gap-4">
                            <button
                                type="button"
                                onClick={() => handleJenisChange('ban')}
                                className={`flex-1 rounded-lg border-2 p-4 text-center transition-colors ${
                                    jenisPengajuan === 'ban'
                                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-950'
                                        : 'border-muted hover:border-blue-300'
                                }`}
                            >
                                <p className="font-semibold">Penggantian Ban</p>
                                <p className="text-sm text-muted-foreground mt-1">Ganti ban baru</p>
                            </button>
                            <button
                                type="button"
                                onClick={() => handleJenisChange('fulkanisir')}
                                className={`flex-1 rounded-lg border-2 p-4 text-center transition-colors ${
                                    jenisPengajuan === 'fulkanisir'
                                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-950'
                                        : 'border-muted hover:border-blue-300'
                                }`}
                            >
                                <p className="font-semibold">Fulkanisir</p>
                                <p className="text-sm text-muted-foreground mt-1">Tambal / vulkanisir ban</p>
                            </button>
                        </div>
                        {errors.jenis_pengajuan && (
                            <p className="text-sm text-red-500">{errors.jenis_pengajuan}</p>
                        )}
                    </div>

                    {jenisPengajuan && (
                        <div className="rounded-lg border p-6 space-y-4">
                            <h2 className="text-lg font-semibold border-b pb-2">Riwayat Penggantian Ban</h2>
                            <div className="space-y-2">
                                <Label htmlFor="tgl_penggantian_terakhir">Tanggal Penggantian Terakhir</Label>
                                <Input
                                    id="tgl_penggantian_terakhir"
                                    type="date"
                                    value={data.tgl_penggantian_terakhir}
                                    onChange={(e) => setData('tgl_penggantian_terakhir', e.target.value)}
                                />
                                {errors.tgl_penggantian_terakhir && (
                                    <p className="text-sm text-red-500">{errors.tgl_penggantian_terakhir}</p>
                                )}
                            </div>
                            <CheckboxGroup
                                label="Posisi Ban yang Diganti Sebelumnya"
                                name="posisi_ban_sebelumnya"
                                value={data.posisi_ban_sebelumnya}
                                onChange={(v) => setData('posisi_ban_sebelumnya', v)}
                                error={errors.posisi_ban_sebelumnya}
                            />
                        </div>
                    )}

                    {jenisPengajuan === 'ban' && (
                        <div className="rounded-lg border p-6 space-y-4">
                            <h2 className="text-lg font-semibold border-b pb-2">Pengajuan Penggantian Ban</h2>
                            <CheckboxGroup
                                label="Posisi Ban yang Diajukan *"
                                name="posisi_ban_diajukan"
                                value={data.posisi_ban_diajukan}
                                onChange={(v) => setData('posisi_ban_diajukan', v)}
                                error={errors.posisi_ban_diajukan}
                            />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="jumlah_ban">Jumlah Ban *</Label>
                                    <Input
                                        id="jumlah_ban"
                                        type="number"
                                        min="1"
                                        value={data.jumlah_ban}
                                        onChange={(e) => setData('jumlah_ban', e.target.value)}
                                        placeholder="Jumlah ban"
                                        required
                                    />
                                    {errors.jumlah_ban && (
                                        <p className="text-sm text-red-500">{errors.jumlah_ban}</p>
                                    )}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="ukuran_ban">Ukuran Ban *</Label>
                                    <Input
                                        id="ukuran_ban"
                                        value={data.ukuran_ban}
                                        onChange={(e) => setData('ukuran_ban', e.target.value)}
                                        placeholder="Contoh: 185/65 R15"
                                        required
                                    />
                                    {errors.ukuran_ban && (
                                        <p className="text-sm text-red-500">{errors.ukuran_ban}</p>
                                    )}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="alasan_penggantian">Alasan Penggantian *</Label>
                                <Textarea
                                    id="alasan_penggantian"
                                    value={data.alasan_penggantian}
                                    onChange={(e) => setData('alasan_penggantian', e.target.value)}
                                    placeholder="Jelaskan kondisi ban dan alasan penggantian"
                                    rows={3}
                                    required
                                />
                                {errors.alasan_penggantian && (
                                    <p className="text-sm text-red-500">{errors.alasan_penggantian}</p>
                                )}
                            </div>
                        </div>
                    )}

                    {jenisPengajuan === 'fulkanisir' && (
                        <div className="rounded-lg border p-6 space-y-4">
                            <h2 className="text-lg font-semibold border-b pb-2">Pengajuan Fulkanisir Ban</h2>
                            <CheckboxGroup
                                label="Posisi Ban yang Diajukan *"
                                name="posisi_ban_diajukan"
                                value={data.posisi_ban_diajukan}
                                onChange={(v) => setData('posisi_ban_diajukan', v)}
                                error={errors.posisi_ban_diajukan}
                            />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="jumlah_ban">Jumlah Ban *</Label>
                                    <Input
                                        id="jumlah_ban"
                                        type="number"
                                        min="1"
                                        value={data.jumlah_ban}
                                        onChange={(e) => setData('jumlah_ban', e.target.value)}
                                        placeholder="Jumlah ban"
                                        required
                                    />
                                    {errors.jumlah_ban && (
                                        <p className="text-sm text-red-500">{errors.jumlah_ban}</p>
                                    )}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="ukuran_ban">Ukuran Ban *</Label>
                                    <Input
                                        id="ukuran_ban"
                                        value={data.ukuran_ban}
                                        onChange={(e) => setData('ukuran_ban', e.target.value)}
                                        placeholder="Contoh: 185/65 R15"
                                        required
                                    />
                                    {errors.ukuran_ban && (
                                        <p className="text-sm text-red-500">{errors.ukuran_ban}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {jenisPengajuan && (
                        <div className="rounded-lg border p-6 space-y-4">
                            <h2 className="text-lg font-semibold border-b pb-2">Lampiran</h2>
                            <div className="space-y-2">
                                <Label htmlFor="foto_sebelum">
                                    Foto Kondisi Ban Sebelum Diganti / Fulkanisir * (maks. 6 foto)
                                </Label>
                                <Input
                                    id="foto_sebelum"
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    onChange={(e) => {
                                        const files = Array.from(e.target.files ?? []).slice(0, 6);
                                        setData('foto_sebelum', files);
                                    }}
                                    required
                                />
                                <p className="text-xs text-muted-foreground">Format: JPG, PNG, WEBP. Maks. 5MB per foto, maks. 6 foto.</p>
                                {data.foto_sebelum.length > 0 && (
                                    <p className="text-xs text-green-600">{data.foto_sebelum.length} foto dipilih</p>
                                )}
                                {errors.foto_sebelum && (
                                    <p className="text-sm text-red-500">{errors.foto_sebelum}</p>
                                )}
                            </div>
                        </div>
                    )}

                    <div className="flex gap-2">
                        <Button type="submit" disabled={processing || !jenisPengajuan}>
                            {processing ? 'Mengirim...' : 'Kirim Pengajuan'}
                        </Button>
                        <Button type="button" variant="outline" onClick={() => window.history.back()}>
                            Batal
                        </Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
