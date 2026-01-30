import { Link } from '@inertiajs/react';
import { Home, BookOpen, Users, Package, FileText, Star, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface SidebarProps {
    activeMenu?: string;
}

export default function Sidebar({ activeMenu = 'dashboard' }: SidebarProps) {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        {
            label: 'Dashboard',
            href: '/admin/dashboard',
            icon: Home,
            key: 'dashboard',
        },
        {
            label: 'Try Out',
            href: '/admin/tryout',
            icon: BookOpen,
            key: 'tryout',
        },
        {
            label: 'User',
            href: '/admin/user',
            icon: Users,
            key: 'user',
        },
        {
            label: 'Product',
            href: '/admin/product',
            icon: Package,
            key: 'product',
        },
        {
            label: 'Blog',
            href: '/admin/blog',
            icon: FileText,
            key: 'blog',
        },
        {
            label: 'Testimoni',
            href: '/admin/testimoni',
            icon: Star,
            key: 'testimoni',
        },
    ];

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden fixed top-4 left-4 z-40 p-2 bg-orange-500 text-white rounded-lg"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Sidebar */}
            <aside
                className={`
                    fixed left-0 top-0 h-screen w-64 bg-gray-900 text-white transition-transform duration-300 z-30
                    ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                    lg:translate-x-0
                `}
            >
                {/* Logo */}
                <div className="p-6 border-b border-gray-700">
                    <Link href="/admin/dashboard" className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center font-bold text-lg">
                            RU
                        </div>
                        <div>
                            <div className="font-bold text-lg">RUMAH</div>
                            <div className="text-orange-500 text-xs font-bold">UKAI</div>
                        </div>
                    </Link>
                </div>

                {/* Menu Items */}
                <nav className="py-6">
                    <div className="px-4 mb-4">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Exam</p>
                    </div>

                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeMenu === item.key;

                        return (
                            <Link
                                key={item.key}
                                href={item.href}
                                className={`
                                    flex items-center gap-3 px-6 py-3 transition-colors
                                    ${
                                        isActive
                                            ? 'bg-orange-500 text-white border-l-4 border-orange-600'
                                            : 'text-gray-300 hover:bg-gray-800'
                                    }
                                `}
                                onClick={() => setIsOpen(false)}
                            >
                                <Icon size={20} />
                                <span className="font-medium">{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>
            </aside>

            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-20"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
}
