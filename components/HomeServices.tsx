import Image from "next/image";
import Link from "next/link";
import { services } from "@/content/services";

const serviceOrder = [
  "loft-conversions",
  "house-extensions",
  "full-renovations",
  "kitchen-bathroom-refurbishments",
  "roofing",
];

export function HomeServices() {
  const orderedServices = serviceOrder
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean);

  return (
    <section className="bg-neutral-50 py-16 sm:py-24 dark:bg-neutral-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-100">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
            Loft conversions, extensions, renovations. Get a free quote for your project.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {orderedServices.slice(0, 6).map((service) =>
            service ? (
              <div
                key={service.slug}
                className="flex flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-800"
              >
                <div className="relative aspect-[4/3] shrink-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-neutral-600 line-clamp-2 dark:text-neutral-400">
                    {service.shortDescription}
                  </p>
                  <Link
                    href="/quote"
                    className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-red-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
}
