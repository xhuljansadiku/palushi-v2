import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  getServiceBySlug,
  getAllServiceSlugs,
  services,
} from "@/content/services";
import { siteConfig } from "@/lib/site-config";
import { CTA } from "@/components/CTA";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.metaDescription,
    openGraph: {
      title: `${service.title} | ${siteConfig.name}`,
      description: service.metaDescription,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: siteConfig.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.full,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <section className="relative h-64 bg-neutral-900">
        <Image
          src={service.image}
          alt=""
          fill
          className="object-cover opacity-60"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        <div className="relative mx-auto flex h-full max-w-7xl items-end px-4 pb-8 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            {service.title}
          </h1>
        </div>
      </section>

      <section className="py-16 sm:py-24 dark:bg-neutral-950/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none prose-neutral dark:prose-invert">
            <p className="text-xl text-neutral-600 dark:text-neutral-300">{service.description}</p>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">Frequently Asked Questions</h2>
            <dl className="mt-8 space-y-6">
              {service.faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-700 dark:bg-neutral-900"
                >
                  <dt className="font-semibold text-neutral-900 dark:text-neutral-100">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-neutral-600 dark:text-neutral-400">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-16 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-red-600 px-8 py-4 text-base font-semibold text-white transition hover:bg-red-700"
            >
              Get a Free Quote
            </Link>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center justify-center rounded-md border-2 border-red-600 px-8 py-4 text-base font-semibold text-red-600 transition hover:bg-red-600 hover:text-white dark:border-red-500 dark:text-red-400 dark:hover:bg-red-500 dark:hover:text-white"
            >
              Call Now: {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50 py-12 dark:border-neutral-800 dark:bg-neutral-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            Other Services
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {services
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 transition hover:border-red-600 hover:bg-red-50 hover:text-red-600 dark:border-neutral-600 dark:text-neutral-200 dark:hover:border-red-500 dark:hover:bg-red-950/30 dark:hover:text-red-400"
                >
                  {s.title}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CTA
        title={`Ready for ${service.title}?`}
        subtitle="Get a free quote today. We're here to help bring your vision to life."
      />
    </>
  );
}
