import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { services } from "@/content/services";
import { getProjectBySlug } from "@/content/projects";
import { areas } from "@/content/areas";
import { siteConfig, getYearsExperience } from "@/lib/site-config";
import { btn, eyebrow, sectionLead, sectionTitle } from "@/lib/ui";
import { ClickToCallLink } from "@/components/ClickToCallLink";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { TrustBar } from "@/components/TrustBar";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { ProcessSection } from "@/components/ProcessSection";
import { QuoteWizard } from "@/components/QuoteWizard";
import { CTA } from "@/components/CTA";
import { Sentences } from "@/components/Sentences";

export const metadata: Metadata = {
  alternates: {
    canonical: siteConfig.url,
  },
};

/** Project shown in the hero slider: before/after shot from the same angle. */
const HERO_PROJECT_SLUG = "chimney-restoration";

/** Homepage project cards: chosen by hand for the strongest photo. First one is shown large. */
const FEATURED: { slug: string; cover: string }[] = [
  { slug: "luxury-townhouse-renovation", cover: "/images/projects/townhouse-renovation/kitchen-marble-island.jpeg" },
  { slug: "full-home-renovation-london", cover: "/images/gallery/1/5.jpeg" },
  { slug: "modern-house-decoration", cover: "/images/gallery/interior/project-3/image2.jpeg" },
];

const heroPoints = ["Free site visit", "Written itemised quote", "Our own team, start to finish", "Fully insured"];

export default function HomePage() {
  const heroProject = getProjectBySlug(HERO_PROJECT_SLUG);
  const before = heroProject?.images.find((i) => i.type === "before");
  const after = heroProject?.images.find((i) => i.type === "after");
  const featured = FEATURED.flatMap(({ slug, cover }) => {
    const project = getProjectBySlug(slug);
    return project ? [{ ...project, cover }] : [];
  });

  return (
    <>
      {/* Hero: proof first */}
      <section className="bg-neutral-900 text-white" aria-label="Introduction">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-red-400 sm:text-sm sm:tracking-[0.2em]">
              Family builders · London since {siteConfig.foundedYear}
            </p>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
              London builders you can <span className="text-red-500">see the proof of.</span>
            </h1>
            <p className="mt-5 max-w-lg space-y-1 text-lg text-neutral-300">
              <Sentences
                text={`Loft conversions, extensions, renovations and roofing. ${siteConfig.stats.projectsCompleted} London homes improved over ${getYearsExperience()}+ years. Drag the slider to see one of them.`}
              />
            </p>
            <ul className="mt-6 grid gap-2 text-neutral-200 sm:grid-cols-2" role="list">
              {heroPoints.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <svg className="h-5 w-5 shrink-0 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#quote-form" className={btn("primary", "lg", "w-full sm:w-auto")}>
                Get my free quote
              </Link>
              <ClickToCallLink location="home_hero" className={btn("inverse", "lg", "w-full sm:w-auto")}>{siteConfig.phone}</ClickToCallLink>
            </div>
          </div>

          {heroProject && before && after ? (
            <figure>
              <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
                <BeforeAfterSlider
                  beforeSrc={before.src}
                  afterSrc={after.src}
                  beforeAlt={before.alt}
                  afterAlt={after.alt}
                />
              </div>
              <figcaption className="mt-3 text-center text-sm text-neutral-400">
                {heroProject.title}
                {heroProject.location && !heroProject.title.includes(heroProject.location) ? `, ${heroProject.location}` : ""} ·{" "}
                <Link href={`/projects/${heroProject.slug}`} className="font-semibold text-red-400 hover:underline">
                  See full project
                </Link>
              </figcaption>
            </figure>
          ) : (
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src={siteConfig.heroImages[0]} alt="" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          )}
        </div>
      </section>

      <TrustBar />
      <TestimonialsCarousel />

      {/* Service picker */}
      <section className="bg-neutral-50 py-16 sm:py-20 dark:bg-neutral-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className={eyebrow}>Our services</p>
            <h2 className={`mt-3 ${sectionTitle}`}>What are you planning?</h2>
            <p className={sectionLead}>One team for the whole job, from structural work to the final finish.</p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group overflow-hidden rounded-xl border border-neutral-200 bg-white transition hover:-translate-y-0.5 hover:border-red-600 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 dark:border-neutral-700 dark:bg-neutral-800"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image src={s.image} alt="" fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 1024px) 50vw, 20vw" />
                </div>
                <p className="text-balance p-4 text-center text-sm font-bold text-neutral-900 group-hover:text-red-600 sm:text-base dark:text-white">
                  {s.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent work: one large + two small */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className={eyebrow}>Our work</p>
              <h2 className={`mt-3 ${sectionTitle}`}>Recent projects</h2>
            </div>
            <Link href="/projects" className="shrink-0 font-semibold text-red-600 hover:underline dark:text-red-400">
              All projects →
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {featured.map((p, i) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className={`group relative overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 ${i === 0 ? "md:row-span-2" : ""}`}
              >
                <div className={`relative h-full ${i === 0 ? "aspect-[4/3] md:aspect-auto md:min-h-[520px]" : "aspect-[16/10]"}`}>
                  <Image
                    src={p.cover}
                    alt=""
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-red-300">
                    {p.category}
                    {p.location ? ` · ${p.location}` : ""}
                  </p>
                  <p className="mt-1 text-lg font-bold text-white sm:text-xl">{p.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <QuoteWizard />

      <section className="border-t border-neutral-200 bg-neutral-50 py-12 dark:border-neutral-800 dark:bg-neutral-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className={sectionTitle}>Areas We Cover</h2>
            <p className={sectionLead}>
              Westminster, Kensington &amp; Chelsea, Lambeth, Southwark, Wandsworth, and City of London.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[...areas.map((a) => ({ href: `/areas/${a.slug}`, label: a.name })), { href: "/areas", label: "View all areas →" }].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="inline-flex min-h-11 items-center rounded-full border border-neutral-300 px-5 text-sm font-medium text-neutral-700 transition hover:border-red-600 hover:bg-red-50 hover:text-red-600 dark:border-neutral-600 dark:text-neutral-300 dark:hover:border-red-500 dark:hover:bg-red-950/30 dark:hover:text-red-400"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
