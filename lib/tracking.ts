import { canTrackAnalytics, canTrackMarketing } from "@/lib/consent";
import { siteConfig } from "@/lib/site-config";

/**
 * Tracking utilities for GA4, GTM, and conversion events.
 * Add your GA4/GTM IDs to environment variables when ready.
 *
 * Usage:
 * - GA4: NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
 * - GTM: NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
 *
 * Events to track:
 * - form_submit: Contact form submission
 * - click_to_call: Phone link/button click
 * - whatsapp_click: WhatsApp link click (if added)
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  eventName: string,
  params?: Record<string, unknown>
) {
  if (typeof window === "undefined" || !canTrackAnalytics()) return;
  if (window.gtag) {
    window.gtag("event", eventName, params);
  }
  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...params,
    });
  }
}

/** Fire Google Ads conversion when user clicks tel: link */
export function trackCallClick() {
  if (
    typeof window !== "undefined" &&
    canTrackMarketing() &&
    window.gtag
  ) {
    const callId = siteConfig.googleAds?.callConversionId;
    if (callId && !callId.includes("CALL_LABEL")) {
      window.gtag("event", "conversion", { send_to: callId });
    }
  }
  trackEvent(TRACKING_EVENTS.CLICK_TO_CALL);
}

/** Fire Meta Pixel Lead conversion for form submissions */
export const LEAD_PENDING_KEY = "palushi-lead-pending";

export function trackLeadConversion(formName?: string) {
  // Lets /thank-you fire the Ads conversion exactly once, only after a real submit
  if (typeof window !== "undefined") sessionStorage.setItem(LEAD_PENDING_KEY, "1");
  if (typeof window !== "undefined" && canTrackMarketing() && window.fbq) {
    window.fbq("track", "Lead", { content_name: formName });
  }
  trackEvent(TRACKING_EVENTS.FORM_SUBMIT, { form: formName ?? "contact" });
  // GA4 recommended event, can be marked as a key event in GA4
  trackEvent("generate_lead", { form: formName ?? "contact" });
}

export function trackWhatsAppClick(location: string) {
  trackEvent(TRACKING_EVENTS.WHATSAPP_CLICK, { location });
}

export const TRACKING_EVENTS = {
  FORM_SUBMIT: "form_submit",
  CLICK_TO_CALL: "click_to_call",
  WHATSAPP_CLICK: "whatsapp_click",
  NEWSLETTER_SIGNUP: "newsletter_signup",
} as const;
