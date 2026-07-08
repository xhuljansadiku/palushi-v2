import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="text-6xl font-bold text-neutral-900 sm:text-8xl">404</h1>
      <p className="mt-4 text-xl text-neutral-600">
        Page not found
      </p>
      <p className="mt-2 text-neutral-500">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="rounded-md bg-red-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-red-700"
        >
          Back to Home
        </Link>
        <Link
          href="/contact"
          className="rounded-md border-2 border-neutral-300 px-6 py-3 text-base font-semibold text-neutral-800 transition hover:border-red-600 hover:text-red-600"
        >
          Contact Us
        </Link>
        <Link
          href="/quote"
          className="rounded-md border-2 border-neutral-300 px-6 py-3 text-base font-semibold text-neutral-800 transition hover:border-red-600 hover:text-red-600"
        >
          Get a Free Quote
        </Link>
      </div>
      <p className="mt-8 text-sm text-neutral-500">
        {siteConfig.name} • {siteConfig.phone}
      </p>
    </div>
  );
}
