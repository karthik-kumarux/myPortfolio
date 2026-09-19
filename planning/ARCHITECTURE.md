# Karthik Kumar — Portfolio Technical Architecture

**Product:** Karthik Kumar Personal Brand Portfolio  
**Core Concept:** **SYSTEMS, UNDER TEST.**  
**Architecture Goal:** Implement the approved design without turning the portfolio into an overengineered application.  
**Status:** Implementation-ready technical plan  

---

# 1. Architecture Overview

## 1.1 Application type

A **content-driven, static-first personal-brand website** with a small client-side interaction layer.

The portfolio is primarily a reading/experience product. Most content should be renderable without a server-side application or runtime backend.

## 1.2 Rendering model

Preferred model:

- static generation for homepage, Work index, Profile, Contact and project pages;
- generated pages for Field Notes when notes exist;
- client-side JavaScript only where interaction requires it;
- no server runtime required for the initial product unless a genuine requirement emerges.

This keeps the visual experience fast and reduces infrastructure/security surface area.

## 1.3 Current codebase assessment

The accessible public repository is `karthik-kumarux/personal_portfolio`.

The accessible repository currently exposes a legacy static `index.html` with basic HTML/CSS and no verified `package.json`, React/Next/Astro application structure, or existing modern routing system.

The legacy file contains generic portfolio content and styling that directly conflicts with the approved design direction. Therefore:

### Remove / replace

- legacy blue header treatment;
- generic centered résumé-like section layout;
- generic white card grid;
- outdated project list;
- stale typography and styling;
- incorrect/typoed contact content present in the legacy file;
- generic `AI & ML Enthusiat` positioning.

### Preserve only as factual reference

- repository identity;
- original project/contact linkage ideas where still verified;
- any content that is revalidated against the current resume/GitHub.

### Working-codebase caveat

The public repository may not be the same as the latest local/workspace implementation. Before replacing any active implementation, inspect the actual working tree and record the real framework/build system. Do not rewrite an unknown active application based solely on the legacy public snapshot.

## 1.4 Recommended implementation baseline if no newer stack exists

If the active working codebase has no established modern framework, use:

- **Astro + TypeScript** for static-first rendering and route generation;
- native CSS with CSS custom properties/tokens for the design system;
- SVG for diagrams, the System Thread and brand marks;
- minimal client-side TypeScript for interaction;
- optional motion library only if a concrete interaction cannot be implemented efficiently with CSS/SVG/IntersectionObserver.

This is a recommendation, not permission to replace a working stack that has already been established locally.

## 1.5 Why static-first

The portfolio has:

- content-heavy case studies;
- mostly deterministic routes;
- no confirmed authenticated user experience;
- no confirmed database requirement;
- no requirement for server-side portfolio state;
- strong performance and SEO needs.

A static-first architecture therefore satisfies the product without introducing unnecessary backend complexity.

---

# 2. Technology Decisions

| Area | Decision | Reason | Alternatives | Trade-off |
|---|---|---|---|---|
| Rendering | Static generation preferred | Fast, secure, SEO-friendly | SSR | SSR unnecessary without runtime data |
| Language | TypeScript recommended | Strong typing for content and interaction state | JavaScript | Slight setup overhead, better maintainability |
| Framework | Astro if no existing modern framework | Strong static/content model with isolated interactivity | Next.js, React/Vite | Astro adds a migration decision if a working React app already exists |
| Styling | Native CSS + custom properties | Precise art direction, clear semantic tokens, less utility noise | Tailwind/CSS Modules | More manual CSS discipline |
| Content | Typed data + Markdown/MDX | Separates content from visual components | Hardcoded TS/JS arrays | Requires content schema discipline |
| Motion | CSS/SVG/IntersectionObserver first | Small runtime and predictable performance | GSAP/Framer Motion | Complex scroll choreography may need an additional library later |
| Diagrams | SVG components/data-driven SVG | Accessible, crisp, scalable | Canvas | SVG easier to inspect and responsive |
| Icons | Inline SVG or existing dependency | Avoid unnecessary icon-library weight | Icon package | More manual icon management |
| Analytics | None initially | No evidence of a requirement | Plausible/GA/etc. | Less measurement until a real need exists |
| Backend | None initially | No confirmed backend requirement | API/serverless | Lower operational/security burden |
| Deployment | GitHub Pages | Static output, HTTPS, free hosting; approved 2026-09-18. No evidence of another approved target | Static hosting providers | Custom-domain mapping remains owner TBD |

