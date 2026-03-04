"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const STORAGE_KEY = "palushi-exit-intent-seen";

export function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const timer = setTimeout(() => {
      setVisible(true);
      sessionStorage.setItem(STORAGE_KEY, "1");
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-label="Special offer"
    >
      <div className="relative max-w-md rounded-xl border border-neutral-200 bg-white p-8 shadow-2xl">
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="absolute right-4 top-4 rounded p-1 text-neutral-500 hover:bg-neutral-100"
          aria-label="Close"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h3 className="text-xl font-bold text-neutral-900">
          Get Your Free Quote
        </h3>
        <p className="mt-2 text-neutral-600">
          Don&apos;t leave without getting a free, no-obligation quote for your
          project. We respond within 24 hours.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <Link
            href="/quote"
            onClick={() => setVisible(false)}
            className="rounded-md bg-red-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-red-700"
          >
            Get Free Quote
          </Link>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            onClick={() => setVisible(false)}
            className="rounded-md border-2 border-neutral-300 px-6 py-3 text-center font-semibold text-neutral-800 transition hover:border-red-600 hover:text-red-600"
          >
            Call Now: {siteConfig.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
