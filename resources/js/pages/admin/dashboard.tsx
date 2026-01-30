import { Head } from '@inertiajs/react';
import AdminLayout from '@/layouts/admin/AdminLayout';
import StatCard from '@/components/admin/StatCard';
import ChartComponent from '@/components/admin/ChartComponent';
import { Users, BookOpen, Package, BarChart3, TrendingUp } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
    { name: 'Monday', value: 20 },
    { name: 'Tuesday', value: 35 },
    { name: 'Wednesday', value: 60 },
    { name: 'Thursday', value: 75 },
    { name: 'Friday', value: 55 },
    { name: 'Saturday', value: 80 },
    { name: 'Sunday', value: 45 },
];

const chartData2 = [
    { name: 'Monday', value: 40 },
    { name: 'Tuesday', value: 35 },
    { name: 'Wednesday', value: 45 },
    { name: 'Thursday', value: 50 },
    { name: 'Friday', value: 35 },
    { name: 'Saturday', value: 40 },
    { name: 'Sunday', value: 30 },
];

interface DashboardProps {
    totalUsers: number;
    totalOrders?: number;
    totalPackages?: number;
    totalQuestions?: number;
}

export default function Dashboard({ totalUsers, totalOrders = 0, totalPackages = 0, totalQuestions = 0 }: DashboardProps) {
    return (
        <>
            <Head title="Admin Dashboard - Rumah UKAI" />
            <AdminLayout activeMenu="dashboard">
                <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-white">Dashboard</h2>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                        <StatCard
                            title="Total User"
                            value={totalUsers}
                            change="↑ 2% increase"
                            icon={<Users size={24} className="text-white" />}
                            color="orange"
                        />
                        <StatCard
                            title="Total User"
                            value={200}
                            change="↑ 2% increase"
                            icon={<Users size={24} className="text-white" />}
                            color="blue"
                        />
                        <StatCard
                            title="Total User"
                            value={200}
                            change="↑ 2% increase"
                            icon={<Users size={24} className="text-white" />}
                            color="green"
                        />
                        <StatCard
                            title="Total User"
                            value={200}
                            change="↑ 2% increase"
                            icon={<BookOpen size={24} className="text-white" />}
                            color="purple"
                        />
                        <StatCard
                            title="Total User"
                            value={200}
                            change="↑ 2% increase"
                            icon={<Package size={24} className="text-white" />}
                            color="red"
                        />
                    </div>

                    {/* Additional Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <StatCard
                            title="Total User"
                            value={200}
                            change="↑ 2% increase"
                            icon={<BarChart3 size={24} className="text-white" />}
                        />
                        <StatCard
                            title="Total User"
                            value={200}
                            change="↑ 2% increase"
                            icon={<TrendingUp size={24} className="text-white" />}
                        />
                    </div>

                    {/* Charts */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <ChartComponent title="All Service This Week">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart
                                    data={chartData}
                                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                                >
                                    <defs>
                                        <linearGradient
                                            id="colorValue"
                                            x1="0"
                                            y1="0"
                                            x2="0"
                                            y2="1"
                                        >
                                            <stop
                                                offset="5%"
                                                stopColor="#f59e0b"
                                                stopOpacity={0.8}
                                            />
                                            <stop
                                                offset="95%"
                                                stopColor="#f59e0b"
                                                stopOpacity={0}
                                            />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid
                                        strokeDasharray="3 3"
                                        stroke="#4b5563"
                                    />
                                    <XAxis
                                        dataKey="name"
                                        stroke="#9ca3af"
                                        style={{ fontSize: '12px' }}
                                    />
                                    <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: '#1f2937',
                                            border: '1px solid #4b5563',
                                            borderRadius: '8px',
                                        }}
                                        labelStyle={{ color: '#fff' }}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="value"
                                        stroke="#f59e0b"
                                        fillOpacity={1}
                                        fill="url(#colorValue)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </ChartComponent>

                        <ChartComponent title="Buyer Of Parts Vehicle">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart
                                    data={chartData2}
                                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                                >
                                    <CartesianGrid
                                        strokeDasharray="3 3"
                                        stroke="#4b5563"
                                    />
                                    <XAxis
                                        dataKey="name"
                                        stroke="#9ca3af"
                                        style={{ fontSize: '12px' }}
                                    />
                                    <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: '#1f2937',
                                            border: '1px solid #4b5563',
                                            borderRadius: '8px',
                                        }}
                                        labelStyle={{ color: '#fff' }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="value"
                                        stroke="#3b82f6"
                                        strokeWidth={2}
                                        dot={{ fill: '#3b82f6', r: 4 }}
                                        activeDot={{ r: 6 }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </ChartComponent>
                    </div>
                </div>
            </AdminLayout>
        </>
    );
}
