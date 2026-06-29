"use client";

import { useState, useEffect, TouchEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ArrowRight, ArrowLeft } from "lucide-react";

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const images = [
    "/images/placeholder.svg", 
    "/images/placeholder.svg",
    "/images/placeholder.svg",
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isMobile, images.length]);

  const minSwipeDistance = 50;
  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e: TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) setActiveIndex((prev) => (prev + 1) % images.length);
    if (isRightSwipe) setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full bg-surface pb-20">
      {/* Dark background top half */}
      <div className="relative w-full bg-neutral-800 text-white pt-24 pb-48 md:pt-32 md:pb-56 overflow-hidden">
        {/* Optional subtle background image overlay */}
        <div className="absolute inset-0 bg-[url('/images/placeholder.svg')] bg-cover bg-center opacity-20 grayscale mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 to-neutral-800/30" />
        
        <div className="relative z-10 text-center flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">
              Moments of Impact
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-4 leading-tight tracking-tight">
            Check Our Gallery
          </h2>
        </div>
      </div>

      {/* Images overlapping the dark section */}
      <Container size="xl" className="relative z-20 -mt-32 md:-mt-40">
        
        {/* Desktop view: Grid */}
        <div className="hidden sm:grid grid-cols-3 gap-6 lg:gap-8">
          {images.map((src, idx) => (
            <div key={idx} className="relative aspect-[4/3] bg-neutral-200 overflow-hidden shadow-soft w-full rounded-2xl">
              <Image 
                src={src} 
                alt={`Gallery Image ${idx + 1}`} 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>

        {/* Mobile view: Slider */}
        <div 
          className="sm:hidden flex items-center gap-4 relative"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <button
            onClick={() => setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1))}
            className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all font-bold z-30 bg-primary text-white hover:bg-primary/90 shadow-md"
            aria-label="Previous image"
          >
            <ArrowLeft size={16} />
          </button>
          
          <div className="flex-1 relative aspect-[4/3] bg-neutral-200 overflow-hidden shadow-soft w-full rounded-2xl">
            <Image 
              src={images[activeIndex]} 
              alt={`Gallery Image ${activeIndex + 1}`} 
              fill 
              className="object-cover"
            />
          </div>

          <button
            onClick={() => setActiveIndex((i) => (i + 1) % images.length)}
            className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all font-bold z-30 bg-primary text-white hover:bg-primary/90 shadow-md"
            aria-label="Next image"
          >
            <ArrowRight size={16} />
          </button>
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-3 bg-primary text-white font-bold px-8 py-3.5 rounded-sm hover:bg-primary/90 transition-all hover:scale-[1.02] uppercase tracking-wider text-sm shadow-md"
          >
            View All Photos <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
