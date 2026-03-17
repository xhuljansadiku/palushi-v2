import Image from "next/image";
import { getFeaturedProjects } from "@/content/projects";
import { testimonials } from "@/content/testimonials";

export function LpSocialProof() {
  const allProjects = getFeaturedProjects();
  const projectsWithBefore = allProjects.filter((p) => p.images.some((i) => i.type === "before"));
  const projects = (projectsWithBefore.length > 0 ? projectsWithBefore : allProjects).slice(0, 3);

  return (
    <section className="bg-neutral-50 py-12 sm:py-16 dark:bg-neutral-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-neutral-900 dark:text-neutral-100">
          Before & After
        </h2>
        <p className="mt-2 text-center text-neutral-600 dark:text-neutral-400">
          Real results from our projects across London
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const beforeImg = project.images.find((i) => i.type === "before") ?? project.images[0];
            const afterImg = project.images.find((i) => i.type === "after") ?? project.images[project.images.length - 1] ?? project.images[0];
            return (
              <div
                key={project.slug}
                className="overflow-hidden rounded-lg border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900"
              >
                <div className="grid grid-cols-2 gap-4 p-4">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase text-neutral-500">Before</p>
                    <div className="relative aspect-[4/3] overflow-hidden rounded">
                      <Image
                        src={beforeImg?.src ?? project.images[0].src}
                        alt={`${project.title} before`}
                        fill
                        className="object-cover"
                        sizes="150px"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase text-neutral-500">After</p>
                    <div className="relative aspect-[4/3] overflow-hidden rounded">
                      <Image
                        src={afterImg?.src ?? project.images[0].src}
                        alt={`${project.title} after`}
                        fill
                        className="object-cover"
                        sizes="150px"
                      />
                    </div>
                  </div>
                </div>
                <div className="border-t border-neutral-200 p-4 dark:border-neutral-700">
                  <p className="font-semibold text-neutral-900 dark:text-neutral-100">
                    {project.title}
                  </p>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    {project.category}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <h2 className="mt-16 text-center text-2xl font-bold text-neutral-900 dark:text-neutral-100">
          What Our Clients Say
        </h2>
        <div className="mt-8 space-y-6">
          {testimonials.slice(0, 3).map((t) => {
            const plainQuote = t.quote
              .replace(/<br\s*\/?>/gi, " ")
              .replace(/<b>/gi, "")
              .replace(/<\/b>/gi, "")
              .replace(/<[^>]+>/g, "");
            return (
              <blockquote
                key={t.id}
                className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900"
              >
                <p className="text-neutral-700 dark:text-neutral-300">
                  &ldquo;{plainQuote.slice(0, 180)}...&rdquo;
                </p>
                <footer className="mt-4 font-semibold text-neutral-900 dark:text-neutral-100">
                  – {t.author}
                </footer>
              </blockquote>
            );
          })}
        </div>
      </div>
    </section>
  );
}
