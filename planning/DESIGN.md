# Karthik Kumar — Portfolio Design System

**Project:** Personal Brand Portfolio  
**Brand:** Karthik Kumar  
**Creative Platform:** **SYSTEMS, UNDER TEST.**  
**Surface Mode:** Experience  
**Status:** UX-refined direction for implementation

---

## 01. Brand Positioning

This is not a conventional student résumé website and should not visually behave like one.

The portfolio presents Karthik Kumar first as a **Software Engineer**, with supporting specialization across:

- AI / ML Systems
- Security Automation
- Developer Tooling
- Computer Vision (project-level)
- Automation (where supported by project evidence)

The latest resume centers the professional story on software engineering and secure systems development. The portfolio should therefore avoid presenting AI, security, and software systems as three equally weighted identities. The AI / ML systems thread is surfaced through flagship narration, not by relabeling the primary identity.

### Primary identity

> **SOFTWARE ENGINEER**

### Supporting specializations

> AI / ML Systems · Security Automation · Developer Tooling

Computer vision and automation can appear as project-level specialties where supported by the work.

### Brand statement

> **SYSTEMS, UNDER TEST.**

The concept is the portfolio's organizing platform, not the visitor's first required point of comprehension.

### Experience goal

Within the first 5–10 seconds, a visitor should understand:

```text
WHO
Karthik Kumar

WHAT
Software Engineer

FOCUS
AI / ML Systems · Security Automation · Developer Tooling

PROOF
Selected Work

ACTION
Work / Resume / GitHub / Contact
```

The portfolio's job is to communicate that Karthik builds systems, experiments with them, tests them, and learns through iteration — while keeping the person visible throughout.

## 02. Core Creative Concept

### SYSTEMS, UNDER TEST.

The portfolio is conceived as a **personal engineering archive**: part technical case-study system, part research notebook, part refined editorial interface.

The original field-manual concept remains distinctive and should be preserved. However, the metaphor is now deliberately subordinate to the person.

### Concept hierarchy

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

### Keep

- System Index
- Case Studies
- Field Notes
- Architecture
- progressive disclosure
- process diagrams
- evidence

### Reduce

- repeated system-language labels
- decorative archive terminology
- stacked monospace metadata
- inspection/state vocabulary when it adds no meaning

The interface is the medium. **Karthik is the subject.**

## 03. Visual Direction

### Overall character

**Editorial engineering archive × research notebook × technical instrument**

The design should be:

- precise
- mature
- technical
- editorial
- restrained
- tactile without skeuomorphism
- memorable without theatrics
- experimental without looking unfinished
- personal before conceptual

### Visual principle

The site should move between:

```text
PERSONAL / EDITORIAL
        ↕
TECHNICAL / SYSTEMATIC
```

Security and developer references remain secondary to personal identity.

### Avoid

Do not use the following as the dominant visual language:

- generic AI purple/blue gradients
- neon cyberpunk
- hacker-movie aesthetics
- excessive glassmorphism
- generic SaaS card grids
- dashboard-template layouts
- floating decorative blobs
- meaningless 3D objects
- stock technology photography
- generic robot/neural-network imagery
- excessive terminal windows
- fake data visualizations
- decorative glowing particles

The metaphor must feel structural and editorial rather than theatrical.

## 04. Color System

The portfolio uses a layered environment rather than one flat background.

### Locked palette

| Token | Hex | Role |
|---|---|---|
| `--color-graphite` | `#171918` | Primary dark environment, authority, deep project sections |
| `--color-field-paper` | `#F3F0E7` | Editorial narrative surfaces, profile and field notes |
| `--color-mist` | `#D8DED9` | Supporting surfaces, architecture/data areas |
| `--color-signal` | `#C96B45` | Primary interaction/highlight/action color |
| `--color-teal` | `#2C7C78` | Technical/system/data accent |

### Accessibility text variants

Accent colors are not automatically text-safe in every context.

| Token | Hex | Use |
|---|---|---|
| `--color-teal-text-light` | `#23615E` | Normal-sized technical text on paper/mist |
| `--color-teal-text-dark` | `#62B8B0` | Normal-sized technical text on graphite |
| `--color-signal-text-light` | `#9B4628` | Normal-sized signal/action text on paper/mist |
| `--color-text-muted` | `#59625D` | Muted text on paper/mist |

### Token-level contrast check

The current token set was checked using relative-luminance WCAG contrast calculations:

