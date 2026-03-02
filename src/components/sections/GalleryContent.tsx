"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────

const CATEGORIES = ["All Projects", "Residential", "Commercial", "Interior", "Renovasi"] as const;
type Category = (typeof CATEGORIES)[number];

interface GalleryItem {
  id: number;
  title: string;
  subtitle: string;
  category: Exclude<Category, "All Projects">;
  year: string;
  image: string;
  /** Tailwind height/aspect class applied directly to <img> */
  imgClass: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: "The Menteng House",
    subtitle: "Jakarta Pusat",
    category: "Residential",
    year: "2023",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCeDyi4LxX1gTtGQ8kla0QXOREQu1q8AMxSO-KnOExJIAqbwtB-DhF40Zu_Rmd2AF4_gWxkAl_xIl3d4SQQa-ga1RNbj877F1q5BfTru6YiYJEhbr0cB408s98QGgnGPGu-Cx_rp4vbgclwCIOIr5ESnkZ4IO3UE_56Iaf2olq6ZPchxDkFJkO5sQaHKLudUxY3TEYiFy9Vc3gXNpeNODiS-86yFTyMlUKxEPTXME2_DGNJczDCseZLQNPk7WjcbSeefe9tw4QohXFh",
    imgClass: "w-full h-auto",
  },
  {
    id: 2,
    title: "Kemang Loft",
    subtitle: "South Jakarta",
    category: "Interior",
    year: "2024",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB3apEIwVoWYdUZvQmdwPGMNgsq64ooxmnjIcCvwfnCT8T-zL-wMmduHhTQ33C6yHraMRZKZUgutimy_CVvGvsFYUzqcfiV4jeSFCE4CSYAbbt5dc1GQ2qctUbrPqrq5-AjB242g9aXkrfZ8H2MSD0LOrdTmA9aj5RyCxdNF6HrsVMwDdMdgGc2wHSdUgncu0NKEarxdEzg_dvDsj1ROyR-nuEbErWsecOaqi5-zKsGCXlDwF36a5HjgWWbZKH0MV2o1raYTLV-NY7x",
    imgClass: "w-full aspect-square object-cover",
  },
  {
    id: 3,
    title: "Skyline Tower Lobby",
    subtitle: "SCBD, Jakarta",
    category: "Commercial",
    year: "2022",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBNrmvXgQN5jiSuLAK-jBuiQzwzYgf5CSv8hoUKp2G8s9EW4xcvBj8kGOHJDEqwKnIh-1GtVm0YeGNzNwvU0RLSNlT7pV-c3mAq41SIfCSPXpBiuN3BX0ZwfGMXWGztb-IN-YXE4CzicddGb0b3ta6hkox4QnBMCocVXlElYtj_ReNBfyPZgCz3xMidiq3h-gboQoXfGduLGWIGDCJsKTphoUtm0KNkw2Df5GR2uKX4jFBTk-Xrs-0-BXpQfmRfqrl1JjPP0DjQodxw",
    imgClass: "w-full h-[520px] object-cover",
  },
  {
    id: 4,
    title: "Marble Sanctuary",
    subtitle: "Pondok Indah",
    category: "Renovasi",
    year: "2023",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBvdf5tw3Lygy_1N2aEetr-kqWOUyggkVUve1JIsBHkOYRH-l64HfUHYVR3H0GnP61YmS2VCxHquT1kxX66Fmu0zkfER47cZtQ7hPBtFYNnX9usnFQg5TFjT0rvImCK53fq_tq2J5W4VmQIE2D3w0qgwfounvxsqMZHSeX88CinrgR3KpFOiVMUpBpahTrKJij1WOGPG5v4pj_lDMfGW-z7GoIVIYi1c72Efg2CRxTof1hMQIEWwRQ4hlalcxXqXLpgmltFZ2aXFX44",
    imgClass: "w-full aspect-[4/3] object-cover",
  },
  {
    id: 5,
    title: "The Old Post Restoration",
    subtitle: "Kota Tua",
    category: "Commercial",
    year: "2021",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA0xjrhrDU2QOCLpww5Vu91NS5m4UxWA0Qis-j2ty0JZdWoUdRZ14zwHcHM_wchM7b__uMvBOXnJBrbbb2Ux8wdeiwvhdJ1hUFs4m2Q-qHrR7Luvz1Sw2Si88c9MJkCXXVlJ-9dVvQVu67Yj7afuFvb6lM7wMJnzlieKDBnRdSMzftGMuVYIzi55c47D7-pjV3gn2CRF0R_7QTEmahno2WetExcC08Bh6MQ-7oqYPFqvI_pcqpmWIlVoMWy81aPHLueAp_IJYuAyNNA",
    imgClass: "w-full aspect-square object-cover",
  },
  {
    id: 6,
    title: "Tech Hub BSD",
    subtitle: "BSD City",
    category: "Commercial",
    year: "2023",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAZFdrx60vfMiEPpFPckgLqPnsIKwcEc7ttQyy9AMc33iihRbBcLUPBFEIKKllfV8bQZJ15QxPDgTYzkOTVYnAGjzvLwiHaIhEDrnheBbZ5PJRMEHDviyiWO5UN3UsGRxjXYXYr1zsJbGTmE4WallHyBy14ulm03nTTADmPaPFMTfeiT211pU0uWop6mC1ls8yu3DpodV0Y_fCYYKbcqtp_UyIPI74xBlwlNPHjJfxBRTHwFJ5IfhG205GojXZIRYItjsPNtOeCGY-6",
    imgClass: "w-full h-[420px] object-cover",
  },
  {
    id: 7,
    title: "Serene Japandi",
    subtitle: "Bintaro",
    category: "Interior",
    year: "2024",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAOVYFSqbngjlJR_hbBqQWLWbZcKUplhvWD0VbFIhtb4GAVYgVxp5kPduIwa3PHBZNtPR2oXMjYvlHmGixX5PWyesGkV9pyqVApL8Em-pnOsllOn27CLivGa6I6uYffnGs3LYGW0aElWONvSTUqZMG5o-_qx8k1Y_p21iDunJchOo9chxOthrv2_4eqKtVkCmzk4omSmsdFYNtX1-7MY8EDPUh_aoeJKCpO2Tr2U4s9rb726T1fTod-zGg2txOSJNU20-X6C",
    imgClass: "w-full aspect-[3/4] object-cover",
  },
  {
    id: 8,
    title: "The Azure Villa",
    subtitle: "Sentul, Bogor",
    category: "Residential",
    year: "2022",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBmeERG5avMMlziUG-iIbnIT9-AP4HYRqnJuDR9VkbvdxQ3Kr3d6yHbk8LwXd5q2Oi0WwLgRbmjuMuhcUZayI2sD6BWbQg4FLOb6KGpjZKMqkmIPFwUThoO4jkdi5Go8s6JzYGg9G8KyTOpl4wZN-Ljig_lA4HT5tuYGHNRAolLckNac3nLbGJkAMLx9mjamStz44PjuW0uqFW5l188wC8MztqJqk6Qa2Kt0yiKyE7de0w0nD4zmlmVMzv_oyn6c_K0yd5BzIzo2CU",
    imgClass: "w-full aspect-[4/3] object-cover",
  },
  {
    id: 9,
    title: "Serenity Heights",
    subtitle: "Kelapa Gading",
    category: "Residential",
    year: "2023",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBXcQQuVutxJ8cxQzRp2qfaMP4ULIAVojq2hJzWYfX95fKUg9_HgN45ROVJZom5G6Ts66-KxQQ0rsstv5FtPwo8lEOKx2FStGe7JUI1n3S_JgJTgYPNz-iR7QH0YPMwexuIzqCwlJtu827_bvgYSqdyFP-BBprNvEvGlf7nqjlzivuUx-G8Nx9SKbeP50wLxjO9AQJZp-Vwwha5LEoRE6o75L8Ln6gUwhdT7LDZM-l0KjCmNbFLnMS-vk9H1BWQY-Mt0aZ_b8ltM38",
    imgClass: "w-full h-auto",
  },
  // ── Load-more batch ──────────────────────────────────────────────────────────
  {
    id: 10,
    title: "The Penthouse Suite",
    subtitle: "SCBD, Jakarta",
    category: "Interior",
    year: "2024",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDVEVAWr-mkKyuxuiYNbl4jMlHCEQwdT6BrtEbLwxF0nvGG0gI1Hxt1O-Jwgd1pPiAPgP79gzoBap-wRnRygKSkOXkA7nAwv2JBbFAhQCKV45Ke5wdpayiQFOimljtIwAfWek3DIgpPmiWGHK5FwsCFNhKp42fbCya9e0Emaat2upqFFpn4omfmlIJ9N_usGHHssxsCqxiSxoZ2IxfgkUWHEu6_UqH2mWiD_AE1ftGXiSl7ZrDj9Sht0Eht0RpWLbDlmKKhcUI-6hE",
    imgClass: "w-full aspect-[21/9] object-cover",
  },
  {
    id: 11,
    title: "Apex HQ",
    subtitle: "Sudirman, Jakarta",
    category: "Commercial",
    year: "2023",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuATWJRomU3FKnd7BpBjV4C81LodLlly3qLuow2gYIkWiHAEucyTet7UqAMJN4fQf0wjyIOO7RyjRl0ukdkDAxeJkQPT2Jq4zHmzpp1nt767gV4D13fxvhchsSyy_4LvmifQoze-P7aTcqWM66C4PmW07kCrLapIc_BeHmwJ3-fdBLhMptoLnJVYGr1O07bpHaRKuOfgmZ7kjYbdbldyk3UerAnE0RQldW3KyE4-q0gw9YN49YNcnGMalDirAIqr_K5Tkmt6grmlqfc",
    imgClass: "w-full aspect-square object-cover",
  },
  {
    id: 12,
    title: "Urban Cube",
    subtitle: "Jakarta Utara",
    category: "Residential",
    year: "2022",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBUkmpto_GnPyG3lgF-NGdExtb2jEuV71GKnl6bOZuk3gKe9YgUHL9z7NvCRvOj0XbUPykGUkbq64YmA0KN71NUo43h6lpfhjv0EGb_1md83z2IHUgzAwqKd02Ptqtr3XCukBviLL_7w9cBVad11O9PuURFRoQRVMzE-eP_KUcKKjzqJKb-K8Y2QRrFvyyxAThuTgyZ1_fJBf1EbjpZBH_TqFkLpOmBxeysMZIHGryH5s5j0yvbwbq8KLOH0GCpzsdQEmE6-NSIPdA",
    imgClass: "w-full h-[380px] object-cover",
  },
  {
    id: 13,
    title: "Oasis Spa",
    subtitle: "Menteng, Jakarta Pusat",
    category: "Renovasi",
    year: "2023",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBFh7LKOeTBHMnHDHTj4eQHdVnKNiRubTIY3eyajjlfMDkMkxU8xWn2Ikd5wvU_2QBR_w0spsDl0B2s4k8H70l1uYgkz0g1zco94x8xcFaYiGke1bUNBB3pIe5KyR8F_xYEXC-dFmqjnf4FgFNjSt6vPwwaD1HEuVs0Lu1s-AW_Nd7mn7KI1aFXxQSsfTV2iMZN1Bxsni1vJ-X_mw8GD3Pl8INo0x-9kCBmjc-NPlL085617GiNe_BHPinJClDPjNdISYJt5t3gwdc",
    imgClass: "w-full aspect-[3/4] object-cover",
  },
];

