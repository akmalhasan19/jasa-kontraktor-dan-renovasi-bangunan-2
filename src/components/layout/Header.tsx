"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClasses = isScrolled ? "scrolled-nav" : "transparent-nav";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClasses}`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined menu-icon text-3xl">architecture</span>
          <Link href="/" className="logo-text font-display font-bold text-2xl tracking-tight">ArsitekPro</Link>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <Link href="#atelier" className="nav-link text-sm font-medium uppercase tracking-[0.15em] hover:text-gold transition-colors">The Atelier</Link>
          <Link href="#craft" className="nav-link text-sm font-medium uppercase tracking-[0.15em] hover:text-gold transition-colors">The Craft</Link>
          <Link href="#gallery" className="nav-link text-sm font-medium uppercase tracking-[0.15em] hover:text-gold transition-colors">The Gallery</Link>
          <Link href="#blueprint" className="nav-link text-sm font-medium uppercase tracking-[0.15em] hover:text-gold transition-colors">The Blueprint</Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:flex bg-gold hover:bg-[#c5a02e] text-slate-900 px-6 py-3 rounded font-bold text-sm tracking-wide transition-colors">
            Book Consultation
          </button>
          <button
            className="md:hidden text-inherit menu-icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-200 shadow-lg py-4 px-6 flex flex-col gap-4">
          <Link href="#atelier" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-900 text-sm font-medium uppercase tracking-[0.15em] hover:text-gold transition-colors">The Atelier</Link>
          <Link href="#craft" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-900 text-sm font-medium uppercase tracking-[0.15em] hover:text-gold transition-colors">The Craft</Link>
          <Link href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-900 text-sm font-medium uppercase tracking-[0.15em] hover:text-gold transition-colors">The Gallery</Link>
          <Link href="#blueprint" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-900 text-sm font-medium uppercase tracking-[0.15em] hover:text-gold transition-colors">The Blueprint</Link>
          <button className="w-full bg-gold hover:bg-[#c5a02e] text-slate-900 px-6 py-3 rounded font-bold text-sm tracking-wide transition-colors mt-2">
            Book Consultation
          </button>
        </div>
      )}
    </nav>
  );
}

