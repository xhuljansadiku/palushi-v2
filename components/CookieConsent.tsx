"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  acceptAllCookies,
  getCookiePreferences,
  hasConsentDecision,
  rejectOptionalCookies,
  setCookiePreferences,
} from "@/lib/consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [marketingEnabled, setMarketingEnabled] = useState(false);

  useEffect(() => {
    const preferences = getCookiePreferences();
    setAnalyticsEnabled(preferences.analytics);
    setMarketingEnabled(preferences.marketing);
    setVisible(!hasConsentDecision());
  }, []);

  const handleAcceptAll = () => {
    acceptAllCookies();
    setAnalyticsEnabled(true);
    setMarketingEnabled(true);
    setVisible(false);
    setShowSettings(false);
  };

  const handleRejectAll = () => {
    rejectOptionalCookies();
    setAnalyticsEnabled(false);
    setMarketingEnabled(false);
    setVisible(false);
    setShowSettings(false);
  };

  const handleSavePreferences = () => {
    setCookiePreferences({
      analytics: analyticsEnabled,
      marketing: marketingEnabled,
      decisionMade: true,
    });
    setVisible(false);
    setShowSettings(false);
  };

  const openSettings = () => {
    const current = getCookiePreferences();
    setAnalyticsEnabled(current.analytics);
    setMarketingEnabled(current.marketing);
    setShowSettings(true);
    setVisible(true);
  };

  return (
    <>
      {!visible && (
        <span className="group fixed bottom-20 left-3 z-[60] inline-block lg:bottom-6 lg:left-4">
          <button
            type="button"
            onClick={openSettings}
            aria-label="Cookie settings"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border-0 bg-transparent p-0 text-neutral-700 shadow-none transition hover:-translate-y-0.5 hover:opacity-90 focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 dark:text-neutral-100 lg:h-12 lg:w-12"
          >
            <Image
              src="/images/icon/cookies.png"
              alt=""
              width={40}
              height={40}
              className="h-9 w-9 object-contain drop-shadow-md dark:drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] lg:h-10 lg:w-10"
            />
          </button>
          <span
            role="tooltip"
            className="pointer-events-none absolute left-full top-1/2 z-[70] ml-2 -translate-y-1/2 whitespace-nowrap rounded-md bg-neutral-900 px-2.5 py-1 text-right text-xs font-medium text-white opacity-0 shadow-md transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100 dark:bg-neutral-100 dark:text-neutral-900"
          >
            Cookie settings
          </span>
        </span>
      )}

      {visible && (
        <div
          className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200 bg-white p-4 shadow-2xl dark:border-neutral-700 dark:bg-neutral-900 sm:p-6"
          role="dialog"
          aria-label="Cookie consent"
        >
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="font-semibold text-neutral-900 dark:text-neutral-100">
                  Privacy & Cookie Preferences
                </h2>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  We only use optional cookies after your consent. You can accept all, reject optional cookies, or
                  customize your choices anytime.
                </p>
                <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                  Read our{" "}
                  <Link href="/privacy-policy" className="text-red-600 hover:underline">
                    Privacy policy &amp; cookies
                  </Link>{" "}
                  and{" "}
                  <Link href="/terms" className="text-red-600 hover:underline">
                    Terms
                  </Link>
                  .
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setShowSettings((current) => !current)}
                  className="rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50 focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 dark:border-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-800"
                >
                  {showSettings ? "Hide details" : "Customize"}
                </button>
                <button
                  type="button"
                  onClick={handleRejectAll}
                  className="rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50 focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 dark:border-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-800"
                >
                  Reject optional
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700 focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
                >
                  Accept all
                </button>
              </div>
            </div>

            {showSettings && (
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-lg border border-neutral-200 p-3 dark:border-neutral-700">
                  <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">Strictly necessary</p>
                  <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                    Required for core website functionality and security.
                  </p>
                  <p className="mt-2 text-xs font-medium text-emerald-600">Always active</p>
                </div>

                <label className="rounded-lg border border-neutral-200 p-3 dark:border-neutral-700">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">Analytics</p>
                    <input
                      type="checkbox"
                      checked={analyticsEnabled}
                      onChange={(event) => setAnalyticsEnabled(event.target.checked)}
                      className="h-4 w-4 cursor-pointer"
                    />
                  </div>
                  <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                    Helps us understand visits and improve performance.
                  </p>
                </label>

                <label className="rounded-lg border border-neutral-200 p-3 dark:border-neutral-700">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">Marketing</p>
                    <input
                      type="checkbox"
                      checked={marketingEnabled}
                      onChange={(event) => setMarketingEnabled(event.target.checked)}
                      className="h-4 w-4 cursor-pointer"
                    />
                  </div>
                  <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                    Enables advertising and conversion tracking tools.
                  </p>
                </label>
              </div>
            )}

            {showSettings && (
              <div className="mt-4 flex justify-end">
                <button
                  type="button"
                  onClick={handleSavePreferences}
                  className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-black focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white"
                >
                  Save preferences
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
