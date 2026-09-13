import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site.config";
import { services } from "@/content/services";

/** Agency pages only. Demo sites are noindex and deliberately excluded. */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.seo.siteUrl.replace(/\/$/, "");
  const now = new Date();
  const staticPaths = ["", "/services", "/examples", "/pricing", "/about", "/contact", "/privacy", "/terms"];
  return [
    ...staticPaths.map((p) => ({
      url: `${base}${p}`,
      lastModified: now,
      changeFrequency: (p === "" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: p === "" ? 1 : 0.7,
    })),
    ...services.map((s) => ({
      url: `${base}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
