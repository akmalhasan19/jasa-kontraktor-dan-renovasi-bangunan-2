## 1. Home (The Atelier)

<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>ArsitekPro - The Atelier</title>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&amp;family=Playfair+Display:ital,wght@0,400..900;1,400..900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script>
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "slate-900": "#1E293B", 
              "slate-800": "#334155",
              "slate-100": "#F1F5F9",
              "gold": "#D4AF37",
              "gold-light": "#EEDD82",
              "canvas": "#F8F9FA",
              "surface": "#FFFFFF",
            },
            fontFamily: {
              "display": ["Playfair Display", "serif"],
              "body": ["Manrope", "sans-serif"],
            },
            boxShadow: {
                'soft': '0 20px 40px -12px rgba(30, 41, 59, 0.08)',
                'deep': '0 25px 50px -12px rgba(30, 41, 59, 0.25)',
            },
            borderRadius: {
                DEFAULT: "4px",
                'sm': "2px",
                'md': "8px",
            }
          },
        },
      }
    </script>
<style>
        /* Custom smooth scrolling */
        html { scroll-behavior: smooth; }
        
        /* Navbar transition utilities */
        .scrolled-nav {
            background-color: white;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            padding-top: 1rem;
            padding-bottom: 1rem;
        }
        .scrolled-nav .nav-link { color: #1E293B; }
        .scrolled-nav .logo-text { color: #1E293B; }
        .scrolled-nav .menu-icon { color: #1E293B; }

        .transparent-nav {
            background-color: transparent;
            padding-top: 2rem;
            padding-bottom: 2rem;
        }
        .transparent-nav .nav-link { color: white; }
        .transparent-nav .logo-text { color: white; }
        .transparent-nav .menu-icon { color: white; }

        /* Process Stepper Connector Line */
        .connector-line {
            position: absolute;
            top: 24px;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: #E2E8F0;
            z-index: 0;
        }

        /* Hover Zoom Effect */
        .zoom-card:hover .zoom-image {
            transform: scale(1.05);
        }
    </style>
</head>
<body class="bg-canvas text-slate-800 font-body antialiased selection:bg-gold selection:text-white">
<!-- Sticky Navigation -->
<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 transparent-nav" id="navbar">
<div class="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined menu-icon text-3xl">architecture</span>
<h1 class="logo-text font-display font-bold text-2xl tracking-tight">ArsitekPro</h1>
</div>
<div class="hidden md:flex items-center gap-10">
<a class="nav-link text-sm font-medium uppercase tracking-[0.15em] hover:text-gold transition-colors" href="#">The Atelier</a>
<a class="nav-link text-sm font-medium uppercase tracking-[0.15em] hover:text-gold transition-colors" href="#">The Craft</a>
<a class="nav-link text-sm font-medium uppercase tracking-[0.15em] hover:text-gold transition-colors" href="#">The Gallery</a>
<a class="nav-link text-sm font-medium uppercase tracking-[0.15em] hover:text-gold transition-colors" href="#">The Blueprint</a>
</div>
<div class="flex items-center gap-4">
<a class="hidden md:flex nav-link text-sm font-medium uppercase tracking-[0.15em] hover:text-gold transition-colors" href="#">Concierge</a>
<button class="bg-gold hover:bg-[#c5a02e] text-slate-900 px-6 py-3 rounded font-bold text-sm tracking-wide transition-colors">
                    Book Consultation
                </button>
</div>
</div>
</nav>
<!-- Hero Section -->
<header class="relative h-screen w-full flex items-center justify-center overflow-hidden">
<!-- Background Image with Overlay -->
<div class="absolute inset-0 z-0">
<img alt="Minimalist luxury living room with concrete walls and warm lighting" class="w-full h-full object-cover" data-alt="High-end architectural interior with concrete finishes and dramatic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIc5MIFrFB8sMdQTcLl_psDtqjEl6S_eFIXXR9BLC34urMf6j8vbXiZ1an2TK7u316k4e21fwdEyE9NWJXy8TxOpyDeEoKO0VdAiLL_AD9G4VMaBESOJZL4J52SYaKnmc5Z4zoVgxPeaO8Mxs_CEeceelrPB9lYuoTUB1jllvlXB6fF2j7FLy_EzoZazKWW7vgOmlG_Pr1D7Vp1A3v8-7l1odMsrFh4ND7QepXYv5zhB7Sd5pk4bcvcvyZCjnvrSVkLExTneVKfz5g"/>
<div class="absolute inset-0 bg-black/20"></div>
</div>
<!-- Hero Content -->
<div class="relative z-10 text-center max-w-4xl px-6 animate-fade-in-up">
<h1 class="font-display font-semibold text-5xl md:text-7xl lg:text-[5rem] text-white leading-[1.1] tracking-tight mb-6">
                Crafting Legacies in <br/><span class="italic">Concrete &amp; Light</span>
</h1>
<p class="font-body text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                Premium construction and renovation services for the discerning homeowner who values precision over price.
            </p>
<div class="flex flex-col sm:flex-row items-center justify-center gap-4">
<button class="min-w-[180px] bg-slate-900 hover:bg-slate-800 text-gold border border-slate-900 px-8 py-4 rounded font-bold text-sm tracking-widest uppercase transition-all">
                    View Projects
                </button>
<button class="min-w-[180px] bg-transparent hover:bg-white/10 text-white border border-white px-8 py-4 rounded font-bold text-sm tracking-widest uppercase transition-all backdrop-blur-sm">
                    Our Services
                </button>
</div>
</div>
<!-- Scroll Indicator -->
<div class="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce">
<span class="material-symbols-outlined text-3xl">arrow_downward</span>
</div>
</header>
<!-- Trust Indicators -->
<section class="py-20 bg-canvas border-b border-slate-200">
<div class="max-w-[1440px] mx-auto px-6 md:px-12">
<div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
<!-- Stat 1 -->
<div class="flex flex-col items-center md:items-start text-center md:text-left group">
<span class="material-symbols-outlined text-4xl text-gold mb-4 group-hover:scale-110 transition-transform">apartment</span>
<h3 class="font-display text-4xl font-bold text-slate-900 mb-1">150+</h3>
<p class="text-sm text-slate-500 uppercase tracking-wider font-medium">Projects Completed</p>
</div>
<!-- Stat 2 -->
<div class="flex flex-col items-center md:items-start text-center md:text-left group">
<span class="material-symbols-outlined text-4xl text-gold mb-4 group-hover:scale-110 transition-transform">history_edu</span>
<h3 class="font-display text-4xl font-bold text-slate-900 mb-1">10</h3>
<p class="text-sm text-slate-500 uppercase tracking-wider font-medium">Years Experience</p>
</div>
<!-- Stat 3 -->
<div class="flex flex-col items-center md:items-start text-center md:text-left group">
<span class="material-symbols-outlined text-4xl text-gold mb-4 group-hover:scale-110 transition-transform">verified</span>
<h3 class="font-display text-4xl font-bold text-slate-900 mb-1">ISO 9001</h3>
<p class="text-sm text-slate-500 uppercase tracking-wider font-medium">Certified Excellence</p>
</div>
<!-- Stat 4 -->
<div class="flex flex-col items-center md:items-start text-center md:text-left group">
<span class="material-symbols-outlined text-4xl text-gold mb-4 group-hover:scale-110 transition-transform">timer_off</span>
<h3 class="font-display text-4xl font-bold text-slate-900 mb-1">0</h3>
<p class="text-sm text-slate-500 uppercase tracking-wider font-medium">Days Delay (Avg)</p>
</div>
</div>
</div>
</section>
<!-- The Craft (Services Teaser) -->
<section class="py-24 bg-surface">
<div class="max-w-[1440px] mx-auto px-6 md:px-12">
<div class="flex flex-col md:flex-row justify-between items-end mb-16">
<div>
<h2 class="font-display text-4xl md:text-5xl font-semibold text-slate-900 mb-4">The Craft</h2>
<p class="text-slate-500 max-w-md leading-relaxed">We don't just build; we curate spaces. From foundation to finish, our services are tailored for longevity and aesthetic purity.</p>
</div>
<a class="hidden md:inline-flex items-center gap-2 text-slate-900 font-bold border-b-2 border-gold pb-1 hover:text-gold transition-colors mt-6 md:mt-0" href="#">
                    Explore Services <span class="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
<!-- Card 1 -->
<div class="group cursor-pointer">
<div class="overflow-hidden rounded mb-6 aspect-[4/5] bg-slate-100">
<img alt="Modern kitchen renovation with marble island" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Sleek modern kitchen renovation" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcxwqHfaT8B0EOTY97MZvu6LeRItmG79PXT-6u6I8ItvYexETkNBNbJOQc8o1uGSb7OzXFtCXMWMX6YBqChahs5NetBNhBwFegeghgCdypGw-lEWSyl8N1af2Yg5b36G_MNEZFuJQyxL3QhvoaQRvwse_Tvl77WIvreiWiHBdSqMJO56l61jfaw0jorLMI_Vj0YUj0KDyIZ5tpYPcre_kHEcas_6inbpATr89bKx4gl-lQGxs7YgXbbYpoQeMlvyKWXZ1Tj2toSJ8A"/>
</div>
<h3 class="font-display text-2xl font-medium text-slate-900 mb-2 group-hover:text-gold transition-colors">Renovation &amp; Remodeling</h3>
<p class="text-slate-500 text-sm leading-relaxed mb-4">Transforming existing structures into modern masterpieces with structural integrity.</p>
<span class="text-xs font-bold uppercase tracking-widest text-slate-900 group-hover:text-gold transition-colors">Learn More</span>
</div>
<!-- Card 2 -->
<div class="group cursor-pointer">
<div class="overflow-hidden rounded mb-6 aspect-[4/5] bg-slate-100">
<img alt="Construction site foundation with steel framework" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Structural framework of a new build" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ5r-Vr4RZi0lJEYHv_bdFib5FLYyswYnWvtMU-_HYmiXC4CcMhyTTvFFJbNYAUncwRZO8NpM27YEtKf1KDIlr3SRon8WKWuWAtE1TP1zghkLQVusvs-_wA0mzGsx98vI0ovJOFUmyaG0ttmLF3P-ED7BAh6jVgitov-r8sZM3CnUJfay9ybxt_MjtPu1AAYQ5rIG24gAihhTsL_LKsroTvH5NGV_aqIZcHjzrF5h6rdfJr5qa904EPM69z1uYQohoXjotjMiCeD2Q"/>
</div>
<h3 class="font-display text-2xl font-medium text-slate-900 mb-2 group-hover:text-gold transition-colors">New Builds</h3>
<p class="text-slate-500 text-sm leading-relaxed mb-4">Ground-up construction managed with rigorous precision and transparency.</p>
<span class="text-xs font-bold uppercase tracking-widest text-slate-900 group-hover:text-gold transition-colors">Learn More</span>
</div>
<!-- Card 3 -->
<div class="group cursor-pointer">
<div class="overflow-hidden rounded mb-6 aspect-[4/5] bg-slate-100">
<img alt="Minimalist interior fit-out with wooden textures" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Interior fit-out details" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx_MgNQ3uMsIakSwW62NkQ7mLXBeF-AV-Pr7_WD3qWB7ysVl0Caf_Q2n5ChEg53Sa_7PpqfUJeWBQqk2sf1iO3M0Czmb67djGweeD_ZQX4wpQZ0LoOhKiRlJ0M69kghzij9Gnhnlk8A7x4mTHl_563Met98BhU_AzQCkFvYG1KyzMDJPkaeFtMrc5a6mXSqmKg5FYcB2fk1kDTdnk2amcCxdnHt8F_0VAT7klD0qpiNpgJpKRUoDQoXSekWPhI1FWoFL52pWOc815s"/>
</div>
<h3 class="font-display text-2xl font-medium text-slate-900 mb-2 group-hover:text-gold transition-colors">Interior Fit-out</h3>
<p class="text-slate-500 text-sm leading-relaxed mb-4">Bespoke joinery, lighting, and finishes that define the character of a home.</p>
<span class="text-xs font-bold uppercase tracking-widest text-slate-900 group-hover:text-gold transition-colors">Learn More</span>
</div>
</div>
<div class="mt-8 text-center md:hidden">
<a class="inline-flex items-center gap-2 text-slate-900 font-bold border-b-2 border-gold pb-1 hover:text-gold transition-colors" href="#">
                    Explore Services <span class="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
</div>
</section>
<!-- The Blueprint (Process) -->
<section class="py-24 bg-canvas overflow-hidden">
<div class="max-w-[1440px] mx-auto px-6 md:px-12">
<div class="text-center mb-16">
<span class="text-gold text-sm font-bold uppercase tracking-widest mb-2 block">Our Methodology</span>
<h2 class="font-display text-4xl md:text-5xl font-semibold text-slate-900">The Blueprint</h2>
</div>
<!-- Stepper Component -->
<div class="relative max-w-5xl mx-auto hidden md:block">
<div class="connector-line"></div>
<div class="grid grid-cols-4 relative z-10">
<!-- Step 1 -->
<div class="flex flex-col items-center group cursor-pointer">
<div class="w-12 h-12 rounded-full bg-slate-900 text-gold flex items-center justify-center border-4 border-canvas shadow-lg group-hover:scale-110 group-hover:bg-gold group-hover:text-slate-900 transition-all duration-300">
<span class="font-bold text-lg">1</span>
</div>
<h4 class="mt-6 font-display text-xl font-medium text-slate-900 group-hover:text-gold transition-colors">Consultation</h4>
<div class="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-500 text-center mt-2 px-4">
<p class="text-sm text-slate-500">We listen to your vision, assess the site, and define the project scope.</p>
</div>
</div>
<!-- Step 2 -->
<div class="flex flex-col items-center group cursor-pointer">
<div class="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center border-4 border-canvas shadow-lg group-hover:scale-110 group-hover:bg-gold group-hover:text-slate-900 transition-all duration-300">
<span class="font-bold text-lg">2</span>
</div>
<h4 class="mt-6 font-display text-xl font-medium text-slate-900 group-hover:text-gold transition-colors">Design</h4>
<div class="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-500 text-center mt-2 px-4">
<p class="text-sm text-slate-500">Architectural drafting, 3D visualization, and material selection.</p>
</div>
</div>
<!-- Step 3 -->
<div class="flex flex-col items-center group cursor-pointer">
<div class="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center border-4 border-canvas shadow-lg group-hover:scale-110 group-hover:bg-gold group-hover:text-slate-900 transition-all duration-300">
<span class="font-bold text-lg">3</span>
</div>
<h4 class="mt-6 font-display text-xl font-medium text-slate-900 group-hover:text-gold transition-colors">Build</h4>
<div class="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-500 text-center mt-2 px-4">
<p class="text-sm text-slate-500">Execution by master craftsmen with weekly progress reports.</p>
</div>
</div>
<!-- Step 4 -->
<div class="flex flex-col items-center group cursor-pointer">
<div class="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center border-4 border-canvas shadow-lg group-hover:scale-110 group-hover:bg-gold group-hover:text-slate-900 transition-all duration-300">
<span class="font-bold text-lg">4</span>
</div>
<h4 class="mt-6 font-display text-xl font-medium text-slate-900 group-hover:text-gold transition-colors">Handover</h4>
<div class="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-500 text-center mt-2 px-4">
<p class="text-sm text-slate-500">Final inspection, key handover, and post-construction support.</p>
</div>
</div>
</div>
</div>
<!-- Mobile Process List (Visible only on small screens) -->
<div class="md:hidden flex flex-col gap-6">
<div class="flex items-start gap-4">
<div class="w-10 h-10 rounded-full bg-slate-900 text-gold flex-shrink-0 flex items-center justify-center font-bold">1</div>
<div>
<h4 class="font-display text-lg font-medium text-slate-900">Consultation</h4>
<p class="text-sm text-slate-500 mt-1">We listen to your vision, assess the site, and define the project scope.</p>
</div>
</div>
<div class="flex items-start gap-4">
<div class="w-10 h-10 rounded-full bg-white text-slate-900 border border-slate-200 flex-shrink-0 flex items-center justify-center font-bold">2</div>
<div>
<h4 class="font-display text-lg font-medium text-slate-900">Design</h4>
<p class="text-sm text-slate-500 mt-1">Architectural drafting, 3D visualization, and material selection.</p>
</div>
</div>
<div class="flex items-start gap-4">
<div class="w-10 h-10 rounded-full bg-white text-slate-900 border border-slate-200 flex-shrink-0 flex items-center justify-center font-bold">3</div>
<div>
<h4 class="font-display text-lg font-medium text-slate-900">Build</h4>
<p class="text-sm text-slate-500 mt-1">Execution by master craftsmen with weekly progress reports.</p>
</div>
</div>
<div class="flex items-start gap-4">
<div class="w-10 h-10 rounded-full bg-white text-slate-900 border border-slate-200 flex-shrink-0 flex items-center justify-center font-bold">4</div>
<div>
<h4 class="font-display text-lg font-medium text-slate-900">Handover</h4>
<p class="text-sm text-slate-500 mt-1">Final inspection, key handover, and post-construction support.</p>
</div>
</div>
</div>
</div>
</section>
<!-- The Gallery (Projects) -->
<section class="py-24 bg-surface">
<div class="max-w-[1440px] mx-auto px-6 md:px-12">
<div class="flex justify-between items-center mb-12">
<h2 class="font-display text-4xl md:text-5xl font-semibold text-slate-900">Selected Works</h2>
<a class="hidden md:block px-6 py-3 border border-slate-200 text-slate-900 rounded font-bold text-sm tracking-wide hover:bg-slate-900 hover:text-white transition-colors" href="#">
                    View Full Portfolio
                </a>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<!-- Project 1 -->
<div class="zoom-card group cursor-pointer">
<div class="relative overflow-hidden rounded shadow-soft group-hover:shadow-deep transition-all duration-300">
<img alt="Modern minimalist house exterior with pool" class="zoom-image w-full aspect-[4/5] object-cover transition-transform duration-700" data-alt="Modern house exterior" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZY2_RDsVpmjkI0Bdt0NMjb8b4RLnOsuWvtpBhI2D4kdlxoIbLWZ4QK0BeET-6RCutoayyVpyxsk9_nPQvknQDfAgisYKJyBetY7Q4MGPR98LEAuMugPg2EKzuaE6Rvb3Jtm-BdTWHxxvOWmgriDc1DsioyPM0oAE0Ch4h0h3B8_nyzRWPBiwVjjtbToYBlGDj3tx5g3eU2JNhRrF1nJjUuO7XTtZ-TLpctO9u92XInRWZG2T7QYu3mNy7Hoi7CuUopgKthiyULMxK"/>
<div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
<h3 class="text-white font-display text-2xl font-medium">Villa Uluwatu</h3>
<p class="text-white/80 text-sm mt-1 flex items-center gap-1">
<span class="material-symbols-outlined text-sm">location_on</span> Bali, Indonesia
                            </p>
</div>
</div>
</div>
<!-- Project 2 -->
<div class="zoom-card group cursor-pointer">
<div class="relative overflow-hidden rounded shadow-soft group-hover:shadow-deep transition-all duration-300">
<img alt="Luxury open plan living room with high ceilings" class="zoom-image w-full aspect-[4/5] object-cover transition-transform duration-700" data-alt="Luxury interior space" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfgGB8dEJ54j4-NQN4FqvFFNl3jc-neBCZ0BP4SsrvDcq9To6cCz6yTTx0dIemvPFSwZhc9ZJ4kXxGSv8PfjMGe9nYwROljksVvAQQzEQnJR6FcKFa9iNmtGIpLOsnCweIzlURRH5Ebn5VV75PjTqeJ33P_HP-95XxWpNt281xaha8mnOmEnEm1HAl8EZOW6G5S3n9tnT_mmPjboaPQbO1J2GTZqiedAdjHK8KSv3GflDVGXbHSKsOS3f5SKrnXOmi872PES3A2e9R"/>
<div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
<h3 class="text-white font-display text-2xl font-medium">The Menteng Residence</h3>
<p class="text-white/80 text-sm mt-1 flex items-center gap-1">
<span class="material-symbols-outlined text-sm">location_on</span> Jakarta, Indonesia
                            </p>
</div>
</div>
</div>
<!-- Project 3 -->
<div class="zoom-card group cursor-pointer">
<div class="relative overflow-hidden rounded shadow-soft group-hover:shadow-deep transition-all duration-300">
<img alt="Modern concrete staircase with glass railing" class="zoom-image w-full aspect-[4/5] object-cover transition-transform duration-700" data-alt="Architectural detail of staircase" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANEnizekQcFK6w-tqghaU6JavUC2ORRIm8LFLzdwRwMhyRNPoGN-L-0hahEAi02dWrCamebz5pL87oe9n7k-3m_AntApBIpsOOmBCoy2W13dsgcgV8C7FYBHN7YZX0WLbb7B-zBGysg-CZZLRQWfnDubHungeqB7R5oExNjbtM8Bfa1o7XuCQC4Cwo6B_gb6QCvx2t_UYD6L7IZ_E-AJvei_JQD58nRz50FyBAgzDuDDAR4xueouGJNxpHKgBgIHRY4O4S5NutjV9E"/>
<div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
<h3 class="text-white font-display text-2xl font-medium">Urban Loft Renovation</h3>
<p class="text-white/80 text-sm mt-1 flex items-center gap-1">
<span class="material-symbols-outlined text-sm">location_on</span> Bandung, Indonesia
                            </p>
</div>
</div>
</div>
</div>
<div class="mt-8 text-center md:hidden">
<a class="inline-block w-full text-center px-6 py-3 border border-slate-200 text-slate-900 rounded font-bold text-sm tracking-wide hover:bg-slate-900 hover:text-white transition-colors" href="#">
                    View Full Portfolio
                </a>
</div>
</div>
</section>
<!-- Testimonials -->
<section class="py-24 bg-slate-100 relative overflow-hidden">
<div class="absolute top-10 left-10 md:left-1/4 text-slate-200 select-none pointer-events-none">
<span class="font-display text-[15rem] leading-none opacity-50">“</span>
</div>
<div class="max-w-4xl mx-auto px-6 relative z-10 text-center">
<div class="mb-10">
<div class="flex justify-center gap-1 text-gold mb-6">
<span class="material-symbols-outlined">star</span>
<span class="material-symbols-outlined">star</span>
<span class="material-symbols-outlined">star</span>
<span class="material-symbols-outlined">star</span>
<span class="material-symbols-outlined">star</span>
</div>
<blockquote class="font-display text-2xl md:text-4xl text-slate-800 italic leading-snug">
                    They brought a level of transparency and precision I didn't think was possible in construction. The finish quality is simply impeccable.
                </blockquote>
</div>
<div class="flex flex-col items-center">
<cite class="not-italic font-bold text-slate-900 tracking-wide">Alexander H.</cite>
<span class="text-sm text-slate-500">Property Developer, South Jakarta</span>
</div>
</div>
</section>
<!-- CTA / Concierge -->
<section class="py-24 bg-white border-t border-slate-100">
<div class="max-w-3xl mx-auto px-6 text-center">
<h2 class="font-display text-4xl md:text-5xl font-semibold text-slate-900 mb-6">Ready to Build Your Vision?</h2>
<p class="text-slate-500 text-lg mb-10 leading-relaxed">
                Whether you have a full set of blueprints or just a rough idea, our concierge team is ready to guide you through the next steps.
            </p>
<div class="flex flex-col sm:flex-row justify-center gap-4">
<button class="bg-gold hover:bg-[#c5a02e] text-slate-900 px-10 py-4 rounded font-bold text-sm tracking-widest uppercase transition-colors shadow-lg shadow-gold/20">
                    Request Consultation
                </button>
<button class="bg-slate-100 hover:bg-slate-200 text-slate-900 px-10 py-4 rounded font-bold text-sm tracking-widest uppercase transition-colors">
                    Calculate Estimate
                </button>
</div>
</div>
</section>
<!-- Footer -->
<footer class="bg-slate-900 text-white pt-20 pb-10">
<div class="max-w-[1440px] mx-auto px-6 md:px-12">
<div class="flex flex-col md:flex-row justify-between gap-12 border-b border-slate-800 pb-16">
<div class="max-w-sm">
<div class="flex items-center gap-3 mb-6">
<span class="material-symbols-outlined text-gold text-2xl">architecture</span>
<h2 class="font-display font-bold text-xl tracking-tight">ArsitekPro</h2>
</div>
<p class="text-slate-400 text-sm leading-relaxed">
                        ArsitekPro is a premium construction and renovation firm dedicated to crafting spaces of enduring quality and aesthetic excellence.
                    </p>
</div>
<div class="grid grid-cols-2 md:grid-cols-3 gap-12">
<div>
<h4 class="font-bold text-sm uppercase tracking-widest text-gold mb-6">Explore</h4>
<ul class="space-y-4 text-sm text-slate-400">
<li><a class="hover:text-white transition-colors" href="#">The Atelier</a></li>
<li><a class="hover:text-white transition-colors" href="#">The Craft</a></li>
<li><a class="hover:text-white transition-colors" href="#">The Gallery</a></li>
<li><a class="hover:text-white transition-colors" href="#">The Blueprint</a></li>
</ul>
</div>
<div>
<h4 class="font-bold text-sm uppercase tracking-widest text-gold mb-6">Company</h4>
<ul class="space-y-4 text-sm text-slate-400">
<li><a class="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a class="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a class="hover:text-white transition-colors" href="#">Press</a></li>
<li><a class="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 class="font-bold text-sm uppercase tracking-widest text-gold mb-6">Connect</h4>
<ul class="space-y-4 text-sm text-slate-400">
<li><a class="hover:text-white transition-colors" href="#">Instagram</a></li>
<li><a class="hover:text-white transition-colors" href="#">LinkedIn</a></li>
<li><a class="hover:text-white transition-colors" href="#">WhatsApp</a></li>
</ul>
</div>
</div>
</div>
<div class="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
<p>© 2024 ArsitekPro Konstruksi. All rights reserved.</p>
<div class="flex gap-6">
<a class="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a class="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>
<script>
        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.remove('transparent-nav');
                navbar.classList.add('scrolled-nav');
            } else {
                navbar.classList.add('transparent-nav');
                navbar.classList.remove('scrolled-nav');
            }
        });
    </script>
