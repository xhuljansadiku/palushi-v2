"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { WhatsAppButton } from "./WhatsAppButton";
import { ClickToCallLink } from "./ClickToCallLink";
import { btn } from "@/lib/ui";
import { Sentences } from "@/components/Sentences";

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
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
          {title}
        </h2>
        {variant === "default" && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-300">
            <Sentences text={subtitle} />
          </p>
        )}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
          <Link
            href="/quote"
            className={btn("primary", "lg", "w-full sm:w-auto")}
          >
            Get a Free Quote
          </Link>
          <ClickToCallLink location="cta_section"
            className={btn("inverse", "lg", "w-full sm:w-auto")}
          >
            Call Now: {siteConfig.phone}
          </ClickToCallLink>
          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
}
