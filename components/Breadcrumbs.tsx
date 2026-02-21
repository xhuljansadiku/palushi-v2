import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href && { item: `${siteConfig.url}${item.href}` }),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-neutral-600">
          <li>
            <Link href="/" className="transition hover:text-red-600">
              Home
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span aria-hidden className="text-neutral-400">
                /
              </span>
              {item.href ? (
                <Link href={item.href} className="transition hover:text-red-600">
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium text-neutral-900">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
