"use client";

import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ArrowRight } from "lucide-react";

export function DonationCTA() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 lg:py-40 bg-secondary border-t border-border-light/40 text-text-dark overflow-hidden">
      {/* Editorial aesthetic: minimal background, strong typography */}
      
      <Container size="md" className="relative z-10 text-center">
        <div className="flex items-center gap-2 mb-8 justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-text-dark/60">
            Fund The Impact
          </span>
        </div>
        
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading leading-tight mb-8 text-text-dark">
          The stories above don't change without <span className="text-accent-orange italic">your action.</span>
        </h2>
        
        <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto font-light leading-relaxed mb-12">
          We operate on a zero-waste, direct-to-field model. Every rupee you send is traced, photographed, and turned into clean water, school books, or medical care within 48 hours.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/donate" className="group flex items-center justify-center gap-3 bg-primary text-white font-bold text-sm px-6 py-3.5 rounded-sm hover:bg-primary/90 transition-all hover:scale-[1.02] w-full sm:w-auto uppercase tracking-wider">
            Donate Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/reports" className="group flex items-center justify-center gap-3 bg-transparent border-2 border-text-dark/20 text-text-dark font-bold text-sm px-6 py-3.5 rounded-sm hover:border-text-dark hover:bg-text-dark/5 transition-all w-full sm:w-auto uppercase tracking-wider">
            See Our Financials
          </Link>
        </div>
      </Container>
    </section>
  );
}
