import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { ChevronLeft, ChevronRight, Download, Eye, Plus, Search, Trash2 } from 'lucide-react';
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
    jenis_pengajuan: 'ban' | 'fulkanisir';
    status: 'pending' | 'setuju' | 'ditolak' | 'diperiksa' | 'finish';
    kacab_email: string | null;
    user: { id: number; name: string } | null;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface Props {
    pengajuans: {
        data: PengajuanBan[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
        links: PaginationLink[];
    };
    filters: { search?: string; status?: string; cabang?: string };
    isAdmin: boolean;
    isKacab: boolean;
    kacabCabang: string | null;
    cabangList: string[];
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Pengajuan Ban', href: '/pengajuan-ban' },
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

const ALL = '_all';

export default function PengajuanBanIndex({ pengajuans, filters, isAdmin, isKacab, kacabCabang, cabangList }: Props) {
    const [search, setSearch] = useState(filters.search || '');
    const [exportFilters, setExportFilters] = useState({
        cabang: ALL,
        status: ALL,
        bulan: ALL,
        tahun: ALL,
    });

    const applyFilter = (key: string, value: string) => {
        router.get('/pengajuan-ban', { ...filters, [key]: value === ALL ? undefined : value }, {
            preserveState: true,
            replace: true,
        });
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.get('/pengajuan-ban', { ...filters, search: search || undefined }, {
            preserveState: true,
            replace: true,
        });
    };

    const handleDelete = async (id: number, nama: string) => {
        const result = await Swal.fire({
            title: 'Konfirmasi Hapus',
            text: `Hapus pengajuan ban untuk ${nama}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ef4444',
            cancelButtonColor: '#6b7280',
            confirmButtonText: 'Ya, Hapus!',
            cancelButtonText: 'Batal',
        });

        if (result.isConfirmed) {
            router.delete(`/pengajuan-ban/${id}`, {
                onSuccess: () => toast.success('Pengajuan berhasil dihapus'),
                onError: () => toast.error('Gagal menghapus pengajuan'),
            });
        }
    };

    const buildExportUrl = () => {
        const params = new URLSearchParams();
        if (exportFilters.cabang !== ALL) params.append('cabang', exportFilters.cabang);
        if (exportFilters.status !== ALL) params.append('status', exportFilters.status);
        if (exportFilters.bulan !== ALL) params.append('bulan', exportFilters.bulan);
        if (exportFilters.tahun !== ALL) params.append('tahun', exportFilters.tahun);
        return `/pengajuan-ban-export?${params.toString()}`;
    };

    const formatDate = (d: string) =>
        new Date(d).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 5 }, (_, i) => (currentYear - i).toString());
    const months = [
        { v: '1', l: 'Januari' }, { v: '2', l: 'Februari' }, { v: '3', l: 'Maret' },
        { v: '4', l: 'April' }, { v: '5', l: 'Mei' }, { v: '6', l: 'Juni' },
        { v: '7', l: 'Juli' }, { v: '8', l: 'Agustus' }, { v: '9', l: 'September' },
        { v: '10', l: 'Oktober' }, { v: '11', l: 'November' }, { v: '12', l: 'Desember' },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Pengajuan Ban" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Pengajuan Penggantian Ban</h1>
                        <p className="text-sm text-muted-foreground">
                            {isKacab && kacabCabang ? `Cabang: ${kacabCabang} — ` : ''}
                            Total: {pengajuans.total} pengajuan
                        </p>
                    </div>
                    {isKacab && (
                        <Button asChild>
                            <Link href="/pengajuan-ban/create">
                                <Plus className="mr-2 h-4 w-4" />
                                Ajukan
                            </Link>
                        </Button>
                    )}
                </div>

                <div className="flex flex-wrap gap-2">
                    <form onSubmit={handleSearch} className="flex gap-2">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                                placeholder="Cari driver, no. polisi..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="pl-9 w-64"
                            />
                        </div>
                        <Button type="submit" variant="outline">Cari</Button>
                    </form>

                    <Select value={filters.status || ALL} onValueChange={(v) => applyFilter('status', v)}>
                        <SelectTrigger className="w-44">
                            <SelectValue placeholder="Semua Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value={ALL}>Semua Status</SelectItem>
                            <SelectItem value="pending">Menunggu Review</SelectItem>
                            <SelectItem value="setuju">Disetujui</SelectItem>
                            <SelectItem value="ditolak">Ditolak</SelectItem>
                            <SelectItem value="diperiksa">Diperiksa</SelectItem>
                            <SelectItem value="finish">Selesai</SelectItem>
                        </SelectContent>
                    </Select>

                    {isAdmin && (
                        <Select value={filters.cabang || ALL} onValueChange={(v) => applyFilter('cabang', v)}>
                            <SelectTrigger className="w-44">
                                <SelectValue placeholder="Semua Cabang" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value={ALL}>Semua Cabang</SelectItem>
                                {cabangList.map((c) => (
                                    <SelectItem key={c} value={c}>{c}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    )}

                    {(filters.search || filters.status || (isAdmin && filters.cabang)) && (
                        <Button variant="outline" onClick={() => router.get('/pengajuan-ban')}>
                            Reset
                        </Button>
                    )}
                </div>

                {isAdmin && (
                    <div className="rounded-lg border p-4 bg-muted/30">
                        <p className="text-sm font-medium mb-3">Export Laporan Excel</p>
                        <div className="flex flex-wrap gap-2 items-end">
                            <Select value={exportFilters.cabang} onValueChange={(v) => setExportFilters(f => ({ ...f, cabang: v }))}>
                                <SelectTrigger className="w-40">
                                    <SelectValue placeholder="Semua Cabang" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value={ALL}>Semua Cabang</SelectItem>
                                    {cabangList.map((c) => (
                                        <SelectItem key={c} value={c}>{c}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            <Select value={exportFilters.status} onValueChange={(v) => setExportFilters(f => ({ ...f, status: v }))}>
                                <SelectTrigger className="w-40">
                                    <SelectValue placeholder="Semua Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value={ALL}>Semua Status</SelectItem>
                                    <SelectItem value="pending">Menunggu Review</SelectItem>
                                    <SelectItem value="setuju">Disetujui</SelectItem>
                                    <SelectItem value="ditolak">Ditolak</SelectItem>
                                    <SelectItem value="diperiksa">Diperiksa</SelectItem>
                                    <SelectItem value="finish">Selesai</SelectItem>
                                </SelectContent>
                            </Select>

                            <Select value={exportFilters.bulan} onValueChange={(v) => setExportFilters(f => ({ ...f, bulan: v }))}>
                                <SelectTrigger className="w-36">
                                    <SelectValue placeholder="Semua Bulan" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value={ALL}>Semua Bulan</SelectItem>
                                    {months.map((m) => (
                                        <SelectItem key={m.v} value={m.v}>{m.l}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            <Select value={exportFilters.tahun} onValueChange={(v) => setExportFilters(f => ({ ...f, tahun: v }))}>
                                <SelectTrigger className="w-28">
                                    <SelectValue placeholder="Semua Tahun" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value={ALL}>Semua Tahun</SelectItem>
                                    {years.map((y) => (
                                        <SelectItem key={y} value={y}>{y}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            <Button asChild variant="outline">
                                <a href={buildExportUrl()} download>
                                    <Download className="mr-2 h-4 w-4" />
                                    Export Excel
                                </a>
                            </Button>
                        </div>
                    </div>
                )}

                <div className="rounded-lg border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-12">No</TableHead>
                                <TableHead>Tanggal</TableHead>
                                <TableHead>Driver</TableHead>
                                <TableHead>Cabang</TableHead>
                                <TableHead>No. Polisi</TableHead>
                                <TableHead>Jenis</TableHead>
                                <TableHead>Status</TableHead>
                                {isAdmin && <TableHead>Diajukan Oleh</TableHead>}
                                <TableHead className="text-right">Aksi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {pengajuans.data.length > 0 ? (
                                pengajuans.data.map((item, index) => (
                                    <TableRow key={item.id}>
                                        <TableCell>{(pengajuans.current_page - 1) * pengajuans.per_page + index + 1}</TableCell>
                                        <TableCell>{formatDate(item.tanggal_pengajuan)}</TableCell>
                                        <TableCell className="font-medium">{item.nama_driver}</TableCell>
                                        <TableCell>{item.cabang}</TableCell>
                                        <TableCell>
                                            <code className="rounded bg-muted px-2 py-1 text-sm">{item.no_polisi}</code>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant="outline">
                                                {item.jenis_pengajuan === 'ban' ? 'Penggantian Ban' : 'Fulkanisir'}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant={STATUS_VARIANT[item.status]}>
                                                {STATUS_LABEL[item.status]}
                                            </Badge>
                                        </TableCell>
                                        {isAdmin && (
                                            <TableCell>
                                                {item.user?.name ?? (
                                                    <span className="text-muted-foreground text-xs">
                                                        Kacab: {item.kacab_email}
                                                    </span>
                                                )}
                                            </TableCell>
                                        )}
                                        <TableCell className="text-right">
                                            <div className="flex justify-end gap-2">
                                                <Button variant="outline" size="sm" asChild>
                                                    <Link href={`/pengajuan-ban/${item.id}`}>
                                                        <Eye className="h-4 w-4" />
                                                    </Link>
                                                </Button>
                                                {(isAdmin || item.status === 'pending') && (
                                                    <Button
                                                        variant="destructive"
                                                        size="sm"
                                                        onClick={() => handleDelete(item.id, item.nama_driver)}
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                )}
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={isAdmin ? 9 : 8} className="text-center py-8 text-muted-foreground">
                                        Tidak ada data pengajuan
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>

                {pengajuans.last_page > 1 && (
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">
                            Menampilkan {(pengajuans.current_page - 1) * pengajuans.per_page + 1}–
                            {Math.min(pengajuans.current_page * pengajuans.per_page, pengajuans.total)} dari {pengajuans.total}
                        </p>
                        <div className="flex gap-1">
                            {pengajuans.links.map((link, i) => {
                                if (link.label === '&laquo; Previous') {
                                    return (
                                        <Button key={i} variant="outline" size="sm" disabled={!link.url}
                                            onClick={() => link.url && router.get(link.url, {}, { preserveState: true })}>
                                            <ChevronLeft className="h-4 w-4" />
                                        </Button>
                                    );
                                }
                                if (link.label === 'Next &raquo;') {
                                    return (
                                        <Button key={i} variant="outline" size="sm" disabled={!link.url}
                                            onClick={() => link.url && router.get(link.url, {}, { preserveState: true })}>
                                            <ChevronRight className="h-4 w-4" />
                                        </Button>
                                    );
                                }
                                return (
                                    <Button key={i} variant={link.active ? 'default' : 'outline'} size="sm"
                                        disabled={!link.url}
                                        onClick={() => link.url && router.get(link.url, {}, { preserveState: true })}>
                                        {link.label}
                                    </Button>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </AppLayout>
    );
}