### Technology rule

Do not add dependencies merely because they are common in creative portfolios.

Every dependency should have a specific responsibility.

---

# 3. System Architecture

```text
USER
  ↓
ROUTER
  ↓
PAGE / EXPERIENCE
  ↓
CONTENT MODEL
  ↓
DESIGN SYSTEM
  ├── Typography
  ├── Color tokens
  ├── Spacing
  ├── Layout primitives
  └── Interaction states
  ↓
INTERACTION LAYER
  ├── System Index
  ├── System Thread
  ├── Case-study transitions
  └── Reduced-motion adapter
  ↓
ASSET LAYER
  ├── SVG diagrams
  ├── Project screenshots
  ├── Brand assets
  └── Open Graph / favicon
```

No database or API is required for the initial portfolio unless a new product requirement explicitly introduces one.

---

# 4. Application Structure

Recommended conceptual structure:

```text
src/
├── components/
│   ├── brand/
│   │   ├── BrandMark
│   │   └── BrandWordmark
│   ├── navigation/
│   │   ├── SiteNav
│   │   ├── WorkIndex
│   │   └── ResumeLink
│   ├── hero/
│   │   └── HeroStatement
│   ├── case-study/
│   │   ├── CaseStudyShell
│   │   ├── CaseMeta
│   │   ├── ArchitectureDiagram
│   │   ├── EvidencePanel
│   │   ├── ProjectMedia
│   │   └── ProjectStorySection
│   ├── notes/
│   │   ├── FieldNoteList
│   │   └── FieldNotePreview
│   ├── profile/
│   │   ├── ProfileBlock
│   │   └── ResumeAction
│   ├── contact/
│   │   └── ContactBlock
│   ├── system-thread/
│   │   ├── SystemThread
│   │   └── SystemThreadMobile
│   └── primitives/
│       ├── Button
│       ├── Link
│       ├── SectionHeading
│       └── VisuallyHidden
├── content/
│   ├── projects/
│   └── notes/
├── data/
│   ├── profile.ts
│   └── navigation.ts
├── styles/
│   ├── tokens.css
│   ├── globals.css
│   ├── typography.css
│   └── motion.css
├── assets/
│   ├── brand/
│   ├── projects/
│   ├── diagrams/
│   └── social/
└── pages/
    ├── index
    ├── work
    ├── work/[slug]
    ├── notes
    ├── notes/[slug]
    ├── profile
    └── contact
```

The exact directory syntax may change with the existing framework. The architectural boundaries should remain.

### Component rules

- Components own presentation and interaction behavior.
- Content owns factual text/data.
- Animation primitives are reusable and centralized.
- Project-specific visual composition is expressed through a `storytellingMode`, not copied page components.
- Avoid one giant portfolio page component.

---

# 5. Route Architecture

Target route tree:

```text
/
 /work
   /work/vaptaas
   /work/nexcode
   /work/deception-platform
   /work/crack-analysis
   /work/math-adaptive-reasoning
 /notes
   /notes/[slug]
 /profile
 /contact
```

Resume is a direct verified asset/action unless a dedicated route becomes necessary.

## Routing requirements

- Every project route is deep-linkable.
- Every route has a semantic primary heading.
- Navigating directly to a case study does not depend on homepage animation state.
- Back/forward navigation preserves normal browser semantics.
- No client-side router is required if the selected framework can generate stable static routes.

---

# 6. Content Architecture

Content must remain separate from presentation.

## 6.1 Project schema

Recommended logical schema:

