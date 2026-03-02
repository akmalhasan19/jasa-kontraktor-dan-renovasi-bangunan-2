"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";

// Metadata cannot be exported from a Client Component.
// If SEO is needed here, we'd extract it to a `layout.tsx` or a server component wrapper.

export default function BookPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        date: "October 11, 2023", // Default picked date
        time: "11:30" // Default picked time
    });

    const successRef = useRef<HTMLDivElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name.trim()) {
            // Simple validation fallback
            setFormData(prev => ({ ...prev, name: "Valued Client" }));
        }
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 1200);
    };

    useEffect(() => {
        if (isSubmitted && successRef.current) {
            const yOffset = 210; // Adjustment offset (negative moves it up, meaning less scrolling down)
            const element = successRef.current;
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

            window.scrollTo({ top: y, behavior: 'smooth' });

            const tl = gsap.timeline();

            // Initial flash/expand of the circle
            tl.fromTo(".success-circle",
                { scale: 0, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.5)" }
            )
                // Draw the checkmark
                .fromTo(".success-check",
                    { attr: { "stroke-dashoffset": 1 }, opacity: 0 },
                    { attr: { "stroke-dashoffset": 0 }, opacity: 1, duration: 0.5, ease: "power2.inOut" },
                    "-=0.2"
                )
                // Fade up the text content
                .fromTo(".success-content",
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" },
                    "-=0.1"
                );
        }
    }, [isSubmitted]);

    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
        .calendar-grid {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 4px;
        }
        .calendar-day {
            display: flex; height: 2.25rem; width: 2.25rem; align-items: center; justify-content: center; border-radius: 0.125rem; font-size: 0.875rem; color: #475569; cursor: pointer; transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 200ms;
        }
        .calendar-day:hover {
            background-color: #f8fafc;
        }
        .calendar-day.selected {
            background-color: #0f172a; color: #D4AF37; font-weight: 700; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
        }
        .day-radio:checked + .calendar-day {
            background-color: #0f172a; color: #D4AF37; font-weight: 700; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
        }
        .calendar-day.disabled {
            color: #cbd5e1; pointer-events: none; opacity: 0.6;
        }
        .time-radio:checked + label {
            background-color: #0f172a; color: #D4AF37; border-color: #0f172a; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
        }
        .time-radio + label:hover {
            border-color: #0f172a; color: #0f172a;
        }
        .form-input {
            appearance: none; background-color: #fff; border-color: #e2e8f0; border-width: 1px; border-radius: 0.25rem; padding-top: 0.625rem; padding-right: 0.75rem; padding-bottom: 0.625rem; padding-left: 0.75rem; font-size: 0.875rem; line-height: 1.25rem;
        }
        .form-input:focus {
            outline: 2px solid transparent; outline-offset: 2px; border-color: #0f172a; box-shadow: 0 0 0 0 #fff, 0 0 0 0 #0f172a, 0 0 #0000;
        }
        .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #cbd5e1;
            border-radius: 10px;
        }
      `
            }} />
            <div className="flex-grow flex items-center justify-center pt-28 md:pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-[#F8F9FA] text-slate-900 font-body antialiased min-h-[calc(100vh-80px)]">
                <div className="relative w-full max-w-6xl overflow-hidden rounded-lg bg-white shadow-[0_20px_40px_-12px_rgba(30,41,59,0.08)] ring-1 ring-slate-900/5 flex flex-col lg:flex-row min-h-[700px]">
                    <div className="relative w-full lg:w-[40%] bg-slate-900 text-white p-12 flex flex-col justify-between overflow-hidden group">
                        <div className="absolute inset-0 z-0">
                            <img alt="Minimalist Architectural Interior" className="h-full w-full object-cover opacity-40 mix-blend-overlay transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM3zxJCMpHP1ETJyYbngmq3YlSPifevAa4XRErPNahuUwRhIN1cYUEEs-ybgsyU8Okdy_nceobHsdr3fCurdo-P5L68_5gnbraDRnxbDTIeRKBWw-TNYkkZzf7weKLc-KiplkuCq-5Wgk_KDhyqxJ__G62zoh1P87ajmbCSNSYnlm_5DVmJswoBG-XfT5yP0yKd5FfD38aOHfpfsvcQjB5hTrqm-Gi3onw0YhwM9sQE539tHWTdc94C2nb9R1yVal_ULZihIgr1R0x" />
                            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-900/90"></div>
                        </div>

                        <div className="relative z-10">
                            <div className="mb-2 inline-flex items-center gap-2 text-gold">
                                <span className="material-symbols-outlined text-sm">diamond</span>
                                <span className="text-[11px] uppercase tracking-[0.2em] font-bold">Priority Access</span>
                            </div>
                            <h2 className="font-display text-4xl lg:text-5xl font-medium leading-tight mb-6">
                                Your Vision,<br />Engineered.
                            </h2>
                            <p className="text-slate-300 font-light text-lg leading-relaxed max-w-sm">
                                Begin your journey with a dedicated architectural consultation. We translate abstract ideas into concrete plans.
                            </p>
                        </div>

                        <div className="relative z-10 mt-12 space-y-8">
                            <div className="space-y-6">
                                <div className="flex gap-4 items-start group/item">
                                    <div className="h-8 w-8 rounded-full border border-gold/30 flex items-center justify-center text-gold mt-1 group-hover/item:border-gold group-hover/item:bg-gold/10 transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">schedule</span>
                                    </div>
                                    <div>
                                        <h4 className="font-display text-lg text-white mb-1">30-Min Discovery</h4>
                                        <p className="text-sm text-slate-400 font-light leading-relaxed">A focused session to outline your project scope, timeline, and aesthetic preferences.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start group/item">
                                    <div className="h-8 w-8 rounded-full border border-gold/30 flex items-center justify-center text-gold mt-1 group-hover/item:border-gold group-hover/item:bg-gold/10 transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">architecture</span>
                                    </div>
                                    <div>
                                        <h4 className="font-display text-lg text-white mb-1">Preliminary Analysis</h4>
                                        <p className="text-sm text-slate-400 font-light leading-relaxed">Initial site assessment review (if applicable) and regulatory constraint check.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start group/item">
                                    <div className="h-8 w-8 rounded-full border border-gold/30 flex items-center justify-center text-gold mt-1 group-hover/item:border-gold group-hover/item:bg-gold/10 transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">attach_money</span>
                                    </div>
                                    <div>
                                        <h4 className="font-display text-lg text-white mb-1">Budget Alignment</h4>
                                        <p className="text-sm text-slate-400 font-light leading-relaxed">Transparent discussion on investment tiers and realistic cost expectations.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
                            <p className="text-xs text-slate-500 uppercase tracking-widest font-medium">Concierge Support</p>
                            <p className="text-white mt-1 font-display italic text-lg">+62 812 3456 7890</p>
                        </div>
                    </div>

                    <div className="w-full lg:w-[60%] bg-white flex flex-col">
                        <div className="p-8 lg:p-12 h-full overflow-y-auto custom-scrollbar">
                            <div className="mb-8 flex items-center justify-between">
                                <div>
                                    <h3 className="font-display text-2xl font-semibold text-slate-900">Book Consultation</h3>
                                    <p className="text-slate-500 text-sm mt-1">Select a time that works for you.</p>
                                </div>
                                <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-slate-400 uppercase tracking-wider">
                                    <span className="w-2 h-2 rounded-full bg-slate-900"></span> Available
                                    <span className="w-2 h-2 rounded-full bg-slate-200 ml-2"></span> Booked
                                </div>
                            </div>

                            <div className="bg-[#F8F9FA] p-6 rounded border border-slate-200 mb-8">
                                <div className="flex items-center justify-between mb-6">
                                    <button className="p-1 hover:bg-white rounded-full transition-colors text-slate-500 hover:text-slate-900">
                                        <span className="material-symbols-outlined">chevron_left</span>
                                    </button>
                                    <span className="font-display text-lg font-bold text-slate-900">October 2023</span>
                                    <button className="p-1 hover:bg-white rounded-full transition-colors text-slate-500 hover:text-slate-900">
                                        <span className="material-symbols-outlined">chevron_right</span>
                                    </button>
                                </div>
                                <div className="mb-2 grid grid-cols-7 text-center">
                                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Su</span>
                                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Mo</span>
                                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Tu</span>
                                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">We</span>
                                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Th</span>
                                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Fr</span>
                                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Sa</span>
                                </div>
                                <div className="calendar-grid font-medium text-slate-700">
                                    <span className="calendar-day disabled"></span><span className="calendar-day disabled"></span>
                                    <span className="calendar-day disabled">1</span>
                                    <div className="relative">
                                        <input className="peer sr-only day-radio" id="date-2" name="consultation-date" type="radio" />
                                        <label className="calendar-day" htmlFor="date-2">2</label>
                                    </div>
                                    <div className="relative">
                                        <input className="peer sr-only day-radio" id="date-3" name="consultation-date" type="radio" />
                                        <label className="calendar-day" htmlFor="date-3">3</label>
                                    </div>
                                    <div className="relative">
                                        <input className="peer sr-only day-radio" id="date-4" name="consultation-date" type="radio" />
                                        <label className="calendar-day" htmlFor="date-4">4</label>
                                    </div>
                                    <div className="relative">
                                        <input className="peer sr-only day-radio" id="date-5" name="consultation-date" type="radio" />
                                        <label className="calendar-day" htmlFor="date-5">5</label>
                                    </div>
                                    <span className="calendar-day disabled bg-slate-100/50">6</span>
                                    <span className="calendar-day disabled bg-slate-100/50">7</span>
                                    <div className="relative">
                                        <input className="peer sr-only day-radio" id="date-8" name="consultation-date" type="radio" />
                                        <label className="calendar-day" htmlFor="date-8">8</label>
                                    </div>
                                    <div className="relative">
                                        <input className="peer sr-only day-radio" id="date-9" name="consultation-date" type="radio" />
                                        <label className="calendar-day" htmlFor="date-9">9</label>
                                    </div>
                                    <div className="relative">
                                        <input className="peer sr-only day-radio" id="date-10" name="consultation-date" type="radio" />
                                        <label className="calendar-day" htmlFor="date-10">10</label>
                                    </div>
                                    <div className="relative">
                                        <input className="peer sr-only day-radio" defaultChecked id="date-11" name="consultation-date" type="radio" />
                                        <label className="calendar-day" htmlFor="date-11">11</label>
                                    </div>
                                    <div className="relative">
                                        <input className="peer sr-only day-radio" id="date-12" name="consultation-date" type="radio" />
                                        <label className="calendar-day" htmlFor="date-12">12</label>
                                    </div>
                                    <div className="relative">
                                        <input className="peer sr-only day-radio" id="date-13" name="consultation-date" type="radio" />
                                        <label className="calendar-day" htmlFor="date-13">13</label>
                                    </div>
                                    <span className="calendar-day disabled bg-slate-100/50">14</span>
                                    <span className="calendar-day disabled bg-slate-100/50">15</span>
                                    <div className="relative">
                                        <input className="peer sr-only day-radio" id="date-16" name="consultation-date" type="radio" />
                                        <label className="calendar-day" htmlFor="date-16">16</label>
                                    </div>
                                    <div className="relative">
                                        <input className="peer sr-only day-radio" id="date-17" name="consultation-date" type="radio" />
                                        <label className="calendar-day" htmlFor="date-17">17</label>
                                    </div>
                                    <div className="relative">
                                        <input className="peer sr-only day-radio" id="date-18" name="consultation-date" type="radio" />
                                        <label className="calendar-day" htmlFor="date-18">18</label>
                                    </div>
                                    <div className="relative">
                                        <input className="peer sr-only day-radio" id="date-19" name="consultation-date" type="radio" />
                                        <label className="calendar-day" htmlFor="date-19">19</label>
                                    </div>
                                    <div className="relative">
                                        <input className="peer sr-only day-radio" id="date-20" name="consultation-date" type="radio" />
                                        <label className="calendar-day" htmlFor="date-20">20</label>
                                    </div>
                                    <span className="calendar-day disabled bg-slate-100/50">21</span>
                                    <span className="calendar-day disabled bg-slate-100/50">22</span>
                                    <div className="relative">
                                        <input className="peer sr-only day-radio" id="date-23" name="consultation-date" type="radio" />
                                        <label className="calendar-day" htmlFor="date-23">23</label>
                                    </div>
                                    <div className="relative">
                                        <input className="peer sr-only day-radio" id="date-24" name="consultation-date" type="radio" />
                                        <label className="calendar-day" htmlFor="date-24">24</label>
                                    </div>
                                    <div className="relative">
                                        <input className="peer sr-only day-radio" id="date-25" name="consultation-date" type="radio" />
                                        <label className="calendar-day" htmlFor="date-25">25</label>
                                    </div>
                                    <div className="relative">
                                        <input className="peer sr-only day-radio" id="date-26" name="consultation-date" type="radio" />
                                        <label className="calendar-day" htmlFor="date-26">26</label>
                                    </div>
                                    <div className="relative">
                                        <input className="peer sr-only day-radio" id="date-27" name="consultation-date" type="radio" />
                                        <label className="calendar-day" htmlFor="date-27">27</label>
                                    </div>
                                    <span className="calendar-day disabled bg-slate-100/50">28</span>
                                    <span className="calendar-day disabled bg-slate-100/50">29</span>
                                    <div className="relative">
                                        <input className="peer sr-only day-radio" id="date-30" name="consultation-date" type="radio" />
                                        <label className="calendar-day" htmlFor="date-30">30</label>
                                    </div>
                                    <div className="relative">
                                        <input className="peer sr-only day-radio" id="date-31" name="consultation-date" type="radio" />
                                        <label className="calendar-day" htmlFor="date-31">31</label>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Available Time Slots</label>
                                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                                    <div className="relative">
                                        <input className="peer sr-only time-radio" id="t1" name="time" type="radio" />
                                        <label className="flex items-center justify-center px-3 py-2 text-sm font-medium border border-slate-200 rounded-md cursor-pointer text-slate-600 bg-white transition-all" htmlFor="t1">09:00</label>
                                    </div>
                                    <div className="relative">
                                        <input className="peer sr-only time-radio" id="t2" name="time" type="radio" />
                                        <label className="flex items-center justify-center px-3 py-2 text-sm font-medium border border-slate-200 rounded-md cursor-pointer text-slate-600 bg-white transition-all" htmlFor="t2">10:00</label>
                                    </div>
                                    <div className="relative">
                                        <input defaultChecked className="peer sr-only time-radio" id="t3" name="time" type="radio" />
                                        <label className="flex items-center justify-center px-3 py-2 text-sm font-medium border border-slate-200 rounded-md cursor-pointer text-slate-600 bg-white transition-all" htmlFor="t3">11:30</label>
                                    </div>
                                    <div className="relative">
                                        <input className="peer sr-only time-radio" disabled id="t4" name="time" type="radio" />
                                        <label className="flex items-center justify-center px-3 py-2 text-sm font-medium border border-slate-100 bg-slate-50 rounded-md cursor-not-allowed text-slate-300 opacity-60 line-through decoration-slate-300" htmlFor="t4">13:00</label>
                                    </div>
                                    <div className="relative">
                                        <input className="peer sr-only time-radio" id="t5" name="time" type="radio" />
                                        <label className="flex items-center justify-center px-3 py-2 text-sm font-medium border border-slate-200 rounded-md cursor-pointer text-slate-600 bg-white transition-all" htmlFor="t5">14:30</label>
                                    </div>
                                    <div className="relative">
                                        <input className="peer sr-only time-radio" id="t6" name="time" type="radio" />
                                        <label className="flex items-center justify-center px-3 py-2 text-sm font-medium border border-slate-200 rounded-md cursor-pointer text-slate-600 bg-white transition-all" htmlFor="t6">16:00</label>
                                    </div>
                                </div>
                            </div>

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2" htmlFor="name">Full Name</label>
                                        <input
                                            className="form-input block w-full rounded border-slate-200 bg-white py-2.5 px-3 text-slate-900 placeholder:text-slate-300 focus:border-slate-900 focus:ring-0 sm:text-sm transition-colors"
                                            id="name"
                                            placeholder="e.g. Alexander Hamilton"
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2" htmlFor="whatsapp">WhatsApp Number</label>
                                        <input className="form-input block w-full rounded border-slate-200 bg-white py-2.5 px-3 text-slate-900 placeholder:text-slate-300 focus:border-slate-900 focus:ring-0 sm:text-sm transition-colors" id="whatsapp" placeholder="+62 812..." type="text" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2" htmlFor="location">Project Location</label>
                                    <input className="form-input block w-full rounded border-slate-200 bg-white py-2.5 px-3 text-slate-900 placeholder:text-slate-300 focus:border-slate-900 focus:ring-0 sm:text-sm transition-colors" id="location" placeholder="e.g. Menteng, Jakarta Pusat" type="text" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2" htmlFor="brief">Project Brief</label>
                                    <textarea className="form-input block w-full rounded border-slate-200 bg-white py-2.5 px-3 text-slate-900 placeholder:text-slate-300 focus:border-slate-900 focus:ring-0 sm:text-sm resize-none transition-colors" id="brief" placeholder="Tell us briefly about your renovation or construction goals..." rows={3}></textarea>
                                </div>
                                <div className="pt-4">
                                    <button
                                        className="group relative w-full flex justify-center items-center py-3.5 px-4 border border-transparent text-sm font-bold uppercase tracking-widest text-slate-900 bg-gold hover:bg-[#bfa030] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 shadow-md transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Processing...
                                            </>
                                        ) : (
                                            <>
                                                Confirm Consultation
                                                <span className="material-symbols-outlined ml-2 text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                            </>
                                        )}
                                    </button>
                                    <p className="mt-4 text-center text-xs text-slate-400">
                                        By booking, you agree to our <a className="underline hover:text-slate-600" href="#">Terms of Service</a>. No payment required today.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Success UI Overlay - Replaces the right side when submitted */}
                    {isSubmitted && (
                        <div
                            ref={successRef}
                            className="absolute top-0 right-0 w-full lg:w-[60%] h-full bg-white z-20 flex flex-col items-center justify-center p-8 lg:p-12 text-center"
                        >
                            <div className="max-w-md w-full flex flex-col items-center">
                                {/* Animated Checkmark */}
                                <div className="success-circle relative flex items-center justify-center w-24 h-24 mb-8 rounded-full bg-slate-50 border-2 border-gold/30 shadow-[0_0_40px_-10px_rgba(212,175,55,0.3)]">
                                    <svg className="w-12 h-12 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path className="success-check" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" pathLength={1} strokeDasharray={1} strokeDashoffset={1} />
                                    </svg>
                                </div>

                                {/* Text Content */}
                                <div className="success-content space-y-2 mb-8">
                                    <h3 className="font-display text-3xl font-semibold text-slate-900">Consultation Confirmed</h3>
                                    <div className="w-12 h-1 bg-gold mx-auto rounded-full my-4"></div>
                                    <p className="text-slate-600 text-base leading-relaxed">
                                        Thank you, <span className="font-semibold text-slate-900">{formData.name || "Valued Client"}</span>.
                                        Your architectural consultation for <span className="font-semibold text-slate-900">{formData.date}</span> at <span className="font-semibold text-slate-900">{formData.time}</span> has been successfully scheduled.
                                    </p>
                                    <p className="text-slate-500 text-sm mt-4">
                                        Our concierge team will review your project brief and reach out via WhatsApp shortly to confirm the setup details.
                                    </p>
                                </div>

                                {/* Action Buttons */}
                                <div className="success-content w-full space-y-3 mt-4">
                                    <Link
                                        href="/"
                                        className="group relative w-full flex items-center justify-center py-3.5 px-4 rounded border border-slate-200 text-sm font-bold uppercase tracking-widest text-slate-900 bg-white hover:bg-slate-50 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-all duration-300 shadow-sm"
                                    >
                                        <span className="material-symbols-outlined mr-2 text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
                                        Return to Home
                                    </Link>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="text-xs font-semibold text-slate-400 hover:text-slate-600 uppercase tracking-wider transition-colors pt-2"
                                    >
                                        Book Another Session
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
