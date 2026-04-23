"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { canTrackMarketing } from "@/lib/consent";
import { siteConfig } from "@/lib/site-config";

export default function ThankYouPage() {
  const searchParams = useSearchParams();
  const hasFiredConversion = useRef(false);

  const from = searchParams.get("from") ?? "contact";
  const isQuote = from === "quote";

  useEffect(() => {
    if (!isQuote || hasFiredConversion.current) return;

    hasFiredConversion.current = true;

    if (typeof window !== "undefined" && canTrackMarketing() && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: siteConfig.googleAds.quoteConversionId,
      });
    }
  }, [isQuote]);

  return (
    <>
      <section className="bg-neutral-900 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 text-green-400">
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Thank You!
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-neutral-300">
            {isQuote
              ? "We've received your quote request and will be in touch within 24 hours."
              : "Your message has been sent successfully. We'll be in touch shortly."}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 dark:bg-neutral-950/30">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-neutral-600 dark:text-neutral-400">
            In the meantime, feel free to browse our{" "}
            <Link
              href="/projects"
              className="font-medium text-red-600 hover:underline dark:text-red-500"
            >
              projects
            </Link>{" "}
            or{" "}
            <Link
              href="/services"
              className="font-medium text-red-600 hover:underline dark:text-red-500"
            >
              services
            </Link>
            .
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="inline-block rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Back to Home
            </Link>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-block rounded-md border-2 border-red-600 px-6 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-600 hover:text-white dark:border-red-500 dark:text-red-400 dark:hover:bg-red-500 dark:hover:text-white"
            >
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
