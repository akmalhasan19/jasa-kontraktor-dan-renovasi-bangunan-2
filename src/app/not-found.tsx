import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center bg-white relative overflow-hidden pt-[72px]">
            {/* Decorative large background text */}
            <div className="absolute top-10 left-10 md:left-1/4 text-slate-100 select-none pointer-events-none">
                <span className="font-display text-[15rem] leading-none opacity-50">404</span>
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
                <span className="text-gold text-sm font-bold tracking-[0.2em] uppercase mb-4 block">Error 404</span>

                <h1 className="text-slate-900 font-display text-5xl md:text-7xl font-semibold mb-6 leading-tight">
                    Page Not <br className="md:hidden" /><span className="italic text-gold">Found</span>
                </h1>

                <p className="text-slate-500 text-lg mb-12 leading-relaxed font-light max-w-lg mx-auto">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white px-10 py-4 rounded font-bold text-sm tracking-widest uppercase transition-all shadow-lg group"
                >
                    <span className="material-symbols-outlined text-sm mr-2 group-hover:-translate-x-1 transition-transform">arrow_back</span>
                    Return Home
                </Link>
            </div>
        </div>
    );
}