</body></html>

## 2. The Craft (Services)

<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>The Craft - Services | ArsitekPro</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&amp;family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "primary": "#edbc1d",
              "background-light": "#fcfbf8", // Updated to match the provided component example
              "background-dark": "#221e10",
              "slate-900": "#1b180d", // Dark text from component
              "slate-500": "#9a884c", // Muted text from component
            },
            fontFamily: {
              "display": ["Manrope", "sans-serif"],
              "serif": ["Playfair Display", "serif"],
            },
            borderRadius: {"DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem"},
          },
        },
      }
    </script>
<style>
        /* Custom Utilities for that extra polish */
        .text-editorial {
            font-family: 'Playfair Display', serif;
        }
        
        /* Smooth fade in */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fadeIn 0.8s ease-out forwards;
        }
        
        /* Vertical line for luxury feel */
        .vertical-line::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0.5rem;
            bottom: 0.5rem;
            width: 1px;
            background-color: #edbc1d;
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display overflow-x-hidden antialiased selection:bg-primary/30">
<div class="relative flex min-h-screen w-full flex-col">
<!-- Header -->
<header class="sticky top-0 z-50 flex items-center justify-between border-b border-solid border-b-[#f3f0e7] bg-background-light/95 backdrop-blur-md px-6 py-4 lg:px-10 transition-all duration-300">
<div class="flex items-center gap-4 text-slate-900 dark:text-white">
<div class="size-8 text-primary">
<svg class="h-full w-full" fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z" fill="currentColor"></path>
<path clip-rule="evenodd" d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z" fill="currentColor" fill-rule="evenodd"></path>
</svg>
</div>
<h2 class="text-lg font-bold leading-tight tracking-[-0.015em] font-display">ArsitekPro</h2>
</div>
<div class="hidden lg:flex flex-1 justify-end gap-8 items-center">
<nav class="flex items-center gap-9">
<a class="text-slate-900 dark:text-slate-200 text-sm font-medium leading-normal tracking-[0.05em] uppercase hover:text-primary transition-colors" href="#">The Atelier</a>
<a class="text-primary text-sm font-bold leading-normal tracking-[0.05em] uppercase" href="#">The Craft</a>
<a class="text-slate-900 dark:text-slate-200 text-sm font-medium leading-normal tracking-[0.05em] uppercase hover:text-primary transition-colors" href="#">The Gallery</a>
<a class="text-slate-900 dark:text-slate-200 text-sm font-medium leading-normal tracking-[0.05em] uppercase hover:text-primary transition-colors" href="#">The Blueprint</a>
<a class="text-slate-900 dark:text-slate-200 text-sm font-medium leading-normal tracking-[0.05em] uppercase hover:text-primary transition-colors" href="#">The Concierge</a>
</nav>
<button class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded h-10 px-6 bg-primary text-slate-900 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-all">
<span class="truncate">Book Consultation</span>
</button>
</div>
<!-- Mobile Menu Icon -->
<button class="lg:hidden text-slate-900 dark:text-white">
<span class="material-symbols-outlined text-3xl">menu</span>
</button>
</header>
<!-- Main Content -->
<main class="flex-1 w-full max-w-[1440px] mx-auto px-4 md:px-10 lg:px-40 pb-20">
<!-- Page Title -->
<section class="py-16 md:py-24 max-w-4xl mx-auto text-center animate-fade-in">
<p class="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4">Our Services</p>
<h1 class="text-editorial text-5xl md:text-7xl text-slate-900 dark:text-slate-100 mb-6 font-semibold">The Craft</h1>
<div class="h-px w-24 bg-primary mx-auto mb-8"></div>
<p class="text-slate-500 dark:text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
                    Precision in every detail, from foundation to finish. We build not just structures, but legacies in concrete and light.
                </p>
