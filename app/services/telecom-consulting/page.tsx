import type { Metadata } from "next";
import ServicePage from "../../components/service-page";

export const metadata: Metadata = {
  title: "Telecom Consulting | Voice, Data, Network & Security Advisory",
  description:
    "Enterprise telecom consulting with 15+ years of experience at AT&T and Spectrum Enterprise. Voice & UC strategy, MPLS/SD-WAN optimization, network security assessments, and vendor contract negotiation in Atlanta, GA.",
  keywords: [
    "telecom consulting",
    "telecommunications consultant",
    "enterprise telecom advisory",
    "unified communications consulting",
    "UC strategy",
    "MPLS optimization",
    "SD-WAN consulting",
    "network security assessment",
    "VoIP solutions architect",
    "telecom vendor negotiation",
    "telecom contract review",
    "voice network migration",
    "enterprise network consultant Atlanta",
    "Spectrum Enterprise consultant",
    "withlukas",
  ],
  openGraph: {
    title: "Telecom Consulting | withlukas",
    description:
      "15+ years advising enterprises on voice, data, network, and security. Cut through vendor noise and make infrastructure decisions that fit your business.",
    url: "https://withlukas.com/services/telecom-consulting",
  },
  alternates: {
    canonical: "https://withlukas.com/services/telecom-consulting",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://withlukas.com/services/telecom-consulting#service",
      name: "Telecom Consulting",
      provider: { "@id": "https://withlukas.com/#organization" },
      serviceType: "Telecommunications Consulting",
      areaServed: ["United States", "Germany"],
      description:
        "Enterprise telecom advisory covering voice and unified communications strategy, network and connectivity optimization, security assessments, and vendor contract negotiation.",
      url: "https://withlukas.com/services/telecom-consulting",
    },
    {
      "@type": "WebPage",
      "@id": "https://withlukas.com/services/telecom-consulting#webpage",
      url: "https://withlukas.com/services/telecom-consulting",
      name: "Telecom Consulting | withlukas",
      isPartOf: { "@id": "https://withlukas.com/#website" },
      about: {
        "@id": "https://withlukas.com/services/telecom-consulting#service",
      },
      description:
        "Enterprise telecom consulting with 15+ years of experience. Voice & UC, MPLS/SD-WAN, network security, and vendor strategy.",
    },
  ],
};

export default function TelecomConsultingPage() {
  return (
    <ServicePage
      badge="Telecom Consulting"
      headline="Telecom Strategy, Without the Sales Pitch"
      subheadline="15+ years advising enterprises on voice, data, network, and security — now helping businesses make smarter infrastructure decisions."
      intro="Most telecom decisions are made based on a carrier's pitch, not your business needs. I've spent over a decade on the inside — designing UC architectures at Spectrum Enterprise, engineering MPLS and VoIP solutions at AT&T, and managing enterprise accounts across connectivity, security, cloud, and voice. I help businesses cut through vendor noise and make infrastructure decisions that actually fit."
      features={[
        {
          icon: "\u{1F4DE}",
          title: "Voice & Unified Communications",
          description:
            "Audit your current phone systems, evaluate UCaaS and hosted PBX options, and design a migration path that minimizes downtime and cost. From legacy PRI to modern cloud voice.",
        },
        {
          icon: "\u{1F310}",
          title: "Network & Connectivity",
          description:
            "MPLS, SD-WAN, Ethernet, dedicated internet — right-size your WAN, eliminate redundant circuits, and negotiate contracts that don't lock you into bad terms.",
        },
        {
          icon: "\u{1F512}",
          title: "Security & Compliance",
          description:
            "Managed firewall, DDoS protection, network segmentation. Assess gaps in your current stack and get recommendations that match your risk profile — not the vendor's margin targets.",
        },
        {
          icon: "\u{1F4C4}",
          title: "Vendor & Contract Strategy",
          description:
            "RFP development, proposal evaluation, contract negotiation. I've written hundreds of enterprise telecom proposals — now I review them for the buyer's side.",
        },
      ]}
      credStats={[
        { value: "15+ Years", label: "Enterprise Telecom" },
        { value: "UC & VoIP", label: "Solutions Architecture" },
        { value: "MPLS / SD-WAN", label: "Ethernet & WAN" },
        { value: "Network Security", label: "& Compliance" },
      ]}
      whoIsItFor={[
        {
          icon: "\u{1F3E2}",
          title: "Mid-Size Businesses",
          description:
            "You have 50 to 500 employees, multiple locations, and your telecom stack grew organically. You're paying for circuits nobody uses and your phone system is a decade old. You need a clear migration path, not another sales pitch.",
        },
        {
          icon: "\u{1F3D7}\u{FE0F}",
          title: "Growing Companies",
          description:
            "You're opening new offices, onboarding remote teams, or expanding into new regions. Your current setup won't scale. You need someone who has designed multi-site WAN architectures to help you build it right the first time.",
        },
        {
          icon: "\u{1F465}",
          title: "IT Leaders & Operations",
          description:
            "You know your infrastructure needs work but don't have telecom-specific expertise in-house. You need an advisor who speaks both the technical and business language to evaluate proposals and make the case to leadership.",
        },
      ]}
      whyUs={[
        "I've spent 15+ years inside AT&T and Spectrum Enterprise — I know how carriers price, package, and negotiate. That insider perspective works for you now, not against you.",
        "I design solutions, not sell products. No commissions, no quotas, no vendor bias. My recommendations are based on what fits your business, not what hits a sales target.",
        "I speak both languages — technical enough to design a UC architecture or evaluate an SD-WAN proposal, business-savvy enough to present ROI to your executive team.",
        "I've managed enterprise accounts totaling millions in annual billing. I understand the financial side — contract terms, early termination exposure, and how to negotiate better rates.",
      ]}
      ctaText="Ready to Rethink Your Telecom?"
      jsonLd={jsonLd}
    />
  );
}