```ts
interface Project {
  id: string;
  slug: string;
  title: string;
  shortPurpose: string;
  discipline: string;
  summary: string;
  problem?: string;
  context?: string;
  approach?: string;
  architecture?: ArchitectureSection;
  implementation?: string;
  challenges?: string[];
  iterations?: string[];
  result?: string;
  lessons?: string[];
  stack: string[];
  githubUrl?: string;
  demoUrl?: string;
  media?: ProjectMedia[];
  metrics?: VerifiedMetric[];
  evidence?: EvidenceItem[];
  storytellingMode: StorytellingMode;
}
```

Not every field should be required.

A missing field means the project source does not currently support that claim/section.

### Required fields

- `id`
- `slug`
- `title`
- `shortPurpose`
- `summary`
- `stack`
- `storytellingMode`

### Optional fields

- problem
- context
- approach
- architecture
- implementation
- challenges
- iterations
- result
- lessons
- GitHub/demo
- screenshots
- metrics
- evidence

### Verification metadata

When practical, source metadata may be represented internally as:

```ts
interface EvidenceItem {
  type: 'github' | 'resume' | 'screenshot' | 'metric' | 'demo' | 'documentation';
  label: string;
  verified: boolean;
  url?: string;
  note?: string;
}
```

This prevents unsupported claims from silently becoming production copy.

## 6.2 Storytelling mode

```ts
type StorytellingMode =
  | 'ai-ml-systems'
  | 'security-orchestration'
  | 'developer-tooling'
  | 'computer-vision'
  | 'systems-architecture';
```

The content model remains unified while the visual composition changes by domain. Mode names
follow the canonical specialization labels (AI / ML Systems → Security Automation →
Developer Tooling). `math-adaptive-reasoning` uses `ai-ml-systems`; crack-analysis uses
`computer-vision`; VAPTaaS and the Deception Platform use `security-orchestration`;
NexCode uses `developer-tooling`; diagrams/architecture use `systems-architecture`.

## 6.3 Field Note schema

```ts
interface FieldNote {
  slug: string;
  title: string;
  date?: string;
  summary: string;
  body: string;
  relatedProjectIds?: string[];
  sourceVerified: boolean;
}
```

`sourceVerified` must be true before publication.

---

# 7. Source-Verified Content Model

The initial content seed should be based on current source material.

## Identity

- Name: Karthik Kumar / Minuga Karthik Kumar, preserving the currently approved display name as `KARTHIK KUMAR`.
- Primary identity: Software Engineer.
- Education: B.Tech CSE (AI & ML), Madanapalle Institute of Technology & Science.

## Supporting themes

Canonical order and labels (lock across all docs):

- AI / ML Systems
- Security Automation
- Developer Tooling
- Computer Vision (project-level specialty, surfaced by crack-analysis)

## Experience

The resume currently contains AI/ML, Android development, cybersecurity and machine-learning internship experience. Exact date ranges and employer names must be read from the verified resume source at content-entry time rather than retyped from memory.

## Selected work

The initial selected set is:

1. Math Adaptive Reasoning
2. VAPTaaS
3. Distributed Honeypot / Deception Platform
4. NexCode
5. Crack Detection & Severity Analysis

Order follows the canonical specialization hierarchy (AI / ML Systems → Security Automation →
Developer Tooling). Security Header Analysis was displaced from this set on 2026-09-18 on
evidence grounds — `planning/evidence/MATRIX.md` documents the claim-by-claim basis.

## Content caution

The resume and GitHub may contain wording or metrics with different scopes. Preserve source wording and attach evidence before surfacing sensitive claims such as performance numbers.

---

# 8. Evidence Architecture

A case study should expose evidence in an intentional hierarchy.

```text
PROJECT
  ├── PURPOSE
  ├── ARCHITECTURE
  ├── IMPLEMENTATION
  ├── REAL SCREENSHOT / DIAGRAM
  ├── VERIFIED RESULT
  ├── GITHUB
  └── LESSON
```

## Evidence rules

- GitHub links must point to the verified repository.
- Screenshots must come from the real project.
- Metrics must have source scope.
- Architecture diagrams must reflect the implemented system, not aspirational architecture.
- Decorative pseudo-data must not resemble genuine project telemetry.

---

# 9. Design System Architecture

## 9.1 Color tokens

