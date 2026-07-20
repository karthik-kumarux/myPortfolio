import Link from "next/link";
import { ExternalLink, Link2, Mail, Heart } from "lucide-react";
import { socialLinks } from "../../lib/data/nav";
import { navItems } from "../../lib/data/nav";
import type { IconComponent } from "../../types";

const iconMap: Record<string, IconComponent> = {
  github: ExternalLink,
  linkedin: Link2,
  mail: Mail,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center text-lg font-semibold tracking-tight text-white hover:text-zinc-300 transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
              <span>M Karthik Kumar</span>
            </Link>
            <p className="mt-3 text-sm text-text-muted max-w-xs leading-relaxed">
              Software & Cybersecurity Engineer. Building security automation
              tooling and secure systems.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-lg border border-border bg-surface text-text-secondary hover:text-accent hover:border-accent/30 hover:bg-accent-muted transition-all duration-200"
                    aria-label={link.platform}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
            <p className="mt-6 text-sm text-text-muted">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=karthikyt369@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                karthikyt369@gmail.com
              </a>
            </p>
            <p className="text-sm text-text-muted">+91-9959186924</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; {currentYear} Karthik Kumar Minuga. All rights reserved.
          </p>
          <p className="text-xs text-text-muted flex items-center gap-1">
            Built with <Heart size={12} className="text-accent" /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
