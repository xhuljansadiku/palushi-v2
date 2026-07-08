import Link from "next/link";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { HomeServices } from "@/components/HomeServices";
import { QuoteForm } from "@/components/QuoteForm";
import { UrgencySection } from "@/components/UrgencySection";
import { HomeProjects } from "@/components/HomeProjects";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { CTA } from "@/components/CTA";
import { areas } from "@/content/areas";
import { siteConfig, getYearsExperience } from "@/lib/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: siteConfig.url,
  },
};

const trustBullets = [
  `Over ${getYearsExperience()} years of experience across London`,
  "Transparent, detailed quotes with no hidden costs",
  "Quality craftsmanship and trusted suppliers",
  "Fully insured and committed to your satisfaction",
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <TrustBar />

      <QuoteForm />

      <UrgencySection />

      <HomeServices />

      <section className="py-16 sm:py-24 dark:bg-neutral-950/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-100">
              Why Choose Us
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
              Experience, transparency, and quality. That&apos;s what we bring to every project.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustBullets.map((bullet, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-4 rounded-lg border border-neutral-200 bg-white p-6 text-center dark:border-neutral-700 dark:bg-neutral-900 sm:flex-row sm:items-start sm:text-left"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-950/50 dark:text-red-400">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-neutral-700 dark:text-neutral-300">{bullet}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeProjects />

      <TestimonialsCarousel />

      <section className="border-t border-neutral-200 bg-neutral-50 py-12 dark:border-neutral-800 dark:bg-neutral-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-100">
              Areas We Cover
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
              Westminster, Kensington & Chelsea, Lambeth, Southwark, Wandsworth, and City of London.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-700 transition hover:border-red-600 hover:bg-red-50 hover:text-red-600 dark:border-neutral-600 dark:text-neutral-300 dark:hover:border-red-500 dark:hover:bg-red-950/30 dark:hover:text-red-500"
              >
                {area.name}
              </Link>
            ))}
            <Link
              href="/areas"
              className="rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-700 transition hover:border-red-600 hover:bg-red-50 hover:text-red-600 dark:border-neutral-600 dark:text-neutral-300 dark:hover:border-red-500 dark:hover:bg-red-950/30 dark:hover:text-red-500"
            >
              View all areas
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
