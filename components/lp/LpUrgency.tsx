import Link from "next/link";
import { ClickToCallLink } from "@/components/ClickToCallLink";

export function LpUrgency() {
  return (
    <section className="border-y-4 border-red-600 bg-red-600 py-12 text-white">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Limited Availability This Month
        </h2>
        <p className="mt-2 text-lg text-red-100">
          Book now – we respond within 24 hours
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
          <ClickToCallLink location="lp_urgency" className="inline-flex min-h-[60px] w-full items-center justify-center gap-2 rounded-xl bg-white px-12 py-4 text-xl font-bold text-red-600 shadow-lg transition hover:bg-neutral-100 active:scale-[0.98] sm:w-auto sm:min-w-[240px]">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now
          </ClickToCallLink>
          <Link
            href="#quote-form"
            className="inline-flex min-h-[56px] w-full items-center justify-center rounded-xl border-2 border-white px-10 py-4 text-lg font-bold text-white transition hover:bg-white hover:text-red-600 sm:w-auto sm:min-w-[200px]"
          >
            Get Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
