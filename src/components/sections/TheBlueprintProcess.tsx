"use client";

import { useState } from "react";

export function TheBlueprintProcess() {
    const [area, setArea] = useState(120);

    // Calculate a roughly estimated price per sqm based on standard/premium config
    const baseRate = 3.5; // per sqm in juta
    const estimatedMin = Math.round(area * baseRate);
    const estimatedMax = Math.round(area * (baseRate * 1.3));

    return (
        <>
            {/* The Blueprint (Process) */}
            <section id="blueprint" className="py-24 bg-canvas dark:bg-slate-900 overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                        <span className="text-gold text-sm font-bold uppercase tracking-widest mb-2 block">Our Methodology</span>
                        <h2 className="font-display text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white">The Blueprint</h2>
                    </div>

                    {/* Stepper Component */}
                    <div className="relative max-w-5xl mx-auto hidden md:block">
                        <div className="connector-line dark:bg-slate-700"></div>
                        <div className="grid grid-cols-4 relative z-10">
                            {/* Step 1 */}
                            <div className="flex flex-col items-center group cursor-pointer">
                                <div className="w-12 h-12 rounded-full bg-slate-900 text-gold flex items-center justify-center border-4 border-slate-200 shadow-lg group-hover:scale-110 group-hover:bg-gold group-hover:text-slate-900 transition-all duration-300">
                                    <span className="font-bold text-lg">1</span>
                                </div>
                                <h4 className="mt-6 font-display text-xl font-medium text-slate-900 dark:text-white group-hover:text-gold transition-colors">Consultation</h4>
                                <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-500 text-center mt-2 px-4">
                                    <p className="text-sm text-slate-500 dark:text-slate-400">We listen to your vision, assess the site, and define the project scope.</p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex flex-col items-center group cursor-pointer">
                                <div className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center border-4 border-slate-200 shadow-lg group-hover:scale-110 group-hover:bg-gold group-hover:text-slate-900 transition-all duration-300">
                                    <span className="font-bold text-lg">2</span>
                                </div>
                                <h4 className="mt-6 font-display text-xl font-medium text-slate-900 dark:text-white group-hover:text-gold transition-colors">Design</h4>
                                <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-500 text-center mt-2 px-4">
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Architectural drafting, 3D visualization, and material selection.</p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex flex-col items-center group cursor-pointer">
                                <div className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center border-4 border-slate-200 shadow-lg group-hover:scale-110 group-hover:bg-gold group-hover:text-slate-900 transition-all duration-300">
                                    <span className="font-bold text-lg">3</span>
                                </div>
                                <h4 className="mt-6 font-display text-xl font-medium text-slate-900 dark:text-white group-hover:text-gold transition-colors">Build</h4>
                                <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-500 text-center mt-2 px-4">
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Execution by master craftsmen with weekly progress reports.</p>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="flex flex-col items-center group cursor-pointer">
                                <div className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center border-4 border-slate-200 shadow-lg group-hover:scale-110 group-hover:bg-gold group-hover:text-slate-900 transition-all duration-300">
                                    <span className="font-bold text-lg">4</span>
                                </div>
                                <h4 className="mt-6 font-display text-xl font-medium text-slate-900 dark:text-white group-hover:text-gold transition-colors">Handover</h4>
                                <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-500 text-center mt-2 px-4">
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Final inspection, key handover, and post-construction support.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Process List */}
                    <div className="md:hidden flex flex-col gap-6">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-slate-900 text-gold flex-shrink-0 flex items-center justify-center font-bold">1</div>
                            <div>
                                <h4 className="font-display text-lg font-medium text-slate-900 dark:text-white">Consultation</h4>
                                <p className="text-sm text-slate-500 mt-1 dark:text-slate-400">We listen to your vision, assess the site, and define the project scope.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-900 flex-shrink-0 flex items-center justify-center font-bold">2</div>
                            <div>
                                <h4 className="font-display text-lg font-medium text-slate-900 dark:text-white">Design</h4>
                                <p className="text-sm text-slate-500 mt-1 dark:text-slate-400">Architectural drafting, 3D visualization, and material selection.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-900 flex-shrink-0 flex items-center justify-center font-bold">3</div>
                            <div>
                                <h4 className="font-display text-lg font-medium text-slate-900 dark:text-white">Build</h4>
                                <p className="text-sm text-slate-500 mt-1 dark:text-slate-400">Execution by master craftsmen with weekly progress reports.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-900 flex-shrink-0 flex items-center justify-center font-bold">4</div>
                            <div>
                                <h4 className="font-display text-lg font-medium text-slate-900 dark:text-white">Handover</h4>
                                <p className="text-sm text-slate-500 mt-1 dark:text-slate-400">Final inspection, key handover, and post-construction support.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Calculator */}
            <section className="relative z-10 px-6 lg:px-8 pb-24 bg-canvas dark:bg-slate-900 pt-12">
                <div className="mx-auto max-w-5xl rounded-xl bg-surface p-8 shadow-elevated ring-1 ring-slate-900/5 dark:bg-slate-800 dark:ring-white/10 lg:p-12 mb-20">
                    <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-2">
                        {/* Left: Inputs */}
                        <div className="flex flex-col gap-8">
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <label className="block text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white" htmlFor="area-slider">Area Size</label>
                                    <span className="font-display text-2xl font-medium text-slate-900 dark:text-primary">{area} m²</span>
                                </div>
                                <div className="relative h-6 w-full flex items-center">
                                    <div className="absolute w-full h-1 bg-slate-200 rounded-full dark:bg-slate-700"></div>
                                    <div className="absolute h-1 bg-primary rounded-full transition-all duration-150" style={{ width: `${((area - 50) / 450) * 100}%` }}></div>
                                    <input
                                        className="absolute w-full h-6 opacity-0 cursor-pointer z-10"
                                        id="area-slider"
                                        max="500"
                                        min="50"
                                        type="range"
                                        value={area}
                                        onChange={(e) => setArea(parseInt(e.target.value))}
                                    />
                                    <div className="absolute h-6 w-6 rounded-full bg-slate-900 border-2 border-primary shadow-md pointer-events-none transition-all duration-150" style={{ left: `${((area - 50) / 450) * 100}%`, transform: 'translateX(-50%)' }}></div>
                                </div>
                                <div className="flex justify-between mt-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                                    <span>50 m²</span>
                                    <span>500 m²</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div className="relative">
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 dark:text-slate-400" htmlFor="project-type">Project Type</label>
                                    <div className="relative">
                                        <select className="block w-full appearance-none rounded border border-slate-200 bg-slate-50 py-3 px-4 pr-10 text-slate-900 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white sm:text-sm" id="project-type">
                                            <option>Residential Renovation</option>
                                            <option>New Build</option>
                                            <option>Commercial Fit-out</option>
                                            <option>Industrial</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                                            <span className="material-symbols-outlined">expand_more</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative">
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 dark:text-slate-400" htmlFor="finish-grade">Finish Grade</label>
                                    <div className="relative">
                                        <select className="block w-full appearance-none rounded border border-slate-200 bg-slate-50 py-3 px-4 pr-10 text-slate-900 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white sm:text-sm" id="finish-grade" defaultValue="Premium">
                                            <option>Standard</option>
                                            <option value="Premium">Premium</option>
                                            <option>Luxury Bespoke</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                                            <span className="material-symbols-outlined">expand_more</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Output */}
                        <div className="flex flex-col justify-center rounded-lg bg-slate-50 p-8 text-center dark:bg-slate-900 lg:p-10 border border-slate-100 dark:border-slate-800">
                            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">Estimated Project Investment</p>
                            <div className="my-4 flex items-baseline justify-center gap-1">
                                <span className="font-display text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">IDR {estimatedMin}</span>
                                <span className="text-xl font-medium text-slate-500 dark:text-slate-400">jt</span>
                                <span className="mx-2 text-3xl font-light text-slate-300">-</span>
                                <span className="font-display text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">{estimatedMax}</span>
                                <span className="text-xl font-medium text-slate-500 dark:text-slate-400">jt</span>
                            </div>
                            <p className="text-sm text-slate-500 dark:text-slate-400 italic">
                                *Estimate only. Subject to detailed site survey and material selection.
                            </p>
                            <button className="mt-8 w-full rounded bg-primary py-3.5 px-4 text-sm font-bold uppercase tracking-wide text-slate-900 shadow-lg shadow-primary/20 hover:bg-[#d9ac1b] transition-all">
                                Save Estimate
                            </button>
                        </div>
                    </div>
                </div>

                {/* Pricing Tiers below */}
                <div className="mx-auto max-w-7xl pt-12">
                    <div className="text-center mb-16">
                        <h3 className="font-display text-3xl font-semibold text-slate-900 dark:text-white">Service Packages</h3>
                        <p className="mt-4 text-slate-600 dark:text-slate-400">Choose the level of engagement that suits your project needs.</p>
                    </div>
                    <div className="grid max-w-lg grid-cols-1 gap-8 mx-auto lg:max-w-none lg:grid-cols-3 lg:items-start">
                        {/* Tier 1 */}
                        <div className="flex flex-col rounded-lg bg-surface p-8 shadow-soft ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-700 hover:shadow-lg transition-shadow duration-300">
                            <h4 className="font-display text-2xl font-bold text-slate-900 dark:text-white">The Essential</h4>
                            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">Perfect for straightforward renovations.</p>
                            <p className="mt-6 flex items-baseline gap-x-1">
                                <span className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Start 3.5jt</span>
                                <span className="text-sm font-semibold leading-6 text-slate-500 dark:text-slate-400">/m²</span>
                            </p>
                            <ul className="mt-8 space-y-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                                <li className="flex gap-x-3">
                                    <span className="material-symbols-outlined text-primary text-lg">check</span> 2D Layout Planning
                                </li>
                                <li className="flex gap-x-3">
                                    <span className="material-symbols-outlined text-primary text-lg">check</span> Standard Material Selection
                                </li>
                                <li className="flex gap-x-3 text-slate-400 dark:text-slate-600">
                                    <span className="material-symbols-outlined text-lg">close</span> 3D Visualization
                                </li>
                            </ul>
                            <button className="mt-8 block rounded border border-slate-200 px-3 py-2.5 text-center text-sm font-bold uppercase leading-6 text-slate-900 hover:bg-slate-50 dark:border-slate-600 dark:text-white dark:hover:bg-slate-800 transition-colors w-full">Choose Plan</button>
                        </div>

                        {/* Signature */}
                        <div className="relative flex flex-col rounded-lg bg-surface p-8 shadow-elevated ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-700 lg:scale-105 lg:z-10 border-t-4 border-t-primary">
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-full bg-slate-900 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-primary shadow-sm dark:bg-white dark:text-slate-900">
                                Most Popular
                            </div>
                            <h4 className="font-display text-2xl font-bold text-slate-900 dark:text-white">The Signature</h4>
                            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">Full architectural service for custom homes.</p>
                            <p className="mt-6 flex items-baseline gap-x-1">
                                <span className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Start 5.2jt</span>
                                <span className="text-sm font-semibold leading-6 text-slate-500 dark:text-slate-400">/m²</span>
                            </p>
                            <ul className="mt-8 space-y-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                                <li className="flex gap-x-3">
                                    <span className="material-symbols-outlined text-primary text-lg">check</span> Comprehensive 3D Design
                                </li>
                                <li className="flex gap-x-3">
                                    <span className="material-symbols-outlined text-primary text-lg">check</span> Premium Material Sourcing
                                </li>
                                <li className="flex gap-x-3">
                                    <span className="material-symbols-outlined text-primary text-lg">check</span> Full Structural Analysis
                                </li>
                            </ul>
                            <button className="mt-8 block rounded bg-slate-900 px-3 py-3 text-center text-sm font-bold uppercase leading-6 text-white shadow-sm hover:bg-slate-800 dark:bg-primary dark:text-slate-900 dark:hover:bg-[#d9ac1b] transition-all w-full">Choose Plan</button>
                        </div>

                        {/* Bespoke */}
                        <div className="flex flex-col rounded-lg bg-surface p-8 shadow-soft ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-700 hover:shadow-lg transition-shadow duration-300">
                            <h4 className="font-display text-2xl font-bold text-slate-900 dark:text-white">The Bespoke</h4>
                            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">Luxury execution without compromise.</p>
                            <p className="mt-6 flex items-baseline gap-x-1">
                                <span className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Start 8.5jt</span>
                                <span className="text-sm font-semibold leading-6 text-slate-500 dark:text-slate-400">/m²</span>
                            </p>
                            <ul className="mt-8 space-y-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                                <li className="flex gap-x-3">
                                    <span className="material-symbols-outlined text-primary text-lg">check</span> VR Walkthroughs
                                </li>
                                <li className="flex gap-x-3">
                                    <span className="material-symbols-outlined text-primary text-lg">check</span> Imported Luxury Materials
                                </li>
                                <li className="flex gap-x-3">
                                    <span className="material-symbols-outlined text-primary text-lg">check</span> Smart Home Integration
                                </li>
                            </ul>
                            <button className="mt-8 block rounded border border-slate-200 px-3 py-2.5 text-center text-sm font-bold uppercase leading-6 text-slate-900 hover:bg-slate-50 dark:border-slate-600 dark:text-white dark:hover:bg-slate-800 transition-colors w-full">Choose Plan</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
