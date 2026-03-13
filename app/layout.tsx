import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { CookieConsent } from "@/components/CookieConsent";
import { LocalBusinessSchema } from "@/components/JsonLd";
import { TrackingScripts } from "@/components/TrackingScripts";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "construction",
    "renovation",
    "loft conversion",
    "house extension",
    "roofing",
    "kitchen refurbishment",
    "bathroom refurbishment",
    "London",
    "UK",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [{ url: `${siteConfig.url}/images/logo/logo-2026.png`, width: 512, height: 160, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: siteConfig.googleVerification,
  },
  icons: {
    icon: "/images/logo/logo-2026.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17889100194" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17889100194');
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('palushi-theme');
                var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                var isDark = theme === 'dark' || (theme === 'system' && systemDark) || (!theme && systemDark);
                document.documentElement.classList.add(isDark ? 'dark' : 'light');
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-[var(--background)] text-[var(--foreground)]`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-red-600 focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
        >
          Skip to main content
        </a>
        <ThemeProvider>
          <LocalBusinessSchema />
          <TrackingScripts />
          <Header />
          <main id="main" className="min-h-screen text-center lg:text-left">{children}</main>
        <Footer />
        <ScrollToTop />
        <FloatingWhatsApp />
        <ExitIntentPopup />
        <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
