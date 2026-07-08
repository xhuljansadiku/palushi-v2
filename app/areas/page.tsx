import Link from "next/link";
import { areas } from "@/content/areas";
import { siteConfig } from "@/lib/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Areas We Cover",
  description:
    "Construction and renovation services in Westminster, Kensington & Chelsea, Lambeth, Southwark, Wandsworth, and City of London.",
  alternates: {
    canonical: `${siteConfig.url}/areas`,
  },
};

export default function AreasPage() {
  return (
    <>
      <section className="bg-neutral-900 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Areas We Cover
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-300">
            Westminster, Kensington & Chelsea, Lambeth, Southwark, Wandsworth,
            and City of London. Based in Norwood, we&apos;re your local construction experts.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 dark:bg-neutral-950/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="group overflow-hidden rounded-xl border border-neutral-200 bg-white p-8 shadow-sm transition hover:border-red-600 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-red-500/50"
              >
                <h2 className="text-xl font-semibold text-neutral-900 group-hover:text-red-600 dark:text-neutral-100 dark:group-hover:text-red-500">
                  {area.name}
                </h2>
                <p className="mt-3 line-clamp-3 text-neutral-600 dark:text-neutral-400">
                  {area.description}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-red-600 group-hover:underline dark:text-red-500">
                  View services in {area.name}
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

          <p className="mt-12 text-center text-sm text-neutral-500 dark:text-neutral-400">
            Based at {siteConfig.address.line1}, {siteConfig.address.line2},{" "}
            {siteConfig.address.line3}
          </p>
        </div>
      </section>
    </>
  );
}
