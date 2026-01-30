import { Head } from '@inertiajs/react';
import AdminLayout from '@/layouts/admin/AdminLayout';
import { Plus, Search, Edit2, Trash2 } from 'lucide-react';

export default function Product() {
    return (
        <>
            <Head title="Product Management - Rumah UKAI" />
            <AdminLayout activeMenu="product">
                <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h2 className="text-3xl font-bold text-white">Product</h2>
                            <p className="text-gray-400 mt-1">Kelola semua paket produk</p>
                        </div>
                        <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition">
                            <Plus size={20} />
                            Tambah Product
                        </button>
                    </div>

                    {/* Search & Filter */}
                    <div className="mb-6 flex gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Cari produk..."
                                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                            />
                        </div>
                    </div>

                    {/* Table */}
                    <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-700 bg-gray-900">
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Nama Paket</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Harga</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Fitur</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Akses</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Status</th>
                                    <th className="px-6 py-4 text-right text-sm font-semibold text-white">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { name: 'Paket Gratis', price: 'Gratis', features: '3' },
                                    { name: 'Paket Silver', price: 'Rp 599.000', features: '4' },
                                    { name: 'Paket Gold', price: 'Rp 999.000', features: '5' },
                                    { name: 'Paket Platinum', price: 'Rp 1.499.000', features: '6' },
                                ].map((item, index) => (
                                    <tr key={index} className="border-b border-gray-700 hover:bg-gray-700 transition">
                                        <td className="px-6 py-4 text-sm text-white font-medium">{item.name}</td>
                                        <td className="px-6 py-4 text-sm text-gray-400">{item.price}</td>
                                        <td className="px-6 py-4 text-sm text-gray-400">{item.features} Fitur</td>
                                        <td className="px-6 py-4 text-sm text-gray-400">Unlimited</td>
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
