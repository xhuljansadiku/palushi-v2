"use client";

import { siteConfig } from "@/lib/site-config";
import { trackCallClick } from "@/lib/tracking";

interface ClickToCallLinkProps {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  /** Where the button sits, sent to analytics with the click */
  location?: string;
}

export function ClickToCallLink({
  children,
  className,
  ariaLabel,
  location,
}: ClickToCallLinkProps) {
  return (
    <a
      href={`tel:${siteConfig.phoneRaw}`}
      onClick={() => trackCallClick(location)}
      aria-label={ariaLabel}
      className={className}
    >
      {children}
    </a>
  );
}
