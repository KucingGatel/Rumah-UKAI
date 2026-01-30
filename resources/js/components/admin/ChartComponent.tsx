interface ChartComponentProps {
    title: string;
    children: React.ReactNode;
}

export default function ChartComponent({ title, children }: ChartComponentProps) {
    return (
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-bold text-white mb-6">{title}</h3>
            <div className="w-full h-64">
                {children}
            </div>
        </div>
    );
}
