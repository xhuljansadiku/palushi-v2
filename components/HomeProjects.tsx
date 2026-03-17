import Image from "next/image";
import Link from "next/link";
import { getFeaturedProjects } from "@/content/projects";

export function HomeProjects() {
  const projects = getFeaturedProjects().slice(0, 4);

  return (
    <section className="bg-neutral-50 py-16 sm:py-24 dark:bg-neutral-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-100">
            Our Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
            Before & after. Real results from real projects across London.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {projects.map((project) => (
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
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-md bg-red-600 px-8 py-4 text-base font-semibold text-white transition hover:bg-red-700"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
