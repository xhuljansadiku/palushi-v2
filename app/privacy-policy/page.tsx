import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Palushi Brothers Construction Ltd.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-neutral-900 py-16 text-white sm:py-24">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-wider text-red-400">
            Legal
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Privacy Policy
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
                  Palushi Brothers Construction Ltd (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information when you use our website or contact us for our construction and renovation services.
                </p>
              </section>

              <section>
                <h2 className="border-b border-red-600 pb-2 text-lg font-semibold text-neutral-900 dark:border-red-500 dark:text-neutral-100">
                  2. Information We Collect
                </h2>
                <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-300">
                  When you use our contact or quote form, we collect your name, phone number, email address, postcode, and message. This information is transmitted to us through a secure third-party form submission service and is used solely to respond to your enquiry and provide our services.
                </p>
              </section>

              <section>
                <h2 className="border-b border-red-600 pb-2 text-lg font-semibold text-neutral-900 dark:border-red-500 dark:text-neutral-100">
                  3. How We Use Your Information
                </h2>
                <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-300">
                  We use the information you provide to respond to your enquiries, provide quotes, and deliver our construction and renovation services. We do not sell or share your personal information with third parties for marketing purposes.
                </p>
              </section>

              <section>
                <h2 className="border-b border-red-600 pb-2 text-lg font-semibold text-neutral-900 dark:border-red-500 dark:text-neutral-100">
                  4. Cookies
                </h2>
                <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-300">
                  Our website may use essential cookies for functionality and optional cookies to improve your experience (e.g. analytics). You can control cookie preferences through your browser settings. Disabling cookies may affect certain features of the site.
                </p>
              </section>

              <section>
                <h2 className="border-b border-red-600 pb-2 text-lg font-semibold text-neutral-900 dark:border-red-500 dark:text-neutral-100">
                  5. Data Security
                </h2>
                <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-300">
                  We take reasonable technical and organisational measures to protect your personal information. Form submissions are transmitted over secure connections. We retain your data only for as long as necessary to fulfil the purposes described in this policy.
                </p>
              </section>

              <section>
                <h2 className="border-b border-red-600 pb-2 text-lg font-semibold text-neutral-900 dark:border-red-500 dark:text-neutral-100">
                  6. Your Rights
                </h2>
                <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-300">
                  Under UK data protection law, you have the right to request access to, correction of, or deletion of your personal data. You may also have the right to object to processing and to data portability. To exercise these rights, contact us at{" "}
                  <a href="mailto:palushibrothers@gmail.com" className="font-medium text-red-600 underline-offset-2 hover:underline dark:text-red-500">
                    palushibrothers@gmail.com
                  </a>
                  . You have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) if you believe we have not handled your data properly.
                </p>
              </section>

              <section>
                <h2 className="border-b border-red-600 pb-2 text-lg font-semibold text-neutral-900 dark:border-red-500 dark:text-neutral-100">
                  7. Contact Us
                </h2>
                <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-300">
                  If you have questions about this privacy policy, please contact us at{" "}
                  <a href="mailto:palushibrothers@gmail.com" className="font-medium text-red-600 underline-offset-2 hover:underline dark:text-red-500">
                    palushibrothers@gmail.com
                  </a>{" "}
                  or call{" "}
                  <a href="tel:02034357555" className="font-medium text-red-600 underline-offset-2 hover:underline dark:text-red-500">
                    020 3435 7555
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
