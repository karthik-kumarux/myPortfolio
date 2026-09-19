# Evidence Matrix — Claims → Source → Verification

**Created:** 2026-09-18 · Session: planning reconciliation
**Basis files:** `planning/evidence/_resume_extracted.txt` (resume, pypdf extraction) ·
`planning/evidence/_github_research.txt` (repo metadata + READMEs) ·
`planning/evidence/_github_trees.txt` (repo file trees). The resume PDF lives at
`planning/evidence/M.Karthik_Resume.pdf` as the extraction source.
**Governing rule:** PRD §0 — no claim ships without evidence. This matrix is the
authoritative mapping for portfolio copy.

## Statuses

- **VERIFIED** — supported by repository files/README and/or resume extraction, with scope preserved.
- **SCOPED** — true with an explicit scope/source qualifier attached (never restated without it).
- **GATED / UNVERIFIED** — appears in resume or a repo README but has no measured artifact/benchmark in the repo; may appear only with the gate or be omitted.
- **EXCLUDED** — contradicted by repo evidence; never in public copy.

---

## Flagship project set (final — five)

The flagship index is: **VAPTaaS · math-adaptive-reasoning · NexCode · Deception Platform · crack-analysis**.
`math-adaptive-reasoning` replaced `security-header-analysis` (rationale below).

| Project | Evidence strength | Residual risk |
|---|---|---|
| VAPTaaS | Strong — 90-file tree (FastAPI/Celery/Redis/PostgreSQL/Docker compose/React/pytest CLI), README documents pipeline + Juice Shop test path + Claude API enrichment var | README is the primary source; 2 commits only (2026-07-17, single push date) |
| math-adaptive-reasoning | Strong — 39-file tree; setup bootstrapper + env/hardware reports committed; smoke results (figures, `pilot_results.jsonl`, summaries); README explicitly states Stage 0 + Stage 1 pilot only | README itself is careful about stage; portfolio copy must not outrun it |
| NexCode | Strong — 11-file tree (VS Code extension: graph service, AI service, sidebar provider, workspace ops, packaged `.vsix`) | README is MVP-scoped; **no benchmark artifact for the `60%` figure** |
| Deception Platform (honeyPot) | Moderate — 22-file tree (web-honeypot, api-ingest, dashboard-ui, nginx, database, compose), README + SAD + build prompt | **No FTP honeypot in tree**; repo is a scaffold/platform, no deployment record |
| crack-analysis | Strong — 34-file tree including trained YOLO weights (49.63 MB), ROC/PR/F1 curves, confusion matrices, `results.csv`, 100-epoch training artifacts, Streamlit app | Claimed severity thresholds are repo-stated, not externally validated |

---

## Claim-by-claim

### Identity & hierarchy

| Claim | Source | Status | Note |
|---|---|---|---|
| Primary identity `Software Engineer` | PRD §1.3/§8.1 · DESIGN §01 · UX-AUDIT §03 · resume headline | VERIFIED | Unanimous across docs and resume; do not replace with "AI Engineer" |
| Supporting specializations `AI / ML Systems → Security Automation → Developer Tooling` (canonical order/labels) | PRD §1.3 · UX-AUDIT §01 · resume skills | VERIFIED (labels standardized 2026-09-18) | Older label spellings (`AI/ML · Security · Developer Tooling`, `AI / ML · Security Engineering · Developer Tooling`) superseded |
| Person-first hierarchy (Name → role → specializations → work → CTA) | UX-AUDIT §03 · PRD §8.1 | VERIFIED | SYSTEM/ARCHIVE/INDEX/SIGNAL before the person = failure |
| AI/ML systems thread visible without AI-only framing | Resume "AI/GenAI systems engineer" + flagship math-adaptive-reasoning | VERIFIED (as narration) | Hero copy is authorized to surface the AI/ML systems flagship; identity stays Software Engineer |

### NexCode

| Claim | Source | Status | Note |
|---|---|---|---|
| VS Code extension with Tree-sitter code knowledge graph, `think → act → observe` loop, 5 tools | Repo README + tree (`graphService.js`, `aiService.js`, `workspaceOps.js`, `sidebarProvider.js`) + resume | VERIFIED | MVP scope; dependencies claimed in README |
| `Up to 60% LLM token reduction` | Resume only — **absent from repo README**; no benchmark artifact | **GATED / UNVERIFIED** | May appear only as "resume-reported, not independently benchmarked", or be omitted; never a measured result |
| `Preserving semantic accuracy` | Resume only | SCOPED | Qualitative claim from the same resume paragraph as the 60% figure; keep paired or drop |

### VAPTaaS

| Claim | Source | Status | Note |
|---|---|---|---|
| Asynchronous pipeline: Nmap → Nikto → OWASP ZAP via Celery/Redis/PostgreSQL | Repo tree + README (§8) + resume | VERIFIED | Parsers/scanners per tool exist in tree |
| Claude API as remediation/reasoning layer | Repo README env var `ANTHROPIC_API_KEY` + `backend/app/services/ai_service.py` + resume | VERIFIED | Scope: AI *enrichment*, not autonomous analysis |
| Docker Compose deployment + pytest suite | Repo tree (`docker-compose.yml`, `backend/tests/*`, `backend/run_tests.sh`) + README | VERIFIED | Tests committed; not executed in portfolio QA |
| Juice Shop test-scan validation path | Repo README | VERIFIED | Documented runbook, not a published finding benchmark |

