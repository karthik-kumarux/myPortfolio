"use client";

import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { MagneticButton } from "../components/ui/magnetic-button";
import { GlassCard } from "../components/ui/glass-card";
import { SpotlightCard } from "../components/ui/spotlight-card";
import { TiltCard } from "../components/ui/tilt-card";
import { TechChip } from "../components/ui/tech-chip";
import { Badge } from "../components/ui/badge";
import { ScrollReveal } from "../components/ui/scroll-reveal";
import { TextReveal } from "../components/ui/text-reveal";
import { StatusDot } from "../components/ui/status-dot";
import { SkillsMarquee } from "../components/ui/skills-marquee";
import { ParallaxElement } from "../components/ui/parallax-element";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { HeroScene } from "../components/effects/hero-scene";
import { featuredProjects } from "../lib/data/projects";
import { siteConfig } from "../lib/data/nav";
import { ArrowRight, Download, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="pb-24">
      {/* ── Hero Section ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <HeroScene />

        <div className="section-container w-full pt-28 pb-16">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 2.2 }}
            >
              <Badge variant="accent" size="sm" className="mb-6">
                {siteConfig.title}
              </Badge>

              <h1 className="mb-6 text-balance">
                <TextReveal
                  text="I engineer secure systems"
                  className="text-display-xl block font-bold tracking-tight text-white"
                  delay={2.4}
                />
                <TextReveal
                  text="that defend at scale"
                  className="text-display-xl block font-bold tracking-tight text-zinc-400"
                  delay={2.7}
                />
              </h1>

              <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
                {siteConfig.tagline} — vulnerability assessment platforms,
                deception networks, and AI-powered code analysis engines.
              </p>

              <div className="flex items-center justify-center gap-4 flex-wrap">
                <MagneticButton>
                  <Button variant="cta" size="lg" href="/projects">
                    View Projects
                    <ArrowRight size={18} />
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button variant="secondary" size="lg" href="/resume">
                    <Download size={18} />
                    Download Resume
                  </Button>
                </MagneticButton>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border border-border flex items-start justify-center p-1.5">
            <motion.div
              className="w-1 h-2 rounded-full bg-accent"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* ── Skills Marquee ── */}
      <section className="py-12">
        <SkillsMarquee />
      </section>

      {/* ── About Teaser ── */}
      <ScrollReveal>
        <section className="section-container py-16">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-mono text-accent mb-3">// About</p>
            <h2 className="text-display-md text-text-primary mb-6">
              Software Engineer & Security Builder
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              I'm a B.Tech student at MITS specializing in AI & ML,
              building production security automation tools. 240 hours of
              professional cybersecurity training. Projects spanning
              vulnerability assessment, deception technology, AI-powered code
              analysis, and computer vision for infrastructure inspection.
            </p>
            <Button variant="outline" size="lg" href="/about">
              More about me
              <ArrowRight size={16} />
            </Button>
          </div>
        </section>
      </ScrollReveal>

      {/* ── Experience ── */}
      <ExperienceSection />

      {/* ── Featured Projects ── */}
      <section className="section-container py-16">
        <ScrollReveal>
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-sm font-mono text-accent mb-2">
                // Featured Engineering
              </p>
              <h2 className="text-display-md text-text-primary">
                Featured Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-sm text-text-secondary hover:text-accent flex items-center gap-1 transition-colors"
            >
              View all <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <ParallaxElement key={project.slug} offset={index % 2 === 0 ? 40 : 80}>
                <Link href={`/projects/${project.slug}`}>
                  <TiltCard>
                    <SpotlightCard padding="lg" className="h-full cursor-pointer">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <motion.div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: project.color }}
                            whileHover={{ scale: 1.5 }}
                            transition={{ duration: 0.2 }}
                          />
                          <h3 className="text-display-sm text-text-primary group-hover:text-accent transition-colors">
                            {project.title}
                          </h3>
                        </div>
                        <Badge variant="default" size="sm">
                          Featured
                        </Badge>
                      </div>
                      <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <TechChip key={tech} label={tech} size="sm" />
                        ))}
                        {project.techStack.length > 4 && (
                          <TechChip
                            label={`+${project.techStack.length - 4}`}
                            size="sm"
                            active
                          />
                        )}
                      </div>
                    </SpotlightCard>
                  </TiltCard>
                </Link>
              </ParallaxElement>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── CTA Section ── */}
      <ScrollReveal>
        <section className="section-container py-16">
          <GlassCard elevated padding="lg" className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-mono text-cta mb-3">// Let's build</p>
            <h2 className="text-display-sm text-text-primary mb-4">
              Looking for a security-minded engineer?
            </h2>
            <p className="text-text-secondary mb-8 leading-relaxed">
              I'm open to internship and full-time opportunities in software
              engineering, security automation, and AI infrastructure.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Button variant="cta" size="lg" href="/contact">
                Get in touch
                <ArrowRight size={18} />
              </Button>
              <Button variant="secondary" size="lg" href="https://github.com/karthik-kumarux" external>
                <ExternalLink size={18} />
                GitHub
              </Button>
            </div>
          </GlassCard>
        </section>
      </ScrollReveal>
    </div>
  );
}
