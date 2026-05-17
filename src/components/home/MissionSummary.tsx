"use client";

import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { missionContent } from "@/content";

export function MissionSummary() {
  const c = missionContent;

  return (
    <Section spacing="lg" background="white" className="border-b border-border-light/50">
      <Container size="lg">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left: About */}
          <div className="space-y-6">
            <h2 className="text-primary font-bold text-2xl uppercase tracking-wider font-heading">
              About The Foundation
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold font-heading text-text-dark leading-tight">
              All children deserve to live in safe, nurturing environments to feel valued and loved.
            </h3>
            <p className="text-text-muted text-lg leading-relaxed font-light">
              {c.description}
            </p>
            <div className="pt-4">
              <Link href="/about" tabIndex={-1}>
                <Button variant="primary" className="gap-2 rounded-full px-8 shadow-glow hover:-translate-y-1 transition-transform">
                  Read More
                </Button>
              </Link>
            </div>
          </div>

          {/* Right: Mission Statement */}
          <div className="space-y-6 lg:border-l lg:border-border-light lg:pl-16 flex flex-col justify-center h-full pt-8 lg:pt-0">
            <h2 className="text-primary font-bold text-2xl uppercase tracking-wider font-heading lg:text-right">
              In A Mission Since 2025
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold font-heading text-text-dark leading-tight lg:text-right">
              To help the Helpless and uplift the Society
            </h3>
            <div className="flex justify-end pt-4">
              <div className="h-1 w-24 bg-primary rounded-full"></div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
