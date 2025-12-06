import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Head, useForm, usePage, router } from '@inertiajs/react';
import { Building2, Phone, User, FileText, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import rocketAnimation from '@/assets/animation/bisnis.json';
import MaLogoHorizontal from '@/assets/images/malogo-horizontal.png';
import Swal from 'sweetalert2';

export default function TamuForm() {
    const [showSplash, setShowSplash] = useState(true);
    
    const { data, setData, post, processing, errors } = useForm({
        nama_lengkap: '',
        instansi: '',
        nomor_telepon: '',
        bertemu_dengan: '',
        keperluan: '',
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

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
                    router.visit('/');
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
