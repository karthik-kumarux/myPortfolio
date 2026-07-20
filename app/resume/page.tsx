"use client";

import { ScrollReveal } from "../../components/ui/scroll-reveal";
import { GlassCard } from "../../components/ui/glass-card";
import { Badge } from "../../components/ui/badge";
import { TechChip } from "../../components/ui/tech-chip";
import { Button } from "../../components/ui/button";
import { skillGroups } from "../../lib/data/skills";
import { projects } from "../../lib/data/projects";
import { certifications } from "../../lib/data/certifications";
import { educationTimeline } from "../../lib/data/timeline";
import { siteConfig } from "../../lib/data/nav";
import { Download, FileText, ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="pt-28 pb-24">
      {/* Hero */}
      <ScrollReveal>
        <section className="section-container mb-16">
          <div className="max-w-3xl">
            <p className="text-sm font-mono text-accent mb-3">// Resume</p>
            <h1 className="text-display-lg font-bold tracking-tight text-white mb-6">
              Resume
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mb-6">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <Button variant="cta" size="md" href="/finalYear.pdf" download="">
                <Download size={16} />
                Download PDF
              </Button>
              <Button variant="outline" size="md" href="/contact">
                <Mail size={16} />
                Contact Me
              </Button>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Contact Info */}
      <ScrollReveal>
        <section className="section-container mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
            {[
              { icon: Mail, label: "Email", value: "karthikyt369@gmail.com" },
              { icon: Phone, label: "Phone", value: "+91-9959186924" },
              { icon: MapPin, label: "Location", value: "India" },
            ].map((item) => (
              <GlassCard key={item.label} padding="md" className="text-center">
                <item.icon size={18} className="text-accent mx-auto mb-2" />
                <p className="text-xs text-text-muted mb-1">{item.label}</p>
                <p className="text-sm text-text-primary font-medium">{item.value}</p>
              </GlassCard>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Education */}
      <ScrollReveal>
        <section className="section-container mb-16">
          <h2 className="text-display-sm text-text-primary mb-6 flex items-center gap-3">
            <FileText size={24} className="text-accent" />
            Education
          </h2>
          {educationTimeline.map((entry) => (
            <GlassCard key={entry.id} padding="lg" className="max-w-2xl mb-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-base font-semibold text-text-primary">{entry.title}</h3>
                <Badge variant="accent" size="sm">{entry.date}</Badge>
              </div>
              <p className="text-sm text-text-secondary">{entry.organization}</p>
            </GlassCard>
          ))}
        </section>
      </ScrollReveal>

      {/* Skills */}
      <ScrollReveal>
        <section className="section-container mb-16">
          <h2 className="text-display-sm text-text-primary mb-6">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group) => (
              <GlassCard key={group.category} padding="md">
                <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wide mb-3">
                  {group.label}
                </h3>
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
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Projects */}
      <ScrollReveal>
        <section className="section-container mb-16">
          <h2 className="text-display-sm text-text-primary mb-6">
            Project Experience
          </h2>
          <div className="space-y-4 max-w-3xl">
            {projects.map((project) => (
              <GlassCard key={project.slug} padding="lg">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: project.color }}
                    />
                    <h3 className="text-base font-semibold text-text-primary">
                      {project.title}
                    </h3>
                  </div>
                  <Badge variant="outline" size="sm">
                    {project.featured ? "Featured" : "Project"}
                  </Badge>
                </div>
                <p className="text-sm text-text-secondary mb-3">{project.tagline}</p>
                <p className="text-sm text-text-muted leading-relaxed">{project.description}</p>
              </GlassCard>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Certifications */}
      <ScrollReveal>
        <section className="section-container">
          <h2 className="text-display-sm text-text-primary mb-6">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
            {certifications.map((cert) => (
              <GlassCard key={cert.id} padding="lg">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-sm font-semibold text-text-primary">{cert.name}</h3>
                  <Badge variant="outline" size="sm">{cert.date}</Badge>
                </div>
                <p className="text-xs text-text-secondary mb-1">{cert.issuer}</p>
                <p className="text-xs text-text-muted">{cert.description}</p>
              </GlassCard>
            ))}
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
