"use client";

import Image from "next/image";
import Link from "next/link";
import { heroContent as staticHeroContent, homepageStories as staticHomepageStories } from "@/content";
import { Container } from "@/components/layout/Container";
import { ArrowRight, Clock } from "lucide-react";
import type { HeroContent, StoryItem } from "@/types/content";

interface EditorialHeroProps {
  heroContent?: HeroContent;
  homepageStories?: StoryItem[];
}

export function EditorialHero({ heroContent: sanityHero, homepageStories: sanityStories }: EditorialHeroProps) {
  const heroData = sanityHero ?? staticHeroContent;
  const storiesData = sanityStories ?? staticHomepageStories;
  const mainStory = heroData.slides[0];
  const sideStories = storiesData.slice(0, 2);

  return (
    <section className="relative pt-28 pb-12 md:pt-36 md:pb-20 bg-surface border-b border-border-light/40">
      <Container size="xl">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ── Main Cover Story (Left / Top) ── */}
          <div className="lg:col-span-8 group cursor-pointer flex flex-col h-full">
            <Link href={mainStory.ctaLink || "/stories"} className="flex flex-col h-full">
              <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/9] overflow-hidden rounded-xl mb-6 bg-neutral-100">
                <Image
                  src={mainStory.image}
                  alt={mainStory.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                {/* Category Badge overlaying image */}
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm shadow-sm">
                  Featured Cover
                </div>
              </div>
              
              <div className="flex flex-col flex-1">
                <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark leading-tight mb-4 group-hover:text-primary transition-colors decoration-primary/30 group-hover:underline underline-offset-[10px]">
                  {mainStory.title}
                </h1>
                <p className="font-sans text-lg md:text-xl text-text-muted leading-relaxed mb-6 max-w-3xl">
                  {mainStory.description}
                </p>
                
                <div className="flex items-center gap-4 text-sm font-bold text-text-dark mt-auto">
                  <span className="uppercase tracking-widest text-primary">Read Full Story</span>
                  <ArrowRight size={18} className="text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>

          {/* ── Side Stories (Right / Bottom) ── */}
          <div className="lg:col-span-4 flex flex-col gap-8 mt-8 lg:mt-0 pt-8 lg:pt-0 border-t lg:border-t-0 lg:border-l lg:border-border-light/60 lg:pl-8 h-full">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-accent-orange animate-pulse" />
              <h2 className="text-sm font-bold uppercase tracking-widest text-text-dark/70">
                Latest Impact
              </h2>
            </div>
            
            {sideStories.map((story, i) => (
              <div key={story.slug} className={`group flex flex-col gap-3 ${i !== sideStories.length - 1 ? 'pb-8 border-b border-border-light/40' : ''}`}>
                <Link href={`/stories`} className="flex flex-col gap-3">
                  <div className="relative w-full aspect-video overflow-hidden rounded-lg bg-neutral-100">
                     <Image
                        src={story.image || "/images/placeholder.svg"}
                        alt={story.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                  </div>
                  <div className="flex items-center gap-3 text-xs font-semibold text-text-muted mt-2">
                    <span className={`uppercase tracking-wider ${story.categoryColor.replace('bg-', 'text-').split(' ')[1] || 'text-primary'}`}>
                      {story.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-border-light" />
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} /> {story.readTime}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-text-dark leading-tight group-hover:text-primary transition-colors">
                    {story.title}
                  </h3>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
