"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { HandHeart, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import { volunteerRoles } from "@/content";
import type { LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  GraduationCap: Users,
  HeartPulse: HandHeart,
  Megaphone: MapPin,
  Camera: Users,
  Users,
  HandHeart,
  MapPin,
};

export function VolunteerSection() {
  // Show first 3 roles on homepage
  const roles = volunteerRoles.slice(0, 3);

  return (
    <Section spacing="lg" background="secondary">
      <Container size="lg">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent-orange font-semibold text-sm uppercase tracking-wider">
              Join Our Team
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight">
              Your Time Can Change
              <span className="text-accent-orange"> Someone&apos;s Life</span>
            </h2>
            <p className="text-surface/85 text-lg leading-relaxed max-w-lg">
              Whether you have a few hours or a few months, there is a role for you.
              Join 2,000+ volunteers making a difference in communities across India.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/volunteer" tabIndex={-1}>
                <Button variant="accent" size="lg" className="gap-2">
                  <HandHeart size={22} />
                  Become a Volunteer
                </Button>
              </Link>
              <Link href="/volunteer" tabIndex={-1}>
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 border-surface/40 text-surface hover:bg-surface/10"
                >
                  Learn More <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Volunteer Role Cards */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {roles.map((role, i) => {
              const Icon = ICON_MAP[role.iconName] || Users;
              return (
                <motion.div
                  key={role.title}
                  className="bg-surface/10 backdrop-blur-sm border border-surface/20 rounded-[var(--radius-md)] p-5 flex items-center gap-4 hover:bg-surface/20 transition-colors cursor-pointer"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-full bg-accent-orange/20 flex items-center justify-center shrink-0">
                    <Icon size={24} className="text-accent-orange" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold font-heading text-surface">{role.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-surface/70 text-sm mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} /> {role.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} /> {role.commitment}
                      </span>
                    </div>
                  </div>
                  <ArrowRight size={20} className="text-surface/50 shrink-0" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
