"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

type Program = {
  _id: string;
  title: string;
  description: string;
  imageUrl?: string;
  tagline?: string;
  link?: string;
};

export function ProgramsPreview({ programs }: { programs: Program[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: false,
    containScroll: false,
  });
  
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
  }, [emblaApi]);

  const ProgramCard = ({ program, isMobileActive = true }: { program: Program, isMobileActive?: boolean }) => (
    <div 
      className={`group flex flex-col bg-surface border border-border-light/60 shadow-sm rounded-[var(--radius-md)] overflow-hidden transition-all duration-500 h-full ${
        isMobileActive 
          ? "opacity-100 scale-100 hover:shadow-xl" 
          : "opacity-40 scale-[0.85]"
      }`}
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-100">
        <Image
          src={program.imageUrl || "/images/placeholder.svg"}
          alt={program.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary text-[10px] font-bold uppercase px-3 py-1 rounded-sm shadow-sm">
          {program.title}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold font-heading text-text-dark mb-3 leading-tight group-hover:text-primary transition-colors">
          {program.tagline}
        </h3>
        <p className="text-sm text-text-muted mb-5 line-clamp-3 leading-relaxed">
          {program.description}
        </p>
        <div className="mt-auto pt-4 border-t border-border-light/60">
          <Link href={program.link || "#"} tabIndex={isMobileActive ? 0 : -1} className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-accent-orange transition-colors uppercase tracking-wider">
            Read More <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <Section spacing="lg" background="default">
      <Container size="lg">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-text-dark mb-4">
              Our Sectors
            </h2>
            <p className="text-body-large text-text-muted">
              Organization set up to provide help and raise money for those in need. Support our grassroots initiatives today.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Link href="/programs" tabIndex={-1}>
              <Button variant="outline" className="gap-2 rounded-full border-border-light text-text-dark hover:border-primary hover:text-primary transition-colors">
                View All Programs <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden w-full overflow-hidden -mx-4 px-4 py-4" ref={emblaRef}>
          <div className="flex touch-pan-y items-stretch">
            {programs.map((program, index) => (
              <div 
                key={program._id} 
                className="flex-[0_0_80%] min-w-0 px-2"
                onClick={() => emblaApi?.scrollTo(index)}
              >
                <ProgramCard program={program} isMobileActive={index === selectedIndex} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <div key={program._id} className="h-full">
              <ProgramCard program={program} isMobileActive={true} />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