</section>
<!-- Service Block 1: Renovation -->
<section class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 py-16 items-center group">
<!-- Image Left -->
<div class="relative overflow-hidden rounded-sm aspect-[3/4] lg:aspect-[4/5] order-1">
<div class="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-500 z-10"></div>
<img alt="High-end modern kitchen renovation with marble island and warm lighting" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg9rIgliBjqHDYA2AyO6Yg-mKOfv8Rf0YJX3vJ4zuMghz0lcI1vqS0Wi91UuxQtcRoLuoIy0NtyPNGe2RdKA20_KrTfShZvHdWRVIOhNPe4E6zzQcx-LTwCEAd72SMFlr4nMAQ7R7mpDD_6sn19neY2Xc70bBlaRbtibq4cVgfUyAFMZWjaY7cec0hNMshVk2wbgNb4JS8VIY1MVGdrojz1e7XMSA12pDm5jrOMHIMZLyoTesiKHztym2eE-HO3BNmV0Z2g39hQTyo"/>
</div>
<!-- Content Right -->
<div class="flex flex-col gap-8 order-2">
<div class="flex flex-col gap-4">
<span class="text-primary text-xs font-bold tracking-[0.15em] uppercase">01 — Revival</span>
<h2 class="text-editorial text-4xl md:text-5xl text-slate-900 dark:text-slate-100 leading-tight">
                            Renovation &amp; Remodeling
                        </h2>
