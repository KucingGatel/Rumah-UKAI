import { Link, usePage, Head } from '@inertiajs/react';
import type { SharedData } from '@/types';
import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/navbar';
import { NavFooter } from '@/components/nav-footer';
import { Search } from 'lucide-react';

export default function Blog() {
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

    const blogPosts = [
        {
            id: 1,
            cover: '/assets/images/test1.png',
            title: 'Judul Artikel 1',
            description: 'Lorem ipsum dolor sit amet consectetur. Morbi velit feugiat sit volutpat leo sed Lorem ipsum dolor sit amet consectetur. Morbi velit feugiat sit volutpat leo sedLorem ipsum dolor sit amet consectetur. Morbi velit feugiat sit volutpat leo sedLorem ipsum dolor sit amet consectetur. Morbi velit feugiat sit volutpat leo sedLorem ipsum dolor sit amet consectetur. Morbi velit feugiat sit volutpat leo sed.',
        },
        {
            id: 2,
            cover: '/assets/images/test2.png',
            title: 'Judul Artikel 2',
            description: 'Lorem ipsum dolor sit amet consectetur. Morbi velit feugiat sit volutpat leo sed Lorem ipsum dolor sit amet consectetur. Morbi velit feugiat sit volutpat leo sedLorem ipsum dolor sit amet consectetur. Morbi velit feugiat sit volutpat leo sedLorem ipsum dolor sit amet consectetur. Morbi velit feugiat sit volutpat leo sedLorem ipsum dolor sit amet consectetur. Morbi velit feugiat sit volutpat leo sed.',
        },
        {
            id: 3,
            cover: '/assets/images/test2.png',
            title: 'Judul Artikel 3',
            description: 'Lorem ipsum dolor sit amet consectetur. Morbi velit feugiat sit volutpat leo sed Lorem ipsum dolor sit amet consectetur. Morbi velit feugiat sit volutpat leo sedLorem ipsum dolor sit amet consectetur. Morbi velit feugiat sit volutpat leo sedLorem ipsum dolor sit amet consectetur. Morbi velit feugiat sit volutpat leo sedLorem ipsum dolor sit amet consectetur. Morbi velit feugiat sit volutpat leo sed.',
        }
    ];

    return (
        <>
            <Head title="Blog Rumah UKAI - Tips & Artikel Seputar Ujian" />
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
                                Blog Rumah UKAI
                            </h1>
                            <p className="text-stone-100 text-base mb-8 max-w-2xl mx-auto">
                                Tips & Artikel Seputar Ujian untuk Membantumu Sukses Ujian
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
                {/* End Hero Section */}

                <div className="relative bg-stone-50 -mt-12 pt-12">
                    {/* Content Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        {blogPosts.map((post) => (
                            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img src={post.cover} alt={post.title} className="w-full h-48 object-cover" />
                                <div className="p-8">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{post.title}</h3>
                                    <p className="text-gray-600 font-light text-justify">{post.description}</p>
                                </div>
                                <div className="p-8 pt-0 flex justify-end">
                                    <Link href={`/blog/${post.id}`} className="text-gray-600 font-semibold hover:underline">Baca Selengkapnya</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* End Content Section */}

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
                    {/* End CTA Section */}
                </div>
                <NavFooter />
            </div>
        </>
    );
}
