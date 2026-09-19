# Karthik Kumar — Personal Brand Portfolio
# Product Requirements Document (PRD)

**Product:** Karthik Kumar Personal Brand Portfolio  
**Core Concept:** **SYSTEMS, UNDER TEST.**  
**Primary Identity:** **Software Engineer**  
**Surface Mode:** Experience  
**Document Status:** Implementation-ready product requirements  
**Source Hierarchy:** `DESIGN.md` → `UX-AUDIT.md` → Resume / GitHub / LinkedIn where accessible  

---

## 0. Source and Evidence Policy

This PRD translates the approved design and UX direction into product requirements. It does **not** redesign the concept.

### Authoritative design sources

- `DESIGN.md`: current UX-refined design specification.
- `UX-AUDIT.md`: design-level UX and art-direction quality gate.
- Resume: factual source for current professional positioning, experience, skills, projects, certifications and leadership.
- GitHub: factual source for repository names, README-described architecture and implementation evidence.
- LinkedIn: supplementary source only when accessible and consistent with stronger first-party evidence.

### Known evidence status

- The resume positions Karthik as a software engineer working on secure systems and includes AI/ML, security and developer-tooling work.
- The accessible GitHub repositories provide concrete technical evidence for VAPTaaS, math-adaptive-reasoning, NexCode, the honeypot/deception platform, security-header analysis and crack analysis.
- The publicly accessible `personal_portfolio` repository currently exposes a legacy static `index.html`; its current public implementation is substantially simpler than the approved design direction. The active working codebase may differ and must be inspected before replacing or preserving implementation pieces.
- Full LinkedIn profile content was not reliably accessible through connected sources; LinkedIn must therefore not be treated as the authoritative source for missing facts.

### Content integrity rule

Never fabricate:

- employers
- projects
- awards
- metrics
- users
- research
- deployments
- performance claims
- capabilities
- certifications
- contributions

When a requirement depends on unknown implementation or deployment information, mark it **TBD** or **REQUIRES VERIFICATION**.

---

# 1. Product Overview

## 1.1 Product definition

This product is a **personal-brand engineering portfolio**, not a traditional résumé website.

Its purpose is to communicate:

1. who Karthik Kumar is professionally;
2. what he builds;
3. how he thinks about technical problems;
4. how projects are architected and iterated;
5. what evidence supports the work; and
6. how a visitor can continue into deeper technical material or contact/resume actions.

The portfolio should feel like a designed personal identity and digital experience, while remaining immediately understandable to recruiters and technically credible to engineers.

## 1.2 Core concept

> **SYSTEMS, UNDER TEST.**

The concept frames projects as real systems that are built, tested, inspected and iterated.

The metaphor must remain subordinate to the person:

```text
PERSON
  ↓
PROFESSIONAL IDENTITY
  ↓
SPECIALIZATIONS
  ↓
PROOF / WORK
  ↓
TECHNICAL DEPTH
  ↓
PERSONAL OBSERVATIONS
```

## 1.3 Primary professional identity

> **SOFTWARE ENGINEER**

Supporting specializations (canonical labels and order — one definition to keep consistent across PRD, DESIGN, ARCHITECTURE, and the homepage):

- AI / ML Systems
- Security Automation
- Developer Tooling

Computer vision and automation appear as project-level specialties where the source material supports them. The AI / ML systems thread is surfaced through the flagship `math-adaptive-reasoning` case study and hero narration; the portfolio is not an AI-only portfolio.

## 1.4 Intended impression

A successful visitor takeaway is:

> Karthik is a software engineer who builds practical systems across AI/ML, security and developer tooling, and learns through experimentation and iteration.

The portfolio should not require the visitor to understand the design metaphor before understanding Karthik.

## 1.5 Product philosophy

- Person before metaphor.
- Evidence before theatrics.
- Progressive disclosure.
- Personal before conceptual.
- Motion with meaning.
- Accessibility before aesthetic novelty.
- Authenticity over completeness.

---

# 2. Product Goals

## PG-001 — Communicate identity quickly

A first-time visitor should understand Karthik's name, primary professional identity, supporting specializations and path to work/resume within approximately 5–10 seconds.

