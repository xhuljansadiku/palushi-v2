"use client";

import { useState } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, x)));
  };

  const handleTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, x)));
  };

  return (
    <div
      className="relative aspect-[4/3] cursor-col-resize overflow-hidden rounded-lg select-none touch-none"
      onMouseMove={handleMove}
      onTouchMove={handleTouch}
      role="img"
      aria-label={`Before and after comparison. Slider at ${Math.round(position)}%`}
    >
      <div className="absolute inset-0">
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 672px"
        />
      </div>
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 672px"
        />
      </div>
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md">
          <svg
            className="h-5 w-5 text-neutral-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 9l4-4 4 4m0 6l-4 4-4-4"
            />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-2 left-2 rounded bg-black/60 px-2 py-1 text-xs font-medium text-white">
        Before
      </div>
      <div className="absolute bottom-2 right-2 rounded bg-black/60 px-2 py-1 text-xs font-medium text-white">
        After
      </div>
    </div>
  );
}
