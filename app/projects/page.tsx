"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, getProjectCategories } from "@/content/projects";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = getProjectCategories();

  const filteredProjects = useMemo(() => {
    if (!selectedCategory) return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <section className="bg-neutral-900 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Our Projects
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-300">
            Step into a world of inspiration and see how we turn visions into
            reality. Our portfolio showcases dreams transformed into tangible
            elegance.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category filter */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedCategory(null)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                selectedCategory === null
                  ? "bg-red-600 text-white"
                  : "border border-neutral-300 text-neutral-700 hover:border-red-600 hover:bg-red-50 hover:text-red-600"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                  selectedCategory === cat
                    ? "bg-red-600 text-white"
                    : "border border-neutral-300 text-neutral-700 hover:border-red-600 hover:bg-red-50 hover:text-red-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group overflow-hidden rounded-lg bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.images[0]?.src ?? "/images/gallery/page.jpg"}
                    alt={project.title}
                    fill
                    className="object-cover transition group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs font-medium uppercase tracking-wider text-red-400">
                      {project.category}
                    </span>
                    <h2 className="mt-1 text-lg font-semibold text-white">
                      {project.title}
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col p-6">
                  {project.location && (
                    <div className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-100">
                      <svg className="h-3.5 w-3.5 shrink-0 text-red-600 dark:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {project.location}
                    </div>
                  )}
                  <p className="flex-1 text-neutral-600 dark:text-neutral-400">
                    {project.shortDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-red-600 group-hover:underline">
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
        </div>
      </section>
    </>
  );
}