## PG-002 — Make real technical work easy to discover

Selected projects must be reachable quickly from the homepage without navigating through conceptual or decorative sections first.

## PG-003 — Demonstrate technical depth progressively

A visitor must be able to move from overview → architecture → implementation → challenges → iterations → lessons without forcing all detail into the first view.

## PG-004 — Provide credible evidence

Major technical claims should be accompanied by appropriate evidence such as GitHub links, architecture diagrams, screenshots, implementation details or verified metrics where available.

## PG-005 — Build a memorable personal brand

The visual and interaction system should be specific to Karthik and retain the `SYSTEMS, UNDER TEST.` identity even after decorative effects are removed.

## PG-006 — Support recruiter workflows

Resume, selected work and contact actions should be easy to locate.

## PG-007 — Support technical visitors

Architecture, implementation, technical decisions, challenges, iterations and GitHub should be discoverable without forcing a marketing-heavy funnel.

## PG-008 — Preserve authentic personal context

Education, current direction, observations, experiments, failures, lessons and leadership should appear where they naturally support the story.

## PG-009 — Remain usable across devices

The experience must be deliberately composed for 320px, 375px, 768px, 1024px and 1440px widths.

## PG-010 — Keep visual sophistication production-safe

The portfolio should provide premium visual craft without unnecessary backend infrastructure, expensive effects or animation-heavy performance problems.

---

# 3. Non-Goals

The portfolio is not:

- a generic student résumé;
- a collection of equal-weight project cards;
- a SaaS dashboard;
- a personal social network;
- a technical documentation portal;
- a fake AI showcase;
- an animation showcase;
- a fabricated thought-leadership publication;
- a backend application unless a genuine product requirement emerges;
- a dashboard full of fake telemetry;
- a design-system demonstration whose interface overwhelms the subject.

Field Notes are not required to be large. If there is not enough authentic material, the feature remains small.

---

# 4. Target Audiences

## 4.1 Recruiters

### Primary needs

- immediately understand who Karthik is;
- understand the primary role;
- understand core specializations;
- see selected work;
- access resume;
- access GitHub;
- find contact information.

### Success condition

A recruiter can understand the profile and reach proof without decoding the site's visual metaphor.

## 4.2 Technical visitors

### Primary needs

- inspect architecture;
- understand implementation;
- understand technical decisions;
- inspect challenges and iterations;
- view evidence;
- visit GitHub.

### Success condition

A technical visitor can go deeper without the homepage becoming an engineering document.

## 4.3 Potential collaborators

### Primary needs

- understand current direction;
- understand areas of interest;
- inspect work and experiments;
- discover engineering philosophy and observations;
- find a clear contact path.

### Success condition

A collaborator can understand what Karthik likes to build and how he approaches problems.

---

# 5. Jobs To Be Done

## JTBD-001

> I want to quickly understand who Karthik is professionally.

## JTBD-002

> I want to see Karthik's strongest work without browsing through unrelated content.

## JTBD-003

> I want to understand how one of his projects actually works.

## JTBD-004

> I want to verify that the technical work is real.

## JTBD-005

> I want to download or access his resume.

## JTBD-006

> I want to find his GitHub.

## JTBD-007

> I want to contact him.

## JTBD-008

> I want to understand what he has learned from building and debugging systems.

---

# 6. Product Principles

## P-001 — Person before metaphor

The first viewport must communicate Karthik before it communicates the portfolio concept.

## P-002 — Evidence before theatrics

A visually impressive treatment must never substitute for technical proof.

## P-003 — Progressive disclosure

Different visitors should be able to stop at the depth appropriate to them.

```text
LEVEL 1 — What was built?
LEVEL 2 — How does it work?
LEVEL 3 — Why this approach?
LEVEL 4 — What went wrong?
LEVEL 5 — What changed / what was learned?
```

## P-004 — Personal before conceptual

The interface is the medium; Karthik is the subject.

## P-005 — Motion with meaning

Motion should reveal process, state, orientation or relationships.

## P-006 — Familiar navigation

Top-level navigation should use human-readable terms such as `WORK`, `NOTES`, `PROFILE`, `CONTACT`, with `RESUME` as a direct action.

