import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "withlukas | Automatisierung, Webentwicklung & KI-Beratung — Atlanta, GA",
  description:
    "Beratung f\u00fcr kleine und mittlere Unternehmen in Atlanta und Deutschland. Automatisierung, Webentwicklung, KI-Integration, Telekommunikationsberatung und SEO.",
  alternates: {
    canonical: "https://www.withlukas.com/de",
    languages: {
      en: "https://www.withlukas.com",
      de: "https://www.withlukas.com/de",
    },
  },
  openGraph: {
    title: "withlukas | Automatisierung, Webentwicklung & KI-Beratung",
    description:
      "Beratung f\u00fcr Automatisierung, Webentwicklung, KI und Telekommunikation f\u00fcr Unternehmen in Atlanta und Deutschland.",
    url: "https://www.withlukas.com/de",
    locale: "de_DE",
  },
};

export default function DeutschePage() {
  return (
    <main className="grid-bg">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 text-xs text-zinc-500 bg-[var(--card)] border border-[var(--card-border)] rounded-full px-4 py-1.5">
            Atlanta, GA &middot; Automatisierung &middot; Webentwicklung &middot; KI-Beratung
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
            Smarter bauen.<br />
            <span className="gradient-text">Schneller liefern.</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Beratung f&uuml;r kleine und mittlere Unternehmen in Atlanta und Deutschland.
            Automatisierung, Webseiten, Apps, KI-Integration, Telekommunikationsberatung und
            SEO &mdash; was automatisiert, optimiert oder besser gebaut werden kann, bauen wir.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="/#work"
              className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors"
            >
              Unsere Arbeit
            </a>
            <a
              href="/#contact"
              className="border border-[var(--card-border)] hover:border-zinc-600 text-[var(--foreground)] px-6 py-2.5 rounded-lg text-sm font-medium transition-colors"
            >
              Projekt starten
            </a>
          </div>
        </div>
      </section>

      {/* Dienstleistungen */}
      <section className="py-20 px-6 border-t border-[var(--card-border)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Was wir anbieten</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Wir bauen Werkzeuge, die repetitive Arbeit eliminieren, die richtigen
              Daten aufbereiten und Sie auf das Wesentliche fokussieren lassen.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Telekommunikationsberatung",
                description:
                  "Sprach-, Daten-, Netzwerk- und Sicherheitsberatung. 15+ Jahre Erfahrung bei AT&T und Spectrum Enterprise.",
                href: "/services/telecom-consulting",
              },
              {
                title: "Vertriebsautomatisierung",
                description:
                  "E-Mail-Outreach, Follow-up-Sequenzen, Antwortklassifikation und CRM-Dashboards. Akquise als System statt als Aufgabe.",
                href: "/services/sales-automation",
              },
              {
                title: "Web- & App-Entwicklung",
                description:
                  "Webseiten, Web-Apps, Dashboards und individuelle Tools mit modernen Frameworks. Produktionsreif ab Tag eins.",
                href: "/services/app-development",
              },
              {
                title: "KI-Integration",
                description:
                  "Intelligente Klassifikation, Bewertung und Inhaltserstellung. KI, die die schwere Arbeit erledigt.",
                href: "/services/ai-integration",
              },
              {
                title: "SEO & Webpr\u00e4senz",
                description:
                  "Technisches SEO, strukturierte Daten, Sitemaps, OG-Bilder und mehrsprachige Inhalte. Bei Google gefunden werden.",
                href: "/services/seo-web-presence",
              },
              {
                title: "Workflow-Automatisierung",
                description:
                  "Microsoft Forms, Power Automate, Excel/VBA und individuelle Pipelines. Systeme verbinden, manuelle Eingabe eliminieren.",
                href: "/services/workflow-automation",
              },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-5 hover:bg-[var(--card-hover)] transition-all duration-300 group block"
              >
                <h3 className="text-sm font-semibold text-[var(--foreground)] mb-2 group-hover:text-blue-400 transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {s.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-[var(--card-border)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Lassen Sie uns zusammenarbeiten</h2>
          <p className="text-zinc-400 max-w-xl mx-auto mb-8">
            Ob Automatisierung, Webentwicklung oder KI-Integration &mdash; wir freuen
            uns auf Ihre Nachricht.
          </p>
          <a
            href="/#contact"
            className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-3 rounded-lg text-sm font-medium transition-colors"
          >
            Kontakt aufnehmen
          </a>
          <p className="text-xs text-zinc-600 mt-4">
            Weitere Seiten werden bald auf Deutsch verf&uuml;gbar sein.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
