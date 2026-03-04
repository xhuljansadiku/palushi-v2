"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageLightbox } from "./ImageLightbox";

interface ProjectImageGridProps {
  images: { src: string; alt: string }[];
  title: string;
}

export function ProjectImageGrid({ images, title }: ProjectImageGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">{title}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setLightboxIndex(i)}
              className="relative aspect-[4/3] overflow-hidden rounded-lg text-left focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </button>
          ))}
        </div>
      </div>
      {lightboxIndex !== null && (
        <ImageLightbox
          images={images}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}
