import { Link, usePage } from '@inertiajs/react';
import type { SharedData } from '@/types';
import { useState } from 'react';
import { CircleUser } from 'lucide-react';

export default function CTA() {
    return (
        <>
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
        </>
    );
}