<p class="text-slate-500 dark:text-slate-400 text-base md:text-lg leading-relaxed font-light mt-2">
                            We breathe new life into existing structures, respecting their history while infusing modern functionality. Our renovation process is meticulous, focusing on structural integrity and aesthetic transformation.
                        </p>
</div>
<ul class="flex flex-col gap-4 border-l border-slate-200 dark:border-slate-800 pl-6 my-2">
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
<div>
<strong class="block text-slate-900 dark:text-slate-100 text-sm font-bold tracking-wide uppercase">Structural Reinforcement</strong>
<span class="text-slate-500 dark:text-slate-400 text-sm">Ensuring safety and longevity for decades to come.</span>
</div>
</li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
<div>
<strong class="block text-slate-900 dark:text-slate-100 text-sm font-bold tracking-wide uppercase">MEP Systems Overhaul</strong>
<span class="text-slate-500 dark:text-slate-400 text-sm">Modernizing electrical and plumbing for efficiency.</span>
</div>
</li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
<div>
<strong class="block text-slate-900 dark:text-slate-100 text-sm font-bold tracking-wide uppercase">Premium Finishing</strong>
<span class="text-slate-500 dark:text-slate-400 text-sm">Sourcing high-end marble, woods, and fixtures.</span>
</div>
</li>
</ul>
<a class="group/link flex items-center gap-2 text-slate-900 dark:text-primary font-bold text-sm tracking-wide uppercase mt-4 w-fit" href="#">
<span class="border-b-2 border-primary/20 group-hover/link:border-primary transition-all pb-0.5">See Renovation Costs</span>
<span class="material-symbols-outlined text-lg transition-transform group-hover/link:translate-x-1 text-primary">arrow_forward</span>
</a>
</div>
</section>
<!-- Divider -->
<div class="flex items-center justify-center py-8 opacity-40">
<div class="h-px w-full max-w-[200px] bg-slate-300 dark:bg-slate-700"></div>
<div class="rotate-45 size-2 bg-primary mx-4"></div>
<div class="h-px w-full max-w-[200px] bg-slate-300 dark:bg-slate-700"></div>
</div>
<!-- Service Block 2: New Builds -->
<section class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 py-16 items-center group">
<!-- Content Left (Order changes on Desktop) -->
<div class="flex flex-col gap-8 order-2 lg:order-1">
<div class="flex flex-col gap-4">
<span class="text-primary text-xs font-bold tracking-[0.15em] uppercase">02 — Creation</span>
<h2 class="text-editorial text-4xl md:text-5xl text-slate-900 dark:text-slate-100 leading-tight">
                            Ground-Up Construction
                        </h2>
<p class="text-slate-500 dark:text-slate-400 text-base md:text-lg leading-relaxed font-light mt-2">
                            From the first sketch to the final coat of paint, we manage the entire lifecycle of your new build. We combine architectural vision with engineering precision to create homes that stand the test of time.
                        </p>
</div>
<ul class="flex flex-col gap-4 border-l border-slate-200 dark:border-slate-800 pl-6 my-2">
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
<div>
<strong class="block text-slate-900 dark:text-slate-100 text-sm font-bold tracking-wide uppercase">End-to-End Management</strong>
<span class="text-slate-500 dark:text-slate-400 text-sm">Permitting, procurement, and project oversight.</span>
</div>
</li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
<div>
<strong class="block text-slate-900 dark:text-slate-100 text-sm font-bold tracking-wide uppercase">Sustainable Practices</strong>
<span class="text-slate-500 dark:text-slate-400 text-sm">Eco-friendly materials and energy-efficient designs.</span>
</div>
</li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
<div>
<strong class="block text-slate-900 dark:text-slate-100 text-sm font-bold tracking-wide uppercase">Precision Concrete</strong>
<span class="text-slate-500 dark:text-slate-400 text-sm">Flawless casting and architectural concrete work.</span>
</div>
</li>
</ul>
<a class="group/link flex items-center gap-2 text-slate-900 dark:text-primary font-bold text-sm tracking-wide uppercase mt-4 w-fit" href="#">
<span class="border-b-2 border-primary/20 group-hover/link:border-primary transition-all pb-0.5">View Construction Process</span>
<span class="material-symbols-outlined text-lg transition-transform group-hover/link:translate-x-1 text-primary">arrow_forward</span>
</a>
</div>
<!-- Image Right -->
<div class="relative overflow-hidden rounded-sm aspect-[3/4] lg:aspect-[4/5] order-1 lg:order-2">
<div class="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-500 z-10"></div>
<img alt="Minimalist concrete building exterior with sharp angles against a blue sky" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOCR7L4_JedBu7QqDyp2jqNd6xw_pcDOq8AyLeGP4STSKDRR7cz-8gmwsZvMcmIKYdUFjJ7WrPdqUvcz87-2WgM7vn_7xQnoPTxqNXZnbFafxdYD9uNSuf5AK2DXnwndnq3gPRcagxGUnmZ7JznUgnv5P1uZgnZLYWSY-uDcygUF2FR9jODzMkQk4WYsJW9cW8uctK3OSkf5p6anAqeNXRizRGgSW36tiGCHlpGhL_Pe4K841vP6CH0oo_vX3nSGJFf0jCnlrsQ0OB"/>
</div>
</section>
<!-- Divider -->
<div class="flex items-center justify-center py-8 opacity-40">
<div class="h-px w-full max-w-[200px] bg-slate-300 dark:bg-slate-700"></div>
<div class="rotate-45 size-2 bg-primary mx-4"></div>
<div class="h-px w-full max-w-[200px] bg-slate-300 dark:bg-slate-700"></div>
</div>
<!-- Service Block 3: Interior Fit-out -->
<section class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 py-16 items-center group">
<!-- Image Left -->
<div class="relative overflow-hidden rounded-sm aspect-[3/4] lg:aspect-[4/5] order-1">
<div class="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-500 z-10"></div>
<img alt="Detail shot of custom wooden joinery and modern furniture in a living room" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2Lq_ecj20l5srXuVKtt80xC1ZGeZTXlKRC_h2xQw7YNZmBwYna3JuBa__Jxt3poKu4KLjyieTDog2gRQpGYs8Yr0y1w7spZCi6vLm9msNeNwFGIhY62_8R2l_9VH9-p65LzHFr4Mk7IinaP-O6QrKLuoNfJagb4FuZcFd9BWf7bM5SfFG_0fudQsRDwceNKG5WXACozJe2dyhi34RaQfvcGTRHvCSsNhXKTMp2wfJIAnLOHm54F0q_5ppNdRUbg2gu4bAybjR6Zh9"/>
</div>
<!-- Content Right -->
<div class="flex flex-col gap-8 order-2">
<div class="flex flex-col gap-4">
<span class="text-primary text-xs font-bold tracking-[0.15em] uppercase">03 — Refinement</span>
<h2 class="text-editorial text-4xl md:text-5xl text-slate-900 dark:text-slate-100 leading-tight">
                            Interior Fit-Out
                        </h2>
