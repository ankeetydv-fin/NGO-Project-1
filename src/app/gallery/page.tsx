"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PageBanner } from "@/components/ui/PageBanner";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Camera } from "lucide-react";
import {
  galleryPageMeta,
  galleryCategories,
  galleryItems,
  galleryCategoryColors,
} from "@/content";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <PageBanner
        title={galleryPageMeta.title}
        subtitle={galleryPageMeta.subtitle}
        breadcrumb={galleryPageMeta.breadcrumb}
      />

      <Section spacing="lg" background="white">
        <Container size="lg">
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none ${
                  activeCategory === cat
                    ? "bg-primary text-surface"
                    : "bg-bg-off-white border border-border-light text-text-muted hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((item, i) => (
              <motion.div
                key={`${item.alt}-${i}`}
                className={`relative aspect-square rounded-[var(--radius-md)] overflow-hidden bg-gradient-to-br ${
                  galleryCategoryColors[item.category] || "from-primary/10 to-secondary/5"
                } border border-border-light group cursor-pointer`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera size={32} className="text-text-muted/20" />
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/70 transition-colors flex items-end p-4 opacity-0 group-hover:opacity-100">
                  <div>
                    <span className="text-xs font-semibold text-accent-orange uppercase tracking-wider">
                      {item.category}
                    </span>
                    <p className="text-surface text-sm mt-1 leading-snug">{item.alt}</p>
                  </div>
                </div>
              </motion.div>
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
