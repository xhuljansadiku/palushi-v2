export const COOKIE_CONSENT_KEY = "palushi-cookie-consent";

export type ConsentStatus = "accepted" | "rejected" | null;

export function getConsent(): ConsentStatus {
  if (typeof window === "undefined") return null;
  const v = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (v === "accepted" || v === "rejected") return v;
  return null;
}

export function dispatchConsentUpdate(): void {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("cookie-consent-updated"));
  }
}
