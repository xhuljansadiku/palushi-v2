import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  getProjectBySlug,
  getAllProjectSlugs,
  projects,
} from "@/content/projects";
import { siteConfig } from "@/lib/site-config";
import { CTA } from "@/components/CTA";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProjectImageGrid } from "@/components/ProjectImageGrid";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const imageUrl = project.images[0]?.src
    ? `${siteConfig.url}${project.images[0].src}`
    : undefined;

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630 }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const beforeImages = project.images.filter((i) => i.type === "before");
  const afterImages = project.images.filter((i) => i.type === "after");

  return (
    <>
      <section className="relative h-64 bg-neutral-900 sm:h-80">
        <Image
          src={project.images[0]?.src ?? "/images/gallery/page.jpg"}
          alt={project.title}
          fill
          className="object-cover opacity-80"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-8 sm:px-6 lg:px-8">
          <span className="text-sm font-medium uppercase tracking-widest text-red-400">
            {project.category}
          </span>
          <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            {project.title}
          </h1>
        </div>
      </section>

      <section className="py-16 sm:py-24 dark:bg-neutral-950/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Projects", href: "/projects" }, { label: project.title }]} />
          {project.location && (
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm text-neutral-600 dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-100">
              <svg className="h-4 w-4 shrink-0 text-red-600 dark:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-medium">{project.location}</span>
            </div>
          )}
          <p className="text-lg text-neutral-600 dark:text-neutral-400">{project.description}</p>

          {beforeImages.length > 0 && afterImages.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">Before & After</h2>
              <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                Drag the slider to compare before and after
              </p>
              <div className="mt-6">
                <BeforeAfterSlider
                  beforeSrc={beforeImages[0].src}
                  afterSrc={afterImages[0].src}
                  beforeAlt={beforeImages[0].alt}
                  afterAlt={afterImages[0].alt}
                />
              </div>
            </div>
          )}

          {beforeImages.length > 0 && (
            <ProjectImageGrid images={beforeImages} title="Before" />
          )}

          {afterImages.length > 0 && (
            <ProjectImageGrid images={afterImages} title="After" />
          )}

          {project.videos && project.videos.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold">Videos</h2>
              <p className="mt-1 text-neutral-600">
                Watch the transformation process
              </p>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {project.videos.map((video, i) => (
                  <div key={i} className="overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900">
                    <video
                      src={video.src}
                      controls
                      playsInline
                      className="aspect-video w-full object-cover"
                      preload="metadata"
                    >
                      Your browser does not support the video tag.
                    </video>
                    {video.label && (
                      <p className="px-4 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        {video.label}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.serviceSlug && (
            <div className="mt-16">
              <Link
                href={`/services/${project.serviceSlug}`}
                className="inline-flex items-center text-red-600 hover:underline dark:text-red-500 dark:hover:text-red-400"
              >
                View {project.category} services
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
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50 py-12 dark:border-neutral-800 dark:bg-neutral-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            Other Projects
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {projects
              .filter((p) => p.slug !== project.slug)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 transition hover:border-red-600 hover:bg-red-50 hover:text-red-600 dark:border-neutral-600 dark:text-neutral-200 dark:hover:border-red-500 dark:hover:bg-red-950/30 dark:hover:text-red-400"
                >
                  {p.title}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
