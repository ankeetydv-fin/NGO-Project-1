"use client";

import Image from "next/image";
import Link from "next/link";
import { heroContent, homepageStories } from "@/content";
import { Container } from "@/components/layout/Container";
import { ArrowRight, Clock } from "lucide-react";

export function EditorialHero() {
  const mainStory = heroContent.slides[0];
  const sideStories = homepageStories.slice(0, 2);

  return (
    <section className="relative pt-24 pb-8 md:pt-28 md:pb-12 bg-surface border-b border-border-light/40 lg:min-h-[calc(100vh-160px)] lg:flex lg:flex-col lg:justify-center">
      <Container size="xl">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ── Main Cover Story (Left / Top) ── */}
          <div className="lg:col-span-8 group cursor-pointer flex flex-col h-full">
            <Link href={mainStory.ctaLink || "/stories"} className="flex flex-col h-full">
              <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[2.2/1] overflow-hidden rounded-xl mb-4 bg-neutral-100">
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
                <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark leading-tight mb-3 group-hover:text-primary transition-colors decoration-primary/30 group-hover:underline underline-offset-[8px]">
                  {mainStory.title}
                </h1>
                <p className="font-sans text-base md:text-lg text-text-muted leading-relaxed mb-4 max-w-3xl">
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
          <div className="lg:col-span-4 flex flex-col gap-5 mt-6 lg:mt-0 pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l lg:border-border-light/60 lg:pl-8 h-full">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-accent-orange animate-pulse" />
              <h2 className="text-sm font-bold uppercase tracking-widest text-text-dark/70">
                Latest Impact
              </h2>
            </div>
            
            {sideStories.map((story, i) => (
              <div key={story.slug} className={`group flex flex-col gap-2 ${i !== sideStories.length - 1 ? 'pb-5 border-b border-border-light/40' : ''}`}>
                <Link href={`/stories`} className="flex flex-col gap-2">
                  <div className="relative w-full aspect-[2.2/1] overflow-hidden rounded-lg bg-neutral-100">
                     <Image
                        src={story.image || "/images/placeholder.svg"}
                        alt={story.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                  </div>
                  <div className="flex items-center gap-3 text-xs font-semibold text-text-muted mt-1">
                    <span className={`uppercase tracking-wider ${story.categoryColor.replace('bg-', 'text-').split(' ')[1] || 'text-primary'}`}>
                      {story.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-border-light" />
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} /> {story.readTime}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg md:text-xl font-bold text-text-dark leading-tight group-hover:text-primary transition-colors">
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
