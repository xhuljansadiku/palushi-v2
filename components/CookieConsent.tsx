"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { COOKIE_CONSENT_KEY, dispatchConsentUpdate } from "@/lib/consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    dispatchConsentUpdate();
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "rejected");
    dispatchConsentUpdate();
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-neutral-200 bg-white p-4 shadow-lg dark:border-neutral-700 dark:bg-neutral-900 sm:p-6"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div>
          <h2 className="font-semibold text-neutral-900 dark:text-neutral-100">We use cookies</h2>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            This website uses cookies to improve your experience. By clicking
            Accept or Reject, you agree to our use of cookies as described in
            our{" "}
            <Link href="/privacy-policy" className="text-red-600 hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap justify-center gap-3 sm:justify-end">
          <button
            type="button"
            onClick={reject}
            aria-label="Reject cookies"
            className="rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50 focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 dark:border-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-800"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={accept}
            aria-label="Accept cookies"
            className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700 focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
