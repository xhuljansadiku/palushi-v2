import Link from "next/link";
import Image from "next/image";
import { services } from "@/content/services";
import { getFeaturedProjects } from "@/content/projects";
import { areas } from "@/content/areas";
import { siteConfig, getYearsExperience } from "@/lib/site-config";
import { CTA } from "@/components/CTA";
import { HeroSlider } from "@/components/HeroSlider";
import { TrustpilotWidget } from "@/components/TrustpilotWidget";
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

      {/* Trustpilot */}
      <section className="border-b border-neutral-200 bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TrustpilotWidget />
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Trust bar */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col flex-wrap items-center justify-center gap-8 text-center text-sm text-neutral-600 sm:flex-row">
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <Image
                src="/images/icon/maps.svg"
                alt=""
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <div>
                <span className="font-semibold text-neutral-900">Areas We Cover</span>
                <br />
                All London boroughs and surrounding areas
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <Image
                src="/images/icon/maps-2.svg"
                alt=""
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <div>
                <span className="font-semibold text-neutral-900">Location</span>
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
                className="h-10 w-10"
              />
              <div>
                <span className="font-semibold text-neutral-900">Opening Hours</span>
                <br />
                {siteConfig.hours}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="flex items-center justify-center bg-red-600 lg:col-span-4 lg:min-h-[280px]">
              <div className="text-center">
                <p className="text-2xl font-light text-white/90">Since</p>
                <p className="text-6xl font-bold text-white">{siteConfig.foundedYear}</p>
              </div>
            </div>
            <div className="lg:col-span-8">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Welcome to {siteConfig.name}
              </h2>
              <p className="mt-2 text-lg font-medium text-red-600">
                {siteConfig.tagline}
              </p>
              <p className="mt-4 text-neutral-600">
                For over {getYearsExperience()} years, we&apos;ve been the creative force behind
                countless homes across London, turning every room into a canvas
                of inspiration. More than just painters and remodelers,
                we&apos;re architects of dreams, curators of comfort, and
                creators of atmospheres.
              </p>
              <p className="mt-4 text-neutral-600">
                Our services span the entire spectrum of home transformation—from
                vibrant wall makeovers to luxurious bathroom designs, and from
                culinary sanctuaries in the kitchen to breathing new life into
                every floorboard. With over {getYearsExperience()} years of dedication, we&apos;ve
                left our mark in every corner of London, making dreams a reality.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-block rounded-md bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-neutral-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Services We Offer
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
              Whether working with our in-house team or trusted subcontractors,
              we always ensure that projects are delivered exceeding expectations.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group overflow-hidden rounded-lg bg-white shadow-sm transition hover:shadow-md"
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
                <div className="p-6">
                  <p className="text-neutral-600 line-clamp-2">
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
              className="inline-block rounded-md bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Why Choose Us
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
              We combine experience, transparency, and quality to deliver projects
              you&apos;ll love.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustBullets.map((bullet, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-4 rounded-lg border border-neutral-200 bg-white p-6 text-center sm:flex-row sm:items-start sm:text-left"
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
                <p className="text-neutral-700">{bullet}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-neutral-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Featured Projects
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
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
                className="group overflow-hidden rounded-lg bg-white shadow-sm transition hover:shadow-md"
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
                <div className="p-6">
                  <p className="text-neutral-600 line-clamp-2">
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
              className="inline-block rounded-md bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              All Projects
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsCarousel />

      {/* Process */}
      <section className="bg-neutral-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Our Process
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
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
                    <h3 className="font-semibold text-neutral-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-600">
                      {item.description}
                    </p>
                  </div>
                </div>
                {item.step < 4 && (
                  <div className="absolute left-6 top-14 hidden h-full w-px bg-neutral-200 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Areas We Cover
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
              We serve all London boroughs and surrounding areas. Based in
              Norwood, we&apos;re your local construction experts.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {areas
              .filter((a) => a.slug !== "london")
              .map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-700 transition hover:border-red-600 hover:bg-red-50 hover:text-red-600"
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
