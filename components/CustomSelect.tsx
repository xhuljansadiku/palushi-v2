"use client";

import { useState, useRef, useEffect } from "react";

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
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(value);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelected(value);
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (val: string) => {
    setSelected(val);
    onChange?.(val);
    setIsOpen(false);
  };

  const displayValue = selected ? options.find((o) => o.value === selected)?.label ?? selected : placeholder;

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
      >
        {label}
      </label>
      <input type="hidden" name={name} value={selected} readOnly />
      <button
        type="button"
        id={id}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-required={required}
        className={`mt-2 flex w-full items-center justify-between rounded-md border px-4 py-3 text-left shadow-sm transition focus:border-red-600 focus:ring-2 focus:ring-red-600 focus:ring-offset-0 dark:focus:border-red-500 dark:focus:ring-red-500 ${
          error
            ? "border-red-500"
            : "border-neutral-300 dark:border-neutral-600"
        } bg-white dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder-neutral-500`}
      >
        <span className={selected ? "" : "text-neutral-500 dark:text-neutral-500"}>
          {displayValue}
        </span>
        <svg
          className={`h-5 w-5 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {error && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>}
      {isOpen && (
        <ul
          role="listbox"
          className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border border-neutral-200 bg-white py-1 shadow-lg dark:border-neutral-600 dark:bg-neutral-900"
        >
          <li
            role="option"
            aria-selected={!selected}
            onClick={() => handleSelect("")}
            className={`cursor-pointer px-4 py-2.5 text-sm transition ${
              !selected
                ? "bg-red-600 text-white dark:bg-red-600"
                : "text-neutral-700 hover:bg-red-50 hover:text-red-600 dark:text-neutral-300 dark:hover:bg-red-950/50 dark:hover:text-red-400"
            }`}
          >
            {placeholder}
          </li>
          {options.map((opt) => (
            <li
              key={opt.value}
              role="option"
              aria-selected={selected === opt.value}
              onClick={() => handleSelect(opt.value)}
              className={`cursor-pointer px-4 py-2.5 text-sm transition ${
                selected === opt.value
                  ? "bg-red-600 text-white dark:bg-red-600"
                  : "text-neutral-700 hover:bg-red-50 hover:text-red-600 dark:text-neutral-300 dark:hover:bg-red-950/50 dark:hover:text-red-400"
              }`}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
