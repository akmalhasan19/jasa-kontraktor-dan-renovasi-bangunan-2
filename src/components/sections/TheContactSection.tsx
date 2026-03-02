"use client";

import { useState } from "react";
import { TypingText } from "@/components/ui/TypingText";

export function TheContactSection() {
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    return (
        <section id="contact" className="w-full flex border-t border-slate-200 flex-col lg:flex-row bg-white text-slate-700 font-body antialiased relative">
            {/* Left Panel: Info & Map (40%) */}
            <div className="w-full lg:w-[40%] bg-slate-900 text-white relative flex flex-col overflow-hidden">
                {/* Decorative overlay pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                <div className="relative z-10 flex flex-col h-full p-8 lg:p-16 justify-between gap-12">
                    <div>
                        <span className="inline-block py-1 px-3 border border-gold/30 text-gold text-xs tracking-widest uppercase mb-6 rounded-full bg-gold/5">The Concierge</span>
                        <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight mb-6">
                            Let&apos;s Discuss <br /><span className="text-gold italic">Your Vision</span>
                        </h1>
                        <TypingText
                            className="text-slate-400 text-lg leading-relaxed max-w-md font-light min-h-[56px]"
                            text="Visit our studio or drop a line to start your renovation journey. We craft spaces that become legacies."
                        />
                    </div>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4 group">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-slate-900 transition-all duration-300 shrink-0">
                                <span className="material-symbols-outlined text-xl">location_on</span>
                            </div>
                            <div>
                                <p className="text-sm text-slate-400 uppercase tracking-wide mb-1">Visit Us</p>
                                <p className="font-medium text-lg">123 Architecture Blvd, Jakarta Selatan</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 group">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-slate-900 transition-all duration-300 shrink-0">
                                <span className="material-symbols-outlined text-xl">call</span>
                            </div>
                            <div>
                                <p className="text-sm text-slate-400 uppercase tracking-wide mb-1">Call Us</p>
                                <p className="font-medium text-lg">+62 812 3456 7890</p>
                                <p className="text-sm text-slate-400 mt-1">Mon-Fri: 09:00 - 18:00</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 group">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-slate-900 transition-all duration-300 shrink-0">
                                <span className="material-symbols-outlined text-xl">mail</span>
                            </div>
                            <div>
                                <p className="text-sm text-slate-400 uppercase tracking-wide mb-1">Email Us</p>
                                <p className="font-medium text-lg">hello@arsitekpro.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Map Embed */}
                    <div className="w-full h-48 lg:h-64 rounded overflow-hidden relative border border-white/10 group mt-4">
                        <iframe
                            allowFullScreen={true}
                            className="absolute inset-0 w-full h-full transition-opacity duration-500 opacity-70 group-hover:opacity-100 grayscale invert-[10%] contrast-[110%]"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.297964467142!2d106.80036667586682!3d-6.224388660961817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f14d80000001%3A0x2e69f14d80000001!2sJakarta!5e0!3m2!1sen!2sid!4v1715000000000!5m2!1sen!2sid"
                            style={{ border: 0 }}
                            title="Map location of ArsitekPro office in Jakarta"
                            width="100%"
                            height="100%"
                        ></iframe>
                        <div className="absolute inset-0 bg-slate-900/20 pointer-events-none group-hover:bg-transparent transition-colors"></div>
                    </div>

                    {/* Socials */}
                    <div className="flex gap-4 pt-4 border-t border-white/10 mt-8">
                        <a className="text-slate-400 hover:text-gold transition-colors text-sm" href="#">Instagram</a>
                        <a className="text-slate-400 hover:text-gold transition-colors text-sm" href="#">LinkedIn</a>
                        <a className="text-slate-400 hover:text-gold transition-colors text-sm" href="#">Behance</a>
                    </div>
                </div>
            </div>

            {/* Right Panel: Form (60%) */}
            <div className="w-full lg:w-[60%] bg-slate-50 flex flex-col justify-center p-8 lg:p-20 relative">
                <div className="max-w-2xl mx-auto w-full">
                    <div className="mb-10">
                        <h2 className="font-display text-3xl font-semibold text-slate-900 mb-3 block">Project Inquiry</h2>
                        <TypingText
                            className="text-slate-500 min-h-[48px]"
                            text="Tell us about your space. We'll analyze your requirements and prepare a preliminary consultation."
                        />
                    </div>

                    <form action="#" className="space-y-8" method="POST">
                        {/* Row 1 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="relative group">
                                <input className="peer w-full border-b border-slate-300 bg-transparent py-3 text-slate-900 focus:border-gold focus:outline-none placeholder-transparent transition-colors" id="name" name="name" placeholder="Full Name" required={true} type="text" />
                                <label className="absolute left-0 -top-3.5 text-xs text-slate-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-gold cursor-text pointer-events-none" htmlFor="name">
                                    Full Name
                                </label>
                            </div>
                            <div className="relative group">
                                <input className="peer w-full border-b border-slate-300 bg-transparent py-3 text-slate-900 focus:border-gold focus:outline-none placeholder-transparent transition-colors" id="email" name="email" placeholder="Email Address" required={true} type="email" />
                                <label className="absolute left-0 -top-3.5 text-xs text-slate-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-gold cursor-text pointer-events-none" htmlFor="email">
                                    Email Address
                                </label>
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="relative group">
                                <div className="absolute right-0 top-3 text-slate-400">
                                    <span className="material-symbols-outlined text-sm">chat</span>
                                </div>
                                <input className="peer w-full border-b border-slate-300 bg-transparent py-3 text-slate-900 focus:border-gold focus:outline-none placeholder-transparent transition-colors pr-8" id="whatsapp" name="whatsapp" placeholder="WhatsApp Number" required={true} type="tel" />
                                <label className="absolute left-0 -top-3.5 text-xs text-slate-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-gold cursor-text pointer-events-none" htmlFor="whatsapp">
                                    WhatsApp Number (Mandatory)
                                </label>
                            </div>

                            <div className="relative group">
                                <select className="peer w-full border-b border-slate-300 bg-transparent py-3 text-slate-900 focus:border-gold focus:outline-none transition-colors appearance-none cursor-pointer" id="project-type" name="project-type" defaultValue="">
                                    <option className="text-slate-400" disabled={true} value="">Select Type</option>
                                    <option value="renovation">Renovation &amp; Remodeling</option>
                                    <option value="new-build">New Build Construction</option>
                                    <option value="interior">Interior Fit-out</option>
                                    <option value="commercial">Commercial Space</option>
                                </select>
                                <label className="absolute left-0 -top-4 text-xs text-slate-400 pointer-events-none transition-all peer-focus:text-gold" htmlFor="project-type">
                                    Project Type
                                </label>
                                <div className="absolute right-0 top-3 text-slate-400 pointer-events-none">
                                    <span className="material-symbols-outlined text-sm">expand_more</span>
                                </div>
                            </div>
                        </div>

                        {/* Row 3 */}
                        <div className="grid grid-cols-1 gap-8">
                            <div className="space-y-3">
                                <label className="text-xs text-slate-400 block mb-2">Estimated Budget Range</label>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <label className="cursor-pointer">
                                        <input className="peer sr-only" name="budget" type="radio" value="standard" />
                                        <div className="w-full p-4 border border-slate-300 rounded text-center peer-checked:border-gold peer-checked:bg-gold/5 peer-checked:text-slate-900 transition-all hover:border-slate-400">
                                            <div className="text-sm font-semibold">Standard</div>
                                            <div className="text-xs text-slate-500 mt-1">Starting IDR 450jt</div>
                                        </div>
                                    </label>

                                    <label className="cursor-pointer">
                                        <input defaultChecked={true} className="peer sr-only" name="budget" type="radio" value="premium" />
                                        <div className="w-full p-4 border border-slate-300 rounded text-center peer-checked:border-gold peer-checked:bg-gold/5 peer-checked:text-slate-900 transition-all hover:border-slate-400 relative overflow-hidden">
                                            {/* Best Value tag */}
                                            <div className="absolute top-0 right-0 w-3 h-3 bg-gold rounded-bl"></div>
                                            <div className="text-sm font-semibold">Premium</div>
                                            <div className="text-xs text-slate-500 mt-1">IDR 800jt - 1.5M</div>
                                        </div>
                                    </label>

                                    <label className="cursor-pointer">
                                        <input className="peer sr-only" name="budget" type="radio" value="luxury" />
                                        <div className="w-full p-4 border border-slate-300 rounded text-center peer-checked:border-gold peer-checked:bg-gold/5 peer-checked:text-slate-900 transition-all hover:border-slate-400">
                                            <div className="text-sm font-semibold">Luxury</div>
                                            <div className="text-xs text-slate-500 mt-1">IDR 2M+</div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Row 4 */}
                        <div className="relative group pt-4">
                            <textarea className="peer w-full border-b border-slate-300 bg-transparent py-3 text-slate-900 focus:border-gold focus:outline-none placeholder-transparent transition-colors resize-none" id="message" name="message" placeholder="Tell us about your project..." rows={3}></textarea>
                            <label className="absolute left-0 top-0.5 text-xs text-slate-400 transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-focus:top-0.5 peer-focus:text-xs peer-focus:text-gold cursor-text pointer-events-none" htmlFor="message">
                                Message (Optional)
                            </label>
                        </div>

                        {/* Submit */}
                        <div className="pt-6">
                            <button
                                className="w-full bg-slate-900 text-white font-bold tracking-widest uppercase h-14 hover:bg-gold hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-slate-200"
                                onClick={() => setIsSuccessModalOpen(true)}
                                type="button"
                            >
                                Request Consultation
                                <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                            </button>
                            <p className="text-xs text-center text-slate-400 mt-4">By submitting, you agree to our <a className="underline hover:text-slate-600" href="#">Privacy Policy</a>. We typically reply within 2 hours.</p>
                        </div>
                    </form>
                </div>

                {/* Success Modal */}
                {isSuccessModalOpen && (
                    <div className="absolute inset-0 bg-white/95 backdrop-blur-md z-20 flex flex-col items-center justify-center p-8 transition-all duration-500 animate-in fade-in zoom-in-95" id="success-modal">
                        <div className="text-center max-w-md">
                            <div className="w-20 h-20 mx-auto bg-green-50 rounded-full flex items-center justify-center mb-6 text-green-600">
                                <span className="material-symbols-outlined text-5xl">check</span>
                            </div>
                            <h3 className="font-display text-3xl font-semibold text-slate-900 mb-4">Inquiry Received</h3>
                            <p className="text-slate-500 mb-8 leading-relaxed">Thank you for considering ArsitekPro. We have received your details and our senior architect will review them shortly.</p>

                            <a className="inline-flex items-center justify-center h-12 px-8 bg-[#25D366] text-white font-bold rounded-full hover:bg-[#128C7E] transition-colors gap-2 shadow-lg shadow-green-100" href="#">
                                <span className="material-symbols-outlined">chat</span>
                                Chat on WhatsApp Priority
                            </a>

                            <button
                                className="block w-full mt-6 text-sm text-slate-400 hover:text-slate-600 underline font-medium"
                                onClick={() => setIsSuccessModalOpen(false)}
                            >
                                Back to site
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}
