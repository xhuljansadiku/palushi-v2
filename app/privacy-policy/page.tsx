import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy policy & cookies",
  description:
    "Privacy policy and cookie notice for Palushi Brothers Construction Ltd (UK GDPR, Data Protection Act 2018).",
};

const sectionTitle =
  "border-b border-red-600 pb-2 text-lg font-semibold text-neutral-900 dark:border-red-500 dark:text-neutral-100";
const body = "mt-4 leading-relaxed text-neutral-600 dark:text-neutral-300";
const tableCell = "border border-neutral-200 px-3 py-2 align-top dark:border-neutral-700";

export default function PrivacyPolicyPage() {
  const lastUpdated = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <section className="relative overflow-hidden bg-neutral-900 py-16 text-white sm:py-24">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-wider text-red-400">Legal</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Privacy policy &amp; cookie notice
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-400">
            This notice explains how we use personal data and cookies. It is designed to align with the{" "}
            <strong className="font-medium text-neutral-200">UK GDPR</strong> and the{" "}
            <strong className="font-medium text-neutral-200">Data Protection Act 2018</strong>, and with cookie /
            similar-technology rules (including PECR). It is <strong className="font-medium text-neutral-200">not</strong>{" "}
            a substitute for legal advice.
          </p>
          <p className="mt-4 text-sm text-neutral-400">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="py-16 sm:py-24 dark:bg-neutral-950/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50 sm:p-10">
            <div className="space-y-12">
              <section>
                <h2 className={sectionTitle}>1. Who we are</h2>
                <p className={body}>
                  The data controller is <strong className="font-medium text-neutral-800 dark:text-neutral-200">{siteConfig.name}</strong>{" "}
                  (&quot;we&quot;, &quot;us&quot;). Registered address: {siteConfig.address.full}. Website:{" "}
                  <a
                    href={siteConfig.url}
                    className="font-medium text-red-600 underline-offset-2 hover:underline dark:text-red-500"
                  >
                    {siteConfig.url.replace(/^https?:\/\//, "")}
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className={sectionTitle}>2. What this notice covers</h2>
                <p className={body}>
                  This notice applies to information we obtain when you use our website, contact us, or request a quote.
                  If you become a customer, we may provide additional information about processing for contracts and
                  projects.
                </p>
              </section>

              <section>
                <h2 className={sectionTitle}>3. Personal data we collect</h2>
                <p className={body}>
                  Depending on how you contact us, we may collect: name, phone number, email address, postcode or
                  address details, and the content of your message. When you browse the site, our optional analytics and
                  advertising partners may receive technical data (such as device or browser information) if you have
                  consented to those categories—see below.
                </p>
              </section>

              <section>
                <h2 className={sectionTitle}>4. How we use personal data and lawful bases</h2>
                <ul className={`${body} list-disc space-y-2 pl-5`}>
                  <li>
                    <strong className="font-medium text-neutral-800 dark:text-neutral-200">Responding to enquiries</strong>{" "}
                    (contact / quote forms):{" "}
                    <strong className="font-medium text-neutral-800 dark:text-neutral-200">contract</strong> steps at your
                    request and/or <strong className="font-medium text-neutral-800 dark:text-neutral-200">legitimate interests</strong>{" "}
                    in operating our business.
                  </li>
                  <li>
                    <strong className="font-medium text-neutral-800 dark:text-neutral-200">Website security and basic functionality</strong>
                    : <strong className="font-medium text-neutral-800 dark:text-neutral-200">legitimate interests</strong> and, where
                    applicable, <strong className="font-medium text-neutral-800 dark:text-neutral-200">legal obligation</strong>.
                  </li>
                  <li>
                    <strong className="font-medium text-neutral-800 dark:text-neutral-200">Analytics and advertising</strong> (where you
                    opt in): <strong className="font-medium text-neutral-800 dark:text-neutral-200">consent</strong> (UK PECR / GDPR).
                  </li>
                </ul>
              </section>

              <section>
                <h2 className={sectionTitle}>5. Form submissions</h2>
                <p className={body}>
                  Enquiries may be sent using our form provider (e.g. FormSubmit) over HTTPS to{" "}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-medium text-red-600 underline-offset-2 hover:underline dark:text-red-500"
                  >
                    {siteConfig.email}
                  </a>
                  . Do not include special-category or unnecessary sensitive information in web forms.
                </p>
              </section>

              <section>
                <h2 className={sectionTitle}>6. Cookies, local storage &amp; similar technologies</h2>
                <p className={body}>
                  We use a small amount of storage on your device for essential features and, only with your consent,
                  for analytics and marketing. You can reopen the cookie preferences panel at any time using the{" "}
                  <strong className="font-medium text-neutral-800 dark:text-neutral-200">cookie button</strong> on the site.
                </p>
                <div className="mt-4 overflow-x-auto rounded-lg border border-neutral-200 dark:border-neutral-700">
                  <table className="w-full min-w-[32rem] text-left text-sm text-neutral-600 dark:text-neutral-300">
                    <thead className="bg-neutral-50 text-neutral-900 dark:bg-neutral-800/80 dark:text-neutral-100">
                      <tr>
                        <th className={tableCell}>Technology / key</th>
                        <th className={tableCell}>Purpose</th>
                        <th className={tableCell}>Type</th>
                        <th className={tableCell}>Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className={tableCell}>
                          <code className="text-xs">palushi-theme</code> (browser storage)
                        </td>
                        <td className={tableCell}>Remember light / dark / system theme preference.</td>
                        <td className={tableCell}>Strictly necessary / preferences</td>
                        <td className={tableCell}>Persistent until you change or clear site data.</td>
                      </tr>
                      <tr>
                        <td className={tableCell}>
                          <code className="text-xs">palushi-cookie-consent</code> (browser storage)
                        </td>
                        <td className={tableCell}>Stores your cookie choices (analytics / marketing flags).</td>
                        <td className={tableCell}>Strictly necessary (consent record)</td>
                        <td className={tableCell}>Persistent until you clear site data or update choices.</td>
                      </tr>
                      <tr>
                        <td className={tableCell}>Google Analytics 4 (if you opt in)</td>
                        <td className={tableCell}>Understand how the site is used (analytics).</td>
                        <td className={tableCell}>Optional — consent (analytics)</td>
                        <td className={tableCell}>Per Google&apos;s cookie policy; typically up to 24 months for GA.</td>
                      </tr>
                      <tr>
                        <td className={tableCell}>Google Tag Manager (if configured &amp; you opt in)</td>
                        <td className={tableCell}>May load or coordinate tags per your container setup.</td>
                        <td className={tableCell}>Optional — consent (analytics / marketing as configured)</td>
                        <td className={tableCell}>Varies by tags fired.</td>
                      </tr>
                      <tr>
                        <td className={tableCell}>Microsoft Clarity (if you opt in)</td>
                        <td className={tableCell}>Session replay / heatmaps style analytics.</td>
                        <td className={tableCell}>Optional — consent (analytics)</td>
                        <td className={tableCell}>Per Microsoft&apos;s documentation.</td>
                      </tr>
                      <tr>
                        <td className={tableCell}>Google Ads / Meta Pixel (if you opt in)</td>
                        <td className={tableCell}>Advertising measurement and conversion tracking.</td>
                        <td className={tableCell}>Optional — consent (marketing)</td>
                        <td className={tableCell}>Per each provider&apos;s policy.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className={`${body} mt-4 text-sm`}>
                  You can also control cookies through your browser settings. Blocking some cookies may affect how the site
                  works.
                </p>
              </section>

              <section>
                <h2 className={sectionTitle}>7. Google Consent Mode</h2>
                <p className={body}>
                  Where we use Google tags, we configure{" "}
                  <strong className="font-medium text-neutral-800 dark:text-neutral-200">Consent Mode</strong> so that
                  analytics and ad storage default to denied until you make a choice, then update if you consent. This
                  supports compliance expectations for UK/EEA visitors when using Google advertising and measurement
                  products.
                </p>
              </section>

              <section>
                <h2 className={sectionTitle}>8. Recipients and processors</h2>
                <p className={body}>
                  We use trusted service providers to host the site, deliver forms, and (if you consent) analytics or
                  advertising. Examples include Google (Analytics, Ads, Tag Manager), Meta (advertising pixel), Microsoft
                  (Clarity), and email/form routing providers. They process data on our instructions or their own terms as
                  applicable.
                </p>
              </section>

              <section>
                <h2 className={sectionTitle}>9. International transfers</h2>
                <p className={body}>
                  Some providers may process data outside the UK. Where required, we rely on appropriate safeguards (such
                  as the UK extension to the EU-US Data Privacy Framework and/or standard contractual clauses), as described
                  in the relevant provider&apos;s privacy documentation.
                </p>
              </section>

              <section>
                <h2 className={sectionTitle}>10. Retention</h2>
                <p className={body}>
                  We keep enquiry and quote data only as long as needed to respond, quote, deliver services, and meet
                  legal, tax, or dispute requirements. Analytics and marketing identifiers are controlled by third-party
                  tools and your browser; you can withdraw consent at any time via the cookie button.
                </p>
              </section>

              <section>
                <h2 className={sectionTitle}>11. Security</h2>
                <p className={body}>
                  We use HTTPS and reasonable organisational and technical measures. No online transmission is completely
                  secure; please use official contact channels only.
                </p>
              </section>

              <section>
                <h2 className={sectionTitle}>12. Your rights</h2>
                <p className={body}>
                  Under UK data protection law you may have rights including: access, rectification, erasure, restriction,
                  objection, and data portability, and the right to withdraw consent where we rely on it. To exercise these
                  rights, contact us at{" "}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-medium text-red-600 underline-offset-2 hover:underline dark:text-red-500"
                  >
                    {siteConfig.email}
                  </a>
                  . You may complain to the{" "}
                  <a
                    href="https://ico.org.uk/"
                    className="font-medium text-red-600 underline-offset-2 hover:underline dark:text-red-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Information Commissioner&apos;s Office (ICO)
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className={sectionTitle}>13. Children</h2>
                <p className={body}>
                  Our services are not directed at children. We do not knowingly collect children&apos;s personal data through
                  this website.
                </p>
              </section>

              <section>
                <h2 className={sectionTitle}>14. Changes</h2>
                <p className={body}>
                  We may update this notice from time to time. The &quot;Last updated&quot; date at the top will change when we do.
                </p>
              </section>

              <section>
                <h2 className={sectionTitle}>15. Contact</h2>
                <p className={body}>
                  Questions about privacy or cookies:{" "}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-medium text-red-600 underline-offset-2 hover:underline dark:text-red-500"
                  >
                    {siteConfig.email}
                  </a>
                  , or call{" "}
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="font-medium text-red-600 underline-offset-2 hover:underline dark:text-red-500"
                  >
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
