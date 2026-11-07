"use client";

import Link from "next/link";

type FormConsentCheckboxProps = {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  error?: string;
};

export function FormConsentCheckbox({ id, checked, onChange, error }: FormConsentCheckboxProps) {
  return (
    <div className="rounded-md border border-neutral-200 bg-neutral-50/80 p-4 dark:border-neutral-600 dark:bg-neutral-800/50">
      <label htmlFor={id} className="flex cursor-pointer gap-3 text-sm leading-snug text-neutral-700 dark:text-neutral-300">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className="mt-0.5 h-5 w-5 shrink-0 rounded border-neutral-300 text-red-600 focus:ring-red-600 dark:border-neutral-500"
        />
        <span>
          I have read and agree to the{" "}
          <Link href="/terms" className="whitespace-nowrap font-medium text-red-600 underline underline-offset-2 hover:no-underline dark:text-red-400">
            Terms of Service
          </Link>{" "}
          and{" "}
          <span className="whitespace-nowrap">
            <Link
              href="/privacy-policy"
              className="font-medium text-red-600 underline underline-offset-2 hover:no-underline dark:text-red-400"
            >
              Privacy policy &amp; cookies
            </Link>
            .&nbsp;*
          </span>
        </span>
      </label>
      {error ? <p id={`${id}-error`} role="alert" className="mt-2 text-sm text-red-600 dark:text-red-400">{error}</p> : null}
    </div>
  );
}
