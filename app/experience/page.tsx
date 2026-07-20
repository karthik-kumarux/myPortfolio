"use client";

import { useState } from "react";
import { ScrollReveal } from "../../components/ui/scroll-reveal";
import { GlassCard } from "../../components/ui/glass-card";
import { Button } from "../../components/ui/button";
import { TimelineNode } from "../../components/experience/TimelineNode";
import { experiences } from "../../lib/data/experiences";
import { BriefcaseBusiness, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ExperiencePage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="pt-28 pb-24">
      {/* Hero */}
      <ScrollReveal>
        <section className="section-container mb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>
          <div className="max-w-3xl">
            <p className="text-sm font-mono text-accent mb-3">
              // Professional Journey
            </p>
            <h1 className="text-display-lg font-bold tracking-tight text-white mb-6">
              Experience
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              Internships and professional roles spanning machine learning,
              cybersecurity, Android development, and AI engineering.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Timeline */}
      <section className="section-container">
        <div className="relative max-w-3xl">
          {/* Vertical line behind all nodes */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border hidden md:block" />

          {experiences.map((experience, index) => (
            <ScrollReveal key={experience.id} delay={index * 0.08}>
              <TimelineNode
                experience={experience}
                index={index}
                isExpanded={expandedId === experience.id}
                onToggle={() => handleToggle(experience.id)}
                isLast={index === experiences.length - 1}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <ScrollReveal>
        <section className="section-container pt-16">
          <GlassCard elevated padding="lg" className="text-center max-w-xl mx-auto">
            <p className="text-sm font-mono text-cta mb-3">
              // Open to opportunities
            </p>
            <h2 className="text-display-sm text-text-primary mb-4">
              Let's work together
            </h2>
            <p className="text-text-secondary mb-8 text-sm leading-relaxed">
              I'm actively seeking internship and full-time opportunities
              where I can apply my security and AI engineering skills.
            </p>
            <div className="flex items-center justify-center gap-3">
              <Button variant="cta" size="md" href="/contact">
                <ArrowRight size={16} />
                Get in Touch
              </Button>
              <Button variant="outline" size="md" href="/resume">
                <BriefcaseBusiness size={16} />
                View Resume
              </Button>
            </div>
          </GlassCard>
        </section>
      </ScrollReveal>
    </div>
  );
}
