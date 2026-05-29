import React from "react";
import { Container } from "@/components/layout/Container";
import { Building2, Globe, Handshake, Shield, Award } from "lucide-react";
import { trustPartners } from "@/content";

const ICON_MAP: Record<string, React.ElementType> = {
  Building2,
  Globe,
  Handshake,
  Shield,
  Award,
};

export function TrustBar() {
  return (
    <section className="py-12 md:py-16 bg-surface border-b border-border-light">
      <Container size="xl">
        {/* Section Label */}
        <div className="text-center mb-10">
          <p className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-secondary bg-secondary/5 border border-secondary/15 px-4 py-1.5 rounded-full inline-block">
            Operational Transparency &amp; Affiliations
          </p>
        </div>

        {/* Static Partner Grid */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-5">
          {trustPartners.map((partner) => {
            const Icon = ICON_MAP[partner.iconName] || Building2;
            return (
              <div
                key={partner.name}
                className="flex items-center gap-2.5 sm:gap-3 bg-bg-off-white border border-border-light px-4 sm:px-6 py-3 sm:py-4 rounded-xl shadow-soft hover:shadow-md hover:-translate-y-0.5 hover:border-secondary/20 transition-all duration-300 select-none"
              >
                <div className="w-9 h-9 rounded-lg bg-secondary/8 flex items-center justify-center text-secondary/60">
                  <Icon size={18} className="stroke-[1.5]" />
                </div>
                <span className="text-sm font-sans font-semibold tracking-wide text-text-dark/75">
                  {partner.name}
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

