import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/content/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips, guides, and insights on loft conversions, extensions, renovations, and more from Palushi Brothers Construction.",
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-neutral-900 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Blog
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-300">
            Tips, guides, and insights on construction and renovation.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm"
              >
                {post.image && (
                  <div className="relative aspect-video">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 672px"
                    />
                  </div>
                )}
                <div className="p-8">
                  <time
                    dateTime={post.date}
                    className="text-sm text-neutral-500"
                  >
                    {new Date(post.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  <h2 className="mt-2 text-xl font-bold text-neutral-900">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-red-600"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-2 text-neutral-600">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-flex items-center text-sm font-medium text-red-600 hover:underline"
                  >
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
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
