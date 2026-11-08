/**
 * Palushi Brothers logo: the house/"B" mark as inline SVG plus the name as real
 * text, so it stays sharp and readable at small sizes (the exported wordmark
 * SVG has very thin, tiny lettering).
 *
 * tone="auto"  – dark text, white text when the page is in dark mode
 * tone="light" – always dark text (for always-white surfaces like the header)
 */
export function BrandLogo({
  tone = "auto",
  size = "md",
  className = "",
}: {
  tone?: "auto" | "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const ink = tone === "dark" ? "text-[#F5F3EF]" : tone === "auto" ? "text-[#1C1C1C] dark:text-[#F5F3EF]" : "text-[#1C1C1C]";
  const red = tone === "dark" ? "text-[#D2453B]" : tone === "auto" ? "text-[#9E1F1A] dark:text-[#D2453B]" : "text-[#9E1F1A]";
  const sub = tone === "dark" ? "text-neutral-400" : tone === "auto" ? "text-neutral-500 dark:text-neutral-400" : "text-neutral-500";
  const s = {
    sm: { mark: "h-7 w-7", name: "text-sm", tag: "text-[8.5px]", gap: "gap-2" },
    md: { mark: "h-9 w-9 sm:h-10 sm:w-10", name: "text-base sm:text-lg", tag: "text-[9.5px] sm:text-[10.5px]", gap: "gap-2.5" },
    lg: { mark: "h-11 w-11", name: "text-xl", tag: "text-[11px]", gap: "gap-3" },
  }[size];

  return (
    <span className={`inline-flex items-center ${s.gap} ${className}`}>
      <svg viewBox="0 0 100 100" className={`${s.mark} shrink-0`} aria-hidden>
        <g className={red} fill="none" stroke="currentColor" strokeWidth="8">
          <polyline points="10,42 50,10 90,42" strokeLinejoin="miter" strokeLinecap="square" />
          <path d="M35 70 H62 A12 12 0 0 1 62 94 H35" />
        </g>
        <g className={ink} fill="none" stroke="currentColor" strokeWidth="8">
          <path d="M32 43 V97" />
          <path d="M32 46 H58 A12 12 0 0 1 58 70 H32" />
        </g>
      </svg>
      <span className="flex flex-col whitespace-nowrap leading-none">
        <span className={`${s.name} ${ink} font-extrabold uppercase tracking-[0.06em]`}>
          Palushi <span className={red}>Brothers</span>
        </span>
        <span className={`${s.tag} ${sub} mt-1 font-semibold uppercase tracking-[0.22em]`}>
          Construction · London
        </span>
      </span>
    </span>
  );
}
