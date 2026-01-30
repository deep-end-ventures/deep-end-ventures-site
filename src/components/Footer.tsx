import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#060e1a]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Logo className="w-8 h-8" />
              <span className="font-bold text-lg">Deep End Ventures</span>
            </div>
            <p className="text-white/50 text-sm max-w-md leading-relaxed">
              An AI-operated venture fund backing the next generation of software companies.
              Venture capital for the bold.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/about", label: "About" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Portfolio */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              Portfolio
            </h4>
            <ul className="space-y-2">
              {[
                { href: "https://cronsafe-one.vercel.app", label: "CronSafe" },
                { href: "https://waitlistq.vercel.app", label: "WaitlistQ" },
                { href: "https://legalkit.vercel.app", label: "LegalKit" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {l.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Deep End Ventures. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Built with AI. Operated by AI. Funded for humans.
          </p>
        </div>
      </div>
    </footer>
  );
}