## P-007 — Domain-specific storytelling

Computer vision, security automation and developer tooling should not be forced into the same storytelling format.

## P-008 — Accessibility before novelty

Visual ambition must not compromise contrast, keyboard access, focus, reading order, touch targets or reduced-motion support.

## P-009 — Authenticity

Source-supported content only.

## P-010 — Edited, not overloaded

Every conceptual label must earn its place. Remove terminology that exists only to make the interface feel designed.

---

# 7. Information Architecture

## 7.1 Top-level navigation

```text
WORK
NOTES
PROFILE
CONTACT

RESUME ↗
```

`KARTHIK KUMAR` is the navigation identity label.

Do not use `KARTHIK / 26`.

## 7.2 Route tree

```text
/
├── /work
│   ├── /work/vaptaas
│   ├── /work/nexcode
│   ├── /work/deception-platform
│   ├── /work/crack-analysis
│   └── /work/math-adaptive-reasoning
├── /notes
│   └── /notes/:slug
├── /profile
└── /contact
```

Resume is a direct action and need not require a dedicated site route. Deployment target is **GitHub Pages** (static output); the canonical deployment domain is **TBD** by the owner.

## 7.3 System Index

The System Index belongs inside Work. It is a signature browsing mechanism, not a conceptual top-level navigation layer.

Each entry must expose:

```text
PROJECT NAME
Plain-language purpose
```

Approved content pattern:

```text
01  MATH ADAPTIVE REASONING
    Adaptive LLM reasoning experiments

02  VAPTAAS
    Automated security assessment

03  DECEPTION PLATFORM
    Attack capture & analysis

04  NEXCODE
    Code intelligence & graph context

05  CRACK ANALYSIS
    Computer vision inspection
```

Project ordering follows the canonical specialization hierarchy (AI / ML Systems → Security
Automation → Developer Tooling), and can change if later verified evidence suggests a
different information hierarchy. No ranking claim is implied by the numbers. The set was
changed 2026-09-18: `math-adaptive-reasoning` replaced `security-header-analysis` — see §10.4
and `planning/evidence/MATRIX.md` for the evidence-backed rationale.

## 7.4 Deep links

Each project must be directly addressable by URL. Deep links should land on a meaningful project heading, not only an animation state.

Notes must be addressable by stable slugs when published.

---

# 8. Homepage Requirements

## 8.1 First viewport

The first viewport must establish, in this order:

1. Karthik Kumar;
2. Software Engineer;
3. AI / ML Systems, Security Automation and Developer Tooling as supporting focus;
4. what he builds;
5. proof/work access;
6. `SYSTEMS, UNDER TEST.` as the organizing creative platform.

The concept must not visually outrank the person's professional identity.

## 8.2 Hero information architecture

Approved structure:

```text
KARTHIK KUMAR

SOFTWARE ENGINEER

AI / ML SYSTEMS · SECURITY AUTOMATION · DEVELOPER TOOLING

[short verified positioning statement]

[ VIEW WORK ↗ ] [ RESUME ↗ ]

SYSTEMS, UNDER TEST.
```

Exact hero prose is not frozen. It must be derived from verified source material during implementation.

## 8.3 Early human presence

The homepage should include a concise human/profile interruption before or alongside deep technical material, containing only verified information.

Known source-supported examples include:

- B.Tech CSE (AI & ML);
- Madanapalle Institute of Technology & Science;
- current AI/ML internship context;
- cybersecurity and software engineering direction;
- genuine observations from project work.

Do not turn this into a long biography.

---

# 9. Work / System Index Requirements

## FR-WORK-001

The Work surface must expose selected projects without requiring visitors to decode the site's conceptual vocabulary.

**Priority:** Must  
**Acceptance:** Each selected project shows name + plain-language purpose before deeper technical content.

## FR-WORK-002

The System Index must support direct navigation to a project.

**Priority:** Must  
**Acceptance:** Keyboard and pointer users can activate a project entry; the current project state is communicated without relying on color alone.

## FR-WORK-003

The index must work without hover.

**Priority:** Must  
**Acceptance:** The primary project navigation path functions on touch devices and keyboard-only navigation.

