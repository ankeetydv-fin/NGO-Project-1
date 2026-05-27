"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { heroContent } from "@/content";
import { HeroSlide } from "./HeroSlide";
import { CarouselDots } from "./CarouselDots";

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false },
    [Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("init", onSelect);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("init", onSelect);
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const slides = heroContent.slides;

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-text-dark">
      <div className="h-full w-full" ref={emblaRef}>
        <div className="flex h-full min-h-[100svh] w-full touch-pan-y">
          {slides.map((slide, index) => (
            <HeroSlide
              key={slide.id}
              slide={slide}
              isActive={index === selectedIndex}
              isPriority={index === 0}
            />
          ))}
        </div>
      </div>



      {/* Autoplay Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 z-20 bg-white/10">
        <div
          className="h-full bg-primary"
          style={{
            animation: "progress 5000ms linear forwards"
          }}
          key={selectedIndex}
        />
      </div>

      <CarouselDots
        slidesCount={slides.length}
        selectedIndex={selectedIndex}
        onDotClick={scrollTo}
      />
      
      {/* Floating High-Integrity Parameter Deck */}
      <div className="hidden lg:flex absolute bottom-0 inset-x-0 z-10 justify-center">
        <div className="w-full max-w-5xl bg-secondary/80 backdrop-blur-xl border-t border-x border-white/10 rounded-t-2xl px-12 py-6 shadow-[0_-8px_30px_rgba(0,0,0,0.4)] flex justify-between items-center">
          {heroContent.stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center w-full justify-center">
              <div className="text-center px-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary/80 mb-1">{stat.label}</p>
                <p className="text-3xl font-extrabold font-heading text-white">{stat.value}</p>
              </div>
              {i < heroContent.stats.length - 1 && (
                <div className="h-8 w-[1px] bg-white/15 self-center" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
