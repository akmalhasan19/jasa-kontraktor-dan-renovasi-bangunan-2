import Link from "next/link";

export function Footer() {
  return (
    <>
      {/* Mobile Footer (unchanged for mobile view, hidden on desktop) */}
      <footer className="bg-slate-900 text-white pt-12 pb-8 border-t border-white/10 lg:hidden">
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

      {/* Desktop Footer (hidden on mobile) */}
      <footer className="hidden lg:block bg-slate-900 text-white py-12 border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 text-white mb-6">
              <span className="material-symbols-outlined text-gold text-3xl">architecture</span>
              <h2 className="font-display text-2xl font-bold tracking-tight">ArsitekPro</h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Crafting legacies in concrete and light. We build spaces that honor the past while embracing the future of living.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg mb-4">Studio</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link className="hover:text-gold transition-colors" href="#">The Atelier</Link></li>
              <li><Link className="hover:text-gold transition-colors" href="#">The Craft</Link></li>
              <li><Link className="hover:text-gold transition-colors" href="#">The Gallery</Link></li>
              <li><Link className="hover:text-gold transition-colors" href="#">The Team</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-gold text-xs">mail</span> hello@arsitekpro.com</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-gold text-xs">call</span> +62 21 555 0199</li>
              <li className="mt-4 flex gap-4">
                <Link className="text-slate-400 hover:text-gold transition-colors" href="#">IG</Link>
                <Link className="text-slate-400 hover:text-gold transition-colors" href="#">LI</Link>
                <Link className="text-slate-400 hover:text-gold transition-colors" href="#">WA</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 uppercase tracking-wider">
          <p>© 2024 ArsitekPro Konstruksi. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link className="hover:text-white transition-colors" href="#">Privacy Policy</Link>
            <Link className="hover:text-white transition-colors" href="#">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </>
  );
}

