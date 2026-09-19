# Karthik Kumar — UX Audit / Art-Direction Refinement

**Review date:** 2026-09-18  
**Scope:** Design specification and concept-level UX review  
**Core concept:** SYSTEMS, UNDER TEST.  
**Primary identity:** Software Engineer  
**Status:** Design-level review complete; rendered implementation validation pending

---

## 01. Executive Finding

The concept is distinctive and should be retained.

The main correction is hierarchy:

```text
Karthik Kumar
    ↓
Software Engineer
    ↓
AI / ML Systems · Security Automation · Developer Tooling
    ↓
Selected Work
    ↓
Technical Depth
    ↓
Personal Observations
```

The design should communicate the person before requiring visitors to understand the portfolio metaphor.

---

## 02. High-Priority Findings

### HIGH — Metaphor can overpower identity

**Risk:** Visitors understand the concept before understanding the person.

**Resolution:** Identity, professional role, supporting specializations and selected work appear before the metaphor becomes dominant.

### HIGH — Multiple disciplines compete

**Risk:** AI, security and software systems can read as unrelated professional identities.

**Resolution:** `Software Engineer` is primary. AI/ML, security and developer tooling are supporting specializations.

### HIGH — Technical theater can substitute for proof

**Risk:** A beautiful system could look clever without feeling credible.

**Resolution:** Expose architecture, screenshots, GitHub and verified results alongside visual treatment.

### HIGH — Mobile composition can collapse

**Risk:** Dense editorial desktop layouts can become hard to read on small screens.

**Resolution:** Mobile is a first-class single-column reading mode.

### HIGH — Accent colors are not universally text-safe

**Risk:** Base teal and terracotta fail normal-sized text contrast on light backgrounds.

**Resolution:** Dedicated text-safe variants and final rendered contrast checks.

### MEDIUM — System Index can create vocabulary overhead

**Risk:** Acronyms require decoding.

**Resolution:** Every index item contains a plain-language purpose line.

### MEDIUM — Repeated metadata can over-conceptualize the UI

**Risk:** The portfolio can start feeling like a design exercise.

**Resolution:** Use metadata only where it improves scanning or technical understanding.

### MEDIUM — Identical case-study layouts can flatten project differences

**Risk:** Computer vision, security and developer tooling become visually interchangeable.

**Resolution:** Keep brand rules fixed while changing storytelling medium by project domain.

### MEDIUM — Field Notes can become fabricated thought leadership

**Risk:** Empty sections encourage filler content.

**Resolution:** Field Notes are evidence-dependent and may remain small.

---

## 03. First-Impression Test

Within 5–10 seconds, the visitor should understand:

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

### Failure condition

If the first viewport primarily communicates:

```text
SYSTEM
ARCHIVE
INDEX
SIGNAL
INSPECTION
```

before communicating Karthik's role, hierarchy has failed.

---

## 04. System Index Review

### Strength

The System Index remains a strong signature interaction.

### Required pattern

```text
01  VAPTaaS
    Automated security assessment

02  NexCode
    Code intelligence & graph context
```

### Acceptance condition

A visitor should understand why a project matters without already knowing the acronym or repository name.

---

## 05. Information Architecture Review

Use human-readable top-level navigation:

```text
WORK
NOTES
PROFILE
CONTACT
RESUME
```

The System Index belongs inside Work.

Conceptual vocabulary should live inside case studies and visual storytelling rather than the primary navigation.

---

## 06. Human Presence Review

The portfolio should show the person before becoming an engineering artifact.

Use authentic:

- education
- current direction
- project observations
- experiments
- failures
- lessons
- leadership
- genuine interests

Do not use:

- generic inspirational statements
- invented thought leadership
- fabricated stories
- unsupported personal claims

---

## 07. Project Storytelling Review

The brand system should remain consistent, but project storytelling should vary.

| Domain | Primary visual medium |
|---|---|
| Computer Vision | images / detections / measurement |
| Security Automation | orchestration / pipeline |
| Developer Tooling | code graph / context |
| GenAI | interaction / reasoning / tool flow |
| General Systems | architecture / data flow |

Shared brand rules remain:

- typography
- palette
- navigation
- metadata grammar
- System Thread
- CTA language

---

## 08. System Thread Review

