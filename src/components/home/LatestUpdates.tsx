"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ArrowRight, Clock } from "lucide-react";
import { homepageStories } from "@/content";

export function LatestUpdates() {
  if (!homepageStories || homepageStories.length === 0) return null;

  const leadStory = homepageStories[0];
  const secondaryStories = homepageStories.slice(1, 4);

  return (
    <Section spacing="lg" background="white" className="bg-black text-white border-b border-neutral-900 relative overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/10 to-transparent pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Latest From The Ground
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-primary">
            Dispatches & Reports
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Lead Story (Left) */}
          <div className="lg:col-span-7 group">
            <Link href={`/stories`} className="flex flex-col">
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-900 border border-white/5 rounded-xl mb-6">
                 <Image
                    src={leadStory.image || "/images/placeholder.svg"}
                    alt={leadStory.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
              </div>
              <div className="flex items-center gap-4 text-xs font-bold text-neutral-400 mb-4 uppercase tracking-wider">
                <span className="text-primary font-extrabold">
                  {leadStory.category}
                </span>
                <span className="w-1 h-1 rounded-full bg-neutral-800" />
                <span className="flex items-center gap-1.5">
                  <Clock size={14} /> {leadStory.readTime}
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 leading-tight group-hover:text-primary transition-colors">
                {leadStory.title}
              </h3>
              <p className="text-lg text-neutral-300 leading-relaxed mb-6">
                {leadStory.excerpt}
              </p>
            </Link>


          </div>

          {/* Secondary Stories (Right) - Timeline */}
          <div className="lg:col-span-5 flex flex-col mt-4 lg:mt-0 pt-0">
            <div className="lg:pl-8 mb-4">
              <div className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  Latest Updates
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-8 lg:pl-8 lg:border-l-2 lg:border-primary relative">
              {secondaryStories.map((story) => (
                <div key={story.slug} className="group flex gap-6 items-start border-b border-neutral-900 pb-8 last:border-0 last:pb-0 relative">
                  
                  {/* Timeline Node */}
                  <div className="hidden lg:block absolute w-4 h-4 rounded-full bg-black border-[3px] border-primary top-1.5 -left-[41px] group-hover:scale-125 group-hover:bg-primary transition-all shadow-[0_0_10px_rgba(229,57,53,0.5)] z-10" />

                  <div className="flex-1">
                    <div className="flex items-center gap-3 text-[10px] font-bold text-neutral-400 mb-2 uppercase tracking-wider">
                      <span className="text-primary font-extrabold">
                        {story.category}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-neutral-800" />
                      <span>{story.date}</span>
                    </div>
                    <Link href={`/stories`}>
                      <h4 className="text-xl font-heading font-bold text-white leading-snug group-hover:text-primary transition-colors mb-2">
                        {story.title}
                      </h4>
                      <p className="text-sm text-neutral-400 line-clamp-2 leading-relaxed">
                        {story.excerpt}
                      </p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Read All Stories Button at the end of the section */}
        <div className="mt-12 flex justify-end">
          <Link href="/stories" className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:text-white transition-colors">
            Read All Stories <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
