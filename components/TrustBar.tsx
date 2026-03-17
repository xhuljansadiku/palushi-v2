import Link from "next/link";
import { siteConfig, getYearsExperience } from "@/lib/site-config";

const items = [
  {
    icon: "★",
    label: "Trustpilot",
    value: "Rated Excellent",
    href: siteConfig.trustpilot.url,
  },
  {
    icon: "📅",
    label: "Experience",
    value: `${getYearsExperience()}+ Years`,
  },
  {
    icon: "🏠",
    label: "Projects",
    value: `${siteConfig.stats.projectsCompleted} Completed`,
  },
  {
    icon: "📍",
    label: "Location",
    value: "Serving London",
  },
];

export function TrustBar() {
  return (
    <section className="border-b border-neutral-200 bg-white py-6 dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-1 text-center"
            >
              <span className="text-2xl" aria-hidden>
                {item.icon}
              </span>
              <span className="text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                {item.label}
              </span>
              {item.href ? (
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-neutral-900 hover:text-red-600 dark:text-white dark:hover:text-red-400"
                >
                  {item.value}
                </Link>
              ) : (
                <span className="font-bold text-neutral-900 dark:text-white">
                  {item.value}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
