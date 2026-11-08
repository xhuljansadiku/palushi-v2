"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { ClickToCallLink } from "./ClickToCallLink";
import { trackWhatsAppClick } from "@/lib/tracking";
import { ThemeToggle } from "./ThemeToggle";
import dynamic from "next/dynamic";

const SearchModal = dynamic(() => import("./SearchModal").then((m) => ({ default: m.SearchModal })), { ssr: false });

const P = {
  home: "M3 11l9-8 9 8M5 9.5V21h5v-6h4v6h5V9.5",
  grid: "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z",
  image: "M4 5h16v14H4zM4 15l5-5 4 4 3-3 4 4",
  more: "M5 12h.01M12 12h.01M19 12h.01",
  phone:
    "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
  close: "M6 18L18 6M6 6l12 12",
  search: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
};

function Icon({ d, className = "h-6 w-6", sw = 1.8 }: { d: string; className?: string; sw?: number }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden>
      <path d={d} />
    </svg>
  );
}

const MORE_LINKS = [
  { href: "/about", label: "About us" },
  { href: "/areas", label: "Areas we cover" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

/** Mobile bottom tab bar: Home · Services · [Call] · Projects · More */
export function MobileCtaBar() {
  const pathname = usePathname();
  const [moreOpen, setMoreOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const active = (href: string) => (href === "/" ? pathname === "/" : Boolean(pathname?.startsWith(href)));
  const moreActive = MORE_LINKS.some((l) => active(l.href));

  // Close the sheet when navigating or pressing Escape
  const [prevPath, setPrevPath] = useState(pathname);
  if (pathname !== prevPath) {
    setPrevPath(pathname);
    setMoreOpen(false);
  }
  useEffect(() => {
    if (!moreOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMoreOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [moreOpen]);

  const tab = (on: boolean) =>
    `flex flex-1 flex-col items-center justify-center gap-0.5 pt-1.5 text-[11px] font-semibold ${on ? "text-red-600" : "text-neutral-500 dark:text-neutral-400"}`;

  return (
    <div className="lg:hidden">
      {/* "More" sheet */}
      {moreOpen && (
        <div className="fixed inset-0 z-40 bg-black/40" onClick={() => setMoreOpen(false)} aria-hidden />
      )}
      <div
        id="more-sheet"
        hidden={!moreOpen}
        className="fixed inset-x-0 bottom-[calc(4.25rem+env(safe-area-inset-bottom))] z-40 mx-2 rounded-2xl bg-white p-4 shadow-2xl dark:bg-neutral-900"
      >
        <button
          type="button"
          onClick={() => {
            setMoreOpen(false);
            setSearchOpen(true);
          }}
          className="mb-1 flex min-h-12 w-full items-center gap-3 rounded-lg bg-neutral-100 px-4 text-left text-base text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400"
        >
          <Icon d={P.search} className="h-5 w-5" sw={2} />
          Search services, projects…
        </button>
        <nav aria-label="More pages">
          <ul className="divide-y divide-neutral-100 dark:divide-neutral-800">
            {MORE_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={active(l.href) ? "page" : undefined}
                  className={`flex min-h-12 items-center text-base font-medium ${active(l.href) ? "text-red-600" : "text-neutral-800 dark:text-neutral-100"}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <Link href="/quote" className="flex min-h-12 items-center justify-center rounded-lg bg-red-600 text-sm font-bold text-white active:bg-red-700">
            Get a Free Quote
          </Link>
          <Link
            href={siteConfig.social.whatsapp}
            onClick={() => trackWhatsAppClick("mobile_bar")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-12 items-center justify-center rounded-lg border-2 border-green-600 text-sm font-bold text-green-600 dark:border-green-500 dark:text-green-400"
          >
            WhatsApp
          </Link>
        </div>
        <div className="mt-3 flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400">
          <span>Theme</span>
          <ThemeToggle />
        </div>
      </div>

      {/* Tab bar */}
      <nav
        aria-label="Quick navigation"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-neutral-200 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/95"
      >
        <div className="mx-auto flex h-[4.25rem] max-w-md items-stretch">
          <Link href="/" className={tab(active("/"))} aria-current={active("/") ? "page" : undefined}>
            <Icon d={P.home} />
            Home
          </Link>
          <Link href="/services" className={tab(active("/services"))} aria-current={active("/services") ? "page" : undefined}>
            <Icon d={P.grid} />
            Services
          </Link>
          <div className="flex flex-1 justify-center">
            <ClickToCallLink
              location="tab_bar"
              ariaLabel={`Call ${siteConfig.phone}`}
              className="-mt-5 flex h-16 w-16 flex-col items-center justify-center rounded-full border-4 border-white bg-red-600 text-white shadow-lg active:bg-red-700 dark:border-neutral-900"
            >
              <Icon d={P.phone} className="h-6 w-6" sw={2} />
              <span className="text-[10px] font-bold">Call</span>
            </ClickToCallLink>
          </div>
          <Link href="/projects" className={tab(active("/projects"))} aria-current={active("/projects") ? "page" : undefined}>
            <Icon d={P.image} />
            Projects
          </Link>
          <button
            type="button"
            onClick={() => setMoreOpen((v) => !v)}
            aria-expanded={moreOpen}
            aria-controls="more-sheet"
            className={tab(moreOpen || moreActive)}
          >
            <Icon d={moreOpen ? P.close : P.more} sw={moreOpen ? 1.8 : 3} />
            {moreOpen ? "Close" : "More"}
          </button>
        </div>
      </nav>
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
