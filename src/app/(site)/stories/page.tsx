import Image from "next/image";
import { PageBanner } from "@/components/ui/PageBanner";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Calendar, Tag, Clock } from "lucide-react";
import { stories } from "@/content";

export default function StoriesPage() {
  return (
    <>
      <PageBanner
        title="Stories & Updates"
        breadcrumb="From the Field"
      />

      <Section spacing="lg" background="white">
        <Container size="lg">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {stories.map((story) => (
              <div key={story.title} className="group bg-surface border border-border-light/60 rounded-2xl overflow-hidden shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full cursor-pointer">
                  {story.image ? (
                    <div className="relative w-full h-56 overflow-hidden">
                      <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-secondary/10 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-300" />
                    </div>
                  ) : (
                    <div className="w-full h-56 bg-gradient-to-br from-primary/8 to-secondary/8 flex items-center justify-center">
                      <Tag size={36} className="text-primary/20" />
                    </div>
                  )}
                  <div className="p-6 md:p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${story.categoryColor} bg-opacity-10 border border-current`}>
                        {story.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-extrabold font-heading text-text-dark mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed flex-1 line-clamp-3 mb-6">
                      {story.excerpt}
                    </p>
                    <div className="flex items-center gap-5 text-xs text-text-muted pt-5 border-t border-border-light/60 font-semibold uppercase tracking-wider">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-primary" />
                        {story.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} className="text-primary" />
                        {story.readTime}
                      </span>
                    </div>
                  </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