<p class="text-slate-500 dark:text-slate-400 text-base md:text-lg leading-relaxed font-light mt-2">
                            The soul of a home lies in its interiors. We collaborate with top artisans to deliver bespoke joinery, intelligent lighting solutions, and curated material palettes that elevate everyday living.
                        </p>
</div>
<ul class="flex flex-col gap-4 border-l border-slate-200 dark:border-slate-800 pl-6 my-2">
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
<div>
<strong class="block text-slate-900 dark:text-slate-100 text-sm font-bold tracking-wide uppercase">Custom Cabinetry</strong>
<span class="text-slate-500 dark:text-slate-400 text-sm">Tailor-made wardrobes, kitchens, and vanity units.</span>
</div>
</li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
<div>
<strong class="block text-slate-900 dark:text-slate-100 text-sm font-bold tracking-wide uppercase">Smart Lighting</strong>
<span class="text-slate-500 dark:text-slate-400 text-sm">Automated systems to set the perfect mood.</span>
</div>
</li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
<div>
<strong class="block text-slate-900 dark:text-slate-100 text-sm font-bold tracking-wide uppercase">Material Sourcing</strong>
<span class="text-slate-500 dark:text-slate-400 text-sm">Imported tiles, exotic woods, and designer hardware.</span>
</div>
</li>
</ul>
<a class="group/link flex items-center gap-2 text-slate-900 dark:text-primary font-bold text-sm tracking-wide uppercase mt-4 w-fit" href="#">
<span class="border-b-2 border-primary/20 group-hover/link:border-primary transition-all pb-0.5">View Interior Gallery</span>
<span class="material-symbols-outlined text-lg transition-transform group-hover/link:translate-x-1 text-primary">arrow_forward</span>
</a>
</div>
</section>
</main>
<!-- CTA Footer Section -->
<section class="bg-slate-900 text-white py-24 px-6">
<div class="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
<span class="text-primary text-sm font-bold tracking-[0.2em] uppercase">Start Your Journey</span>
<h2 class="text-editorial text-4xl md:text-5xl lg:text-6xl leading-tight">
                    Ready to build your legacy?
                </h2>
<p class="text-slate-400 text-lg max-w-2xl font-light">
                    Whether it's a renovation or a ground-up build, our team is ready to bring your vision to life with precision and care.
                </p>
<div class="flex gap-4 mt-6">
<button class="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded h-12 px-8 bg-primary text-slate-900 text-base font-bold leading-normal tracking-[0.015em] hover:bg-white hover:text-slate-900 transition-all duration-300">
<span class="truncate">Book Consultation</span>
</button>
<button class="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded h-12 px-8 border border-white/20 text-white text-base font-medium leading-normal tracking-[0.015em] hover:bg-white/10 transition-all duration-300">
<span class="truncate">Contact Us</span>
</button>
</div>
</div>
</section>
</div>
</body></html>


## 3. Portfolio (The Gallery)

<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>The Gallery | ArsitekPro</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&amp;family=Playfair+Display:wght@400;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#1E293B", // Slate
                        "secondary": "#94A3B8", // Stone
                        "accent": "#D4AF37", // Gold
                        "background-light": "#F8F9FA", // Canvas
                        "background-dark": "#1E293B", // Dark mode bg
                        "surface": "#FFFFFF",
                        "text-main": "#334155", // Charcoal
                    },
                    fontFamily: {
                        "sans": ["Manrope", "sans-serif"],
                        "serif": ["Playfair Display", "serif"],
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem", // 4px tight radius
                        "sm": "0.125rem",
                        "md": "0.375rem",
                        "lg": "0.5rem",
                    },
                    boxShadow: {
                        "soft": "0 20px 40px -12px rgba(30, 41, 59, 0.08)",
                    }
                },
            },
        }
    </script>
<style>
        /* Hide scrollbar for Chrome, Safari and Opera */
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .no-scrollbar {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }
        
        /* Smooth scrolling */
        html {
            scroll-behavior: smooth;
        }
    </style>
</head>
<body class="bg-background-light text-text-main font-sans antialiased min-h-screen flex flex-col">
<!-- Navbar -->
<header class="sticky top-0 z-50 w-full bg-surface/90 backdrop-blur-md border-b border-secondary/20 transition-all duration-300">
<div class="max-w-[1440px] mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
<div class="flex items-center gap-3 text-primary">
<div class="size-8 text-accent">
<span class="material-symbols-outlined text-[32px]">architecture</span>
</div>
<h2 class="text-primary font-serif text-2xl font-bold tracking-tight">ArsitekPro</h2>
</div>
<nav class="hidden lg:flex items-center gap-8">
<a class="text-primary text-xs font-medium uppercase tracking-[0.15em] hover:text-accent transition-colors" href="#">The Atelier</a>
<a class="text-primary text-xs font-medium uppercase tracking-[0.15em] hover:text-accent transition-colors" href="#">The Craft</a>
<a class="text-accent text-xs font-bold uppercase tracking-[0.15em]" href="#">The Gallery</a>
<a class="text-primary text-xs font-medium uppercase tracking-[0.15em] hover:text-accent transition-colors" href="#">The Blueprint</a>
</nav>
<div class="flex items-center gap-4">
<button class="hidden md:flex bg-primary hover:bg-primary/90 text-accent text-xs font-bold uppercase tracking-[0.05em] px-6 py-3 rounded transition-all duration-300">
                    Book Consultation
                </button>
<button class="lg:hidden text-primary">
<span class="material-symbols-outlined">menu</span>
</button>
</div>
</div>
</header>
<!-- Main Layout -->
<main class="flex-grow w-full max-w-[1440px] mx-auto px-6 lg:px-12 pt-12 pb-24">
<div class="flex flex-col lg:flex-row gap-12 relative">
<!-- Sticky Sidebar Filter -->
<aside class="w-full lg:w-64 flex-shrink-0 lg:sticky lg:top-32 h-fit z-10 bg-background-light">
<div class="flex flex-col gap-8">
<div class="flex flex-col gap-2">
<h1 class="font-serif text-4xl text-primary font-semibold">The Gallery</h1>
<p class="text-secondary text-sm leading-relaxed">A curated selection of our finest architectural and interior masterpieces.</p>
</div>
<div class="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-4 lg:pb-0 no-scrollbar border-b lg:border-none border-secondary/20">
<!-- Filter Item: Active -->
<button class="group flex items-center justify-between w-full text-left px-4 py-3 border-l-4 border-accent bg-white shadow-soft rounded-r transition-all duration-300 shrink-0 lg:shrink">
<span class="text-accent font-bold text-sm uppercase tracking-wide">All Projects</span>
<span class="text-accent text-xs font-medium opacity-100 hidden lg:block">24</span>
</button>
<!-- Filter Item: Inactive -->
<button class="group flex items-center justify-between w-full text-left px-4 py-3 border-l-4 border-transparent hover:border-secondary/30 hover:bg-white/50 transition-all duration-300 shrink-0 lg:shrink text-secondary hover:text-primary">
<span class="font-medium text-sm uppercase tracking-wide group-hover:translate-x-1 transition-transform">Residential</span>
<span class="text-xs font-medium opacity-50 hidden lg:block">12</span>
</button>
<button class="group flex items-center justify-between w-full text-left px-4 py-3 border-l-4 border-transparent hover:border-secondary/30 hover:bg-white/50 transition-all duration-300 shrink-0 lg:shrink text-secondary hover:text-primary">
<span class="font-medium text-sm uppercase tracking-wide group-hover:translate-x-1 transition-transform">Commercial</span>
<span class="text-xs font-medium opacity-50 hidden lg:block">05</span>
</button>
<button class="group flex items-center justify-between w-full text-left px-4 py-3 border-l-4 border-transparent hover:border-secondary/30 hover:bg-white/50 transition-all duration-300 shrink-0 lg:shrink text-secondary hover:text-primary">
<span class="font-medium text-sm uppercase tracking-wide group-hover:translate-x-1 transition-transform">Industrial</span>
<span class="text-xs font-medium opacity-50 hidden lg:block">03</span>
</button>
<button class="group flex items-center justify-between w-full text-left px-4 py-3 border-l-4 border-transparent hover:border-secondary/30 hover:bg-white/50 transition-all duration-300 shrink-0 lg:shrink text-secondary hover:text-primary">
<span class="font-medium text-sm uppercase tracking-wide group-hover:translate-x-1 transition-transform">Interior</span>
<span class="text-xs font-medium opacity-50 hidden lg:block">04</span>
</button>
</div>
<div class="hidden lg:block p-6 bg-primary text-white rounded mt-4 relative overflow-hidden group cursor-pointer">
<div class="absolute top-0 right-0 p-4 opacity-10">
<span class="material-symbols-outlined text-[100px]">architecture</span>
</div>
<h3 class="font-serif text-xl mb-2 relative z-10">Start Your Legacy</h3>
<p class="text-sm text-gray-300 mb-4 relative z-10">Ready to build something extraordinary?</p>
<span class="inline-flex items-center text-accent text-sm font-bold uppercase tracking-wider relative z-10 group-hover:gap-2 transition-all">
                            Get a Quote <span class="material-symbols-outlined text-sm ml-1">arrow_forward</span>
