"use client";

import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export function VolunteerSection() {
  return (
    <Section spacing="none" background="default">
      <div className="flex flex-col lg:flex-row w-full min-h-[500px]">
        {/* Image Half */}
        <div className="lg:w-1/2 relative min-h-[280px] sm:min-h-[350px] lg:min-h-full bg-neutral-800">
          <Image 
            src="/images/impact/community-outreach.svg" 
            alt="Volunteer with us" 
            fill 
            className="object-cover" 
          />
          {/* Overlay for better blending */}
          <div className="absolute inset-0 bg-secondary/20 mix-blend-multiply" />
        </div>
        
        {/* Content Half */}
        <div className="lg:w-1/2 bg-secondary text-surface p-6 sm:p-8 md:p-12 lg:p-24 flex flex-col justify-center relative overflow-hidden">
          {/* Decorative Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <div className="relative z-10 max-w-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading mb-6 leading-tight">
              Become A Proud Volunteer Now
            </h2>
            <div className="w-16 h-1 bg-primary mb-8 rounded-full"></div>
            <p className="text-surface/80 text-lg leading-relaxed mb-10 font-light">
              Join our grassroots movement today. Whether you have a few hours or a few months, there is a sincere role for you to make a tangible difference in communities that need us most.
            </p>
            <div>
              <Link href="/volunteer" tabIndex={-1}>
                <Button variant="primary" size="lg" className="rounded-full px-10 font-bold shadow-glow hover:-translate-y-1 transition-all">
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
