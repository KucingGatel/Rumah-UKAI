import { Link, usePage, Head } from '@inertiajs/react';
import type { SharedData } from '@/types';
import { useState } from 'react';
import Navbar from '@/components/navbar';
import { NavUser } from '@/components/nav-user';
import { NavFooter } from '@/components/nav-footer';
import { FileText, HandCoins, ListCheck, TabletSmartphone } from 'lucide-react';
import CTA from '@/components/cta';

export default function Landing() {
    const { auth } = usePage<SharedData>().props;

    const packages = [
        {
            id: 1,
            name: 'Paket Gratis Februari',
            price: 'Rp 0',
            category: ['Free', 'Klinis', 'Farmateknologi'],
        },
        {
            id: 2,
            name: 'Paket Silver',
            price: 'Rp 599.000',
            category: ['Akses 150+ Video', 'Latihan Soal Lengkap', 'Live Session 2x/bulan', 'Support Priority'],
        },
        {
            id: 3,
            name: 'Paket Gold',
            price: 'Rp 999.000',
            category: ['Akses 300+ Video', 'Latihan Soal Premium', 'Live Session 4x/bulan', 'Mentor 1:1', 'Sertifikat'],
        },
        {
            id: 4,
            name: 'Paket Platinum',
            price: 'Rp 1.499.000',
            category: ['Akses Semua Video', 'Soal Unlimited', 'Live Session Unlimited', 'Mentor 1:1', 'Sertifikat', 'Akses Selamanya'],
        },
    ];

    const testimonials = [
        {
            name: 'Andi Suryanto',
            rating: 5,
            text: 'Rumah UKAI benar-benar membantu saya mempersiapkan ujian dengan baik. Materi yang diajarkan sangat komprehensif dan mudah dipahami. Guru-gurunya juga sangat responsif dalam menjawab pertanyaan saya.',
        },
        {
            name: 'Siti Nurhaliza',
            rating: 5,
            text: 'Saya sangat terkesan dengan kualitas pembelajaran di Rumah UKAI. Fitur live session-nya membuat saya bisa bertanya langsung kepada mentor. Hasilnya, saya berhasil lulus ujian dengan nilai yang memuaskan!',
        },
        {
            name: 'Budi Santoso',
            rating: 5,
            text: 'Platform Rumah UKAI sangat user-friendly dan mudah digunakan. Konten pembelajaran tersusun dengan sangat baik sehingga saya tidak merasa overwhelmed. Investasi terbaik untuk persiapan ujian saya.',
        },
        {
            name: 'Dewi Lestari',
            rating: 5,
            text: 'Yang paling saya sukai dari Rumah UKAI adalah fleksibilitas waktu belajar. Saya bisa belajar kapan saja sesuai dengan jadwal saya. Kualitas materi juga sangat bagus dan selalu diperbarui dengan soal-soal terbaru.',
        },
    ];

    return (
        <div className='scroll-smooth'>
            <Head title="Rumah UKAI - Simulasi Ujian & Try Out Terbaik" />
            <div className="min-h-screen font-poppins bg-stone-50">
                <Navbar />

                {/* Hero Section */}
                <div className='bg-linear-to-b from-orange-400/80 to-stone-50 relative overflow-hidden'>
                    <div className="opacity-70">
                        <img src="/assets/images/awan.svg" alt="Awan" className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/2 absolute bottom-10 -left-20 object-cover" />
                        <img src="/assets/images/awan.svg" alt="Awan" className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/2 -scale-x-100 absolute bottom-10 -right-20 object-cover" />
                    </div>
                    <section className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                        <div className="text-center">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-100 mb-4">
                                Simulasi Ujian & Try Out UKMPPAI Terbaik
                            </h1>
                            <p className="text-stone-100 text-base mb-8 max-w-2xl mx-auto">
                                Mari belajar bersama di platform simulasi Tryout UKMPPAI berbasis CBT, untuk mendukung persiapan ujian Anda.
                            </p>
                            <Link
                                href="/register"
                                className="inline-block px-8 py-3 bg-red-800 text-white font-semibold rounded-lg hover:bg-red-900 transition"
                            >
                                Mulai Sekarang
                            </Link>
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

                {/* Siapa Itu Rumah UKAI */}
                <section className="max-w-4xl mx-auto my-20 px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center text-orange-400 mb-4">
                        Siapa Itu Rumah UKAI?
                    </h2>
                    <p className="text-center font-medium text-gray-600 mb-12 max-w-2xl mx-auto">
                        Platform yang mewadahi simulasi ujian untuk mempersiapkan diri dalam praktek kedepannya. Setiap soal disusun mengikuti blueprint resmi UKMPPAI sehingga latihan Anda jauh lebih terarah.
                    </p>
                    <div className="grid grid-cols-3 sm:grid-cols-3 divide-x-2 divide-orange-200">
                        <div className="text-center p-6">
                            <div className="text-4xl font-medium text-orange-400 mb-2">95%</div>
                            <p className="text-gray-400 font-light">Lulus Ujian</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="text-4xl font-medium text-orange-400 mb-2">200+</div>
                            <p className="text-gray-400 font-light">Pengguna Aktif</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="text-4xl font-medium text-orange-400 mb-2">3000+</div>
                            <p className="text-gray-400 font-light">Bank Soal</p>
                        </div>
                    </div>
                </section>

                {/* Kenapa Memilih Rumah UKAI */}
                <div className="max-w-7xl my-20 mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center text-orange-400 mb-4">
                        Kenapa Memilih Rumah UKAI?
                    </h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Seutas alasan mengapa kalian harus mencoba dan memilih Rumah Kami sebagai platform simulasi ujian
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-orange-500">
                            <div className="flex items-center justify-center">
                                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                                    <FileText className="w-6 h-6 text-orange-500" />
                                </div>
                            </div>
                            <h3 className="font-bold text-center text-orange-400 mb-2">Soal Sesuai Blueprint</h3>
                            <p className="text-gray-600 text-center text-sm">Soal disusun mengikuti blueprint resmi UKMPPAI sehingga latihan Anda jauh lebih terarah.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-orange-500">
                            <div className="flex items-center justify-center">
                                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                                    <ListCheck className="w-6 h-6 text-orange-500" />
                                </div>
                            </div>
                            <h3 className="font-bold text-center text-orange-400 mb-2">Pembelajaran Interaktif</h3>
                            <p className="text-gray-600 text-center text-sm">Platform kami menyediakan video pembelajaran, quiz interaktif, dan diskusi langsung dengan mentor berpengalaman.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-orange-500">
                            <div className="flex items-center justify-center">
                                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                                    <TabletSmartphone className="w-6 h-6 text-orange-500" />
                                </div>
                            </div>
                            <h3 className="font-bold text-center text-orange-400 mb-2">Akses Fleksibel</h3>
                            <p className="text-gray-600 text-center text-sm">Belajar kapan saja dan dimana saja dengan akses 24/7 ke seluruh materi pembelajaran tanpa batasan waktu.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-orange-500">
                            <div className="flex items-center justify-center">
                                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                                    <HandCoins className="w-6 h-6 text-orange-500" />
                                </div>
                            </div>
                            <h3 className="font-bold text-center text-orange-400 mb-2">Tracking Progress</h3>
                            <p className="text-gray-600 text-center text-sm">Pantau perkembangan belajar Anda dengan dashboard analytics yang mendetail dan laporan progress real-time.</p>
                        </div>
                    </div>
                    <div className="flex justify-center mt-12">
                        <img
                            src="/assets/images/mascot/RUI_Amazed_Rumah_UKAI.svg"
                            alt="Rumah UKAI Mascot"
                            className="w-48 h-48 sm:w-64 sm:h-64"
                        />
                    </div>
                </div>

                {/* Pilih Paket */}
                <section className="max-w-7xl my-20 mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center text-orange-400 mb-4">
                        Paket Rumah UKAI
                    </h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Paket menarik yang bisa kamu temukan untuk memenuhi kebutuhan ujian dalam bentuk modul yang disediakan!
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {packages.map((pkg) => (
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
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Testimonials */}
                <div className="bg-stone-100 inset-shadow-sm inset-shadow-stone-300 my-20">
                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center text-orange-400 mb-4">
                            Kata Mereka!
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                                    <div className="flex items-start gap-4 mb-4">
                                        <img
                                            src={`/assets/images/mascot/${['RUI_Say_Hi_Rumah_UKAI', 'RUI_Study_Rumah_UKAI', 'RUI_On_Fire_Rumah_UKAI', 'RUI_Say_Yes_Rumah_UKAI'][index]}.svg`}
                                            alt={testimonial.name}
                                            className="w-12 h-12 flex-shrink-0"
                                        />
                                        <div>
                                            <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                                            <div className="flex gap-1">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <span key={i} className="text-yellow-400">★</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed">{testimonial.text}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <div>
                    {auth.user ? (
                        <>
                        </>
                    ) : (
                        <CTA />
                    )}
                </div>

                {/* Footer */}
                <NavFooter />
            </div>
        </div>
    );
}
