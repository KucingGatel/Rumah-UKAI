import { Head } from '@inertiajs/react';
import AdminLayout from '@/layouts/admin/AdminLayout';
import { Plus, Search, Edit2, Trash2 } from 'lucide-react';

export default function TryOut() {
    return (
        <>
            <Head title="Try Out Management - Rumah UKAI" />
            <AdminLayout activeMenu="tryout">
                <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h2 className="text-3xl font-bold text-white">Try Out</h2>
                            <p className="text-gray-400 mt-1">Kelola semua try out yang tersedia</p>
                        </div>
                        <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition">
                            <Plus size={20} />
                            Tambah Try Out
                        </button>
                    </div>

                    {/* Search & Filter */}
                    <div className="mb-6 flex gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Cari try out..."
                                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                            />
                        </div>
                    </div>

                    {/* Table */}
                    <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-700 bg-gray-900">
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Judul</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Kategori</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Soal</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Durasi</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Status</th>
                                    <th className="px-6 py-4 text-right text-sm font-semibold text-white">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[1, 2, 3, 4, 5].map((item) => (
                                    <tr key={item} className="border-b border-gray-700 hover:bg-gray-700 transition">
                                        <td className="px-6 py-4 text-sm text-white">Try Out {item}</td>
                                        <td className="px-6 py-4 text-sm text-gray-400">Farmakologi</td>
                                        <td className="px-6 py-4 text-sm text-gray-400">100 Soal</td>
                                        <td className="px-6 py-4 text-sm text-gray-400">120 Menit</td>
                                        <td className="px-6 py-4">
                                            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">
                                                Aktif
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end gap-2">
                                                <button className="p-2 hover:bg-gray-600 rounded-lg transition">
                                                    <Edit2 size={18} className="text-blue-400" />
                                                </button>
                                                <button className="p-2 hover:bg-gray-600 rounded-lg transition">
                                                    <Trash2 size={18} className="text-red-400" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </AdminLayout>
        </>
    );
}