```css
:root {
  --color-graphite: #171918;
  --color-field-paper: #F3F0E7;
  --color-mist: #D8DED9;
  --color-signal: #C96B45;
  --color-teal: #2C7C78;

  --color-teal-text-light: #23615E;
  --color-teal-text-dark: #62B8B0;
  --color-signal-text-light: #9B4628;
  --color-text-muted: #59625D;

  --color-text-on-dark: #F3F0E7;
  --color-text-on-light: #171918;
  --color-border-light: rgba(23, 25, 24, 0.14);
  --color-border-dark: rgba(243, 240, 231, 0.16);
}
```

### Accessibility rule

Base teal and signal are visual accents. Text components must use safe semantic variants when required by context.

Do not duplicate an older muted token from a previous design version.

## 9.2 Typography roles

```text
DISPLAY
BODY
TECHNICAL
```

Exact font family is **TBD** until the current implementation/design assets are inspected. The typography contract matters more than choosing a named font blindly.

## 9.3 Spacing

Use the existing design token scale rather than arbitrary values.

```css
:root {
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
}
```

## 9.4 Layout tokens

```css
:root {
  --content-max: 1440px;
  --reading-max: 720px;
}
```

Do not introduce arbitrary one-off spacing or widths without updating the system intentionally.

---

# 10. Component Architecture

## 10.1 `BrandMark`

Responsibility:

- render the K + structural mark;
- support navigation/favicon variants;
- avoid containing page-specific behavior.

## 10.2 `SiteNav`

Responsibility:

- `WORK`, `NOTES`, `PROFILE`, `CONTACT`;
- Resume action;
- accessible open/close behavior on mobile;
- focus management if a mobile menu exists.

## 10.3 `HeroStatement`

Responsibility:

- identity;
- Software Engineer role;
- supporting specializations;
- verified positioning statement;
- primary actions.

## 10.4 `SystemIndex`

Responsibility:

- selected project navigation;
- project title + plain-language purpose;
- current state;
- keyboard/touch behavior;
- integration with System Thread only where useful.

## 10.5 `CaseStudy`

Responsibility:

- common narrative shell;
- project metadata;
- progressive disclosure;
- project-specific storytelling renderer.

## 10.6 `ArchitectureDiagram`

Responsibility:

- render verified architecture;
- provide semantic alternative when diagram cannot be understood non-visually;
- support static reduced-motion output.

## 10.7 `EvidencePanel`

Responsibility:

- GitHub;
- screenshots;
- verified metrics;
- documentation/evidence links.

## 10.8 `FieldNote`

Responsibility:

- render authentic note content;
- show related projects where available.

## 10.9 `ProfileBlock`

Responsibility:

- concise verified human context;
- education/current direction;
- resume action.

## 10.10 `ContactBlock`

Responsibility:

- verified contact paths;
- no unnecessary server-side form.

## 10.11 `SystemThread`

Responsibility:

- represent `INPUT → PROCESS → TEST → RESULT`;
- orient the user;
- expose stage state accessibly;
- remain static when reduced motion is active.

---

# 11. Interaction Architecture

## 11.1 System Index state

Logical state:

```ts
interface SystemIndexState {
  activeProjectId?: string;
  focusedProjectId?: string;
  inputMethod: 'pointer' | 'keyboard' | 'touch';
}
```

Avoid using URL state unless the design requires shareable selected-state behavior.

## 11.2 Navigation states

All primary links/buttons require:

- default;
- hover, where applicable;
- focus-visible;
- active;
- disabled only where actually necessary.

Do not encode meaning solely through color.

---

# 12. Motion Architecture

Motion has four layers.

## 12.1 Content reveal

Use for section entrance and reading rhythm.

Preferred mechanism:

- CSS transitions/animations;
- IntersectionObserver only for viewport-triggered activation;
- no continuous scroll handler that recalculates layout.

## 12.2 System animation

Used for architecture/process progression.

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

## 12.3 Interaction animation

Used for:

- hover;
- focus;
- active states;
- CTA feedback.

## 12.4 Signature animation

System Thread gets the most intentional motion treatment because it is a brand interaction.

### Motion constraints

- transform/opacity preferred;
- SVG stroke/progress can be used for thread progression;
- no perpetual motion;
- no animation gating access to content;
- no large blur/paint-heavy effect over scrolling surfaces;
- respect `prefers-reduced-motion`.

