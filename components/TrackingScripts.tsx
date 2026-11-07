"use client";

import Script from "next/script";
import { useSyncExternalStore } from "react";
import { getCookiePreferences } from "@/lib/consent";
import { siteConfig } from "@/lib/site-config";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-HB6455XZT1";
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID || "wg3zf0rzu0";

function subscribe(cb: () => void) {
  window.addEventListener("cookie-consent-updated", cb);
  return () => window.removeEventListener("cookie-consent-updated", cb);
}

/** Snapshot as a short string so React can compare it cheaply. "a" = analytics, "m" = marketing */
function getSnapshot() {
  const p = getCookiePreferences();
  if (!p.decisionMade) return "";
  return `${p.analytics ? "a" : ""}${p.marketing ? "m" : ""}`;
}

export function TrackingScripts() {
  const consent = useSyncExternalStore(subscribe, getSnapshot, () => "");
  const analyticsEnabled = consent.includes("a");
  const marketingEnabled = consent.includes("m");

  // A single gtag.js load serves both GA4 and Google Ads. `window.gtag` and the
  // default consent state are defined inline in app/layout.tsx.
  const gtagLoaderId = analyticsEnabled ? GA_ID : marketingEnabled ? siteConfig.googleAds.id : null;

  return (
    <>
      {gtagLoaderId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gtagLoaderId}`} strategy="afterInteractive" />
          <Script id="gtag-config" strategy="afterInteractive">
            {`
              gtag("consent", "update", {
                analytics_storage: "${analyticsEnabled ? "granted" : "denied"}",
                ad_storage: "${marketingEnabled ? "granted" : "denied"}",
                ad_user_data: "${marketingEnabled ? "granted" : "denied"}",
                ad_personalization: "${marketingEnabled ? "granted" : "denied"}"
              });
              gtag("js", new Date());
              ${analyticsEnabled ? `gtag("config", "${GA_ID}");` : ""}
              ${marketingEnabled ? `gtag("config", "${siteConfig.googleAds.id}");` : ""}
            `}
          </Script>
        </>
      )}
      {analyticsEnabled && GTM_ID && (
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      )}
      {marketingEnabled && META_PIXEL_ID && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];
            t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
      {analyticsEnabled && CLARITY_ID && (
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_ID}");
          `}
        </Script>
      )}
    </>
  );
}
