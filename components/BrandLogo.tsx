/**
 * Palushi Brothers logo: the townhouse mark as inline SVG plus the name as real
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
    sm: { mark: "h-8 w-8", name: "text-sm", gap: "gap-2" },
    md: { mark: "h-9 w-9 sm:h-10 sm:w-10", name: "text-base sm:text-lg", gap: "gap-2.5" },
    lg: { mark: "h-11 w-11", name: "text-xl", gap: "gap-3" },
  }[size];

  return (
    <span className={`inline-flex items-center ${s.gap} ${className}`}>
      <svg viewBox="0 0 100 100" className={`${s.mark} shrink-0`} aria-hidden>
        <g className={red} fill="currentColor">
          <polygon points="63,12 73,12 73,34.94 63,26.71" />
          <rect x="51.5" y="53.5" width="11" height="13" />
        </g>
        <g className={ink} fill="none" stroke="currentColor">
          <path d="M16 92 V44 L50 16 L84 44 V92 Z" strokeWidth="5" strokeLinejoin="miter" />
          <rect x="36" y="52" width="28" height="32" strokeWidth="3" />
          <path d="M36 68 H64 M50 52 V84" strokeWidth="3" />
        </g>
      </svg>
      <span className="flex flex-col whitespace-nowrap leading-none">
        <span className={`${s.name} ${ink} font-extrabold uppercase leading-none tracking-[0.06em]`}>
          Palushi <span className={red}>Brothers</span>
        </span>
        {/* Letters are spread so the word spans exactly the width of the name above. */}
        <span className={`${s.name} ${sub} mt-0.5 flex justify-between font-semibold uppercase leading-none`}>
          <span className="sr-only">Construction</span>
          {"Construction".split("").map((letter, i) => (
            <span key={i} aria-hidden>
              {letter}
            </span>
          ))}
        </span>
      </span>
    </span>
  );
}
