import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { ClickToCallLink } from "./ClickToCallLink";

export function LpHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo/logo-2026.png"
            alt={siteConfig.name}
            width={200}
            height={64}
            className="h-12 w-auto object-contain sm:h-14 dark:[filter:brightness(0)_invert(1)]"
            priority
          />
        </Link>
        <ClickToCallLink
          className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-lg font-bold text-white shadow-lg transition hover:bg-red-700 active:scale-[0.98]"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          {siteConfig.phone}
        </ClickToCallLink>
      </div>
    </header>
  );
}
