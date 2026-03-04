import Link from "next/link";
import Image from "next/image";
import { services } from "@/content/services";
import { getFeaturedProjects } from "@/content/projects";
import { areas } from "@/content/areas";
import { siteConfig, getYearsExperience } from "@/lib/site-config";
import { CTA } from "@/components/CTA";
import { HeroSlider } from "@/components/HeroSlider";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { NewsletterSignup } from "@/components/NewsletterSignup";

const processSteps = [
  {
    step: 1,
    title: "Get in Touch",
    description: "Contact us for a free, no-obligation quote. We'll discuss your project and arrange a site visit.",
  },
  {
    step: 2,
    title: "Site Visit & Quote",
    description: "We visit your property, assess the work, and provide a detailed, transparent quote.",
  },
  {
    step: 3,
    title: "Plan & Agree",
    description: "We agree on the scope, timeline, and schedule. You're kept informed at every stage.",
  },
  {
    step: 4,
    title: "We Deliver",
    description: "Our team gets to work. We deliver quality craftsmanship and exceed your expectations.",
  },
];

const trustBullets = [
  `Over ${getYearsExperience()} years of experience across London`,
  "Transparent, detailed quotes with no hidden costs",
  "Quality craftsmanship and trusted suppliers",
  "Fully insured and committed to your satisfaction",
];

