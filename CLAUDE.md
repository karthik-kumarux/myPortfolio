# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

The **Karthik Kumar — Personal Brand Portfolio** ("SYSTEMS, UNDER TEST."). **This directory currently holds only design and planning documents — no application code exists yet and it is not a git repository.** The product is a static-first, content-driven personal-brand website presenting Karthik as a **Software Engineer** (supporting specializations in canonical order: AI / ML Systems · Security Automation · Developer Tooling) with five flagship project case studies.

Document hierarchy (authority flows down; read the top one first for its domain):

- `planning/PRD.md` — product requirements; contains the mandatory content-integrity policy
- `planning/DESIGN.md` — visual system: locked palette, tokens, locked art-direction decisions
- `planning/UX-AUDIT.md` — UX acceptance criteria and the rendered-QA gate sequence
- `planning/ARCHITECTURE.md` — technical plan, ADRs, target component structure, implementation sequence
- `planning/TOOLING.md` — installed skills/plugins and their responsibilities
- `planning/DECISIONS.md` — frozen-decision ledger with load status (what may be built without re-verification)
- `planning/evidence/` — resume + GitHub README/tree research + the claim-level **evidence matrix** (`MATRIX.md`); the factual basis for all portfolio claims

## The rule that outranks everything

**Never fabricate content.** PRD §0 and §20: no invented employers, projects, awards, metrics, users, deployments, research, certifications, or performance claims. Every claim must trace to `planning/evidence/` (resume extraction + GitHub research + `MATRIX.md`) or be marked **TBD / REQUIRES VERIFICATION**. Repo-README/resume overclaims must not leak into portfolio copy verbatim — the NexCode "up to 60% token reduction" claim has no repo benchmark and stays gated, and the Security Header Analysis headline claims (50 domains, concurrency, scan-history, PDF/JSON) are not in its repository and must not be published. When evidence is missing, omit the claim.

## Current state and what to do next

- Planning docs are reconciled and "implementation-ready" (2026-09-18); no code, no git init yet.
- **Before scaffolding, verify the active working tree** (ARCHITECTURE §1.3–1.4): the public `karthik-kumarux/personal_portfolio` repo exposes a legacy static `index.html` that conflicts with the approved direction and must be replaced, not extended. If no newer local stack exists, the recommended baseline is **Astro + TypeScript**, native CSS with custom properties as design tokens, SVG for diagrams, minimal client-side JS. No backend, no motion library, no analytics initially; every dependency must have a specific responsibility.
- **Frozen decisions recorded in `planning/DECISIONS.md` (D-01..D-11):** five-flagship set is VAPTaaS · math-adaptive-reasoning · NexCode · Deception Platform · crack-analysis (Security Header Analysis displaced on evidence — see `planning/evidence/MATRIX.md`); identity stays `Software Engineer`; person-first hero with the AI/ML systems thread visible; canonical specializations `AI / ML Systems → Security Automation → Developer Tooling`; NexCode 60% + security-header claims gated; FTP honeypot excluded; Agentic Memory / Talking Avatar outside the flagship set; deployment **GitHub Pages** (domain TBD); contact is static direct links (`mailto:` + GitHub/LinkedIn), no server-backed form.
- Work in the order of ARCHITECTURE §27 (content hierarchy and evidence before decorative motion). Do not invent values for the known TBDs — hero copy, font selections, favicon, deployment domain.

## QA gate — run before any "complete" claim

Invoke the `portfolio-quality-review` skill. It encodes the UX-AUDIT §16 acceptance criteria + a Playwright viewport protocol + a content-integrity sweep, and emits PASS/FAIL/N/A per check. Non-negotiables: person-first hierarchy; text-safe color tokens; no hover-dependent essential actions; `prefers-reduced-motion` support; `320/375/768/1024/1440px` screenshots with no horizontal overflow; one keyboard-only pass. If a check cannot run, report `UNAVAILABLE` — never claim visual validation that did not happen. The rendered portfolio, not the Markdown, is the final validation target.

## Design constraints you must not re-derive

- **Person-first hierarchy**: first viewport = Name → *Software Engineer* → AI / ML Systems · Security Automation · Developer Tooling → Selected Work → CTA. Vocabulary like SYSTEM/ARCHIVE/INDEX/SIGNAL appearing before the person is a failure (UX-AUDIT §03).
- **Locked tokens**: graphite `#171918`, field-paper `#F3F0E7`, mist `#D8DED9`, signal `#C96B45`, teal `#2C7C78`. Base teal/signal fail contrast as normal body text on paper — use the text-safe variants `#23615E`, `#62B8B0`, `#9B4628`, `#59625D`. Use ARCHITECTURE §9.1's token list as authoritative; the muted text token is `#59625D` (an older `#66706B` in planning/DESIGN.md §24 is retired).
- **Routes**: `/` · `/work` · `/work/{math-adaptive-reasoning,vaptaas,deception-platform,nexcode,crack-analysis}` · `/notes` · `/notes/[slug]` · `/profile` · `/contact`; navigation uses human-readable names `WORK NOTES PROFILE CONTACT` + `RESUME` (never `KARTHIK / 26`).
- **Content model**: one shared `Project` schema with a `storytellingMode` (`ai-ml-systems`, `security-orchestration`, `developer-tooling`, `computer-vision`, `systems-architecture`) so projects render by domain instead of identical templates; content/evidence stays separate from components.
- **System Thread** (`INPUT → PROCESS → TEST → RESULT`) is an *orientation* mechanism only, never decoration: it needs keyboard-accessible, vertical-on-mobile, and static reduced-motion equivalents, and it is removed outright if it fails UX-AUDIT §08's tests — it never ships "because the design doc mentions it."
- **Art-direction caveat**: the Field Paper + Signal + Teal palette sits near a common AI-generated "tell"; the graphite-dominant base, teal counterpoint, mist/paper layer alternation, and restrained monospace grammar are what keep it distinct (planning/TOOLING.md).

## Commands

No build/lint/test commands exist yet — there is no scaffold. The runnable QA path is the `portfolio-quality-review` skill plus:

- Playwright viewports / screenshots / reduced-motion / keyboard passes: `npx playwright ...` (v1.63.0) driving **system Chrome/Edge** via channel — no browser download needed.

Once the Astro app is scaffolded, the expected surface is `npm install` → `npm run dev` (preview) → `npm run build` (static output), with `astro check` for type safety — these do not exist until then.

## Environment (Windows)

- Shell is PowerShell (primary); a POSIX Bash tool is also available — each takes its own syntax.
- Verified: Node v24.21.0, npm 11.4.2, git 2.50 (repo not initialized), Playwright 1.63.0 via `npx`, system Chrome/Edge, Python 3.11 + pypdf.

The four canonical planning docs moved under `planning/` on 2026-09-18 (D-11); `planning/PRD.md`, `planning/DESIGN.md`, `planning/UX-AUDIT.md`, `planning/ARCHITECTURE.md` are authoritative. No stale root copies remain.