import Image from "next/image";
import Link from "next/link";
import { services } from "@/content/services";

const serviceSlugs = ["loft-conversions", "house-extensions", "full-renovations", "kitchen-bathroom-refurbishments"];

export function LpServices() {
  const lpServices = serviceSlugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean);

  return (
    <section className="py-12 sm:py-16 dark:bg-neutral-950/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-neutral-900 dark:text-neutral-100">
          Our Services
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {lpServices.map((service) =>
            service ? (
              <div
                key={service.slug}
                className="flex flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-neutral-600 line-clamp-2 dark:text-neutral-400">
                    {service.shortDescription}
                  </p>
                  <Link
                    href="#quote-form"
                    className="mt-4 inline-flex justify-center rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
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
