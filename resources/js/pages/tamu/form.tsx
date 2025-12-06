import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Head, useForm } from '@inertiajs/react';
import { Building2, Phone, User, FileText, Users, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import rocketAnimation from '@/assets/animation/bisnis.json';
import MaLogoHorizontal from '@/assets/images/malogo-horizontal.png';
import Swal from 'sweetalert2';

interface Release {
    id: number;
    judul: string;
    isi_berita: string;
    tanggal_publikasi: string;
    fotos: {
        foto1?: string;
        foto2?: string;
        foto3?: string;
        foto4?: string;
        foto5?: string;
    } | null;
}

interface Props {
    releases: Release[];
}

export default function TamuForm({ releases }: Props) {
    const [showSplash, setShowSplash] = useState(true);
    const [showNewsModal, setShowNewsModal] = useState(false);
    const [currentReleaseIndex, setCurrentReleaseIndex] = useState(0);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const [isReadingDetail, setIsReadingDetail] = useState(false);
    const [showFullNews, setShowFullNews] = useState(false);
    
    const { data, setData, post, processing, errors } = useForm({
        nama_lengkap: '',
        instansi: '',
        nomor_telepon: '',
        bertemu_dengan: '',
        keperluan: '',
    });

    const getPhotos = (fotos: Release['fotos']) => {
        if (!fotos) return [];
        return [fotos.foto1, fotos.foto2, fotos.foto3, fotos.foto4, fotos.foto5]
            .filter(Boolean) as string[];
    };

    const currentRelease = releases[currentReleaseIndex];

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
            if (releases.length > 0) {
                setShowNewsModal(true);
            }
        }, 3000);
        return () => clearTimeout(timer);
    }, [releases]);

    useEffect(() => {
        if (!showNewsModal || !currentRelease?.fotos) return;
        
        const photos = getPhotos(currentRelease.fotos);
        if (photos.length <= 1) return;
        
        const interval = setInterval(() => {
            setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
        }, 3000); 
        
        return () => clearInterval(interval);
    }, [showNewsModal, currentReleaseIndex]);

    useEffect(() => {
        if (!showNewsModal || isReadingDetail || releases.length <= 1) return;
        
        console.log('Auto change release started');
        
        const interval = setInterval(() => {
            // Random release index
            const randomIndex = Math.floor(Math.random() * releases.length);
            console.log('Changing to release index:', randomIndex);
            setCurrentReleaseIndex(randomIndex);
            
            // Random starting photo index
            const newRelease = releases[randomIndex];
            if (newRelease?.fotos) {
                const photos = getPhotos(newRelease.fotos);
                if (photos.length > 0) {
                    const randomPhotoIndex = Math.floor(Math.random() * photos.length);
                    console.log('Starting at photo index:', randomPhotoIndex);
                    setCurrentPhotoIndex(randomPhotoIndex);
                }
            }
        }, 15000);
        
        return () => {
            console.log('Auto change release stopped');
            clearInterval(interval);
        };
    }, [showNewsModal, isReadingDetail, releases]);

    const handleReadMore = () => {
        setIsReadingDetail(true);
        setShowFullNews(true);
    };

    const handleCloseDetail = () => {
        setIsReadingDetail(false);
        setShowFullNews(false);
    };

    const handleViewAllNews = () => {
        window.open('https://menara-agung.com/', '_blank');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/tamu', {
            onSuccess: () => {
                Swal.fire({
                    icon: 'success',
                    title: 'Berhasil!',
                    text: 'Data berhasil disimpan. Terima kasih atas kunjungan Anda.',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#dc2626',
                    timer: 3000,
                    timerProgressBar: true,
                }).then(() => {
                    window.location.href = 'https://menara-agung.com/';
                });
            },
            onError: () => {
                Swal.fire({
                    icon: 'error',
                    title: 'Gagal!',
                    text: 'Terjadi kesalahan saat menyimpan data.',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#dc2626',
                });
            }
        });
    };

    if (showSplash) {
        return (
            <>
                <Head title="Buku Tamu Digital" />
                <div className="fixed inset-0 bg-gradient-to-br from-red-600 via-red-700 to-red-800 flex items-center justify-center z-50">
                    <div className="text-center">
                        <div className="w-full h-full mx-auto mb-8">
                            <Lottie 
                                animationData={rocketAnimation} 
                                loop={true}
                            />
                        </div>
                        <h1 className="text-4xl font-bold text-white mb-4 animate-pulse">
                            Tunggu Sebentar
                        </h1>
                        <p className="text-white/90 text-lg">
                            Sedang Mempersiapkan Buku Tamu
                        </p>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <Head title="Buku Tamu Digital" />
            
            <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-red-50">
                {/* Decorative Top Bar */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600 via-white to-red-600"></div>
                
                {/* Animated Background Elements */}
                <div className="absolute top-20 left-10 w-64 h-64 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="absolute top-40 right-10 w-64 h-64 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

                <div className="relative z-10 container mx-auto px-4 py-6 sm:py-8 lg:py-12">
                    <div className="max-w-6xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-6 sm:mb-8 lg:mb-10 animate-fade-in">
                            <div className="flex justify-center mb-4 sm:mb-6">
                                <img 
                                    src={MaLogoHorizontal} 
                                    alt="Logo" 
                                    className="h-14 sm:h-16 lg:h-24 object-contain drop-shadow-2xl"
                                />
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent mb-2 sm:mb-3">
                                Buku Tamu Digital
                            </h1>
                        </div>

                        {/* Main Content */}
                        <div className="max-w-2xl mx-auto">
                            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 border-t-4 border-red-600 relative overflow-hidden animate-slide-up">
                                {/* Decorative Elements */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-600 to-transparent opacity-10 rounded-bl-full"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-red-600 to-transparent opacity-10 rounded-tr-full"></div>
                                
                                {/* Form */}
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {/* Nama Lengkap */}
                                    <div className="space-y-2 group">
                                        <Label htmlFor="nama_lengkap" className="text-gray-700 font-semibold flex items-center gap-2">
                                            <User className="h-4 w-4 text-red-600" />
                                            Nama Lengkap <span className="text-red-600">*</span>
                                        </Label>
                                        <Input
                                            id="nama_lengkap"
                                            value={data.nama_lengkap}
                                            onChange={(e) => setData('nama_lengkap', e.target.value)}
                                            placeholder="Masukkan nama lengkap Anda"
                                            className="border-gray-300 focus:border-red-500 focus:ring-red-500 h-11 sm:h-12 transition-all duration-300 group-hover:border-red-300"
                                            required
                                        />
                                        {errors.nama_lengkap && (
                                            <p className="text-sm text-red-600 flex items-center gap-1">
                                                <span className="text-xs">⚠</span> {errors.nama_lengkap}
                                            </p>
                                        )}
                                    </div>

                                    {/* Instansi */}
                                    <div className="space-y-2 group">
                                        <Label htmlFor="instansi" className="text-gray-700 font-semibold flex items-center gap-2">
                                            <Building2 className="h-4 w-4 text-red-600" />
                                            Instansi/Perusahaan <span className="text-red-600">*</span>
                                        </Label>
                                        <Input
                                            id="instansi"
                                            value={data.instansi}
                                            onChange={(e) => setData('instansi', e.target.value)}
                                            placeholder="Nama instansi atau perusahaan"
                                            className="border-gray-300 focus:border-red-500 focus:ring-red-500 h-11 sm:h-12 transition-all duration-300 group-hover:border-red-300"
                                            required
                                        />
                                        {errors.instansi && (
                                            <p className="text-sm text-red-600 flex items-center gap-1">
                                                <span className="text-xs">⚠</span> {errors.instansi}
                                            </p>
                                        )}
                                    </div>

                                    {/* Nomor Telepon */}
                                    <div className="space-y-2 group">
                                        <Label htmlFor="nomor_telepon" className="text-gray-700 font-semibold flex items-center gap-2">
                                            <Phone className="h-4 w-4 text-red-600" />
                                            Nomor Telepon <span className="text-red-600">*</span>
                                        </Label>
                                        <Input
                                            id="nomor_telepon"
                                            type="tel"
                                            value={data.nomor_telepon}
                                            onChange={(e) => {
                                                const value = e.target.value.replace(/\D/g, '');
                                                setData('nomor_telepon', value);
                                            }}
                                            placeholder="Contoh: 08123456789"
                                            className="border-gray-300 focus:border-red-500 focus:ring-red-500 h-11 sm:h-12 transition-all duration-300 group-hover:border-red-300"
                                            required
                                        />
                                        {errors.nomor_telepon && (
                                            <p className="text-sm text-red-600 flex items-center gap-1">
                                                <span className="text-xs">⚠</span> {errors.nomor_telepon}
                                            </p>
                                        )}
                                    </div>

                                    {/* Bertemu Dengan */}
                                    <div className="space-y-2 group">
                                        <Label htmlFor="bertemu_dengan" className="text-gray-700 font-semibold flex items-center gap-2">
                                            <Users className="h-4 w-4 text-red-600" />
                                            Bertemu Dengan <span className="text-red-600">*</span>
                                        </Label>
                                        <Input
                                            id="bertemu_dengan"
                                            value={data.bertemu_dengan}
                                            onChange={(e) => setData('bertemu_dengan', e.target.value)}
                                            placeholder="Nama orang yang akan ditemui"
                                            className="border-gray-300 focus:border-red-500 focus:ring-red-500 h-11 sm:h-12 transition-all duration-300 group-hover:border-red-300"
                                            required
                                        />
                                        {errors.bertemu_dengan && (
                                            <p className="text-sm text-red-600 flex items-center gap-1">
                                                <span className="text-xs">⚠</span> {errors.bertemu_dengan}
                                            </p>
                                        )}
                                    </div>

                                    {/* Keperluan */}
                                    <div className="space-y-2 group">
                                        <Label htmlFor="keperluan" className="text-gray-700 font-semibold flex items-center gap-2">
                                            <FileText className="h-4 w-4 text-red-600" />
                                            Keperluan <span className="text-red-600">*</span>
                                        </Label>
                                        <Textarea
                                            id="keperluan"
                                            value={data.keperluan}
                                            onChange={(e) => setData('keperluan', e.target.value)}
                                            placeholder="Jelaskan keperluan kunjungan Anda"
                                            rows={4}
                                            className="border-gray-300 focus:border-red-500 focus:ring-red-500 resize-none transition-all duration-300 group-hover:border-red-300"
                                            required
                                        />
                                        {errors.keperluan && (
                                            <p className="text-sm text-red-600 flex items-center gap-1">
                                                <span className="text-xs">⚠</span> {errors.keperluan}
                                            </p>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <Button 
                                        type="submit" 
                                        disabled={processing}
                                        className="w-full h-12 sm:h-14 bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:via-red-800 hover:to-red-900 text-white font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] rounded-xl"
                                    >
                                        {processing ? (
                                            <span className="flex items-center gap-2">
                                                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Mengirim Data...
                                            </span>
                                        ) : (
                                            'Kirim Data Kunjungan'
                                        )}
                                    </Button>
                                </form>

                                {/* Footer Info */}
                                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                                    <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                        </svg>
                                        Data Anda dijaga kerahasiaannya
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="mt-6 sm:mt-8 text-center text-gray-600 text-sm px-4">
                            <p> PT. Menara Agung Main Dealer Sumatera Barat</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* News Modal */}
            <Dialog open={showNewsModal} onOpenChange={setShowNewsModal}>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-red-600">
                            Berita Terbaru
                        </DialogTitle>
                        <DialogDescription>
                            Informasi terkini dari PT. Menara Agung
                        </DialogDescription>
                    </DialogHeader>

                    {currentRelease && (
                        <div className="space-y-4">
                            {/* Photo Slider */}
                            {currentRelease.fotos && getPhotos(currentRelease.fotos).length > 0 && (
                                <div className="relative h-64 md:h-96 rounded-lg overflow-hidden bg-gray-100">
                                    <img
                                        src={`/assets/images/release/${getPhotos(currentRelease.fotos)[currentPhotoIndex]}`}
                                        alt={currentRelease.judul}
                                        className="w-full h-full object-cover"
                                    />
                                    
                                    {/* Photo Navigation */}
                                    {getPhotos(currentRelease.fotos).length > 1 && (
                                        <>
                                            <button
                                                onClick={() => setCurrentPhotoIndex((prev) => 
                                                    prev === 0 ? getPhotos(currentRelease.fotos!).length - 1 : prev - 1
                                                )}
                                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                                            >
                                                <ChevronLeft className="h-6 w-6" />
                                            </button>
                                            <button
                                                onClick={() => setCurrentPhotoIndex((prev) => 
                                                    (prev + 1) % getPhotos(currentRelease.fotos!).length
                                                )}
                                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                                            >
                                                <ChevronRight className="h-6 w-6" />
                                            </button>
                                            
                                            {/* Photo Indicators */}
                                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                                {getPhotos(currentRelease.fotos).map((_, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => setCurrentPhotoIndex(index)}
                                                        className={`w-2 h-2 rounded-full transition-all ${
                                                            index === currentPhotoIndex 
                                                                ? 'bg-white w-8' 
                                                                : 'bg-white/50'
                                                        }`}
                                                    />
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                            )}

                            {/* News Content */}
                            <div>
                                <h3 className="text-xl font-bold mb-2">{currentRelease.judul}</h3>
                                <p className="text-sm text-gray-500 mb-4">
                                    {new Date(currentRelease.tanggal_publikasi).toLocaleDateString('id-ID', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric'
                                    })}
                                </p>
                                
                                <div className="text-gray-700">
                                    {showFullNews ? (
                                        <div className="whitespace-pre-wrap">{currentRelease.isi_berita}</div>
                                    ) : (
                                        <p>{currentRelease.isi_berita.substring(0, 200)}...</p>
                                    )}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-2 pt-4 border-t">
                                {!showFullNews ? (
                                    <Button 
                                        onClick={handleReadMore}
                                        className="flex-1 bg-red-600 hover:bg-red-700"
                                    >
                                        Baca Selengkapnya
                                    </Button>
                                ) : (
                                    <Button 
                                        onClick={handleCloseDetail}
                                        variant="outline"
                                        className="flex-1"
                                    >
                                        Tutup Detail
                                    </Button>
                                )}
                                <Button 
                                    onClick={handleViewAllNews}
                                    variant="outline"
                                    className="flex-1"
                                >
                                    Lihat Semua Berita
                                </Button>
                            </div>

                            {/* Release Counter */}
                            {releases.length > 1 && (
                                <p className="text-center text-sm text-gray-500">
                                    Berita {currentReleaseIndex + 1} dari {releases.length}
                                </p>
                            )}
                        </div>
                    )}
                </DialogContent>
            </Dialog>

            <style>{`
                @keyframes blob {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    25% { transform: translate(20px, -50px) scale(1.1); }
                    50% { transform: translate(-20px, 20px) scale(0.9); }
                    75% { transform: translate(50px, 50px) scale(1.05); }
                }
                
                .animate-blob {
                    animation: blob 7s infinite;
                }
                
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(-20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                .animate-fade-in {
                    animation: fade-in 0.8s ease-out;
                }
                
                @keyframes slide-in {
                    from { opacity: 0; transform: translateX(20px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                
                .animate-slide-in {
                    animation: slide-in 0.5s ease-out;
                }
                
                @keyframes slide-up {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                .animate-slide-up {
                    animation: slide-up 0.6s ease-out;
                }
            `}</style>
        </>
    );
}
