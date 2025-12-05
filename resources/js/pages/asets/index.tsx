import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { Plus, Pencil, Trash2, Search, ChevronLeft, ChevronRight, ZoomIn, QrCode, Download, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';
import Swal from 'sweetalert2';
import { useState, useEffect } from 'react';

interface Aset {
    id: number;
    kode_aset: string;
    nama_aset: string;
    pemilik_aset: string;
    kritikalitas: string;
    lokasi: string;
    status: string;
    tanggal_perolehan: string;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface Props {
    asets: {
        data: Aset[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
        links: PaginationLink[];
    };
    filters: {
        search?: string;
    };
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Aset', href: '/asets' },
];

const getKritikalitasColor = (kritikalitas: string) => {
    switch (kritikalitas) {
        case 'Kritis': return 'destructive';
        case 'Tinggi': return 'default';
        case 'Sedang': return 'secondary';
        case 'Rendah': return 'outline';
        default: return 'secondary';
    }
};

const getStatusColor = (status: string) => {
    switch (status) {
        case 'Aktif': return 'default';
        case 'Maintenance': return 'secondary';
        case 'Rusak': return 'destructive';
        case 'Dihapus': return 'outline';
        default: return 'secondary';
    }
};

export default function AsetsIndex({ asets, filters }: Props) {
    const [search, setSearch] = useState(filters.search || '');
    const [previewImage, setPreviewImage] = useState<{ url: string; name: string } | null>(null);
    const [qrCodeModal, setQrCodeModal] = useState<{ aset: any; qrCode: string } | null>(null);
    const [loadingQr, setLoadingQr] = useState(false);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            router.get('/asets', { search }, {
                preserveState: true,
                replace: true,
            });
        }, 300);

        return () => clearTimeout(delayDebounceFn);
    }, [search]);

    const handleShowQrCode = async (aset: any) => {
        setLoadingQr(true);
        try {
            const response = await fetch(`/qrcode/aset/${aset.id}`);
            const data = await response.json();
            
            if (data.success) {
                setQrCodeModal({ aset, qrCode: data.qrCode });
            } else {
                toast.error('Gagal generate QR Code');
            }
        } catch (error) {
            toast.error('Terjadi kesalahan saat generate QR Code');
        } finally {
            setLoadingQr(false);
        }
    };

    const handleDownloadQrCode = () => {
        if (!qrCodeModal) return;

        // Convert SVG to PNG
        const svg = qrCodeModal.qrCode;
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        
        // Set canvas size
        canvas.width = 400;
        canvas.height = 400;
        
        // Create blob from SVG
        const svgBlob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(svgBlob);
        
        img.onload = () => {
            // Fill white background
            if (ctx) {
                ctx.fillStyle = 'white';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            }
            
            // Convert to PNG and download
            canvas.toBlob((blob) => {
                if (blob) {
                    const pngUrl = URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = pngUrl;
                    link.download = `${qrCodeModal.aset.kode_aset}.png`;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    URL.revokeObjectURL(pngUrl);
                    toast.success('QR Code berhasil didownload');
                }
            }, 'image/png');
            
            URL.revokeObjectURL(url);
        };
        
        img.src = url;
    };

    const handleDelete = async (id: number, name: string) => {
        const result = await Swal.fire({
            title: 'Konfirmasi Hapus',
            text: `Apakah Anda yakin ingin menghapus aset "${name}"?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ef4444',
            cancelButtonColor: '#6b7280',
            confirmButtonText: 'Ya, Hapus!',
            cancelButtonText: 'Batal',
        });

        if (result.isConfirmed) {
            router.delete(`/asets/${id}`, {
                onSuccess: () => {
                    toast.success(`${name} berhasil dihapus`);
                },
                onError: () => {
                    toast.error('Gagal menghapus aset');
                },
            });
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Aset" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Manajemen Aset</h1>
                        <p className="text-sm text-muted-foreground">
                            Total: {asets.total} aset
                        </p>
                    </div>
                    <Button asChild>
                        <Link href="/asets/create">
                            <Plus className="mr-2 h-4 w-4" />
                            Tambah Aset
                        </Link>
                    </Button>
                </div>

                {/* Search */}
                <div className="flex items-center gap-2">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            placeholder="Cari kode, nama, pemilik, atau lokasi..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="pl-9"
                        />
                    </div>
                </div>

                <div className="rounded-lg border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Foto</TableHead>
                                <TableHead>Kode Aset</TableHead>
                                <TableHead>Nama Aset</TableHead>
                                <TableHead>Pemilik</TableHead>
                                <TableHead>Lokasi</TableHead>
                                <TableHead>Kritikalitas</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Aksi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {asets.data.length > 0 ? (
                                asets.data.map((aset: any) => (
                                    <TableRow key={aset.id}>
                                        <TableCell>
                                            {aset.foto_aset ? (
                                                <div className="relative group">
                                                    <img 
                                                        src={`/assets/images/foto_aset/${aset.foto_aset}`} 
                                                        alt={aset.nama_aset}
                                                        className="h-12 w-12 object-cover rounded border cursor-pointer hover:opacity-80 transition-opacity"
                                                        onClick={() => setPreviewImage({
                                                            url: `/assets/images/foto_aset/${aset.foto_aset}`,
                                                            name: aset.nama_aset
                                                        })}
                                                    />
                                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 rounded cursor-pointer"
                                                        onClick={() => setPreviewImage({
                                                            url: `/assets/images/foto_aset/${aset.foto_aset}`,
                                                            name: aset.nama_aset
                                                        })}>
                                                        <ZoomIn className="h-5 w-5 text-white" />
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="h-12 w-12 bg-muted rounded border flex items-center justify-center text-xs text-muted-foreground">
                                                    No Img
                                                </div>
                                            )}
                                        </TableCell>
                                        <TableCell className="font-medium">
                                            <code className="rounded bg-muted px-2 py-1 text-sm">
                                                {aset.kode_aset}
                                            </code>
                                        </TableCell>
                                        <TableCell>{aset.nama_aset}</TableCell>
                                        <TableCell>{aset.pemilik_aset || '-'}</TableCell>
                                        <TableCell>{aset.lokasi || '-'}</TableCell>
                                        <TableCell>
                                            <Badge variant={getKritikalitasColor(aset.kritikalitas)}>
                                                {aset.kritikalitas}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant={getStatusColor(aset.status)}>
                                                {aset.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex justify-end gap-2">
                                                <Button 
                                                    variant="secondary" 
                                                    size="sm"
                                                    onClick={() => handleShowQrCode(aset)}
                                                    disabled={loadingQr}
                                                >
                                                    <QrCode className="h-4 w-4" />
                                                </Button>
                                                <Button variant="outline" size="sm" asChild>
                                                    <Link href={`/asets/${aset.id}/edit`}>
                                                        <Pencil className="h-4 w-4" />
                                                    </Link>
                                                </Button>
                                                <Button
                                                    variant="destructive"
                                                    size="sm"
                                                    onClick={() => handleDelete(aset.id, aset.nama_aset)}
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={9} className="text-center py-8 text-muted-foreground">
                                        Tidak ada data aset
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>

                {/* Pagination */}
                {asets.last_page > 1 && (
                    <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                            Menampilkan {((asets.current_page - 1) * asets.per_page) + 1} - {Math.min(asets.current_page * asets.per_page, asets.total)} dari {asets.total} data
                        </div>
                        <div className="flex gap-1">
                            {asets.links.map((link, index) => {
                                if (link.label === '&laquo; Previous') {
                                    return (
                                        <Button
                                            key={index}
                                            variant="outline"
                                            size="sm"
                                            disabled={!link.url}
                                            onClick={() => link.url && router.get(link.url, {}, {
                                                preserveState: true,
                                                preserveScroll: true,
                                            })}
                                        >
                                            <ChevronLeft className="h-4 w-4" />
                                        </Button>
                                    );
                                }
                                if (link.label === 'Next &raquo;') {
                                    return (
                                        <Button
                                            key={index}
                                            variant="outline"
                                            size="sm"
                                            disabled={!link.url}
                                            onClick={() => link.url && router.get(link.url, {}, {
                                                preserveState: true,
                                                preserveScroll: true,
                                            })}
                                        >
                                            <ChevronRight className="h-4 w-4" />
                                        </Button>
                                    );
                                }
                                return (
                                    <Button
                                        key={index}
                                        variant={link.active ? 'default' : 'outline'}
                                        size="sm"
                                        disabled={!link.url}
                                        onClick={() => link.url && router.get(link.url, {}, {
                                            preserveState: true,
                                            preserveScroll: true,
                                        })}
                                    >
                                        {link.label}
                                    </Button>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>

            {/* Preview Image Dialog */}
            <Dialog open={!!previewImage} onOpenChange={() => setPreviewImage(null)}>
                <DialogContent className="max-w-3xl">
                    <DialogHeader>
                        <DialogTitle>{previewImage?.name}</DialogTitle>
                    </DialogHeader>
                    <div className="flex items-center justify-center">
                        <img 
                            src={previewImage?.url} 
                            alt={previewImage?.name}
                            className="max-h-[70vh] w-auto object-contain rounded-lg"
                        />
                    </div>
                </DialogContent>
            </Dialog>

            {/* QR Code Modal */}
            <Dialog open={!!qrCodeModal} onOpenChange={() => setQrCodeModal(null)}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>QR Code Aset - {qrCodeModal?.aset.kode_aset}</DialogTitle>
                        <DialogDescription>
                            Scan QR Code untuk melihat detail lengkap aset atau download untuk membuat stiker
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                        {/* QR Code Display */}
                        <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-lg">
                            <div 
                                className="bg-white p-4 rounded-lg shadow-lg"
                                dangerouslySetInnerHTML={{ __html: qrCodeModal?.qrCode || '' }}
                            />
                            <p className="mt-4 text-sm font-medium">{qrCodeModal?.aset.nama_aset}</p>
                            <code className="text-xs text-muted-foreground">{qrCodeModal?.aset.kode_aset}</code>
                        </div>

                        {/* Asset Info */}
                        <div className="grid grid-cols-2 gap-4 p-4 bg-muted rounded-lg">
                            <div>
                                <p className="text-sm text-muted-foreground">Pemilik</p>
                                <p className="font-medium">{qrCodeModal?.aset.pemilik_aset || '-'}</p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Lokasi</p>
                                <p className="font-medium">{qrCodeModal?.aset.lokasi || '-'}</p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Kritikalitas</p>
                                <Badge variant={getKritikalitasColor(qrCodeModal?.aset.kritikalitas || '')}>
                                    {qrCodeModal?.aset.kritikalitas}
                                </Badge>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Status</p>
                                <Badge variant={getStatusColor(qrCodeModal?.aset.status || '')}>
                                    {qrCodeModal?.aset.status}
                                </Badge>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2">
                            <Button 
                                onClick={handleDownloadQrCode}
                                className="flex-1"
                            >
                                <Download className="mr-2 h-4 w-4" />
                                Download QR Code
                            </Button>
                            <Button 
                                variant="outline"
                                onClick={() => window.open(`/cek/qrcode/${qrCodeModal?.aset.id}`, '_blank')}
                                className="flex-1"
                            >
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Lihat Detail
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </AppLayout>
    );
}