| Pair | Contrast | Normal body text |
|---|---:|---|
| Graphite / Field Paper | 15.50:1 | PASS |
| Teal / Field Paper | 4.32:1 | FAIL |
| Signal / Field Paper | 3.25:1 | FAIL |
| Muted / Field Paper | 5.53:1 | PASS |
| Dark Teal Text / Field Paper | 6.26:1 | PASS |
| Light Teal Text / Graphite | 7.57:1 | PASS |
| Signal / Graphite | 4.77:1 | PASS |
| Dark Signal Text / Field Paper | 5.58:1 | PASS |

These are token-level checks, not final implementation compliance. Rendered UI must be tested with actual font size, weight, state, surface, focus treatment, and component composition.

### Semantic rules

**Signal Terracotta `#C96B45`**

Use for:

- CTA backgrounds on dark surfaces
- selected/current project indicators
- arrows
- interaction details
- annotation highlights

Do not use as normal-sized body text on light surfaces. Use `--color-signal-text-light`.

**Oxidized Teal `#2C7C78`**

Use for:

- graphic strokes
- technical accents
- non-text architecture marks
- data-flow visuals

Use the text-safe teal variants for normal-sized text.

**Graphite `#171918`**

Use for deep project sections, strong introduction moments and the contact/footer transition.

**Field Paper `#F3F0E7`**

Use for personal narrative, profile, field notes and long-form reading.

**Mist `#D8DED9`**

Use as a supporting plane for architecture, evidence and transitions between dark/light environments.

Color is semantic, not ornamental.

## 05. Typography System

### Typography roles

The system has three typographic voices:

#### Display

A strong contemporary grotesk/editorial sans for:

- primary headline
- project titles
- major section statements

Characteristics:

- bold
- confident
- tight hierarchy
- generous visual scale
- short line lengths where possible

Example:

```text
SYSTEMS,
UNDER TEST.
```

#### Body

A neutral, highly readable sans-serif for:

- explanations
- biography
- project narratives
- supporting information

#### Technical

A restrained monospace face for:

- case numbers
- metadata
- labels
- architecture names
- stack information
- system states
- technical annotations

Monospace is a supporting layer, not the main personality.

### Typography principles

- One clear H1 per surface.
- Never skip heading hierarchy.
- Avoid long, narrow text columns for technical case studies.
- Avoid 6+ line hero headlines.
- Large display type must be balanced with substantial whitespace.
- Technical labels should remain readable on mobile.

---

## 06. Logo / Personal Mark

The brand mark should be a **reduced K + system-boundary symbol**.

### Concept

Combine:

- the initial `K`
- a partial structural frame
- a sense of construction/incompletion

The incomplete frame communicates that systems are continuously tested and improved.

### Rules

- The wordmark remains primary.
- The mark must work as favicon and small navigation symbol.
- Avoid generic shields, lightning bolts, neural nodes, robots, or generic circuit icons.
- Do not over-engineer the logo.
- The mark should remain legible at small sizes.

---

## 07. Navigation / Information Architecture

Do not default to:

`Home / About / Skills / Projects / Experience / Contact`

Use a concise, human-readable top-level structure:

```text
WORK
NOTES
PROFILE
CONTACT
```

Optional persistent action:

```text
RESUME ↗
```

### Brand navigation label

Replace the ambiguous:

```text
KARTHIK / 26
```

with:

```text
KARTHIK KUMAR
```

The System Index belongs inside Work. Conceptual vocabulary should not make the primary navigation harder to understand.

### Information architecture

```text
/
├── INTRODUCTION
├── WORK
│   ├── SYSTEM INDEX
│   ├── Math Adaptive Reasoning
│   ├── VAPTaaS
│   ├── Deception Platform
│   ├── NexCode
│   └── Crack Analysis
├── NOTES
├── PROFILE
└── CONTACT
```

## 08. Homepage Composition

### First-viewport priority

The first viewport must immediately establish:

1. Karthik Kumar
2. primary professional identity
3. core technical specializations
4. what he builds
5. where the proof/work is

### Recommended hero structure

```text
KARTHIK KUMAR

SOFTWARE ENGINEER

AI / ML SYSTEMS · SECURITY AUTOMATION · DEVELOPER TOOLING

I build practical software systems through
experimentation, iteration, and engineering depth.

[ VIEW WORK ↗ ]   [ RESUME ↗ ]

SYSTEMS, UNDER TEST.
```

The exact prose can be refined from verified source material during implementation; it must not invent credentials, metrics, employers or unsupported claims.

