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
            <p>© 2026 ArsitekPro Konstruksi. All rights reserved.</p>
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
              <li className="mt-4 flex gap-4 items-center">
                {/* Instagram */}
                <Link href="#" aria-label="Instagram" className="text-slate-400 hover:text-gold transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.851s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.053.014 8.333 0 8.741 0 12c0 3.259.014 3.667.072 4.947.085 1.856.601 3.698 1.942 5.039 1.341 1.341 3.183 1.857 5.039 1.942C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.856-.085 3.698-.601 5.039-1.942 1.341-1.341 1.857-3.183 1.942-5.039.058-1.28.072-1.688.072-4.947 0-3.259-.014-3.667-.072-4.947-.085-1.856-.601-3.698-1.942-5.039C20.645.673 18.803.157 16.947.072 15.667.014 15.259 0 12 0z"/>
                    <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                  </svg>
                </Link>
                {/* LinkedIn */}
                <Link href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-gold transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
                {/* WhatsApp */}
                <Link href="#" aria-label="WhatsApp" className="text-slate-400 hover:text-gold transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 uppercase tracking-wider">
          <p>© 2026 ArsitekPro Konstruksi. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link className="hover:text-white transition-colors" href="#">Privacy Policy</Link>
            <Link className="hover:text-white transition-colors" href="#">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </>
  );
}

