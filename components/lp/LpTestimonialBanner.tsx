import { testimonials } from "@/content/testimonials";

function excerpt(html: string, maxLen = 140): string {
  const plain = html
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<b>/gi, "")
    .replace(/<\/b>/gi, "")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
  if (plain.length <= maxLen) return plain;
  const cut = plain.slice(0, maxLen);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 80 ? cut.slice(0, lastSpace) : cut) + "...";
}

export function LpTestimonialBanner() {
  const t = testimonials[0];
  const excerptText = excerpt(t.quote);

  return (
    <section className="border-b border-neutral-200 bg-amber-50/80 py-6 dark:border-neutral-800 dark:bg-amber-950/20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-lg font-medium text-neutral-800 dark:text-neutral-200 sm:text-xl">
          &ldquo;{excerptText}&rdquo;
        </p>
        <p className="mt-2 font-bold text-neutral-900 dark:text-neutral-100">– {t.author}</p>
      </div>
    </section>
  );
}
