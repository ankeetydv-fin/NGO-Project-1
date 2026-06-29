"use client";

import { useState, useEffect, TouchEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";

const events = [
  {
    id: "1",
    title: "Vandemataram Cultural Programme By Shiv Prabha Foundation",
    imageUrl: "/images/placeholder.svg",
    hasVideo: false,
    date: "March 2025",
    category: "Cultural",
  },
  {
    id: "2",
    title: "Shiv Prabha Foundation Welcome Dance Programme",
    imageUrl: "/images/placeholder.svg",
    hasVideo: true,
    date: "February 2025",
    category: "Cultural",
  },
  {
    id: "3",
    title: "Environment Swachha Bharat Abhiyan Programme",
    imageUrl: "/images/placeholder.svg",
    hasVideo: true,
    date: "January 2025",
    category: "Environment",
  },
  {
    id: "4",
    title: "Women Empowerment & Skill Development Drive",
    imageUrl: "/images/placeholder.svg",
    hasVideo: false,
    date: "December 2024",
    category: "Livelihood",
  },
  {
    id: "5",
    title: "Free Health Checkup Camp for Underprivileged Communities",
    imageUrl: "/images/placeholder.svg",
    hasVideo: false,
    date: "November 2024",
    category: "Healthcare",
  },
];

export function EventsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    if (itemsPerPage !== 1) return;
    const interval = setInterval(() => {
      setStartIndex((current) => (current + 1 >= events.length ? 0 : current + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [itemsPerPage]);

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
    if (isLeftSwipe) {
      setStartIndex((prev) => (prev + 1 >= events.length ? 0 : prev + 1));
    }
    if (isRightSwipe) {
      setStartIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
    }
  };

  useEffect(() => {
    const handleResize = () => {
      let limit = 3;
      if (window.innerWidth < 640) {
        limit = 1;
      } else if (window.innerWidth < 1024) {
        limit = 2;
      }
      setItemsPerPage(limit);
      setStartIndex((prev) => Math.min(prev, Math.max(0, events.length - limit)));
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const canPrev = startIndex > 0;
  const canNext = startIndex + itemsPerPage < events.length;

  const visibleEvents = events.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="relative w-full bg-surface pb-20 border-b border-border-light/40 overflow-hidden">
      
      {/* Dark background top half */}
      <div className="relative w-full bg-neutral-800 text-white pt-24 pb-48 md:pt-32 md:pb-56 overflow-hidden">
        {/* Optional subtle background image overlay */}
        <div className="absolute inset-0 bg-[url('/images/placeholder.svg')] bg-cover bg-center opacity-10 grayscale mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 to-neutral-800/30" />
        
        <div className="relative z-10 text-center flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">
              Community In Action
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-4 leading-tight tracking-tight">
            Events
          </h2>
        </div>
      </div>

      {/* Carousel Wrapper Overlapping */}
      <Container size="xl" className="relative z-20 -mt-32 md:-mt-40">
        <div 
          className="relative flex items-center gap-4"
          onTouchStart={itemsPerPage === 1 ? onTouchStart : undefined}
          onTouchMove={itemsPerPage === 1 ? onTouchMove : undefined}
          onTouchEnd={itemsPerPage === 1 ? onTouchEnd : undefined}
        >

          {/* Prev Button */}
          <button
            onClick={() => setStartIndex((i) => Math.max(0, i - 1))}
            disabled={!canPrev}
            className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all font-bold z-30 ${
              canPrev
                ? "bg-primary text-white hover:bg-primary/90 shadow-md"
                : "bg-white/80 border border-border-light text-neutral-400 cursor-not-allowed"
            }`}
            aria-label="Previous events"
          >
            <ArrowLeft size={16} />
          </button>

          {/* Cards Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {visibleEvents.map((event) => (
              <div
                key={event.id}
                className="group flex flex-col bg-surface rounded-2xl shadow-soft border border-border-light/40 hover:shadow-md transition-shadow overflow-hidden"
              >
                {/* Image / Thumbnail */}
                <div className="relative w-full aspect-[16/10] bg-neutral-100 overflow-hidden">
                  <Image
                    src={event.imageUrl}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm shadow-sm">
                    {event.category}
                  </div>
                  {/* Play icon for video events */}
                  {event.hasVideo && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-sm border border-white/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/80 transition-all shadow-lg">
                        <Play size={24} className="text-white fill-white ml-1" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="px-6 py-6 flex flex-col flex-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
                    {event.date}
                  </span>
                  <h3 className="text-lg md:text-xl font-heading font-bold text-text-dark leading-snug group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() =>
              setStartIndex((i) =>
                Math.min(events.length - itemsPerPage, i + 1)
              )
            }
            disabled={!canNext}
            className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all font-bold z-30 ${
              canNext
                ? "bg-primary text-white hover:bg-primary/90 shadow-md"
                : "bg-white/80 border border-border-light text-neutral-400 cursor-not-allowed"
            }`}
            aria-label="Next events"
          >
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: events.length - itemsPerPage + 1 }).map(
            (_, i) => (
              <button
                key={i}
                onClick={() => setStartIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === startIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-neutral-300 hover:bg-neutral-400"
                }`}
                aria-label={`Go to event group ${i + 1}`}
              />
            )
          )}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/events"
            className="group inline-flex items-center gap-3 bg-primary text-white font-bold px-8 py-3.5 rounded-sm hover:bg-primary/90 transition-all hover:scale-[1.02] uppercase tracking-wider text-sm shadow-md"
          >
            View All Events <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </Container>
    </section>
  );
}
