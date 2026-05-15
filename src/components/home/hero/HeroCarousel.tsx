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

      <style jsx global>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>

      <CarouselDots
        slidesCount={slides.length}
        selectedIndex={selectedIndex}
        onDotClick={scrollTo}
      />
      
      {/* Optional Quick Stats Overlay at the bottom on desktop */}
      <div className="hidden lg:flex absolute bottom-0 inset-x-0 bg-surface/10 backdrop-blur-md border-t border-surface/20 z-10 p-4">
        <div className="max-w-7xl mx-auto w-full flex justify-around items-center">
          {heroContent.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold font-heading text-surface">{stat.value}</p>
              <p className="text-surface/80 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
