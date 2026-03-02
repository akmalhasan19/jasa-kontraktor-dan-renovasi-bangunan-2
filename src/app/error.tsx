'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error("Application error:", error);
    }, [error]);

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center bg-white relative overflow-hidden pt-[72px]">
            {/* Decorative large background text */}
            <div className="absolute top-10 left-10 md:left-1/4 text-slate-100 select-none pointer-events-none">
                <span className="font-display text-[12rem] md:text-[15rem] leading-none opacity-50">500</span>
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
                <span className="text-red-500 text-sm font-bold tracking-[0.2em] uppercase mb-4 block">System Error</span>

                <h1 className="text-slate-900 font-display text-4xl md:text-6xl font-semibold mb-6 leading-tight">
                    Something went <span className="italic text-red-500">wrong!</span>
                </h1>

                <p className="text-slate-500 text-lg mb-12 leading-relaxed font-light max-w-lg mx-auto">
                    We apologize for the inconvenience. An unexpected error has occurred on our end. Our team has been notified.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                        onClick={() => reset()}
                        className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white px-10 py-4 rounded font-bold text-sm tracking-widest uppercase transition-all shadow-lg group w-full sm:w-auto"
                    >
                        <span className="material-symbols-outlined text-sm mr-2 group-hover:-rotate-180 transition-transform duration-500">refresh</span>
                        Try Again
                    </button>

                    <Link
                        href="/"
                        className="inline-flex items-center justify-center border border-slate-200 text-slate-900 hover:bg-slate-50 px-10 py-4 rounded font-bold text-sm tracking-widest uppercase transition-all w-full sm:w-auto"
                    >
                        Return Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
