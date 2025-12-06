import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import Lottie from 'lottie-react';
import AnimasiDashboard from '@/assets/animation/deal.json';
import MaLogoHorizontal from '@/assets/images/malogo-horizontal.png';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'PT. Menara Agung',
        href: dashboard().url,
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head>
                <title>Dashboard</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
            </Head>

            <div className="flex h-full flex-1 flex-col items-center justify-center overflow-hidden rounded-xl p-4">
                 <div className="flex justify-center mb-4 sm:mb-6">
                    <img 
                        src={MaLogoHorizontal} 
                        alt="Logo" 
                        className="h-12 sm:h-14 lg:h-22 object-contain drop-shadow-2xl" 
                    />
                </div>
                <div className="w-72 max-w-full">
                    <Lottie 
                        animationData={AnimasiDashboard} 
                        loop={true} 
                        className="h-auto w-full"
                    />
                </div>
                <div className="mt-6 text-center">
                    <span 
                        className="block text-5xl font-semibold leading-tight text-gray-800 dark:text-white"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} 
                    >
                       Information System
                    </span>
                </div>
                
            </div>
        </AppLayout>
    );
}