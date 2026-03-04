import Image from "next/image";
import Link from "next/link";
import { siteConfig, getYearsExperience } from "@/lib/site-config";
import { CTA } from "@/components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    `Palushi Brothers Construction Ltd - London's premier space transformators. Over ${getYearsExperience()} years of construction and renovation excellence across London.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-neutral-900 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            About Us
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-300">
            {siteConfig.tagline}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 dark:bg-neutral-950/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="flex items-center justify-center bg-red-600 lg:col-span-4 lg:min-h-[320px]">
              <div className="text-center">
                <p className="text-2xl font-light text-white/90">Since</p>
                <p className="text-7xl font-bold text-white">
                  {siteConfig.foundedYear}
                </p>
              </div>
            </div>
            <div className="lg:col-span-8">
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-100">
                Our Story
              </h2>
              <p className="mt-6 text-neutral-600 dark:text-neutral-300">
                For over {getYearsExperience()} years, we&apos;ve been the creative force behind
                countless homes across London, turning every room into a canvas
                of inspiration. More than just painters and remodelers,
                we&apos;re architects of dreams, curators of comfort, and
                creators of atmospheres.
              </p>
              <p className="mt-4 text-neutral-600 dark:text-neutral-300">
                Our services span the entire spectrum of home transformation—from
                vibrant wall makeovers to luxurious bathroom designs, and from
                culinary sanctuaries in the kitchen to breathing new life into
                every floorboard. With over {getYearsExperience()} years of dedication, we&apos;ve
                left our mark in every corner of London, making dreams a reality.
              </p>
              <p className="mt-4 text-neutral-600 dark:text-neutral-300">
                As you explore our portfolio, witness the stories of
                metamorphosis—a blend of innovative design and masterful
                execution. Thank you for considering {siteConfig.name} as your
                partner in crafting elevated living experiences. Join us in
                transforming houses into homes across Westminster, Kensington & Chelsea,
                Lambeth, Southwark, Wandsworth, and City of London. Your journey to exceptional living begins
                here.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
                <Link
                  href="/projects"
                  className="inline-block rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-500"
                >
                  View our projects
                </Link>
                <Link
                  href="/contact"
                  className="inline-block rounded-md border-2 border-red-600 bg-transparent px-6 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-600 hover:text-white dark:border-red-500 dark:text-red-400 dark:hover:bg-red-500 dark:hover:text-white"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-16 sm:py-24 dark:bg-neutral-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-100">
              Why Choose Us
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-300">
              Experience, transparency, and quality—that&apos;s what we bring to
              every project.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center rounded-lg bg-white p-8 text-center shadow-sm dark:bg-neutral-900 dark:border dark:border-neutral-800 lg:items-stretch lg:text-left">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-950/50 dark:text-red-400">
                <span className="text-xl font-bold">
                  {getYearsExperience()}+
                </span>
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900 dark:text-neutral-100">
                Years of Experience
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Over {getYearsExperience()} years of delivering quality construction and renovation
                projects across London.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-white p-8 text-center shadow-sm dark:bg-neutral-900 dark:border dark:border-neutral-800 lg:items-stretch lg:text-left">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-950/50 dark:text-red-400">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900 dark:text-neutral-100">
                Transparent Quotes
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                No hidden costs. We provide clear, detailed quotes so you know
                exactly what to expect.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-white p-8 text-center shadow-sm dark:bg-neutral-900 dark:border dark:border-neutral-800 lg:items-stretch lg:text-left">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-950/50 dark:text-red-400">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900 dark:text-neutral-100">
                Quality Craftsmanship
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                We use trusted suppliers and skilled tradespeople to deliver
                results that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
