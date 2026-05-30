import { BookOpen, Stethoscope, Utensils } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export function ImpactGrid() {
  const impacts = [
    {
      icon: BookOpen,
      price: "₹1,500 / month",
      output: "Provides a year's worth of educational kits and foundational learning for a girl child.",
      color: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      icon: Utensils,
      price: "₹2,500 / month",
      output: "Secures daily nutritious meals for a family of four facing severe food insecurity.",
      color: "bg-accent-orange/10 text-accent-orange border-accent-orange/20",
    },
    {
      icon: Stethoscope,
      price: "₹5,000 / month",
      output: "Funds critical medical interventions and life-saving treatments for three vulnerable patients.",
      color: "bg-accent-green/10 text-accent-green border-accent-green/20",
    },
  ];

  return (
    <Section spacing="lg" background="default" className="border-b border-border-light/40">
      <Container size="lg">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-text-dark mb-4">
            Where Your Money Goes
          </h2>
          <p className="text-lg text-text-muted">
            We believe in radical transparency. Here is exactly what your monthly commitment achieves on the ground.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impacts.map((impact, idx) => {
            const Icon = impact.icon;
            return (
              <div key={idx} className="bg-surface rounded-2xl p-8 border border-border-light shadow-soft flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 border ${impact.color}`}>
                  <Icon size={28} />
                </div>
                <div className="text-2xl font-bold font-heading text-text-dark mb-4">
                  {impact.price}
                </div>
                <p className="text-text-muted font-medium leading-relaxed">
                  {impact.output}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
