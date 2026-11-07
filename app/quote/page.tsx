"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { trackLeadConversion } from "@/lib/tracking";
import { CustomSelect } from "@/components/CustomSelect";
import { FormConsentCheckbox } from "@/components/FormConsentCheckbox";
import {
  validateEmail,
  validateLegalConsent,
  validatePhone,
  validateRequired,
} from "@/lib/form-validation";

const projectTypes = [
  "Loft Conversion",
  "House Extension",
  "Full Renovation",
  "Roofing",
  "Kitchen Refurbishment",
  "Bathroom Refurbishment",
  "Other",
];

const budgetRanges = [
  "Under £25,000",
  "£25,000 - £50,000",
  "£50,000 - £75,000",
  "£75,000 - £100,000",
  "Over £100,000",
  "Not sure yet",
];

const timelines = [
  "As soon as possible",
  "Within 1-3 months",
  "Within 3-6 months",
  "Within 6-12 months",
  "Just exploring options",
];

export default function QuotePage() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
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
    const postcode = (formData.get("postcode") as string) ?? "";
    const message = (formData.get("message") as string) ?? "";

    const newErrors: Record<string, string> = {};
    if (!projectType.trim()) newErrors.project_type = "Please select a project type";
    if (!budget.trim()) newErrors.budget = "Please select a budget range";
    if (!timeline.trim()) newErrors.timeline = "Please select when you would like to start";
    const nameErr = validateRequired(name, "Name");
    if (nameErr) newErrors.name = nameErr;
    const phoneErr = validatePhone(phone);
    if (phoneErr) newErrors.phone = phoneErr;
    const emailErr = validateEmail(email);
    if (emailErr) newErrors.email = emailErr;
    const postcodeErr = validateRequired(postcode, "Postcode");
    if (postcodeErr) newErrors.postcode = postcodeErr;
    const msgErr = validateRequired(message, "Project details");
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
        setProjectType("");
        setBudget("");
        setTimeline("");
        setLegalAccepted(false);
        setErrors({});
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
    <>
      <section className="bg-neutral-900 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Get a Free Quote
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-300">
            Tell us about your project and we&apos;ll get back to you with a
            detailed, no-obligation quote within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 dark:bg-neutral-950/30">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <form
              action={siteConfig.formSubmit.actionEndpoint}
              method="POST"
              onSubmit={handleSubmit}
              noValidate
              className="space-y-6"
            >
              <input
                type="hidden"
                name="_subject"
                value="Quote request from Palushi Brothers website"
              />
              <input
                type="hidden"
                name="_captcha"
                value="true"
              />
              <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
              <input
                type="hidden"
                name="_template"
                value="table"
              />

              <CustomSelect
                id="project_type"
                name="project_type"
                label="Project type *"
                placeholder="Select project type"
                options={projectTypes.map((t) => ({ value: t, label: t }))}
                required
                value={projectType}
                onChange={(v) => {
                  setProjectType(v);
                  setErrors((prev) => {
                    const next = { ...prev };
                    delete next.project_type;
                    return next;
                  });
                }}
                error={errors.project_type}
              />

              <CustomSelect
                id="budget"
                name="budget"
                label="Approximate budget *"
                placeholder="Select budget range"
                options={budgetRanges.map((b) => ({ value: b, label: b }))}
                required
                value={budget}
                onChange={(v) => {
                  setBudget(v);
                  setErrors((prev) => {
                    const next = { ...prev };
                    delete next.budget;
                    return next;
                  });
                }}
                error={errors.budget}
              />

              <CustomSelect
                id="timeline"
                name="timeline"
                label="When would you like to start? *"
                placeholder="Select timeline"
                options={timelines.map((t) => ({ value: t, label: t }))}
                required
                value={timeline}
                onChange={(v) => {
                  setTimeline(v);
                  setErrors((prev) => {
                    const next = { ...prev };
                    delete next.timeline;
                    return next;
                  });
                }}
                error={errors.timeline}
              />

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className={`mt-2 block w-full rounded-md border bg-white px-4 py-3 shadow-sm focus:ring-red-600 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder-neutral-500 ${
                    errors.name
                      ? "border-red-500"
                      : "border-neutral-300 focus:border-red-600 dark:border-neutral-600 dark:focus:border-red-500"
                  }`}
                  placeholder="Your name"
                />
                {errors.name && <p role="alert" className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                >
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className={`mt-2 block w-full rounded-md border bg-white px-4 py-3 shadow-sm focus:ring-red-600 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder-neutral-500 ${
                    errors.phone
                      ? "border-red-500"
                      : "border-neutral-300 focus:border-red-600 dark:border-neutral-600 dark:focus:border-red-500"
                  }`}
                  placeholder="Your phone number"
                />
                {errors.phone && <p role="alert" className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.phone}</p>}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  className={`mt-2 block w-full rounded-md border bg-white px-4 py-3 shadow-sm focus:ring-red-600 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder-neutral-500 ${
                    errors.email
                      ? "border-red-500"
                      : "border-neutral-300 focus:border-red-600 dark:border-neutral-600 dark:focus:border-red-500"
                  }`}
                  placeholder="Your email"
                />
                {errors.email && <p role="alert" className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
              </div>

              <div>
                <label
                  htmlFor="postcode"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                >
                  Postcode *
                </label>
                <input
                  type="text"
                  id="postcode"
                  name="postcode"
                  required
                  className={`mt-2 block w-full rounded-md border bg-white px-4 py-3 shadow-sm focus:ring-red-600 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder-neutral-500 ${
                    errors.postcode
                      ? "border-red-500"
                      : "border-neutral-300 focus:border-red-600 dark:border-neutral-600 dark:focus:border-red-500"
                  }`}
                  placeholder="Your postcode"
                />
                {errors.postcode && <p role="alert" className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.postcode}</p>}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                >
                  Project details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className={`mt-2 block w-full rounded-md border bg-white px-4 py-3 shadow-sm focus:ring-red-600 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder-neutral-500 ${
                    errors.message
                      ? "border-red-500"
                      : "border-neutral-300 focus:border-red-600 dark:border-neutral-600 dark:focus:border-red-500"
                  }`}
                  placeholder="Tell us about your project, any specific requirements, or questions..."
                />
                {errors.message && <p role="alert" className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>}
              </div>

              {status === "error" && (
                <p className="rounded-md bg-red-50 p-4 text-red-800 dark:bg-red-950/50 dark:text-red-300">
                  Something went wrong. Please try again or call us directly.
                </p>
              )}

              <FormConsentCheckbox
                id="quote-page-legal"
                checked={legalAccepted}
                onChange={setLegalAccepted}
                error={errors.legal}
              />

              <button
                type="submit"
                className="w-full rounded-md bg-red-600 px-8 py-4 text-base font-semibold text-white transition hover:bg-red-700"
              >
                Request Free Quote
              </button>
            </form>
        </div>
      </section>
    </>
  );
}
