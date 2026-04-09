import type { Metadata } from "next";
import ServicePage from "../../components/service-page";

export const metadata: Metadata = {
  title: "SEO & Web Presence | Technical SEO, Structured Data & Web Development",
  description:
    "Technical SEO and web presence services. Structured data, JSON-LD schemas, sitemaps, OG images, bilingual content, and fast Next.js websites built to rank on Google and convert visitors.",
  keywords: [
    "technical SEO",
    "SEO services",
    "structured data",
    "JSON-LD",
    "schema markup",
    "sitemap generation",
    "OG image optimization",
    "web development SEO",
    "Next.js SEO",
    "bilingual website",
    "Google ranking",
    "web presence optimization",
    "SEO consultant Atlanta",
    "withlukas",
  ],
  openGraph: {
    title: "SEO & Web Presence | withlukas",
    description:
      "Technical SEO, structured data, sitemaps, OG images, and fast websites built to rank on Google and convert visitors.",
    url: "https://withlukas.com/services/seo-web-presence",
  },
  alternates: {
    canonical: "https://withlukas.com/services/seo-web-presence",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://withlukas.com/services/seo-web-presence#service",
      name: "SEO & Web Presence",
      provider: { "@id": "https://withlukas.com/#organization" },
      serviceType: "SEO Optimization",
      areaServed: ["United States", "Germany"],
      description:
        "Technical SEO services including structured data, JSON-LD schemas, sitemap generation, OG image optimization, and high-performance web development.",
      url: "https://withlukas.com/services/seo-web-presence",
    },
    {
      "@type": "WebPage",
      "@id": "https://withlukas.com/services/seo-web-presence#webpage",
      url: "https://withlukas.com/services/seo-web-presence",
      name: "SEO & Web Presence | withlukas",
      isPartOf: { "@id": "https://withlukas.com/#website" },
      about: {
        "@id": "https://withlukas.com/services/seo-web-presence#service",
      },
    },
  ],
};

export default function SEOWebPresencePage() {
  return (
    <ServicePage
      badge="SEO & Web Presence"
      headline="Get Found by the Right People"
      subheadline="Technical SEO, structured data, and fast websites that rank on Google and actually convert the visitors they attract."
      intro="A beautiful website that nobody finds is just an expensive business card. We build web presences that are engineered for search visibility from the ground up — structured data that tells Google exactly what your business offers, metadata that makes people click, and page speed that keeps them there."
      features={[
        {
          icon: "\u{1F50D}",
          title: "Technical SEO",
          description:
            "Sitemap generation, robots.txt, canonical URLs, meta tags, and crawl optimization. Every page follows Google's latest best practices for indexing and ranking.",
        },
        {
          icon: "\u{1F4CB}",
          title: "Structured Data & JSON-LD",
          description:
            "Schema markup for your business, services, articles, and FAQs. Rich results in Google search — star ratings, service lists, and knowledge panel data.",
        },
        {
          icon: "\u{1F5BC}\u{FE0F}",
          title: "OG Images & Social Cards",
          description:
            "Dynamic Open Graph image generation so every page looks professional when shared on LinkedIn, Twitter, or Slack. First impressions happen before the click.",
        },
        {
          icon: "\u{1F30D}",
          title: "Bilingual & Multi-Market",
          description:
            "English and German content with proper hreflang tags, locale-specific SEO, and culturally appropriate messaging. Reach audiences in both the US and DACH markets.",
        },
      ]}
      credStats={[
        { value: "JSON-LD", label: "Structured Data" },
        { value: "Dynamic OG", label: "Image Generation" },
        { value: "EN / DE", label: "Bilingual SEO" },
        { value: "Next.js", label: "Performance First" },
      ]}
      whoIsItFor={[
        {
          icon: "\u{1F3E5}",
          title: "Professional Practices",
          description:
            "Doctors, lawyers, consultants — you need patients or clients to find you on Google. A fast website with proper schema markup and local SEO puts you on the map.",
        },
        {
          icon: "\u{1F3E2}",
          title: "Small & Mid-Size Businesses",
          description:
            "You have a website but it doesn't rank. We audit your technical SEO, fix the issues, and build the structured data foundation that Google needs to surface your pages.",
        },
        {
          icon: "\u{1F30E}",
          title: "US-German Market Players",
          description:
            "Operating in both the US and German markets? We build bilingual websites with proper SEO for both — not just translated text, but market-specific optimization.",
        },
      ]}
      whyUs={[
        "We've built SEO-first websites for professionals and businesses — with real results in Google search, not theoretical improvements.",
        "Every site includes JSON-LD structured data, sitemaps, robots.txt, canonical URLs, and dynamic OG images out of the box. SEO is built in, not bolted on.",
        "Bilingual (EN/DE) capability means we can build for the US, Germany, Austria, and Switzerland without separate agencies for each market.",
        "We build on Next.js — fast by default, with server-side rendering that gives search engines fully rendered content on the first crawl.",
      ]}
      ctaText="Ready to Get Found?"
      jsonLd={jsonLd}
    />
  );
}
