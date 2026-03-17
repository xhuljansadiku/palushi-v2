import Image from "next/image";
import Link from "next/link";
import { siteConfig, getYearsExperience } from "@/lib/site-config";
import { ClickToCallLink } from "./ClickToCallLink";

const trustBullets = [
  { label: "Fast Response", icon: "clock" },
  { label: "Free Quote", icon: "quote" },
  { label: "Experienced Team", icon: "check" },
];

function TrustIcon({ icon }: { icon: string }) {
  if (icon === "clock") {
    return (
      <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  }
  if (icon === "quote") {
    return (
      <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    );
  }
  return (
    <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      className="relative min-h-[85vh] overflow-hidden bg-neutral-900 sm:min-h-[90vh]"
      aria-label="Hero"
    >
      <Image
        src={siteConfig.heroImages[0]}
        alt=""
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/85" />

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-center px-4 py-16 sm:min-h-[90vh] sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto w-full max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
            Serving London
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-tight">
            Trusted Builders in London
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-neutral-200 sm:text-xl lg:text-2xl">
            Loft Conversions, Extensions & Full Renovations – Get a Free Quote Today
          </p>

          <ul className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-8" role="list">
            {trustBullets.map((b) => (
              <li key={b.label} className="flex items-center gap-3 text-base font-medium text-white sm:text-lg">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-green-400">
                  <TrustIcon icon={b.icon} />
                </span>
                {b.label}
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:justify-center sm:gap-10">
            <ClickToCallLink
              className="inline-flex min-h-[60px] w-full min-w-[240px] items-center justify-center rounded-xl bg-red-600 px-12 py-5 text-xl font-bold text-white shadow-xl shadow-red-900/40 transition hover:bg-red-700 hover:shadow-red-900/50 active:scale-[0.98] sm:min-h-[68px] sm:w-auto sm:text-2xl"
            >
              Call Now
            </ClickToCallLink>
            <Link
              href="#quote-form"
              className="inline-flex min-h-[56px] w-full min-w-[220px] items-center justify-center rounded-xl border-[3px] border-white bg-white/5 px-10 py-4 text-lg font-bold text-white transition hover:border-white hover:bg-white hover:text-neutral-900 active:scale-[0.98] sm:min-h-[60px] sm:w-auto sm:text-xl"
            >
              Get Free Quote
            </Link>
          </div>

          <p className="mt-5 text-center text-sm font-semibold text-amber-300/95 sm:text-base">
            Limited availability this month · Get your quote within 24 hours
          </p>

          <div className="mt-10 rounded-xl bg-white/10 px-6 py-5 backdrop-blur-sm sm:mt-12 sm:px-8 sm:py-6">
            <p className="text-sm font-medium uppercase tracking-wider text-neutral-300">
              Or call us directly
            </p>
            <ClickToCallLink
              className="mt-2 inline-block text-4xl font-bold text-white drop-shadow-lg underline-offset-4 hover:underline sm:text-5xl"
            >
              {siteConfig.phone}
            </ClickToCallLink>
          </div>

          <p className="mt-6 text-base font-medium text-neutral-300 sm:text-lg">
            {getYearsExperience()}+ Years Experience • {siteConfig.stats.projectsCompleted} Projects Completed
          </p>
        </div>
      </div>
    </section>
  );
}
