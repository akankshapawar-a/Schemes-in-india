import type { MetadataRoute } from "next";
import { centralSchemes, states, categories } from "@/lib/schemes-data";
import { newsArticles } from "@/lib/news-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://schemesindia.in";
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base,                       lastModified: now, changeFrequency: "daily",   priority: 1.0 },
    { url: base + "/schemes",          lastModified: now, changeFrequency: "daily",   priority: 0.9 },
    { url: base + "/states",           lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: base + "/central",          lastModified: now, changeFrequency: "daily",   priority: 0.9 },
    { url: base + "/blog",             lastModified: now, changeFrequency: "daily",   priority: 0.9 },
    { url: base + "/search",           lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: base + "/about",            lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: base + "/contact",          lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: base + "/privacy-policy",   lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
    { url: base + "/disclaimer",       lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
  ];

  const centralPages: MetadataRoute.Sitemap = centralSchemes.map((s) => ({
    url: base + "/central/" + s.slug,
    lastModified: s.lastUpdated ? new Date(s.lastUpdated) : now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const statePages: MetadataRoute.Sitemap = states.map((s) => ({
    url: base + "/schemes/" + s.slug,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const categoryPages: MetadataRoute.Sitemap = categories.map((c) => ({
    url: base + "/category/" + c.slug,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const blogPages: MetadataRoute.Sitemap = newsArticles.map((a) => ({
    url: base + "/blog/" + a.slug,
    lastModified: new Date(a.lastModified ?? a.date),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticPages, ...centralPages, ...statePages, ...categoryPages, ...blogPages];
}
