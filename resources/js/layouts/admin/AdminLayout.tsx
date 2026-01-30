import { ReactNode } from 'react';
import Sidebar from '@/components/admin/Sidebar';
import AdminNavbar from '@/components/admin/AdminNavbar';

interface AdminLayoutProps {
    children: ReactNode;
    activeMenu?: string;
}

export default function AdminLayout({ children, activeMenu = 'dashboard' }: AdminLayoutProps) {
    return (
        <div className="min-h-screen bg-gray-900">
            <Sidebar activeMenu={activeMenu} />
            <AdminNavbar />
            <main className="ml-0 lg:ml-64 pt-6 pb-12">
                {children}
            </main>
        </div>
    );
}
