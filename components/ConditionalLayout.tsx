"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { ExitIntentPopup } from "./ExitIntentPopup";
import { CookieConsent } from "./CookieConsent";
import { MobileCtaBar } from "./MobileCtaBar";
import { LpHeader } from "./LpHeader";
import { LpStickyCta } from "./LpStickyCta";

export function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLp = pathname?.startsWith("/lp");

  if (isLp) {
    return (
      <>
        <LpHeader />
        <main id="main" className="min-h-screen pb-28 text-center lg:pb-12 lg:text-left">
          {children}
        </main>
        <LpStickyCta />
        <CookieConsent />
      </>
    );
  }

  return (
    <>
      <Header />
      <main id="main" className="min-h-screen pb-20 lg:pb-0">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
      <FloatingWhatsApp />
      <ExitIntentPopup />
      <CookieConsent />
      <MobileCtaBar />
    </>
  );
}