### Duration guidance

Use short interaction feedback and longer section choreography only where content comprehension benefits. Exact durations are implementation-tunable within the design system; avoid creating dozens of unrelated timings.

---

# 13. System Thread Technical Design

## 13.1 Data model

```ts
interface SystemThreadStep {
  id: 'input' | 'process' | 'test' | 'result';
  label: string;
  status: 'upcoming' | 'active' | 'complete';
  anchorId?: string;
}
```

## 13.2 Desktop behavior

- horizontal thread;
- active step visually distinct;
- clicking a step may move focus/scroll to the corresponding section when that mapping exists;
- thread remains understandable when animation is removed.

## 13.3 Mobile behavior

- vertical step list or compact progress rail;
- no tiny text;
- no required horizontal panning;
- no competition with navigation.

## 13.4 Keyboard behavior

If steps are interactive, implement real buttons/links.

Do not create clickable `div`s.

Focus order follows document order.

## 13.5 Screen-reader behavior

The visual thread must have an equivalent semantic representation. Decorative lines are `aria-hidden`; meaningful step labels are exposed in accessible text.

## 13.6 Reduced-motion behavior

Render the same steps and state without animated movement.

---

# 14. Responsive Architecture

## 14.1 1440px / desktop

Priorities:

- strong editorial composition;
- side/secondary index where it helps;
- project-specific diagrams;
- large display typography;
- layered environmental transitions.

## 14.2 1024px

Priorities:

- reduce spatial asymmetry;
- maintain clear two-column layouts only when content width supports them;
- simplify persistent navigation.

## 14.3 768px / tablet

Priorities:

- move toward stacked compositions;
- reduce simultaneous fixed elements;
- preserve project/purpose hierarchy.

## 14.4 375px / mobile

Priorities:

- single-column reading flow;
- compact navigation;
- vertical System Thread;
- no hover dependence;
- no tiny architecture text;
- no overlapping sticky elements.

## 14.5 320px

Use as a hard stress test.

Ensure:

- no horizontal overflow;
- no clipped project titles;
- buttons remain reachable;
- reading width remains comfortable;
- navigation remains understandable.

---

# 15. Asset Architecture

Recommended asset structure:

```text
public/
├── brand/
│   ├── mark.svg
│   ├── wordmark.svg
│   └── favicon.svg
├── projects/
│   ├── math-adaptive-reasoning/
│   ├── vaptaas/
│   ├── deception-platform/
│   ├── nexcode/
│   └── crack-analysis/
├── diagrams/
├── notes/
└── social/
    └── og-default.png
```

## Asset rules

- Prefer SVG for diagrams and simple marks.
- Use modern raster formats where appropriate for screenshots/photos.
- Optimize images before shipping.
- Use responsive image sizes where supported.
- Lazy-load below-the-fold non-critical images.
- Do not hotlink third-party assets unless licensing/source is documented.
- Use descriptive filenames.
- Provide meaningful alt text for content-bearing images.
- Mark decorative images as decorative.

---

# 16. Performance Architecture

## Rendering

Prefer pre-rendered HTML for content pages.

## JavaScript

Ship JavaScript only for actual interaction:

- mobile navigation;
- System Index behavior;
- System Thread behavior;
- controlled motion enhancements.

## Images

- lazy-load below-the-fold media;
- responsive sizes;
- compressed source assets;
- no oversized background images where a smaller crop works.

## Motion

- avoid continuous `scroll` listeners;
- use IntersectionObserver for entry states;
- use transform/opacity where possible;
- avoid large scrolling blur/filter areas;
- stop or simplify motion when users request reduced motion.

## Performance acceptance

The site should feel immediate on mainstream mobile and desktop devices. Exact performance budgets are **TBD** until the actual application is rendered and profiled.

---

# 17. Accessibility Architecture

## Semantic structure

Use:

- `header`;
- `nav`;
- `main`;
- `section`;
- `article`;
- `footer`;
- headings in logical order;
- native `button`/`a` elements.

## Keyboard

All essential controls must:

