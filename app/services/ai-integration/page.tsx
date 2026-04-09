import type { Metadata } from "next";
import ServicePage from "../../components/service-page";

export const metadata: Metadata = {
  title: "AI Integration | Smart Classification, Scoring & Content Generation",
  description:
    "Practical AI integration for business workflows. Response classification, lead scoring, content generation, and intelligent automation — AI that does the heavy lifting while you make the decisions.",
  keywords: [
    "AI integration",
    "AI automation",
    "AI-powered classification",
    "lead scoring AI",
    "content generation AI",
    "business AI solutions",
    "Claude API integration",
    "GPT integration",
    "AI workflow automation",
    "machine learning integration",
    "AI consulting Atlanta",
    "withlukas",
  ],
  openGraph: {
    title: "AI Integration | withlukas",
    description:
      "Practical AI that solves real problems — classification, scoring, content generation, and intelligent automation built into your workflows.",
    url: "https://withlukas.com/services/ai-integration",
  },
  alternates: {
    canonical: "https://withlukas.com/services/ai-integration",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://withlukas.com/services/ai-integration#service",
      name: "AI Integration",
      provider: { "@id": "https://withlukas.com/#organization" },
      serviceType: "AI Integration",
      areaServed: ["United States", "Germany"],
      description:
        "AI integration services including response classification, lead scoring, content generation, and intelligent workflow automation.",
      url: "https://withlukas.com/services/ai-integration",
    },
    {
      "@type": "WebPage",
      "@id": "https://withlukas.com/services/ai-integration#webpage",
      url: "https://withlukas.com/services/ai-integration",
      name: "AI Integration | withlukas",
      isPartOf: { "@id": "https://withlukas.com/#website" },
      about: {
        "@id": "https://withlukas.com/services/ai-integration#service",
      },
    },
  ],
};

export default function AIIntegrationPage() {
  return (
    <ServicePage
      badge="AI Integration"
      headline="AI That Actually Does Something"
      subheadline="Smart classification, scoring, evaluation, and content generation — AI integrated where it adds real value, not as a marketing checkbox."
      intro="Most AI implementations are solutions looking for a problem. We take the opposite approach: identify the bottleneck first, then apply AI only where it meaningfully outperforms a simple rule. The result is automation that's fast, predictable, and cost-effective — using AI models like Claude and GPT where they shine, and rule-based logic where it's better."
      features={[
        {
          icon: "\u{1F3AF}",
          title: "Response Classification",
          description:
            "Automatically categorize incoming messages, emails, or form submissions. Detect intent, sentiment, and urgency — route each item to the right workflow without human review.",
        },
        {
          icon: "\u{1F4C8}",
          title: "Lead & Opportunity Scoring",
          description:
            "AI-powered scoring that evaluates leads, candidates, or opportunities against your criteria. Surface what's worth your time and deprioritize what isn't.",
        },
        {
          icon: "\u{270D}\u{FE0F}",
          title: "Content Generation",
          description:
            "Automated email responses, proposal drafts, report summaries, and personalized messaging. AI writes the first draft, you approve and send.",
        },
        {
          icon: "\u{2699}\u{FE0F}",
          title: "Intelligent Automation",
          description:
            "AI decision layers wired into your existing workflows. Evaluate, classify, and route without building a separate AI product — just smarter automation.",
        },
      ]}
      credStats={[
        { value: "Claude & GPT", label: "Model Integration" },
        { value: "Rule-Based", label: "Where It's Better" },
        { value: "Zero", label: "Wasted API Spend" },
        { value: "Production", label: "Proven Systems" },
      ]}
      whoIsItFor={[
        {
          icon: "\u{1F4E8}",
          title: "High-Volume Communication",
          description:
            "You receive hundreds of emails, messages, or submissions daily and need them classified and routed without a human reading each one.",
        },
        {
          icon: "\u{1F50D}",
          title: "Evaluation & Screening",
          description:
            "You need to score, rank, or filter large volumes of data — leads, applications, candidates, proposals — against consistent criteria at scale.",
        },
        {
          icon: "\u{1F4DD}",
          title: "Content-Heavy Operations",
          description:
            "Your team writes the same types of emails, reports, or responses repeatedly. AI can draft them in seconds, personalized and on-brand.",
        },
      ]}
      whyUs={[
        "We've built production AI systems that process thousands of items daily — classification, scoring, and generation in live environments, not demos.",
        "AI where it adds value, rules where they're better. Our response classifier uses zero AI cost per email by using smart rule-based logic for predictable categories.",
        "We optimize for cost. No unnecessary API calls, no over-engineered model chains. You get the output you need without the surprise invoice.",
        "Every integration includes monitoring and fallback logic. When the AI isn't confident, it flags for human review instead of guessing wrong.",
      ]}
      ctaText="Ready to Put AI to Work?"
      jsonLd={jsonLd}
    />
  );
}
