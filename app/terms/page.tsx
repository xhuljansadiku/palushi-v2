import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions for Palushi Brothers Construction Ltd. Quotes, contracts, and service agreements.",
  alternates: {
    canonical: `${siteConfig.url}/terms`,
  },
};

export default function TermsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-neutral-900 py-16 text-white sm:py-24">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-wider text-red-400">
            Legal
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-neutral-400">
            Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 dark:bg-neutral-950/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50 sm:p-10">
            <div className="space-y-12">
              <section>
                <h2 className="border-b border-red-600 pb-2 text-lg font-semibold text-neutral-900 dark:border-red-500 dark:text-neutral-100">
                  1. Introduction
                </h2>
                <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-300">
                  These Terms of Service (&quot;Terms&quot;) govern your use of the website and services provided by Palushi Brothers Construction Ltd (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). By using our website or engaging our services, you agree to these Terms.
                </p>
              </section>

              <section>
                <h2 className="border-b border-red-600 pb-2 text-lg font-semibold text-neutral-900 dark:border-red-500 dark:text-neutral-100">
                  2. Quotes and Estimates
                </h2>
                <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-300">
                  All quotes and estimates are provided free of charge and without obligation. Quotes are valid for 30 days unless otherwise stated. Final pricing may vary if the scope of work changes or additional work is requested. We provide transparent, itemised quotes where possible.
                </p>
              </section>

              <section>
                <h2 className="border-b border-red-600 pb-2 text-lg font-semibold text-neutral-900 dark:border-red-500 dark:text-neutral-100">
                  3. Contracts and Payment
                </h2>
                <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-300">
                  A formal contract or agreement may be issued for larger projects. Payment terms will be set out in the contract. We typically require a deposit for materials and labour. Stage payments may apply for longer projects. Final payment is due upon satisfactory completion of the work.
                </p>
              </section>

              <section>
                <h2 className="border-b border-red-600 pb-2 text-lg font-semibold text-neutral-900 dark:border-red-500 dark:text-neutral-100">
                  4. Cancellation
                </h2>
                <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-300">
                  If you need to cancel or postpone a project, please contact us as soon as possible. Cancellation terms will be set out in your contract. Deposits may be non-refundable if materials have been ordered or work has commenced.
                </p>
              </section>

              <section>
                <h2 className="border-b border-red-600 pb-2 text-lg font-semibold text-neutral-900 dark:border-red-500 dark:text-neutral-100">
                  5. Warranty and Guarantees
                </h2>
                <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-300">
                  We stand behind our workmanship. Specific warranty periods may apply to different types of work and will be detailed in your contract. Manufacturer warranties apply to materials and fixtures we supply.
                </p>
              </section>

              <section>
                <h2 className="border-b border-red-600 pb-2 text-lg font-semibold text-neutral-900 dark:border-red-500 dark:text-neutral-100">
                  6. Insurance and Liability
                </h2>
                <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-300">
                  We are fully insured for the work we undertake. We take reasonable care to protect your property during works. Any damage caused by our negligence will be rectified at our expense.
                </p>
              </section>

              <section>
                <h2 className="border-b border-red-600 pb-2 text-lg font-semibold text-neutral-900 dark:border-red-500 dark:text-neutral-100">
                  7. Access and Site Conditions
                </h2>
                <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-300">
                  You agree to provide reasonable access to your property for site visits, deliveries, and construction work. You are responsible for informing us of any site-specific requirements, access restrictions, or planning conditions.
                </p>
              </section>

              <section>
                <h2 className="border-b border-red-600 pb-2 text-lg font-semibold text-neutral-900 dark:border-red-500 dark:text-neutral-100">
                  8. Changes to These Terms
                </h2>
                <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-300">
                  We may update these Terms from time to time. The &quot;Last updated&quot; date at the top of this page indicates when changes were last made. Continued use of our services after changes constitutes acceptance of the updated Terms.
                </p>
              </section>

              <section>
                <h2 className="border-b border-red-600 pb-2 text-lg font-semibold text-neutral-900 dark:border-red-500 dark:text-neutral-100">
                  9. Contact
                </h2>
                <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-300">
                  For questions about these Terms, contact us at{" "}
                  <a href={`mailto:${siteConfig.email}`} className="font-medium text-red-600 underline-offset-2 hover:underline dark:text-red-500">
                    {siteConfig.email}
                  </a>{" "}
                  or call{" "}
                  <a href={`tel:${siteConfig.phoneRaw}`} className="font-medium text-red-600 underline-offset-2 hover:underline dark:text-red-500">
                    {siteConfig.phone}
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
