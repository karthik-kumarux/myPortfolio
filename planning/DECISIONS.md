# Portfolio — Frozen Decisions & Verification Ledger

**Created:** 2026-09-18 · Session: post-restart verification
**Status:** RECONCILED — all 11 decisions loaded and consistent with on-disk planning docs (2026-09-18 D-05..D-11 reconciliation complete)
**Related:** `planning/evidence/MATRIX.md` (claim-by-claim verification) · `planning/PRD.md` §0 (integrity policy)

This ledger records each decision that must be true before implementation, its
source, and its audit status against the planning/evidence documents. It now
reflects the 2026-09-18 reconciliation pass, in which the planning docs were
updated to match the approved direction and re-audited for consistency.

## Verification method

Each decision was grep-checked against `planning/PRD.md`, `planning/DESIGN.md`,
`planning/UX-AUDIT.md`, `planning/ARCHITECTURE.md` and the evidence extracts, and
the result cross-checked against `planning/evidence/MATRIX.md`. Statuses:

- **LOADED** — present in the planning docs as stated
- **PARTIAL** — direction matches but wording/mechanism differs from the record
- **NOT LOADED** — absent from the docs, or contradicted by the on-disk documents

## Decisions

| # | Decision | Source | Status | Notes |
|---|---|---|---|---|
| D-01 | Primary identity printed as `Software Engineer` | PRD §1.3, §8.1 · DESIGN §01 · UX-AUDIT §03 | LOADED | Unanimous across all docs; not replaced by "AI Engineer" |
| D-02 | NexCode `up to 60% token reduction` claim stays gated | PRD §10.4 · planning/evidence/MATRIX.md · SKILL §2 | LOADED | Resume-only; **no repo benchmark** — may appear only with source + scope, never as a measured headline result |
| D-03 | FTP honeypot claim excluded from public copy | PRD §10.4 (omission) · honeyPot repo tree · MATRIX.md | LOADED | Resume states web/FTP/API; repo has **no FTP service** → EXCLUDED from public copy until repo evidence appears |
| D-04 | Agentic Memory Architecture & Talking Avatar outside flagship set | PRD §7.3 · DESIGN §07 · ARCHITECTURE §7 | LOADED | Present only in resume/GitHub evidence; may appear later as notes/supporting material — not flagship |
| D-05 | Deployment target: **GitHub Pages** | ARCHITECTURE §2, §20 · PRD §7.2, §16, §25 · ADR-005b | LOADED | Static output, HTTPS, free hosting, previews; approved 2026-09-18; **custom domain remains TBD (not invented)** |
| D-06 | Canonical specializations `AI / ML Systems → Security Automation → Developer Tooling` (labels + order) | PRD §1.3, §8.2, §10.3 · DESIGN §01, §04, §08 · UX-AUDIT §01, §03 · ARCHITECTURE §7 · homepage | LOADED | All variant spellings standardized 2026-09-18; consistent across every doc |
| D-07 | Security-header claims narrowed to repo-verified subset | PRD §10.4 (displacement record) · MATRIX.md · CLAUDE.md overclaim rule | LOADED | Only "Python analyzer; common headers; flags missing/weak configs; Streamlit UI; header list" verified. `50 domains`, concurrency, scan-history, PDF/JSON, SQLite/Pandas **gated or absent** — not publishable. Project displaced from flagship set 2026-09-18 (see D-09) |
| D-08 | Static direct contact links — `mailto:` + GitHub/LinkedIn; no server-backed form | ARCHITECTURE §18, ADR-005 (amended) · PRD FR-009, §26 | LOADED | Approved 2026-09-18 with `mailto` explicitly named |
| D-09 | `math-adaptive-reasoning` replaces `security-header-analysis` in the flagship set | PRD §7.3, §10.4 · DESIGN §07, §08 · ARCHITECTURE §7 · MATRIX.md | LOADED | Rationale on evidence strength (39-file research harness with committed results vs 4-file tool repo). Index stays 5 projects; canonical order follows specialization hierarchy |
| D-10 | Person-first hero; AI/ML systems thread visible as narration | PRD §8.1, §8.2 · UX-AUDIT §03 | LOADED | `Name → Software Engineer → AI / ML Systems · Security Automation · Developer Tooling → work`. AI/ML surfaces through the flagship case study and hero narration; **not** an AI-only portfolio |
| D-11 | Planning docs moved under `/planning` | filesystem (move completed 2026-09-18) | LOADED | All five canonical docs now at `planning/`; root holds only `CLAUDE.md`; skill/TOOLING internal paths updated; no stale root duplicates |

## Reconciliation record (2026-09-18)

D-05, D-06, D-07, D-08, D-09, D-10 and D-11 were re-audited and the planning
docs updated to match the approved direction, then re-grep-checked. The
checkpoints that were previously NOT LOADED or PARTIAL now have explicit,
on-disk statements. Any future change to these decisions must update this ledger,
the relevant planning doc, and `planning/evidence/MATRIX.md` together.

Nothing in this ledger overrides PRD §0: no claim ships without evidence.