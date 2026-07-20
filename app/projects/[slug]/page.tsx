"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { ScrollReveal } from "../../../components/ui/scroll-reveal";
import { GlassCard } from "../../../components/ui/glass-card";
import { Badge } from "../../../components/ui/badge";
import { TechChip } from "../../../components/ui/tech-chip";
import { Button } from "../../../components/ui/button";
import { projects, getProjectBySlug } from "../../../lib/data/projects";
import {
  ArrowLeft,
  ExternalLink,
  Lightbulb,
  Wrench,
  Shield,
  ChevronRight,
  GitBranch,
} from "lucide-react";
import Link from "next/link";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-28 pb-24">
      {/* Back link */}
      <ScrollReveal>
        <section className="section-container mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
          >
            <ArrowLeft size={16} />
            Back to all projects
          </Link>
        </section>
      </ScrollReveal>

      {/* Hero */}
      <ScrollReveal>
        <section className="section-container mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-4 h-4 rounded-full flex-shrink-0"
              style={{ backgroundColor: project.color }}
            />
            <Badge variant="accent" size="sm">
              {project.featured ? "Featured Project" : "Project"}
            </Badge>
          </div>
          <h1 className="text-display-lg font-bold tracking-tight text-white mb-4 max-w-3xl">
            {project.title}
          </h1>
          <p className="text-lg text-text-secondary mb-4 max-w-2xl leading-relaxed">
            {project.tagline}
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {project.links.map((link) => (
              <Button
                key={link.label}
                variant={link.icon === "github" ? "outline" : "primary"}
                size="sm"
                href={link.url}
                external
              >
                <ExternalLink size={14} />
                {link.label}
              </Button>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Overview */}
      <ScrollReveal>
        <section className="section-container mb-16">
          <h2 className="text-display-sm text-text-primary mb-4">Overview</h2>
          <p className="text-text-secondary leading-relaxed max-w-3xl">
            {project.longDescription}
          </p>
        </section>
      </ScrollReveal>

      {/* Problem */}
      <ScrollReveal>
        <section className="section-container mb-16">
          <h2 className="text-display-sm text-text-primary mb-4">Problem</h2>
          <GlassCard padding="lg" className="max-w-3xl">
            <div className="flex items-start gap-3">
              <Lightbulb size={20} className="text-cta flex-shrink-0 mt-0.5" />
              <p className="text-text-secondary leading-relaxed">
                {project.problem}
              </p>
            </div>
          </GlassCard>
        </section>
      </ScrollReveal>

      {/* Architecture */}
      <ScrollReveal>
        <section className="section-container mb-16">
          <h2 className="text-display-sm text-text-primary mb-6">
            Architecture
          </h2>
          <div className="space-y-4 max-w-3xl">
            {project.architecture.map((step, i) => (
              <GlassCard key={i} padding="lg" className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent-muted border border-accent/20 flex items-center justify-center text-sm font-mono text-accent font-semibold">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary mb-1">
                      {step.label}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                {/* Connector line */}
                {i < project.architecture.length - 1 && (
                  <div className="absolute left-10 top-14 bottom-0 w-px bg-border" />
                )}
              </GlassCard>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Tech Stack */}
      <ScrollReveal>
        <section className="section-container mb-16">
          <h2 className="text-display-sm text-text-primary mb-4">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2 max-w-3xl">
            {project.techStack.map((tech) => (
              <TechChip key={tech} label={tech} active />
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Engineering Decisions */}
      <ScrollReveal>
        <section className="section-container mb-16">
          <h2 className="text-display-sm text-text-primary mb-6">
            Engineering Decisions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
            {project.engineeringDecisions.map((decision, i) => (
              <GlassCard key={i} padding="lg">
                <div className="flex items-start gap-3 mb-3">
                  <Wrench size={18} className="text-cta flex-shrink-0 mt-0.5" />
                  <h3 className="text-sm font-semibold text-text-primary">
                    {decision.topic}
                  </h3>
                </div>
                <p className="text-sm text-accent font-medium mb-2">
                  Decision: {decision.decision}
                </p>
                <p className="text-xs text-text-muted leading-relaxed">
                  {decision.rationale}
                </p>
              </GlassCard>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Challenges */}
      <ScrollReveal>
        <section className="section-container mb-16">
          <h2 className="text-display-sm text-text-primary mb-6">
            Challenges & Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
            {project.challenges.map((item, i) => (
              <GlassCard key={i} padding="lg">
                <div className="flex items-start gap-3 mb-2">
                  <Shield size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <h3 className="text-sm font-semibold text-text-primary">
                    {item.challenge}
                  </h3>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  <span className="text-accent font-medium">Solution: </span>
                  {item.solution}
                </p>
              </GlassCard>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Roadmap */}
      <ScrollReveal>
        <section className="section-container mb-16">
          <h2 className="text-display-sm text-text-primary mb-6">
            Future Roadmap
          </h2>
          <div className="space-y-3 max-w-2xl">
            {project.roadmap.map((item, i) => (
              <GlassCard key={i} padding="md">
                <div className="flex items-center gap-3">
                  <ChevronRight size={16} className="text-accent flex-shrink-0" />
                  <span className="text-sm text-text-secondary">{item}</span>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <section className="section-container">
          <GlassCard elevated padding="lg" className="text-center max-w-xl mx-auto">
            <p className="text-sm font-mono text-cta mb-3">
              // Explore the code
            </p>
            <h2 className="text-display-sm text-text-primary mb-4">
              See the implementation
            </h2>
            <p className="text-text-secondary mb-8 text-sm leading-relaxed">
              This project is open source. Check out the repository for
              installation instructions, architecture details, and
              contribution guidelines.
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              {project.links.map((link) => (
                <Button
                  key={link.label}
                  variant="cta"
                  size="md"
                  href={link.url}
                  external
                >
                  <GitBranch size={16} />
                  {link.label}
                </Button>
              ))}
              <Link href="/projects">
                <Button variant="ghost" size="md">
                  <ArrowLeft size={16} />
                  All Projects
                </Button>
              </Link>
            </div>
          </GlassCard>
        </section>
      </ScrollReveal>
    </div>
  );
}
