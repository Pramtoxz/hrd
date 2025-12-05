<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detail Asset PT.Menara Agung</title>
    
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
    <script src="https://unpkg.com/@phosphor-icons/web"></script>

    <style>
        body { 
            font-family: 'Inter', sans-serif; 
            -webkit-font-smoothing: antialiased; 
            -moz-osx-font-smoothing: grayscale; 
        }
        @keyframes fadeInUp { 
            from { opacity: 0; transform: translateY(20px); } 
            to { opacity: 1; transform: translateY(0); } 
        }
        .animate-fade-in-up { 
            animation: fadeInUp 0.8s ease-out forwards; 
            opacity: 0; 
        }
        .delay-100 { animation-delay: 100ms; } .delay-200 { animation-delay: 200ms; } .delay-300 { animation-delay: 300ms; } .delay-400 { animation-delay: 400ms; } .delay-500 { animation-delay: 500ms; } .delay-600 { animation-delay: 600ms; } .delay-700 { animation-delay: 700ms; } .delay-800 { animation-delay: 800ms; }
        
        .glass-card { 
            background: rgba(255, 255, 255, 0.07); 
            backdrop-filter: blur(16px); 
            -webkit-backdrop-filter: blur(16px); 
            border: 1px solid rgba(255, 255, 255, 0.2); 
        }
    </style>
