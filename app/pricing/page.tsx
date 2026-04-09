import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PricingClient from "./pricing-client";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for telecom consulting, sales automation, app development, AI integration, SEO, and workflow automation services.",
  keywords: [
    "consulting pricing",
    "app development cost",
    "telecom consulting rates",
    "sales automation pricing",
    "AI integration cost",
  ],
};

const services = [
  {
    name: "Telecom Consulting",
    description:
      "Voice, data, network, and security advisory from an enterprise insider.",
    tiers: [
      {
        name: "Starter",
        price: 2500,
        label: "One-time",
        features: [
          "Network & vendor assessment",
          "Cost optimization report",
          "Recommendations document",
          "1 follow-up call",
        ],
      },
      {
        name: "Growth",
        price: 7500,
        label: "One-time",
        popular: true,
        features: [
          "Full infrastructure audit",
          "Vendor negotiation support",
          "UC migration roadmap",
          "Security compliance review",
          "30 days of support",
        ],
      },
      {
        name: "Enterprise",
        price: 15000,
        label: "One-time",
        features: [
          "End-to-end network strategy",
          "Vendor RFP management",
          "Implementation oversight",
          "Ongoing advisory (90 days)",
          "Executive presentations",
        ],
      },
    ],
  },
  {
    name: "Sales Automation",
    description:
      "Email outreach engines, follow-up sequences, and CRM dashboards.",
    tiers: [
      {
        name: "Starter",
        price: 3000,
        label: "One-time",
        features: [
          "Email template system",
          "Basic follow-up sequence",
          "Prospect list setup",
          "Sending configuration",
        ],
      },
      {
        name: "Growth",
        price: 10000,
        label: "One-time",
        popular: true,
        features: [
          "Full outreach pipeline",
          "AI response classification",
          "Multi-stage follow-ups",
          "Analytics dashboard",
          "30 days of support",
        ],
      },
      {
        name: "Enterprise",
        price: 25000,
        label: "One-time",
        features: [
          "Custom CRM integration",
          "Multi-campaign management",
          "Advanced analytics & reporting",
          "Team onboarding & training",
          "90 days of support",
        ],
      },
    ],
  },
  {
    name: "App Development",
    description:
      "Full-stack web apps, dashboards, and tools built with modern frameworks.",
    tiers: [
      {
        name: "Starter",
        price: 5000,
        label: "One-time",
        features: [
          "Landing page or simple app",
          "Responsive design",
          "Basic SEO setup",
          "Deployment & hosting",
        ],
      },
      {
        name: "Growth",
        price: 15000,
        label: "One-time",
        popular: true,
        features: [
          "Multi-page web application",
          "Database integration",
          "Authentication system",
          "API development",
          "30 days of support",
        ],
      },
      {
        name: "Enterprise",
        price: 50000,
        label: "Starting at",
        features: [
          "Complex full-stack platform",
          "Third-party integrations",
          "Admin dashboard",
          "Performance optimization",
          "90 days of support",
        ],
      },
    ],
  },
  {
    name: "AI Integration",
    description:
      "Smart classification, scoring, and content generation for your business.",
    tiers: [
      {
        name: "Starter",
        price: 5000,
        label: "One-time",
        features: [
          "AI use-case assessment",
          "Single workflow automation",
          "Prompt engineering",
          "Documentation",
        ],
      },
      {
        name: "Growth",
        price: 15000,
        label: "One-time",
        popular: true,
        features: [
          "Multi-workflow AI integration",
          "Custom classification system",
          "API pipeline setup",
          "Testing & validation",
          "30 days of support",
        ],
      },
      {
        name: "Enterprise",
        price: 50000,
        label: "Starting at",
        features: [
          "Enterprise AI strategy",
          "Custom model fine-tuning",
          "Full pipeline architecture",
          "Team training",
          "90 days of support",
        ],
      },
    ],
  },
  {
    name: "SEO & Web Presence",
    description:
      "Technical SEO, structured data, and content strategy to get found on Google.",
    tiers: [
      {
        name: "Starter",
        price: 2000,
        label: "One-time",
        features: [
          "SEO audit & recommendations",
          "Meta tags & structured data",
          "Sitemap & robots.txt",
          "Google Search Console setup",
        ],
      },
      {
        name: "Growth",
        price: 5000,
        label: "One-time",
        popular: true,
        features: [
          "Full technical SEO overhaul",
          "Content strategy",
          "Local SEO & Google Business",
          "Performance optimization",
          "30 days of monitoring",
        ],
      },
      {
        name: "Enterprise",
        price: 10000,
        label: "One-time",
        features: [
          "Multi-site SEO strategy",
          "Ongoing content creation",
          "Link building & outreach",
          "Monthly reporting",
          "90 days of management",
        ],
      },
    ],
  },
  {
    name: "Workflow Automation",
    description:
      "Connect your tools, eliminate manual data entry, and automate repetitive tasks.",
    tiers: [
      {
        name: "Starter",
        price: 2500,
        label: "One-time",
        features: [
          "Process assessment",
          "Single workflow automation",
          "Tool integration (1-2 tools)",
          "Documentation",
        ],
      },
      {
        name: "Growth",
        price: 7500,
        label: "One-time",
        popular: true,
        features: [
          "Multi-workflow automation",
          "Excel/VBA dashboards",
          "Power Automate setup",
          "Error handling & logging",
          "30 days of support",
        ],
      },
      {
        name: "Enterprise",
        price: 20000,
        label: "One-time",
        features: [
          "Enterprise workflow suite",
          "Custom pipeline architecture",
          "Team rollout & training",
          "Monitoring & alerts",
          "90 days of support",
        ],
      },
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block text-xs text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            Pricing
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Transparent Pricing
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Every engagement is scoped to your needs. Pick a starting point
            below, or{" "}
            <a
              href="mailto:Lukas.T@withlukas.com"
              className="text-blue-400 hover:text-blue-300"
            >
              reach out
            </a>{" "}
            for a custom quote.
          </p>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto space-y-20">
          {services.map((service) => (
            <div key={service.name}>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">{service.name}</h2>
                <p className="text-zinc-400">{service.description}</p>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {service.tiers.map((tier) => (
                  <div
                    key={tier.name}
                    className={`bg-[var(--card)] border rounded-xl p-6 flex flex-col ${
                      tier.popular
                        ? "border-blue-500 ring-1 ring-blue-500/30"
                        : "border-[var(--card-border)]"
                    }`}
                  >
                    {tier.popular && (
                      <span className="text-xs text-blue-400 font-medium mb-2">
                        Most Popular
                      </span>
                    )}
                    <h3 className="text-lg font-semibold mb-1">{tier.name}</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold">
                        ${tier.price.toLocaleString()}
                      </span>
                      <span className="text-zinc-500 text-sm ml-1">
                        {tier.label}
                      </span>
                    </div>
                    <ul className="space-y-2 mb-6 flex-1">
                      {tier.features.map((f) => (
                        <li
                          key={f}
                          className="text-sm text-zinc-400 flex items-start gap-2"
                        >
                          <span className="text-blue-400 mt-0.5">&#10003;</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <PricingClient
                      service={service.name}
                      tier={tier.name}
                      popular={tier.popular}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 border-t border-[var(--card-border)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">Need Something Custom?</h2>
          <p className="text-zinc-400 mb-6">
            Most projects are unique. These tiers are starting points — we&apos;ll
            scope the exact solution to your business.
          </p>
          <a
            href="mailto:Lukas.T@withlukas.com"
            className="inline-block bg-blue-500 hover:bg-blue-400 text-white px-8 py-3 rounded-lg text-sm font-medium transition-colors"
          >
            Request a Custom Quote
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
