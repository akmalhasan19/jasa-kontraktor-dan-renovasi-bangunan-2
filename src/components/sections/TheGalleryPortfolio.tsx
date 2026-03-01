import Link from 'next/link';

export function TheGalleryPortfolio() {
    return (
        <section id="gallery" className="pt-8 pb-12 md:pt-24 md:pb-24 bg-surface dark:bg-background-dark scroll-mt-24">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12">
                    <div className="animate-fade-in-up max-w-2xl mb-6 md:mb-0">
                        <h2 className="font-display text-4xl md:text-5xl font-medium mb-3 text-slate-900 dark:text-white">
                            Selected Works
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed max-w-sm md:max-w-xl">
                            A curated selection of our finest architectural and interior masterpieces. Explore the intersection of precision and artistry.
                        </p>
                    </div>
                    <Link className="hidden md:inline-flex px-6 py-3 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded font-bold text-sm tracking-wide hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-colors whitespace-nowrap" href="#">
                        View Full Portfolio
                    </Link>
                </div>

                {/* Filters */}
                <div className="mb-8 -mx-6 px-6 md:mx-0 md:px-0 overflow-x-auto no-scrollbar flex space-x-6 md:space-x-8 pb-2">
                    <button className="flex-shrink-0 relative group">
                        <span className="text-slate-900 dark:text-white font-medium text-sm">All Projects</span>
                        <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                        <span className="ml-1 text-xs text-primary font-bold align-top">24</span>
                    </button>
                    <button className="flex-shrink-0 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-medium whitespace-nowrap">
                        Residential <span className="text-xs opacity-50 ml-0.5">12</span>
                    </button>
                    <button className="flex-shrink-0 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-medium whitespace-nowrap">
                        Commercial <span className="text-xs opacity-50 ml-0.5">05</span>
                    </button>
                    <button className="flex-shrink-0 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-medium whitespace-nowrap">
                        Industrial <span className="text-xs opacity-50 ml-0.5">03</span>
                    </button>
                    <button className="flex-shrink-0 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-medium whitespace-nowrap">
                        Interior <span className="text-xs opacity-50 ml-0.5">04</span>
                    </button>
                </div>

                {/* Masonry-like Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(100px,_auto)]">
                    {/* Project 1 */}
                    <div className="col-span-2 lg:col-span-2 relative group rounded-xl overflow-hidden shadow-sm aspect-[4/3] lg:aspect-[16/9] cursor-pointer">
                        <img alt="Modern concrete villa with pool" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmeERG5avMMlziUG-iIbnIT9-AP4HYRqnJuDR9VkbvdxQ3Kr3d6yHbk8LwXd5q2Oi0WwLgRbmjuMuhcUZayI2sD6BWbQg4FLOb6KGpjZKMqkmIPFwUThoO4jkdi5Go8s6JzYGg9G8KyTOpl4wZN-Ljig_lA4HT5tuYGHNRAolLckNac3nLbGJkAMLx9mjamStz44PjuW0uqFW5l188wC8MztqJqk6Qa2Kt0yiKyE7de0w0nD4zmlmVMzv_oyn6c_K0yd5BzIzo2CU" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 p-5 md:p-8">
                            <p className="text-primary text-xs font-bold tracking-wider uppercase mb-1 drop-shadow-md">Residential</p>
                            <h3 className="text-white font-display text-xl md:text-3xl drop-shadow-lg">The Azure Villa</h3>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="col-span-1 lg:col-span-1 relative group rounded-xl overflow-hidden shadow-sm aspect-[3/4] lg:aspect-auto lg:h-full cursor-pointer">
                        <img alt="Minimalist interior living room" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXcQQuVutxJ8cxQzRp2qfaMP4ULIAVojq2hJzWYfX95fKUg9_HgN45ROVJZom5G6Ts66-KxQQ0rsstv5FtPwo8lEOKx2FStGe7JUI1n3S_JgJTgYPNz-iR7QH0YPMwexuIzqCwlJtu827_bvgYSqdyFP-BBprNvEvGlf7nqjlzivuUx-G8Nx9SKbeP50wLxjO9AQJZp-Vwwha5LEoRE6o75L8Ln6gUwhdT7LDZM-l0KjCmNbFLnMS-vk9H1BWQY-Mt0aZ_b8ltM38" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 p-4">
                            <h3 className="text-white font-display text-base md:text-xl drop-shadow-lg">Serenity Heights</h3>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="col-span-1 lg:col-span-1 relative group rounded-xl overflow-hidden shadow-sm aspect-[3/4] lg:aspect-auto lg:h-full cursor-pointer">
                        <img alt="Modern exterior facade" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUkmpto_GnPyG3lgF-NGdExtb2jEuV71GKnl6bOZuk3gKe9YgUHL9z7NvCRvOj0XbUPykGUkbq64YmA0KN71NUo43h6lpfhjv0EGb_1md83z2IHUgzAwqKd02Ptqtr3XCukBviLL_7w9cBVad11O9PuURFRoQRVMzE-eP_KUcKKjzqJKb-K8Y2QRrFvyyxAThuTgyZ1_fJBf1EbjpZBH_TqFkLpOmBxeysMZIHGryH5s5j0yvbwbq8KLOH0GCpzsdQEmE6-NSIPdA" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 p-4">
                            <h3 className="text-white font-display text-base md:text-xl drop-shadow-lg">Urban Cube</h3>
                        </div>
                    </div>

                    {/* Promotional Banner */}
                    <div className="col-span-2 lg:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-6 relative overflow-hidden my-2 md:my-0 flex flex-col justify-center shadow-sm">
                        <span className="material-symbols-outlined absolute right-[-20px] top-[-20px] text-[150px] text-white/5 pointer-events-none">architecture</span>
                        <div className="relative z-10 flex flex-col items-start">
                            <h3 className="text-white font-display text-xl md:text-3xl mb-2">Start Your Legacy</h3>
                            <p className="text-slate-300 text-sm md:text-base mb-6 max-w-[80%]">Ready to build something extraordinary? Let&apos;s discuss your vision.</p>
                            <Link href="#contact" className="flex items-center gap-2 text-primary hover:text-white transition-colors text-sm font-bold uppercase tracking-wide">
                                Get a Quote <span className="material-symbols-outlined text-base">arrow_forward</span>
                            </Link>
                        </div>
                    </div>

                    {/* Project 4 */}
                    <div className="col-span-1 lg:col-span-1 relative group rounded-xl overflow-hidden shadow-sm aspect-square lg:aspect-auto lg:h-full cursor-pointer">
                        <img alt="Luxury bathroom interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFh7LKOeTBHMnHDHTj4eQHdVnKNiRubTIY3eyajjlfMDkMkxU8xWn2Ikd5wvU_2QBR_w0spsDl0B2s4k8H70l1uYgkz0g1zco94x8xcFaYiGke1bUNBB3pIe5KyR8F_xYEXC-dFmqjnf4FgFNjSt6vPwwaD1HEuVs0Lu1s-AW_Nd7mn7KI1aFXxQSsfTV2iMZN1Bxsni1vJ-X_mw8GD3Pl8INo0x-9kCBmjc-NPlL085617GiNe_BHPinJClDPjNdISYJt5t3gwdc" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 p-4">
                            <h3 className="text-white font-display text-sm md:text-xl drop-shadow-lg">Oasis Spa</h3>
                        </div>
                    </div>

                    {/* Project 5 */}
                    <div className="col-span-1 lg:col-span-1 relative group rounded-xl overflow-hidden shadow-sm aspect-square lg:aspect-auto lg:h-full cursor-pointer">
                        <img alt="Corporate office interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATWJRomU3FKnd7BpBjV4C81LodLlly3qLuow2gYIkWiHAEucyTet7UqAMJN4fQf0wjyIOO7RyjRl0ukdkDAxeJkQPT2Jq4zHmzpp1nt767gV4D13fxvhchsSyy_4LvmifQoze-P7aTcqWM66C4PmW07kCrLapIc_BeHmwJ3-fdBLhMptoLnJVYGr1O07bpHaRKuOfgmZ7kjYbdbldyk3UerAnE0RQldW3KyE4-q0gw9YN49YNcnGMalDirAIqr_K5Tkmt6grmlqfc" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 p-4">
                            <h3 className="text-white font-display text-sm md:text-xl drop-shadow-lg">Apex HQ</h3>
                        </div>
                    </div>

                    {/* Project 6 */}
                    <div className="col-span-2 lg:col-span-2 xl:col-span-4 relative group rounded-xl overflow-hidden shadow-sm aspect-[16/9] lg:aspect-[21/9] cursor-pointer">
                        <img alt="Modern bedroom interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVEVAWr-mkKyuxuiYNbl4jMlHCEQwdT6BrtEbLwxF0nvGG0gI1Hxt1O-Jwgd1pPiAPgP79gzoBap-wRnRygKSkOXkA7nAwv2JBbFAhQCKV45Ke5wdpayiQFOimljtIwAfWek3DIgpPmiWGHK5FwsCFNhKp42fbCya9e0Emaat2upqFFpn4omfmlIJ9N_usGHHssxsCqxiSxoZ2IxfgkUWHEu6_UqH2mWiD_AE1ftGXiSl7ZrDj9Sht0Eht0RpWLbDlmKKhcUI-6hE" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 p-5 md:p-8">
                            <p className="text-primary text-xs font-bold tracking-wider uppercase mb-1 drop-shadow-md">Interior</p>
                            <h3 className="text-white font-display text-xl md:text-3xl drop-shadow-lg">The Penthouse Suite</h3>
                        </div>
                    </div>
                </div>

                {/* Load More Button */}
                <div className="mt-10 md:mt-16 text-center">
                    <button className="px-8 py-3 md:py-4 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-full text-sm font-bold tracking-wide uppercase hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors w-full md:w-auto">
                        Load More Projects
                    </button>
                </div>
            </div>
        </section>
    );
}
