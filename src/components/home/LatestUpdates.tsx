"use client";

import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import { homepageStories } from "@/content";

export function LatestUpdates() {
  return (
    <Section spacing="lg" background="white">
      <Container size="lg">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            From the Field
          </p>
          <h2 className="text-h2 text-text-dark mb-4">
            Latest Updates & Stories
          </h2>
          <p className="text-body-large text-text-muted max-w-2xl mx-auto">
            Stay connected with our latest news, impact stories, and community updates.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {homepageStories.map((post) => (
            <div key={post.title}>
              <Card interactive padding="none" className="h-full flex flex-col">
                {/* Image placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <div className="text-primary/30">
                    <Tag size={40} />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${post.categoryColor}`}>
                      {post.category}
                    </span>
                    <span className="text-text-muted text-xs flex items-center gap-1">
                      <Calendar size={12} /> {post.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-heading text-text-dark mb-2 line-clamp-2 hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    href="/stories"
                    className="inline-flex items-center gap-1 text-primary text-sm font-semibold mt-4 hover:underline underline-offset-4"
                  >
                    Read More <ArrowRight size={14} />
                  </Link>
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/stories" tabIndex={-1}>
            <Button variant="primary" className="gap-2">
              View All Stories <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
