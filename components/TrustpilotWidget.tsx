"use client";

import Script from "next/script";
import { siteConfig } from "@/lib/site-config";

export function TrustpilotWidget() {
  return (
    <>
      <Script
        src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        strategy="lazyOnload"
      />
      <div
        className="trustpilot-widget"
        data-locale="en-GB"
        data-template-id={siteConfig.trustpilot.templateId}
        data-businessunit-id={siteConfig.trustpilot.businessUnitId}
        data-style-height="52px"
        data-style-width="100%"
      >
        <a
          href={siteConfig.trustpilot.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-neutral-500 hover:text-red-600"
        >
          Trustpilot
        </a>
      </div>
    </>
  );
}
