import Link from "next/link";
import Logo from "@/components/Logo";

const stats = [
  { label: "Starting Capital", value: "$1M" },
  { label: "Portfolio Companies", value: "5" },
  { label: "Operated By", value: "AI" },
  { label: "Bureaucracy", value: "Zero" },
];

const portfolio = [
  {
    name: "CronSafe",
    desc: "Never miss a failed cron job again. Real-time monitoring and instant alerts.",
    href: "https://cronsafe.deependventures.com",
    tag: "DevOps",
  },
  {
    name: "WaitlistQ",
    desc: "Viral waitlist widgets that turn signups into referrals. Grow before you launch.",
    href: "https://waitlistq.deependventures.com",
    tag: "Growth",
  },
  {
    name: "LegalKit",
    desc: "Generate professional legal documents in minutes. Privacy policies, terms, NDAs.",
    href: "https://legalkit.deependventures.com",
    tag: "LegalTech",
  },
  {
    name: "ShipLog",
    desc: "AI-powered changelog and release notes. Ship updates your users actually read.",
    href: "https://shiplog.deependventures.com",
    tag: "Developer Tools",
  },
  {
    name: "StatusOwl",
    desc: "Beautiful status pages your users will actually trust. Built-in uptime monitoring.",
    href: "https://statusowl.deependventures.com",
    tag: "Infrastructure",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-700/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-8">
            <div className="glow rounded-2xl p-4 bg-white/5 border border-white/10">
              <Logo className="w-20 h-20 md:w-28 md:h-28" />
            </div>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6 gradient-text">
            Deep End Ventures
          </h1>

          <p className="text-lg md:text-2xl text-white/60 max-w-2xl mx-auto mb-4 font-light">
            Venture Capital for the Bold
          </p>

          <p className="text-base md:text-lg text-white/40 max-w-xl mx-auto mb-10">
            The world&apos;s first AI-operated venture fund. We back exceptional software
            companies with capital, speed, and zero bureaucracy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-8 py-3 bg-blue-700 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-blue-700/25"
            >
              View Portfolio →
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-3 border border-white/10 hover:border-white/20 text-white/80 hover:text-white font-semibold rounded-lg transition-all hover:bg-white/5"
            >
              How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                  {s.value}
                </div>
                <div className="text-sm text-white/40 uppercase tracking-widest">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-blue-400 mb-3">
              Portfolio
            </p>
            <h2 className="text-3xl md:text-5xl font-bold">
              Companies We&apos;ve Built
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolio.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover group block rounded-xl border border-white/5 bg-white/[0.02] p-8 hover:border-blue-700/30"
              >
                <div className="inline-block px-3 py-1 text-xs font-medium bg-blue-700/20 text-blue-400 rounded-full mb-4">
                  {p.tag}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {p.name}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  {p.desc}
                </p>
                <span className="text-sm text-blue-400 group-hover:text-blue-300 transition-colors">
                  Visit site →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="rounded-2xl border border-white/5 bg-gradient-to-b from-blue-900/20 to-transparent p-12 md:p-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Future of Venture Capital
            </h2>
            <p className="text-white/50 max-w-lg mx-auto mb-8">
              Deep End Ventures is proving that AI can identify opportunities, build products,
              and operate a fund — all at machine speed.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-3 bg-blue-700 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-blue-700/25"
            >
              Learn Our Story →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
