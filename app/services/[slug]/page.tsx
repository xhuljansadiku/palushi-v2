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
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ClickToCallLink } from "@/components/ClickToCallLink";
import { ProcessSection } from "@/components/ProcessSection";
import { projects } from "@/content/projects";
import { btn, eyebrow, sectionTitle } from "@/lib/ui";
import type { Metadata } from "next";
import { Sentences } from "@/components/Sentences";

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

  const imageUrl = `${siteConfig.url}${service.image}`;

  return {
    title: `${service.title} in London`,
    description: service.metaDescription,
    alternates: {
      canonical: `${siteConfig.url}/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} | ${siteConfig.name}`,
      description: service.metaDescription,
      type: "website",
      images: [{ url: imageUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | ${siteConfig.name}`,
      description: service.metaDescription,
      images: [imageUrl],
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

  const related = projects.filter((p) => p.serviceSlug === service.slug).slice(0, 3);

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

      <section className="relative flex min-h-[420px] items-end overflow-hidden bg-neutral-900 sm:min-h-[480px]">
        <Image src={service.image} alt="" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" aria-hidden />
        <div className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">Our services</p>
            <h1 className="mt-3 text-4xl font-extrabold text-white sm:text-5xl">{service.title}</h1>
            <p className="mt-4 space-y-1 text-lg text-neutral-200">
              <Sentences text={service.shortDescription} />
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/quote" className={btn("primary", "lg", "w-full sm:w-auto")}>
                Get a Free Quote
              </Link>
              <ClickToCallLink className={btn("inverse", "lg", "w-full sm:w-auto")}>
                Call {siteConfig.phone}
              </ClickToCallLink>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 dark:bg-neutral-950/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: service.title }]} />
          <p className="mt-6 text-xl leading-relaxed text-neutral-700 dark:text-neutral-300">{service.description}</p>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-neutral-50 py-16 sm:py-20 dark:bg-neutral-900/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className={eyebrow}>Recent work</p>
              <h2 className={`mt-3 ${sectionTitle}`}>{service.title} projects</h2>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="group overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 dark:border-neutral-700 dark:bg-neutral-800"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={p.images[0]?.src ?? service.image}
                      alt=""
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-neutral-900 dark:text-neutral-100">{p.title}</h3>
                    <span className="mt-2 inline-block text-sm font-semibold text-red-600 dark:text-red-400">View project →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ProcessSection />

      <section className="py-16 sm:py-20 dark:bg-neutral-950/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className={`text-center ${sectionTitle}`}>Frequently Asked Questions</h2>
          <div className="mt-10 space-y-3">
            {service.faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-xl border border-neutral-200 bg-white p-5 open:shadow-sm dark:border-neutral-700 dark:bg-neutral-900"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-neutral-900 dark:text-neutral-100 [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <svg className="h-5 w-5 shrink-0 text-red-600 transition group-open:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <p className="mt-3 text-neutral-600 dark:text-neutral-400">{faq.answer}</p>
              </details>
            ))}
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
                  className="inline-flex min-h-11 items-center rounded-full border border-neutral-300 px-5 text-sm font-medium text-neutral-700 transition hover:border-red-600 hover:bg-red-50 hover:text-red-600 dark:border-neutral-600 dark:text-neutral-200 dark:hover:border-red-500 dark:hover:bg-red-950/30 dark:hover:text-red-400"
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
