import type { MetadataRoute } from "next";
import { centralSchemes, states } from "@/lib/schemes-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://schemesindia.in";
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${base}/schemes`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/states`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/central`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
  ];

  // Central scheme pages
  const centralPages: MetadataRoute.Sitemap = centralSchemes.map((s) => ({
    url: `${base}/central/${s.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // State pages
  const statePages: MetadataRoute.Sitemap = states.map((s) => ({
    url: `${base}/schemes/${s.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticPages, ...centralPages, ...statePages];
}
