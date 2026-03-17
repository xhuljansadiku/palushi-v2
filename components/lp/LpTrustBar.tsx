import Link from "next/link";
import { siteConfig, getYearsExperience } from "@/lib/site-config";

const items = [
  { label: "Trustpilot", value: "Rated Excellent", href: siteConfig.trustpilot.url },
  { label: "Experience", value: `${getYearsExperience()}+ Years` },
  { label: "Projects", value: `${siteConfig.stats.projectsCompleted} Completed` },
  { label: "Location", value: "Serving London" },
];

export function LpTrustBar() {
  return (
    <section className="border-b border-neutral-200 bg-white py-6 dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {items.map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                {item.label}
              </p>
              {item.href ? (
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block font-bold text-neutral-900 hover:text-red-600 dark:text-white dark:hover:text-red-400"
                >
                  {item.value}
                </Link>
              ) : (
                <p className="mt-1 font-bold text-neutral-900 dark:text-white">{item.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
