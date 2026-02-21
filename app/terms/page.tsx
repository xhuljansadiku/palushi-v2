import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions for Palushi Brothers Construction Ltd. Quotes, contracts, and service agreements.",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-neutral-900 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-neutral-300">
            Last updated: {new Date().toLocaleDateString("en-GB")}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-neutral max-w-none">
            <h2>1. Introduction</h2>
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your use of the
              website and services provided by Palushi Brothers Construction Ltd
              (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). By using our
              website or engaging our services, you agree to these Terms.
            </p>

            <h2>2. Quotes and Estimates</h2>
            <p>
              All quotes and estimates are provided free of charge and without
              obligation. Quotes are valid for 30 days unless otherwise stated.
              Final pricing may vary if the scope of work changes or additional
              work is requested. We provide transparent, itemised quotes where
              possible.
            </p>

            <h2>3. Contracts and Payment</h2>
            <p>
              A formal contract or agreement may be issued for larger projects.
              Payment terms will be set out in the contract. We typically
              require a deposit for materials and labour. Stage payments may
              apply for longer projects. Final payment is due upon satisfactory
              completion of the work.
            </p>

            <h2>4. Cancellation</h2>
            <p>
              If you need to cancel or postpone a project, please contact us as
              soon as possible. Cancellation terms will be set out in your
              contract. Deposits may be non-refundable if materials have been
              ordered or work has commenced.
            </p>

            <h2>5. Warranty and Guarantees</h2>
            <p>
              We stand behind our workmanship. Specific warranty periods may apply
              to different types of work and will be detailed in your contract.
              Manufacturer warranties apply to materials and fixtures we supply.
            </p>

            <h2>6. Insurance and Liability</h2>
            <p>
              We are fully insured for the work we undertake. We take reasonable
              care to protect your property during works. Any damage caused by
              our negligence will be rectified at our expense.
            </p>

            <h2>7. Access and Site Conditions</h2>
            <p>
              You agree to provide reasonable access to your property for site
              visits, deliveries, and construction work. You are responsible for
              informing us of any site-specific requirements, access
              restrictions, or planning conditions.
            </p>

            <h2>8. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. The &quot;Last
              updated&quot; date at the top of this page indicates when changes
              were last made. Continued use of our services after changes
              constitutes acceptance of the updated Terms.
            </p>

            <h2>9. Contact</h2>
            <p>
              For questions about these Terms, contact us at{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or
              call <a href={`tel:${siteConfig.phoneRaw}`}>{siteConfig.phone}</a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
