import { Link, usePage, Head } from '@inertiajs/react';
import type { SharedData } from '@/types';
import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/navbar';
import { NavFooter } from '@/components/nav-footer';
import { Search } from 'lucide-react';

export default function TryoutProduct() {
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

    const TryoutProduct = [
        {
            id: 1,
            name: 'Try Out Gratis Februari',
            price: 'Rp 0',
            category: ['Free', 'Klinis', 'Farmateknologi'],
        },
        {
            id: 2,
            name: 'Try Out Silver',
            price: 'Rp 599.000',
            category: ['Akses 150+ Video', 'Latihan Soal Lengkap', 'Live Session 2x/bulan', 'Support Priority'],
        },
        {
            id: 3,
            name: 'Try Out Gold',
            price: 'Rp 999.000',
            category: ['Akses 300+ Video', 'Latihan Soal Premium', 'Live Session 4x/bulan', 'Mentor 1:1', 'Sertifikat'],
        },
        {
            id: 4,
            name: 'Try Out Platinum',
            price: 'Rp 1.499.000',
            category: ['Akses Semua Video', 'Soal Unlimited', 'Live Session Unlimited', 'Mentor 1:1', 'Sertifikat', 'Akses Selamanya'],
        },
    ];

    return (
        <>
            <Head title="Try Out Rumah UKAI - Simulasi Ujian & Try Out Terbaik" />
            <div className="min-h-screen font-poppins bg-stone-50">
                <Navbar />

                {/* Hero Section */}
                <div
                    ref={heroRef}
                    className='bg-orange-400/80 object-cover relative overflow-hidden'
                    style={{
                        transform: `translateY(${scrollY * 0.5}px)`,
                    }}
                >
                    <div className="opacity-50">
                        <img src="/assets/images/awan.svg" alt="Awan" className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/2 absolute bottom-0 -left-50 object-cover" />
                        <img src="/assets/images/awan.svg" alt="Awan" className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/2 -scale-x-100 absolute bottom-0 -right-50 object-cover" />
                    </div>
                    <section className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                        <div className="text-center">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-100 mb-4">
                                Try Out Rumah UKAI
                            </h1>
                            <p className="text-stone-100 text-base mb-8 max-w-2xl mx-auto">
                                Try Out menarik yang bisa kamu temukan untuk memenuhi kebutuhan ujian dalam bentuk modul yang disediakan!
                            </p>
                        </div>
                        <div className="flex justify-center mt-12">
                            <img
                                src="/assets/images/mascot/RUI_hold_Book_Rumah_UKAI.svg"
                                alt="Rumah UKAI Mascot"
                                className="w-48 h-48 sm:w-64 sm:h-64"
                            />
                        </div>
                    </section>
                </div>

                <div className="relative bg-stone-50 -mt-12 pt-12">
                    {/* Pilih Try Out */}
                    <section className="max-w-7xl my-20 mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10 -mt-12">
                        {/* Search Bar */}
                        <div className="mb-12">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <div className="flex-1 relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Apa Yang Anda Cari?"
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white text-gray-400"
                                    />
                                </div>
                                <button className="px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 transition whitespace-nowrap">
                                    Filter Kategori
                                </button>
                            </div>
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                            Rekomendasi
                        </h2>
                        <p className="text-base font-regular text-gray-400 mb-20">Kami bantu berikan rekomendasi sembari kamu mencari pilihanmu!</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {TryoutProduct.map((pkg) => (
                                <div
                                    key={pkg.id}
                                    className="rounded-xl overflow-hidden shadow-lg bg-white"
                                >
                                    {/* Header with Orange Background and Mascot */}
                                    <img
                                        src="/assets/images/test2.png"
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
                                            <button
                                                type="button"
                                                className="w-auto bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg transition"
                                            >
                                                {pkg.price}
                                            </button>
                                            <dialog className="modal">
                                                <form method="dialog" className="modal-box">
                                                    <h3 className="font-bold text-lg">Hello!</h3>
                                                    <p className="py-4">Press ESC key or click outside to close</p>
                                                </form>
                                            </dialog>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="mx-auto py-16 sm:py-24 my-20">
                        <div className="bg-gradient-to-r from-red-900 to-orange-500 p-8 sm:p-12 text-center text-white">
                            <h2 className="text-xl sm:text-3xl font-bold mb-4">
                                Siap Untuk Belajar?!
                            </h2>
                            <p className="text-lg font-light mb-8 max-w-2xl mx-auto">
                                Jangan biarkan waktu berlalu begitu saja. Daftarkan dirimu sekarang dan mulai perjalanan menuju kesuksesan ujianmu.
                            </p>
                            <Link
                                href="/register"
                                className="inline-block px-8 py-3 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition"
                            >
                                Daftar Sekarang
                            </Link>
                        </div>
                    </section>

                    <NavFooter></NavFooter>
                </div>
            </div>
        </>
    );

}
