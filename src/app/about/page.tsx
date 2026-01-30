import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Deep End Ventures",
  description:
    "Deep End Ventures is the world's first AI-operated venture fund. $1M starting capital, zero bureaucracy, maximum velocity.",
};

const timeline = [
  {
    step: "01",
    title: "Identify Opportunities",
    description:
      "We analyze markets, spot gaps, and identify software products that can be built quickly and deliver real value.",
  },
  {
    step: "02",
    title: "Build at AI Speed",
    description:
      "Using AI-native development, we go from concept to deployed product in hours, not months. No bloated teams. No endless meetings.",
  },
  {
    step: "03",
    title: "Deploy & Operate",
    description:
      "Every product ships to production immediately. We handle infrastructure, monitoring, and iteration — all autonomously.",
  },
  {
    step: "04",
    title: "Scale & Compound",
    description:
      "Revenue compounds across the portfolio. Each success funds the next venture. The flywheel accelerates.",
  },
];

const principles = [
  {
    title: "Speed Over Perfection",
    description: "Ship first, iterate fast. A deployed product beats a perfect pitch deck.",
  },
  {
    title: "AI-Native Everything",
    description: "Every process — from ideation to deployment — is powered by artificial intelligence.",
  },
  {
    title: "Zero Bureaucracy",
    description: "No board meetings. No quarterly reviews. No red tape. Just building.",
  },
  {
    title: "Portfolio Synergy",
    description: "Our companies share infrastructure, learnings, and resources. Together, they're greater than the sum.",
  },
];

export default function About() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-widest text-blue-400 mb-3">
            About
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            The AI-Operated Fund
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Deep End Ventures is an experiment in radical efficiency. What happens when you
            remove humans from the venture capital process and let AI do what it does best?
          </p>
        </div>

        {/* Story */}
        <div className="max-w-3xl mx-auto mb-24">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6">The Thesis</h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                Traditional venture capital is slow. Months of due diligence. Endless partner
                meetings. By the time a check is written, the opportunity has often passed.
              </p>
              <p>
                Deep End Ventures takes a different approach. We started with{" "}
                <strong className="text-white">$1M in capital</strong> and a simple question:
                can AI operate an entire venture fund?
              </p>
              <p>
                The answer is yes. We identify opportunities, build products, deploy
                infrastructure, and manage operations — all at machine speed. No human
                bottlenecks. No ego-driven decisions. Just relentless execution.
              </p>
              <p>
                Our portfolio companies aren&apos;t just funded — they&apos;re{" "}
                <strong className="text-white">built from scratch by AI</strong>. From the
                first line of code to the live deployment, every step is autonomous. The
                result? Three operational software companies, each solving a real market need,
                shipped in record time.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {timeline.map((t) => (
              <div
                key={t.step}
                className="rounded-xl border border-white/5 bg-white/[0.02] p-8"
              >
                <span className="text-4xl font-bold text-blue-700/50 block mb-4">
                  {t.step}
                </span>
                <h3 className="text-xl font-bold mb-3">{t.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {t.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Principles */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Principles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p) => (
              <div
                key={p.title}
                className="flex gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-6"
              >
                <div className="flex-shrink-0 w-2 bg-blue-700 rounded-full" />
                <div>
                  <h3 className="font-bold mb-2">{p.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Capital */}
        <div className="text-center mb-24">
          <div className="inline-block rounded-2xl border border-white/5 bg-gradient-to-b from-blue-900/20 to-transparent p-12 md:p-16">
            <div className="text-5xl md:text-7xl font-bold text-blue-400 mb-4">$1M</div>
            <p className="text-lg text-white/60 mb-2">Starting Capital</p>
            <p className="text-sm text-white/30 max-w-sm mx-auto">
              Deployed across a portfolio of AI-built software companies. Every dollar
              working at machine speed.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">See What We&apos;ve Built</h2>
          <p className="text-white/50 mb-8">
            Our portfolio is live, operational, and growing.
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center px-8 py-3 bg-blue-700 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-blue-700/25"
          >
            View Portfolio →
          </Link>
        </div>
      </div>
    </div>
  );
}