### math-adaptive-reasoning

| Claim | Source | Status | Note |
|---|---|---|---|
| Empirical research: adaptive routing vs fixed strategies for math reasoning | Repo README (Stage 0 + Stage 1 pilot) | VERIFIED | Portfolio must state the stage honestly |
| Pilot: GSM8K, strategies `direct`/`cot`/`program`, backends CPU `Qwen2.5-1.5B-Instruct` / `gpt-4o-mini` / `claude-3-5-haiku-latest` | Repo README + `configs/pilot.yaml` tree | VERIFIED | No GPU on dev machine (hardware report committed) |
| Smoke-run artifacts (accuracy/latency/tokens figures, `pilot_results.jsonl`) | Repo tree `results/smoke/` | VERIFIED | Smoke data ≠ research conclusion; **no accuracy improvement claim anywhere** |
| "No classifier / router / verifier built yet" | Repo README (verbatim) | VERIFIED | A hypothesis-testing project, not a shipped product |
| Any accuracy–efficiency improvement number, users, or deployments | — | ABSENT | No repo claim found; do not invent |

### Deception Platform (honeyPot)

| Claim | Source | Status | Note |
|---|---|---|---|
| Air-gapped multi-service honeypot: Nginx reverse proxy, web honeypot, API ingest, PostgreSQL, dashboard | Repo tree + README + SAD | VERIFIED | Architecture matches README |
| **FTP honeypot** | Resume only ("web, FTP, and API honeypots"); **no FTP service in repo tree** | **EXCLUDED** | Never publish as built; omit FTP from public copy |
| Real-time attacker dashboards, normalized alerts | Repo README | VERIFIED | Scope: platform capability, no live-attacker volumes or uptime claims |

### Security Header Analysis (displaced from flagship set — 2026-09-18)

| Claim | Source | Status | Note |
|---|---|---|---|
| Python analyzer; checks common headers; flags missing/weak configs; Streamlit UI | Repo README + tree (4 files: `security_headers.py`, `requirements.txt`, README, `.gitignore`) | VERIFIED | This is all the repo supports |
| Header coverage list (HSTS, CSP, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy, COOP/CORP/COEP) | Repo README | VERIFIED | — |
| `Up to 50 domains concurrently` (multi-threaded) | Resume only — **no concurrency/threading code, no 50-domain support in the 4-file repo** | **GATED / UNVERIFIED** | Must not ship without its own repo evidence |
| Scan-history comparison / rescan | Resume only — **absent from repo** | **GATED / UNVERIFIED** | — |
| PDF/JSON automated reporting (ReportLab) | Resume only — **absent from repo** (no ReportLab dep) | **GATED / UNVERIFIED** | — |
| Flagship-slot membership | Previous docs (PRD §7/§10.4, DESIGN §07, ARCHITECTURE §7) | **SUPERSEDED** | Replaced by math-adaptive-reasoning as the weakest-evidence flagship (see rationale below) |

### Non-flagship candidates

| Claim | Source | Status | Note |
|---|---|---|---|
| Agentic Memory Architecture (Markdown + ChromaDB + sentence-transformers, episodic/semantic/reflection/operational memory) | Resume only; repo not in evidence set | SCOPED (resume) | Not a flagship; permitted as future `/notes` or supporting material only |
| Talking Avatar (local LLM → gTTS → pydub → FFmpeg → Wav2Lip pipeline) | Resume only | SCOPED (resume) | Same — no flagship slot |
| Iqnite quiz platform / BugHunter AI / ai-skills / mcp-learning-path / rockFall / DeepLearning | GitHub research | SCOPED | Not within the approved five-project set; not flagship candidates |

---

## Why math-adaptive-reasoning replaced security-header-analysis

1. **Evidence strength:** math-adaptive-reasoning has a 39-file repo with committed experiment
   harness, environment/hardware reports, and smoke-run artifacts, and a README that states its
   stage honestly. security-header-analysis has a 4-file repo whose README describes only a basic
   header checker and whose tree supports **none** of the resume's three headline capabilities
   (50-domain concurrency, scan-history, PDF/JSON).
2. **Specialization balance:** the canonical order (AI / ML Systems → Security Automation →
   Developer Tooling) requires a flagship that makes the AI/ML systems thread substantive.
   math-adaptive-reasoning provides it; the displaced tool does not.
3. **No-fabrication discipline:** keeping security-header-analysis in the flagship index while
   gating its entire value proposition would leave a case study with nothing verified to say —
   a shell. Displacement is the honest outcome; the project may re-enter the set only with repo
   evidence for any headline claim.

## Not yet evidenced (recorded, not invented)

- Deployment domain/URL — TBD by owner.
- Font selections, favicon, final hero copy — TBD by owner/implementation.
- Live users, traffic numbers, performance budgets, testimonials — none exist in evidence; omit.