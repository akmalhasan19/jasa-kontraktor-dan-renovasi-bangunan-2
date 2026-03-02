import { TypingText } from "@/components/ui/TypingText";
import Link from "next/link";

export function TestimonialsCta() {
    return (
        <>
            {/* Testimonials */}
            <section className="pt-6 pb-24 md:py-24 bg-slate-100 dark:bg-slate-900 relative overflow-hidden flex flex-col items-center justify-center">
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
                        <TypingText
                            className="font-display text-2xl md:text-4xl text-slate-800 dark:text-slate-100 italic leading-snug min-h-[96px] md:min-h-[144px]"
                            text="They brought a level of transparency and precision I didn't think was possible in construction. The finish quality is simply impeccable."
                        />
                    </div>
                    <div className="flex flex-col items-center">
                        <cite className="not-italic font-bold text-slate-900 dark:text-white tracking-wide">Alexander H.</cite>
                        <span className="text-sm text-slate-500 dark:text-slate-400">Property Developer, South Jakarta</span>
                    </div>
                </div>
            </section>

            {/* Legacy CTA */}
            <section className="py-24 bg-white dark:bg-background-dark border-t border-slate-100 dark:border-white/10 px-4 md:px-6">
                <div className="max-w-[500px] md:max-w-4xl mx-auto">
                    <div className="bg-slate-900 rounded-2xl p-8 md:p-12 relative overflow-hidden flex flex-col justify-center shadow-lg w-full mx-auto items-center text-center">
                        {/* Glow effect matching gold text */}
                        <div className="absolute -top-32 -right-32 w-64 md:w-96 h-64 md:h-96 bg-[#c5a02e] opacity-30 md:opacity-20 blur-[80px] md:blur-[100px] rounded-full pointer-events-none"></div>

                        <div className="relative z-10 flex flex-col items-center w-full">
                            <span className="text-gold text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4">Start Your Journey</span>

                            <h3 className="text-white font-display text-3xl md:text-5xl mb-6 font-medium leading-tight max-w-[280px] md:max-w-none">
                                Ready to build your <br className="md:hidden" /><em className="text-gold font-serif italic font-normal">legacy?</em>
                            </h3>

                            <TypingText
                                className="text-slate-300 text-sm md:text-base mb-10 max-w-xs md:max-w-lg leading-relaxed font-light min-h-[40px] md:min-h-[48px]"
                                text={`Whether it's a renovation or a ground-up build, our team is ready to bring your vision to life with precision and care.`}
                            />

                            <div className="flex flex-col md:flex-row w-full gap-3 md:justify-center md:max-w-md">
                                <Link href="/book" className="bg-gold hover:bg-[#c5a02e] text-white px-8 py-3.5 rounded font-bold text-sm transition-colors shadow-sm w-full text-center">
                                    Book Consultation
                                </Link>
                                <Link
                                    href="/contact"
                                    className="bg-[#1e293b] hover:bg-[#334155] border border-slate-700 text-white px-8 py-3.5 rounded font-bold text-sm transition-colors w-full text-center flex items-center justify-center"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
