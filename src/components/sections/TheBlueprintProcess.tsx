"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { TypingText } from "@/components/ui/TypingText";

export function TheBlueprintProcess() {
    const [area, setArea] = useState(120);
    const [activeStep, setActiveStep] = useState<number | null>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const [projectType, setProjectType] = useState("Residential Renovation");
    const [isProjectTypeOpen, setIsProjectTypeOpen] = useState(false);
    const projectTypeRef = useRef<HTMLDivElement>(null);

    const [finishGrade, setFinishGrade] = useState("Premium");
    const [isFinishGradeOpen, setIsFinishGradeOpen] = useState(false);
    const finishGradeRef = useRef<HTMLDivElement>(null);

    const projectTypes = ["Residential Renovation", "New Build", "Commercial Fit-out"];
    const finishGrades = ["Premium", "Standard", "Luxury Bespoke"];

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (projectTypeRef.current && !projectTypeRef.current.contains(event.target as Node)) {
                setIsProjectTypeOpen(false);
            }
            if (finishGradeRef.current && !finishGradeRef.current.contains(event.target as Node)) {
                setIsFinishGradeOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleStepClick = (step: number) => {
        setActiveStep(activeStep === step ? null : step);
    };

    useEffect(() => {
        if (!contentRef.current) return;

        if (activeStep !== null) {
            const activeChild = contentRef.current.children[activeStep - 1] as HTMLElement;
            if (activeChild) {
                const targetHeight = activeChild.offsetHeight;
                gsap.to(contentRef.current, {
                    height: targetHeight,
                    duration: 0.4,
                    ease: "power2.out"
                });
            }
        } else {
            gsap.to(contentRef.current, {
                height: 0,
                duration: 0.4,
                ease: "power2.inOut"
            });
        }
    }, [activeStep]);

    // Calculate a roughly estimated price per sqm based on standard/premium config
    const baseRate = 3.5; // per sqm in juta
    const estimatedMin = Math.round(area * baseRate);
    const estimatedMax = Math.round(area * (baseRate * 1.3));

    return (
        <>
            {/* The Blueprint (Process) */}
            <section id="blueprint" className="pt-12 pb-4 md:pt-24 md:py-24 bg-canvas dark:bg-slate-900 overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                        <span className="text-gold text-sm font-bold uppercase tracking-widest mb-2 block">Our Methodology</span>
                        <h2 className="font-display text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white">The Blueprint</h2>
                        <TypingText
                            className="mt-4 text-slate-600 dark:text-slate-400 min-h-[24px]"
                            text="Explore the process of crafting your vision into reality."
                        />
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

                    {/* Mobile Process List - Interactive */}
                    <div className="md:hidden">
                        <div className="relative flex justify-between items-center mb-6 px-4">
                            {/* Connector Line */}
                            <div className="absolute left-0 right-0 h-[2px] bg-slate-200 dark:bg-slate-700 top-1/2 -translate-y-1/2 z-0 mx-8"></div>

                            {[1, 2, 3, 4].map((step) => (
                                <div key={step} className="relative z-10" onClick={() => handleStepClick(step)}>
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold border-4 transition-all duration-300 cursor-pointer shadow-md ${activeStep === step
                                        ? 'bg-gold text-slate-900 border-white scale-110'
                                        : 'bg-white text-slate-900 border-slate-200 dark:bg-slate-800 dark:text-white dark:border-slate-700'
                                        }`}>
                                        {step}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Active Step Content */}
                        <div ref={contentRef} className="relative w-full text-center overflow-visible" style={{ height: 0 }}>
                            {[1, 2, 3, 4].map((step, index) => {
                                const titles = ["Consultation", "Design", "Build", "Handover"];
                                const descs = [
                                    "We listen to your vision, assess the site, and define the project scope.",
                                    "Architectural drafting, 3D visualization, and material selection.",
                                    "Execution by master craftsmen with weekly progress reports.",
                                    "Final inspection, key handover, and post-construction support."
                                ];
                                return (
                                    <div
                                        key={step}
                                        className={`absolute inset-x-0 top-0 transition-all duration-500 ease-in-out px-4 pb-4 ${activeStep === step
                                            ? 'opacity-100 translate-y-0 pointer-events-auto'
                                            : 'opacity-0 -translate-y-4 pointer-events-none'
                                            }`}
                                    >
                                        <h4 className="font-display text-2xl font-medium text-slate-900 dark:text-white mb-3">{titles[index]}</h4>
                                        <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">{descs[index]}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Calculator */}
            <section className="relative z-10 px-6 lg:px-8 pb-24 bg-canvas dark:bg-slate-900 pt-0 md:pt-12">
                <div className="mx-auto max-w-lg rounded-xl bg-surface p-6 shadow-elevated ring-1 ring-slate-900/5 dark:bg-slate-800 dark:ring-white/10 mb-20 border border-slate-100 dark:border-slate-800">
                    <div className="mb-8">
                        <div className="flex justify-between items-end mb-4">
                            <label className="text-xs font-bold tracking-wider uppercase text-slate-500 dark:text-slate-400">Area Size</label>
                            <span className="font-display text-2xl font-bold text-slate-900 dark:text-white">{area} m²</span>
                        </div>
                        <div className="relative h-6 w-full flex items-center">
                            <div className="absolute w-full h-2 bg-slate-200 rounded-full dark:bg-slate-700"></div>
                            <div className="absolute h-2 bg-primary rounded-full transition-all duration-150" style={{ width: `${((area - 50) / 450) * 100}%` }}></div>
                            <input
                                className="absolute w-full h-6 opacity-0 cursor-pointer z-10"
                                id="area-slider"
                                max="500"
                                min="50"
                                type="range"
                                value={area}
                                onChange={(e) => setArea(parseInt(e.target.value))}
                            />
                            <div className="absolute h-6 w-6 rounded-full bg-slate-900 border-2 border-primary shadow-md pointer-events-none transition-all duration-150" style={{ left: `${((area - 50) / 450) * 100}%`, transform: 'translateX(-50%)', marginTop: '-1px' }}></div>
                        </div>
                        <div className="flex justify-between mt-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                            <span>50 m²</span>
                            <span>500 m²</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 mb-8">
                        <div>
                            <label className="block text-xs font-bold tracking-wider uppercase text-slate-500 dark:text-slate-400 mb-2" id="project-type-label">Project Type</label>
                            <div className="relative" ref={projectTypeRef}>
                                <div
                                    className={`w-full bg-slate-50 dark:bg-slate-800 border ${isProjectTypeOpen ? 'border-primary ring-1 ring-primary' : 'border-slate-200 dark:border-slate-700'} text-slate-900 dark:text-white py-3 px-4 rounded text-sm cursor-pointer flex justify-between items-center transition-all`}
                                    onClick={() => setIsProjectTypeOpen(!isProjectTypeOpen)}
                                    aria-labelledby="project-type-label"
                                    role="button"
                                    tabIndex={0}
                                >
                                    <span>{projectType}</span>
                                    <span className={`material-symbols-outlined text-sm text-slate-500 transition-transform duration-300 ${isProjectTypeOpen ? 'rotate-180' : ''}`}>expand_more</span>
                                </div>
                                <div
                                    className={`absolute z-50 w-full mt-2 grid transition-all duration-300 ease-in-out origin-top ${isProjectTypeOpen ? 'grid-rows-[1fr] opacity-100 scale-y-100' : 'grid-rows-[0fr] opacity-0 scale-y-95 pointer-events-none'}`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded shadow-lg">
                                            {projectTypes.map((type) => (
                                                <div
                                                    key={type}
                                                    className={`py-3 px-4 text-sm cursor-pointer transition-colors ${projectType === type ? 'bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white font-medium' : 'text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700/50'}`}
                                                    onClick={() => {
                                                        setProjectType(type);
                                                        setIsProjectTypeOpen(false);
                                                    }}
                                                >
                                                    {type}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold tracking-wider uppercase text-slate-500 dark:text-slate-400 mb-2" id="finish-grade-label">Finish Grade</label>
                            <div className="relative" ref={finishGradeRef}>
                                <div
                                    className={`w-full bg-slate-50 dark:bg-slate-800 border ${isFinishGradeOpen ? 'border-primary ring-1 ring-primary' : 'border-slate-200 dark:border-slate-700'} text-slate-900 dark:text-white py-3 px-4 rounded text-sm cursor-pointer flex justify-between items-center transition-all`}
                                    onClick={() => setIsFinishGradeOpen(!isFinishGradeOpen)}
                                    aria-labelledby="finish-grade-label"
                                    role="button"
                                    tabIndex={0}
                                >
                                    <span>{finishGrade}</span>
                                    <span className={`material-symbols-outlined text-sm text-slate-500 transition-transform duration-300 ${isFinishGradeOpen ? 'rotate-180' : ''}`}>expand_more</span>
                                </div>
                                <div
                                    className={`absolute z-50 w-full mt-2 grid transition-all duration-300 ease-in-out origin-top ${isFinishGradeOpen ? 'grid-rows-[1fr] opacity-100 scale-y-100' : 'grid-rows-[0fr] opacity-0 scale-y-95 pointer-events-none'}`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded shadow-lg">
                                            {finishGrades.map((grade) => (
                                                <div
                                                    key={grade}
                                                    className={`py-3 px-4 text-sm cursor-pointer transition-colors ${finishGrade === grade ? 'bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white font-medium' : 'text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700/50'}`}
                                                    onClick={() => {
                                                        setFinishGrade(grade);
                                                        setIsFinishGradeOpen(false);
                                                    }}
                                                >
                                                    {grade}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-6 text-center border border-slate-100 dark:border-slate-700">
                        <p className="text-xs font-bold tracking-wider uppercase text-slate-500 dark:text-slate-400 mb-3">Estimated Project Investment</p>
                        <div className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-2">
                            IDR {estimatedMin} <span className="text-lg font-normal text-slate-500">jt</span> - {estimatedMax} <span className="text-lg font-normal text-slate-500">jt</span>
                        </div>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 italic mb-6">
                            *Estimate only. Subject to detailed site survey and material selection.
                        </p>
                        <button className="w-full bg-primary text-slate-900 font-bold py-3 px-4 rounded shadow-sm hover:bg-[#d9ac1b] transition-colors uppercase text-sm tracking-wide">
                            Save Estimate
                        </button>
                    </div>
                </div>

                {/* Pricing Tiers below */}
                <div className="mx-auto max-w-7xl pt-12">
                    <div className="text-center mb-16">
                        <h3 className="font-display text-3xl font-semibold text-slate-900 dark:text-white">Service Packages</h3>
                        <TypingText
                            className="mt-4 text-slate-600 dark:text-slate-400 min-h-[24px]"
                            text="Choose the level of engagement that suits your project needs."
                        />
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
