"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { FormConsentCheckbox } from "@/components/FormConsentCheckbox";
import { validateEmail, validateLegalConsent, validatePhone, validateRequired } from "@/lib/form-validation";
import { trackLeadConversion } from "@/lib/tracking";
import { ClickToCallLink } from "@/components/ClickToCallLink";

export function LpQuoteForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [legalAccepted, setLegalAccepted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("idle");
    setErrors({});

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("name") as string) ?? "";
    const phone = (formData.get("phone") as string) ?? "";
    const email = (formData.get("email") as string) ?? "";
    const message = (formData.get("message") as string) ?? "";

    const newErrors: Record<string, string> = {};
    const nameErr = validateRequired(name, "Name");
    if (nameErr) newErrors.name = nameErr;
    const phoneErr = validatePhone(phone);
    if (phoneErr) newErrors.phone = phoneErr;
    const emailErr = validateEmail(email);
    if (emailErr) newErrors.email = emailErr;
    const msgErr = validateRequired(message, "Message");
    if (msgErr) newErrors.message = msgErr;
    const legalErr = validateLegalConsent(legalAccepted);
    if (legalErr) newErrors.legal = legalErr;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch(siteConfig.formSubmit.endpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        form.reset();
        setLegalAccepted(false);
        trackLeadConversion("quote");
        router.push("/thank-you?from=quote");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="quote-form" className="bg-neutral-50 py-12 sm:py-16 dark:bg-neutral-900/50">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border-2 border-red-600/20 bg-white p-6 shadow-lg sm:p-8 dark:bg-neutral-900 dark:border-red-500/20">
          <p className="text-center text-sm font-bold uppercase tracking-wider text-red-600 dark:text-red-500">
            Free • No obligation • Fast response
          </p>
          <h2 className="mt-2 text-center text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Get Your Free Quote Today
          </h2>
          <p className="mt-2 text-center font-semibold text-neutral-600 dark:text-neutral-400">
            We respond within 24 hours • Limited availability this month
          </p>
          <form onSubmit={handleSubmit}
              noValidate className="mt-6 space-y-5">
            <input type="hidden" name="_subject" value="Quote request - Palushi Brothers LP" />
            <input type="hidden" name="_captcha" value="true" />
            {/* Honeypot: hidden from people, bots fill it and FormSubmit discards the entry */}
            <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
            <input type="hidden" name="_template" value="table" />

            <div>
              <label htmlFor="lp-name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Name *
              </label>
              <input
                type="text"
                id="lp-name"
                name="name"
                required
                className={`mt-2 block w-full rounded-lg border px-4 py-3 text-lg dark:bg-neutral-800 dark:text-neutral-100 ${
                  errors.name ? "border-red-500" : "border-neutral-300 dark:border-neutral-600"
                }`}
                placeholder="Your name"
              />
              {errors.name && <p role="alert" className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="lp-phone" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Phone *
              </label>
              <input
                type="tel"
                id="lp-phone"
                name="phone"
                required
                className={`mt-2 block w-full rounded-lg border px-4 py-3 text-lg dark:bg-neutral-800 dark:text-neutral-100 ${
                  errors.phone ? "border-red-500" : "border-neutral-300 dark:border-neutral-600"
                }`}
                placeholder="Your phone number"
              />
              {errors.phone && <p role="alert" className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="lp-email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Email *
              </label>
              <input
                type="email"
                id="lp-email"
                name="email"
                required
                autoComplete="email"
                className={`mt-2 block w-full rounded-lg border px-4 py-3 text-lg dark:bg-neutral-800 dark:text-neutral-100 ${
                  errors.email ? "border-red-500" : "border-neutral-300 dark:border-neutral-600"
                }`}
                placeholder="Your email"
              />
              {errors.email && <p role="alert" className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="lp-message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Message *
              </label>
              <textarea
                id="lp-message"
                name="message"
                required
                rows={4}
                className={`mt-2 block w-full rounded-lg border px-4 py-3 text-lg dark:bg-neutral-800 dark:text-neutral-100 ${
                  errors.message ? "border-red-500" : "border-neutral-300 dark:border-neutral-600"
                }`}
                placeholder="Tell us about your project"
              />
              {errors.message && <p role="alert" className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>}
            </div>

            {status === "error" && (
              <p className="rounded-lg bg-red-50 p-4 text-red-800 dark:bg-red-950/50 dark:text-red-300">
                Something went wrong. Please call us directly:{" "}
                <ClickToCallLink location="lp_form" className="font-bold underline">{siteConfig.phone}</ClickToCallLink>
              </p>
            )}

            <p className="text-center text-sm text-neutral-600 dark:text-neutral-400">
              Prefer to call?{" "}
              <ClickToCallLink location="lp_form" className="font-bold text-red-600 underline dark:text-red-400">
                Call us now
              </ClickToCallLink>
            </p>

            <FormConsentCheckbox
              id="lp-legal"
              checked={legalAccepted}
              onChange={setLegalAccepted}
              error={errors.legal}
            />

            <button
              type="submit"
              className="w-full min-h-[56px] rounded-xl bg-red-600 py-4 text-xl font-bold text-white shadow-lg transition hover:bg-red-700 active:scale-[0.99]"
            >
              Get Free Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
