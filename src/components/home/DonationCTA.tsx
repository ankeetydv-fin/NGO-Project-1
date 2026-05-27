"use client";

import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function DonationCTA() {
  return (
    <section className="relative py-16 md:py-24 bg-primary overflow-hidden text-secondary">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-black/5 blur-3xl" />
      </div>

      <Container size="lg" className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="max-w-2xl">
            <p className="text-secondary/70 font-bold text-sm uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              Make a Difference
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold font-heading leading-tight">
              Make a Meaningful<br className="hidden md:inline" /> Donation Today
            </h2>
          </div>
          <div className="mt-6 md:mt-0 text-secondary/80 max-w-sm md:text-right font-medium">
            Transparent funding. Real impact. Every contribution moves a community forward.
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Education Aid Package", desc: "Supply textbooks, learning materials, and basic stationery kits directly to rural schools.", raised: "₹89,900", goal: "₹240,000", progress: "37%" },
            { title: "Healthcare Wellness", desc: "Distribute nutrition kits and basic healthcare support to remote families.", raised: "₹98,090", goal: "₹260,000", progress: "37%" },
            { title: "Grassroots Sports Gear", desc: "Sponsoring sports gear and athletic supplies to promising local children.", raised: "₹70,980", goal: "₹220,000", progress: "32%" },
          ].map((item, i) => (
            <div key={i} className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-8 flex flex-col hover:bg-white/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-2xl font-bold font-heading mb-3 text-secondary">{item.title}</h3>
              <p className="text-secondary/80 text-sm mb-8 leading-relaxed">
                {item.desc}
              </p>
              <div className="mt-auto">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider mb-2">
                  <span className="text-secondary/70">Raised<br /><span className="text-secondary text-lg font-heading">{item.raised}</span></span>
                  <span className="text-secondary/70 text-right">Goal<br /><span className="text-secondary text-lg font-heading">{item.goal}</span></span>
                </div>
                <div className="h-2 w-full bg-secondary/10 rounded-full mb-6 overflow-hidden">
                  <div className="h-full bg-secondary rounded-full relative overflow-hidden" style={{ width: item.progress }}>
                    <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite]"></div>
                  </div>
                </div>
                <Link href="/donate" tabIndex={-1}>
                  <Button variant="outline" className="w-full sm:w-auto rounded-xl border-secondary/30 text-secondary hover:bg-secondary hover:text-primary hover:border-secondary transition-all font-bold">
                    Fund Program
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
