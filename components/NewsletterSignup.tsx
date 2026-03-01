"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { trackEvent, TRACKING_EVENTS } from "@/lib/tracking";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");
    // Placeholder - integrate with Mailchimp, ConvertKit, or Formsubmit
    try {
      const res = await fetch(siteConfig.newsletter.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _subject: "Newsletter signup",
          email,
          _template: "box",
        }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
        trackEvent(TRACKING_EVENTS.NEWSLETTER_SIGNUP);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="border-t border-neutral-200 bg-neutral-50 py-16 dark:border-neutral-800 dark:bg-neutral-900/50">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
          Stay Updated
        </h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          Get tips, offers, and project inspiration. No spam.
        </p>
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            required
            className="w-full rounded-md border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-red-600 focus:ring-red-600 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-500 sm:w-64"
          />
          <button
            type="submit"
            className="w-full rounded-md bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700 sm:w-auto"
          >
            Subscribe
          </button>
        </form>
        {status === "success" && (
          <p className="mt-3 text-sm text-green-600">Thanks for subscribing!</p>
        )}
        {status === "error" && (
          <p className="mt-3 text-sm text-red-600">Something went wrong. Try again.</p>
        )}
      </div>
    </section>
  );
}
