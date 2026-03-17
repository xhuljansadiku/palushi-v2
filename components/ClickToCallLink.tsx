"use client";

import { siteConfig } from "@/lib/site-config";
import { trackCallClick } from "@/lib/tracking";

interface ClickToCallLinkProps {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

export function ClickToCallLink({
  children,
  className,
  ariaLabel = `Call us: ${siteConfig.phone}`,
}: ClickToCallLinkProps) {
  return (
    <a
      href={`tel:${siteConfig.phoneRaw}`}
      onClick={trackCallClick}
      aria-label={ariaLabel}
      className={className}
    >
      {children}
    </a>
  );
}
