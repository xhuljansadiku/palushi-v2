"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { ClickToCallLink } from "./ClickToCallLink";

export function LpStickyCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex gap-3 border-t border-neutral-200 bg-white p-3 shadow-[0_-4px_24px_rgba(0,0,0,0.12)] dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-[0_-4px_24px_rgba(0,0,0,0.4)] lg:hidden">
      <ClickToCallLink className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-600 py-5 text-xl font-bold text-white shadow-lg transition active:scale-[0.98] active:bg-red-700">
        <svg className="h-6 w-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        Call Now
      </ClickToCallLink>
      <Link
        href="#quote-form"
        className="flex flex-1 items-center justify-center rounded-xl border-2 border-red-600 py-5 text-xl font-bold text-red-600 transition active:scale-[0.98] active:bg-red-50 dark:border-red-500 dark:text-red-400 dark:active:bg-red-950/30"
      >
        Get Free Quote
      </Link>
    </div>
  );
}
