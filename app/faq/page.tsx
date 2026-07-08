import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { faqs } from "@/content/faq";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Common questions about loft conversions, extensions, renovations, and our services. Palushi Brothers Construction London.",
  alternates: {
    canonical: `${siteConfig.url}/faq`,
  },
};

function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function FAQPage() {
  return (
    <>
      <FAQSchema />
      <section className="bg-neutral-900 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-300">
            Common questions about our construction and renovation services in
            London.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 dark:bg-neutral-950/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <dl className="space-y-8">
            {faqs.map((faq, i) => (
              <div key={i}>
                <dt className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-neutral-600 dark:text-neutral-400">{faq.answer}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-16 rounded-xl border border-neutral-200 bg-neutral-50 p-8 text-center dark:border-neutral-700 dark:bg-neutral-900">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              Still have questions?
            </h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">
              Get in touch for a free quote or to discuss your project.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Contact Us
              </Link>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="rounded-md border border-red-600 px-6 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-600 hover:text-white dark:border-red-500 dark:text-red-400 dark:hover:bg-red-500 dark:hover:text-white"
              >
                Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