### System Index

The index should follow quickly enough that the visitor can reach proof without learning the metaphor first.

```text
SELECTED WORK

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

Project name carries the primary visual weight. Purpose carries secondary but immediate visual weight. Order follows the canonical specialization hierarchy; numbers carry no rank (see PRD §7.3).


## 09. Human Presence

The portfolio should introduce evidence of the person before extended technical depth.

### Early profile strip

Use a concise human block such as:

```text
ABOUT THE BUILDER

Karthik Kumar
B.Tech CSE (AI & ML)
Madanapalle Institute of Technology & Science

Currently exploring intelligent systems,
software engineering, and security.
```

Use only source-verified facts.

### Personal interruptions

Inside case studies, insert brief observations that reveal how Karthik thinks.

Pattern:

```text
FIELD OBSERVATION

What looked like a model problem
was partly a dataset problem.
```

The example above is a storytelling pattern only; final copy must come from a real documented experience.

### Human dimensions to surface

Where evidence exists, show:

- education
- current direction
- experimentation
- learning
- engineering philosophy
- genuine interests
- leadership
- practical observations

Do not create a long biography.

## 10. Project Experience

Projects are **case studies**, not card collections.

### Required narrative

Each flagship project should communicate:

```text
Problem
↓
Context
↓
Approach
↓
System / Architecture
↓
Implementation
↓
Challenges
↓
Iterations
↓
Result
↓
Lessons
```

### Standard metadata grammar

Every case study can expose a consistent metadata rail:

```text
CASE
DISCIPLINE
INPUT
SYSTEM
STACK
ITERATIONS
OUTPUT
```

This creates consistency across projects while allowing different technical stories.

### Project-specific storytelling

Do not force all projects into identical layouts.

Examples:

**VAPTaaS**

Focus on orchestration and defensive automation:

```text
Target
↓
FastAPI
↓
Celery / Redis
↓
Nmap + Nikto + ZAP
↓
Normalized Findings
↓
PostgreSQL
↓
Remediation
```

**NexCode**

Focus on code intelligence and graph-based context:

```text
SOURCE
↓
PARSE
↓
GRAPH
↓
CONTEXT
↓
ACTION
```

**Deception Platform**

Focus on attack capture and isolation:

```text
ATTACK
↓
DECEPTION
↓
CAPTURE
↓
NORMALIZE
↓
ANALYZE
↓
VISUALIZE
```

**Crack Analysis**

Focus on computer vision and inspection:

```text
IMAGE
↓
DETECTION
↓
MEASUREMENT
↓
SEVERITY
```

**Math Adaptive Reasoning**

Focus on the AI / ML systems research thread — an empirical, hypothesis-testing pilot.

```text
PROBLEM
↓
HYPOTHESIS
↓
EXPERIMENT (pilot)
↓
OBSERVATION
```

Present the stage honestly: no classifier, router, or verifier is built yet; the case study
shows how a research question is turned into a controlled experiment. Do not fabricate
performance claims, user counts, production usage, awards, or metrics that are not verified.

---


## 11. Signature Interaction — System Thread

Introduce one memorable interaction beyond typography and ordinary scroll reveals.

### Concept

```text
INPUT ───── PROCESS ───── TEST ───── RESULT
```

The System Thread can become:

- project navigation
- progress indicator
- architecture connector
- scroll-context device

### Rules

- Keep it visually quiet.
- Activate only when relevant.
- Use motion to communicate progression.
- Support keyboard navigation.
- Collapse to a simple vertical/step indicator on mobile.
- Become static under reduced-motion settings.

The thread is a reusable brand mechanic, not a reason to label every section with the words INPUT / PROCESS / TEST / RESULT.

## 12. PROJECT STORYTELLING DIVERSITY

Do not force all case studies into the same page composition.

Maintain the same:

- typography
- color language
- metadata grammar
- navigation
- interaction language

But let each technical domain choose its own visual storytelling medium.

### Computer Vision

Image-led evidence, detections, measurement, and inspection visuals.

### Security Automation

Pipeline/orchestration diagrams and service relationships.

### Developer Tooling

Code graphs, context flows, and action paths.

### GenAI

Interaction, reasoning, and tool-flow diagrams only when supported by real work.

The brand stays consistent. The storytelling medium changes.

## 13. Field Notes

Field Notes are intentionally more personal than a résumé.

They should document authentic engineering observations, decisions, failures, experiments, or lessons.

Example structure:

```text
FIELD NOTE 014

