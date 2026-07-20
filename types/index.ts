// ─── Project ──────────────────────────────────────────────
export interface ProjectLink {
  label: string;
  url: string;
  icon?: "github" | "live" | "docs" | "npm";
}

export interface ArchitectureStep {
  label: string;
  description: string;
}

export interface EngineeringDecision {
  topic: string;
  decision: string;
  rationale: string;
}

export interface ProjectChallenge {
  challenge: string;
  solution: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  problem: string;
  techStack: string[];
  architecture: ArchitectureStep[];
  engineeringDecisions: EngineeringDecision[];
  challenges: ProjectChallenge[];
  roadmap: string[];
  links: ProjectLink[];
  featured: boolean;
  color: string; // accent color for project card gradient
}

// ─── Skill ────────────────────────────────────────────────
export type SkillCategory =
  | "languages"
  | "backend"
  | "frontend"
  | "ai-ml"
  | "security"
  | "devops"
  | "databases"
  | "tools";

export interface Skill {
  name: string;
  category: SkillCategory;
  proficiency: number; // 1–10
  icon?: string;
}

export interface SkillGroup {
  category: SkillCategory;
  label: string;
  skills: Skill[];
}

// ─── Timeline ─────────────────────────────────────────────
export interface TimelineEntry {
  id: string;
  date: string;
  title: string;
  organization: string;
  description: string;
  type: "education" | "certification" | "achievement" | "experience";
  links?: ProjectLink[];
}

// ─── Certification ────────────────────────────────────────
export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  description: string;
}

// ─── Navigation ───────────────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

// ─── Social ───────────────────────────────────────────────
export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Lucide icon name
}

// ─── UI ───────────────────────────────────────────────────
export type IconComponent = React.ComponentType<{
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}>;

// ─── Experience ───────────────────────────────────────────
export interface Experience {
  id: string;
  title: string;
  organization: string;
  duration: string;
  status: "completed" | "current";
  summary: string;
  skills: string[];
  color: string;
  logoUrl: string;
}

// ─── Resume ───────────────────────────────────────────────
export interface ResumeSection {
  title: string;
  content: ResumeEntry[];
}

export interface ResumeEntry {
  heading: string;
  subheading?: string;
  date?: string;
  details: string[];
}
