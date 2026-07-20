"use client";

import { useState } from "react";
import { ScrollReveal } from "../ui/scroll-reveal";
import { Button } from "../ui/button";
import { TimelineNode } from "../experience/TimelineNode";
import { experiences } from "../../lib/data/experiences";
import { BriefcaseBusiness, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="section-container py-16">
      <ScrollReveal>
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-sm font-mono text-accent mb-2">
              // Professional Experience
            </p>
            <h2 className="text-display-md text-text-primary flex items-center gap-3">
              <BriefcaseBusiness size={28} className="text-accent" />
              Experience
            </h2>
          </div>
          <Link
            href="/experience"
            className="text-sm text-text-secondary hover:text-accent flex items-center gap-1 transition-colors"
          >
            View all <ArrowRight size={14} />
          </Link>
        </div>
      </ScrollReveal>

      <div className="relative max-w-3xl">
        {experiences.slice(0, 3).map((experience, index) => (
          <ScrollReveal key={experience.id} delay={index * 0.08}>
            <TimelineNode
              experience={experience}
              index={index}
              isExpanded={expandedId === experience.id}
              onToggle={() => handleToggle(experience.id)}
              isLast={index === Math.min(experiences.length, 3) - 1}
            />
          </ScrollReveal>
        ))}
      </div>

      {experiences.length > 3 && (
        <ScrollReveal>
          <div className="text-center mt-4">
            <Link href="/experience">
              <Button variant="outline" size="md">
                View All Experience
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      )}
    </section>
  );
}
