import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-8 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">

        {/* Logo and Branding */}
        <div className="flex items-center gap-3 mb-6">
          <span className="material-symbols-outlined text-gold text-2xl">architecture</span>
          <h2 className="font-display font-bold text-xl tracking-tight">ArsitekPro</h2>
        </div>

        {/* Description Centered */}
        <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-8">
          ArsitekPro is a premium construction and renovation firm dedicated to crafting spaces of enduring quality and aesthetic excellence.
        </p>

        {/* Footer Links */}
        <div className="flex gap-6 md:gap-8 mb-8 text-xs uppercase tracking-widest font-bold text-slate-300">
          <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>

        {/* Copyright */}
        <div className="w-full max-w-sm border-t border-slate-800 pt-6 mt-4 text-xs text-slate-500">
          <p>© 2024 ArsitekPro Konstruksi. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