## FR-WORK-004

The index must not become an information dump.

**Priority:** Should  
**Acceptance:** Project name and purpose are immediately scannable; stack and implementation detail remain deeper in the case study.

---

# 10. Case Study Requirements

## 10.1 Common narrative model

Each major project should support:

```text
Problem
Context
Approach
System / Architecture
Implementation
Challenges
Iterations
Result
Lessons
```

Not every project will have evidence for every section. Missing sections should be omitted rather than fabricated.

## 10.2 Shared brand grammar

Case studies share:

- typography system;
- color semantics;
- navigation;
- CTA language;
- project metadata conventions;
- System Thread behavior where meaningful;
- accessibility patterns.

## 10.3 Domain-specific storytelling

| Domain | Storytelling medium |
|---|---|
| AI / ML Systems | interaction / reasoning / experiment flow |
| Security Automation | pipeline / orchestration |
| Developer Tooling | code graph / context |
| Computer Vision | image / detection / measurement |
| General Systems | architecture / data flow |

## 10.4 Source-supported flagship work

Flagship set (5): VAPTaaS · NexCode · Distributed Honeypot / Deception Platform · Crack Detection & Severity Analysis · **Math Adaptive Reasoning**. The claim-by-claim verification status of every bullet below is maintained in `planning/evidence/MATRIX.md`; a missing source reference means the claim must not be restated.

### VAPTaaS

Verified source material supports:

- asynchronous vulnerability assessment;
- FastAPI;
- Celery / Redis;
- PostgreSQL;
- Nmap;
- Nikto;
- OWASP ZAP;
- Docker Compose;
- React;
- Claude API;
- automated developer-readable remediation guidance;
- pytest coverage for orchestration/API endpoints.

Source references: resume and GitHub README.

### NexCode

Verified source material supports:

- TypeScript;
- Node.js;
- VS Code Extension API;
- Tree-sitter / Tree-sitter WASM;
- graph-based code representation;
- dependency relationship mapping;
- think → act → observe agent loop;
- repository-persisted graph features.

The resume also states a reduction of LLM token consumption by up to 60%. This metric must only be displayed where the underlying source and implementation context are retained and the wording preserves its original scope.

### Distributed Honeypot / Deception Platform

Verified source material supports:

- Python;
- FastAPI;
- Nginx;
- PostgreSQL;
- Grafana;
- Docker;
- multi-service deception architecture;
- attacker credentials / payload / source IP / behavioral data capture;
- normalized event pipeline;
- brute-force/scanner detection;
- visibility dashboard.

### Math Adaptive Reasoning

Verified source material supports:

- Python;
- empirical research harness for adaptive mathematical reasoning;
- pilot experiment (Stage 0 + Stage 1) on GSM8K;
- fixed strategy set — direct / chain-of-thought / programmatic;
- CPU-first local backend (Qwen2.5-1.5B-Instruct) with optional `gpt-4o-mini` / `claude-3-5-haiku-latest` API backends;
- committed reproducibility artifacts: environment/hardware reports, smoke-run figures, pilot records and summaries.

Present the stage honestly: as of the evidence, **no classifier, router, or verifier is built yet** — this is a hypothesis-testing research project at pilot stage, not a shipped product. Do not add accuracy, efficiency, or improvement numbers; the repository documents research questions and a pilot, not results conclusions.

### Crack Detection & Severity Analysis

Verified source material supports:

- Python;
- YOLO;
- CNNs;
- Streamlit;
- automated crack identification;
- severity classification;
- image processing and reporting pipeline;
- real-time inspection workflow claim in the resume/project documentation.

Do not add unsupported accuracy numbers or deployment claims.

### Security Header Analysis — displaced from the flagship set (2026-09-18)

Repository-supported claims only (all else is gated):

- Python;
- Streamlit;
- HTTP security-header checks;
- header coverage list (HSTS, CSP, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy, Cross-Origin-Opener/Resource/Embedder-Policy).

Resume-only claims the 4-file repository does **not** support — GATED / UNVERIFIED, do not publish:

