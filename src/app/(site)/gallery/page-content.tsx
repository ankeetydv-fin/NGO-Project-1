"use client";

import { useState } from "react";
import Image from "next/image";
import { PageBanner } from "@/components/ui/PageBanner";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Camera } from "lucide-react";
import {
  galleryPageMeta as staticPageMeta,
  galleryCategories as staticCategories,
  galleryItems as staticItems,
  galleryCategoryColors,
} from "@/content";
import type { GalleryItemData } from "@/sanity/lib/queries";

interface GalleryPageContentProps {
  items?: GalleryItemData[];
}

export default function GalleryPageContent({ items }: GalleryPageContentProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const pageMeta = staticPageMeta;

  const sanityCategories = items?.length
    ? ["All", ...new Set(items.map((i) => i.category))]
    : undefined;

  const categories = sanityCategories ?? staticCategories;

  const galleryItems = items?.length
    ? items.map((i) => ({
        category: i.category,
        alt: i.alt,
        image: i.image?.asset?.url ?? undefined,
      }))
    : staticItems;

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <PageBanner
        title={pageMeta.title}
        subtitle={pageMeta.subtitle}
        breadcrumb={pageMeta.breadcrumb}
      />

      <Section spacing="lg" background="white">
        <Container size="lg">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none ${
                  activeCategory === cat
                    ? "bg-secondary text-primary shadow-glow scale-105"
                    : "bg-neutral-100 border border-border-light/60 text-text-muted hover:bg-primary/10 hover:text-primary hover:border-primary/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((item, i) => (
              <div
                key={`${item.alt}-${i}`}
                className={`relative aspect-square rounded-[var(--radius-lg)] overflow-hidden shadow-sm group cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                  item.image ? "bg-neutral-100" : `bg-gradient-to-br ${galleryCategoryColors[item.category] || "from-primary/10 to-secondary/5"}`
                }`}
              >
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Camera size={32} className="text-text-muted/20" />
                  </div>
                )}
                <div className="absolute inset-0 bg-secondary/80 transition-opacity duration-300 flex items-end p-5 opacity-0 group-hover:opacity-100">
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-widest mb-1 block">
                      {item.category}
                    </span>
                    <p className="text-surface font-medium text-sm leading-snug">{item.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-text-muted py-16">No images in this category yet.</p>
          )}
        </Container>
      </Section>
    </>
  );
}
