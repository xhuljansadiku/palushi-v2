"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { services } from "@/content/services";
import { siteConfig } from "@/lib/site-config";
import { FormConsentCheckbox } from "@/components/FormConsentCheckbox";
import { ClickToCallLink } from "@/components/ClickToCallLink";
import { validateLegalConsent, validatePhone, validateRequired } from "@/lib/form-validation";
import { trackEvent, trackLeadConversion } from "@/lib/tracking";

/** Outline icons per service (24px grid) */
const serviceIcons: Record<string, React.ReactNode> = {
  "loft-conversions": (
    <>
      <path d="M3 11 12 4l9 7" />
      <path d="M5 10v10h14V10" />
      <path d="m9.5 8.5 2.5-2 2.5 2v2.5h-5z" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  "house-extensions": (
    <>
      <path d="M2 11 9 5l7 6" />
      <path d="M4 10v10h10V10" />
      <path d="M14 13h7v7h-7" strokeDasharray="2 2" />
      <path d="M17.5 15v3M16 16.5h3" />
    </>
  ),
  "full-renovations": (
    <>
      <path d="m14 6 4 4" />
      <path d="M12.5 7.5 5 15l-1.5 4.5L8 18l7.5-7.5" />
      <path d="m15.5 4.5 2-2 4 4-2 2" />
      <path d="M3 21h18" />
    </>
  ),
  roofing: (
    <>
      <path d="M2 13 12 5l10 8" />
      <path d="M5 11v9h14v-9" />
      <path d="M8 13.5h8M7 16.5h10" />
      <path d="M16 6.5V4h2.5v4.5" />
    </>
  ),
  "kitchen-bathroom-refurbishments": (
    <>
      <path d="M4 12h16v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z" />
      <path d="M6 12V6a2 2 0 0 1 2-2c1.1 0 2 .9 2 2" />
      <path d="M9 7h2" />
      <path d="M7 19l-1 2M17 19l1 2" />
    </>
  ),
};

const questionIcon = (
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .8-1 1.5v.7" />
    <path d="M12 17h.01" />
  </>
);

const NOT_SURE = "Not sure yet";
const timings = ["As soon as possible", "1–3 months", "3–6 months", "Just planning"];
const stepNames = ["Your project", "Details", "Contact"];

const fieldBase =
  "mt-1.5 block h-12 w-full rounded-lg border bg-white px-4 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-600/30 dark:bg-neutral-800 dark:text-neutral-100";
const fieldClass = (hasError: boolean) =>
  `${fieldBase} ${hasError ? "border-red-500 focus:border-red-500" : "border-neutral-300 focus:border-red-600 dark:border-neutral-600"}`;
const labelClass = "block text-sm font-medium text-neutral-700 dark:text-neutral-300";

function validateOptionalEmail(email: string): string | null {
  if (!email.trim()) return null;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? null : "Please enter a valid email address";
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1 text-sm text-red-600 dark:text-red-400">
      {message}
    </p>
  );
}

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {children}
    </svg>
  );
}

const backBtn =
  "h-14 rounded-lg border-2 border-neutral-300 px-6 font-semibold text-neutral-700 transition hover:border-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 dark:border-neutral-600 dark:text-neutral-300";
const primaryBtn =
  "flex h-14 flex-1 items-center justify-center gap-2 rounded-lg bg-red-600 text-lg font-semibold text-white shadow-md transition hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

/**
 * Homepage quote form as a 3-step wizard:
 * 1) pick a service (one tap), 2) timing + optional details, 3) contact.
 * All answers are sent in one FormSubmit request on the last step.
 */
