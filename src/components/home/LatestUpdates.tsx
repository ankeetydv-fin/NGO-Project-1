"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ArrowRight, Clock } from "lucide-react";
import { homepageStories as staticHomepageStories } from "@/content";
import type { StoryItem } from "@/types/content";

interface LatestUpdatesProps {
  homepageStories?: StoryItem[];
}

export function LatestUpdates({ homepageStories: sanityStories }: LatestUpdatesProps) {
  const stories = sanityStories ?? staticHomepageStories;
  if (!stories || stories.length === 0) return null;

  const leadStory = stories[0];
  const secondaryStories = stories.slice(1, 4);

  return (
    <Section spacing="xl" background="default" className="border-b border-border-light/40">
      <Container size="xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
             <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-text-dark/60">
                Latest From The Ground
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-text-dark">
              Dispatches & Reports
            </h2>
          </div>
          <div className="mt-6 md:mt-0 pb-2">
            <Link href="/stories" className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:text-accent-orange transition-colors">
              Read All Stories <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Lead Story (Left) */}
          <div className="lg:col-span-7 group">
            <Link href={`/stories`} className="flex flex-col">
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-100 mb-6">
                 <Image
                    src={leadStory.image || "/images/placeholder.svg"}
                    alt={leadStory.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
              </div>
              <div className="flex items-center gap-4 text-xs font-bold text-text-muted mb-4 uppercase tracking-wider">
                <span className={leadStory.categoryColor.replace('bg-', 'text-').split(' ')[1] || 'text-primary'}>
                  {leadStory.category}
                </span>
                <span className="w-1 h-1 rounded-full bg-border-light" />
                <span className="flex items-center gap-1.5">
                  <Clock size={14} /> {leadStory.readTime}
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold font-heading text-text-dark mb-4 leading-tight group-hover:text-primary transition-colors">
                {leadStory.title}
              </h3>
              <p className="text-lg text-text-muted leading-relaxed mb-6">
                {leadStory.excerpt}
              </p>
            </Link>
          </div>

          {/* Secondary Stories (Right) */}
          <div className="lg:col-span-5 flex flex-col gap-8 mt-8 lg:mt-0 pt-8 lg:pt-0 lg:pl-8 lg:border-l lg:border-border-light/40">
            {secondaryStories.map((story) => (
              <div key={story.slug} className="group flex gap-6 items-start border-b border-border-light/40 pb-8 last:border-0 last:pb-0">
                <div className="flex-1">
                  <div className="flex items-center gap-3 text-[10px] font-bold text-text-muted mb-2 uppercase tracking-wider">
                    <span className={story.categoryColor.replace('bg-', 'text-').split(' ')[1] || 'text-primary'}>
                      {story.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-border-light" />
                    <span>{story.date}</span>
                  </div>
                  <Link href={`/stories`}>
                    <h4 className="text-xl font-bold font-heading text-text-dark leading-snug group-hover:text-primary transition-colors mb-2">
                      {story.title}
                    </h4>
                    <p className="text-sm text-text-muted line-clamp-2 leading-relaxed">
                      {story.excerpt}
                    </p>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </Section>
  );
}