- concurrent scanning or "up to 50 domains" (no concurrency/threading code);
- scan-history / rescan / compare;
- PDF/JSON reporting (no ReportLab dependency);
- SQLite / Pandas usage.

The project was displaced from the flagship index on evidence strength: a 4-file repo with a minimal README against `math-adaptive-reasoning`'s 39-file research harness with committed results (see `planning/evidence/MATRIX.md`). Any future re-entry requires repository evidence for each headline claim.

---

# 11. Evidence Requirements

Every major project should provide a realistic evidence set.

Possible evidence types:

- GitHub link;
- source-verified architecture diagram;
- actual screenshots;
- actual code excerpts where appropriate;
- verified metrics;
- implementation details;
- result/lesson statements.

## Evidence priority

```text
SOURCE / CODE
    ↓
ARCHITECTURE
    ↓
SCREENSHOT / DEMO
    ↓
VERIFIED RESULT
    ↓
REFLECTION
```

Decorative visuals must not be used as fake proof.

---

# 12. Human Presence Requirements

Human context should appear naturally across the site through:

- education;
- current direction;
- genuine interests;
- experiments;
- engineering observations;
- failures;
- debugging discoveries;
- architecture decisions;
- lessons;
- leadership/event coordination where relevant.

Do not create a generic biography section full of personality claims that are unsupported by source evidence.

---

# 13. Field Notes Requirements

Field Notes are evidence-dependent.

Potential topics:

- dataset problems;
- debugging discoveries;
- architecture decisions;
- experiments;
- failures;
- model/system iterations;
- engineering lessons.

## Field Note acceptance rule

A note may ship only when it is grounded in a real experience documented in the available source material or later verified by Karthik.

Do not manufacture thought-leadership content to fill the section.

If there are not enough authentic notes, the section may remain small or be temporarily omitted from prominent homepage navigation while the route remains available if implemented.

---

# 14. System Thread Requirements

## 14.1 Concept

```text
INPUT ───── PROCESS ───── TEST ───── RESULT
```

## 14.2 Allowed roles

- project-stage navigation;
- process orientation;
- architecture connector;
- progress/scroll context.

## 14.3 Prohibited roles

- decorative looping line;
- unexplained graphic ornament;
- mandatory animation for basic navigation;
- perpetual movement that competes with reading.

## 14.4 Mobile behavior

Use a simplified vertical/step representation.

## 14.5 Reduced-motion behavior

Provide a static equivalent with state and current-step semantics intact.

---

# 15. Responsive Requirements

Required validation widths:

- 320px
- 375px
- 768px
- 1024px
- 1440px

## Mobile requirements

- no horizontal overflow;
- no hover-dependent functionality;
- no tiny diagrams as the only explanation;
- no competing sticky elements;
- no hidden essential content;
- clear single-column reading order;
- comfortable touch targets;
- project name/purpose visible before technical metadata.

The mobile composition is not a scaled-down desktop composition.

---

# 16. Accessibility Requirements

The implementation must use:

- semantic HTML;
- correct heading hierarchy;
- keyboard navigation;
- visible focus states;
- meaningful link text;
- alt text for meaningful images;
- color-independent status communication;
- reduced-motion support;
- readable body type;
- accessible touch targets;
- proper reading order.

## Color requirements

Do not use base teal `#2C7C78` or base terracotta `#C96B45` as normal-sized body text on Field Paper when the current contrast checks indicate failure.

Use the approved text-safe variants from `DESIGN.md`:

- `#23615E` for dark teal text on light surfaces;
- `#62B8B0` for light teal text on graphite;
- `#9B4628` for dark signal text on light surfaces;
- `#59625D` for muted text on light surfaces.

These are token-level requirements; rendered implementation still requires actual contrast validation.

Full WCAG compliance must not be claimed until rendered testing is complete.

---

# 17. Performance Requirements

The portfolio must:

- optimize images;
- use SVG for simple diagrams/marks where appropriate;
- lazy-load non-critical images;
- animate primarily with transform/opacity;
- avoid expensive continuous filters;
- avoid unnecessary scroll computation;
- avoid unnecessary background video;
- avoid perpetual animation;
- keep client-side JavaScript proportional to actual interaction needs.

