"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="text-2xl font-bold text-neutral-900">Something went wrong</h1>
      <p className="mt-4 text-neutral-600">
        We encountered an error. Please try again.
      </p>
      <div className="mt-10 flex gap-4">
        <button
          type="button"
          onClick={reset}
          className="rounded-md bg-red-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-red-700"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-md border-2 border-neutral-300 px-6 py-3 text-base font-semibold text-neutral-800 transition hover:border-red-600 hover:text-red-600"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
