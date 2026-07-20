"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "../../components/ui/scroll-reveal";
import { GlassCard } from "../../components/ui/glass-card";
import { Badge } from "../../components/ui/badge";
import { TechChip } from "../../components/ui/tech-chip";
import { Button } from "../../components/ui/button";
import { projects } from "../../lib/data/projects";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

const allTech = Array.from(new Set(projects.flatMap((p) => p.techStack))).sort();

export default function ProjectsPage() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const filtered = selectedTech
    ? projects.filter((p) => p.techStack.includes(selectedTech))
    : projects;

  return (
    <div className="pt-28 pb-24">
      {/* Hero */}
      <ScrollReveal>
        <section className="section-container mb-12">
          <div className="max-w-3xl">
            <p className="text-sm font-mono text-accent mb-3">
              // Engineering Portfolio
            </p>
            <h1 className="text-display-lg font-bold tracking-tight text-white mb-6">Projects</h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              Five production-grade projects across vulnerability assessment,
              deception technology, AI-powered code analysis, web security
              auditing, and computer vision.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Tech Filter */}
      <ScrollReveal>
        <section className="section-container mb-12">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTech(null)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                !selectedTech
                  ? "border-accent/40 bg-accent-muted text-accent"
                  : "border-border bg-surface text-text-secondary hover:border-border-strong"
              }`}
            >
              All
            </button>
            {allTech.map((tech) => (
              <button
                key={tech}
                onClick={() =>
                  setSelectedTech(tech === selectedTech ? null : tech)
                }
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors font-mono ${
                  selectedTech === tech
                    ? "border-accent/40 bg-accent-muted text-accent"
                    : "border-border bg-surface text-text-secondary hover:border-border-strong"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Project Grid */}
      <section className="section-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTech || "all"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filtered.map((project, index) => (
              <ScrollReveal key={project.slug} delay={index * 0.05}>
                <Link href={`/projects/${project.slug}`}>
                  <GlassCard
                    padding="lg"
                    className="h-full group cursor-pointer"
                  >
                    {/* Color bar */}
                    <div
                      className="w-full h-1 rounded-full mb-4"
                      style={{ backgroundColor: project.color }}
                    />

                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-display-sm text-text-primary group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <Badge variant="accent" size="sm">
                          Featured
                        </Badge>
                      )}
                    </div>

                    <p className="text-xs text-text-secondary uppercase tracking-wide font-semibold mb-3">
                      {project.tagline}
                    </p>

                    <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0, 5).map((tech) => (
                        <TechChip
                          key={tech}
                          label={tech}
                          size="sm"
                          active={selectedTech === tech}
                        />
                      ))}
                      {project.techStack.length > 5 && (
                        <TechChip
                          label={`+${project.techStack.length - 5}`}
                          size="sm"
                        />
                      )}
                    </div>

                    <div className="flex items-center gap-3 pt-3 border-t border-border">
                      <span className="text-xs text-accent flex items-center gap-1">
                        View details <ArrowRight size={12} />
                      </span>
                      {project.links.map((link) => (
                        <span
                          key={link.label}
                          className="text-xs text-text-muted flex items-center gap-1"
                        >
                          <ExternalLink size={12} />
                          {link.icon === "github" ? "GitHub" : link.label}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </Link>
              </ScrollReveal>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
}
