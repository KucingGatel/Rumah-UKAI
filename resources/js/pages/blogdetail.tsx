import { Link, usePage, Head } from '@inertiajs/react';
import type { SharedData } from '@/types';
import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/navbar';
import { NavFooter } from '@/components/nav-footer';
import { Search } from 'lucide-react';
import { blog } from '@/routes';
import CTA from '@/components/cta';

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

export default function Blog({ blog, blogs }: DetailPageProps) {
    // const { blog: blog, blogs } = usePage<SharedData & DetailPageProps>().props;
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
            <Head title={blog.title} />
            <div className="min-h-screen font-poppins bg-stone-50">
                <Navbar />

                {/* Hero Section */}
                <img src={blog.cover} alt={blog.title} className="w-full h-64 object-cover" />
                {/* End Hero Section */}

                <div className="relative bg-stone-50 -mt-12 pt-12">
                    {/* Content Section */}
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white rounded-lg shadow-md">
                        <h1 className="text-3xl font-bold text-gray-800 mb-6">{blog.title}</h1>
                        <div className="prose prose-lg max-w-none text-justify">
                            {blog.description.split('\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                    {/* End Content Section */}

                    <div>
                        {auth.user ? (
                            <>
                            </>
                        ) : (
                            <CTA />
                        )}
                    </div>

                </div>
                <NavFooter />
            </div>
        </>
    );
}
