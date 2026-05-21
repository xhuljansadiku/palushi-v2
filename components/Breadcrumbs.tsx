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
      <nav aria-label="Breadcrumb" className="mb-5 overflow-hidden sm:mb-6">
        <ol className="flex min-w-0 flex-wrap items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300">
          <li>
            <Link href="/" className="transition hover:text-red-600 dark:hover:text-red-400">
              Home
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex min-w-0 items-center gap-2">
              <span aria-hidden className="text-neutral-400 dark:text-neutral-500">
                /
              </span>
              {item.href ? (
                <Link
                  href={item.href}
                  className="truncate transition hover:text-red-600 dark:hover:text-red-400"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="max-w-[14rem] truncate font-medium text-neutral-900 dark:text-neutral-100 sm:max-w-none">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
