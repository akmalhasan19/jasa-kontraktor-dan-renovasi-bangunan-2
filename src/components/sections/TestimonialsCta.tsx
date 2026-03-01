export function TestimonialsCta() {
    return (
        <>
            {/* Testimonials */}
            <section className="py-24 bg-slate-100 dark:bg-slate-900 relative overflow-hidden flex flex-col items-center justify-center">
                <div className="absolute top-10 left-10 md:left-1/4 text-slate-200 dark:text-slate-800 select-none pointer-events-none">
                    <span className="font-display text-[15rem] leading-none opacity-50">“</span>
                </div>
                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                    <div className="mb-10">
                        <div className="flex justify-center gap-1 text-gold mb-6">
                            <span className="material-symbols-outlined">star</span>
                            <span className="material-symbols-outlined">star</span>
                            <span className="material-symbols-outlined">star</span>
                            <span className="material-symbols-outlined">star</span>
                            <span className="material-symbols-outlined">star</span>
                        </div>
                        <blockquote className="font-display text-2xl md:text-4xl text-slate-800 dark:text-slate-100 italic leading-snug">
                            They brought a level of transparency and precision I didn&apos;t think was possible in construction. The finish quality is simply impeccable.
                        </blockquote>
                    </div>
                    <div className="flex flex-col items-center">
                        <cite className="not-italic font-bold text-slate-900 dark:text-white tracking-wide">Alexander H.</cite>
                        <span className="text-sm text-slate-500 dark:text-slate-400">Property Developer, South Jakarta</span>
                    </div>
                </div>
            </section>

            {/* CTA / Concierge */}
            <section className="py-24 bg-white dark:bg-background-dark border-t border-slate-100 dark:border-white/10">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="font-display text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white mb-6">Ready to Build Your Vision?</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg mb-10 leading-relaxed">
                        Whether you have a full set of blueprints or just a rough idea, our concierge team is ready to guide you through the next steps.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-gold hover:bg-[#c5a02e] text-slate-900 px-10 py-4 rounded font-bold text-sm tracking-widest uppercase transition-colors shadow-lg shadow-gold/20">
                            Request Consultation
                        </button>
                        <button className="bg-slate-100 hover:bg-slate-200 text-slate-900 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 px-10 py-4 rounded font-bold text-sm tracking-widest uppercase transition-colors border border-transparent dark:border-white/20">
                            Calculate Estimate
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
