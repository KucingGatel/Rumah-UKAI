import { Head } from '@inertiajs/react';
import AdminLayout from '@/layouts/admin/AdminLayout';
import { Plus, Search, Edit2, Trash2, Star } from 'lucide-react';

export default function Testimoni() {
    return (
        <>
            <Head title="Testimoni Management - Rumah UKAI" />
            <AdminLayout activeMenu="testimoni">
                <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h2 className="text-3xl font-bold text-white">Testimoni</h2>
                            <p className="text-gray-400 mt-1">Kelola semua testimoni dari pengguna</p>
                        </div>
                        <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition">
                            <Plus size={20} />
                            Tambah Testimoni
                        </button>
                    </div>

                    {/* Search & Filter */}
                    <div className="mb-6 flex gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Cari testimoni..."
                                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                            />
                        </div>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div key={item} className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition">
                                {/* Rating */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={16}
                                            className="fill-yellow-400 text-yellow-400"
                                        />
                                    ))}
                                </div>

                                {/* Content */}
                                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                                    Rumah UKAI benar-benar membantu saya mempersiapkan ujian farmasi dengan materi yang komprehensif dan try out yang mendekati soal sebenarnya.
                                </p>

                                {/* User Info */}
                                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold text-xs">
                                            U{item}
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-white">User {item}</p>
                                            <p className="text-xs text-gray-400">Paket Gold</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex gap-2 mt-4">
                                    <button className="flex-1 p-2 hover:bg-gray-700 rounded-lg transition flex items-center justify-center gap-2">
                                        <Edit2 size={16} className="text-blue-400" />
                                        <span className="text-xs text-blue-400">Edit</span>
                                    </button>
                                    <button className="flex-1 p-2 hover:bg-gray-700 rounded-lg transition flex items-center justify-center gap-2">
                                        <Trash2 size={16} className="text-red-400" />
                                        <span className="text-xs text-red-400">Hapus</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </AdminLayout>
        </>
    );
}
