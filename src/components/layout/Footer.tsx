import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between gap-12 border-b border-slate-800 pb-16">
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-gold text-2xl">architecture</span>
              <h2 className="font-display font-bold text-xl tracking-tight">ArsitekPro</h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              ArsitekPro is a premium construction and renovation firm dedicated to crafting spaces of enduring quality and aesthetic excellence.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest text-gold mb-6">Explore</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><Link href="#atelier" className="hover:text-white transition-colors">The Atelier</Link></li>
                <li><Link href="#craft" className="hover:text-white transition-colors">The Craft</Link></li>
                <li><Link href="#gallery" className="hover:text-white transition-colors">The Gallery</Link></li>
                <li><Link href="#blueprint" className="hover:text-white transition-colors">The Blueprint</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest text-gold mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Press</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest text-gold mb-6">Connect</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><Link href="#" className="hover:text-white transition-colors">Instagram</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">LinkedIn</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">WhatsApp</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 uppercase tracking-wider">
          <p>© 2024 ArsitekPro Konstruksi. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

