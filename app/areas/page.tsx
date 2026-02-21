import Link from "next/link";
import { areas } from "@/content/areas";
import { siteConfig } from "@/lib/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Areas We Cover",
  description:
    "Construction and renovation services across London. Norwood, Crystal Palace, Streatham, Dulwich, Sydenham, Forest Hill and all London boroughs.",
};

export default function AreasPage() {
  const localAreas = areas.filter((a) => a.slug !== "london");

  return (
    <>
      <section className="bg-neutral-900 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Areas We Cover
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-300">
            We serve all London boroughs and surrounding areas. Based in Norwood,
            we&apos;re your local construction experts.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {localAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="group overflow-hidden rounded-xl border border-neutral-200 bg-white p-8 shadow-sm transition hover:border-red-600 hover:shadow-md"
              >
                <h2 className="text-xl font-semibold text-neutral-900 group-hover:text-red-600">
                  {area.name}
                </h2>
                <p className="mt-3 line-clamp-3 text-neutral-600">
                  {area.description}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-red-600 group-hover:underline">
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

          <div className="mt-12 rounded-xl border-2 border-neutral-200 bg-neutral-50 p-8 text-center">
            <h2 className="text-xl font-semibold text-neutral-900">
              All London
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-neutral-600">
              We cover all London boroughs and surrounding areas. From Norwood to
              North London, our team brings quality construction and renovation
              services to your doorstep.
            </p>
            <Link
              href="/areas/london"
              className="mt-6 inline-block rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Learn more about our London coverage
            </Link>
          </div>

          <p className="mt-12 text-center text-sm text-neutral-500">
            Based at {siteConfig.address.line1}, {siteConfig.address.line2},{" "}
            {siteConfig.address.line3}
          </p>
        </div>
      </section>
    </>
  );
}
