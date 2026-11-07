import { siteConfig, getYearsExperience } from "@/lib/site-config";

const icons = {
  star: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z",
  calendar: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5",
  home: "M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
  shield: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
} as const;

const items: { icon: keyof typeof icons; label: string; value: string; href?: string }[] = [
  { icon: "star", label: "Trustpilot", value: "Rated Excellent", href: siteConfig.trustpilot.url },
  { icon: "calendar", label: "Experience", value: `${getYearsExperience()}+ Years` },
  { icon: "home", label: "Projects", value: `${siteConfig.stats.projectsCompleted} Completed` },
  { icon: "shield", label: "Cover", value: "Fully Insured" },
];

export function TrustBar() {
  return (
    <section aria-label="Why homeowners trust us" className="border-b border-neutral-200 bg-white py-8 dark:border-neutral-800 dark:bg-neutral-950">
      <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:grid-cols-4 sm:px-6 lg:px-8" role="list">
        {items.map((item) => {
          const content = (
            <>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600 dark:bg-red-950/40 dark:text-red-400">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d={icons[item.icon]} />
                </svg>
              </span>
              <span className="flex flex-col">
                <span className="text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  {item.label}
                </span>
                <span className="font-bold text-neutral-900 dark:text-white">{item.value}</span>
              </span>
            </>
          );
          const cls = "flex flex-col items-center gap-3 text-center lg:flex-row lg:text-left";
          return (
            <li key={item.label}>
              {item.href ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" className={`${cls} rounded-lg transition hover:opacity-80`}>
                  {content}
                </a>
              ) : (
                <div className={cls}>{content}</div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
