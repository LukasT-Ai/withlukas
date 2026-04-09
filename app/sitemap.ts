import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const services = [
    "telecom-consulting",
    "sales-automation",
    "app-development",
    "ai-integration",
    "seo-web-presence",
    "workflow-automation",
  ];

  return [
    {
      url: "https://www.withlukas.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...services.map((slug) => ({
      url: `https://www.withlukas.com/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
