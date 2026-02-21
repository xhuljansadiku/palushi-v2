"use client";

import { useState, useEffect } from "react";
import { testimonials } from "@/content/testimonials";
import { siteConfig } from "@/lib/site-config";

export function TestimonialsCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((a) => (a + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
            Trusted by homeowners across London. Read what our clients have to
            say about working with us.
          </p>
        </div>
        <div className="mt-12">
          <div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-white p-8 shadow-sm sm:p-12">
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                className={`transition-opacity duration-500 ${
                  i === active ? "opacity-100" : "absolute inset-0 opacity-0"
                }`}
              >
                <blockquote className="text-center">
                  <p className="text-lg text-neutral-700 sm:text-xl">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="mt-6">
                    <cite className="not-italic font-semibold text-neutral-900">
                      {t.author}
                    </cite>
                    {t.location && (
                      <span className="text-neutral-500">, {t.location}</span>
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
                className={`h-2 rounded-full transition-all focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 ${
                  i === active ? "w-8 bg-red-600" : "w-2 bg-neutral-300"
                }`}
              />
            ))}
          </div>
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className="text-neutral-500">★★★★★</span>
            <a
              href={siteConfig.trustpilot.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-red-600 hover:underline"
            >
              View more reviews on Trustpilot →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
