"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, getYearsExperience } from "@/lib/site-config";

const heroSlides = (getYears: () => number) => [
  {
    image: siteConfig.heroImages[0],
    title: "Construction & Renovation Experts in London",
    subtitle: "Loft conversions, house extensions, full renovations, roofing, and kitchen & bathroom refurbishments. We bring your vision to life.",
  },
  {
    image: siteConfig.heroImages[1],
    title: "Transform Your Space",
    subtitle: `Over ${getYears()} years of experience. Quality craftsmanship across Westminster, Kensington & Chelsea, Lambeth, Southwark, Wandsworth, and City of London.`,
  },
  {
    image: siteConfig.heroImages[2],
    title: "Your Dream Home Awaits",
    subtitle: "From concept to completion, we deliver projects that exceed expectations.",
  },
];

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLElement>(null);
  const slides = heroSlides(getYearsExperience);

  const goTo = useCallback((i: number) => {
    setActive((i + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(() => {
      setActive((a) => (a + 1) % slides.length);
    }, 6000);
    return () => clearInterval(t);
  }, [isPaused, slides.length]);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goTo(active - 1);
      if (e.key === "ArrowRight") goTo(active + 1);
      if (e.key === "Home") goTo(0);
      if (e.key === "End") goTo(slides.length - 1);
    };
    el.addEventListener("keydown", onKeyDown);
    return () => el.removeEventListener("keydown", onKeyDown);
  }, [active, goTo, slides.length]);

  const slide = slides[active];

  return (
    <section
      ref={sliderRef}
      tabIndex={0}
      className="relative min-h-[85vh] bg-neutral-900 outline-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Hero slider"
    >
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== active}
        >
          <Image
            src={s.image}
            alt={`${s.title} - ${s.subtitle}`}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:items-start lg:px-8 lg:text-left">
        <p className="text-sm font-medium uppercase tracking-widest text-red-400">
          Since {siteConfig.foundedYear}
        </p>
        <h1 className="mt-2 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {slide.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-neutral-300">
          {slide.subtitle}
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
          <Link
            href="/quote"
            className="inline-flex items-center justify-center rounded-md bg-red-600 px-8 py-4 text-base font-semibold text-white transition hover:bg-red-700"
          >
            Get a Free Quote
          </Link>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center justify-center rounded-md border-2 border-white px-8 py-4 text-base font-semibold text-white transition hover:bg-white hover:text-neutral-900"
          >
            Call Now
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2" role="tablist" aria-label="Slide navigation">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all ${
              i === active ? "w-8 bg-red-500" : "w-2 bg-white/50"
            }`}
            role="tab"
            aria-selected={i === active}
            aria-label={`Slide ${i + 1} of ${slides.length}`}
          />
        ))}
      </div>
    </section>
  );
}
