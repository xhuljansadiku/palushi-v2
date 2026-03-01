import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getPostBySlug, getAllPostSlugs } from "@/content/blog";
import { siteConfig } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SanitizedHtml } from "@/components/SanitizedHtml";
import type { Metadata } from "next";

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
        url: `${siteConfig.url}/images/logo/logo-2026.png`,
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
      <article className="dark:bg-neutral-950">
        {post.image && (
          <div className="relative h-64 w-full overflow-hidden bg-neutral-200 sm:h-80">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        )}
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />
          <Link
            href="/blog"
            className="text-sm font-medium text-red-600 hover:underline dark:text-red-500"
          >
            ← Back to Blog
          </Link>
          <time
            dateTime={post.date}
            className="mt-4 block text-sm text-neutral-500 dark:text-neutral-400"
          >
            {new Date(post.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-neutral-100">
            {post.title}
          </h1>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">By {post.author}</p>
          <div className="mt-8">
            <SanitizedHtml html={post.content} />
          </div>
          <div className="mt-12 rounded-xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900/50">
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">Ready to start your project?</h3>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              Get a free quote. We serve Westminster, Kensington & Chelsea, Lambeth, Southwark, Wandsworth, and City of London.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block rounded-md bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
