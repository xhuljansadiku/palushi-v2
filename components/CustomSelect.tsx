"use client";

import { useState } from "react";

interface CustomSelectProps {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  options: { value: string; label: string }[];
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  className?: string;
}

/**
 * Styled native <select>. Native keeps it fully keyboard / screen-reader
 * accessible and opens the phone's own picker on mobile.
 */
export function CustomSelect({
  id,
  name,
  label,
  placeholder,
  options,
  required = false,
  value = "",
  onChange,
  error,
  className = "",
}: CustomSelectProps) {
  const [selected, setSelected] = useState(value);

  // Keep in sync when the parent changes `value` (adjust state during render, no effect needed)
  const [prevValue, setPrevValue] = useState(value);
  if (value !== prevValue) {
    setPrevValue(value);
    setSelected(value);
  }

  const errorId = `${id}-error`;

  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
        {label}
      </label>
      <div className="relative mt-2">
        <select
          id={id}
          name={name}
          value={selected}
          required={required}
          aria-required={required || undefined}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          onChange={(e) => {
            setSelected(e.target.value);
            onChange?.(e.target.value);
          }}
          className={`block w-full appearance-none rounded-md border bg-white px-4 py-3 pr-11 text-base shadow-sm transition focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 dark:bg-neutral-900 dark:focus:border-red-500 dark:focus:ring-red-500 ${
            error ? "border-red-500" : "border-neutral-300 dark:border-neutral-600"
          } ${selected ? "text-neutral-900 dark:text-neutral-100" : "text-neutral-500"}`}
        >
          <option value="">{placeholder}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="text-neutral-900">
              {opt.label}
            </option>
          ))}
        </select>
        <svg
          className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {error && (
        <p id={errorId} role="alert" className="mt-1 text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