WHY I STOPPED TREATING
PROJECTS AS FEATURES
```

or

```text
FIELD NOTE 009

WHAT A FAILED DATASET
TAUGHT ME ABOUT MODEL QUALITY
```

or

```text
FIELD NOTE 006

WHY I BUILT A GRAPH
BEFORE ASKING AN LLM TO CODE
```

Only publish notes supported by real experience.

---

## 14. Resume / Professional Evidence

The portfolio should not reproduce the résumé section-for-section.

The résumé remains evidence that can be surfaced contextually.

### Current professional evidence to represent

- B.Tech CSE (AI & ML), Madanapalle Institute of Technology & Science
- AI/ML internship experience
- Google Android Developer internship
- Cybersecurity internship experience
- Machine Learning internship experience
- AI / security / software-systems project work
- relevant certifications
- technical-event leadership

The detailed résumé should be downloadable from the Profile area.

When sources disagree, the latest verified source should be treated as the authoritative content source; do not silently invent or reconcile facts.

---

## 15. Motion System

Motion communicates **system behavior**, not decoration.

### Signature motion

Whenever a project introduces an architecture, reveal the stages progressively.

Example:

```text
TARGET
  ↓
RECON
  ↓
SCAN
  ↓
NORMALIZE
  ↓
FINDINGS
```

### Motion principles

- Prefer transform and opacity-based animation.
- Use meaningful sequencing.
- Use subtle physical easing.
- Avoid perpetual animation.
- Avoid random floating particles.
- Avoid animated gradients as a primary visual device.
- Avoid animation that delays access to content.
- Respect `prefers-reduced-motion`.

### Reduced motion

For reduced-motion users:

- replace sequencing with static diagrams
- remove parallax
- remove large transforms
- preserve hierarchy and state through static styling

---

## 16. Interaction Language

### Primary CTA

Use concise action-oriented language:

- `VIEW SYSTEMS ↗`
- `OPEN CASE ↗`
- `READ FIELD NOTE ↗`
- `VIEW ARCHITECTURE ↗`
- `GITHUB ↗`

Avoid generic:

- Learn More
- Click Here
- Explore More
- See My Work

### Button behavior

Buttons should have clear states:

- default
- hover
- focus-visible
- active
- disabled where necessary

The terracotta signal color should identify primary action.

---

## 17. Responsive Behavior

The concept must work without preserving desktop complexity on smaller screens.

### Desktop

Use:

- asymmetric editorial composition
- side index
- architecture diagrams
- larger display type
- layered environmental transitions

### Tablet

Simplify the index and reduce layout asymmetry.

### Mobile

Use a single-column reading flow.

Project structure:

```text
CASE 01
VAPTaaS

PROBLEM
...

SYSTEM
...

ARCHITECTURE
...