export function QuoteWizard() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [service, setService] = useState("");
  const [timing, setTiming] = useState("");
  const [message, setMessage] = useState("");
  const [legalAccepted, setLegalAccepted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const panelRef = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);

  // Move focus to the new step's heading so keyboard / screen-reader users follow along
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    panelRef.current?.querySelector<HTMLElement>("[data-step-heading]")?.focus();
  }, [step]);

  const chooseService = (value: string) => {
    setService(value);
    setStep(2);
    trackEvent("quote_wizard_step", { step: 1, service: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const formData = new FormData(form);
    const get = (k: string) => ((formData.get(k) as string) ?? "").toString();

    const newErrors: Record<string, string> = {};
    const nameErr = validateRequired(get("name"), "Name");
    if (nameErr) newErrors.name = nameErr;
    const phoneErr = validatePhone(get("phone"));
    if (phoneErr) newErrors.phone = phoneErr;
    const emailErr = validateOptionalEmail(get("email"));
    if (emailErr) newErrors.email = emailErr;
    const legalErr = validateLegalConsent(legalAccepted);
    if (legalErr) newErrors.legal = legalErr;

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      const first = Object.keys(newErrors)[0];
      form.querySelector<HTMLElement>(first === "legal" ? "#wizard-legal" : `[name="${first}"]`)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch(siteConfig.formSubmit.endpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Bad response");
      trackLeadConversion("quote");
      router.push("/thank-you?from=quote");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="quote-form" className="scroll-mt-32 bg-neutral-50 py-16 sm:py-24 dark:bg-neutral-900/50">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600 dark:text-red-400">
            Free quote in 3 quick steps
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-neutral-50">
            What are you planning?
          </h2>
        </div>

        {/* Progress */}
        <ol className="mt-8 flex items-start gap-2" aria-label={`Step ${step} of 3`}>
          {stepNames.map((name, i) => {
            const n = i + 1;
            return (
              <li key={name} className="flex flex-1 flex-col gap-2" aria-current={n === step ? "step" : undefined}>
                <span className={`h-1.5 rounded-full transition-colors ${n <= step ? "bg-red-600" : "bg-neutral-200 dark:bg-neutral-700"}`} />
                <span className={`text-xs font-semibold ${n === step ? "text-red-600 dark:text-red-400" : "text-neutral-500"}`}>
                  {n}. {name}
                </span>
              </li>
            );
          })}
        </ol>

        <form onSubmit={handleSubmit} noValidate aria-busy={status === "submitting"}>
          {/* Everything travels in one request, so earlier answers live in hidden fields */}
          <input type="hidden" name="_subject" value="Quote request from Palushi Brothers website" />
          <input type="hidden" name="_captcha" value="true" />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_autoresponse"
            value={`Thank you for your enquiry! We've received your quote request and will be in touch within 24 hours. If it's urgent, call us now on ${siteConfig.phone}.\n\n— Palushi Brothers Construction Ltd`}
          />
          <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
          <input type="hidden" name="service" value={service} />
          <input type="hidden" name="timing" value={timing} />
          <input type="hidden" name="message" value={message} />

          <div ref={panelRef} className="mt-6 rounded-2xl border border-neutral-200 bg-white p-5 shadow-lg sm:p-8 dark:border-neutral-700 dark:bg-neutral-900">
            {step === 1 && (
              <fieldset>
                <legend data-step-heading tabIndex={-1} className="sr-only">
                  Step 1 of 3: choose the type of project
                </legend>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {services.map((s) => (
                    <button
                      key={s.slug}
                      type="button"
                      onClick={() => chooseService(s.title)}
                      aria-pressed={service === s.title}
                      className={`group flex flex-col items-center justify-center gap-3 rounded-xl border-2 px-3 py-6 text-center transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 ${
                        service === s.title ? "border-red-600 bg-red-50/50 dark:bg-red-950/20" : "border-neutral-200 hover:border-red-600 dark:border-neutral-700"
                      }`}
                    >
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition group-hover:bg-red-600 group-hover:text-white dark:bg-red-950/40 dark:text-red-400">
                        <Icon>{serviceIcons[s.slug]}</Icon>
                      </span>
                      <span className="text-balance text-sm font-semibold leading-snug text-neutral-900 dark:text-white">{s.title}</span>
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => chooseService(NOT_SURE)}
                    aria-pressed={service === NOT_SURE}
                    className={`group flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed px-3 py-6 text-center text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 ${
                      service === NOT_SURE ? "border-red-600 text-red-600" : "border-neutral-300 text-neutral-600 hover:border-red-600 dark:border-neutral-600 dark:text-neutral-300"
                    }`}
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-500 dark:bg-neutral-800">
                      <Icon>{questionIcon}</Icon>
                    </span>
                    {NOT_SURE}
                  </button>
                </div>
              </fieldset>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <p data-step-heading tabIndex={-1} className="text-sm text-neutral-500 focus:outline-none">
                  <span className="sr-only">Step 2 of 3. </span>
                  Project: <b className="text-neutral-900 dark:text-white">{service}</b>{" "}
                  <button type="button" onClick={() => setStep(1)} className="ml-1 font-medium text-red-600 underline underline-offset-2 dark:text-red-400">
                    change
                  </button>
                </p>
                <fieldset>
                  <legend className={labelClass}>When would you like to start?</legend>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {timings.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTiming(t)}
                        aria-pressed={timing === t}
                        className={`min-h-11 rounded-full border-2 px-4 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 ${
                          timing === t
                            ? "border-red-600 bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-300"
                            : "border-neutral-200 text-neutral-700 hover:border-neutral-400 dark:border-neutral-600 dark:text-neutral-300"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </fieldset>
                <div>
                  <label htmlFor="wizard-message" className={labelClass}>
                    Tell us a little more <span className="font-normal text-neutral-500">(optional)</span>
                  </label>
                  <textarea
                    id="wizard-message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`${fieldClass(false)} h-auto py-3`}
                    placeholder="E.g. rear extension on a Victorian terrace in Lambeth"
                  />
                </div>
                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(1)} className={backBtn}>
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setStep(3);
                      trackEvent("quote_wizard_step", { step: 2, timing: timing || "not given" });
                    }}
                    className={primaryBtn}
                  >
                    Next →
                  </button>
                </div>
              </div>
            )}

            {/* Step 3 stays mounted (only hidden) so typed values are kept if the user goes back */}
            <div hidden={step !== 3} className="space-y-5">
              <p data-step-heading tabIndex={-1} className="text-sm text-neutral-500 focus:outline-none">
                <span className="sr-only">Step 3 of 3. </span>
                Last step: where can we reach you?
              </p>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="wizard-name" className={labelClass}>
                    Name <span aria-hidden className="text-red-600">*</span>
                  </label>
                  <input
                    id="wizard-name"
                    name="name"
                    autoComplete="name"
                    required
                    aria-invalid={errors.name ? true : undefined}
                    aria-describedby={errors.name ? "wizard-name-error" : undefined}
                    className={fieldClass(!!errors.name)}
                    placeholder="Your name"
                  />
                  <FieldError id="wizard-name-error" message={errors.name} />
                </div>
                <div>
                  <label htmlFor="wizard-phone" className={labelClass}>
                    Phone <span aria-hidden className="text-red-600">*</span>
                  </label>
                  <input
                    id="wizard-phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    required
                    aria-invalid={errors.phone ? true : undefined}
                    aria-describedby={errors.phone ? "wizard-phone-error" : undefined}
                    className={fieldClass(!!errors.phone)}
                    placeholder="07…"
                  />
                  <FieldError id="wizard-phone-error" message={errors.phone} />
                </div>
              </div>
              <div>
                <label htmlFor="wizard-email" className={labelClass}>
                  Email <span className="font-normal text-neutral-500">(optional)</span>
                </label>
                <input
                  id="wizard-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  aria-invalid={errors.email ? true : undefined}
                  aria-describedby={errors.email ? "wizard-email-error" : undefined}
                  className={fieldClass(!!errors.email)}
                  placeholder="you@example.com"
                />
                <FieldError id="wizard-email-error" message={errors.email} />
              </div>
              <FormConsentCheckbox id="wizard-legal" checked={legalAccepted} onChange={setLegalAccepted} error={errors.legal} />
              {status === "error" && (
                <p role="alert" className="rounded-lg bg-red-50 p-4 text-red-800 dark:bg-red-950/50 dark:text-red-300">
                  Something went wrong sending your request. Please try again or call us on {siteConfig.phone}.
                </p>
              )}
              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(2)} className={backBtn}>
                  Back
                </button>
                <button type="submit" disabled={status === "submitting"} className={primaryBtn}>
                  {status === "submitting" ? (
                    <>
                      <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                        <path fill="currentColor" className="opacity-75" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    "Get My Free Quote"
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-neutral-600 dark:text-neutral-400">
          No obligation · Itemised written quote · Reply within 24 hours
          <br />
          Prefer to talk?{" "}
          <ClickToCallLink className="font-semibold text-red-600 underline underline-offset-2 dark:text-red-400">
            Call {siteConfig.phone}
          </ClickToCallLink>
        </p>
      </div>
    </section>
  );
}
