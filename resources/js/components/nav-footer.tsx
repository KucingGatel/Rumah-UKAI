import type { ComponentPropsWithoutRef } from 'react';

export function NavFooter({
    className,
    ...props
}: ComponentPropsWithoutRef<'footer'> & {
    className?: string;
}) {
    return (
        <footer className={`bg-gray-900 text-white mt-20 ${className || ''}`} {...props}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/assets/images/mascot/RUI_Say_Hi_Rumah_UKAI.svg" alt="Rumah UKAI" className="w-8 h-8" />
                            <span className="font-bold">Rumah UKAI</span>
                        </div>
                        <p className="text-gray-400 text-sm">Platform pembelajaran terpercaya untuk persiapan ujian kamu.</p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Produk</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white transition">Paket Pembelajaran</a></li>
                            <li><a href="#" className="hover:text-white transition">Video Tutorial</a></li>
                            <li><a href="#" className="hover:text-white transition">Latihan Soal</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Komunitas</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white transition">Forum Diskusi</a></li>
                            <li><a href="#" className="hover:text-white transition">Live Session</a></li>
                            <li><a href="#" className="hover:text-white transition">Mentoring</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Kontak</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="mailto:info@rumahukai.com" className="hover:text-white transition">Email</a></li>
                            <li><a href="#" className="hover:text-white transition">WhatsApp</a></li>
                            <li><a href="#" className="hover:text-white transition">Social Media</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between text-gray-400 text-sm">
                        <p>© 2025 Rumah UKAI. All rights reserved.</p>
                        <div className="flex gap-4 mt-4 sm:mt-0">
                            <a href="#" className="hover:text-white transition">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
