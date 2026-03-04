import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Palushi Brothers Construction Ltd.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-neutral-900 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-neutral-300">
            Last updated: {new Date().toLocaleDateString("en-GB")}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 dark:bg-neutral-950/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-neutral prose-lg max-w-none prose-headings:mt-12 prose-headings:mb-4 prose-headings:first:mt-0 prose-p:mb-6 prose-p:leading-relaxed prose-p:text-neutral-600 prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline dark:prose-invert dark:prose-headings:text-neutral-100 dark:prose-p:text-neutral-300 dark:prose-a:text-red-500">
            <h2>Introduction</h2>
            <p>
              Palushi Brothers Construction Ltd (&quot;we&quot;, &quot;our&quot;,
              or &quot;us&quot;) is committed to protecting your privacy. This
              policy explains how we collect, use, and safeguard your information
              when you use our website or contact us.
            </p>

            <h2>Information We Collect</h2>
            <p>
              When you use our contact form, we collect your name, phone number,
              email address, postcode, and message. This information is sent to
              us via Formsubmit and is used solely to respond to your enquiry.
            </p>

            <h2>How We Use Your Information</h2>
            <p>
              We use the information you provide to respond to your enquiries,
              provide quotes, and deliver our services. We do not sell or share
              your personal information with third parties for marketing
              purposes.
            </p>

            <h2>Cookies</h2>
            <p>
              Our website may use cookies to improve your experience. You can
              control cookie preferences through your browser settings.
            </p>

            <h2>Data Security</h2>
            <p>
              We take reasonable steps to protect your personal information.
              Contact form submissions are transmitted securely via Formsubmit.
            </p>

            <h2>Your Rights</h2>
            <p>
              You have the right to request access to, correction of, or
              deletion of your personal data. Contact us at{" "}
              <a href="mailto:palushibrothers@gmail.com">
                palushibrothers@gmail.com
              </a>{" "}
              to exercise these rights.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this privacy policy, please contact us
              at palushibrothers@gmail.com or call 020 3435 7555.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