</span>
</div>
</div>
</aside>
<!-- Masonry Grid Area -->
<div class="flex-1 w-full">
<!-- Grid Container -->
<div class="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
<!-- Item 1: Tall -->
<div class="group relative break-inside-avoid overflow-hidden rounded cursor-pointer">
<img alt="Modern brutalist concrete villa exterior with pool" class="w-full h-auto object-cover transform transition-transform duration-700 ease-out group-hover:scale-105" data-alt="Modern brutalist concrete villa exterior with pool" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdVZSj3CFCZjfq6ToU53lQL9Xeb95L0HLswBtLCiouLemZha_581sSmeh95OV3HEiO0o2MmthrIsby2ML1xNOlVZSb_FfQPFDZ7NsyCWjIBZM-DXBSEKFEIxh3NIqRPB9711FEzQu8sMsr5_8Y3EK4pODn9v9tvuqc1s3hTg9l5rnldNx_Cp1eZuQ5nhPhpmSzXtaGSTYpjkZj7flQcOUTl0aU2GJZmNgE3w-7J2WbhrNlaRUx3MCG716yHKVIbP-zocjKokSYw0-U"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
<h3 class="text-white font-serif text-xl font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500">The Cilandak Residence</h3>
<div class="flex items-center gap-1 mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
<span class="material-symbols-outlined text-accent text-sm">location_on</span>
<span class="text-gray-300 text-xs font-medium tracking-wide uppercase">South Jakarta</span>
</div>
</div>
</div>
<!-- Item 2: Square -->
<div class="group relative break-inside-avoid overflow-hidden rounded cursor-pointer">
<img alt="Minimalist bathroom with stone bathtub and large window" class="w-full aspect-square object-cover transform transition-transform duration-700 ease-out group-hover:scale-105" data-alt="Minimalist bathroom with stone bathtub and large window" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX0NZroRzP6bodinSol37Ssln_Sr9GZB7fZNzXBjh7UHRghKQjASfXcmW3h9GyeUaFBPUO6Xp0UCqglJFguFS_XZz4XfVbyNUkHZXLYtxc2SkHAilj0npX6PxLC04g_gbSI49XjdntjUV5aY5IwgP2BXgybI091pJbJLRMFoBoxl23CN1ch2TpQ00G-mdFwKvv6xpMokcFTvToOCCmdQcYTIrb8QXBihS42-xUA97DQldh-ZhNrmVW0xPHOGLFYCNk34zvC1NNB-u6"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
<h3 class="text-white font-serif text-xl font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Menteng Executive Suite</h3>
<div class="flex items-center gap-1 mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
<span class="material-symbols-outlined text-accent text-sm">location_on</span>
<span class="text-gray-300 text-xs font-medium tracking-wide uppercase">Central Jakarta</span>
</div>
</div>
</div>
<!-- Item 3: Wide/Standard -->
<div class="group relative break-inside-avoid overflow-hidden rounded cursor-pointer">
<img alt="Open concept modern kitchen with marble island" class="w-full h-auto object-cover transform transition-transform duration-700 ease-out group-hover:scale-105" data-alt="Open concept modern kitchen with marble island" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtBnZ38k5xEQ11rqzHVRtpkq5wQ4HApBTBhPdyFz4DDW99yNQ10yBkjWKh3pwrth0QEI_JGcNnFurejjeyAU5d_x4JAXyZdAG4bXtrUdqaOgheK1mUTugpFU-N7HuHUKPf_iUYlMV_0ZPfXBMu5QcZiflceuCdLvAgfJyn2Z97HbLSNQXSbYGmNUDn50LL4XEFLp07rpXeIi3B9nSs9MhDtqPTvnDmQ0Dw3eoB_D-A5-BpslO26-dVZE7w7lugC-a6ViMaw5dOFaee"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
<h3 class="text-white font-serif text-xl font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Pondok Indah Renovation</h3>
<div class="flex items-center gap-1 mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
<span class="material-symbols-outlined text-accent text-sm">location_on</span>
<span class="text-gray-300 text-xs font-medium tracking-wide uppercase">South Jakarta</span>
</div>
</div>
</div>
<!-- Item 4: Tall -->
<div class="group relative break-inside-avoid overflow-hidden rounded cursor-pointer">
<img alt="Luxury modern house facade at dusk with warm lighting" class="w-full h-auto object-cover transform transition-transform duration-700 ease-out group-hover:scale-105" data-alt="Luxury modern house facade at dusk with warm lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoGW8cfe2Qk4iqYHEmyXOFIDnBRqPpL1ya49UJXIat0WYXLcsNS32PUClmsHn0cg1mW6Llt4lDEi6FhRoTS77uAn2XbnKQeNyxZobhqaAyyjp0jzg1faO3iqcD37YQy12hZ_Q1QRgA25tZzfOmortw1zBqtV81lomTMDMq6tzr-A0RfEKmql4_UzkoXjZyonYC1_h0DZM0Et2ihNo11S_ntemMHBz7pqaOAuAgkIDOoW_n-OPAWMC-_4DoBUm5OtI58lTAVab5hNPe"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
<h3 class="text-white font-serif text-xl font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Serpong Heights</h3>
<div class="flex items-center gap-1 mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
<span class="material-symbols-outlined text-accent text-sm">location_on</span>
<span class="text-gray-300 text-xs font-medium tracking-wide uppercase">Tangerang</span>
</div>
</div>
</div>
<!-- Skeleton Loader Item (Simulating loading state for one item) -->
<div class="relative break-inside-avoid overflow-hidden rounded h-64 bg-gray-200 animate-pulse flex items-center justify-center">
<span class="material-symbols-outlined text-gray-300 text-4xl animate-bounce">image</span>
</div>
<!-- Item 5: Square -->
<div class="group relative break-inside-avoid overflow-hidden rounded cursor-pointer">
<img alt="Modern corporate office interior with glass walls" class="w-full aspect-square object-cover transform transition-transform duration-700 ease-out group-hover:scale-105" data-alt="Modern corporate office interior with glass walls" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBIa0o5ddcG2tUpBU8UwPHWpT3z-Ul8t0KyNIuwXJzoernOX2-m0nwYKRLa-oHzWcxSuFVPqWDiiotrrGLyIW8Ez9KA98DFujsomacyi7oVXBWK5wYuJ1GIfeCkTBJxHCWxyJkAQWpGhovm4iXT5xVSy8HYrSUgnWb3rBX2HbPgzJIKtKcaqsWp8Kkt3J30VVLtv4fWYUvnSAh9ySIrsv1cP1n0uZHG22Xxin2-zndQ-xayBVDsgIemGW-oafT9gsBCQYmZ1ibxMJv"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
<h3 class="text-white font-serif text-xl font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Sudirman Tower Lobby</h3>
<div class="flex items-center gap-1 mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
<span class="material-symbols-outlined text-accent text-sm">location_on</span>
<span class="text-gray-300 text-xs font-medium tracking-wide uppercase">Central Jakarta</span>
</div>
</div>
</div>
<!-- Item 6: Tall -->
<div class="group relative break-inside-avoid overflow-hidden rounded cursor-pointer">
<img alt="Minimalist living room with beige furniture and sunlight" class="w-full h-auto object-cover transform transition-transform duration-700 ease-out group-hover:scale-105" data-alt="Minimalist living room with beige furniture and sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCG-cIo0uEvZeeRkN794cehCoGGxttMi6qYwe8o0YgFaeFEBGQk46jSYdGIG_GJYCTnPZWlgBgVoU6dsZbgfh-0Jfj2lqHzXuAEG2K0SZryhVbpiZFB89oLbMSBThmgb5yc_IqzPztboSt-oPhX077MrwxAKHXs7xLr4mMyWpPgUtTDaGUCjtr5c-ZPS9tQCauQ3HKDkx5xQGBxVYxKSsOk-YKZm_LkV7tqsZYTs49Hcwg-3ep8N-tBY777EsgJuDUDrY-G-l92xe3N"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
<h3 class="text-white font-serif text-xl font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500">The Beige Loft</h3>
<div class="flex items-center gap-1 mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
<span class="material-symbols-outlined text-accent text-sm">location_on</span>
<span class="text-gray-300 text-xs font-medium tracking-wide uppercase">Kemang</span>
</div>
</div>
</div>
<!-- Item 7: Wide -->
<div class="group relative break-inside-avoid overflow-hidden rounded cursor-pointer">
<img alt="Industrial style cafe interior with exposed brick" class="w-full h-auto object-cover transform transition-transform duration-700 ease-out group-hover:scale-105" data-alt="Industrial style cafe interior with exposed brick" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzMj3m9dCFLIB2P4QcbqAUm8hqh-BeIUUUDtYCRRga3D0Hltow4uGJ1VRXqUOMzSwUgkaSF-zZC2-mG8a9dNRkUc1rCM9nSds7R_8K13xNwot0k2tsiDEtb2LtDJP-vSfdaZIr7yFHAzQKXdZpyJhwc-e5uAQHH1uSiG9UniM2gg85y0Evb2iQa0mMQfIJ6Aax19ulBh9HHD2EOhzZqX5AXYrM3WXuVzQ9dZNAat_ZmWu2yLTuZrGAl0TkoAytbEWq49A1p8qKcUA8"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
<h3 class="text-white font-serif text-xl font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Kopi Kultur</h3>
<div class="flex items-center gap-1 mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
<span class="material-symbols-outlined text-accent text-sm">location_on</span>
<span class="text-gray-300 text-xs font-medium tracking-wide uppercase">Senopati</span>
</div>
</div>
</div>
<!-- Item 8: Tall -->
<div class="group relative break-inside-avoid overflow-hidden rounded cursor-pointer">
<img alt="Modern minimalist bedroom with wooden accents" class="w-full h-auto object-cover transform transition-transform duration-700 ease-out group-hover:scale-105" data-alt="Modern minimalist bedroom with wooden accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOZNpKBEUiakElaC0nB_VbRR1a0ACOyayv46Pk_ihzgeAGfazskPw73RoeaHeBn4cVsEtV9nj8pbK7HjKBdHY6wfEoNHdN_s-nEMg9PFq8NFRQKaTzfK7joelgxZXUF5MLz1LRw51QSizS1zX-kJ8EyhW9F_bWKFCRDXPvmDo1IIkFLlZctJn7IccQO8jzz7ZQsB7CklftI7hMVTGMEIqpuqkma05pZBCWpVwtRiDUfTP9Vq4z6cRvg4fOs8Q7fuUuJakht9DYyaHL"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
<h3 class="text-white font-serif text-xl font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Private Residence V</h3>
<div class="flex items-center gap-1 mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
<span class="material-symbols-outlined text-accent text-sm">location_on</span>
<span class="text-gray-300 text-xs font-medium tracking-wide uppercase">Bintaro Sector 9</span>
</div>
</div>
</div>
</div>
<!-- Pagination / Load More -->
<div class="mt-16 flex justify-center">
<button class="border border-primary/20 text-primary hover:bg-primary hover:text-white px-8 py-3 rounded text-sm font-bold uppercase tracking-widest transition-all duration-300">
                        Load More Projects
                    </button>