export default function HomePage() {
  const featuredProjects = getFeaturedProjects().slice(0, 4);

  return (
    <>
      <HeroSlider />

      {/* Trustpilot & Google Review */}
      <section className="border-b border-neutral-200 bg-white py-6 dark:border-neutral-800 dark:bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row flex-wrap items-center justify-center gap-4">
            <a
              href={siteConfig.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#4285F4] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#3367D6]"
            >
              <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" aria-hidden>
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Leave a Google review
            </a>
            <a
              href={siteConfig.trustpilot.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-[#00b67a] bg-white px-5 py-2.5 text-sm font-medium text-neutral-700 shadow-sm transition hover:border-[#00b67a]/80 hover:bg-[#00b67a]/5 dark:border-[#00b67a] dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-[#00b67a]/10"
            >
              <span className="text-[#00b67a]" aria-hidden>★</span>
              Review us on Trustpilot
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Trust bar */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-6 dark:border-neutral-800 dark:bg-neutral-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col flex-wrap items-center justify-center gap-8 text-center text-sm text-neutral-600 sm:flex-row dark:text-neutral-400">
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <Image
                src="/images/icon/maps.svg"
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 dark:[filter:brightness(0)_invert(1)]"
              />
              <div>
                <span className="font-semibold text-neutral-900 dark:text-neutral-100">Areas We Cover</span>
                <br />
                Westminster, Kensington & Chelsea, Lambeth, Southwark, Wandsworth, City of London
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <Image
                src="/images/icon/maps-2.svg"
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 dark:[filter:brightness(0)_invert(1)]"
              />
              <div>
                <span className="font-semibold text-neutral-900 dark:text-neutral-100">Location</span>
                <br />
                {siteConfig.address.line1}, {siteConfig.address.line2}
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <Image
                src="/images/icon/clock.svg"
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 dark:[filter:brightness(0)_invert(1)]"
              />
              <div>
                <span className="font-semibold text-neutral-900 dark:text-neutral-100">Opening Hours</span>
                <br />
                {siteConfig.hours}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 sm:py-24 dark:bg-neutral-950/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="flex items-center justify-center bg-red-600 lg:col-span-4 lg:min-h-[280px]">
              <div className="text-center">
                <p className="text-2xl font-light text-white/90">Since</p>
                <p className="text-6xl font-bold text-white">{siteConfig.foundedYear}</p>
              </div>
            </div>
            <div className="lg:col-span-8">
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-100">
                Welcome to {siteConfig.name}
              </h2>
              <p className="mt-2 text-lg font-medium text-red-600 dark:text-red-500">
                {siteConfig.tagline}
              </p>
              <p className="mt-4 text-neutral-600 dark:text-neutral-400">
                For over {getYearsExperience()} years, we&apos;ve been the creative force behind
                countless homes across London, turning every room into a canvas
                of inspiration. More than just painters and remodelers,
                we&apos;re architects of dreams, curators of comfort, and
                creators of atmospheres.
              </p>
              <p className="mt-4 text-neutral-600 dark:text-neutral-400">
                Our services span the entire spectrum of home transformation—from
                vibrant wall makeovers to luxurious bathroom designs, and from
                culinary sanctuaries in the kitchen to breathing new life into
                every floorboard. With over {getYearsExperience()} years of dedication, we&apos;ve
                left our mark in every corner of London, making dreams a reality.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-block rounded-md bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-neutral-50 py-16 sm:py-24 dark:bg-neutral-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-100">
              Services We Offer
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
              Whether working with our in-house team or trusted subcontractors,
              we always ensure that projects are delivered exceeding expectations.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group overflow-hidden rounded-lg bg-white shadow-sm transition hover:shadow-md dark:bg-neutral-800 dark:border dark:border-neutral-700"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-semibold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6 dark:bg-neutral-800">
                  <p className="text-neutral-600 line-clamp-2 dark:text-neutral-400">
                    {service.shortDescription}
                  </p>
                  <span className="mt-3 inline-flex items-center text-sm font-medium text-red-600 group-hover:underline">
                    Read more
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
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-block rounded-md bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-24 dark:bg-neutral-950/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-100">
              Why Choose Us
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
              We combine experience, transparency, and quality to deliver projects
              you&apos;ll love.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustBullets.map((bullet, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-4 rounded-lg border border-neutral-200 bg-white p-6 text-center dark:border-neutral-700 dark:bg-neutral-900 sm:flex-row sm:items-start sm:text-left"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <p className="text-neutral-700 dark:text-neutral-300">{bullet}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-neutral-50 py-16 sm:py-24 dark:bg-neutral-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-100">
              Featured Projects
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
              Our portfolio is a showcase of dreams transformed into tangible
              elegance. Each project is a testament to our commitment to
              perfection.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group overflow-hidden rounded-lg bg-white shadow-sm transition hover:shadow-md dark:bg-neutral-800 dark:border dark:border-neutral-700"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.images[0]?.src ?? "/images/gallery/page.jpg"}
                    alt={project.title}
                    fill
                    className="object-cover transition group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs font-medium uppercase tracking-wider text-red-400">
                      {project.category}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6 dark:bg-neutral-800">
                  <p className="text-neutral-600 line-clamp-2 dark:text-neutral-400">
                    {project.shortDescription}
                  </p>
                  <span className="mt-3 inline-flex items-center text-sm font-medium text-red-600 group-hover:underline">
                    View project
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
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/projects"
              className="inline-block rounded-md bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              All Projects
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsCarousel />

      {/* Process */}
      <section className="bg-neutral-50 py-16 sm:py-24 dark:bg-neutral-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-100">
              Our Process
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
              From first contact to final handover, we keep things simple and
              transparent.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item) => (
              <div key={item.step} className="relative">
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-600 text-lg font-bold text-white">
                    {item.step}
                  </span>
                  <div className="text-center sm:text-left">
                    <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                      {item.description}
                    </p>
                  </div>
                </div>
                {item.step < 4 && (
                  <div className="absolute left-6 top-14 hidden h-full w-px bg-neutral-200 dark:bg-neutral-700 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-16 sm:py-24 dark:bg-neutral-950/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-100">
              Areas We Cover
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
              Westminster, Kensington & Chelsea, Lambeth, Southwark, Wandsworth,
              and City of London. Based in Norwood, we&apos;re your local construction experts.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-700 transition hover:border-red-600 hover:bg-red-50 hover:text-red-600 dark:border-neutral-600 dark:text-neutral-300 dark:hover:border-red-500 dark:hover:bg-red-950/30 dark:hover:text-red-500"
                >
                  {area.name}
                </Link>
              ))}
            <Link
              href="/areas"
              className="rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-700 transition hover:border-red-600 hover:bg-red-50 hover:text-red-600"
            >
              View all areas
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSignup />

      {/* CTA */}
      <CTA />
    </>
  );
}
