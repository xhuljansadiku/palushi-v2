import Image from "next/image";
import Link from "next/link";
import { siteConfig, getYearsExperience } from "@/lib/site-config";
import { ClickToCallLink } from "@/components/ClickToCallLink";

const bullets = ["Fast Response", "Free Quote", "Experienced Team"];

export function LpHero() {
  return (
    <section className="relative min-h-[50vh] overflow-hidden bg-neutral-900 sm:min-h-[60vh] lg:min-h-[70vh]">
      <Image
        src={siteConfig.heroImages[0]}
        alt=""
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/85" />

      <div className="relative mx-auto flex min-h-[50vh] max-w-4xl flex-col justify-center px-4 py-8 sm:min-h-[60vh] sm:px-6 sm:py-12 lg:min-h-[70vh] lg:px-8 lg:py-14">
        <div className="mx-auto w-full text-center">
          <ClickToCallLink className="mb-4 block text-2xl font-bold text-white drop-shadow-lg hover:underline sm:text-3xl lg:text-4xl">
            {siteConfig.phone}
          </ClickToCallLink>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Trusted Builders in London
          </h1>
          <p className="mt-3 text-base text-neutral-200 sm:mt-4 sm:text-lg lg:text-xl">
            Loft Conversions, Extensions & Full Renovations – Get a Free Quote Today
          </p>
          <ul className="mt-5 flex flex-wrap justify-center gap-4 sm:gap-6" role="list">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm font-medium text-white sm:text-base">
                <span className="text-green-400" aria-hidden>✔</span>
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-8">
            <ClickToCallLink className="inline-flex min-h-[60px] w-full items-center justify-center rounded-xl bg-red-600 px-12 py-4 text-xl font-bold text-white shadow-xl shadow-red-900/40 transition hover:bg-red-700 active:scale-[0.98] sm:w-auto sm:min-w-[240px]">
              Call Now
            </ClickToCallLink>
            <Link
              href="#quote-form"
              className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xl border-2 border-white px-10 py-3.5 text-lg font-bold text-white transition hover:bg-white hover:text-neutral-900 active:scale-[0.98] sm:w-auto sm:min-w-[200px]"
            >
              Get Free Quote
            </Link>
          </div>
          <p className="mt-4 text-base font-medium text-neutral-200">
            {getYearsExperience()}+ Years Experience • {siteConfig.stats.projectsCompleted} Projects Completed
          </p>
          <p className="mt-2 text-sm font-semibold text-amber-300/95">
            Limited availability this month • We respond within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
}
