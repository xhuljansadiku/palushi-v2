import Image from "next/image";
import Link from "next/link";
import { services } from "@/content/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Loft conversions, house extensions, full renovations, roofing, and kitchen & bathroom refurbishments across London. Quality craftsmanship since 2012.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-neutral-900 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Our Services
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-300">
            Whether working with our in-house team or trusted subcontractors, we
            always ensure that projects are delivered exceeding expectations.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 dark:bg-neutral-950/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group overflow-hidden rounded-lg bg-white shadow-sm transition hover:shadow-md dark:bg-neutral-900 dark:border dark:border-neutral-800 dark:hover:border-neutral-700"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h2 className="text-lg font-semibold text-white">
                      {service.title}
                    </h2>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-neutral-600 line-clamp-2 dark:text-neutral-400">
                    {service.shortDescription}
                  </p>
                  <span className="mt-3 inline-flex items-center text-sm font-medium text-red-600 group-hover:underline dark:text-red-500 dark:group-hover:text-red-400">
                    Read more
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
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
