"use client";

/** Re-opens the cookie consent panel so visitors can change or withdraw consent at any time. */
export function CookieSettingsLink({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
      className={className}
    >
      Cookie settings
    </button>
  );
}
