# TOOLING.md — Portfolio Development Team & Tooling Reference

*Created: 2026-09-18 · Session: pre-implementation skill audit*

## Purpose

The smallest set of high-quality capabilities that gives this project the
equivalent of a strong senior product/design/frontend/QA team — not a large skill
collection.

---

## Available before setup

### Skills (loaded at session start — built-in / user-level)

| Skill | Role |
|---|---|
| `artifact-design` | Artifact page contract & design fundamentals |
| `artifact-diagramming` | Inline-SVG diagram mechanics for the case-study architecture figures |
| `dataviz` | Chart form/color discipline if project result figures become charts |
| `skill-creator` | Authoring/validating project skills |
| `update-config` | settings.json, hooks, permissions for the workspace |
| `keybindings-help` | keybinding changes (not needed unless requested) |
| `code-review` | diff/PR correctness review |
| `simplify` | reuse/simplification cleanups |
| `security-review` | security review of code written for the site |
| `fewer-permission-prompts` | optional permission hygiene |
| `loop` | recurring QA reminders if needed |
| `claude-api` | reference if site talks to Claude API (it does not — static site) |
| `workflow-authoring` | multi-agent orchestration reference (not currently used) |
| `run` | launch/preview the built site |
| `init` | CLAUDE.md onboarding (optional) |

### Marketplace

