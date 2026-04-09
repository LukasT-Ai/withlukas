import type { Metadata } from "next";
import ServicePage from "../../components/service-page";

export const metadata: Metadata = {
  title: "Sales Automation | Email Outreach, CRM & Pipeline Tools",
  description:
    "Custom sales automation systems that handle prospecting, email outreach, follow-up sequences, response classification, and pipeline management. Built for sales teams that want to sell, not do admin.",
  keywords: [
    "sales automation",
    "email outreach automation",
    "automated follow-up sequences",
    "response classification",
    "CRM automation",
    "B2B prospecting tools",
    "sales pipeline automation",
    "cold email automation",
    "sales technology",
    "lead management automation",
    "withlukas",
  ],
  openGraph: {
    title: "Sales Automation | withlukas",
    description:
      "Custom email outreach engines, automated follow-ups, AI-powered response classification, and CRM dashboards. Turn prospecting into a system.",
    url: "https://withlukas.com/services/sales-automation",
  },
  alternates: {
    canonical: "https://withlukas.com/services/sales-automation",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://withlukas.com/services/sales-automation#service",
      name: "Sales Automation",
      provider: { "@id": "https://withlukas.com/#organization" },
      serviceType: "Sales Automation",
      areaServed: ["United States", "Germany"],
      description:
        "End-to-end sales automation including email outreach engines, follow-up sequences, AI-powered response classification, and management dashboards.",
      url: "https://withlukas.com/services/sales-automation",
    },
    {
      "@type": "WebPage",
      "@id": "https://withlukas.com/services/sales-automation#webpage",
      url: "https://withlukas.com/services/sales-automation",
      name: "Sales Automation | withlukas",
      isPartOf: { "@id": "https://withlukas.com/#website" },
      about: {
        "@id": "https://withlukas.com/services/sales-automation#service",
      },
    },
  ],
};

export default function SalesAutomationPage() {
  return (
    <ServicePage
      badge="Sales Automation"
      headline="Stop Prospecting Manually"
      subheadline="Custom-built email outreach engines, follow-up sequences, and response classification that turn prospecting from a daily grind into a hands-off system."
      intro="Your sales team should be closing deals, not copy-pasting emails and tracking follow-ups in spreadsheets. We build end-to-end outreach systems that handle prospecting, classify responses with AI, send intelligent follow-ups, and surface the leads that actually matter — all on autopilot."
      features={[
        {
          icon: "\u{1F4E7}",
          title: "Email Outreach Engines",
          description:
            "Automated cold email campaigns with personalization, throttling, domain rotation, and deliverability monitoring. High-volume outreach without the spam folder.",
        },
        {
          icon: "\u{1F504}",
          title: "Follow-Up Sequences",
          description:
            "Multi-stage follow-up cadences with business-day timing, pause rules, and automatic escalation. No lead falls through the cracks.",
        },
        {
          icon: "\u{1F9E0}",
          title: "Response Classification",
          description:
            "AI-powered classification that detects meeting requests, objections, opt-outs, and auto-replies. Routes each response to the right action automatically.",
        },
        {
          icon: "\u{1F4CA}",
          title: "Pipeline Dashboards",
          description:
            "Real-time management dashboards showing send volume, reply rates, meeting conversions, and rep performance. Know your numbers without pulling reports.",
        },
      ]}
      credStats={[
        { value: "9+", label: "Tools Built" },
        { value: "1000s", label: "Hours Saved" },
        { value: "Zero", label: "Per-Email AI Cost" },
        { value: "Real-Time", label: "Analytics" },
      ]}
      whoIsItFor={[
        {
          icon: "\u{1F4BC}",
          title: "Sales Teams",
          description:
            "You have reps spending hours on manual outreach instead of selling. You need a system that handles prospecting so your team can focus on conversations that close.",
        },
        {
          icon: "\u{1F3AF}",
          title: "Sales Managers",
          description:
            "You need visibility into pipeline activity without chasing reps for updates. Dashboards that show real numbers — sends, replies, meetings — updated in real time.",
        },
        {
          icon: "\u{1F680}",
          title: "Startups & Growth Teams",
          description:
            "You need to generate pipeline fast but can't afford a full sales ops team. A custom outreach engine gives you enterprise-grade automation at a fraction of the cost.",
        },
      ]}
      whyUs={[
        "Built and run our own outreach system that processes thousands of emails with zero per-email AI cost. We use what we build.",
        "Rule-based classification that's fast, predictable, and doesn't burn through API credits. AI where it adds value, rules where they're better.",
        "Every system includes a management dashboard so you can see what's working without asking anyone for a report.",
        "Custom-built for your workflow, not a SaaS platform you have to adapt to. Your process, automated.",
      ]}
      ctaText="Ready to Automate Your Outreach?"
      jsonLd={jsonLd}
    />
  );
}
