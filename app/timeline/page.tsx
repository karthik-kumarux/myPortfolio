"use client";

import { ScrollReveal } from "../../components/ui/scroll-reveal";
import { GlassCard } from "../../components/ui/glass-card";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { timelineEntries } from "../../lib/data/timeline";
import type { IconComponent } from "../../types";
import { GraduationCap, BookOpen, Award, ArrowRight, Download } from "lucide-react";

const typeIcons: Record<string, IconComponent> = {
  education: GraduationCap,
  certification: BookOpen,
  achievement: Award,
  experience: Award,
};

const typeColors: Record<string, string> = {
  education: "#3B8BFF",
  certification: "#F5A623",
  achievement: "#10B981",
  experience: "#10B981",
};

export default function TimelinePage() {
  return (
    <div className="pt-28 pb-24">
      <ScrollReveal>
        <section className="section-container mb-16">
          <div className="max-w-3xl">
            <p className="text-sm font-mono text-accent mb-3">// Journey</p>
            <h1 className="text-display-lg font-bold tracking-tight text-white mb-6">
              Engineering Timeline
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              Education, certifications, achievements, and leadership — the
              milestones that shaped my engineering journey.
            </p>
          </div>
        </section>
      </ScrollReveal>

      <section className="section-container">
        <div className="relative max-w-3xl">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {timelineEntries.map((entry, index) => {
              const Icon = typeIcons[entry.type] || Award;
              const color = typeColors[entry.type] || "#3B8BFF";

              return (
                <ScrollReveal key={entry.id} delay={index * 0.05}>
                  <div className="flex gap-6">
                    <div
                      className="hidden md:flex flex-shrink-0 w-10 h-10 rounded-full bg-surface border border-border items-center justify-center relative z-10"
                      style={{ borderColor: color }}
                    >
                      <Icon size={16} style={{ color }} />
                    </div>

                    <GlassCard padding="lg" className="flex-1">
                      <div className="flex items-start justify-between mb-2 gap-4">
                        <h3 className="text-base font-semibold text-text-primary">
                          {entry.title}
                        </h3>
                        <Badge variant="outline" size="sm" className="flex-shrink-0">
                          {entry.date}
                        </Badge>
                      </div>
                      <p className="text-sm text-text-secondary mb-2">
                        {entry.organization}
                      </p>
                      <p className="text-sm text-text-muted leading-relaxed">
                        {entry.description}
                      </p>
                    </GlassCard>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <ScrollReveal>
        <section className="section-container pt-16">
          <GlassCard elevated padding="lg" className="text-center max-w-xl mx-auto">
            <p className="text-sm font-mono text-cta mb-3">// Resume</p>
            <h2 className="text-display-sm text-text-primary mb-4">
              Download my resume
            </h2>
            <p className="text-text-secondary mb-8 text-sm leading-relaxed">
              Full resume with detailed project experience, skills matrix, and
              contact information.
            </p>
            <div className="flex items-center justify-center gap-3">
              <Button variant="cta" size="md" href="/resume">
                <Download size={16} />
                View Resume
              </Button>
              <Button variant="ghost" size="md" href="/contact">
                Contact Me
                <ArrowRight size={16} />
              </Button>
            </div>
          </GlassCard>
        </section>
      </ScrollReveal>
    </div>
  );
}
