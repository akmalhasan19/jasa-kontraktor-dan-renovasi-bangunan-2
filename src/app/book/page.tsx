import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Concierge Booking | ArsitekPro",
    description: "Book an architectural consultation.",
};

export default function BookPage() {
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
                <div className="w-full max-w-6xl overflow-hidden rounded-lg bg-white shadow-[0_20px_40px_-12px_rgba(30,41,59,0.08)] ring-1 ring-slate-900/5 flex flex-col lg:flex-row min-h-[700px]">
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
                                    <span className="calendar-day">2</span>
                                    <span className="calendar-day">3</span>
                                    <span className="calendar-day">4</span>
                                    <span className="calendar-day">5</span>
                                    <span className="calendar-day disabled bg-slate-100/50">6</span>
                                    <span className="calendar-day disabled bg-slate-100/50">7</span>
                                    <span className="calendar-day">8</span>
                                    <span className="calendar-day">9</span>
                                    <span className="calendar-day">10</span>
                                    <span className="calendar-day selected">11</span>
                                    <span className="calendar-day">12</span>
                                    <span className="calendar-day">13</span>
                                    <span className="calendar-day disabled bg-slate-100/50">14</span>
                                    <span className="calendar-day disabled bg-slate-100/50">15</span>
                                    <span className="calendar-day">16</span>
                                    <span className="calendar-day">17</span>
                                    <span className="calendar-day">18</span>
                                    <span className="calendar-day">19</span>
                                    <span className="calendar-day">20</span>
                                    <span className="calendar-day disabled bg-slate-100/50">21</span>
                                    <span className="calendar-day disabled bg-slate-100/50">22</span>
                                    <span className="calendar-day">23</span>
                                    <span className="calendar-day">24</span>
                                    <span className="calendar-day">25</span>
                                    <span className="calendar-day">26</span>
                                    <span className="calendar-day">27</span>
                                    <span className="calendar-day disabled bg-slate-100/50">28</span>
                                    <span className="calendar-day disabled bg-slate-100/50">29</span>
                                    <span className="calendar-day">30</span>
                                    <span className="calendar-day">31</span>
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

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2" htmlFor="name">Full Name</label>
                                        <input className="form-input block w-full rounded border-slate-200 bg-white py-2.5 px-3 text-slate-900 placeholder:text-slate-300 focus:border-slate-900 focus:ring-0 sm:text-sm transition-colors" id="name" placeholder="e.g. Alexander Hamilton" type="text" />
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
                                    <button className="group relative w-full flex justify-center py-3.5 px-4 border border-transparent text-sm font-bold uppercase tracking-widest text-slate-900 bg-gold hover:bg-[#bfa030] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 shadow-md transition-all duration-300" type="button">
                                        Confirm Consultation
                                        <span className="material-symbols-outlined ml-2 text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </button>
                                    <p className="mt-4 text-center text-xs text-slate-400">
                                        By booking, you agree to our <a className="underline hover:text-slate-600" href="#">Terms of Service</a>. No payment required today.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
