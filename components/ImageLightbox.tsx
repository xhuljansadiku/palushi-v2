"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ImageLightboxProps {
  images: { src: string; alt: string }[];
  initialIndex?: number;
  onClose: () => void;
}

export function ImageLightbox({ images, initialIndex = 0, onClose }: ImageLightboxProps) {
  const [index, setIndex] = useState(initialIndex);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, images.length]);

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 rounded bg-white/10 p-2 text-white hover:bg-white/20"
        aria-label="Close"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div
        className="relative max-h-[90vh] max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[index].src}
          alt={images[index].alt}
          width={1200}
          height={800}
          className="max-h-[85vh] w-auto object-contain"
          sizes="90vw"
        />
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setIndex((i) => (i - 1 + images.length) % images.length); }}
              className="absolute left-0 top-1/2 -translate-y-1/2 rounded bg-white/20 p-2 text-white hover:bg-white/30"
              aria-label="Previous"
            >
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setIndex((i) => (i + 1) % images.length); }}
              className="absolute right-0 top-1/2 -translate-y-1/2 rounded bg-white/20 p-2 text-white hover:bg-white/30"
              aria-label="Next"
            >
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <p className="mt-2 text-center text-sm text-white/80">
              {index + 1} / {images.length}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
