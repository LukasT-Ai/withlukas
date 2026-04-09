import Link from "next/link";
import Navbar from "./navbar";
import Footer from "./footer";

type ServiceFeature = {
  icon: string;
  title: string;
  description: string;
};

type CredStat = {
  value: string;
  label: string;
};

type WhoFor = {
  icon: string;
  title: string;
  description: string;
};

type ServicePageProps = {
  badge: string;
  headline: string;
  subheadline: string;
  intro: string;
  features: ServiceFeature[];
  credStats: CredStat[];
  whoIsItFor: WhoFor[];
  whyUs: string[];
  ctaText: string;
  jsonLd: object;
};

export default function ServicePage({
  badge,
  headline,
  subheadline,
  intro,
  features,
  credStats,
  whoIsItFor,
  whyUs,
  ctaText,
  jsonLd,
}: ServicePageProps) {
  return (
    <main className="grid-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 text-xs text-zinc-500 bg-[var(--card)] border border-[var(--card-border)] rounded-full px-4 py-1.5">
            {badge}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
            {headline}
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            {subheadline}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-2xl p-8 md:p-10">
            <p className="text-zinc-400 leading-relaxed text-center">{intro}</p>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-16 px-6 border-t border-[var(--card-border)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">What We Deliver</h2>
          <div className={`grid sm:grid-cols-2 ${features.length >= 4 ? "lg:grid-cols-4" : features.length === 3 ? "lg:grid-cols-3" : ""} gap-4`}>
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-5 hover:bg-[var(--card-hover)] transition-all duration-300"
              >
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="text-sm font-semibold text-[var(--foreground)] mb-2">{f.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credibility Bar */}
      <section className="py-12 px-6 border-t border-[var(--card-border)]">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {credStats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-xl md:text-2xl font-bold gradient-text">{s.value}</div>
              <div className="text-[10px] text-zinc-500 mt-1 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Who Is It For */}
      <section className="py-16 px-6 border-t border-[var(--card-border)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Who Is This For</h2>
          <div className={`grid sm:grid-cols-2 ${whoIsItFor.length >= 3 ? "lg:grid-cols-3" : ""} gap-4`}>
            {whoIsItFor.map((w) => (
              <div
                key={w.title}
                className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-5 hover:bg-[var(--card-hover)] transition-all duration-300"
              >
                <div className="text-2xl mb-3">{w.icon}</div>
                <h3 className="text-sm font-semibold text-[var(--foreground)] mb-2">{w.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{w.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 px-6 border-t border-[var(--card-border)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Why Work With Us</h2>
          <div className="space-y-4">
            {whyUs.map((reason, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-4"
              >
                <span className="text-blue-500 mt-0.5 shrink-0">&#10003;</span>
                <p className="text-sm text-zinc-400 leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-[var(--card-border)]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-2xl p-8 md:p-12 glow">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{ctaText}</h2>
            <p className="text-zinc-400 max-w-xl mx-auto mb-6">
              Tell us what you&apos;re working with and where the pain is. We&apos;ll tell you what&apos;s possible.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a
                href="mailto:Lukas.T@withlukas.com"
                className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-3 rounded-lg text-sm font-medium transition-colors"
              >
                Lukas.T@withlukas.com
              </a>
              <Link
                href="/#services"
                className="border border-[var(--card-border)] hover:border-zinc-600 text-[var(--foreground)] px-6 py-3 rounded-lg text-sm font-medium transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
