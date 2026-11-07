import { testimonials } from "@/content/testimonials";
import { siteConfig } from "@/lib/site-config";
import { btn, eyebrow, sectionLead, sectionTitle } from "@/lib/ui";

/** Split the stored HTML quote into a plain-text headline + body (no innerHTML needed). */
function parseQuote(html: string) {
  const titleMatch = html.match(/<b>(.*?)<\/b>/i);
  const title = titleMatch ? titleMatch[1].trim() : "";
  const body = html
    .replace(/<b>.*?<\/b>/gi, " ")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return { title, body };
}

function Stars() {
  return (
    <div className="flex gap-0.5 text-[#00b67a]" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/** Testimonials grid (kept the file name so existing imports keep working). */
export function TestimonialsCarousel() {
  const items = testimonials.slice(0, 3);

  return (
    <section className="py-16 sm:py-24 dark:bg-neutral-950/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className={eyebrow}>Reviews</p>
          <h2 className={`mt-3 ${sectionTitle}`}>What Our Clients Say</h2>
          <p className={sectionLead}>Rated Excellent on Trustpilot by homeowners and landlords across London.</p>
        </div>

        <ul className="mt-12 grid gap-6 lg:grid-cols-3" role="list">
          {items.map((t) => {
            const { title, body } = parseQuote(t.quote);
            return (
              <li key={t.id}>
                <figure className="flex h-full flex-col rounded-xl border border-neutral-200 bg-white p-6 text-left shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
                  <Stars />
                  {title && (
                    <p className="mt-4 text-balance font-display text-lg font-bold text-neutral-900 dark:text-neutral-100">{title}</p>
                  )}
                  <blockquote className="mt-2 flex-1 text-neutral-600 line-clamp-6 dark:text-neutral-400">
                    <p>&ldquo;{body}&rdquo;</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center justify-between gap-3 border-t border-neutral-100 pt-4 dark:border-neutral-800">
                    <span className="font-semibold text-neutral-900 dark:text-neutral-100">{t.author}</span>
                    {t.trustpilotReviewUrl && (
                      <a
                        href={t.trustpilotReviewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-red-600 hover:underline dark:text-red-400"
                      >
                        Read on Trustpilot<span className="sr-only"> (opens in new tab)</span>
                      </a>
                    )}
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 flex justify-center">
          <a href={siteConfig.trustpilot.url} target="_blank" rel="noopener noreferrer" className={btn("secondary", "md")}>
            See all reviews on Trustpilot
          </a>
        </div>
      </div>
    </section>
  );
}
