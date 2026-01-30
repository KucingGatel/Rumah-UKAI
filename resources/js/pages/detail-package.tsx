import { Link, usePage, Head } from '@inertiajs/react';
import type { SharedData } from '@/types';
import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/navbar';
import { NavFooter } from '@/components/nav-footer';
import { Archive, File, FilesIcon, FileStack, FileText, Search, Timer } from 'lucide-react';
import { index } from '@/actions/Laravel/Fortify/Http/Controllers/RecoveryCodeController';
import CTA from '@/components/cta';

interface Package {
    id: number;
    image: string;
    name: string;
    price: string;
    category: string[];
    subjects: string[];
    amount: string;
    question: string;
    duration: string;
    attemp: string;
    closed: string;
}

interface DetailPageProps {
    package: Package;
    packages: Package[];
}

export default function DetailPackage() {
    const { package: currentPackage, packages } = usePage<SharedData & DetailPageProps>().props;
    const { auth } = usePage<SharedData>().props;
    const [scrollY, setScrollY] = useState(0);
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handlepackage = () => {
        if (!auth.user) {
            alert('Anda harus login terlebih dahulu');
            window.location.href = '/login';
        } else {
            window.location.href = `/checkout/${currentPackage.id}`;
        }
    }

    return (
        <>
            <Head title={`${currentPackage.name}`} />
            <div className="min-h-screen font-poppins bg-stone-50">
                <Navbar />

                {/* Hero Section */}
                <img
                    src={currentPackage.image}
                    className='bg-orange-400/80 object-cover relative overflow-hidden w-full h-100'
                    style={{
                        transform: `translateY(${scrollY * 0.5}px)`,
                    }}
                >
                </img>

                <div className="relative bg-gray-200">
                    <section className="my-20 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10 -mt-12 bg-stone-50">
                        <div className='max-w-7xl mx-auto'>
                            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                                {/* details */}
                                <section className='lg:col-span-2'>
                                    <h2 className="text-3xl sm:text-4xl mb-6 font-bold text-orange-400" >{currentPackage.name}</h2>
                                    <div className="mb-6 flex flex-wrap gap-2">
                                        {currentPackage.category.map((category, index) => {
                                            const badgeColors = ['bg-amber-200', 'bg-teal-300', 'bg-pink-300', 'bg-blue-200', 'bg-green-200', 'bg-purple-200'];
                                            return (
                                                <span
                                                    key={index}
                                                    className={`${badgeColors[index % badgeColors.length]} text-gray-700 text-base font-semibold px-3 py-1 rounded-lg`}
                                                >
                                                    {category}
                                                </span>
                                            );
                                        })}
                                    </div>
                                    <p className="text-gray-600 font-light text-justify mb-6">{currentPackage.subjects.join(', ')}</p>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-8">
                                        <div className='flex items-center gap-3'>
                                            <Archive size={30} className='text-amber-800' />
                                            <p className='text-amber-800 font-semibold text-base'>{currentPackage.amount}</p>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <FileText size={30} className='text-amber-800' />
                                            <p className='text-amber-800 font-semibold text-base'>{currentPackage.question}</p>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <Timer size={30} className='text-amber-800' />
                                            <p className='text-amber-800 font-semibold text-base'>{currentPackage.duration}</p>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <FilesIcon size={30} className='text-amber-800' />
                                            <p className='text-amber-800 font-semibold text-base'>{currentPackage.attemp}</p>
                                        </div>
                                    </div>
                                </section>
                                {/* harga */}
                                <section className='lg:col-span-1'>
                                    <div className="bg-gray-500 rounded-lg p-6 flex flex-col gap-6 sticky top-24">
                                        <h3 className="text-lg font-light text-stone-50">Harga</h3>
                                        <h1 className="text-3xl font-bold text-stone-50">{currentPackage.price}</h1>
                                        <button
                                            onClick={handlepackage}
                                            className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-lg transition">
                                            Pilih Paket
                                        </button>
                                        <Link href="/packages">
                                            <button className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-6 rounded-lg transition">
                                                Lihat lainnya
                                            </button>
                                        </Link>
                                        <p className='text-stone-50'>Ditutup:<br />{currentPackage.closed}</p>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </section>

                    {/* Pilih Paket */}
                    <section className="max-w-7xl my-20 mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10 -mt-12">

                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                            Rekomendasi
                        </h2>
                        <p className="text-base font-regular text-gray-400 mb-20">Kami bantu berikan rekomendasi sembari kamu mencari pilihanmu!</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {packages.map((pkg) => (
                                <div
                                    key={pkg.id}
                                    className="rounded-xl overflow-hidden shadow-lg bg-white"
                                >
                                    {/* cover */}
                                    <img
                                        src={pkg.image}
                                        alt="Rumah UKAI Mascot"
                                        className="w-full h-32 object-cover"
                                    />

                                    {/* Content Area */}
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold mb-4 text-orange-500">{pkg.name}</h3>

                                        {/* Category Badges */}
                                        <div className="mb-6 flex flex-wrap gap-2">
                                            {pkg.category.map((category, index) => {
                                                const badgeColors = ['bg-amber-200', 'bg-teal-300', 'bg-pink-300', 'bg-blue-200', 'bg-green-200', 'bg-purple-200'];
                                                return (
                                                    <span
                                                        key={index}
                                                        className={`${badgeColors[index % badgeColors.length]} text-gray-700 text-xs font-semibold px-3 py-1 rounded-full`}
                                                    >
                                                        {category}
                                                    </span>
                                                );
                                            })}
                                        </div>

                                        {/* Status/Date Section */}
                                        <div className="flex items-center justify-between mb-6">
                                            <div>
                                                <p className="text-orange-500 font-bold text-sm">Ditutup :</p>
                                                <p className="text-gray-700 font-semibold text-sm">31 Januari 2026</p>
                                            </div>
                                            {/* Button */}
                                            <Link
                                                href="/details-package"
                                                type="button"
                                                className="w-auto bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg transition"
                                            >
                                                {pkg.price}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div>
                        {auth.user ? (
                            <>
                            </>
                        ) : (
                            <CTA />
                        )}
                    </div>

                    <NavFooter />
                </div>
            </div>
        </>
    );

}