</head>
<body class="bg-gray-900 text-white overflow-x-hidden">

    <div id="preloader" class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 transition-opacity duration-1000 ease-out">
        <lottie-player 
            src="{{ asset('assets/animation/dashboard.json') }}" 
            background="transparent" 
            speed="1" 
            style="width: 300px; height: 300px;" 
            loop 
            autoplay>
        </lottie-player>
    </div>

    <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#FF3333]/30 via-gray-900 to-black z-0"></div>

    <main class="relative z-10 w-full min-h-dvh py-12 px-4 sm:px-6 lg:px-8 flex items-center">
        
        <div class="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">

            <div class="lg:col-span-2 animate-fade-in-up">
                <div class="relative glass-card rounded-3xl p-4 sm:p-6 h-full shadow-2xl shadow-black/30 overflow-hidden transition-all duration-300 hover:border-white/30 hover:shadow-lg hover:shadow-red-900/10">
                    <div class="absolute -bottom-16 -left-16 w-64 h-64 opacity-10">
                        <lottie-player src="{{ asset('assets/images/dashboard.json') }}" background="transparent" speed="0.5" style="width: 100%; height: 100%;" loop autoplay></lottie-player>
                    </div>

                    <div class="relative w-full aspect-square flex items-center justify-center">
                        @if($aset->foto_aset)
                            <img src="{{ asset('assets/images/foto_aset/' . $aset->foto_aset) }}" alt="Foto {{ $aset->nama_aset }}" class="w-full h-full object-cover rounded-2xl shadow-lg shadow-black/50">
                        @else
                            <div class="w-full h-full bg-gray-700/50 rounded-2xl flex items-center justify-center">
                                <i class="ph-fill ph-image text-7xl text-gray-500" role="img" aria-label="Placeholder image icon"></i>
                            </div>
                        @endif
                    </div>
                    <div class="mt-6 text-center">
                        <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-white">{{ $aset->nama_aset }}</h2>
                        <p class="text-red-300 font-medium">{{ $aset->kode_aset }}</p>
                    </div>
                </div>
            </div>

            <div class="lg:col-span-3 animate-fade-in-up delay-200">
                <div class="glass-card rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/30 h-full transition-all duration-300 hover:border-white/30 hover:shadow-lg hover:shadow-red-900/10">
                    <div class="text-center mb-6 md:mb-8 animate-fade-in-up delay-300">
                        <img src="{{ asset('assets/images/master/logo-menara-horizontal.png') }}" alt="Logo PT. Menara Agung" class="mx-auto h-auto" style="width: 100%; max-width: 380px;">
                        <h3 class="text-2xl sm:text-3xl font-extrabold mt-4 text-white tracking-wider">Detail Aset Perusahaan</h3>
                    </div>
                    
                    <div class="space-y-4 md:space-y-5">
                        
                        <div class="flex items-start animate-fade-in-up delay-400">
                            <div class="bg-red-500/10 p-2 rounded-full mr-4 shrink-0">
                                <i class="ph-bold ph-map-pin text-xl text-red-300" role="img" aria-label="Location icon"></i>
                            </div>
                            <div>
                                <p class="text-sm font-medium text-gray-400">Lokasi</p>
                                <p class="font-semibold text-base sm:text-lg text-white -mt-1">{{ $aset->lokasi ?? '-' }}</p>
                            </div>
                        </div>

                        <div class="flex items-start animate-fade-in-up delay-500">
                            <div class="bg-red-500/10 p-2 rounded-full mr-4 shrink-0">
                                <i class="ph-bold ph-user-circle text-xl text-red-300" role="img" aria-label="Owner icon"></i>
                            </div>
                            <div>
                                <p class="text-sm font-medium text-gray-400">Pemilik</p>
                                <p class="font-semibold text-base sm:text-lg text-white -mt-1">{{ $aset->pemilik_aset ?? '-' }}</p>
                            </div>
                        </div>

                        <div class="flex items-start animate-fade-in-up delay-600">
                            <div class="bg-red-500/10 p-2 rounded-full mr-4 shrink-0">
                                <i class="ph-bold ph-calendar-check text-xl text-red-300" role="img" aria-label="Acquisition date icon"></i>
                            </div>
                            <div>
                                <p class="text-sm font-medium text-gray-400">Tanggal Perolehan</p>
                                <p class="font-semibold text-base sm:text-lg text-white -mt-1">{{ $aset->tanggal_perolehan ? \Carbon\Carbon::parse($aset->tanggal_perolehan)->translatedFormat('d F Y') : '-' }}</p>
                            </div>
                        </div>

                        <div class="flex items-start animate-fade-in-up delay-700">
                            <div class="bg-red-500/10 p-2 rounded-full mr-4 shrink-0">
                                <i class="ph-bold ph-shield-warning text-xl text-red-300" role="img" aria-label="Criticality level icon"></i>
                            </div>
                            <div>
                                <p class="text-sm font-medium text-gray-400">Tingkat Kritikalitas</p>
                                <p class="font-semibold text-base sm:text-lg text-white -mt-1">{{ $aset->kritikalitas ?? '-' }}</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start animate-fade-in-up delay-800">
                            <div class="bg-red-500/10 p-2 rounded-full mr-4 shrink-0">
                                <i class="ph-bold ph-heartbeat text-xl text-red-300" role="img" aria-label="Asset status icon"></i>
                            </div>
                            <div>
                                <p class="text-sm font-medium text-gray-400">Status Aset</p>
                                @if($aset->status)
                                    <span class="inline-block mt-1 px-3 py-1 text-sm font-bold bg-green-500/20 text-green-300 rounded-full">Kondisi Baik</span>
                                @else
                                    <span class="inline-block mt-1 px-3 py-1 text-sm font-bold bg-red-500/20 text-red-300 rounded-full">Perlu Perbaikan</span>
                                @endif
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-8 pt-6 border-t border-white/10 animate-fade-in-up delay-800">
                        <h4 class="text-sm font-medium text-gray-400 mb-2">Spesifikasi Teknis</h4>
                        <p class="text-gray-300 leading-relaxed">{{ $aset->spesifikasi ?? 'Tidak ada spesifikasi teknis yang tercatat.' }}</p>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <script>
        window.addEventListener('load', function() {
            const preloader = document.getElementById('preloader');
            if (preloader) {
                preloader.classList.add('opacity-0');
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 1000); 
            }
        });
    </script>
</body>
</html>