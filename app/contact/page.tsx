"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { validateEmail, validatePhone, validateRequired } from "@/lib/form-validation";
import { trackLeadConversion } from "@/lib/tracking";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function ContactPage() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

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
        trackLeadConversion("contact");
        router.push("/thank-you?from=contact");
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
            Contact Us
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-300">
            Get in touch for a free quote. We&apos;re here to help bring your
            vision to life.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 dark:bg-neutral-950/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="flex flex-col items-center lg:col-span-2 lg:items-stretch">
              <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">Get in Touch</h2>
              <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                Just submit your details and we&apos;ll be in touch shortly.
              </p>

              <form
                action={siteConfig.formSubmit.actionEndpoint}
                method="POST"
                onSubmit={handleSubmit}
                className="mx-auto mt-8 max-w-md space-y-6 lg:mx-0 lg:max-w-none"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="New enquiry from Palushi Brothers website"
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

                <div className="grid gap-6 sm:grid-cols-2">
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
                      className={`mt-2 block w-full rounded-md border bg-white px-4 py-3 shadow-sm focus:ring-red-600 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder-neutral-500 ${errors.name ? "border-red-500" : "border-neutral-300 focus:border-red-600 dark:border-neutral-600 dark:focus:border-red-500"}`}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
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
                      className={`mt-2 block w-full rounded-md border bg-white px-4 py-3 shadow-sm focus:ring-red-600 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder-neutral-500 ${errors.phone ? "border-red-500" : "border-neutral-300 focus:border-red-600 dark:border-neutral-600 dark:focus:border-red-500"}`}
                      placeholder="Your phone number"
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
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
                      className={`mt-2 block w-full rounded-md border bg-white px-4 py-3 shadow-sm focus:ring-red-600 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder-neutral-500 ${errors.email ? "border-red-500" : "border-neutral-300 focus:border-red-600 dark:border-neutral-600 dark:focus:border-red-500"}`}
                      placeholder="Your email"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
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
                      className="mt-2 block w-full rounded-md border border-neutral-300 bg-white px-4 py-3 shadow-sm focus:border-red-600 focus:ring-red-600 dark:border-neutral-600 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder-neutral-500"
                      placeholder="Your postcode"
                    />
                  </div>
                </div>

                <div>
                    <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    Message *
                  </label>
<textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className={`mt-2 block w-full rounded-md border bg-white px-4 py-3 shadow-sm focus:ring-red-600 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder-neutral-500 ${errors.message ? "border-red-500" : "border-neutral-300 focus:border-red-600 dark:border-neutral-600 dark:focus:border-red-500"}`}
                  placeholder="Tell us about your project"
                />
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                </div>

                {status === "error" && (
                  <p className="rounded-md bg-red-50 p-4 text-red-800 dark:bg-red-950/50 dark:text-red-300">
                    Something went wrong. Please try again or call us directly.
                  </p>
                )}

                <button
                  type="submit"
                  className="rounded-md bg-red-600 px-8 py-4 text-base font-semibold text-white transition hover:bg-red-700"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="flex flex-col items-center space-y-8 lg:items-stretch">
              <div>
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">Address</h3>
                <a
                  href={siteConfig.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-neutral-600 hover:text-red-600 dark:text-neutral-400 dark:hover:text-red-400"
                >
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                  <br />
                  {siteConfig.address.line3}
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">Phone</h3>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="mt-2 block text-neutral-600 hover:text-red-600 dark:text-neutral-400 dark:hover:text-red-400"
                >
                  {siteConfig.phone}
                </a>
                <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-500">
                  {siteConfig.hours}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">Email</h3>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-2 block text-neutral-600 hover:text-red-600 dark:text-neutral-400 dark:hover:text-red-400"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="flex flex-col gap-3">
                <WhatsAppButton />
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-center justify-center rounded-md bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
                >
                  Call Now
                </a>
                <a
                  href={siteConfig.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-md border-2 border-red-600 px-6 py-3 font-semibold text-red-600 transition hover:bg-red-600 hover:text-white dark:border-red-500 dark:text-red-400 dark:hover:bg-red-500 dark:hover:text-white"
                >
                  Get Directions
                </a>
              </div>

              <div className="aspect-video overflow-hidden rounded-lg">
                <iframe
                  src="https://maps.google.com/maps?q=1+Odette+House,+Hamilton+Road,+Norwood,+London+SE27+9SB&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Palushi Brothers Construction - Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
