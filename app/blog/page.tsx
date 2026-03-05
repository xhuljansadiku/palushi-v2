import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/content/blog";
import { siteConfig } from "@/lib/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Construction & Renovation Tips | Palushi Brothers",
  description:
    "Expert tips on loft conversions, house extensions, kitchen & bathroom refurbishments, and full renovations in London. Westminster, Kensington & Chelsea, Lambeth, Southwark, Wandsworth.",
  keywords: [
    "loft conversion blog",
    "house extension London",
    "kitchen refurbishment tips",
    "renovation guide London",
    "construction blog UK",
  ],
  openGraph: {
    title: "Blog | Construction & Renovation Tips | Palushi Brothers",
    description:
      "Expert tips on loft conversions, house extensions, kitchen & bathroom refurbishments. Quality advice from London's trusted construction experts.",
    url: `${siteConfig.url}/blog`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
};

export default function BlogPage() {
  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Palushi Brothers Construction Blog",
    description: "Expert tips and guides on loft conversions, extensions, renovations in London",
    numberOfItems: blogPosts.length,
    itemListElement: blogPosts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        url: `${siteConfig.url}/blog/${post.slug}`,
        datePublished: post.date,
        author: { "@type": "Organization", name: post.author },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
      <section className="bg-neutral-900 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Blog
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-300">
            Expert tips, guides, and insights on loft conversions, house extensions,
            kitchen & bathroom refurbishments, and full renovations. Written by
            London&apos;s trusted construction experts.
          </p>
          <p className="mx-auto mt-3 max-w-xl text-sm text-neutral-400">
            Serving Westminster, Kensington & Chelsea, Lambeth, Southwark, Wandsworth & City of London
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:gap-12">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  {post.image && (
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                  )}
                  <div className="p-6 sm:p-8">
                    <time
                      dateTime={post.date}
                      className="text-sm font-medium text-neutral-500 dark:text-neutral-400"
                    >
                      {new Date(post.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    <h2 className="mt-2 text-xl font-bold text-neutral-900 transition group-hover:text-red-600 dark:text-neutral-100 dark:group-hover:text-red-500 sm:text-2xl">
                      {post.title}
                    </h2>
                    <p className="mt-3 line-clamp-3 text-neutral-600 dark:text-neutral-400">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center text-sm font-semibold text-red-600 dark:text-red-500">
                      Read more
                      <svg
                        className="ml-1 h-4 w-4 transition group-hover:translate-x-1"
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
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-xl border-2 border-neutral-200 bg-neutral-50 p-8 text-center dark:border-neutral-800 dark:bg-neutral-900/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              Ready to Start Your Project?
            </h2>
            <p className="mx-auto mt-2 max-w-md text-neutral-600 dark:text-neutral-400">
              Get a free, no-obligation quote. We serve Westminster, Kensington & Chelsea,
              Lambeth, Southwark, Wandsworth, and City of London.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
