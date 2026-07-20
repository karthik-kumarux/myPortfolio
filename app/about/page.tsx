"use client";

import { ScrollReveal } from "../../components/ui/scroll-reveal";
import { GlassCard } from "../../components/ui/glass-card";
import { Badge } from "../../components/ui/badge";
import { TechChip } from "../../components/ui/tech-chip";
import { Button } from "../../components/ui/button";
import { skillGroups } from "../../lib/data/skills";
import { certifications } from "../../lib/data/certifications";
import { achievementTimeline, educationTimeline } from "../../lib/data/timeline";
import type { IconComponent } from "../../types";
import {
  GraduationCap,
  Award,
  Shield,
  Code2,
  Layers,
  Database,
  Cloud,
  Cpu,
  BookOpen,
  ArrowRight,
  Download,
} from "lucide-react";

const categoryIcons: Record<string, IconComponent> = {
  languages: Code2,
  backend: Layers,
  frontend: Code2,
  "ai-ml": Cpu,
  security: Shield,
  devops: Cloud,
  databases: Database,
  tools: Shield,
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24">
      {/* ── Hero ── */}
      <ScrollReveal>
        <section className="section-container mb-20">
          <div className="max-w-3xl">
            <p className="text-sm font-mono text-accent mb-3">
              // Software & Cybersecurity Engineer
            </p>
            <h1 className="text-display-lg font-bold tracking-tight text-white mb-6">
              About Me
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              I'm Karthik Kumar — a B.Tech student at MITS specializing in
              AI & ML, with 240+ hours of professional cybersecurity
              training. I build production security automation tools that
              engineers actually use — vulnerability assessment platforms,
              deception networks, and AI-powered code analysis engines.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* ── Education ── */}
      <ScrollReveal>
        <section className="section-container mb-20">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-accent" size={24} />
            <h2 className="text-display-sm text-text-primary">Education</h2>
          </div>
          {educationTimeline.map((entry) => (
            <GlassCard key={entry.id} padding="lg" className="max-w-2xl">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">
                    {entry.title}
                  </h3>
                  <p className="text-sm text-text-secondary mt-1">
                    {entry.organization}
                  </p>
                </div>
                <Badge variant="accent" size="sm">
                  {entry.date}
                </Badge>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                {entry.description}
              </p>
            </GlassCard>
          ))}
        </section>
      </ScrollReveal>

      {/* ── Technical Skills ── */}
      <ScrollReveal>
        <section className="section-container mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Code2 className="text-accent" size={24} />
            <h2 className="text-display-sm text-text-primary">
              Engineering Stack
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group) => {
              const Icon = categoryIcons[group.category] || Code2;
              return (
                <GlassCard key={group.category} padding="lg">
                  <div className="flex items-center gap-2 mb-4">
                    <Icon size={18} className="text-accent" />
                    <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wide">
                      {group.label}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <TechChip
                        key={skill.name}
                        label={skill.name}
                        size="sm"
                        active={skill.proficiency >= 8}
                      />
                    ))}
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </section>
      </ScrollReveal>

      {/* ── Certifications ── */}
      <ScrollReveal>
        <section className="section-container mb-20">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="text-accent" size={24} />
            <h2 className="text-display-sm text-text-primary">
              Certifications
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <GlassCard key={cert.id} padding="lg">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-base font-semibold text-text-primary">
                    {cert.name}
                  </h3>
                  <Badge variant="outline" size="sm">
                    {cert.date}
                  </Badge>
                </div>
                <p className="text-sm text-text-secondary mb-1">
                  {cert.issuer}
                </p>
                <p className="text-sm text-text-muted leading-relaxed">
                  {cert.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ── Achievements & Leadership ── */}
      <ScrollReveal>
        <section className="section-container mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Award className="text-accent" size={24} />
            <h2 className="text-display-sm text-text-primary">
              Achievements & Leadership
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievementTimeline.map((entry) => (
              <GlassCard key={entry.id} padding="lg" hover={false}>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 w-2 h-2 rounded-full bg-cta flex-shrink-0" />
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-sm font-semibold text-text-primary">
                        {entry.title}
                      </h3>
                      <Badge variant="outline" size="sm">
                        {entry.date}
                      </Badge>
                    </div>
                    <p className="text-xs text-text-secondary mb-1">
                      {entry.organization}
                    </p>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {entry.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ── CTA ── */}
      <ScrollReveal>
        <section className="section-container">
          <GlassCard elevated padding="lg" className="text-center max-w-xl mx-auto">
            <p className="text-sm font-mono text-cta mb-3">
              // What I've built
            </p>
            <h2 className="text-display-sm text-text-primary mb-4">
              See my engineering work
            </h2>
            <p className="text-text-secondary mb-8 text-sm leading-relaxed">
              Five production projects spanning vulnerability assessment,
              deception technology, AI code analysis, and computer vision.
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Button variant="cta" size="md" href="/projects">
                View Projects
                <ArrowRight size={16} />
              </Button>
              <Button variant="ghost" size="md" href="/resume">
                <Download size={16} />
                Resume
              </Button>
            </div>
          </GlassCard>
        </section>
      </ScrollReveal>
    </div>
  );
}
