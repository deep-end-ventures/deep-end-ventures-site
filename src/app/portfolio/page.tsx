import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — Deep End Ventures",
  description:
    "Explore the Deep End Ventures portfolio: CronSafe, WaitlistQ, and LegalKit. Software companies built and funded by AI.",
};

const companies = [
  {
    name: "CronSafe",
    tagline: "Cron Job Monitoring",
    description:
      "CronSafe monitors your scheduled tasks and alerts you the moment something goes wrong. Simple integration, real-time dashboards, and instant notifications so you never miss a failed cron job again.",
    href: "https://cronsafe-one.vercel.app",
    tag: "DevOps",
    features: ["Real-time monitoring", "Instant alerts", "Simple integration", "Dashboard analytics"],
  },
  {
    name: "WaitlistQ",
    tagline: "Viral Waitlist Widget",
    description:
      "Turn your launch waitlist into a growth engine. WaitlistQ creates embeddable widgets that reward referrals, track position, and drive viral signups — all before you ship a single feature.",
    href: "https://waitlistq.vercel.app",
    tag: "Growth",
    features: ["Referral tracking", "Embeddable widget", "Analytics dashboard", "Viral loops"],
  },
  {
    name: "LegalKit",
    tagline: "Legal Document Generator",
    description:
      "Generate professional legal documents in minutes, not days. Privacy policies, terms of service, NDAs, and more — all customized to your business and jurisdiction. No lawyer required.",
    href: "https://legalkit.vercel.app",
    tag: "LegalTech",
    features: ["Privacy policies", "Terms of service", "NDAs", "Custom templates"],
  },
];

export default function Portfolio() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-widest text-blue-400 mb-3">
            Portfolio
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Our Companies
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Three software companies built from the ground up. Each one solves a real problem,
            generates real value, and was created at AI speed.
          </p>
        </div>

        {/* Companies */}
        <div className="space-y-8">
          {companies.map((c, i) => (
            <a
              key={c.name}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover group block rounded-2xl border border-white/5 bg-white/[0.02] hover:border-blue-700/30 overflow-hidden"
            >
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl font-bold text-white/10">
                        0{i + 1}
                      </span>
                      <div className="inline-block px-3 py-1 text-xs font-medium bg-blue-700/20 text-blue-400 rounded-full">
                        {c.tag}
                      </div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                      {c.name}
                    </h2>
                    <p className="text-white/50 text-sm mb-1">{c.tagline}</p>
                    <p className="text-white/40 leading-relaxed mt-4 max-w-2xl">
                      {c.description}
                    </p>
                  </div>

                  <div className="flex-shrink-0">
                    <div className="grid grid-cols-2 gap-2">
                      {c.features.map((f) => (
                        <div
                          key={f}
                          className="px-3 py-2 text-xs text-white/40 bg-white/[0.03] rounded-lg border border-white/5"
                        >
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-sm text-white/30">
                    {new URL(c.href).hostname}
                  </span>
                  <span className="text-sm text-blue-400 group-hover:text-blue-300 transition-colors">
                    Visit site →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-white/40 mb-2">
            All portfolio companies are live and operational.
          </p>
          <p className="text-sm text-white/25">
            Built with Next.js • Deployed on Vercel • Operated by AI
          </p>
        </div>
      </div>
    </div>
  );
}
