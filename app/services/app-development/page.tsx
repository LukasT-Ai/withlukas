import type { Metadata } from "next";
import ServicePage from "../../components/service-page";

export const metadata: Metadata = {
  title: "Web & App Development | Websites, Web Apps, Dashboards & Tools",
  description:
    "Custom websites, web applications, dashboards, and internal tools built with Next.js, React, TypeScript, and Node.js. From business websites to full-stack platforms — production-ready from day one.",
  keywords: [
    "website development",
    "web design Atlanta",
    "custom app development",
    "web application development",
    "full-stack development",
    "Next.js developer",
    "React developer",
    "TypeScript developer",
    "custom dashboard development",
    "business website development",
    "Node.js developer",
    "custom software Atlanta",
    "withlukas",
  ],
  openGraph: {
    title: "Web & App Development | withlukas",
    description:
      "Websites, web apps, dashboards, and tools built with modern frameworks. Production-ready from day one.",
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
      name: "Web & App Development",
      provider: { "@id": "https://withlukas.com/#organization" },
      serviceType: "Web & App Development",
      areaServed: ["United States", "Germany"],
      description:
        "Custom websites and full-stack web application development including business sites, dashboards, internal tools, and production systems using Next.js, React, TypeScript, and Node.js.",
      url: "https://withlukas.com/services/app-development",
    },
    {
      "@type": "WebPage",
      "@id": "https://withlukas.com/services/app-development#webpage",
      url: "https://withlukas.com/services/app-development",
      name: "Web & App Development | withlukas",
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
      badge="Web & App Development"
      headline="Websites & Custom Software Built For You"
      subheadline="From professional business websites to full-stack web applications, dashboards, and internal tools — built with modern frameworks, designed around how you actually work."
      intro="Whether you need a polished business website, a custom web application, or an internal dashboard — we build it. Using Next.js, React, TypeScript, and Node.js, every project is designed to solve your specific problem, deploy to production-grade hosting, and scale with your team. No templates, no page builders — just clean, fast, custom-built software."
      features={[
        {
          icon: "\u{1F310}",
          title: "Websites",
          description:
            "Professional business websites, landing pages, and marketing sites. Fast, responsive, SEO-optimized, and built to convert visitors into customers.",
        },
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
