import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getPostBySlug, getAllPostSlugs, getRelatedPosts } from "@/content/blog";
import { services } from "@/content/services";
import { areas } from "@/content/areas";
import { siteConfig } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SanitizedHtml } from "@/components/SanitizedHtml";
import type { Metadata } from "next";
import { Sentences } from "@/components/Sentences";

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const imageUrl = post.image
    ? `${siteConfig.url}${post.image.startsWith("/") ? "" : "/"}${post.image}`
    : undefined;

  return {
    title: post.title,
    description: post.metaDescription || post.excerpt,
    keywords: post.keywords?.join(", "),
    openGraph: {
      title: post.title,
      description: post.metaDescription || post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630 }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription || post.excerpt,
      images: imageUrl ? [imageUrl] : undefined,
    },
    alternates: {
      canonical: `${siteConfig.url}/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const plainText = post.content.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const readTime = Math.max(1, Math.round(plainText.split(" ").filter(Boolean).length / 200));
  const postServices = services.filter((s) => post.services.includes(s.slug));
  const relatedPosts = getRelatedPosts(post);
  const chip =
    "inline-flex min-h-11 items-center rounded-full border border-neutral-300 px-4 text-sm font-medium text-neutral-700 transition hover:border-red-600 hover:text-red-600 dark:border-neutral-600 dark:text-neutral-200 dark:hover:border-red-500 dark:hover:text-red-400";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    image: post.image ? `${siteConfig.url}${post.image}` : undefined,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/palushi-logo/logo-mark-512.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="bg-[var(--background)] dark:bg-neutral-950">
        {post.image && (
          <div className="relative isolate h-[32vh] min-h-[240px] w-full overflow-hidden bg-neutral-950 sm:h-[46vh] sm:min-h-[360px]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/35 to-black/70" />
          </div>
        )}

        <div className="mx-auto max-w-5xl px-3 pb-14 sm:px-6 sm:pb-16 lg:px-8">
          <div
            className={`relative overflow-hidden rounded-[24px] border border-neutral-200/80 bg-white shadow-[0_30px_90px_-45px_rgba(0,0,0,0.45)] sm:rounded-[28px] dark:border-neutral-800 dark:bg-neutral-950 ${
              post.image ? "-mt-10 sm:-mt-16" : "mt-8 sm:mt-10"
            }`}
          >
            <div className="border-b border-neutral-200/80 px-5 py-6 sm:px-10 sm:py-10 dark:border-neutral-800">
              <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />

              <Link
                href="/blog"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-red-600 transition hover:text-red-700 dark:text-red-500 dark:hover:text-red-400"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>

              <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.95rem] text-neutral-500 dark:text-neutral-400 sm:mt-6 sm:text-sm">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <span className="hidden h-1 w-1 rounded-full bg-neutral-300 min-[400px]:inline-block dark:bg-neutral-600" />
                <span>{readTime} min read</span>
                <span className="hidden h-1 w-1 rounded-full bg-neutral-300 min-[400px]:inline-block dark:bg-neutral-600" />
                <span>By {post.author}</span>
              </div>

              <h1 className="mt-4 max-w-4xl text-[clamp(2rem,7vw,3.4rem)] font-bold tracking-tight text-neutral-900 [text-wrap:balance] dark:text-neutral-100">
                {post.title}
              </h1>
              <p className="mt-4 max-w-3xl text-[1.02rem] leading-7 text-neutral-600 [text-wrap:pretty] sm:mt-5 sm:text-lg sm:leading-8 dark:text-neutral-300">
                {post.excerpt}
              </p>
            </div>

            <div className="px-5 py-7 sm:px-10 sm:py-10">
              <SanitizedHtml html={post.content} />
            </div>
          </div>

          <nav aria-label="Related content" className="mt-10 space-y-8 px-2 sm:mt-12">
            <div>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Related services</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {postServices.map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className={chip}>
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Areas we cover</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {areas.map((a) => (
                  <Link key={a.slug} href={`/areas/${a.slug}`} className={chip}>
                    {a.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">More guides</h2>
              <ul className="mt-3 space-y-2">
                {relatedPosts.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}`} className="font-medium text-red-600 hover:underline dark:text-red-400">
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="mt-10 rounded-[24px] border border-neutral-200 bg-neutral-50 p-5 shadow-[0_24px_60px_-46px_rgba(0,0,0,0.4)] sm:mt-12 sm:rounded-[28px] sm:p-8 dark:border-neutral-800 dark:bg-neutral-900/60">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              Ready to start your project?
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-neutral-600 dark:text-neutral-400">
              <Sentences text="Get a free quote. We serve Westminster, Kensington & Chelsea, Lambeth, Southwark, Wandsworth, and City of London." />
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block w-full rounded-md bg-red-600 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-red-700 sm:w-auto"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
