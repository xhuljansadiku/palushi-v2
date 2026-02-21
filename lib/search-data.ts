import { blogPosts } from "@/content/blog";
import { services } from "@/content/services";
import { faqs } from "@/content/faq";

export type SearchResult = {
  type: "blog" | "service" | "faq";
  title: string;
  excerpt: string;
  href: string;
};

export function searchContent(query: string): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];

  const results: SearchResult[] = [];

  // Blog
  for (const post of blogPosts) {
    const match =
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q);
    if (match) {
      results.push({
        type: "blog",
        title: post.title,
        excerpt: post.excerpt,
        href: `/blog/${post.slug}`,
      });
    }
  }

  // Services
  for (const svc of services) {
    const match =
      svc.title.toLowerCase().includes(q) ||
      svc.shortDescription.toLowerCase().includes(q);
    if (match) {
      results.push({
        type: "service",
        title: svc.title,
        excerpt: svc.shortDescription,
        href: `/services/${svc.slug}`,
      });
    }
  }

  // FAQ
  for (const faq of faqs) {
    const match =
      faq.question.toLowerCase().includes(q) ||
      faq.answer.toLowerCase().includes(q);
    if (match) {
      results.push({
        type: "faq",
        title: faq.question,
        excerpt: faq.answer.length > 100 ? faq.answer.slice(0, 100) + "..." : faq.answer,
        href: "/faq",
      });
    }
  }

  return results.slice(0, 10);
}
