import { NavItem, SocialLink } from "../../types";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Timeline", href: "/timeline" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/karthik-kumarux",
    icon: "github",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/karthik-kumar-minuga",
    icon: "linkedin",
  },
  {
    platform: "Email",
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=karthikyt369@gmail.com",
    icon: "mail",
  },
];

export const siteConfig = {
  name: "Karthik Kumar",
  title: "Software & Cybersecurity Engineer",
  tagline: "I engineer secure systems and build security automation tooling.",
  description:
    "Software engineer specializing in secure systems development, building automated security tooling — vulnerability assessment platforms, deception systems, and web security auditing tools.",
  url: "https://karthikkumar.dev",
  ogImage: "/og-image.png",
};