- be focusable;
- show a visible focus state;
- activate with standard keyboard semantics;
- preserve reading order.

## ARIA

Use ARIA only when native semantics are insufficient.

## Color

Implement semantic token mapping, not raw accent color reuse.

## Motion

Use `prefers-reduced-motion` as an explicit architectural branch.

## Focus management

Mobile navigation dialogs/drawers must manage focus appropriately if they trap or visually isolate navigation.

## Images

Every meaningful image has descriptive alt text; decorative assets do not create screen-reader noise.

---

# 18. Security Architecture

Because the portfolio represents a security-aware engineer, avoid introducing avoidable security problems.

## Initial security posture

- no unnecessary backend;
- no secret values in source;
- no API keys in the client;
- no uncontrolled HTML injection from content;
- sanitize/escape external content where needed;
- use HTTPS in deployment;
- keep dependencies current;
- review third-party scripts before adding them;
- use a restrictive Content Security Policy where deployment constraints allow;
- use `rel="noopener noreferrer"` where appropriate for new-tab external links;
- do not collect visitor data without a justified requirement.

## Contact

Use static direct contact links only: `mailto:` for the verified email plus GitHub/LinkedIn
profiles. No server-backed contact form (ADR-005). Submit handlers, spam filtering or
analytics are out of scope for the initial release.

If a form is later required, it becomes a separate security design problem involving validation, abuse controls and privacy considerations.

---

# 19. SEO Architecture

Each route should define:

- title;
- meta description;
- canonical URL when known;
- Open Graph title/description/image;
- semantic heading structure.

## Project pages

Project metadata should include:

- project title;
- verified purpose;
- discipline;
- relevant keywords derived from actual technologies;
- GitHub/demo links when available.

## Sitewide

Add:

- favicon;
- sitemap when supported;
- robots policy when needed;
- default OG image.

Canonical deployment URL remains **TBD**.

---

# 20. Deployment Architecture

## Current status

Deployment target is **GitHub Pages** (approved 2026-09-18 — static site, no backend).
The canonical deployment domain is a separate owner decision and remains **TBD**.

> `DEPLOYMENT TARGET — GitHub Pages · STATIC OUTPUT`.
> `CANONICAL DOMAIN — TBD (owner).`

## Required deployment properties

The target satisfies:

- static output (GitHub Pages serves the static build);
- HTTPS (Pages serves all pages over HTTPS, including custom domains);
- immutable/reliable asset delivery (hashed asset filenames at build time);
- custom domain mapping if needed (owner decision, TBD);
- preview builds if practical (GitHub Pages deploy previews from PRs).

Do not add platform-specific assumptions beyond the pages build/deploy workflow until a
different provider is chosen.

---

# 21. Testing Strategy

## 21.1 Functional tests

Verify:

- navigation routes;
- project deep links;
- Resume action;
- GitHub links;
- contact links;
- System Index activation;
- System Thread interactions;
- mobile navigation.

## 21.2 Responsive tests

Mandatory widths:

```text
320px
375px
768px
1024px
1440px
```

## 21.3 Accessibility tests

Verify:

- keyboard navigation;
- visible focus;
- heading order;
- landmarks;
- accessible names;
- contrast;
- reduced motion;
- reading order;
- touch target size.

Recommended tools:

- browser accessibility tree inspection;
- axe-core or equivalent automated checks;
- manual keyboard pass.

Exact tooling is implementation-dependent.

## 21.4 Visual tests

Capture representative states for:

- homepage;
- Work Index;
- one security case study;
- one developer-tooling case study;
- one computer-vision case study;
- mobile navigation;
- reduced-motion state where useful.

## 21.5 Performance tests

Measure:

- initial payload;
- image weight;
- layout stability;
- JavaScript cost;
- animation smoothness on mobile;
- Lighthouse or equivalent performance/accessibility measures.

Do not create arbitrary numerical budgets until the first real build is profiled.

## 21.6 Content tests

Verify:

- no broken links;
- no placeholder copy;
- no fake metrics;
- no unsupported claims;
- all project titles/purposes match source material.

---

# 22. UX Review Gate

Required architecture workflow:

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

