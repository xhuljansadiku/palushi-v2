import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { getAllServiceSlugs } from "@/content/services";
import { getAllAreaSlugs } from "@/content/areas";
import { getAllProjectSlugs } from "@/content/projects";
import { getAllPostSlugs } from "@/content/blog";

import { getPostBySlug } from "@/content/blog";

/**
 * Real last-modified dates (from git history) instead of `new Date()`, which would
 * falsely tell search engines every page changed on every crawl/deploy.
 * Bump the relevant date here when you actually edit that page's content.
 */
const CONTENT_UPDATED = {
  home: "2026-11-08",
  about: "2026-11-08",
  services: "2026-11-08",
  projects: "2026-11-08",
  contact: "2026-11-08",
  privacyPolicy: "2026-11-05",
  terms: "2026-07-08",
  faq: "2026-07-08",
  blog: "2026-11-08",
  areas: "2026-07-08",
  quote: "2026-11-08",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: CONTENT_UPDATED.home, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: CONTENT_UPDATED.about, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: CONTENT_UPDATED.services, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/projects`, lastModified: CONTENT_UPDATED.projects, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: CONTENT_UPDATED.contact, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privacy-policy`, lastModified: CONTENT_UPDATED.privacyPolicy, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: CONTENT_UPDATED.terms, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/faq`, lastModified: CONTENT_UPDATED.faq, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog`, lastModified: CONTENT_UPDATED.blog, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/areas`, lastModified: CONTENT_UPDATED.areas, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/quote`, lastModified: CONTENT_UPDATED.quote, changeFrequency: "monthly", priority: 0.8 },
  ];

  const servicePages: MetadataRoute.Sitemap = getAllServiceSlugs().map(
    (slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: CONTENT_UPDATED.services,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  const areaPages: MetadataRoute.Sitemap = getAllAreaSlugs().map((slug) => ({
    url: `${baseUrl}/areas/${slug}`,
    lastModified: CONTENT_UPDATED.areas,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const projectPages: MetadataRoute.Sitemap = getAllProjectSlugs().map(
    (slug) => ({
      url: `${baseUrl}/projects/${slug}`,
      lastModified: CONTENT_UPDATED.projects,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  );

  const blogPages: MetadataRoute.Sitemap = getAllPostSlugs().map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: getPostBySlug(slug)?.date ?? CONTENT_UPDATED.blog,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...areaPages,
    ...projectPages,
    ...blogPages,
  ];
}