</div>
</div>
</div>
</main>
<!-- Footer -->
<footer class="bg-primary text-white py-12 border-t border-white/10">
<div class="max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
<div class="col-span-1 md:col-span-2">
<div class="flex items-center gap-3 text-white mb-6">
<span class="material-symbols-outlined text-accent text-3xl">architecture</span>
<h2 class="font-serif text-2xl font-bold tracking-tight">ArsitekPro</h2>
</div>
<p class="text-gray-400 text-sm leading-relaxed max-w-sm">
                    Crafting legacies in concrete and light. We build spaces that honor the past while embracing the future of living.
                </p>
</div>
<div>
<h4 class="font-serif text-lg mb-4">Studio</h4>
<ul class="space-y-2 text-sm text-gray-400">
<li><a class="hover:text-accent transition-colors" href="#">The Atelier</a></li>
<li><a class="hover:text-accent transition-colors" href="#">The Craft</a></li>
<li><a class="hover:text-accent transition-colors" href="#">The Gallery</a></li>
<li><a class="hover:text-accent transition-colors" href="#">The Team</a></li>
</ul>
</div>
<div>
<h4 class="font-serif text-lg mb-4">Connect</h4>
<ul class="space-y-2 text-sm text-gray-400">
<li class="flex items-center gap-2"><span class="material-symbols-outlined text-accent text-xs">mail</span> hello@arsitekpro.com</li>
<li class="flex items-center gap-2"><span class="material-symbols-outlined text-accent text-xs">call</span> +62 21 555 0199</li>
<li class="mt-4 flex gap-4">
<a class="text-gray-400 hover:text-accent transition-colors" href="#">IG</a>
<a class="text-gray-400 hover:text-accent transition-colors" href="#">LI</a>
<a class="text-gray-400 hover:text-accent transition-colors" href="#">WA</a>
</li>
</ul>
</div>
</div>
<div class="max-w-[1440px] mx-auto px-6 lg:px-12 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-wider">
<p>© 2024 ArsitekPro Konstruksi. All rights reserved.</p>
<div class="flex gap-6 mt-4 md:mt-0">
<a class="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a class="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>
</body></html>


## 4. Pricing & Estimation (The Blueprint)

<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Pricing &amp; Estimation | ArsitekPro</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&amp;family=Playfair+Display:ital,wght@0,400..900;1,400..900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#edbc1d",
                        "background-light": "#f8f9fa",
                        "background-dark": "#221e10",
                        "surface-light": "#ffffff",
                        "surface-dark": "#2c281a",
                        "text-main": "#1b180d",
                        "text-muted": "#64748b",
                        "slate-900": "#1e293b",
                    },
                    fontFamily: {
                        "display": ["Playfair Display", "serif"],
                        "body": ["Manrope", "sans-serif"],
                    },
                    borderRadius: {
                        "DEFAULT": "4px",
                        "sm": "2px",
                        "md": "4px",
                        "lg": "8px",
                        "xl": "12px",
                    },
                    boxShadow: {
                        "soft": "0 20px 40px -12px rgba(30, 41, 59, 0.08)",
                        "elevated": "0 25px 50px -12px rgba(30, 41, 59, 0.15)",
                    }
                },
            },
        }
    </script>
<style>
        /* Custom Range Slider Styling */
        input[type=range] {
            -webkit-appearance: none; 
            background: transparent; 
        }
        
        input[type=range]::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 24px;
            width: 24px;
            border-radius: 50%;
            background: #1e293b; /* Slate 900 */
            cursor: pointer;
            margin-top: -10px; 
            box-shadow: 0 2px 6px rgba(0,0,0,0.2);
            border: 2px solid #edbc1d;
        }

        input[type=range]::-moz-range-thumb {
            height: 24px;
            width: 24px;
            border-radius: 50%;
            background: #1e293b;
            cursor: pointer;
            border: 2px solid #edbc1d;
            box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }

        input[type=range]::-webkit-slider-runnable-track {
            width: 100%;
            height: 4px;
            cursor: pointer;
            background: #e2e8f0;
            border-radius: 2px;
        }
        
        input[type=range]:focus::-webkit-slider-runnable-track {
            background: #e2e8f0;
        }

        /* Hide scrollbar for clean UI */
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark font-body antialiased min-h-screen flex flex-col">
<!-- Navbar -->
<header class="sticky top-0 z-50 w-full border-b border-[#f3f0e7] bg-white/90 backdrop-blur-md dark:bg-background-dark/90 dark:border-white/10 transition-all duration-300">
<div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
<div class="flex items-center gap-3 text-slate-900 dark:text-white">
<div class="size-8 text-primary">
<span class="material-symbols-outlined text-4xl">architecture</span>
</div>
<h1 class="font-display text-xl font-bold tracking-tight">ArsitekPro</h1>
</div>
<nav class="hidden md:flex items-center gap-8">
<a class="text-xs font-medium uppercase tracking-[0.15em] text-slate-900 hover:text-primary dark:text-white transition-colors" href="#">The Atelier</a>
<a class="text-xs font-medium uppercase tracking-[0.15em] text-slate-900 hover:text-primary dark:text-white transition-colors" href="#">The Craft</a>
<a class="text-xs font-medium uppercase tracking-[0.15em] text-slate-900 hover:text-primary dark:text-white transition-colors" href="#">The Gallery</a>
<a class="text-xs font-medium uppercase tracking-[0.15em] text-primary dark:text-primary transition-colors" href="#">The Blueprint</a>
</nav>
<button class="hidden md:flex items-center justify-center rounded bg-slate-900 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-transform hover:scale-[1.02] hover:bg-slate-800 dark:bg-primary dark:text-slate-900">
                Book Consultation
            </button>
<!-- Mobile Menu Icon -->
<button class="md:hidden text-slate-900 dark:text-white">
<span class="material-symbols-outlined">menu</span>
</button>
</div>
</header>
<main class="flex-grow">
<!-- Hero Section -->
<section class="relative overflow-hidden bg-background-light pt-20 pb-16 lg:pt-32 lg:pb-24 dark:bg-background-dark">
<div class="mx-auto max-w-3xl px-6 text-center lg:px-8">
<h2 class="font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl dark:text-white mb-6">
                    Transparent estimation for <span class="text-primary italic">discerning</span> clients.
                </h2>
<p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300 font-light">
                    The Blueprint offers a clear view into the investment required for your vision. No hidden costs, just precise architectural planning.
                </p>
