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
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630 }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: imageUrl ? [imageUrl] : undefined,
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
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image ? `${siteConfig.url}${post.image}` : undefined,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article>
        {post.image && (
          <div className="relative h-64 bg-neutral-200 sm:h-80">
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
            className="text-sm font-medium text-red-600 hover:underline"
          >
            ← Back to Blog
          </Link>
          <time
            dateTime={post.date}
            className="mt-4 block text-sm text-neutral-500"
          >
            {new Date(post.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-2 text-neutral-600">By {post.author}</p>
          <div className="mt-8">
            <SanitizedHtml html={post.content} />
          </div>
        </div>
      </article>
    </>
  );
}
