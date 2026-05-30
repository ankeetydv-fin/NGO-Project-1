import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export function BeneficiaryStory() {
  return (
    <Section spacing="lg" background="white" className="border-b border-border-light/40">
      <Container size="lg">
        <div className="bg-bg-off-white rounded-3xl overflow-hidden border border-border-light shadow-soft">
          <div className="grid md:grid-cols-2">
            <div className="relative h-80 md:h-auto">
              {/* Note: In a real project, replace with actual beneficiary image */}
              <Image
                src="/images/placeholder.svg"
                alt="Nilesh's Journey"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-bold font-heading text-2xl">Nilesh&apos;s Journey</p>
                <p className="text-white/80 text-sm tracking-widest uppercase font-bold mt-1">
                  Rescued 2024
                </p>
              </div>
            </div>
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <span className="text-primary text-6xl font-heading leading-none mb-4">“</span>
              <p className="text-xl md:text-2xl font-heading text-text-dark leading-relaxed mb-8 italic">
                I used to walk three hours just to find clean water for my family. Now, I go to school. My dream is to become a teacher so I can give back what was given to me.
              </p>
              <div className="mt-auto">
                <p className="text-text-muted font-medium text-sm leading-relaxed">
                  Your donation doesn&apos;t just buy supplies. It buys time, safety, and a future. When you choose to give, you rewrite the story for someone like Nilesh.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
