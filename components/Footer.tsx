import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/content/services";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/areas", label: "Areas" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy & cookies" },
  { href: "/terms", label: "Terms of Service" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-neutral-200 bg-neutral-50 text-neutral-600 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-400">
      {/* Accent line - vijë e kuqe e hollë në krye */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-red-500/80 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-12 pb-20 sm:px-6 sm:pb-12 lg:px-8 lg:py-14">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-4 text-center lg:text-left lg:gap-0">
          {/* 1. Logo + tagline */}
          <div className="sm:col-span-4 lg:col-span-1 lg:border-r lg:border-neutral-200/70 lg:pr-8 dark:lg:border-neutral-700/70">
            <Link href="/" className="inline-block mx-auto lg:mx-0">
              <Image
                src="/images/logo/logo-footer-2026.png"
                alt={siteConfig.name}
                width={560}
                height={180}
                className="h-28 w-auto max-w-full object-contain sm:h-32 lg:h-[200px]"
              />
            </Link>
            <p className="mx-auto mt-2 max-w-xs text-xs leading-relaxed text-neutral-500 lg:mx-0 dark:text-neutral-400">
              {siteConfig.tagline}
            </p>
          </div>

          {/* 2. Quick Links */}
          <div className="lg:border-r lg:border-neutral-200/70 lg:px-8 dark:lg:border-neutral-700/70">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
              Quick Links
            </h4>
            <span className="mt-1.5 block h-0.5 w-8 rounded-full bg-red-500/50 mx-auto lg:mx-0" aria-hidden />
            <ul className="mt-3 space-y-1.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs transition hover:text-red-600 hover:underline underline-offset-2 dark:hover:text-red-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Services */}
          <div className="lg:border-r lg:border-neutral-200/70 lg:px-8 dark:lg:border-neutral-700/70">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
              Services
            </h4>
            <span className="mt-1.5 block h-0.5 w-8 rounded-full bg-red-500/50 mx-auto lg:mx-0" aria-hidden />
            <ul className="mt-3 space-y-1.5">
              {services.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="text-xs transition hover:text-red-600 hover:underline underline-offset-2 dark:hover:text-red-500"
                  >
                    {svc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact */}
          <div className="lg:pl-8">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
              Contact
            </h4>
            <span className="mt-1.5 block h-0.5 w-8 rounded-full bg-red-500/50 mx-auto lg:mx-0" aria-hidden />
            <ul className="mt-3 space-y-1.5 text-xs">
              <li>
                <a
                  href={siteConfig.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-red-600 hover:underline underline-offset-2 dark:hover:text-red-500"
                >
                  {siteConfig.address.line1}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition hover:text-red-600 hover:underline underline-offset-2 dark:hover:text-red-500"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="transition hover:text-red-600 hover:underline underline-offset-2 dark:hover:text-red-500"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="pt-0.5 text-neutral-500 dark:text-neutral-400">{siteConfig.hours}</li>
            </ul>
          </div>
        </div>

        {/* Copyright bar: © | Legal | Social - mobile: stacked & centered */}
        <div className="mt-10 flex flex-col items-center gap-5 border-t border-neutral-200/80 pt-6 dark:border-neutral-700/80 sm:flex-row sm:justify-between sm:gap-6">
          <p className="text-center text-sm text-neutral-500 sm:text-left dark:text-neutral-400">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm">
              {legalLinks.map((link, i) => (
                <span key={link.href} className="inline-flex items-center gap-2">
                  {i > 0 && <span className="text-neutral-300 dark:text-neutral-600" aria-hidden>·</span>}
                  <Link
                    href={link.href}
                    className="text-neutral-500 transition hover:text-red-600 hover:underline underline-offset-2 dark:text-neutral-400 dark:hover:text-red-500"
                  >
                    {link.label}
                  </Link>
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-200/80 text-neutral-600 transition hover:bg-red-600 hover:text-white dark:bg-neutral-700/80 dark:text-neutral-400 dark:hover:bg-red-600 dark:hover:text-white"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.766 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
