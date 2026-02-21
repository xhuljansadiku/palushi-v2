import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  getAreaBySlug,
  getAllAreaSlugs,
  areas,
} from "@/content/areas";
import { services } from "@/content/services";
import { getFeaturedProjects } from "@/content/projects";
import { siteConfig } from "@/lib/site-config";
import { CTA } from "@/components/CTA";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getAllAreaSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) return {};

  return {
    title: `Construction Services in ${area.name}`,
    description: area.metaDescription,
    openGraph: {
      title: `${area.name} Construction | ${siteConfig.name}`,
      description: area.metaDescription,
    },
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);

  if (!area) notFound();

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: `Construction and renovation services in ${area.name}, London. ${area.description}`,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.full,
    },
    areaServed: {
      "@type": "Place",
      name: area.name,
      containedInPlace: {
        "@type": "City",
        name: "London",
      },
    },
  };

  const featuredProjects = getFeaturedProjects().slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localSchema),
        }}
      />

      <section className="bg-neutral-900 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Construction & Renovation in {area.name}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-300">
            {area.description}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Our Services in {area.name}</h2>
          <p className="mt-2 text-neutral-600">
            We offer a full range of construction and renovation services across{" "}
            {area.name} and the surrounding areas.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm transition hover:border-red-200 hover:shadow-md"
              >
                <h3 className="font-semibold text-neutral-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 line-clamp-2">
                  {service.shortDescription}
                </p>
                <span className="mt-3 inline-flex items-center text-sm font-medium text-red-600">
                  Learn more
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Recent Projects</h2>
          <p className="mt-2 text-neutral-600">
            See how we&apos;ve transformed homes across London.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group overflow-hidden rounded-lg bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.images[0]?.src ?? "/images/gallery/page.jpg"}
                    alt={project.title}
                    fill
                    className="object-cover transition group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs font-medium uppercase tracking-wider text-red-400">
                      {project.category}
                    </span>
                    <h3 className="mt-1 font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/projects"
              className="inline-block rounded-md bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              View all projects
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold text-neutral-900">
            Other Areas We Cover
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {areas
              .filter((a) => a.slug !== area.slug)
              .map((a) => (
                <Link
                  key={a.slug}
                  href={`/areas/${a.slug}`}
                  className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 transition hover:border-red-600 hover:bg-red-50 hover:text-red-600"
                >
                  {a.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CTA
        title={`Ready to Start Your Project in ${area.name}?`}
        subtitle="Get a free quote today. We serve all London boroughs and surrounding areas."
      />
    </>
  );
}
