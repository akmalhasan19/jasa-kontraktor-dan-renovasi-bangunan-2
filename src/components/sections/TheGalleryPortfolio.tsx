import Link from 'next/link';

export function TheGalleryPortfolio() {
    return (
        <section id="gallery" className="py-24 bg-surface dark:bg-background-dark">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="font-display text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white">Selected Works</h2>
                    <Link className="hidden md:block px-6 py-3 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded font-bold text-sm tracking-wide hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-colors" href="#">
                        View Full Portfolio
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Project 1 */}
                    <div className="zoom-card group cursor-pointer">
                        <div className="relative overflow-hidden rounded shadow-soft group-hover:shadow-deep transition-all duration-300">
                            <img alt="Modern minimalist house exterior with pool" className="zoom-image w-full aspect-[4/5] object-cover transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZY2_RDsVpmjkI0Bdt0NMjb8b4RLnOsuWvtpBhI2D4kdlxoIbLWZ4QK0BeET-6RCutoayyVpyxsk9_nPQvknQDfAgisYKJyBetY7Q4MGPR98LEAuMugPg2EKzuaE6Rvb3Jtm-BdTWHxxvOWmgriDc1DsioyPM0oAE0Ch4h0h3B8_nyzRWPBiwVjjtbToYBlGDj3tx5g3eU2JNhRrF1nJjUuO7XTtZ-TLpctO9u92XInRWZG2T7QYu3mNy7Hoi7CuUopgKthiyULMxK" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <h3 className="text-white font-display text-2xl font-medium">Villa Uluwatu</h3>
                                <p className="text-white/80 text-sm mt-1 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">location_on</span> Bali, Indonesia
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Project 2 */}
                    <div className="zoom-card group cursor-pointer">
                        <div className="relative overflow-hidden rounded shadow-soft group-hover:shadow-deep transition-all duration-300">
                            <img alt="Luxury open plan living room with high ceilings" className="zoom-image w-full aspect-[4/5] object-cover transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfgGB8dEJ54j4-NQN4FqvFFNl3jc-neBCZ0BP4SsrvDcq9To6cCz6yTTx0dIemvPFSwZhc9ZJ4kXxGSv8PfjMGe9nYwROljksVvAQQzEQnJR6FcKFa9iNmtGIpLOsnCweIzlURRH5Ebn5VV75PjTqeJ33P_HP-95XxWpNt281xaha8mnOmEnEm1HAl8EZOW6G5S3n9tnT_mmPjboaPQbO1J2GTZqiedAdjHK8KSv3GflDVGXbHSKsOS3f5SKrnXOmi872PES3A2e9R" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <h3 className="text-white font-display text-2xl font-medium">The Menteng Residence</h3>
                                <p className="text-white/80 text-sm mt-1 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">location_on</span> Jakarta, Indonesia
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Project 3 */}
                    <div className="zoom-card group cursor-pointer">
                        <div className="relative overflow-hidden rounded shadow-soft group-hover:shadow-deep transition-all duration-300">
                            <img alt="Modern concrete staircase with glass railing" className="zoom-image w-full aspect-[4/5] object-cover transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANEnizekQcFK6w-tqghaU6JavUC2ORRIm8LFLzdwRwMhyRNPoGN-L-0hahEAi02dWrCamebz5pL87oe9n7k-3m_AntApBIpsOOmBCoy2W13dsgcgV8C7FYBHN7YZX0WLbb7B-zBGysg-CZZLRQWfnDubHungeqB7R5oExNjbtM8Bfa1o7XuCQC4Cwo6B_gb6QCvx2t_UYD6L7IZ_E-AJvei_JQD58nRz50FyBAgzDuDDAR4xueouGJNxpHKgBgIHRY4O4S5NutjV9E" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <h3 className="text-white font-display text-2xl font-medium">Urban Loft Renovation</h3>
                                <p className="text-white/80 text-sm mt-1 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">location_on</span> Bandung, Indonesia
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link className="inline-block w-full text-center px-6 py-3 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded font-bold text-sm tracking-wide hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-colors" href="#">
                        View Full Portfolio
                    </Link>
                </div>
            </div>
        </section>
    );
}
