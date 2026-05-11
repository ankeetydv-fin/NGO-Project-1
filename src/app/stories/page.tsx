"use client";

import { motion } from "framer-motion";
import { PageBanner } from "@/components/ui/PageBanner";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { Calendar, ArrowRight, Tag, Clock } from "lucide-react";
import { stories } from "@/content";

export default function StoriesPage() {
  return (
    <>
      <PageBanner
        title="Stories & Updates"
        subtitle="Real stories from the field, impact reports, volunteer experiences, and the latest from our programs."
        breadcrumb="From the Field"
      />

      <Section spacing="lg" background="white">
        <Container size="lg">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {stories.map((story, i) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Card interactive padding="none" className="h-full flex flex-col">
                  <div className="w-full h-48 bg-gradient-to-br from-primary/8 to-secondary/8 flex items-center justify-center">
                    <Tag size={36} className="text-primary/20" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${story.categoryColor}`}>
                        {story.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold font-heading text-text-dark mb-2 line-clamp-2 hover:text-primary transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed flex-1 line-clamp-3 mb-4">
                      {story.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-text-muted pt-3 border-t border-border-light">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {story.date}</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {story.readTime}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
