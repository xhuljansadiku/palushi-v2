"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { WhatsAppButton } from "./WhatsAppButton";
import { trackEvent, TRACKING_EVENTS } from "@/lib/tracking";

interface CTAProps {
  title?: string;
  subtitle?: string;
  variant?: "default" | "compact";
}

export function CTA({
  title = "Ready to Start Your Project?",
  subtitle = "Get a free, no-obligation quote today. We're here to help bring your vision to life.",
  variant = "default",
}: CTAProps) {
  return (
    <section className="relative overflow-hidden bg-neutral-900 py-16 text-white sm:py-20">
        <span className="absolute right-4 top-4 rounded bg-red-600/90 px-3 py-1 text-xs font-semibold uppercase">
          Free quote • No obligation
        </span>
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
          {title}
        </h2>
        {variant === "default" && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-300">
            {subtitle}
          </p>
        )}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
          <Link
            href="/quote"
            className="inline-flex w-full items-center justify-center rounded-md bg-red-600 px-8 py-4 text-base font-semibold text-white transition hover:bg-red-700 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 sm:w-auto"
          >
            Get a Free Quote
          </Link>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            onClick={() => trackEvent(TRACKING_EVENTS.CLICK_TO_CALL)}
            aria-label={`Call us: ${siteConfig.phone}`}
            className="inline-flex w-full items-center justify-center rounded-md border-2 border-white px-8 py-4 text-base font-semibold text-white transition hover:bg-white hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 sm:w-auto"
          >
            Call Now: {siteConfig.phone}
          </a>
          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
}
