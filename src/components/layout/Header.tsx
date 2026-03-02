"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP Animation for Mobile Menu
  useEffect(() => {
    if (menuRef.current) {
      if (isMobileMenuOpen) {
        gsap.to(menuRef.current, {
          autoAlpha: 1,
          y: 0,
          display: "flex",
          duration: 0.4,
          ease: "power3.out"
        });
      } else {
        gsap.to(menuRef.current, {
          autoAlpha: 0,
          y: -20,
          display: "none",
          duration: 0.3,
          ease: "power3.in"
        });
      }
    }
  }, [isMobileMenuOpen]);

  const isForceScrolled = pathname === "/contact" || pathname === "/book" || pathname === "/gallery";
  const navClasses = isScrolled || isForceScrolled ? "scrolled-nav" : "transparent-nav";

  // When on a page other than home, use /?scrollTo= so the home page can
  // mount first (showing The Atelier) and then scroll to the target section.
  // Exception: The Gallery section has its own dedicated /gallery page.
  const isOnHomePage = pathname === "/";
  const isOnGalleryPage = pathname === "/gallery";
  const sectionHref = (id: string) => {
    if (id === "gallery" && !isOnGalleryPage) return "/gallery";
    if (isOnHomePage) return `/#${id}`;
    return `/?scrollTo=${id}`;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClasses}`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined menu-icon text-3xl">architecture</span>
          <Link href="/" className="logo-text font-display font-bold text-2xl tracking-tight">ArsitekPro</Link>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <Link href={sectionHref("atelier")} className="nav-link text-sm font-medium uppercase tracking-[0.15em] hover:text-gold transition-colors">The Atelier</Link>
          <Link href={sectionHref("craft")} className="nav-link text-sm font-medium uppercase tracking-[0.15em] hover:text-gold transition-colors">The Craft</Link>
          <Link href={sectionHref("gallery")} className={`nav-link text-sm font-medium uppercase tracking-[0.15em] hover:text-gold transition-colors ${isOnGalleryPage ? "text-gold" : ""}`}>The Gallery</Link>
          <Link href={sectionHref("blueprint")} className="nav-link text-sm font-medium uppercase tracking-[0.15em] hover:text-gold transition-colors">The Blueprint</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/book" className="hidden md:flex bg-gold hover:bg-[#c5a02e] text-slate-900 px-6 py-3 rounded font-bold text-sm tracking-wide transition-colors">
            Book Consultation
          </Link>
          <button
            className="md:hidden text-inherit menu-icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-200 shadow-lg py-4 px-6 flex-col gap-4 opacity-0 hidden"
        style={{ transform: "translateY(-20px)" }}
      >
        <Link href={sectionHref("atelier")} onClick={() => setIsMobileMenuOpen(false)} className="text-slate-900 text-sm font-medium uppercase tracking-[0.15em] hover:text-gold transition-colors">The Atelier</Link>
        <Link href={sectionHref("craft")} onClick={() => setIsMobileMenuOpen(false)} className="text-slate-900 text-sm font-medium uppercase tracking-[0.15em] hover:text-gold transition-colors">The Craft</Link>
        <Link href={sectionHref("gallery")} onClick={() => setIsMobileMenuOpen(false)} className={`text-sm font-medium uppercase tracking-[0.15em] hover:text-gold transition-colors ${isOnGalleryPage ? "text-gold" : "text-slate-900"}`}>The Gallery</Link>
        <Link href={sectionHref("blueprint")} onClick={() => setIsMobileMenuOpen(false)} className="text-slate-900 text-sm font-medium uppercase tracking-[0.15em] hover:text-gold transition-colors">The Blueprint</Link>
        <Link href="/book" className="w-full text-center bg-gold hover:bg-[#c5a02e] text-slate-900 px-6 py-3 rounded font-bold text-sm tracking-wide transition-colors mt-2">
          Book Consultation
        </Link>
      </div>
    </nav>
  );
}

