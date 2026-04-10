import type { Metadata } from "next";
import ServicePage from "../../components/service-page";

export const metadata: Metadata = {
  title: "Cybersecurity Services Atlanta, GA | Pen Testing, SOC, Cloud & Network Security",
  description:
    "Atlanta, GA cybersecurity services for businesses of all sizes — from 2-person offices to enterprise environments. Penetration testing, 24/7 SOC monitoring, cloud security, incident response, and compliance consulting.",
  keywords: [
    "cybersecurity Atlanta GA",
    "penetration testing Atlanta",
    "SOC monitoring Georgia",
    "cloud security Atlanta",
    "network security consulting Atlanta",
    "incident response Atlanta GA",
    "GRC compliance consulting Georgia",
    "application security Atlanta",
    "small business cybersecurity Atlanta",
    "enterprise security consulting Georgia",
    "cybersecurity services near me",
    "withlukas",
  ],
  openGraph: {
    title: "Cybersecurity Services Atlanta, GA | withlukas",
    description:
      "Atlanta-based cybersecurity services — penetration testing, 24/7 SOC, cloud security, incident response, and compliance for businesses of all sizes.",
    url: "https://withlukas.com/services/cybersecurity",
  },
  alternates: {
    canonical: "https://withlukas.com/services/cybersecurity",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://withlukas.com/services/cybersecurity#service",
      name: "Cybersecurity Services",
      provider: { "@id": "https://withlukas.com/#organization" },
      serviceType: "Cybersecurity Consulting",
      areaServed: [
        { "@type": "City", name: "Atlanta", containedInPlace: { "@type": "State", name: "Georgia" } },
        "United States",
        "Germany",
      ],
      description:
        "Comprehensive cybersecurity services including penetration testing, 24/7 SOC monitoring, cloud and network security, application security, incident response, and governance, risk and compliance consulting for businesses from small offices to enterprise environments.",
      url: "https://withlukas.com/services/cybersecurity",
    },
    {
      "@type": "WebPage",
      "@id": "https://withlukas.com/services/cybersecurity#webpage",
      url: "https://withlukas.com/services/cybersecurity",
      name: "Cybersecurity Services Atlanta, GA | withlukas",
      isPartOf: { "@id": "https://withlukas.com/#website" },
      about: {
        "@id": "https://withlukas.com/services/cybersecurity#service",
      },
    },
  ],
};

export default function CybersecurityPage() {
  return (
    <ServicePage
      badge="Cybersecurity"
      headline="Security That Scales With Your Business"
      subheadline="From penetration testing to 24/7 monitoring, we provide enterprise-grade cybersecurity services at competitive prices — whether you have 2 employees or 2,000."
      intro="Cyber threats don't discriminate by company size. A 5-person office is just as vulnerable as a Fortune 500 — often more so. We deliver real cybersecurity services that scale to fit your environment and budget: penetration testing, round-the-clock SOC monitoring, cloud and network security, incident response, and compliance consulting. No bloated contracts, no one-size-fits-all packages — just the protection your business actually needs."
      features={[
        {
          icon: "\u{1F50D}",
          title: "Penetration Testing",
          description:
            "Simulated real-world attacks against your systems, applications, and network to find vulnerabilities before bad actors do. Full reports with prioritized remediation steps.",
        },
        {
          icon: "\u{1F6E1}\u{FE0F}",
          title: "24/7 SOC Monitoring",
          description:
            "Round-the-clock security operations center with expert threat analysis and rapid incident response. Continuous monitoring so threats are caught and contained in real time.",
        },
        {
          icon: "\u{2601}\u{FE0F}",
          title: "Cloud & Network Security",
          description:
            "Cloud environment assessments, firewall management, intrusion detection, and access controls. Secure your infrastructure whether it lives on-prem, in the cloud, or both.",
        },
        {
          icon: "\u{1F4F1}",
          title: "Application Security",
          description:
            "Code reviews, software testing, and API security assessments. Identify and fix vulnerabilities in your custom and third-party applications before they become breaches.",
        },
        {
          icon: "\u{26A1}",
          title: "Incident Response",
          description:
            "Response planning, threat intelligence, and rapid recovery when attacks happen. Minimize downtime and data loss with a proven incident response framework.",
        },
        {
          icon: "\u{1F4CB}",
          title: "Governance, Risk & Compliance",
          description:
            "Risk management frameworks, compliance audits, and security governance for regulated industries. HIPAA, financial services, government — we help you meet the standard.",
        },
      ]}
      credStats={[
        { value: "24/7", label: "SOC Monitoring" },
        { value: "All Sizes", label: "2 Employees to Enterprise" },
        { value: "Multi-Industry", label: "Finance, Healthcare, Gov" },
        { value: "Full Stack", label: "Cloud, Network, App" },
      ]}
      whoIsItFor={[
        {
          icon: "\u{1F3E2}",
          title: "Small & Mid-Size Businesses",
          description:
            "You know you need better security but don't have the budget for a full-time security team. We give you enterprise-grade protection at a price that makes sense for a 2-50 person operation.",
        },
        {
          icon: "\u{1F3E6}",
          title: "Regulated Industries",
          description:
            "Healthcare, financial services, government — your industry has strict compliance requirements. We help you meet HIPAA, regulatory, and security standards without the overhead of building it all in-house.",
        },
        {
          icon: "\u{1F4BB}",
          title: "Growing Tech Companies",
          description:
            "Your product is scaling but security hasn't kept pace. You need penetration testing, application security reviews, and cloud hardening to protect your platform and your customers' data.",
        },
      ]}
      whyUs={[
        "Enterprise-grade cybersecurity services available at competitive prices — scaled to your business size, not padded for a Fortune 500 budget.",
        "Full spectrum coverage: penetration testing, 24/7 SOC, cloud security, application security, incident response, and compliance — all from one provider.",
        "We serve every size — from a 2-person startup to enterprise environments with thousands of endpoints. No business is too small to be secure.",
        "Industry-specific expertise across financial services, healthcare, government, telecommunications, and education — we understand your compliance landscape.",
      ]}
      ctaText="Ready to Secure Your Business?"
      jsonLd={jsonLd}
    />
  );
}
