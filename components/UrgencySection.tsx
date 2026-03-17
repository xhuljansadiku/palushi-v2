import Link from "next/link";
import { ClickToCallLink } from "./ClickToCallLink";

export function UrgencySection() {
  return (
    <section className="border-y-4 border-red-600 bg-red-600 py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Limited Availability This Month
        </h2>
        <p className="mt-2 text-lg text-red-100">
          Book your free quote now – we respond within 24 hours
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ClickToCallLink className="inline-flex min-h-[52px] min-w-[180px] items-center justify-center rounded-lg bg-white px-8 py-4 text-lg font-bold text-red-600 transition hover:bg-neutral-100">
            Call Now
          </ClickToCallLink>
          <Link
            href="#quote-form"
            className="inline-flex min-h-[52px] min-w-[180px] items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-lg font-bold text-white transition hover:bg-white hover:text-red-600"
          >
            Get Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
