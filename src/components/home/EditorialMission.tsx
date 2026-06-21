"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { missionContent, impactStats } from "@/content";

export function EditorialMission() {
  const c = missionContent;

  const words = ["a voice", "protection", "support", "guidance", "hope"];
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const activeWord = words[wordIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, 50); // fast deletion speed
    } else {
      timer = setTimeout(() => {
        setCurrentText(activeWord.slice(0, currentText.length + 1));
      }, 100); // typing speed
    }

    if (!isDeleting && currentText === activeWord) {
      clearTimeout(timer);
      timer = setTimeout(() => setIsDeleting(true), 1500); // pause before deleting
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex]);

  return (
    <Section spacing="xl" background="white" className="mt-3 md:mt-4 bg-black text-white pt-12 md:pt-16 lg:pt-20 border-b border-neutral-900 relative overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/10 to-transparent pointer-events-none" />
      
      <Container size="xl" className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
          
          {/* Left Part: Text */}
          <div className="w-full lg:w-7/12 text-left space-y-8 lg:space-y-10">
            {/* Label */}
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                {c.label}
              </span>
            </div>

            {/* Massive Blockquote */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-[1.1] text-primary tracking-tight">
              "No child should be left in the dark,
              <br />
              <span className="whitespace-nowrap">
                without{" "}
                <span className="font-black italic text-primary">
                  {currentText}
                </span>
                <span className="inline-block w-[3px] h-[0.85em] bg-primary ml-1 animate-pulse align-middle" />
                ."
              </span>
            </h2>

            <p className="text-lg md:text-xl text-neutral-300 font-sans leading-relaxed font-light">
              {c.description}
            </p>

            {/* Stats Grid - Left aligned */}
            <div className="pt-8 lg:pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-4 lg:gap-3 xl:gap-6 mt-6 lg:mt-8 border-t border-white/10">
              {impactStats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-start justify-center">
                  <span className={`text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-heading font-extrabold mb-1.5 text-primary`}>
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.1em] text-neutral-300 text-left leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Part: Image Placeholder */}
          <div className="hidden lg:block w-full lg:w-5/12 relative min-h-[400px] lg:min-h-[550px] bg-neutral-200 rounded-2xl overflow-hidden shadow-soft">
            <Image 
              src="/images/impact/community-outreach.svg" 
              alt="Mission in Action" 
              fill 
              className="object-cover" 
            />
          </div>

        </div>
      </Container>
    </Section>
  );
}
