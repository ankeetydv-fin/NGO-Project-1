import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import type { HeroSlide as HeroSlideType } from "@/types/content";

interface HeroSlideProps {
  slide: HeroSlideType;
  isActive: boolean;
  isPriority: boolean;
}

export function HeroSlide({ slide, isActive, isPriority }: HeroSlideProps) {
  return (
    <div className="relative w-full h-full min-h-[100svh] flex-shrink-0 flex items-center">
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          priority={isPriority}
          className={`object-cover transition-transform duration-[20000ms] ease-out ${
            isActive ? "scale-110" : "scale-100"
          }`}
          sizes="100vw"
        />
        {/* Multi-layered Gradients for Depth */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent hidden md:block" />
      </div>

      <Container size="xl" className="relative z-10 w-full">
        <div className="max-w-4xl px-4 md:px-0">
          <div className="space-y-6 md:space-y-8">
            {/* Animated Badge */}
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-md transition-all duration-1000 ${
                isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs md:text-sm font-bold tracking-widest text-primary uppercase">
                {slide.subtitle}
              </span>
            </div>

            {/* Main Title with Staggered Animation */}
            <h2
              className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-heading text-white leading-[1.1] transition-all duration-1000 delay-300 ${
                isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              {slide.title.split(' ').map((word, i) => (
                <span key={i} className="inline-block mr-[0.2em] last:mr-0">
                  {word}
                </span>
              ))}
            </h2>

            {/* Description with Premium Typography */}
            <p
              className={`max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed font-light transition-all duration-1000 delay-500 ${
                isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              {slide.description}
            </p>

            {/* CTA Group */}
            <div
              className={`flex flex-col sm:flex-row gap-4 pt-4 transition-all duration-1000 delay-700 ${
                isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <Link href={slide.ctaLink} tabIndex={isActive ? 0 : -1}>
                <Button
                  variant="accent"
                  size="xl"
                  className="w-full sm:w-auto min-h-[48px] sm:min-h-[56px] md:min-h-[64px] text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 shadow-[0_20px_50px_rgba(200,169,81,0.3)] hover:shadow-[0_20px_50px_rgba(200,169,81,0.5)] hover:-translate-y-1 transition-all"
                >
                  {slide.ctaText}
                </Button>
              </Link>
              
              <Link href="/programs" tabIndex={isActive ? 0 : -1}>
                <Button
                  variant="outline"
                  size="xl"
                  className="w-full sm:w-auto min-h-[48px] sm:min-h-[56px] md:min-h-[64px] text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 text-white border-white/30 hover:bg-white/10 backdrop-blur-sm transition-all"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
