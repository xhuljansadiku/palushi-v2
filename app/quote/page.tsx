"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { trackLeadConversion } from "@/lib/tracking";
import { CustomSelect } from "@/components/CustomSelect";

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
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [projectTypeError, setProjectTypeError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("idle");
    setProjectTypeError("");

    if (!projectType.trim()) {
      setProjectTypeError("Please select a project type");
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(siteConfig.formSubmit.endpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setProjectType("");
        setBudget("");
        setTimeline("");
        trackLeadConversion("quote");
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
          {status === "success" ? (
            <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center dark:border-green-800 dark:bg-green-950/50">
              <h2 className="text-xl font-semibold text-green-800 dark:text-green-300">
                Thank you!
              </h2>
              <p className="mt-2 text-green-700 dark:text-green-400">
                We&apos;ve received your quote request and will be in touch
                within 24 hours.
              </p>
              <Link
                href="/"
                className="mt-6 inline-block rounded-md bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
              >
                Back to Home
              </Link>
            </div>
          ) : (
            <form
              action={siteConfig.formSubmit.endpoint}
              method="POST"
              onSubmit={handleSubmit}
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
                  setProjectTypeError("");
                }}
                error={projectTypeError}
              />

              <CustomSelect
                id="budget"
                name="budget"
                label="Approximate budget"
                placeholder="Select budget range"
                options={budgetRanges.map((b) => ({ value: b, label: b }))}
                value={budget}
                onChange={setBudget}
              />

              <CustomSelect
                id="timeline"
                name="timeline"
                label="When would you like to start?"
                placeholder="Select timeline"
                options={timelines.map((t) => ({ value: t, label: t }))}
                value={timeline}
                onChange={setTimeline}
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
                  className="mt-2 block w-full rounded-md border border-neutral-300 bg-white px-4 py-3 shadow-sm focus:border-red-600 focus:ring-red-600 dark:border-neutral-600 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder-neutral-500 dark:focus:border-red-500"
                  placeholder="Your name"
                />
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
                  className="mt-2 block w-full rounded-md border border-neutral-300 bg-white px-4 py-3 shadow-sm focus:border-red-600 focus:ring-red-600 dark:border-neutral-600 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder-neutral-500 dark:focus:border-red-500"
                  placeholder="Your phone number"
                />
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
                  className="mt-2 block w-full rounded-md border border-neutral-300 bg-white px-4 py-3 shadow-sm focus:border-red-600 focus:ring-red-600 dark:border-neutral-600 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder-neutral-500 dark:focus:border-red-500"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label
                  htmlFor="postcode"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                >
                  Postcode
                </label>
                <input
                  type="text"
                  id="postcode"
                  name="postcode"
                  className="mt-2 block w-full rounded-md border border-neutral-300 bg-white px-4 py-3 shadow-sm focus:border-red-600 focus:ring-red-600 dark:border-neutral-600 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder-neutral-500 dark:focus:border-red-500"
                  placeholder="Your postcode"
                />
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
                  className="mt-2 block w-full rounded-md border border-neutral-300 bg-white px-4 py-3 shadow-sm focus:border-red-600 focus:ring-red-600 dark:border-neutral-600 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder-neutral-500 dark:focus:border-red-500"
                  placeholder="Tell us about your project, any specific requirements, or questions..."
                />
              </div>

              {status === "error" && (
                <p className="rounded-md bg-red-50 p-4 text-red-800 dark:bg-red-950/50 dark:text-red-300">
                  Something went wrong. Please try again or call us directly.
                </p>
              )}

              <button
                type="submit"
                className="w-full rounded-md bg-red-600 px-8 py-4 text-base font-semibold text-white transition hover:bg-red-700"
              >
                Request Free Quote
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
