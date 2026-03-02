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

    // ── Save-Estimate Modal ──────────────────────────────────────────────
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalName, setModalName] = useState("");
    const [modalEmail, setModalEmail] = useState("");
    const [modalWhatsapp, setModalWhatsapp] = useState("");
    const [modalPdfCopy, setModalPdfCopy] = useState(false);
    const [modalConsultantCall, setModalConsultantCall] = useState(false);
    const [isModalSubmitted, setIsModalSubmitted] = useState(false);
    const modalPanelRef = useRef<HTMLDivElement>(null);
    const modalBackdropRef = useRef<HTMLDivElement>(null);

    const closeModal = () => {
        if (modalPanelRef.current && modalBackdropRef.current) {
            gsap.to(modalPanelRef.current, { scale: 0.93, opacity: 0, duration: 0.22, ease: "power2.in" });
            gsap.to(modalBackdropRef.current, {
                opacity: 0, duration: 0.25, ease: "power2.in",
                onComplete: () => {
                    setIsModalOpen(false);
                    setIsModalSubmitted(false);
                    setModalName("");
                    setModalEmail("");
                    setModalWhatsapp("");
                    setModalPdfCopy(false);
                    setModalConsultantCall(false);
                }
            });
        } else {
            setIsModalOpen(false);
            setIsModalSubmitted(false);
        }
    };
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

    // Lock body scroll while modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isModalOpen]);

    // Enter animation when modal mounts
    useEffect(() => {
        if (isModalOpen && modalPanelRef.current && modalBackdropRef.current) {
            gsap.fromTo(modalBackdropRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.3, ease: "power2.out" }
            );
            gsap.fromTo(modalPanelRef.current,
                { scale: 0.88, opacity: 0, y: 16 },
                { scale: 1, opacity: 1, y: 0, duration: 0.38, ease: "back.out(1.4)" }
            );
        }
    }, [isModalOpen]);

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
            <section id="blueprint" className="pt-12 pb-4 md:pt-24 md:py-24 bg-canvas dark:bg-slate-900 overflow-hidden scroll-mt-20">
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
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="w-full bg-primary text-slate-900 font-bold py-3 px-4 rounded shadow-sm hover:bg-[#d9ac1b] transition-colors uppercase text-sm tracking-wide"
                        >
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
            {/* ── Save-Estimate Modal ──────────────────────────────────────────── */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div
                        ref={modalBackdropRef}
                        style={{ opacity: 0 }}
                        className="fixed inset-0 bg-slate-900/45 backdrop-blur-[6px]"
                        onClick={closeModal}
                    />

                    {/* Panel — wider, two-column layout */}
                    <div
                        ref={modalPanelRef}
                        style={{ opacity: 0 }}
                        className="relative w-full max-w-[660px] overflow-hidden rounded-lg bg-white shadow-[0_25px_50px_-12px_rgba(30,41,59,0.28)] will-change-transform"
                    >
                        {/* Close */}
                        <button
                            onClick={closeModal}
                            className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 transition-colors z-10"
                            aria-label="Close"
                        >
                            <span className="material-symbols-outlined text-[20px]">close</span>
                        </button>

                        <div className="grid grid-cols-[1fr_1.15fr]">
                            {/* ── Left: title + summary ── */}
                            <div className="flex flex-col justify-center bg-slate-50 border-r border-slate-100 px-6 py-7">
                                <h2 className="font-display text-2xl font-semibold text-slate-900 mb-4 leading-snug">
                                    Preserve Your Vision
                                </h2>
                                <div className="bg-white rounded-md p-3.5 border border-slate-100 shadow-sm">
                                    <p className="text-[9px] uppercase tracking-widest text-slate-400 mb-2 font-medium">
                                        Estimate Summary
                                    </p>
                                    <div className="text-[11px] text-slate-600 font-medium mb-2.5 leading-relaxed">
                                        <span>{area}m²</span>
                                        <span className="mx-1.5 text-slate-300">·</span>
                                        <span>{projectType}</span>
                                        <span className="mx-1.5 text-slate-300">·</span>
                                        <span>{finishGrade} Grade</span>
                                    </div>
                                    <div className="font-display text-base font-bold text-slate-800">
                                        IDR {estimatedMin}jt – {estimatedMax}jt
                                    </div>
                                </div>
                                <p className="text-[10px] text-slate-400 italic mt-3 leading-relaxed">
                                    *Subject to site survey & material selection.
                                </p>
                            </div>

                            {/* ── Right: form / success ── */}
                            <div className="px-6 py-7">
                                {isModalSubmitted ? (
                                    <div className="flex flex-col items-center justify-center h-full text-center py-4">
                                        {/* Success icon */}
                                        <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-5">
                                            <span className="material-symbols-outlined text-[32px] text-[#D4AF37]">check_circle</span>
                                        </div>

                                        <h3 className="font-display text-xl font-semibold text-slate-900 mb-2">
                                            Estimate Secured!
                                        </h3>
                                        <p className="text-sm text-slate-500 leading-relaxed mb-1">
                                            Thanks, <span className="font-semibold text-slate-700">{modalName || "there"}</span>. We&apos;ve saved your estimate.
                                        </p>
                                        <p className="text-xs text-slate-400 leading-relaxed mb-6">
                                            Our team will be in touch shortly. In the meantime, feel free to reach us directly.
                                        </p>

                                        {/* WhatsApp CTA */}
                                        <a
                                            href={`https://wa.me/6281234567890?text=Halo%2C%20saya%20${encodeURIComponent(modalName)}%20ingin%20konfirmasi%20estimasi%20${area}m%C2%B2%20${encodeURIComponent(projectType)}%20(${encodeURIComponent(finishGrade)}%20Grade)%20senilai%20IDR%20${estimatedMin}jt%20%E2%80%93%20${estimatedMax}jt.`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full flex items-center justify-center gap-2 rounded bg-[#25D366] py-2.5 text-xs font-bold uppercase tracking-widest text-white hover:bg-[#1fbd59] transition-all mb-3"
                                        >
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                            </svg>
                                            Chat via WhatsApp
                                        </a>

                                        <button
                                            onClick={closeModal}
                                            className="text-xs font-medium text-slate-400 hover:text-slate-600 underline decoration-slate-300 underline-offset-4 transition-colors"
                                        >
                                            Close
                                        </button>
                                    </div>
                                ) : (
                                <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); setIsModalSubmitted(true); }}>
                                    <div>
                                        <label className="block text-[10px] font-semibold uppercase tracking-wider text-slate-500 mb-1" htmlFor="modal-name">
                                            Full Name
                                        </label>
                                        <input
                                            id="modal-name"
                                            type="text"
                                            placeholder="e.g. Eleanor Rigby"
                                            value={modalName}
                                            onChange={(e) => setModalName(e.target.value)}
                                            className="block w-full rounded border border-slate-200 bg-white py-2 px-3 text-slate-900 placeholder-slate-400 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none text-sm transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[10px] font-semibold uppercase tracking-wider text-slate-500 mb-1" htmlFor="modal-email">
                                            Email Address
                                        </label>
                                        <input
                                            id="modal-email"
                                            type="email"
                                            placeholder="name@example.com"
                                            value={modalEmail}
                                            onChange={(e) => setModalEmail(e.target.value)}
                                            className="block w-full rounded border border-slate-200 bg-white py-2 px-3 text-slate-900 placeholder-slate-400 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none text-sm transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[10px] font-semibold uppercase tracking-wider text-slate-500 mb-1" htmlFor="modal-whatsapp">
                                            WhatsApp Number
                                        </label>
                                        <input
                                            id="modal-whatsapp"
                                            type="tel"
                                            placeholder="+62"
                                            value={modalWhatsapp}
                                            onChange={(e) => setModalWhatsapp(e.target.value)}
                                            className="block w-full rounded border border-slate-200 bg-white py-2 px-3 text-slate-900 placeholder-slate-400 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none text-sm transition-colors"
                                        />
                                    </div>

                                    {/* Checkboxes */}
                                    <div className="space-y-2 pt-0.5">
                                        <label className="flex items-center gap-2.5 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={modalPdfCopy}
                                                onChange={(e) => setModalPdfCopy(e.target.checked)}
                                                className="h-3.5 w-3.5 rounded border-slate-300 text-slate-900 focus:ring-[#D4AF37] cursor-pointer"
                                            />
                                            <span className="text-xs text-slate-500">Send a PDF copy to my email</span>
                                        </label>
                                        <label className="flex items-center gap-2.5 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={modalConsultantCall}
                                                onChange={(e) => setModalConsultantCall(e.target.checked)}
                                                className="h-3.5 w-3.5 rounded border-slate-300 text-slate-900 focus:ring-[#D4AF37] cursor-pointer"
                                            />
                                            <span className="text-xs text-slate-500">I would like a consultant to call me</span>
                                        </label>
                                    </div>

                                    {/* Submit */}
                                    <div className="pt-1.5">
                                        <button
                                            type="submit"
                                            className="w-full rounded bg-slate-900 py-2.5 text-xs font-bold uppercase tracking-widest text-[#D4AF37] hover:bg-slate-800 hover:shadow-lg transition-all active:scale-[0.99]"
                                        >
                                            Secure This Estimate
                                        </button>
                                    </div>
                                    <div className="mt-3 text-center">
                                        <button
                                            onClick={closeModal}
                                            className="text-xs font-medium text-slate-400 hover:text-slate-600 underline decoration-slate-300 underline-offset-4 transition-colors"
                                        >
                                            Back to Calculator
                                        </button>
                                    </div>
                                </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
