import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ConditionalLayout } from "@/components/ConditionalLayout";
import { LocalBusinessSchema } from "@/components/JsonLd";
import { TrackingScripts } from "@/components/TrackingScripts";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Builders in London | Loft Conversions, Extensions & Renovations | Palushi Brothers",
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
    images: [{ url: `${siteConfig.url}/images/projects/townhouse-renovation/kitchen-marble-island.jpeg`, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/projects/townhouse-renovation/kitchen-marble-island.jpeg`],
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
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                window.dataLayer = window.dataLayer || [];
                window.gtag = function(){dataLayer.push(arguments);};
                var gtag = window.gtag;
                gtag("consent", "default", {
                  analytics_storage: "denied",
                  ad_storage: "denied",
                  ad_user_data: "denied",
                  ad_personalization: "denied",
                  functionality_storage: "granted",
                  personalization_storage: "denied",
                  security_storage: "granted",
                  wait_for_update: 500
                });
                var theme = localStorage.getItem('palushi-theme');
                var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                var isDark = theme === 'dark' || (theme === 'system' && systemDark) || (!theme && systemDark);
                document.documentElement.classList.add(isDark ? 'dark' : 'light');
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${manrope.variable} font-sans antialiased bg-[var(--background)] text-[var(--foreground)]`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-red-600 focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
        >
          Skip to main content
        </a>
        <ThemeProvider>
          <LocalBusinessSchema />
          <TrackingScripts />
          <ConditionalLayout>{children}</ConditionalLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
