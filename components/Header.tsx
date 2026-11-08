"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { services } from "@/content/services";
import { siteConfig } from "@/lib/site-config";
import { ThemeToggle } from "./ThemeToggle";
import { BrandLogo } from "./BrandLogo";
import { ClickToCallLink } from "./ClickToCallLink";

const SearchModal = dynamic(
  () => import("@/components/SearchModal").then((m) => ({ default: m.SearchModal })),
  { ssr: false }
);

const linksAfterServices = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

function PhoneIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const linkBase =
  "flex h-full items-center whitespace-nowrap border-b-[3px] px-0.5 pt-[3px] text-[15px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-red-600";
const linkOn = "border-red-600 text-neutral-900";
const linkOff = "border-transparent text-neutral-600 hover:border-neutral-300 hover:text-neutral-900";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : Boolean(pathname?.startsWith(href)));
  const servicesActive = isActive("/services");

  // Escape closes menus; clicking outside closes the dropdown
  useEffect(() => {
    if (!mobileOpen && !servicesOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setServicesOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setServicesOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [mobileOpen, servicesOpen]);

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const closeServicesSoon = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };
  const closeAll = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* Services strip */}
      <div className="border-b-2 border-red-600 bg-neutral-900 dark:bg-black">
        <nav
          className="mx-auto flex max-w-7xl items-center overflow-x-auto px-2 sm:justify-center-safe sm:px-4 lg:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Our services"
        >
          {services.map((svc) => {
            const active = pathname === `/services/${svc.slug}`;
            return (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                aria-current={active ? "page" : undefined}
                className={`shrink-0 px-3 py-2 text-[11px] font-semibold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-red-500 sm:px-4 sm:text-xs ${
                  active ? "bg-red-600 text-white" : "text-neutral-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {svc.title}
              </Link>
            );
          })}
        </nav>
      </div>

      <header className="w-full border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 px-4 py-3 lg:justify-between sm:px-6 lg:h-20 lg:py-0 lg:px-8">
          <Link href="/" onClick={closeAll} className="shrink-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600">
            <span className="sr-only">{siteConfig.name} – home</span>
            <BrandLogo tone="light" size="md" />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden h-full items-stretch gap-4 lg:flex 2xl:gap-7" aria-label="Main navigation">
            <Link
              href="/"
              aria-current={isActive("/") ? "page" : undefined}
              className={`${linkBase} ${isActive("/") ? linkOn : linkOff}`}
            >
              Home
            </Link>

            <div ref={servicesRef} className="relative flex" onMouseEnter={openServices} onMouseLeave={closeServicesSoon}>
              <button
                type="button"
                onClick={() => setServicesOpen((v) => !v)}
                aria-expanded={servicesOpen}
                aria-controls="services-menu"
                className={`${linkBase} gap-1 ${servicesActive || servicesOpen ? linkOn : linkOff}`}
              >
                Services
                <Chevron open={servicesOpen} />
              </button>
              <div id="services-menu" hidden={!servicesOpen} className="absolute left-1/2 top-full z-20 w-72 -translate-x-1/2 pt-1">
                <ul className="rounded-xl border border-neutral-200 bg-white p-2 shadow-xl" role="list">
                  {services.map((s) => {
                    const href = `/services/${s.slug}`;
                    return (
                      <li key={s.slug}>
                        <Link
                          href={href}
                          onClick={closeAll}
                          aria-current={pathname === href ? "page" : undefined}
                          className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 ${
                            pathname === href ? "bg-red-50 text-red-600" : "text-neutral-700 hover:bg-red-50 hover:text-red-600"
                          }`}
                        >
                          {s.title}
                        </Link>
                      </li>
                    );
                  })}
                  <li className="mt-1 border-t border-neutral-100 pt-1">
                    <Link href="/services" onClick={closeAll} className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50">
                      All services →
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {linksAfterServices.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`${linkBase} ${isActive(link.href) ? linkOn : linkOff}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-1.5 sm:gap-2 lg:flex">
            <div className="hidden items-center xl:flex">
              <ThemeToggle />
            </div>
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="hidden h-11 w-11 items-center justify-center rounded-full text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 lg:flex"
              aria-label="Search"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <ClickToCallLink className="group ml-1 mr-2 hidden items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 xl:flex">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
                <PhoneIcon className="h-5 w-5" />
              </span>
              <span className="leading-tight">
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-500">Call us 24/7</span>
                <span className="block whitespace-nowrap text-base font-extrabold text-neutral-900 group-hover:text-red-600">{siteConfig.phone}</span>
              </span>
            </ClickToCallLink>
            <Link
              href="/quote"
              className="hidden h-12 items-center whitespace-nowrap rounded-md bg-red-600 px-6 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 lg:inline-flex"
            >
              Free Quote
            </Link>

            {/* Mobile: call is always one tap away */}
            <ClickToCallLink
              ariaLabel={`Call ${siteConfig.phone}`}
              className="hidden"
            >
              <PhoneIcon className="h-5 w-5" />
            </ClickToCallLink>
            <button
              type="button"
              className="hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div id="mobile-menu" hidden={!mobileOpen} className="max-h-[80vh] overflow-y-auto border-t border-neutral-100 bg-white lg:hidden">
          <nav className="px-4 pb-5 pt-2" aria-label="Mobile navigation">
            <Link
              href="/"
              onClick={closeAll}
              aria-current={isActive("/") ? "page" : undefined}
              className={`block border-b border-neutral-100 py-3.5 text-base font-medium ${isActive("/") ? "text-red-600" : "text-neutral-800"}`}
            >
              Home
            </Link>
            <div className="border-b border-neutral-100 py-3">
              <Link href="/services" onClick={closeAll} className={`text-base font-medium ${servicesActive ? "text-red-600" : "text-neutral-800"}`}>
                Services
              </Link>
              <ul className="mt-3 grid grid-cols-2 gap-2" role="list">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      onClick={closeAll}
                      className="flex min-h-12 items-center rounded-lg bg-neutral-50 px-3 py-2 text-sm font-medium text-neutral-800 active:bg-red-50 active:text-red-600"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {linksAfterServices.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeAll}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`block border-b border-neutral-100 py-3.5 text-base font-medium ${isActive(link.href) ? "text-red-600" : "text-neutral-800"}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center justify-between border-b border-neutral-100 py-2">
              <button
                type="button"
                onClick={() => {
                  setSearchOpen(true);
                  setMobileOpen(false);
                }}
                className="flex min-h-11 items-center gap-2 text-base font-medium text-neutral-800"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search
              </button>
              <ThemeToggle />
            </div>
            <div className="mt-4 grid gap-2">
              <Link
                href="/quote"
                onClick={closeAll}
                className="flex min-h-12 items-center justify-center rounded-full bg-red-600 text-base font-semibold text-white active:bg-red-700"
              >
                Get a Free Quote
              </Link>
              <ClickToCallLink className="flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-red-600 text-base font-semibold text-red-600">
                <PhoneIcon className="h-5 w-5" />
                Call {siteConfig.phone}
              </ClickToCallLink>
            </div>
          </nav>
        </div>
        <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      </header>
    </div>
  );
}