const PAGE_SIZE = 9;

// ─── Component ────────────────────────────────────────────────────────────────

export function GalleryContent() {
  const [activeCategory, setActiveCategory] = useState<Category>("All Projects");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [sortOpen, setSortOpen] = useState(false);

  const filtered = useMemo(
    () =>
      activeCategory === "All Projects"
        ? GALLERY_ITEMS
        : GALLERY_ITEMS.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleCategoryChange = (cat: Category) => {
    setActiveCategory(cat);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen font-body antialiased">
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 pt-32 pb-12 flex flex-col items-center text-center">
        <span className="inline-block py-1 px-3 border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] tracking-[0.2em] uppercase mb-6 rounded-sm bg-[#D4AF37]/5">
          Selected Works 2020–2024
        </span>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-slate-900 mb-6 leading-tight">
          The Gallery of{" "}
          <span className="italic text-slate-500">Legacies</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl font-light leading-relaxed">
          A curated anthology of spaces where architectural precision meets human aspiration. Each
          project is a testament to the art of enduring design.
        </p>
      </section>

      {/* ── Sticky Filter Bar ─────────────────────────────────────────────── */}
      <section className="w-full sticky top-[72px] z-40 bg-[#F8F9FA]/95 backdrop-blur-sm border-b border-slate-200/60 mb-12">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm tracking-wide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`relative transition-colors ${
                  activeCategory === cat
                    ? "text-slate-900 font-semibold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-[#D4AF37]"
                    : "text-slate-400 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="relative min-w-[160px]">
            <button
              onClick={() => setSortOpen((v) => !v)}
              className="flex items-center justify-between w-full gap-2 text-xs uppercase tracking-widest text-slate-500 hover:text-slate-900 font-medium border border-slate-200 px-4 py-2 bg-white rounded-sm transition-colors"
            >
              <span>Sort: Latest</span>
              <span
                className={`material-symbols-outlined text-base transition-transform duration-200 ${sortOpen ? "rotate-180" : ""}`}
              >
                expand_more
              </span>
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-1 bg-white border border-slate-200 rounded-sm shadow-md z-50 min-w-[160px]">
                {["Latest", "Oldest", "A → Z"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setSortOpen(false)}
                    className="block w-full text-left px-4 py-2 text-xs uppercase tracking-widest text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Masonry Grid ──────────────────────────────────────────────────── */}
      <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 mb-24">
        {visible.length === 0 ? (
          <div className="text-center py-24 text-slate-400">
            <span className="material-symbols-outlined text-5xl mb-4 block">search_off</span>
            <p className="text-lg font-light">No projects found in this category.</p>
          </div>
        ) : (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
            {visible.map((item) => (
              <div
                key={item.id}
                className="break-inside-avoid mb-6 relative group cursor-pointer overflow-hidden rounded-sm"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className={`${item.imgClass} transform group-hover:scale-105 transition-transform duration-700 ease-out`}
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8 border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/50 m-2"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(30,41,59,0.95) 0%, rgba(30,41,59,0.4) 50%, rgba(30,41,59,0) 100%)",
                  }}
                >
                  <span className="text-[#D4AF37] text-xs uppercase tracking-widest mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {item.category} · {item.year}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-white mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 font-light translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Load More ─────────────────────────────────────────────────── */}
        {hasMore && (
          <div className="flex justify-center mt-16">
            <button
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              className="group relative px-8 py-3 bg-transparent border border-slate-300 text-slate-900 text-xs font-bold tracking-widest uppercase hover:border-slate-800 transition-colors duration-300"
            >
              Load More Projects
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-slate-800 transition-all duration-300 group-hover:w-full" />
            </button>
          </div>
        )}

        {!hasMore && visible.length > 0 && (
          <p className="text-center mt-16 text-xs uppercase tracking-widest text-slate-400">
            — All projects shown —
          </p>
        )}
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="w-full bg-slate-900 text-white py-24 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Inspired by what you see?
          </h2>
          <p className="text-slate-300 text-lg mb-10 font-light max-w-2xl mx-auto">
            Every legacy begins with a conversation. Let&apos;s discuss how we can translate your
            vision into a structural masterpiece.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center justify-center h-14 px-8 bg-[#D4AF37] text-slate-900 font-bold tracking-widest uppercase hover:bg-white transition-all duration-300 shadow-lg shadow-black/20 gap-3 group"
          >
            Start Your Project
            <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">
              arrow_forward
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
