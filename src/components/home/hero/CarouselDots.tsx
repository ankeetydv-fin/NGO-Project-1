"use client";

interface CarouselDotsProps {
  slidesCount: number;
  selectedIndex: number;
  onDotClick: (index: number) => void;
}

export function CarouselDots({
  slidesCount,
  selectedIndex,
  onDotClick,
}: CarouselDotsProps) {
  return (
    <div className="absolute bottom-8 lg:bottom-28 inset-x-0 flex justify-center gap-3 z-20">
      {Array.from({ length: slidesCount }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`h-2.5 rounded-full transition-all duration-300 ${
            selectedIndex === index
              ? "w-8 bg-primary"
              : "w-2.5 bg-surface/50 hover:bg-surface/80"
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}