`claude-plugins-official` (Anthropic's official market) is registered at
`C:\Users\karth\.claude\plugins\marketplaces\claude-plugins-official`.
No plugins from it were enabled before this audit.

### Environment tools (verified working)

| Tool | Version | Status |
|---|---|---|
| Node | v24.21.0 | ✅ |
| npm | 11.4.2 | ✅ |
| git | 2.50.0.windows.1 | ✅ |
| Playwright | 1.63.0 (via npx) | ✅ callable |
| Chrome | installed (Program Files) | ✅ drivable by Playwright |
| Edge | installed (Program Files (x86)) | ✅ drivable by Playwright |
| Python | 3.11 (pypdf present) | ✅ (used for PDF/research) |

---

## Installed during setup

### 1. `frontend-design` plugin — ✅ installed

| Item | Detail |
|---|---|
| Source | `frontend-design@claude-plugins-official` — Anthropic official marketplace (already on disk; SKILL.md inspected **before** install) |
| Scope | **project** (`-s project`) → enabled in `D:\personalPortfolio\.claude\settings.json` |
| What it solves | Distinctive production-grade frontend: typography, palette, motion restraint, anti-templated aesthetic direction |
| Verify | `claude plugin install frontend-design -s project -y --json` → `{"outcome":"ok","scope":"project"}` |
| **Activation caveat** | Skill list snapshots at session start ⇒ was NOT callable in the installing session. **Resolved after restart/resume (2026-09-18): callable.** |
| Notes | Its "AI-tell" calibration flags cream+serif+terracotta as generic. Our approved palette (Field Paper + Signal + Teal on Graphite) sits near that tell — the graphite-dominant base, teal counterpoint, mist/paper alternation and technical monospace grammar are what keep it distinct. Execution must lean on these, per planning/DESIGN.md. |

### 2. `portfolio-quality-review` project skill — ✅ created (hand-authored)

| Item | Detail |
|---|---|
| Source | Authored from the planning docs (UX-AUDIT §16, ARCHITECTURE, DESIGN, evidence matrix) — no external package |
| Location | `D:\personalPortfolio\.claude\skills\portfolio-quality-review\SKILL.md` |
| What it solves | The capability no market skill covers: a repeatable QA gate (person-first hierarchy, content-integrity sweep, a11y checks, Playwright viewport protocol, System Thread tests, restraint check) |
| Activation caveat | Session-start snapshotted at creation ⇒ usable next session. **Resolved after restart/resume (2026-09-18): callable.** |
| Alternative to a skill | None adequate — the gate is project-specific. |

---

## Skill → responsibility map

| Role | Capability |
|---|---|
| Principal Engineer | planning docs + `code-review` + `simplify` |
| UX Lead | UX-AUDIT process + `portfolio-quality-review` §1–2 |
| Art Director | `frontend-design` + planning/DESIGN.md tokens + `portfolio-quality-review` §6 |
| Frontend Engineer | `frontend-design` + native CSS token system per ARCHITECTURE/DESIGN |
| Accessibility Engineer | `portfolio-quality-review` §3 |
| Motion Designer | planning/DESIGN.md motion principles + `portfolio-quality-review` §5–6 (System Thread verdict) |
| Content Engineer | `planning/evidence/MATRIX.md` + `portfolio-quality-review` §2 |
| QA Engineer | Playwright (npx + system Chrome/Edge) + `portfolio-quality-review` §4 |
| Performance Engineer | static-first build review, page-weight budget, no-JS path check |
| Security Engineer | `security-review` + manual deps/links/secrets/CSP/deploy review |

---

## Intentionally NOT installed

| Capability available in market | Why not installed |
|---|---|
| Playwright MCP external plugin | Playwright already callable via `npx playwright` + system Chrome/Edge; MCP adds a persistent server process + approval surface for no capability gain. Protocol encoded in `portfolio-quality-review` §4 instead. |
| `typescript-lsp` | `astro check` + `tsc` cover type safety during build; LSP adds background overhead. |
| `claude-security` / `security-guidance` | Built-in `security-review` skill already covers the role; hook plugins would add project-wide side effects. |
| `code-review` / `code-simplifier` (plugins) | Built-in `code-review` and `simplify` skills already cover them. |
| `commit-commands` | Git is sufficient; attribution handled by convention. |
| `feature-dev` | Workflow is defined by the planning docs; a generic workflow plugin adds nothing. |
| `context7` / `github` / `gitlab` MCP | `gh` CLI + direct git/network access cover the needs. |
| brand-guidelines / motion / SEO / visual-regression plugins | Not present in the official market; taste + reduced-motion + QA viewports are encoded in the two skills above. Visual-regression diffing is a manual screenshot-comparison step (noted risk). |

---

## Missing capabilities (no adequate skill exists)

| Capability | Why needed | Alternative |
|---|---|---|
| UX / product design | Recruiter path, IA, arrow-friction review | Executed from UX-AUDIT + PRD + `portfolio-quality-review` §1; no market skill exists |
| Visual regression diffing | Compare before/after at breakpoints | Manual screenshot diff via Playwright §4 output |
| SEO | Static portfolio discoverability | Manual (meta, sitemap, semantic HTML per ARCHITECTURE) |

---

## Tools

| Tool | Purpose | Available |
|---|---|---|
| claude CLI + skills | team roles above | ✅ |
| Node/npm | Astro build toolchain | ✅ |
| git | version control (repo not yet initialized — pending approval) | ✅ |
| gh | GitHub operations | (not verified this session — CLI-only git is fine) |
| Playwright | browser QA @ 320/375/768/1024/1440 + reduced-motion + keyboard passes | ✅ via npx |
| Chrome / Edge | driver browsers for Playwright (channel mode → no browser download) | ✅ |
| Python + pypdf | PDF/extraction tooling (already used) | ✅ |

---

## Verification status

| Item | Installed | Discoverable | Callable | Version | Works in project |
|---|---|---|---|---|---|
| frontend-design | ✅ | on disk: `~/.claude/plugins/marketplaces/.../frontend-design/skills/frontend-design/SKILL.md` | ✅ verified after restart (2026-09-18) | market version | ✅ |
| portfolio-quality-review | ✅ | on disk: `D:\personalPortfolio\.claude\skills\portfolio-quality-review\SKILL.md` | ✅ verified after restart (2026-09-18) | v1 | ✅ |
| Playwright | — (npx ephemeral) | ✅ | ✅ (`npx playwright --version` = 1.63.0) | 1.63.0 | ✅ verified |
| artifact-design / artifact-diagramming / dataviz / security-review / code-review / simplify / run / update-config / loop | ✅ (built-in/user-level, loaded at session start) | ✅ | ✅ callable (post-restart listing, 2026-09-18) | — | ✅ |

**If invocation fails after restart, report `NOT CALLABLE` — do not pretend it works.**

---

## Tooling risks

1. Skill list snapshots at session start — a session that installs a new skill cannot invoke it until the next restart/resume. Both project tooling entries were verified callable after the 2026-09-18 restart; re-verify after any future tooling change.
2. Playwright uses system Chrome/Edge via channel to avoid a browser download; if channel launch fails, fallback is `npx playwright install chromium` (network + disk cost).
3. UX role has no dedicated skill — it is process rather than tooling; the quality-review gate is its enforcement.
4. Nothing was installed from any untrusted source; the only market install is the Anthropic-official `frontend-design`.