RESULT
...
```

Rules:

- no overlapping interactive elements
- no tiny diagrams
- no horizontal overflow
- minimum comfortable touch targets
- do not depend on hover
- keep navigation reachable
- preserve the brand's typography hierarchy

Target test widths:

- 320px
- 375px
- 768px
- 1024px
- 1440px

---

## 18. Accessibility

The visual concept must not compromise accessibility.

Minimum requirements:

- WCAG AA contrast for normal text
- visible keyboard focus
- semantic HTML
- correct heading hierarchy
- accessible navigation labels
- keyboard-accessible controls
- meaningful link text
- alt text for meaningful images
- no information conveyed by color alone
- reduced-motion support
- readable text sizes on mobile

The editorial/technical aesthetic is secondary to usable communication.

---

## 19. Performance

Visual quality must remain production-friendly.

### Do

- optimize images
- prefer SVG for diagrams and simple marks
- lazy-load non-critical imagery
- animate transform/opacity
- keep motion localized
- use CSS where appropriate
- avoid expensive continuous blur/filter effects

### Avoid

- large unoptimized background videos
- continuously animated canvases without purpose
- scroll handlers that cause continuous layout work
- heavy blur over large scrolling areas
- decorative effects that materially degrade mobile performance

---

## 20. Content Integrity

The portfolio must never fabricate:

- projects
- employers
- awards
- metrics
- users
- production deployments
- research
- certifications
- technical contributions
- performance claims

When evidence is missing, either omit the claim or mark it for verification.

Technical copy should explain what was actually built.

---

## 21. Personal Brand Consistency

The same visual grammar should eventually extend to:

- portfolio
- résumé
- GitHub profile README
- LinkedIn profile presentation
- project thumbnails
- diagrams
- favicon
- social preview / OG image
- contact surface

Core elements that should stay recognizable:

- K + structural mark
- Graphite / Paper / Mist environment
- Signal Terracotta
- Oxidized Teal
- display + body + monospace type roles
- `SYSTEMS, UNDER TEST.` language
- case-study metadata grammar
- restrained technical annotations

---

## 22. UX Guardrails

### Recruiter path

The visitor should be able to understand the following almost immediately:

```text
WHO: Karthik Kumar
WHAT: AI / Security / Software Systems
PROOF: Selected systems
ACTION: Open a case / Resume
```

### Technical visitor path

The visitor should be able to reach:

- architecture
- implementation choices
- stack
- iterations
- trade-offs
- GitHub
- technical evidence

without navigating through a marketing-heavy funnel.

### Collaborator path

The visitor should be able to find:

- what Karthik is interested in
- what he builds
- field notes
- contact methods

### Progressive disclosure

Content depth should increase in layers:

```text
LEVEL 1 — What was built?
LEVEL 2 — How does it work?
LEVEL 3 — Why this approach?
LEVEL 4 — What went wrong?
LEVEL 5 — What changed / what was learned?
```

---

## 23. UX Critique Findings Incorporated Into Design

The concept was checked against the available UX critique principles before lock-in.

### Risk: developer cosplay

**Mitigation:** editorial field-manual language is primary; terminal/security vocabulary is secondary.

### Risk: recruiter confusion

**Mitigation:** identity + specialization + project proof appear in the first viewport.

### Risk: excessive technical depth

**Mitigation:** progressive disclosure lets different audiences choose their depth.

### Risk: unrelated project disciplines

**Mitigation:** use a shared metadata grammar and brand system, while allowing each project its own narrative visualization.

### Risk: mobile breakdown

**Mitigation:** single-column mobile case studies, no hover dependency, no overlap, no tiny diagrams.

### Risk: security cliché

**Mitigation:** use paper, mist and teal alongside graphite and terracotta; avoid constant dark neon styling.

---

## 24. Design Tokens — Initial Set

```css
:root {
  --color-graphite: #171918;
  --color-field-paper: #F3F0E7;
  --color-mist: #D8DED9;
  --color-signal: #C96B45;
  --color-teal: #2C7C78;

  --color-text-on-dark: #F3F0E7;
  --color-text-on-light: #171918;
  --color-text-muted: #59625D; /* authoritative — matches ARCHITECTURE §9.1; older #66706B is retired */
  --color-border-light: rgba(23, 25, 24, 0.14);
  --color-border-dark: rgba(243, 240, 231, 0.16);

  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 18px;

  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-24: 6rem;
  --space-32: 8rem;

  --content-max: 1440px;
  --reading-max: 720px;
}
```

These are starting tokens, not permission to introduce arbitrary values. Extend the system intentionally.

---

## 25. Implementation Rules

Use semantic HTML and a maintainable component architecture.

Recommended conceptual component set:

```text
BrandMark
SiteNav
HeroStatement
SystemIndex
CaseStudy
CaseMeta
ArchitectureDiagram
EvidencePanel
FieldNote
ProfileBlock
ResumeLink
ContactBlock
Footer
```

Separate content/data from visual components where practical.

Do not build one giant portfolio component.

---

## 26. Definition of Done

The portfolio is not considered on-brand until it passes these checks in a rendered implementation:

- It reads as a personal brand, not a résumé.
- `SYSTEMS, UNDER TEST.` is understandable as the organizing concept.
- AI, security and software systems are visible without competing for attention.
- The first viewport establishes identity and proof quickly.
- Projects are experienced as systems/case studies rather than card grids.
- The palette uses layered environments rather than one flat color.
- Terracotta is used as a semantic action signal.
- Teal is used as a technical/system accent.
- Motion explains processes rather than decorating them.
- Mobile retains the concept instead of becoming a broken desktop layout.
- Accessibility remains intact.
- No unsupported claims are introduced.
- The experience feels authored specifically for Karthik.

---

## 27. UX Audit / Art-Direction Refinement Gate

After implementation, perform a complete rendered review.

### Task entry

- Can a visitor understand who Karthik is within 5–10 seconds?
- Is Software Engineer immediately visible?
- Are supporting specializations clear?
- Is selected work immediately reachable?

### Discoverability

- Work
- Resume
- GitHub
- Contact
- project purpose

### Information architecture

- Does the System Index improve navigation?
- Does the top-level vocabulary remain familiar?
- Does progressive disclosure work without hiding essential actions?

### Hierarchy

- Does the name outrank the concept?
- Does the primary identity outrank secondary disciplines?
- Does evidence compete successfully with decorative treatment?

### Interaction friction

- Are interactions understandable without experimentation?
- Does System Thread add orientation rather than confusion?
- Are controls keyboard accessible?

### Trust

- Is meaningful project evidence visible early?
- Are claims source-supported?
- Are GitHub/resume paths obvious?

### Accessibility

Validate actual implementation for:

- contrast
- focus
- keyboard navigation
- target sizes
- reading order
- reduced motion
- semantic hierarchy
- mobile reflow

### Mobile

Test:

```text
320px
375px
768px
1024px
1440px
```

Do not merely scale the desktop composition.

### Final rule

If a problem is caused by hierarchy, copy, information architecture, or evidence, solve that problem directly. Do not use more animation as a substitute.

## 28. Future Design Workflow

For subsequent portfolio work, use this order:

```text
SOURCE RESEARCH
    ↓
