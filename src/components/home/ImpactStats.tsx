"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { impactStats } from "@/content";

export function ImpactStats() {
  return (
    <Section spacing="md" background="white" className="border-b border-border-light/50">
      <Container size="lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4 py-8">
          {impactStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex-1 w-full text-center ${i !== impactStats.length - 1 ? 'md:border-r md:border-border-light/60' : ''}`}
            >
              <p className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading ${stat.color} mb-2`}>
                {stat.value}
              </p>
              <p className="text-text-dark/70 text-xs md:text-sm font-bold uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

