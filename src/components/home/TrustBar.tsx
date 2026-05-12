"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import * as LucideIcons from "lucide-react";
import { trustPartners } from "@/content";

export function TrustBar() {
  return (
    <section className="py-8 md:py-12 bg-surface border-y border-border-light">
      <Container size="xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4">
          <p className="text-text-muted text-sm font-medium uppercase tracking-wider shrink-0">
            Trusted Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {trustPartners.map((partner) => {
              // Dynamically get the icon component from LucideIcons
              const Icon = (LucideIcons as unknown as Record<string, React.ElementType>)[partner.iconName] || LucideIcons.Building2;

              return (
                <div
                  key={partner.name}
                  className="flex items-center gap-2 text-text-muted/60 hover:text-primary transition-colors"
                >
                  <Icon size={24} />
                  <span className="text-sm font-semibold tracking-wide">{partner.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