BRAND PROFILE
    ↓
CREATIVE DIRECTION
    ↓
UX / IA
    ↓
VISUAL DESIGN
    ↓
IMPLEMENTATION
    ↓
UX CRITIQUE
    ↓
DESIGN QA
    ↓
REFINEMENT
    ↓
RESPONSIVE + ACCESSIBILITY REVIEW
```

Every major design change should update this file rather than silently creating a conflicting visual language.

---

## 29. Locked Decisions

| Decision | Status |
|---|---|
| Personal-brand positioning | LOCKED |
| Core concept: SYSTEMS, UNDER TEST. | LOCKED |
| Editorial engineering field-manual direction | LOCKED |
| Layered graphite/paper/mist environments | LOCKED |
| Signal Terracotta `#C96B45` | LOCKED |
| Oxidized Teal `#2C7C78` | LOCKED |
| System Index interaction | LOCKED |
| Case-study-first project presentation | LOCKED |
| Field Notes section | LOCKED |
| Progressive technical disclosure | LOCKED |
| Motion based on system/process behavior | LOCKED |
| No generic AI / cyberpunk aesthetic | LOCKED |

Changes to locked decisions should be treated as a deliberate art-direction revision, not incidental implementation choices.


---

# UX Refinement Changelog — 2026-09-18

| Area | Previous direction | Refined direction |
|---|---|---|
| Primary identity | AI / Security / Software Systems visually balanced | **Software Engineer** first |
| Hero | Concept first | **Person → Role → Specializations → Proof → Concept** |
| Navigation label | `KARTHIK / 26` | `KARTHIK KUMAR` |
| System Index | Project names + disciplines | **Project names + plain-language purpose** |
| Human context | Later in journey | Introduced earlier and repeated through observations |
| Vocabulary | Dense conceptual labels | Selective, comprehension-first vocabulary |
| Project layouts | Shared case structure | Shared brand rules + domain-specific storytelling |
| Signature interaction | Scroll/motion emphasis | **System Thread** with navigational meaning |
| Color accessibility | Base accents reused broadly | Text-safe semantic variants + token checks |
| Field Notes | Branded section | Authentic-material section, optional in depth |
| QA | Concept-level | Explicit rendered UX + accessibility gate before finalization |
| Specializations | Varied spellings (`AI/ML · Security · Developer Tooling`, `Security Engineering`, …) | **`AI / ML Systems · Security Automation · Developer Tooling`** (canonical labels + order) |
| Flagship set | VAPTaaS · NexCode · Deception · Crack · Security Header Analysis | **VAPTaaS · NexCode · Deception · Crack · Math Adaptive Reasoning** (Security Header displaced 2026-09-18 on evidence grounds — `planning/evidence/MATRIX.md`) |
| AI/ML visibility | Supporting phrase only | **AI / ML systems thread surfaced via flagships + hero narration; identity stays Software Engineer** |
| Muted text token | `--color-text-muted: #66706B` | **`#59625D`** (matches ARCHITECTURE §9.1) |
| Document location | `DESIGN(2).md` at repo root | **`planning/DESIGN.md`** (moved with the other planning docs 2026-09-18) |

**North star:**

> The interface should help visitors understand **how Karthik thinks, builds, tests, and learns**. It should never require visitors to admire the interface before they can understand the person.
