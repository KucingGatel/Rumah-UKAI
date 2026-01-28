import { Link, usePage } from '@inertiajs/react';
import type { SharedData } from '@/types';
import { useState } from 'react';
import { CircleUser } from 'lucide-react';

export default function Navbar() {
    const { auth, ziggy } = usePage<SharedData>().props;
    const [isOpen, setIsOpen] = useState(false);
    const currentUrl = (ziggy as any)?.url || '/';

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { label: 'Packages', href: '/packages' },
        { label: 'Try Out', href: '/tryoutproduct' },
        { label: 'Blog', href: '/blog' },
    ];

    const Profile = [
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Profile', href: '/profile' },
        { label: 'Logout', href: '/logout' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/home" className="flex items-center gap-2">
                        <img
                            src="/assets/images/logo-RUMAH-UKAI.jpg"
                            alt="Rumah UKAI"
                            className="w-8 h-8"
                        />
                        <span className="text-xl font-bold text-gray-900">
                            Rumah UKAI
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => {
                            const isActive = currentUrl === link.href || currentUrl.startsWith(link.href + '/');
                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className={`font-medium transition ${
                                        isActive
                                            ? 'text-orange-500 border-b-2 border-orange-500'
                                            : 'text-gray-700 hover:text-orange-500'
                                    }`}
                                >
                                    {link.label}
                                </a>
                            );
                        })}
                    </nav>

                    {/* Auth Buttons - Desktop */}
                    <div className="hidden md:flex items-center gap-3">
                        {auth.user ? (
                            <button
                                onClick={toggleMenu}
                                className="px-6 py-2"
                            >
                                <CircleUser className="inline-block mr-2 text-gray-500" size={30} absoluteStrokeWidth={true} />
                            </button>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="px-4 py-2 text-gray-700 hover:text-orange-500 transition font-medium"
                                >
                                    Login
                                </Link>
                                <Link
                                    href="/register"
                                    className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition font-medium"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden flex flex-col gap-1.5 focus:outline-none"
                    >
                        <span
                            className={`h-0.5 w-6 bg-gray-900 transition ${
                                isOpen ? 'rotate-45 translate-y-2' : ''
                            }`}
                        />
                        <span
                            className={`h-0.5 w-6 bg-gray-900 transition ${
                                isOpen ? 'opacity-0' : ''
                            }`}
                        />
                        <span
                            className={`h-0.5 w-6 bg-gray-900 transition ${
                                isOpen ? '-rotate-45 -translate-y-2' : ''
                            }`}
                        />
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
                        <div className="flex flex-col gap-3">
                            {navLinks.map((link) => {
                            const isActive = currentUrl === link.href || currentUrl.startsWith(link.href + '/');
                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className={`font-medium py-2 transition ${
                                        isActive
                                            ? 'text-orange-500 border-l-4 border-orange-500 pl-2'
                                            : 'text-gray-700 hover:text-orange-500'
                                    }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </a>
                            );
                        })}
                            <div className="border-t border-gray-200 pt-3 mt-3 flex flex-col gap-2">
                                {auth.user ? (
                                    <Link
                                        href="/dashboard"
                                        className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition font-medium text-center"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href="/login"
                                            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-orange-500 transition font-medium text-center"
                                        >
                                            Login
                                        </Link>
                                        <Link
                                            href="/register"
                                            className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition font-medium text-center"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}
