export interface Project {
  id: string;
  title: string;
  storytellingMode: 'ai-ml-systems' | 'security-orchestration' | 'developer-tooling' | 'computer-vision' | 'systems-architecture';
  summary: string;
  tags: string[];

  // Evidence-backed content
  context?: {
    problem: string;
    constraints?: string[];
  };

  approach?: {
    architecture?: string;
    keyDecisions?: string[];
    technologies: string[];
  };

  outcomes?: {
    artifacts?: string[];
    metrics?: Array<{
      label: string;
      value: string;
      verified: boolean;
      scope?: string;
    }>;
    limitations?: string[];
  };

  links?: {
    github?: string;
    demo?: string;
    docs?: string;
  };

  // Content integrity
  evidenceStatus: 'verified' | 'scoped' | 'gated' | 'excluded';
  evidenceNotes?: string;
}

export const projects: Project[] = [
  {
    id: 'vaptaas',
    title: 'VAPTaaS',
    storytellingMode: 'security-orchestration',
    summary: 'Asynchronous vulnerability assessment pipeline orchestrating Nmap, Nikto, and OWASP ZAP with AI-powered remediation guidance.',
    tags: ['Security Automation', 'FastAPI', 'Celery', 'Docker', 'Claude API'],
    evidenceStatus: 'verified',
    evidenceNotes: 'Repo: 90-file tree (FastAPI/Celery/Redis/PostgreSQL/Docker/React/pytest). README documents pipeline + Juice Shop test path.',
    links: {
      github: 'https://github.com/karthik-kumarux/VAPTaaS'
    }
  },
  {
    id: 'math-adaptive-reasoning',
    title: 'Math Adaptive Reasoning',
    storytellingMode: 'ai-ml-systems',
    summary: 'Empirical research exploring adaptive routing strategies for mathematical reasoning with language models.',
    tags: ['AI/ML Systems', 'Research', 'GSM8K', 'Python'],
    evidenceStatus: 'verified',
    evidenceNotes: 'Repo: 39-file tree; smoke results committed. README explicitly states Stage 0 + Stage 1 pilot only. No accuracy improvement claims.',
    links: {
      github: 'https://github.com/karthik-kumarux/math-adaptive-reasoning'
    }
  },
  {
    id: 'nexcode',
    title: 'NexCode',
    storytellingMode: 'developer-tooling',
    summary: 'VS Code extension with Tree-sitter code knowledge graph and agentic think-act-observe loop for intelligent code assistance.',
    tags: ['Developer Tooling', 'VS Code', 'Tree-sitter', 'Node.js'],
    evidenceStatus: 'verified',
    evidenceNotes: 'Repo: 11-file tree with graphService, aiService, sidebarProvider, packaged .vsix. Token reduction claim (60%) is resume-only, not benchmarked.',
    links: {
      github: 'https://github.com/karthik-kumarux/NexCode'
    }
  },
  {
    id: 'deception-platform',
    title: 'Deception Platform',
    storytellingMode: 'security-orchestration',
    summary: 'Air-gapped multi-service honeypot platform with real-time attacker dashboards and normalized threat intelligence.',
    tags: ['Security Automation', 'Honeypot', 'PostgreSQL', 'Docker', 'Nginx'],
    evidenceStatus: 'verified',
    evidenceNotes: 'Repo: 22-file tree (web-honeypot, api-ingest, dashboard, nginx, db, compose). FTP honeypot excluded (not in repo tree).',
    links: {
      github: 'https://github.com/karthik-kumarux/honeyPot'
    }
  },
  {
    id: 'crack-analysis',
    title: 'Crack Analysis',
    storytellingMode: 'computer-vision',
    summary: 'YOLOv8-based structural crack detection and severity classification with trained weights and performance metrics.',
    tags: ['Computer Vision', 'YOLO', 'Python', 'Streamlit'],
    evidenceStatus: 'verified',
    evidenceNotes: 'Repo: 34-file tree including trained weights (49.63 MB), ROC/PR/F1 curves, confusion matrices, 100-epoch training artifacts.',
    links: {
      github: 'https://github.com/karthik-kumarux/crack-analysis'
    }
  }
];
