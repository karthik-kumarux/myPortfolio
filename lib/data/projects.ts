import { Project } from "../../types";

export const projects: Project[] = [
  {
    slug: "vaptaas",
    title: "VAPTaaS",
    tagline: "Automated Vulnerability Assessment & Penetration Testing Platform",
    description:
      "Asynchronous vulnerability assessment platform orchestrating reconnaissance, web vulnerability scanning, and misconfiguration checks via Celery task queues.",
    longDescription:
      "VAPTaaS is a production-grade security automation platform that transforms manual penetration testing workflows into repeatable, scalable pipelines. Built with an event-driven architecture, it orchestrates Nmap for reconnaissance, OWASP ZAP for web vulnerability scanning, and Nikto for server misconfiguration detection — all containerized and queue-managed.",
    problem:
      "Manual vulnerability assessments are time-consuming, inconsistent, and don't scale. Security teams need a repeatable way to run comprehensive scans across multiple targets and get actionable remediation guidance — not just raw scanner output.",
    techStack: [
      "FastAPI",
      "Celery",
      "Redis",
      "PostgreSQL",
      "OWASP ZAP",
      "Nmap",
      "Nikto",
      "React",
      "Docker Compose",
      "Claude API",
      "pytest",
    ],
    architecture: [
      {
        label: "API Gateway",
        description:
          "FastAPI REST layer accepting scan requests, returning job IDs for async polling.",
      },
      {
        label: "Task Queue",
        description:
          "Celery workers consume scan jobs from Redis broker, enabling parallel execution across multiple targets.",
      },
      {
        label: "Scanner Orchestrator",
        description:
          "Coordinator dispatches Nmap (recon), OWASP ZAP (web vulns), and Nikto (misconfig) in isolated stages.",
      },
      {
        label: "Remediation Engine",
        description:
          "Claude API processes raw vulnerability output into contextual, developer-readable remediation guidance.",
      },
      {
        label: "Persistence Layer",
        description:
          "PostgreSQL stores scan history, findings, and remediation reports for historical comparison.",
      },
    ],
    engineeringDecisions: [
      {
        topic: "Celery over Background Tasks",
        decision: "Celery with Redis broker for distributed task execution",
        rationale:
          "FastAPI's native background tasks lack retry logic, rate limiting, and worker scaling. Celery provides production-grade task management with monitoring via Flower.",
      },
      {
        topic: "Containerized Scanners",
        decision: "Each scanner runs in its own Docker container",
        rationale:
          "OWASP ZAP, Nmap, and Nikto have conflicting dependencies. Containerization ensures isolated environments and reproducible scans — critical for security tooling.",
      },
      {
        topic: "AI-Generated Remediation",
        decision: "Claude API for translating raw findings to actionable guidance",
        rationale:
          "Raw vulnerability output is technical and overwhelming. An LLM layer contextualizes findings for engineering teams, bridging the gap between security and development.",
      },
    ],
    challenges: [
      {
        challenge: "Scanner reliability across diverse targets",
        solution:
          "Implemented retry logic with exponential backoff and per-scanner timeouts. Scans that fail gracefully report partial results instead of silent failures.",
      },
      {
        challenge: "Docker networking between scanners and target",
        solution:
          "Custom Docker network with host-mode networking for Nmap (requires raw socket access) and bridged mode for ZAP/Nikto.",
      },
    ],
    roadmap: [
      "Scheduled recurring scans via cron-style configuration",
      "Multi-tenant architecture with role-based access control",
      "PDF/HTML report generation with executive summaries",
      "Integration with CI/CD pipelines (GitHub Actions, GitLab CI)",
      "Custom vulnerability scoring aligned with CVSS",
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/karthik-kumarux", icon: "github" },
    ],
    featured: true,
    color: "#4FD1C5",
  },
  {
    slug: "honeypot",
    title: "Distributed Honeypot Platform",
    tagline: "Multi-service Deception Network for Threat Intelligence",
    description:
      "Multi-service deception platform orchestrating independent web, FTP, and API honeypot containers to capture attacker behavior patterns and credentials.",
    longDescription:
      "A production deception network that deploys realistic web, FTP, and API honeypot services behind an HTTPS-terminating Nginx reverse proxy. Captures attacker credentials, payloads, source IPs, and user-agent data in real time for threat detection and behavioral analysis.",
    problem:
      "Organizations lack visibility into attacker techniques before a breach occurs. Traditional IDS/IPS are reactive. Deception technology provides early warning by engaging attackers in controlled environments.",
    techStack: [
      "Python",
      "FastAPI",
      "Nginx",
      "PostgreSQL",
      "Grafana",
      "Docker",
      "Docker Compose",
    ],
    architecture: [
      {
        label: "Reverse Proxy",
        description:
          "Nginx terminates HTTPS with realistic certificates to appear as legitimate services.",
      },
      {
        label: "Honeypot Services",
        description:
          "Three decoy services — web (HTTP form capture), FTP (credential capture), API (token harvesting) — each in isolated containers.",
      },
      {
        label: "Event Pipeline",
        description:
          "PostgreSQL normalizes raw activity into structured events, alerts, and attacker profiles.",
      },
      {
        label: "Detection Logic",
        description:
          "Brute-force and scanner detection algorithms flag automated attack patterns.",
      },
      {
        label: "Observability",
        description:
          "Grafana dashboards surface attacker geography, techniques, and target preferences.",
      },
    ],
    engineeringDecisions: [
      {
        topic: "Nginx as TLS Terminator",
        decision: "Reverse proxy with legitimate Let's Encrypt certificates",
        rationale:
          "Attackers increasingly fingerprint honeypot services by certificate validity. Real TLS certificates increase the deception fidelity and engagement duration.",
      },
      {
        topic: "Multi-Service Architecture",
        decision: "Independent honeypot containers for web, FTP, and API",
        rationale:
          "Different attacker profiles target different services. A multi-service deployment captures broader threat intelligence than single-protocol honeypots.",
      },
    ],
    challenges: [
      {
        challenge: "Preventing honeypot compromise from becoming pivoting point",
        solution:
          "Network-isolated containers with egress filtering and no lateral movement capability. Each honeypot runs with minimal privileges.",
      },
      {
        challenge: "Distinguishing automated scanners from targeted attackers",
        solution:
          "Heuristic scoring based on dwell time, interaction depth, and payload sophistication — surfaced through Grafana dashboards.",
      },
    ],
    roadmap: [
      "SSH honeypot for credential replay analysis",
      "Machine learning-based attacker behavior classification",
      "Automated IOC extraction and threat feed integration",
      "Email alerting for high-fidelity engagement events",
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/karthik-kumarux", icon: "github" },
    ],
    featured: true,
    color: "#6EE0D6",
  },
  {
    slug: "security-header",
    title: "Security Header Analysis Tool",
    tagline: "OWASP-Based HTTP Security Header Auditor",
    description:
      "Streamlit-based web security auditing tool evaluating HTTP response headers against OWASP Top 10, with multi-threaded bulk scanning across up to 50 domains.",
    longDescription:
      "Engineered a Streamlit web application that audits HTTP response headers against OWASP Top 10 categories. Flags missing or misconfigured security controls (CSP, HSTS, X-Frame-Options) and generates color-coded PDF/JSON remediation reports with scan history comparison.",
    problem:
      "Security headers are the first line of defense against common web attacks, yet most organizations don't systematically audit them. Existing tools are CLI-only or don't support bulk scanning with historical comparison.",
    techStack: [
      "Python",
      "Streamlit",
      "SQLite",
      "ReportLab",
      "Pandas",
      "Requests",
    ],
    architecture: [
      {
        label: "Scan Engine",
        description:
          "Multi-threaded HTTP client evaluates up to 50 domains concurrently against OWASP header checklist.",
      },
      {
        label: "Analysis Layer",
        description:
          "Maps each header to its OWASP Top 10 category, assigns severity, and flags missing controls.",
      },
      {
        label: "History Engine",
        description:
          "SQLite-backed persistence enables rescan-and-compare analysis to track security posture over time.",
      },
      {
        label: "Reporting Module",
        description:
          "ReportLab generates color-coded PDFs; JSON exports for CI/CD integration.",
      },
    ],
    engineeringDecisions: [
      {
        topic: "Multi-Threaded Bulk Scanning",
        decision: "ThreadPoolExecutor for concurrent domain scanning",
        rationale:
          "Sequential scanning of 50 domains would be prohibitively slow. Thread pools maximize throughput while Python's GIL doesn't bottleneck I/O-bound HTTP requests.",
      },
      {
        topic: "SQLite for Scan History",
        decision: "Embedded database over PostgreSQL",
        rationale:
          "The tool is designed for single-machine deployment. SQLite eliminates database setup overhead while providing full SQL for rescan comparison queries.",
      },
    ],
    challenges: [
      {
        challenge: "Handling diverse HTTP response behaviors",
        solution:
          "Timeouts, retry logic, redirect following, and graceful degradation when headers are partially present.",
      },
      {
        challenge: "PDF generation with dynamic table layouts",
        solution:
          "ReportLab platypus for flowable document elements that adapt to varying report lengths.",
      },
    ],
    roadmap: [
      "REST API for headless scanning integration",
      "Docker image for one-command deployment",
      "CI/CD plugin for automated PR security checks",
      "Expanded header coverage for API security (CORS, rate limiting headers)",
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/karthik-kumarux", icon: "github" },
    ],
    featured: true,
    color: "#21B8A8",
  },
  {
    slug: "nexcode",
    title: "NexCode",
    tagline: "AI-Powered VS Code Extension with Codebase-Aware Context",
    description:
      "Graph-based code representation engine using Tree-sitter WASM to compress codebase context, cutting LLM token consumption by up to 60%.",
    longDescription:
      "A VS Code extension that builds a graph representation of your codebase using Tree-sitter WASM, preserving semantic relationships (imports, calls, class hierarchies) while compressing context for LLM interactions. Features a think → act → observe agent loop with five extensible tools.",
    problem:
      "LLMs are context-window constrained. Sending entire codebases is expensive and hits token limits. Partial context loses cross-file relationships necessary for accurate reasoning about large codebases.",
    techStack: [
      "TypeScript",
      "Node.js",
      "VS Code Extension API",
      "Tree-sitter WASM",
      "LLM APIs",
    ],
    architecture: [
      {
        label: "AST Parser",
        description:
          "Tree-sitter WASM parses source files into concrete syntax trees for language-agnostic code analysis.",
      },
      {
        label: "Graph Builder",
        description:
          "Constructs a dependency graph mapping imports, function calls, class hierarchies, and module relationships.",
      },
      {
        label: "Context Compressor",
        description:
          "Intelligently prunes the graph to fit within token limits while preserving highest-relevance edges.",
      },
      {
        label: "Agent Loop",
        description:
          "Think → Act → Observe cycle orchestrates five extensible tools for structured LLM-codebase interaction.",
      },
    ],
    engineeringDecisions: [
      {
        topic: "Tree-sitter WASM over Language Server",
        decision: "WebAssembly-compiled Tree-sitter for cross-language parsing",
        rationale:
          "LSP requires running language servers per project. Tree-sitter WASM is self-contained, fast, and supports dozens of languages without external dependencies.",
      },
      {
        topic: "Graph Compression Algorithm",
        decision: "Dependency edge mapping with relevance scoring",
        rationale:
          "Rather than naive truncation, the compressor preserves cross-file edges (imports, calls) that are critical for LLM reasoning — dropping only isolated leaf nodes first.",
      },
    ],
    challenges: [
      {
        challenge: "Balancing context richness with token limits",
        solution:
          "Iterative compression that scores each node's connectivity. Leaf nodes with single edges drop first; hub nodes with many cross-file connections are preserved.",
      },
      {
        challenge: "Supporting multiple languages without reimplementing parsers",
        solution:
          "Tree-sitter's WASM compilation target enables a single parser interface for Python, JavaScript, TypeScript, Go, and more.",
      },
    ],
    roadmap: [
      "Multi-file refactoring agent",
      "Inline code explanation without losing editor context",
      "Pull request review automation",
      "Custom tool plugin system for community extensions",
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/karthik-kumarux", icon: "github" },
    ],
    featured: true,
    color: "#96C8E8",
  },
  {
    slug: "crack-detection",
    title: "Crack Detection & Severity Analysis",
    tagline: "AI Infrastructure Inspection Pipeline",
    description:
      "AI-based infrastructure inspection pipeline using YOLO object detection and CNNs for automated crack identification and severity classification in civil structures.",
    longDescription:
      "An end-to-end computer vision pipeline that automates infrastructure inspection. YOLO detects cracks in structural imagery, CNNs classify severity, and a Streamlit interface enables real-time inspection workflows with automated reporting.",
    problem:
      "Manual infrastructure inspection is slow, subjective, and dangerous. Civil engineers need automated, consistent crack detection to prioritize maintenance and prevent structural failures.",
    techStack: [
      "Python",
      "YOLO",
      "CNNs",
      "Streamlit",
      "OpenCV",
      "PyTorch",
    ],
    architecture: [
      {
        label: "Image Preprocessing",
        description:
          "Contrast enhancement and noise reduction to normalize inspection imagery from diverse sources.",
      },
      {
        label: "Detection Model",
        description:
          "YOLO-based object detection identifies crack regions with bounding box coordinates.",
      },
      {
        label: "Classification Model",
        description:
          "CNN classifies detected cracks by severity (hairline, moderate, structural) to prioritize remediation.",
      },
      {
        label: "Reporting Pipeline",
        description:
          "Automated report generation with annotated images and severity heatmaps via Streamlit.",
      },
    ],
    engineeringDecisions: [
      {
        topic: "YOLO + CNN Two-Stage Pipeline",
        decision: "Separate detection and classification models",
        rationale:
          "Single-stage approaches trade accuracy for speed. A two-stage pipeline lets YOLO specialize in localization while the CNN focuses on fine-grained severity classification — critical for infrastructure safety decisions.",
      },
      {
        topic: "Streamlit for Real-Time Interface",
        decision: "Browser-based UI over desktop application",
        rationale:
          "Field engineers need instant access without software installation. Streamlit provides a zero-config web interface that integrates directly with the Python ML pipeline.",
      },
    ],
    challenges: [
      {
        challenge: "Varying image quality from field inspections",
        solution:
          "Preprocessing pipeline with adaptive histogram equalization and denoising to normalize inputs before model inference.",
      },
      {
        challenge: "Distinguishing cracks from surface texture patterns",
        solution:
          "Training data augmentation with diverse surface types and lighting conditions to reduce false positives on textured surfaces.",
      },
    ],
    roadmap: [
      "Drone integration for automated aerial inspection",
      "Real-time video stream analysis",
      "Predictive maintenance scoring model",
      "Multi-structure inventory management system",
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/karthik-kumarux", icon: "github" },
    ],
    featured: false,
    color: "#FF6B4A",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