Goal:

> premium visual experience without performance theater.

---

# 18. SEO / Metadata Requirements

Provide:

- unique page title;
- meta description;
- semantic headings;
- canonical URL where deployment URL is known;
- Open Graph title/description/image;
- favicon;
- sitemap/robots where the deployment supports them;
- project page metadata where useful.

Deployment target is **GitHub Pages** (static output). Deployment domain is **TBD**.

Do not invent a canonical URL.

---

# 19. Functional Requirements

| ID | Requirement | Priority | Acceptance Criteria |
|---|---|---|---|
| FR-001 | Render a person-first homepage | Must | Name, Software Engineer identity, supporting specializations and Work/Resume actions visible without scrolling through conceptual UI. |
| FR-002 | Provide Work navigation | Must | `WORK` route resolves and exposes System Index. |
| FR-003 | Provide System Index | Must | Each selected project shows name + plain-language purpose and is keyboard/touch accessible. |
| FR-004 | Provide project detail routes | Must | Each implemented flagship project has a stable URL. |
| FR-005 | Support progressive case-study depth | Must | User can reach architecture and implementation without making technical detail mandatory at first glance. |
| FR-006 | Provide evidence links | Must | GitHub/demo/evidence links only appear when verified. Broken or placeholder links do not ship. |
| FR-007 | Provide Resume action | Must | Resume action reaches the verified resume artifact or final approved deployment location. |
| FR-008 | Provide Profile surface | Should | Profile contains concise verified education/current direction and human context. |
| FR-009 | Provide Contact surface | Must | Contact route/action exposes verified direct contact links — `mailto:` plus GitHub/LinkedIn. No server-backed contact form. |
| FR-010 | Support Field Notes | Should | Notes render only from authentic source content; no filler placeholder notes. |
| FR-011 | Implement System Thread | Should | Thread provides orientation and has reduced-motion/mobile equivalents. |
| FR-012 | Support keyboard navigation | Must | All essential navigation and interactions work without a pointer. |
| FR-013 | Support reduced motion | Must | Reduced-motion mode removes non-essential animation while preserving meaning. |
| FR-014 | Avoid horizontal overflow | Must | No essential route overflows at 320px or 375px. |
| FR-015 | Validate contrast | Must | Implemented text/state combinations pass the required checks or use approved safe variants. |
| FR-016 | Support project-specific storytelling | Must | Different project domains can render different composition/visualization modes without duplicating page logic. |

---

# 20. Non-Functional Requirements

| ID | Requirement | Priority |
|---|---|---|
| NFR-001 | Responsive at 320/375/768/1024/1440px | Must |
| NFR-002 | Keyboard accessible essential interaction | Must |
| NFR-003 | Reduced-motion support | Must |
| NFR-004 | Semantic heading and landmark structure | Must |
| NFR-005 | Image optimization and lazy loading | Must |
| NFR-006 | No continuous layout-triggering animation | Must |
| NFR-007 | Maintainable component/content separation | Must |
| NFR-008 | No fabricated content | Must |
| NFR-009 | Deployment URL remains configurable | Must |
| NFR-010 | Third-party scripts are minimized and documented | Should |
| NFR-011 | Browser support covers current mainstream desktop/mobile browsers | Must |
| NFR-012 | Production build succeeds without console errors attributable to the portfolio | Must |
| NFR-013 | Security-sensitive contact/input functionality is absent unless justified | Must |

---

# 21. Acceptance Criteria by Surface

## 21.1 Homepage

- Karthik is visible and clearly named.
- `Software Engineer` is the dominant professional descriptor.
- AI / ML Systems, Security Automation and Developer Tooling read as supporting specializations.
- Work and Resume actions are discoverable immediately.
- `SYSTEMS, UNDER TEST.` remains memorable but not obstructive.
- No conceptual vocabulary must be decoded to understand the identity.

## 21.2 Work Index

- Project names are scannable.
- Plain-language purposes are visible.
- System Index works without hover.
- Current state is not conveyed by color alone.
- Project entries deep-link to real case-study routes.

## 21.3 Case Studies

