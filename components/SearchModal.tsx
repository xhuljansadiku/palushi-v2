"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { searchContent, type SearchResult } from "@/lib/search-data";

export function SearchModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const runSearch = useCallback(() => {
    setResults(searchContent(query));
  }, [query]);

  useEffect(() => {
    const t = setTimeout(runSearch, 200);
    return () => clearTimeout(t);
  }, [runSearch]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSelect = (href: string) => {
    router.push(href);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-label="Search"
    >
      <div
        className="mx-auto mt-20 max-w-2xl rounded-xl border border-neutral-200 bg-white p-4 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2">
          <svg
            className="h-5 w-5 text-neutral-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search blog, services, FAQ..."
            className="flex-1 border-0 py-2 text-neutral-900 placeholder-neutral-400 focus:ring-0"
            aria-label="Search"
          />
          <button
            type="button"
            onClick={onClose}
            className="rounded p-1 text-neutral-500 hover:bg-neutral-100"
            aria-label="Close"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {query.length >= 2 && (
          <div className="mt-4 max-h-80 overflow-y-auto">
            {results.length === 0 ? (
              <p className="py-8 text-center text-neutral-500">No results found</p>
            ) : (
              <ul className="space-y-1">
                {results.map((r, i) => (
                  <li key={`${r.type}-${r.href}-${i}`}>
                    <button
                      type="button"
                      onClick={() => handleSelect(r.href)}
                      className="flex w-full flex-col gap-0.5 rounded-lg px-3 py-2 text-left hover:bg-neutral-50"
                    >
                      <span className="text-xs font-medium uppercase text-red-600">
                        {r.type}
                      </span>
                      <span className="font-medium text-neutral-900">{r.title}</span>
                      <span className="line-clamp-1 text-sm text-neutral-500">
                        {r.excerpt}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
