export const COOKIE_CONSENT_KEY = "palushi-cookie-consent";

export type ConsentStatus = "accepted" | "rejected" | null;

export type CookiePreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  decisionMade: boolean;
  updatedAt: string | null;
};

const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  decisionMade: false,
  updatedAt: null,
};

function getTimestamp(): string {
  return new Date().toISOString();
}

function normalizePreferences(value: unknown): CookiePreferences | null {
  if (!value || typeof value !== "object") return null;
  const candidate = value as Partial<CookiePreferences>;

  return {
    necessary: true,
    analytics: Boolean(candidate.analytics),
    marketing: Boolean(candidate.marketing),
    decisionMade: Boolean(candidate.decisionMade),
    updatedAt: typeof candidate.updatedAt === "string" ? candidate.updatedAt : null,
  };
}

export function getCookiePreferences(): CookiePreferences {
  if (typeof window === "undefined") return DEFAULT_PREFERENCES;

  const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (!stored) return DEFAULT_PREFERENCES;

  // Backward compatibility with previous "accepted"/"rejected" format.
  if (stored === "accepted") {
    return {
      necessary: true,
      analytics: true,
      marketing: true,
      decisionMade: true,
      updatedAt: getTimestamp(),
    };
  }

  if (stored === "rejected") {
    return {
      necessary: true,
      analytics: false,
      marketing: false,
      decisionMade: true,
      updatedAt: getTimestamp(),
    };
  }

  try {
    const parsed = JSON.parse(stored);
    const normalized = normalizePreferences(parsed);
    return normalized ?? DEFAULT_PREFERENCES;
  } catch {
    return DEFAULT_PREFERENCES;
  }
}

export function setCookiePreferences(
  partial: Pick<CookiePreferences, "analytics" | "marketing" | "decisionMade">
): void {
  if (typeof window === "undefined") return;

  const nextPreferences: CookiePreferences = {
    necessary: true,
    analytics: partial.analytics,
    marketing: partial.marketing,
    decisionMade: partial.decisionMade,
    updatedAt: getTimestamp(),
  };

  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(nextPreferences));
  dispatchConsentUpdate();
}

export function acceptAllCookies(): void {
  setCookiePreferences({ analytics: true, marketing: true, decisionMade: true });
}

export function rejectOptionalCookies(): void {
  setCookiePreferences({ analytics: false, marketing: false, decisionMade: true });
}

export function hasConsentDecision(): boolean {
  return getCookiePreferences().decisionMade;
}

export function getConsent(): ConsentStatus {
  const preferences = getCookiePreferences();
  if (!preferences.decisionMade) return null;
  return preferences.analytics || preferences.marketing ? "accepted" : "rejected";
}

export function dispatchConsentUpdate(): void {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("cookie-consent-updated"));
  }
}