The Markdown design specification cannot serve as proof of implementation correctness.

The rendered portfolio is the final source of truth for UX validation.

---

# 23. Architecture Decision Records

## ADR-001 — Static-first rendering

**Context:** Portfolio content is mostly deterministic and has no verified need for a backend.  
**Options:** SSR application, client-rendered SPA, static generation.  
**Chosen approach:** Static-first generation.  
**Reason:** performance, SEO, security and operational simplicity.  
**Trade-off:** future server-driven features would require an architectural extension.

## ADR-002 — Person-first information hierarchy

**Context:** The original metaphor could overpower identity.  
**Options:** metaphor-first, equal-weight, person-first.  
**Chosen approach:** Person-first.  
**Reason:** UX audit identified immediate identity comprehension as a high-priority issue.  
**Trade-off:** the visual concept appears slightly later, but becomes more meaningful once the person is understood.

## ADR-003 — Unified content model with domain-specific storytelling

**Context:** Projects span security, developer tooling and computer vision.  
**Options:** one identical template, separate page implementations, shared shell with storytelling modes.  
**Chosen approach:** Shared shell + storytelling modes.  
**Reason:** preserves brand cohesion without flattening technical differences.  
**Trade-off:** renderer logic is more sophisticated than a single template.

## ADR-004 — System Thread as orientation mechanism

**Context:** Signature interaction must not become decoration.  
**Options:** decorative animation, static diagram, interactive orientation mechanism.  
**Chosen approach:** orientation mechanism with static/reduced-motion fallback.  
**Reason:** the interaction has a clear UX purpose.  
**Trade-off:** requires explicit accessibility and state modeling.

## ADR-005 — No backend for initial release

**Context:** No genuine server-side requirement is currently documented.  
**Options:** backend/API, serverless contact, static direct links.  
**Chosen approach:** static direct contact links — `mailto:` to the verified email plus GitHub/LinkedIn profiles (approved 2026-09-18).  
**Reason:** less operational/security surface area.  
**Trade-off:** no built-in contact form analytics/workflow.

## ADR-005b — Deployment target: GitHub Pages

**Context:** The portfolio is static-first with no backend; a hosting provider was previously unspecified.  
**Options:** GitHub Pages, generic static host (Netlify/Vercel), keep TBD.  
**Chosen approach:** **GitHub Pages** (approved 2026-09-18).  
**Reason:** no-ops static hosting, HTTPS by default, previews from PRs, and no evidence of a different approved target.  
**Trade-off:** canonical custom domain remains an owner decision (TBD); Pages-specific workflows apply until a different provider is chosen.

## ADR-006 — Native CSS/SVG before motion dependency

**Context:** Premium interaction is required but performance matters.  
**Options:** heavy animation framework, CSS/SVG primitives, mixed approach.  
**Chosen approach:** CSS/SVG/IntersectionObserver first.  
**Reason:** keeps runtime small and makes reduced-motion behavior easier to control.  
**Trade-off:** unusually complex choreography may require a focused motion dependency later.

---

# 24. Risks and Mitigations

## RISK-001 — Metaphor overload

**Mitigation:** person-first hierarchy; selective vocabulary; familiar top-level navigation.

## RISK-002 — Generic AI-generated appearance

**Mitigation:** source-derived content, restrained palette, editorial hierarchy, real project evidence, no generic AI imagery.

## RISK-003 — Animation becomes decorative

**Mitigation:** motion must communicate process, state or orientation; one bounded refinement pass after render review.

## RISK-004 — Mobile breakdown

**Mitigation:** explicit 320/375/768/1024/1440 testing and structurally different mobile composition.

## RISK-005 — Accessibility regression

**Mitigation:** semantic tokens, keyboard-first interaction, reduced-motion branch, rendered contrast testing.

## RISK-006 — Fake technical credibility

**Mitigation:** evidence-linked content model and verification status; no decorative fake telemetry.

## RISK-007 — Architecture overengineering

**Mitigation:** static-first, no backend until required, minimal dependencies.

## RISK-008 — Public repository differs from active implementation

**Mitigation:** inspect the active working tree before migration and prefer extending the existing modern stack if present.