The proposed signature interaction is:

```text
INPUT ───── PROCESS ───── TEST ───── RESULT
```

### Approved only when it provides orientation

Good uses:

- case-stage navigation
- architecture connector
- progress indicator
- scroll context

Bad uses:

- decorative animated line
- perpetual loop
- unexplained ornament
- mandatory animation for basic navigation

The mobile version should reduce to a simple vertical or step indicator.

---

## 09. Accessibility Review

### Token-level findings

| Pair | Contrast | Result |
|---|---:|---|
| `#2C7C78` on `#F3F0E7` | 4.32:1 | FAIL for normal body text |
| `#C96B45` on `#F3F0E7` | 3.25:1 | FAIL for normal body text |
| `#23615E` on `#F3F0E7` | 6.26:1 | PASS |
| `#9B4628` on `#F3F0E7` | 5.58:1 | PASS |
| `#62B8B0` on `#171918` | 7.57:1 | PASS |
| `#C96B45` on `#171918` | 4.77:1 | PASS |

These are token checks, not a final compliance claim.

### Final implementation checks

- semantic HTML
- heading hierarchy
- visible focus
- keyboard navigation
- touch target size
- reduced motion
- reading order
- mobile reflow
- actual computed contrast

---

## 10. Recruiter Path Review

Required path:

```text
Hero
  ↓
Selected Work
  ↓
One strong case study
  ↓
Resume
```

The recruiter should not have to navigate through conceptual sections to reach evidence.

---

## 11. Technical Visitor Path Review

Required path:

```text
Project
  ↓
Architecture
  ↓
Implementation
  ↓
Challenges
  ↓
Iterations
  ↓
GitHub
```

Technical depth should be discoverable without turning the homepage into a wall of detail.

---

## 12. Mobile Acceptance

Validate at:

```text
320px
375px
768px
1024px
1440px
```

Rules:

- no horizontal overflow
- no hover dependency
- no tiny diagrams
- no competing sticky elements
- no hidden essential content
- clear one-column reading order

---

## 13. Trust Review

Every major technical claim should be supported by evidence where possible:

- architecture
- code / GitHub
- screenshots
- verified metrics
- implementation detail
- actual result

Never use decorative fake telemetry as proof.

---

## 14. Art-Direction Review

The palette and material language are strong because they create contrast between:

```text
GRAPHITE
    ↓
PAPER
    ↓
MIST
    ↓
GRAPHITE
```

with:

```text
SIGNAL TERRACOTTA
+
OXIDIZED TEAL
```

The principal art-direction risk is **over-expression**.

### Rule

> Remove one conceptual detail before adding another.

The page should feel edited, not crowded with signals of "design."

---

## 15. Personal Brand Test

The design passes only if it still communicates Karthik clearly after decorative effects are removed.

It should retain:

- memorable name/identity
- clear professional role
- meaningful work
- authentic observations
- evidence of engineering thinking

If removing motion, grain, diagrams or visual effects makes the experience feel empty, the content hierarchy is too weak.

---

## 16. Final UX Acceptance Criteria

Implementation is ready for final handoff only when:

- Karthik is identifiable immediately.
- Software Engineer is the primary identity.
- Secondary specialties do not compete for first-glance attention.
- System Index entries explain project purpose.
- Projects contain real evidence.
- Technical depth is progressively disclosed.
- Field Notes use authentic source material.
- System Thread improves orientation.
- Navigation uses familiar language.
- Keyboard focus is visible.
- Contrast is validated in actual UI.
- Reduced motion preserves meaning.
- 320–1440px layouts are usable.
- No major interaction depends on hover.
- Decorative effects can be removed without collapsing the information hierarchy.

---

## 17. Review Boundary

This is a **design-level UX critique** of the revised specification.

An implementation-level UX verdict requires the actual rendered portfolio to be inspected at the target breakpoints.

Required next QA sequence:

```text
LIVE / RENDERED PORTFOLIO
    ↓
SCREENSHOTS / BROWSER REVIEW
    ↓
UX CRITIQUE
    ↓
ACCESSIBILITY + TECHNICAL AUDIT
    ↓
ONE BOUNDED REFINEMENT PASS
```

Do not describe the portfolio as fully UX-validated until this rendered review has been completed.
