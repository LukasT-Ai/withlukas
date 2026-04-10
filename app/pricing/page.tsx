import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PricingClient from "./pricing-client";
import ContactForm from "../components/contact-form";

export const metadata: Metadata = {
  title: "Pricing — Atlanta, GA Consulting & Development Rates",
  description:
    "Transparent pricing for Atlanta-based consulting services: telecom advisory, sales automation, web & app development, AI integration, SEO, and workflow automation. Packages from $750.",
  keywords: [
    "consulting pricing Atlanta GA",
    "website development cost Atlanta",
    "app development pricing Georgia",
    "telecom consulting rates Atlanta",
    "sales automation pricing Atlanta",
    "AI integration cost Georgia",
    "SEO pricing Atlanta",
    "affordable consulting Atlanta",
    "small business consulting rates Georgia",
    "workflow automation cost Atlanta",
  ],
};

const services = [
  {
    name: "Telecom Consulting",
    rate: 150,
    description:
      "Voice, data, network, and security advisory from an enterprise insider.",
    tiers: [
      {
        name: "Assessment",
        price: 1500,
        label: "One-time",
        features: [
          "Network & vendor assessment",
          "Cost optimization report",
          "Recommendations document",
          "1 follow-up call",
        ],
      },
      {
        name: "Strategy",
        price: 5000,
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
        name: "Full Engagement",
        price: 12000,
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
    rate: 125,
    description:
      "Email outreach engines, follow-up sequences, and CRM dashboards.",
    tiers: [
      {
        name: "Starter",
        price: 2000,
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
        price: 6500,
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
        name: "Scale",
        price: 15000,
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
    name: "Web & App Development",
    rate: 125,
    description:
      "Websites, web apps, dashboards, and tools built with modern frameworks.",
    tiers: [
      {
        name: "Website",
        price: 1500,
        label: "One-time",
        features: [
          "Professional website or landing page",
          "Responsive design",
          "Basic SEO setup",
          "Deployment & hosting config",
        ],
      },
      {
        name: "Web App",
        price: 7500,
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
        name: "Platform",
        price: 25000,
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
    rate: 150,
    description:
      "Smart classification, scoring, and content generation for your business.",
    tiers: [
      {
        name: "Pilot",
        price: 2500,
        label: "One-time",
        features: [
          "AI use-case assessment",
          "Single workflow automation",
          "Prompt engineering",
          "Documentation",
        ],
      },
      {
        name: "Production",
        price: 8000,
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
        price: 20000,
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
    name: "Cybersecurity",
    rate: null,
    description:
      "Penetration testing, SOC monitoring, cloud security, incident response, and compliance consulting — delivered through our trusted security partners.",
    tiers: [],
  },
  {
    name: "SEO & Web Presence",
    rate: 100,
    description:
      "Technical SEO, structured data, and content strategy to get found on Google.",
    tiers: [
      {
        name: "Audit",
        price: 750,
        label: "One-time",
        features: [
          "SEO audit & recommendations",
          "Meta tags & structured data",
          "Sitemap & robots.txt",
          "Google Search Console setup",
        ],
      },
      {
        name: "Optimize",
        price: 3000,
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
        name: "Dominate",
        price: 7500,
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
    rate: 115,
    description:
      "Connect your tools, eliminate manual data entry, and automate repetitive tasks.",
    tiers: [
      {
        name: "Quick Win",
        price: 1500,
        label: "One-time",
        features: [
          "Process assessment",
          "Single workflow automation",
          "Tool integration (1-2 tools)",
          "Documentation",
        ],
      },
      {
        name: "Streamline",
        price: 5000,
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
        name: "Transform",
        price: 15000,
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

const retainers = [
  { name: "Lite", hours: "5-10 hrs/mo", price: 500, label: "from" },
  { name: "Standard", hours: "15-20 hrs/mo", price: 1500, label: "from" },
  { name: "Premium", hours: "30-40 hrs/mo", price: 3000, label: "from" },
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
            Straightforward Pricing
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            No agency markup. No surprise invoices. Pick a package or{" "}
            <a
              href="#quote"
              className="text-blue-400 hover:text-blue-300"
            >
              request a custom quote
            </a>{" "}
            for exactly what you need.
          </p>
        </div>
      </section>

      {/* Hourly Rates */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center">Hourly Rates</h2>
          <p className="text-zinc-400 text-center mb-8">
            Prefer to work on an hourly basis? Here are our rates by service.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.filter((s) => s.rate !== null).map((s) => (
              <div
                key={s.name}
                className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-5 text-center"
              >
                <p className="text-sm text-zinc-400 mb-1">{s.name}</p>
                <p className="text-2xl font-bold">
                  ${s.rate}
                  <span className="text-sm text-zinc-500 font-normal">
                    /hr
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Retainers */}
      <section className="pb-16 px-6 border-t border-[var(--card-border)] pt-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center">
            Monthly Retainers
          </h2>
          <p className="text-zinc-400 text-center mb-8">
            Ongoing support at a discounted rate. Mix and match any service.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {retainers.map((r) => (
              <div
                key={r.name}
                className={`bg-[var(--card)] border rounded-xl p-6 text-center ${
                  r.name === "Standard"
                    ? "border-blue-500 ring-1 ring-blue-500/30"
                    : "border-[var(--card-border)]"
                }`}
              >
                {r.name === "Standard" && (
                  <span className="text-xs text-blue-400 font-medium mb-2 block">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-semibold">{r.name}</h3>
                <p className="text-zinc-500 text-sm mb-3">{r.hours}</p>
                <p className="text-3xl font-bold mb-1">
                  ${r.price.toLocaleString()}
                  <span className="text-sm text-zinc-500 font-normal">
                    /mo
                  </span>
                </p>
                <p className="text-xs text-zinc-600">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project-Based Packages */}
      <section className="pb-20 px-6 border-t border-[var(--card-border)] pt-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center">
            Project Packages
          </h2>
          <p className="text-zinc-400 text-center mb-12">
            Fixed-price engagements with clear deliverables. Pay by milestone, not by the hour.
          </p>

          <div className="space-y-20">
            {services.map((service) => (
              <div key={service.name}>
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-1">{service.name}</h3>
                  <p className="text-zinc-400 text-sm">{service.description}</p>
                </div>
                {service.tiers.length > 0 ? (
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
                      <h4 className="text-lg font-semibold mb-1">
                        {tier.name}
                      </h4>
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
                            <span className="text-blue-400 mt-0.5">
                              &#10003;
                            </span>
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
                ) : (
                <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-8 text-center max-w-lg">
                  <p className="text-zinc-400 mb-4">
                    Pricing varies based on your environment, scope, and compliance needs.
                  </p>
                  <a
                    href="#quote"
                    className="inline-block bg-blue-500 hover:bg-blue-400 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors"
                  >
                    Contact Us for Pricing
                  </a>
                </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Quote Form */}
      <section id="quote" className="py-16 px-6 border-t border-[var(--card-border)]">
        <div className="max-w-4xl mx-auto">
          <p className="text-zinc-400 text-center mb-2">
            Every business is unique. These packages are starting points.
            We also offer smaller scoped work starting from <strong className="text-[var(--foreground)]">$500</strong> for quick wins.
          </p>
          <p className="text-zinc-500 text-sm text-center mb-8">
            50% deposit to start. Milestone-based payments on larger projects.
            10% discount on annual retainer commitments.
          </p>
          <ContactForm
            heading="Request a Custom Quote"
            subheading="Tell us what you need and we'll put together a tailored proposal."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