## RISK-009 — Source inconsistency

**Mitigation:** keep source provenance and verification notes for sensitive claims and metrics.

---

# 25. Technical Definition of Done

The engineering work is complete when:

- all required routes work;
- content is source-verified;
- visual tokens are implemented consistently;
- the approved color-safe variants are used in text;
- responsive layouts pass 320/375/768/1024/1440 reviews;
- keyboard navigation works;
- focus states are visible;
- reduced motion works;
- System Thread works or is intentionally omitted where it adds no orientation value;
- evidence links work;
- project case studies render correctly;
- no unsupported claims are shipped;
- the production build succeeds;
- there are no material runtime console errors;
- performance has been reviewed on mobile;
- final rendered UX critique has been completed;
- one bounded refinement pass has addressed the identified issues.

---

# 26. Traceability Matrix

| PRD Requirement | Implementation Location | Architecture Decision | Validation |
|---|---|---|---|
| FR-001 Person-first homepage | `HeroStatement` + homepage | ADR-002 | 5–10 second first-impression test |
| FR-002 Work navigation | `SiteNav` + `/work` | Static routing | Navigation task test |
| FR-003 System Index | `SystemIndex` | Unified project navigation | Keyboard/touch test |
| FR-004 Project detail routes | `/work/[slug]` | Static route generation | Direct URL test |
| FR-005 Progressive depth | `CaseStudy` sections | Content schema + progressive disclosure | Recruiter/technical path review |
| FR-006 Evidence links | `EvidencePanel` | Evidence architecture | Source/link audit |
| FR-007 Resume action | `ResumeLink` | Direct verified asset/action | File/link test |
| FR-008 Profile | `ProfileBlock` + `/profile` | Human context model | Content review |
| FR-009 Contact | `ContactBlock` + `/contact` | Static direct links (`mailto:` + GitHub/LinkedIn); no backend | Contact task test |
| FR-010 Field Notes | `FieldNote` + `/notes` | Evidence-dependent publishing | Source verification |
| FR-011 System Thread | `SystemThread` | ADR-004 | Interaction/reduced-motion test |
| FR-012 Keyboard | Global interactive components | Semantic HTML | Manual keyboard pass |
| FR-013 Reduced motion | Motion primitives + System Thread | Native media query branch | OS reduced-motion test |
| FR-014 No overflow | Responsive layout system | Mobile-first composition | 320px/375px test |
| FR-015 Contrast | Design tokens | Semantic color mapping | Automated + manual contrast test |
| FR-016 Domain-specific stories | Storytelling renderers | ADR-003 | Visual case-study review |

---

# 27. Implementation Sequence

Use this order to minimize rework:

```text
1. VERIFY ACTIVE CODEBASE
        ↓
2. ESTABLISH TOKENS / TYPOGRAPHY / GLOBAL CSS
        ↓
3. BUILD SITE NAV + ROUTING
        ↓
4. BUILD PERSON-FIRST HOMEPAGE
        ↓
5. BUILD WORK INDEX
        ↓
6. BUILD CONTENT MODEL
        ↓
7. BUILD SHARED CASE-STUDY SHELL
        ↓
8. BUILD PROJECT-SPECIFIC STORYTELLERS
        ↓
9. BUILD PROFILE / RESUME / CONTACT
        ↓
10. BUILD FIELD NOTES ONLY FROM AUTHENTIC CONTENT
        ↓
11. BUILD SYSTEM THREAD
        ↓
12. ADD CONTROLLED MOTION
        ↓
13. RESPONSIVE COMPOSITION
        ↓
14. ACCESSIBILITY PASS
        ↓
15. PERFORMANCE PASS
        ↓
16. RENDERED UX CRITIQUE
        ↓
17. ONE BOUNDED REFINEMENT PASS
```

Do not start with decorative motion. Establish content hierarchy and evidence first.

---

# 28. Final Technical Principle

> **The architecture should make the approved design easy to maintain, not make the architecture itself part of the portfolio theater.**

The implementation should feel like a well-built personal website whose sophistication comes from its content hierarchy, evidence, art direction and purposeful interaction—not from unnecessary infrastructure.
