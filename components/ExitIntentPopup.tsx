"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { btn } from "@/lib/ui";
import { Sentences } from "@/components/Sentences";

const STORAGE_KEY = "palushi-exit-intent-seen";
/** Never interrupt people who are already converting */
const EXCLUDED = ["/quote", "/contact", "/thank-you", "/privacy-policy", "/terms"];
/** Give visitors time to read before we're allowed to show anything */
const MIN_TIME_ON_SITE_MS = 15000;

/**
 * Real exit-intent: desktop only, fires once per session when the pointer
 * leaves through the top of the window (heading to tabs / address bar).
 */
export function ExitIntentPopup() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    if (EXCLUDED.some((p) => pathname?.startsWith(p))) return;
    if (!window.matchMedia("(min-width: 1024px) and (pointer: fine)").matches) return;

    const armedAt = Date.now();
    const onLeave = (e: MouseEvent) => {
      if (e.clientY > 0 || e.relatedTarget) return;
      if (Date.now() - armedAt < MIN_TIME_ON_SITE_MS) return;
      // Don't interrupt someone typing in a form
      const el = document.activeElement;
      if (el && ["INPUT", "TEXTAREA", "SELECT"].includes(el.tagName)) return;
      sessionStorage.setItem(STORAGE_KEY, "1");
      setVisible(true);
    };
    document.addEventListener("mouseout", onLeave);
    return () => document.removeEventListener("mouseout", onLeave);
  }, [pathname]);

  useEffect(() => {
    if (!visible) return;
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setVisible(false);
      if (e.key === "Tab" && dialogRef.current) {
        const f = dialogRef.current.querySelectorAll<HTMLElement>("a, button");
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      previous?.focus();
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && setVisible(false)}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="exit-title"
        className="relative w-full max-w-md rounded-xl border border-neutral-200 bg-white p-8 text-left shadow-2xl dark:border-neutral-700 dark:bg-neutral-900"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={() => setVisible(false)}
          className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-md text-neutral-500 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 dark:text-neutral-400 dark:hover:bg-white/10"
          aria-label="Close"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 id="exit-title" className="pr-10 text-2xl font-bold text-neutral-900 dark:text-neutral-100">
          Before you go…
        </h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400">
          <Sentences text="Get a free, no-obligation quote for your project. We usually reply within 24 hours." />
        </p>
        <div className="mt-6 grid gap-3">
          <Link href="/quote" onClick={() => setVisible(false)} className={btn("primary", "md", "w-full")}>
            Get a Free Quote
          </Link>
          <a href={`tel:${siteConfig.phoneRaw}`} onClick={() => setVisible(false)} className={btn("secondary", "md", "w-full")}>
            Call {siteConfig.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
