import { usePage, Link } from '@inertiajs/react';
import { Bell, User } from 'lucide-react';
import type { SharedData, User as UserType } from '@/types';

interface AdminPageProps extends SharedData {
    auth: {
        user: UserType;
    };
}

export default function AdminNavbar() {
    const { auth } = usePage<AdminPageProps>().props;

    return (
        <nav className="bg-gray-800 text-white shadow-lg sticky top-0 z-20">
            <div className="ml-0 lg:ml-64 px-6 py-4 flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold">Admin Panel</h1>
                </div>

                <div className="flex items-center gap-6">
                    {/* Notifications */}
                    <button className="relative p-2 hover:bg-gray-700 rounded-lg transition">
                        <Bell size={24} />
                        <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
                    </button>

                    {/* User Menu */}
                    <div className="flex items-center gap-3 pl-6 border-l border-gray-700">
                        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                            <User size={20} />
                        </div>
                        <div className="hidden sm:block">
                            <p className="text-sm font-semibold">{auth?.user?.name || 'Admin'}</p>
                            <p className="text-xs text-gray-400">{auth?.user?.email || 'admin@example.com'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
