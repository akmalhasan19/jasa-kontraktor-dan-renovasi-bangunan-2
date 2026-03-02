import Link from "next/link";

import { TypingText } from "@/components/ui/TypingText";
import { GradientText } from "@/components/ui/GradientText";

export function TheCraftServices() {
    return (
        <section id="craft" className="pt-24 pb-8 md:pb-24 bg-surface dark:bg-background-dark">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">

                {/* Page Title */}
                <div className="max-w-4xl mx-auto text-center mb-8 md:mb-24">
                    <GradientText as="p" className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4" text="Our Services" />
                    <GradientText as="h2" className="font-display text-5xl md:text-7xl text-slate-900 dark:text-slate-100 mb-6 font-semibold" text="The Craft" />
                    <div className="h-px w-24 bg-primary mx-auto mb-8"></div>
                    <TypingText
                        className="text-slate-500 dark:text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light min-h-[56px] md:min-h-[60px]"
                        text="Precision in every detail, from foundation to finish. We build not just structures, but legacies in concrete and light."
                    />
                </div>

                {/* Service Block 1: Renovation */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 pt-4 pb-16 md:py-16 items-center group">
                    {/* Image Left */}
                    <div className="relative overflow-hidden rounded-sm aspect-[3/4] lg:aspect-[4/5] order-1">
                        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-500 z-10"></div>
                        <img alt="High-end modern kitchen renovation with marble island and warm lighting" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg9rIgliBjqHDYA2AyO6Yg-mKOfv8Rf0YJX3vJ4zuMghz0lcI1vqS0Wi91UuxQtcRoLuoIy0NtyPNGe2RdKA20_KrTfShZvHdWRVIOhNPe4E6zzQcx-LTwCEAd72SMFlr4nMAQ7R7mpDD_6sn19neY2Xc70bBlaRbtibq4cVgfUyAFMZWjaY7cec0hNMshVk2wbgNb4JS8VIY1MVGdrojz1e7XMSA12pDm5jrOMHIMZLyoTesiKHztym2eE-HO3BNmV0Z2g39hQTyo" />
                    </div>

                    {/* Content Right */}
                    <div className="flex flex-col gap-8 order-2">
                        <div className="flex flex-col gap-4">
                            <GradientText as="span" className="text-primary text-xs font-bold tracking-[0.15em] uppercase block" text="01 — Revival" />
                            <GradientText as="h3" className="font-display text-4xl md:text-5xl text-slate-900 dark:text-slate-100 leading-tight" text="Renovation & Remodeling" />
                            <TypingText
                                className="text-slate-500 dark:text-slate-400 text-base md:text-lg leading-relaxed font-light mt-2 min-h-[96px]"
                                text="We breathe new life into existing structures, respecting their history while infusing modern functionality. Our renovation process is meticulous, focusing on structural integrity and aesthetic transformation."
                            />
                        </div>

                        <ul className="flex flex-col gap-4 border-l border-slate-200 dark:border-slate-800 pl-6 my-2">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
                                <div>
                                    <GradientText as="strong" className="block text-slate-900 dark:text-slate-100 text-sm font-bold tracking-wide uppercase" text="Structural Reinforcement" />
                                    <GradientText as="span" className="text-slate-500 dark:text-slate-400 text-sm block" text="Ensuring safety and longevity for decades to come." delay={0.1} />
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
                                <div>
                                    <GradientText as="strong" className="block text-slate-900 dark:text-slate-100 text-sm font-bold tracking-wide uppercase" text="MEP Systems Overhaul" />
                                    <GradientText as="span" className="text-slate-500 dark:text-slate-400 text-sm block" text="Modernizing electrical and plumbing for efficiency." delay={0.1} />
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
                                <div>
                                    <GradientText as="strong" className="block text-slate-900 dark:text-slate-100 text-sm font-bold tracking-wide uppercase" text="Premium Finishing" />
                                    <GradientText as="span" className="text-slate-500 dark:text-slate-400 text-sm block" text="Sourcing high-end marble, woods, and fixtures." delay={0.1} />
                                </div>
                            </li>
                        </ul>

                        <Link className="group/link flex items-center gap-2 text-slate-900 dark:text-primary font-bold text-sm tracking-wide uppercase mt-4 w-fit" href="#blueprint">
                            <span className="border-b-2 border-primary/20 group-hover/link:border-primary transition-all pb-0.5">See Renovation Costs</span>
                            <span className="material-symbols-outlined text-lg transition-transform group-hover/link:translate-x-1 text-primary">arrow_forward</span>
                        </Link>
                    </div>
                </div>

                {/* Divider */}
                <div className="flex items-center justify-center py-4 md:py-8 opacity-40">
                    <div className="h-px w-full max-w-[200px] bg-slate-300 dark:bg-slate-700"></div>
                    <div className="rotate-45 size-2 bg-primary mx-4"></div>
                    <div className="h-px w-full max-w-[200px] bg-slate-300 dark:bg-slate-700"></div>
                </div>

                {/* Service Block 2: New Builds */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 pt-4 pb-16 md:py-16 items-center group">
                    {/* Content Left (Order changes on Desktop) */}
                    <div className="flex flex-col gap-8 order-2 lg:order-1">
                        <div className="flex flex-col gap-4">
                            <GradientText as="span" className="text-primary text-xs font-bold tracking-[0.15em] uppercase block" text="02 — Creation" />
                            <GradientText as="h3" className="font-display text-4xl md:text-5xl text-slate-900 dark:text-slate-100 leading-tight" text="Ground-Up Construction" />
                            <TypingText
                                className="text-slate-500 dark:text-slate-400 text-base md:text-lg leading-relaxed font-light mt-2 min-h-[96px]"
                                text="From the first sketch to the final coat of paint, we manage the entire lifecycle of your new build. We combine architectural vision with engineering precision to create homes that stand the test of time."
                            />
                        </div>

                        <ul className="flex flex-col gap-4 border-l border-slate-200 dark:border-slate-800 pl-6 my-2">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
                                <div>
                                    <GradientText as="strong" className="block text-slate-900 dark:text-slate-100 text-sm font-bold tracking-wide uppercase" text="End-to-End Management" />
                                    <GradientText as="span" className="text-slate-500 dark:text-slate-400 text-sm block" text="Permitting, procurement, and project oversight." delay={0.1} />
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
                                <div>
                                    <GradientText as="strong" className="block text-slate-900 dark:text-slate-100 text-sm font-bold tracking-wide uppercase" text="Sustainable Practices" />
                                    <GradientText as="span" className="text-slate-500 dark:text-slate-400 text-sm block" text="Eco-friendly materials and energy-efficient designs." delay={0.1} />
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
                                <div>
                                    <GradientText as="strong" className="block text-slate-900 dark:text-slate-100 text-sm font-bold tracking-wide uppercase" text="Precision Concrete" />
                                    <GradientText as="span" className="text-slate-500 dark:text-slate-400 text-sm block" text="Flawless casting and architectural concrete work." delay={0.1} />
                                </div>
                            </li>
                        </ul>

                        <Link className="group/link flex items-center gap-2 text-slate-900 dark:text-primary font-bold text-sm tracking-wide uppercase mt-4 w-fit" href="#blueprint">
                            <span className="border-b-2 border-primary/20 group-hover/link:border-primary transition-all pb-0.5">View Construction Process</span>
                            <span className="material-symbols-outlined text-lg transition-transform group-hover/link:translate-x-1 text-primary">arrow_forward</span>
                        </Link>
                    </div>

                    {/* Image Right */}
                    <div className="relative overflow-hidden rounded-sm aspect-[3/4] lg:aspect-[4/5] order-1 lg:order-2">
                        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-500 z-10"></div>
                        <img alt="Minimalist concrete building exterior with sharp angles against a blue sky" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOCR7L4_JedBu7QqDyp2jqNd6xw_pcDOq8AyLeGP4STSKDRR7cz-8gmwsZvMcmIKYdUFjJ7WrPdqUvcz87-2WgM7vn_7xQnoPTxqNXZnbFafxdYD9uNSuf5AK2DXnwndnq3gPRcagxGUnmZ7JznUgnv5P1uZgnZLYWSY-uDcygUF2FR9jODzMkQk4WYsJW9cW8uctK3OSkf5p6anAqeNXRizRGgSW36tiGCHlpGhL_Pe4K841vP6CH0oo_vX3nSGJFf0jCnlrsQ0OB" />
                    </div>
                </div>

                {/* Divider */}
                <div className="flex items-center justify-center py-4 md:py-8 opacity-40">
                    <div className="h-px w-full max-w-[200px] bg-slate-300 dark:bg-slate-700"></div>
                    <div className="rotate-45 size-2 bg-primary mx-4"></div>
                    <div className="h-px w-full max-w-[200px] bg-slate-300 dark:bg-slate-700"></div>
                </div>

                {/* Service Block 3: Interior Fit-out */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 pt-4 pb-8 md:py-16 items-center group">
                    {/* Image Left */}
                    <div className="relative overflow-hidden rounded-sm aspect-[3/4] lg:aspect-[4/5] order-1">
                        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-500 z-10"></div>
                        <img alt="Detail shot of custom wooden joinery and modern furniture in a living room" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2Lq_ecj20l5srXuVKtt80xC1ZGeZTXlKRC_h2xQw7YNZmBwYna3JuBa__Jxt3poKu4KLjyieTDog2gRQpGYs8Yr0y1w7spZCi6vLm9msNeNwFGIhY62_8R2l_9VH9-p65LzHFr4Mk7IinaP-O6QrKLuoNfJagb4FuZcFd9BWf7bM5SfFG_0fudQsRDwceNKG5WXACozJe2dyhi34RaQfvcGTRHvCSsNhXKTMp2wfJIAnLOHm54F0q_5ppNdRUbg2gu4bAybjR6Zh9" />
                    </div>

                    {/* Content Right */}
                    <div className="flex flex-col gap-8 order-2">
                        <div className="flex flex-col gap-4">
                            <GradientText as="span" className="text-primary text-xs font-bold tracking-[0.15em] uppercase block" text="03 — Refinement" />
                            <GradientText as="h3" className="font-display text-4xl md:text-5xl text-slate-900 dark:text-slate-100 leading-tight" text="Interior Fit-Out" />
                            <TypingText
                                className="text-slate-500 dark:text-slate-400 text-base md:text-lg leading-relaxed font-light mt-2 min-h-[96px]"
                                text="The soul of a home lies in its interiors. We collaborate with top artisans to deliver bespoke joinery, intelligent lighting solutions, and curated material palettes that elevate everyday living."
                            />
                        </div>

                        <ul className="flex flex-col gap-4 border-l border-slate-200 dark:border-slate-800 pl-6 my-2">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
                                <div>
                                    <GradientText as="strong" className="block text-slate-900 dark:text-slate-100 text-sm font-bold tracking-wide uppercase" text="Custom Cabinetry" />
                                    <GradientText as="span" className="text-slate-500 dark:text-slate-400 text-sm block" text="Tailor-made wardrobes, kitchens, and vanity units." delay={0.1} />
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
                                <div>
                                    <GradientText as="strong" className="block text-slate-900 dark:text-slate-100 text-sm font-bold tracking-wide uppercase" text="Smart Lighting" />
                                    <GradientText as="span" className="text-slate-500 dark:text-slate-400 text-sm block" text="Automated systems to set the perfect mood." delay={0.1} />
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
                                <div>
                                    <GradientText as="strong" className="block text-slate-900 dark:text-slate-100 text-sm font-bold tracking-wide uppercase" text="Material Sourcing" />
                                    <GradientText as="span" className="text-slate-500 dark:text-slate-400 text-sm block" text="Imported tiles, exotic woods, and designer hardware." delay={0.1} />
                                </div>
                            </li>
                        </ul>

                        <Link className="group/link flex items-center gap-2 text-slate-900 dark:text-primary font-bold text-sm tracking-wide uppercase mt-4 w-fit" href="#gallery">
                            <span className="border-b-2 border-primary/20 group-hover/link:border-primary transition-all pb-0.5">View Interior Gallery</span>
                            <span className="material-symbols-outlined text-lg transition-transform group-hover/link:translate-x-1 text-primary">arrow_forward</span>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}
