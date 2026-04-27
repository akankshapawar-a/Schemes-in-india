import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/admin/"] },
    ],
    sitemap: "https://schemesindia.in/sitemap.xml",
    host: "https://schemesindia.in",
  };
}
