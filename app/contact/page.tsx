"use client";

import { ScrollReveal } from "../../components/ui/scroll-reveal";
import { GlassCard } from "../../components/ui/glass-card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { MagneticButton } from "../../components/ui/magnetic-button";
import { Mail, Phone, Link2, Send, ArrowRight } from "lucide-react";
import Link from "next/link";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "karthikyt369@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=karthikyt369@gmail.com",
    color: "#3B8BFF",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-9959186924",
    href: "tel:+919959186924",
    color: "#F5A623",
  },
  {
    icon: Link2,
    label: "LinkedIn",
    value: "linkedin.com/in/karthik-kumar-minuga",
    href: "https://linkedin.com/in/karthik-kumar-minuga",
    color: "#10B981",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24">
      {/* Hero */}
      <ScrollReveal>
        <section className="section-container mb-16">
          <div className="max-w-3xl">
            <p className="text-sm font-mono text-accent mb-3">// Contact</p>
            <h1 className="text-display-lg font-bold tracking-tight text-white mb-6">
              Let's build
              <br />
              <span className="text-zinc-400">something secure</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              I'm currently pursuing my B.Tech and open to internship and
              full-time opportunities in software engineering, security
              automation, and AI infrastructure. Let's talk about how I
              can contribute to your team.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Contact Methods */}
      <ScrollReveal>
        <section className="section-container mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target={method.label === "LinkedIn" ? "_blank" : undefined}
                rel={
                  method.label === "LinkedIn"
                    ? "noopener noreferrer"
                    : undefined
                }
                className="block group"
              >
                <GlassCard
                  padding="lg"
                  className="text-center h-full hover:border-border-strong"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{
                      backgroundColor: `${method.color}15`,
                      border: `1px solid ${method.color}30`,
                    }}
                  >
                    <method.icon
                      size={20}
                      style={{ color: method.color }}
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-text-primary mb-2">
                    {method.label}
                  </h3>
                  <p className="text-xs text-text-muted group-hover:text-accent transition-colors break-all">
                    {method.value}
                  </p>
                </GlassCard>
              </a>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Message CTA */}
      <ScrollReveal>
        <section className="section-container mb-16">
          <GlassCard elevated padding="lg" className="max-w-xl mx-auto text-center">
            <Send size={28} className="text-accent mx-auto mb-4" />
            <h2 className="text-display-sm text-text-primary mb-4">
              Prefer a direct message?
            </h2>
            <p className="text-text-secondary mb-8 text-sm leading-relaxed">
              Shoot me an email — I typically respond within 24 hours.
              Happy to discuss projects, opportunities, or security
              engineering in general.
            </p>
            <MagneticButton>
              <Button
                variant="cta"
                size="lg"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=karthikyt369@gmail.com"
              >
                <Mail size={18} />
                Send Email
                <ArrowRight size={18} />
              </Button>
            </MagneticButton>
          </GlassCard>
        </section>
      </ScrollReveal>

      {/* Quick Links */}
      <ScrollReveal>
        <section className="section-container">
          <p className="text-sm font-mono text-accent mb-6 text-center">
            // Explore more
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button variant="outline" size="sm" href="/projects">
              <ArrowRight size={14} />
              View Projects
            </Button>
            <Button variant="outline" size="sm" href="/resume">
              <ArrowRight size={14} />
              View Resume
            </Button>
            <Button variant="outline" size="sm" href="/timeline">
              <ArrowRight size={14} />
              Engineering Timeline
            </Button>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
