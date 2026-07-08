"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { FormConsentCheckbox } from "@/components/FormConsentCheckbox";
import { validateEmail, validateLegalConsent, validatePhone, validateRequired } from "@/lib/form-validation";
import { trackLeadConversion } from "@/lib/tracking";

export function QuoteForm() {
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
    <section id="quote-form" className="py-16 sm:py-24 dark:bg-neutral-950/30">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-neutral-200 bg-white p-8 shadow-lg dark:border-neutral-700 dark:bg-neutral-900">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Get Your Free Quote Today
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            We respond within 24 hours
          </p>
          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-6"
          >
            <input
              type="hidden"
              name="_subject"
              value="Quote request from Palushi Brothers website"
            />
            <input type="hidden" name="_captcha" value="true" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_autoresponse"
              value={`Thank you for your enquiry! We've received your quote request and will be in touch within 24 hours. If it's urgent, call us now on ${siteConfig.phone}.\n\n— Palushi Brothers Construction Ltd`}
            />

            <div>
              <label
                htmlFor="quote-name"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
              >
                Name *
              </label>
              <input
                type="text"
                id="quote-name"
                name="name"
                required
                className={`mt-2 block w-full rounded-md border bg-white px-4 py-3 dark:bg-neutral-800 dark:text-neutral-100 ${
                  errors.name ? "border-red-500" : "border-neutral-300 dark:border-neutral-600"
                }`}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="quote-phone"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
              >
                Phone *
              </label>
              <input
                type="tel"
                id="quote-phone"
                name="phone"
                required
                className={`mt-2 block w-full rounded-md border bg-white px-4 py-3 dark:bg-neutral-800 dark:text-neutral-100 ${
                  errors.phone ? "border-red-500" : "border-neutral-300 dark:border-neutral-600"
                }`}
                placeholder="Your phone number"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="quote-email"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
              >
                Email *
              </label>
              <input
                type="email"
                id="quote-email"
                name="email"
                required
                autoComplete="email"
                className={`mt-2 block w-full rounded-md border bg-white px-4 py-3 dark:bg-neutral-800 dark:text-neutral-100 ${
                  errors.email ? "border-red-500" : "border-neutral-300 dark:border-neutral-600"
                }`}
                placeholder="Your email"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="quote-message"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
              >
                Message *
              </label>
              <textarea
                id="quote-message"
                name="message"
                required
                rows={4}
                className={`mt-2 block w-full rounded-md border bg-white px-4 py-3 dark:bg-neutral-800 dark:text-neutral-100 ${
                  errors.message ? "border-red-500" : "border-neutral-300 dark:border-neutral-600"
                }`}
                placeholder="Tell us about your project"
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
            </div>

            {status === "error" && (
              <p className="rounded-md bg-red-50 p-4 text-red-800 dark:bg-red-950/50 dark:text-red-300">
                Something went wrong. Please try again or call us directly.
              </p>
            )}

            <FormConsentCheckbox
              id="quote-legal"
              checked={legalAccepted}
              onChange={setLegalAccepted}
              error={errors.legal}
            />

            <button
              type="submit"
              className="w-full rounded-md bg-red-600 px-8 py-4 text-base font-bold text-white transition hover:bg-red-700"
            >
              Get Free Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
