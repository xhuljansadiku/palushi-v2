/**
 * Design tokens for buttons — use these everywhere so radius, height and
 * colour stay consistent across the site.
 */
const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const sizes = {
  sm: "min-h-11 px-4 text-sm",
  md: "min-h-12 px-6 text-base",
  lg: "min-h-14 px-8 text-lg",
} as const;

const variants = {
  primary:
    "bg-red-600 text-white shadow-sm hover:bg-red-700 focus-visible:ring-red-600 dark:focus-visible:ring-offset-neutral-950",
  secondary:
    "border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white focus-visible:ring-red-600 dark:border-red-500 dark:text-red-400 dark:hover:bg-red-500 dark:hover:text-white dark:focus-visible:ring-offset-neutral-950",
  /** Outline on a surface that stays white in both themes (e.g. the header) */
  outlineLight:
    "border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white focus-visible:ring-red-600",
  /** For use on dark/photo backgrounds */
  inverse:
    "border-2 border-white/80 bg-white/5 text-white backdrop-blur-sm hover:bg-white hover:text-neutral-900 focus-visible:ring-white focus-visible:ring-offset-neutral-900",
  ghost:
    "text-red-600 hover:text-red-700 hover:underline underline-offset-4 focus-visible:ring-red-600 dark:text-red-400",
} as const;

export function btn(
  variant: keyof typeof variants = "primary",
  size: keyof typeof sizes = "md",
  extra = ""
) {
  // If the caller hides the button (e.g. "hidden lg:inline-flex"), drop the base display
  // class, otherwise inline-flex would override hidden.
  const b = /(^|\s)hidden(\s|$)/.test(extra) ? base.replace("inline-flex ", "") : base;
  return `${b} ${sizes[size]} ${variants[variant]} ${extra}`.trim();
}

export const sectionTitle =
  "font-display text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-neutral-50";
export const sectionLead =
  "mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400";
export const eyebrow =
  "text-sm font-semibold uppercase tracking-[0.18em] text-red-600 dark:text-red-400";
