interface StatCardProps {
    title: string;
    value: string | number;
    change?: string;
    icon?: React.ReactNode;
    color?: 'orange' | 'blue' | 'green' | 'red' | 'purple';
}

export default function StatCard({
    title,
    value,
    change,
    icon,
    color = 'orange',
}: StatCardProps) {
    const colorClasses = {
        orange: 'bg-orange-500',
        blue: 'bg-blue-500',
        green: 'bg-green-500',
        red: 'bg-red-500',
        purple: 'bg-purple-500',
    };

    return (
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition">
            <div className="flex items-start justify-between">
                <div className="flex-1">
                    <p className="text-gray-400 text-sm font-medium">{title}</p>
                    <h3 className="text-3xl font-bold text-white mt-2">{value}</h3>
                    {change && (
                        <p className="text-green-400 text-sm mt-2">
                            {change}
                        </p>
                    )}
                </div>
                {icon && (
                    <div className={`${colorClasses[color]} p-3 rounded-lg`}>
                        {icon}
                    </div>
                )}
            </div>
        </div>
    );
}
