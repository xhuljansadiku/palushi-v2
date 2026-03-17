"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { ThemeToggle } from "./ThemeToggle";
import { ClickToCallLink } from "./ClickToCallLink";

const SearchModal = dynamic(
  () => import("@/components/SearchModal").then((m) => ({ default: m.SearchModal })),
  { ssr: false }
);

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
];

const moreLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:border-neutral-800 dark:bg-neutral-950/95 dark:supports-[backdrop-filter]:bg-neutral-950/90 transition-colors duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0 py-2">
          <Image
            src="/images/logo/logo-2026.png"
            alt={siteConfig.name}
            width={300}
            height={96}
            className="block h-[60px] w-auto object-contain transition-[filter] duration-300 sm:h-[72px] lg:h-[80px] dark:[filter:brightness(0)_invert(1)]"
            priority
          />
        </Link>

        <nav
          className="hidden items-center gap-5 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm font-medium uppercase tracking-wide text-neutral-700 transition hover:text-red-600 dark:text-white dark:hover:text-red-400 focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:rounded-sm"
            >
              {link.label}
            </Link>
          ))}
          <div className="relative">
            <button
              type="button"
              onClick={() => setMoreOpen(!moreOpen)}
              onBlur={() => setTimeout(() => setMoreOpen(false), 150)}
              className="whitespace-nowrap text-sm font-medium uppercase tracking-wide text-neutral-700 transition hover:text-red-600 dark:text-white dark:hover:text-red-400 focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:rounded-sm"
              aria-expanded={moreOpen}
              aria-haspopup="true"
            >
              More
              <svg className={`ml-0.5 inline h-4 w-4 transition-transform ${moreOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {moreOpen && (
              <div className="absolute left-0 top-full z-10 mt-1 min-w-[120px] rounded-lg border border-neutral-200 bg-white py-1 shadow-lg dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-neutral-950/50">
                {moreLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-sm font-medium uppercase tracking-wide text-neutral-700 transition hover:bg-neutral-50 hover:text-red-600 dark:text-white dark:hover:bg-white/10 dark:hover:text-red-400"
                    onClick={() => setMoreOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            href="/contact"
              className="whitespace-nowrap text-sm font-medium uppercase tracking-wide text-neutral-700 transition hover:text-red-600 dark:text-white dark:hover:text-red-400 focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:rounded-sm"
          >
            Contact
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="hidden rounded-md p-2 text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 dark:text-white dark:hover:bg-white/10 dark:hover:text-white lg:flex"
            aria-label="Search"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <span className="hidden text-sm font-semibold text-neutral-700 dark:text-neutral-300 lg:inline">
            {siteConfig.phone}
          </span>
          <ClickToCallLink
            className="hidden rounded-md bg-red-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-red-700 focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 lg:inline-flex"
          >
            Call Now
          </ClickToCallLink>
          <Link
            href="/quote"
            className="hidden rounded-md border-2 border-red-600 px-4 py-2.5 text-sm font-bold text-red-600 transition hover:bg-red-600 hover:text-white focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 dark:border-red-500 dark:text-red-400 dark:hover:bg-red-500 dark:hover:text-white lg:inline-flex"
          >
            Get Free Quote
          </Link>

          <button
            type="button"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-600 shadow-sm active:bg-neutral-50 dark:border-white/40 dark:bg-transparent dark:text-white dark:active:bg-white/10 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu - scrollable when content overflows */}
      <div
        className={`border-t border-neutral-100 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950 lg:hidden transition-[max-height,background-color,border-color] duration-300 ease-out ${
          mobileOpen ? "max-h-[85vh] overflow-y-auto" : "max-h-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col px-4 py-5 text-center" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border-b border-neutral-200 py-3.5 text-base font-medium uppercase tracking-wide text-neutral-800 transition-colors last:border-0 active:bg-neutral-50 active:text-red-600 dark:border-neutral-700 dark:text-white dark:active:bg-white/10 dark:active:text-red-400"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="border-b border-neutral-200">
            <button
              type="button"
              onClick={() => setMoreOpen(!moreOpen)}
              className="w-full py-3.5 text-base font-medium uppercase tracking-wide text-neutral-800 transition-colors active:bg-neutral-50 active:text-red-600 dark:text-white dark:active:bg-white/10 dark:active:text-red-400"
            >
              More
              <svg className={`ml-1 inline h-4 w-4 transition-transform ${moreOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {moreOpen && (
              <div className="border-t border-neutral-100 bg-neutral-50/50 pb-2 dark:border-neutral-700 dark:bg-neutral-900/50">
                {moreLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-2.5 text-sm font-medium uppercase tracking-wide text-neutral-700 transition-colors active:text-red-600 dark:text-white/90 dark:active:text-red-400"
                    onClick={() => { setMobileOpen(false); setMoreOpen(false); }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            href="/contact"
            className="border-b border-neutral-200 py-3.5 text-base font-medium uppercase tracking-wide text-neutral-800 transition-colors last:border-0 active:bg-neutral-50 active:text-red-600"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
          <button
            type="button"
            onClick={() => { setSearchOpen(true); setMobileOpen(false); }}
            className="flex w-full items-center justify-center gap-2 border-b border-neutral-200 py-3.5 text-base font-medium uppercase tracking-wide text-neutral-800 dark:border-neutral-700 dark:text-white lg:hidden"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Search
          </button>
          <div className="mt-4 space-y-2 border-t border-neutral-100 pt-4 dark:border-neutral-800">
            <ClickToCallLink
              className="flex items-center justify-center gap-2 rounded-xl border-2 border-neutral-200 py-3.5 text-base font-semibold text-neutral-800 transition active:bg-neutral-50 dark:border-white/40 dark:text-white dark:active:bg-white/10"
            >
              <svg className="h-5 w-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {siteConfig.phone}
            </ClickToCallLink>
            <Link
              href="/quote"
              className="flex items-center justify-center rounded-xl bg-red-600 py-3.5 text-base font-semibold text-white transition active:bg-red-700"
              onClick={() => setMobileOpen(false)}
            >
              Get a Free Quote
            </Link>
          </div>
        </nav>
      </div>
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
