"use client";

import { useState } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  /** Tailwind aspect class, e.g. "aspect-[3/4]" for portrait photos */
  aspectClass?: string;
  /** Where the divider starts, 0-100 (share of the before image shown) */
  initialPosition?: number;
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  aspectClass = "aspect-[4/3]",
  initialPosition = 50,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(initialPosition);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, x)));
  };


  return (
    <div
      className={`group relative ${aspectClass} overflow-hidden rounded-lg select-none`}
      onMouseMove={handleMove}
    >
      <div className="absolute inset-0">
        <Image
          src={afterSrc}
          alt={afterAlt}
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
          src={beforeSrc}
          alt={beforeAlt}
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
      {/* Native range input: drag, touch and keyboard (arrow keys) support for free */}
      <input
        type="range"
        min={0}
        max={100}
        step={1}
        value={Math.round(position)}
        onChange={(e) => setPosition(Number(e.target.value))}
        aria-label="Drag to compare before and after"
        aria-valuetext={`${Math.round(position)}% before image shown`}
        className="absolute inset-0 h-full w-full cursor-col-resize opacity-0"
      />
      <span className="pointer-events-none absolute inset-0 rounded-lg ring-red-600 ring-offset-2 group-has-[input:focus-visible]:ring-2" aria-hidden />
    </div>
  );
}
