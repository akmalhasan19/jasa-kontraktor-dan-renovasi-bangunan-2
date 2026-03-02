"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TypingText } from "@/components/ui/TypingText";

export function TheAtelierHero() {
    const containerRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Only play animation on desktop
            let mm = gsap.matchMedia();

            mm.add("(min-width: 768px)", () => {
                const items = gsap.utils.toArray<HTMLElement>(".trust-indicator-item");

                // Set initial state for trust indicators
                gsap.set(items, {
                    x: -80,
                    opacity: 0
                });

                // Hero title mask animation
                if (titleRef.current) {
                    // Start by hiding the text using a mask image shifted way offset
                    gsap.set(titleRef.current, {
                        opacity: 1, // ensure the element itself is visible
                        WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 65%)",
                        WebkitMaskSize: "300% 100%",
                        WebkitMaskPosition: "100% 0%"
                    });

                    // Animate the mask shifting from left to right to reveal the text
                    gsap.to(titleRef.current, {
                        WebkitMaskPosition: "0% 0%",
                        duration: 2.5,
                        ease: "power2.out",
                        delay: 0.1
                    });
                }

                // Create ScrollTrigger animation for trust indicators
                ScrollTrigger.create({
                    trigger: containerRef.current,
                    start: "top 85%",
                    animation: gsap.to(items, {
                        x: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.2,
                        ease: "power3.out"
                    })
                });
            });

            return () => mm.revert();
        }, containerRef);

        return () => ctx.revert();
    }, []);

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
                <div className="relative z-10 text-center max-w-4xl px-6">
                    <h1 ref={titleRef} className="font-display font-semibold text-5xl md:text-7xl lg:text-[5rem] text-white leading-[1.1] tracking-tight mb-6 opacity-0 md:opacity-100">
                        Crafting Legacies in <br /><span className="italic">Concrete &amp; Light</span>
                    </h1>
                    <TypingText
                        className="font-body text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed min-h-[56px] md:min-h-[60px]"
                        text="Premium construction and renovation services for the discerning homeowner who values precision over price."
                    />
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
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
            <section ref={containerRef} className="py-20 bg-canvas border-b border-slate-200 overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4 md:gap-12 justify-center items-center">
                        <div className="trust-indicator-item flex flex-col items-center text-center group">
                            <span className="material-symbols-outlined text-[32px] text-gold mb-4 group-hover:scale-110 transition-transform drop-shadow-sm">domain</span>
                            <h3 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-2 flex items-start">
                                150<span className="text-base text-slate-400 font-normal ml-0.5 mt-[-4px]">+</span>
                            </h3>
                            <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest font-bold">Projects Completed</p>
                        </div>
                        <div className="trust-indicator-item flex flex-col items-center text-center group">
                            <span className="material-symbols-outlined text-[32px] text-gold mb-4 group-hover:scale-110 transition-transform drop-shadow-sm">engineering</span>
                            <h3 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-2">10</h3>
                            <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest font-bold">Years Experience</p>
                        </div>
                        <div className="trust-indicator-item flex flex-col items-center text-center group">
                            <span className="material-symbols-outlined text-[32px] text-gold mb-4 group-hover:scale-110 transition-transform drop-shadow-sm">workspace_premium</span>
                            <h3 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-2">ISO</h3>
                            <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest font-bold">9001 Certified</p>
                        </div>
                        <div className="trust-indicator-item flex flex-col items-center text-center group">
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