- Problem and purpose are understandable before deep technical detail.
- Architecture and implementation are available.
- Challenges/iterations appear where evidence exists.
- GitHub/evidence links are verified.
- Visual storytelling changes by project domain.

## 21.4 Field Notes

- Only authentic notes ship.
- Notes are readable without requiring knowledge of the design metaphor.
- Empty/future state does not pretend content exists.

## 21.5 Profile

- Education and current direction are source-verified.
- Human context is concise.
- Resume access is clear.

## 21.6 Contact

- A real contact path is provided.
- No unnecessary contact backend is introduced.
- External links have clear destinations.

## 21.7 Resume

- Resume opens/downloads the verified current artifact.
- No stale or invented resume content is generated by the portfolio.

## 21.8 Responsive

- Required widths pass visual and interaction review.
- Mobile does not depend on hover or desktop asymmetry.

## 21.9 Accessibility

- keyboard path works;
- focus is visible;
- semantic structure is valid;
- reduced motion preserves meaning;
- contrast is tested in rendered UI.

## 21.10 Motion

- motion explains orientation/process;
- no critical content is hidden behind animation;
- reduced motion removes non-essential movement.

## 21.11 Performance

- images are optimized;
- no unnecessary continuous effects;
- animation is localized;
- production build is stable.

## 21.12 Content integrity

- all major claims can be traced to source material or explicit future verification;
- no fake metrics, users, employers, achievements or deployments.

---

# 22. Definition of Done

The product is finished only when:

- identity is immediate;
- Software Engineer is the primary identity;
- AI / ML Systems, Security Automation and Developer Tooling remain secondary;
- work is understandable without decoding the metaphor;
- projects provide evidence;
- technical depth is progressively disclosed;
- System Thread improves orientation;
- project storytelling reflects the actual domain;
- motion has meaning;
- navigation uses familiar language;
- mobile behavior is intentionally composed;
- accessibility is implemented and tested;
- unsupported claims are absent;
- the final rendered implementation has completed UX review and technical QA;
- the experience feels specifically authored for Karthik.

The Markdown documents are not proof of implementation correctness. The rendered portfolio is the final validation target.

---

# 23. UX Review Gate

Required product-quality sequence:

```text
IMPLEMENT
    ↓
RENDER
    ↓
CAPTURE
    ↓
UX CRITIQUE
    ↓
ACCESSIBILITY REVIEW
    ↓
PERFORMANCE REVIEW
    ↓
ONE BOUNDED REFINEMENT PASS
```

Do not declare the portfolio fully UX-validated before rendered inspection.

---

# 24. Traceability Summary

| Product Goal / Requirement | Primary Surface | Validation |
|---|---|---|
| Identity quickly | Homepage | 5–10 second first-impression test |
| Work discoverability | Work/System Index | Navigation task test |
| Technical depth | Case Studies | Deep-dive task test |
| Evidence | Case Studies/Profile | Source/evidence audit |
| Personal context | Homepage/Profile/Notes | Content review |
| Signature interaction | System Thread | Interaction + reduced-motion test |
| Accessibility | Global | Keyboard/contrast/semantics/reflow tests |
| Responsive UX | Global | 320/375/768/1024/1440 review |
| Performance | Global | Lighthouse/field performance review |
| Content integrity | Global | Source verification checklist |

---

# 25. Open Decisions / Verification Items

| Item | Status |
|---|---|
| Final hero copy | TBD — refine against current implementation content |
| Exact deployment domain | TBD — owner to provide; do not invent |
| Final favicon/brand mark asset | REQUIRES VERIFICATION / design execution |
| Final font selections | TBD unless already present in implementation |
| Active working codebase stack | REQUIRES VERIFICATION — accessible public repo is legacy static HTML |
| Final hosting provider | RESOLVED — GitHub Pages (2026-09-18, static output) |
| Analytics | Not required unless a real measurement need is established |
| Field Notes initial inventory | TBD — publish only authentic notes |
| Demo URLs per project | TBD / verify individually |

---

# 26. Product North Star

> **The visitor should understand how Karthik thinks, builds, tests and learns before they become impressed by how the portfolio is designed.**

The interface is the medium.

**Karthik is the subject.**
