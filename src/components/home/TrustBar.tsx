"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import * as LucideIcons from "lucide-react";
import { trustPartners } from "@/content";

export function TrustBar() {
  // Triplicating the partners list to create a seamless infinite scroll loop regardless of resolution
  const marqueePartners = [...trustPartners, ...trustPartners, ...trustPartners];

  return (
    <section className="relative py-12 md:py-16 bg-surface overflow-hidden border-b border-border-light/80">
      {/* Decorative top border line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />
      
      <Container size="xl">
        <div className="text-center mb-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary bg-primary/5 border border-primary/10 px-4 py-1.5 rounded-full inline-block">
            Operational Transparency & Affiliations
          </p>
        </div>
        
        {/* Infinite Horizontal Scroller Canvas */}
        <div className="relative w-full overflow-hidden py-2">
          {/* Glassmorphic edge fade filters */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-surface via-surface/75 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-surface via-surface/75 to-transparent z-10 pointer-events-none" />
          
          <div className="animate-marquee flex gap-6 md:gap-8">
            {marqueePartners.map((partner, index) => {
              // Dynamically get the icon component from LucideIcons
              const Icon = (LucideIcons as unknown as Record<string, React.ElementType>)[partner.iconName] || LucideIcons.Building2;

              return (
                <div
                  key={`${partner.name}-${index}`}
                  className="group flex items-center gap-3 bg-bg-off-white hover:bg-white border border-border-light/80 px-6 py-4 rounded-xl shadow-soft hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 shrink-0 select-none"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center text-primary/60 group-hover:text-primary transition-colors">
                    <Icon size={20} className="stroke-[1.5]" />
                  </div>
                  <span className="text-sm font-bold tracking-wide text-text-dark/80 group-hover:text-text-dark transition-colors">
                    {partner.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
