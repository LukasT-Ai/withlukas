import type { Metadata } from "next";
import ServicePage from "../../components/service-page";

export const metadata: Metadata = {
  title: "App Development | Full-Stack Web Apps, Dashboards & Tools",
  description:
    "Custom web applications, dashboards, and internal tools built with Next.js, React, TypeScript, and Node.js. Production-ready software designed around your workflow, not a template.",
  keywords: [
    "custom app development",
    "web application development",
    "full-stack development",
    "Next.js developer",
    "React developer",
    "TypeScript developer",
    "custom dashboard development",
    "internal tools development",
    "Node.js developer",
    "custom software Atlanta",
    "withlukas",
  ],
  openGraph: {
    title: "App Development | withlukas",
    description:
      "Full-stack web apps, dashboards, and tools built with modern frameworks. Production-ready from day one.",
    url: "https://withlukas.com/services/app-development",
  },
  alternates: {
    canonical: "https://withlukas.com/services/app-development",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://withlukas.com/services/app-development#service",
      name: "App Development",
      provider: { "@id": "https://withlukas.com/#organization" },
      serviceType: "Custom App Development",
      areaServed: ["United States", "Germany"],
      description:
        "Full-stack web application development including dashboards, internal tools, and production systems using Next.js, React, TypeScript, and Node.js.",
      url: "https://withlukas.com/services/app-development",
    },
    {
      "@type": "WebPage",
      "@id": "https://withlukas.com/services/app-development#webpage",
      url: "https://withlukas.com/services/app-development",
      name: "App Development | withlukas",
      isPartOf: { "@id": "https://withlukas.com/#website" },
      about: {
        "@id": "https://withlukas.com/services/app-development#service",
      },
    },
  ],
};

export default function AppDevelopmentPage() {
  return (
    <ServicePage
      badge="App Development"
      headline="Custom Software That Fits Your Workflow"
      subheadline="Full-stack web apps, dashboards, and internal tools built with modern frameworks. Designed around how you actually work, not how a template thinks you should."
      intro="Off-the-shelf software forces you into someone else's workflow. We build custom applications — dashboards, portals, internal tools, and production systems — using Next.js, React, TypeScript, and Node.js. Every app is built to solve your specific problem, deploy to your infrastructure, and scale with your team."
      features={[
        {
          icon: "\u{1F5A5}\u{FE0F}",
          title: "Web Applications",
          description:
            "Full-stack apps with modern UI, authentication, database integration, and API layers. Built for performance and deployed to production-grade hosting.",
        },
        {
          icon: "\u{1F4CA}",
          title: "Dashboards & Analytics",
          description:
            "Real-time data visualization, KPI tracking, and reporting interfaces. Connect to any data source and surface the metrics that matter.",
        },
        {
          icon: "\u{1F527}",
          title: "Internal Tools",
          description:
            "Admin panels, data management interfaces, and workflow tools that your team actually wants to use. No more spreadsheets pretending to be software.",
        },
        {
          icon: "\u{1F4F1}",
          title: "Responsive Design",
          description:
            "Every app works on desktop, tablet, and mobile. No separate builds, no compromises. Your team can work from anywhere.",
        },
      ]}
      credStats={[
        { value: "9+", label: "Apps Shipped" },
        { value: "Next.js", label: "React & TypeScript" },
        { value: "Node.js", label: "Python & VBA" },
        { value: "Vercel", label: "Railway & Custom" },
      ]}
      whoIsItFor={[
        {
          icon: "\u{1F3E2}",
          title: "Businesses Outgrowing Spreadsheets",
          description:
            "Your operations run on Excel files and shared drives. You need a real application — with access controls, a proper database, and an interface your whole team can use.",
        },
        {
          icon: "\u{1F468}\u{200D}\u{1F4BC}",
          title: "Teams That Need Internal Tools",
          description:
            "Your developers are focused on the product. You need someone to build the admin panels, reporting dashboards, and workflow tools that keep operations running.",
        },
        {
          icon: "\u{1F4A1}",
          title: "Anyone With a Custom Problem",
          description:
            "If no existing product does what you need, we build it. From algorithmic trading dashboards to multi-profile job search engines — if it can be built, we build it.",
        },
      ]}
      whyUs={[
        "We've shipped 9+ production applications — each solving a real problem, not a demo. Our tools are live and in use daily.",
        "Modern stack: Next.js, React, TypeScript, Node.js, Tailwind. Fast to build, easy to maintain, and performs at scale.",
        "We handle the full stack — frontend, backend, database, hosting, and deployment. You get a finished product, not a half-built prototype.",
        "Every project includes deployment to production-grade hosting with monitoring, so your app doesn't just work today — it stays running.",
      ]}
      ctaText="Ready to Build Something Custom?"
      jsonLd={jsonLd}
    />
  );
}
