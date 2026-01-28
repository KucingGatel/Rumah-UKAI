import { Link, usePage, Head } from '@inertiajs/react';
import type { SharedData } from '@/types';
import { useState } from 'react';
import Navbar from '@/components/navbar';
import { NavFooter } from '@/components/nav-footer';

export default function Packages() {
    const { auth } = usePage<SharedData>().props;
    // const { package: packageData } = usePage<SharedData>().props;

    const packageData = [{
        id: 1,
        name: "Paket Gratis Februari",
        price: "Rp 0",
        category: ["Free", "Klinis", "Farmateknologi"],
    }];

    return (
        <>
            <Head title="Paket Rumah UKAI - Simulasi Ujian & Try Out Terbaik" />
            <div className="min-h-screen font-poppins bg-stone-50">
                <Navbar />

                {/* Hero Section */}
                <div className='bg-orange-400/80'>
                    <section className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                        <div className="text-center">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-100 mb-4">
                                Paket Rumah UKAI
                            </h1>
                            <p className="text-stone-100 text-base mb-8 max-w-2xl mx-auto">
                                Paket menarik yang bisa kamu temukan untuk memenuhi kebutuhan ujian dalam bentuk modul yang disediakan!
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
                <div className="max-w-5xl mx-auto p-6">
                    <div className="mt-12"></div>
                    <h2 className="text-2xl font-bold text-orange-400 mb-4">Paket Pembelajaran</h2>
                </div>

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
        </>
    );

}