</div>
</section>
<!-- Calculator Section -->
<section class="relative z-10 -mt-8 px-6 lg:px-8 pb-24">
<div class="mx-auto max-w-5xl rounded-xl bg-surface-light p-8 shadow-elevated ring-1 ring-slate-900/5 dark:bg-surface-dark dark:ring-white/10 lg:p-12">
<div class="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-2">
<!-- Left: Inputs -->
<div class="flex flex-col gap-8">
<div>
<div class="flex items-center justify-between mb-4">
<label class="block text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white" for="area-slider">Area Size</label>
<span class="font-display text-2xl font-medium text-slate-900 dark:text-primary" id="area-display">120 m²</span>
</div>
<div class="relative h-6 w-full flex items-center">
<div class="absolute w-full h-1 bg-slate-200 rounded-full dark:bg-slate-700"></div>
<div class="absolute h-1 bg-primary rounded-full" style="width: 40%"></div>
<input class="absolute w-full h-6 opacity-0 cursor-pointer z-10" id="area-slider" max="500" min="50" type="range" value="120"/>
<!-- Visible Thumb (simulated position) -->
<div class="absolute h-6 w-6 rounded-full bg-slate-900 border-2 border-primary shadow-md pointer-events-none" style="left: 40%; transform: translateX(-50%);"></div>
</div>
<div class="flex justify-between mt-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
<span>50 m²</span>
<span>500 m²</span>
</div>
</div>
<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
<div class="relative">
<label class="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 dark:text-slate-400" for="project-type">Project Type</label>
<div class="relative">
<select class="block w-full appearance-none rounded border-slate-200 bg-slate-50 py-3 px-4 pr-10 text-slate-900 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white sm:text-sm" id="project-type">
<option>Residential Renovation</option>
<option>New Build</option>
<option>Commercial Fit-out</option>
<option>Industrial</option>
</select>
<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
<span class="material-symbols-outlined">expand_more</span>
</div>
</div>
</div>
<div class="relative">
<label class="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 dark:text-slate-400" for="finish-grade">Finish Grade</label>
<div class="relative">
<select class="block w-full appearance-none rounded border-slate-200 bg-slate-50 py-3 px-4 pr-10 text-slate-900 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white sm:text-sm" id="finish-grade">
<option>Standard</option>
<option selected="">Premium</option>
<option>Luxury Bespoke</option>
</select>
<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
<span class="material-symbols-outlined">expand_more</span>
</div>
</div>
</div>
</div>
</div>
<!-- Right: Output -->
<div class="flex flex-col justify-center rounded-lg bg-slate-50 p-8 text-center dark:bg-slate-800/50 lg:p-10 border border-slate-100 dark:border-slate-700">
<p class="mb-2 text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">Estimated Project Investment</p>
<div class="my-4 flex items-baseline justify-center gap-1">
<span class="font-display text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">IDR 450</span>
<span class="text-xl font-medium text-slate-500 dark:text-slate-400">jt</span>
<span class="mx-2 text-3xl font-light text-slate-300">-</span>
<span class="font-display text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">520</span>
<span class="text-xl font-medium text-slate-500 dark:text-slate-400">jt</span>
</div>
<p class="text-sm text-slate-500 dark:text-slate-400 italic">
                            *Estimate only. Subject to detailed site survey and material selection.
                        </p>
<button class="mt-8 w-full rounded bg-primary py-3.5 px-4 text-sm font-bold uppercase tracking-wide text-slate-900 shadow-lg shadow-primary/20 hover:bg-[#d9ac1b] transition-all">
                            Save Estimate
                        </button>
</div>
</div>
</div>
</section>
<!-- Pricing Tiers -->
<section class="bg-background-light pb-24 px-6 lg:px-8 dark:bg-background-dark">
<div class="mx-auto max-w-7xl">
<div class="text-center mb-16">
<h3 class="font-display text-3xl font-semibold text-slate-900 dark:text-white">Service Packages</h3>
<p class="mt-4 text-slate-600 dark:text-slate-400">Choose the level of engagement that suits your project needs.</p>
</div>
<div class="grid max-w-lg grid-cols-1 gap-8 mx-auto lg:max-w-none lg:grid-cols-3 lg:items-start">
<!-- Essential Tier -->
<div class="flex flex-col rounded-lg bg-surface-light p-8 shadow-soft ring-1 ring-slate-200 dark:bg-surface-dark dark:ring-slate-700/50 hover:shadow-lg transition-shadow duration-300">
<h4 class="font-display text-2xl font-bold text-slate-900 dark:text-white">The Essential</h4>
<p class="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">Perfect for straightforward renovations.</p>
<p class="mt-6 flex items-baseline gap-x-1">
<span class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Start 3.5jt</span>
<span class="text-sm font-semibold leading-6 text-slate-500 dark:text-slate-400">/m²</span>
</p>
<ul class="mt-8 space-y-4 text-sm leading-6 text-slate-600 dark:text-slate-300" role="list">
<li class="flex gap-x-3">
<span class="material-symbols-outlined text-primary text-lg">check</span>
                                2D Layout Planning
                            </li>
<li class="flex gap-x-3">
<span class="material-symbols-outlined text-primary text-lg">check</span>
                                Standard Material Selection
                            </li>
<li class="flex gap-x-3">
<span class="material-symbols-outlined text-primary text-lg">check</span>
                                Basic MEP Assessment
                            </li>
<li class="flex gap-x-3 text-slate-400 dark:text-slate-600">
<span class="material-symbols-outlined text-lg">close</span>
                                3D Visualization
                            </li>
</ul>
<a aria-describedby="tier-essential" class="mt-8 block rounded border border-slate-200 px-3 py-2.5 text-center text-sm font-bold uppercase leading-6 text-slate-900 hover:bg-slate-50 hover:border-slate-300 dark:border-slate-600 dark:text-white dark:hover:bg-slate-800 transition-colors" href="#">Choose Plan</a>
</div>
<!-- Signature Tier (Highlighted) -->
<div class="relative flex flex-col rounded-lg bg-surface-light p-8 shadow-elevated ring-1 ring-slate-200 dark:bg-surface-dark dark:ring-slate-700/50 lg:scale-105 lg:z-10 border-t-4 border-t-primary">
<div class="absolute -top-10 left-1/2 -translate-x-1/2 rounded-full bg-slate-900 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-primary shadow-sm dark:bg-white dark:text-slate-900">
                            Most Popular
                        </div>
<h4 class="font-display text-2xl font-bold text-slate-900 dark:text-white">The Signature</h4>
<p class="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">Full architectural service for custom homes.</p>
<p class="mt-6 flex items-baseline gap-x-1">
<span class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Start 5.2jt</span>
<span class="text-sm font-semibold leading-6 text-slate-500 dark:text-slate-400">/m²</span>
</p>
<ul class="mt-8 space-y-4 text-sm leading-6 text-slate-600 dark:text-slate-300" role="list">
<li class="flex gap-x-3">
<span class="material-symbols-outlined text-primary text-lg">check</span>
                                Comprehensive 3D Design
                            </li>
<li class="flex gap-x-3">
<span class="material-symbols-outlined text-primary text-lg">check</span>
                                Premium Material Sourcing
                            </li>
<li class="flex gap-x-3">
<span class="material-symbols-outlined text-primary text-lg">check</span>
                                Full Structural Analysis
                            </li>
<li class="flex gap-x-3">
<span class="material-symbols-outlined text-primary text-lg">check</span>
                                Dedicated Project Manager
                            </li>
<li class="flex gap-x-3">
<span class="material-symbols-outlined text-primary text-lg">check</span>
                                Detailed Lighting Plan
                            </li>
</ul>
<a aria-describedby="tier-signature" class="mt-8 block rounded bg-slate-900 px-3 py-3 text-center text-sm font-bold uppercase leading-6 text-white shadow-sm hover:bg-slate-800 dark:bg-primary dark:text-slate-900 dark:hover:bg-[#d9ac1b] transition-all" href="#">Choose Plan</a>
</div>
<!-- Bespoke Tier -->
<div class="flex flex-col rounded-lg bg-surface-light p-8 shadow-soft ring-1 ring-slate-200 dark:bg-surface-dark dark:ring-slate-700/50 hover:shadow-lg transition-shadow duration-300">
<h4 class="font-display text-2xl font-bold text-slate-900 dark:text-white">The Bespoke</h4>
<p class="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">Luxury execution without compromise.</p>
<p class="mt-6 flex items-baseline gap-x-1">
<span class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Start 8.5jt</span>
<span class="text-sm font-semibold leading-6 text-slate-500 dark:text-slate-400">/m²</span>
</p>
<ul class="mt-8 space-y-4 text-sm leading-6 text-slate-600 dark:text-slate-300" role="list">
<li class="flex gap-x-3">
<span class="material-symbols-outlined text-primary text-lg">check</span>
                                VR Walkthroughs
                            </li>
<li class="flex gap-x-3">
<span class="material-symbols-outlined text-primary text-lg">check</span>
                                Imported Luxury Materials
                            </li>
<li class="flex gap-x-3">
<span class="material-symbols-outlined text-primary text-lg">check</span>
                                Smart Home Integration
                            </li>
<li class="flex gap-x-3">
<span class="material-symbols-outlined text-primary text-lg">check</span>
                                Concierge Post-Handover
                            </li>
</ul>
<a aria-describedby="tier-bespoke" class="mt-8 block rounded border border-slate-200 px-3 py-2.5 text-center text-sm font-bold uppercase leading-6 text-slate-900 hover:bg-slate-50 hover:border-slate-300 dark:border-slate-600 dark:text-white dark:hover:bg-slate-800 transition-colors" href="#">Choose Plan</a>
</div>
</div>
</div>
</section>
<!-- Bottom CTA -->
<section class="bg-slate-50 py-16 text-center dark:bg-slate-900">
<div class="mx-auto max-w-3xl px-6">
<h3 class="font-display text-2xl font-medium text-slate-900 dark:text-white">Need a custom quote for a complex project?</h3>
<div class="mt-8 flex justify-center">
<button class="flex min-w-[200px] cursor-pointer items-center justify-center rounded bg-primary px-8 py-3 text-sm font-bold uppercase tracking-wider text-slate-900 transition-transform hover:scale-105 hover:bg-[#d9ac1b]">
                        Book Consultation
                    </button>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-slate-900 py-12 text-white dark:bg-black">
<div class="mx-auto max-w-7xl px-6 lg:px-8">
<div class="flex flex-col items-center justify-between gap-6 md:flex-row">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary">architecture</span>
<span class="font-display text-lg font-bold">ArsitekPro</span>
</div>
<div class="flex gap-8 text-sm text-slate-400">
<a class="hover:text-white transition-colors" href="#">Privacy</a>
<a class="hover:text-white transition-colors" href="#">Terms</a>
<a class="hover:text-white transition-colors" href="#">Contact</a>
</div>
<p class="text-xs text-slate-500">© 2024 ArsitekPro Konstruksi. All rights reserved.</p>
</div>
</div>
</footer>
</body></html>