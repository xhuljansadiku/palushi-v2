"use client";

import { useState, useEffect } from "react";
import { testimonials } from "@/content/testimonials";
import { siteConfig } from "@/lib/site-config";

export function TestimonialsCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((a) => (a + 1) % testimonials.length);
    }, 60000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-16 sm:py-24 dark:bg-neutral-950/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-100">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
            Trusted by homeowners across London. Read what our clients have to
            say about working with us.
          </p>
        </div>
        <div className="mt-12">
          <div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-white p-8 shadow-sm dark:border-neutral-700 dark:bg-neutral-900 sm:p-12">
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                className={`transition-opacity duration-500 ${
                  i === active ? "opacity-100" : "absolute inset-0 opacity-0"
                }`}
              >
                <blockquote className="text-center">
                 <p
  className="text-lg text-neutral-700 sm:text-xl dark:text-neutral-300"
  dangerouslySetInnerHTML={{ __html: `&ldquo;${t.quote}&rdquo;` }}
/>
                  <footer className="mt-6">
                    <cite className="not-italic font-semibold text-neutral-900 dark:text-neutral-100">
                      {t.author}
                    </cite>
                    {t.location && (
                      <span className="text-neutral-500 dark:text-neutral-400">, {t.location}</span>
                    )}
                    {t.trustpilotReviewUrl && (
                      <span className="mt-2 block">
                        <a
                          href={t.trustpilotReviewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-red-600 hover:underline"
                        >
                          <span aria-hidden>★★★★★</span>
                          Verified on Trustpilot →
                        </a>
                      </span>
                    )}
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
          <div
            className="mt-6 flex justify-center gap-2"
            role="tablist"
            aria-label="Testimonial carousel"
          >
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`View testimonial ${i + 1} of ${testimonials.length}`}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-900 ${
                  i === active ? "w-8 bg-red-600 dark:bg-red-500" : "w-2 bg-neutral-300 dark:bg-neutral-600"
                }`}
              />
            ))}
          </div>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6">
            <a
              href={siteConfig.trustpilot.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-5 py-2.5 text-sm font-medium text-neutral-700 shadow-sm transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:border-red-500/50 dark:hover:bg-red-950/30 dark:hover:text-red-500"
            >
              <span className="text-amber-500" aria-hidden>★★★★★</span>
              View reviews on Trustpilot
            </a>
            <a
              href={siteConfig.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#4285F4] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#3367D6]"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden>
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Leave a Google review
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

 