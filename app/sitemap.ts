import type { MetadataRoute } from "next";
import { posts } from "./blog/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const services = [
    "telecom-consulting",
    "sales-automation",
    "app-development",
    "ai-integration",
    "cybersecurity",
    "seo-web-presence",
    "workflow-automation",
  ];

  const blogEntries = posts.map((post) => ({
    url: `https://www.withlukas.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: "https://www.withlukas.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.withlukas.com/pricing",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.withlukas.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.withlukas.com/de",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...services.map((slug) => ({
      url: `https://www.withlukas.com/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...blogEntries,
  ];
}
