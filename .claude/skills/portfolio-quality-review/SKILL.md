---
name: portfolio-quality-review
description: QA gate for the SYSTEMS, UNDER TEST portfolio — runs the UX-AUDIT acceptance criteria, accessibility checks, Playwright viewport protocol, and content-integrity re-verification. Use before any "complete" claim and at every bounded refinement pass.
---

# Portfolio Quality Review

Run this gate when a surface of the portfolio is claimed complete, before any
"done" statement, and after every bounded refinement pass. It is the persisted
form of `planning/UX-AUDIT.md` §16 + the evidence discipline in
`planning/TOOLING.md`.

## Sources of truth

- `planning/PRD.md` — product requirements (do not contradict)
- `planning/ARCHITECTURE.md` — technical decisions
- `planning/DESIGN.md` — visual system / tokens
- `planning/UX-AUDIT.md` — acceptance criteria
- `planning/TOOLING.md` — tool responsibilities
- `planning/evidence/MATRIX.md` — evidence matrix (content integrity): every published claim traceable, nothing invented

## 1. Person-first hierarchy check

Verify the first viewport communicates, in order:

```
Karthik Kumar → Software Engineer → AI / ML Systems · Security Automation · Developer Tooling → Selected Work → CTA
```

Failure condition: SYSTEM/ARCHIVE/INDEX/SIGNAL vocabulary precedes the person.

## 2. Content-integrity sweep

Re-check every new or changed claim against the evidence matrix:

- No unverifiable metric (e.g. the 60% token claim unless approved & sourced)
- No invented employer, project, award, date, or result
- Repo README overclaims must never leak into portfolio copy verbatim
- Unresolved claims are removed or softened to qualitative language — never left stubbed
- Field Notes contain authentic material or the section stays hidden

## 3. Accessibility checks (manual-computed + browser)

- Semantic HTML; single h1; heading order sane
- Visible keyboard focus on every interactive element
- Full keyboard path through the drawer/nav (focus trap works, escape closes)
- Touch targets ≥ 44px on mobile
- `prefers-reduced-motion` collapses all decorative transforms
- Computed contrast on the *actual rendered pairings*:
  - Body text: `#23615E` / `#171918` / `#9B4628` on Paper — must be ≥ 4.5:1
  - Base accent tokens (`#2C7C78`, `#C96B45`) must not carry normal body text
- No hover-dependency for essential actions
- Reading order sane in the accessibility tree

## 4. Playwright browser protocol

Use system Chrome/Edge via Playwright (already proven available). For each page:

1. `320px`, `375px`, `768px`, `1024px`, `1440px` screenshots
2. No horizontal overflow at any width (`scrollWidth <= clientWidth`)
3. No competing sticky elements; no hidden essential content
4. Reduced-motion screenshot (emulate `prefers-reduced-motion`)
5. One keyboard-only pass: Tab through nav → drawer → content → footer

Report actual output. If a run cannot execute, say `UNAVAILABLE` — never claim
visual validation that did not happen.

## 5. System Thread (prototype stage only, if built)

Evaluate against the six tests in `planning/UX-AUDIT.md` §08. If it fails any:
remove it. It never ships "because the design doc mentions it."

## 6. Restraint & taste check

- One memorable element per view; everything else quiet
- No decorative perpetual animation; transforms/opacity only
- No card-template drift — domain storytelling differs per project
- Removing effects does not collapse the information hierarchy
- Copy is plain-language: name things by what a visitor understands

## Output format

For every review pass emit:

```
COMPLETED / NOT COMPLETED
for each check: PASS / FAIL / N/A        (with the concrete evidence)
BLOCKERS         (anything that gates the next step)
```