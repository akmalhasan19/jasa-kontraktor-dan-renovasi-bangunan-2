import Link from "next/link";

export function TheAtelierHero() {
    return (
        <>
            {/* Hero Section */}
            <section id="atelier" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        alt="Minimalist luxury living room with concrete walls and warm lighting"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIc5MIFrFB8sMdQTcLl_psDtqjEl6S_eFIXXR9BLC34urMf6j8vbXiZ1an2TK7u316k4e21fwdEyE9NWJXy8TxOpyDeEoKO0VdAiLL_AD9G4VMaBESOJZL4J52SYaKnmc5Z4zoVgxPeaO8Mxs_CEeceelrPB9lYuoTUB1jllvlXB6fF2j7FLy_EzoZazKWW7vgOmlG_Pr1D7Vp1A3v8-7l1odMsrFh4ND7QepXYv5zhB7Sd5pk4bcvcvyZCjnvrSVkLExTneVKfz5g"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 text-center max-w-4xl px-6 animate-fade-in-up">
                    <h1 className="font-display font-semibold text-5xl md:text-7xl lg:text-[5rem] text-white leading-[1.1] tracking-tight mb-6">
                        Crafting Legacies in <br /><span className="italic">Concrete &amp; Light</span>
                    </h1>
                    <p className="font-body text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                        Premium construction and renovation services for the discerning homeowner who values precision over price.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="#gallery" className="inline-flex items-center justify-center min-w-[180px] bg-slate-900 hover:bg-slate-800 text-gold border border-slate-900 px-8 py-4 rounded font-bold text-sm tracking-widest uppercase transition-all">
                            View Projects
                        </Link>
                        <Link href="#craft" className="inline-flex items-center justify-center min-w-[180px] bg-transparent hover:bg-white/10 text-white border border-white px-8 py-4 rounded font-bold text-sm tracking-widest uppercase transition-all backdrop-blur-sm">
                            Our Services
                        </Link>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce">
                    <span className="material-symbols-outlined text-3xl">arrow_downward</span>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="py-20 bg-canvas border-b border-slate-200">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4 md:gap-12 justify-center items-center">
                        <div className="flex flex-col items-center text-center group">
                            <span className="material-symbols-outlined text-[32px] text-gold mb-4 group-hover:scale-110 transition-transform drop-shadow-sm">domain</span>
                            <h3 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-2 flex items-start">
                                150<span className="text-base text-slate-400 font-normal ml-0.5 mt-[-4px]">+</span>
                            </h3>
                            <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest font-bold">Projects Completed</p>
                        </div>
                        <div className="flex flex-col items-center text-center group">
                            <span className="material-symbols-outlined text-[32px] text-gold mb-4 group-hover:scale-110 transition-transform drop-shadow-sm">engineering</span>
                            <h3 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-2">10</h3>
                            <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest font-bold">Years Experience</p>
                        </div>
                        <div className="flex flex-col items-center text-center group">
                            <span className="material-symbols-outlined text-[32px] text-gold mb-4 group-hover:scale-110 transition-transform drop-shadow-sm">workspace_premium</span>
                            <h3 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-2">ISO</h3>
                            <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest font-bold">9001 Certified</p>
                        </div>
                        <div className="flex flex-col items-center text-center group">
                            <span className="material-symbols-outlined text-[32px] text-gold mb-4 group-hover:scale-110 transition-transform drop-shadow-sm">schedule</span>
                            <h3 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-2">0</h3>
                            <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest font-bold">Days Delay (Avg)</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
