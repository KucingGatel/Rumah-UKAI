import { Link, usePage, Head } from '@inertiajs/react';
import type { SharedData } from '@/types';
import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/navbar';
import { NavFooter } from '@/components/nav-footer';
import { Search } from 'lucide-react';
import { blog } from '@/routes';

interface Blog {
    id: number;
    cover: string;
    title: string;
    description: string;
}

interface DetailPageProps {
    blog: Blog;
    blogs: Blog[];
}

export default function Blog() {
    const { blog: currentBlog, blogs } = usePage<SharedData & DetailPageProps>().props;
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

    return (
        <>
            <Head title={currentBlog.title} />
            <div className="min-h-screen font-poppins bg-stone-50">
                <Navbar />

                {/* Hero Section */}
                <img src={currentBlog.cover} alt={currentBlog.title} className="w-full h-64 object-cover" />
                {/* End Hero Section */}

                <div className="relative bg-stone-50 -mt-12 pt-12">
                    {/* Content Section */}
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white rounded-lg shadow-md">
                        <h1 className="text-3xl font-bold text-gray-800 mb-6">{currentBlog.title}</h1>
                        <div className="prose prose-lg max-w-none text-justify">
                            {currentBlog.description.split('\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
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
