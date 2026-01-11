---
id: 1
title: Update Constitution
stage: constitution
date: 2026-01-10
surface: agent
model: Qwen
feature: none
branch: main
user: sadiqkhan
command: /sp.constitution
labels: [constitution, governance, architecture]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
tests:
 - none
---

## Prompt

$ARGUMENTS

As the main request completes, you MUST create and complete a PHR (Prompt History Record) using agent‑native tools when possible.

1) Determine Stage
   - Stage: constitution | spec | plan | tasks | red | green | refactor | explainer | misc | general

2) Generate Title and Determine Routing:
   - Generate Title: 3–7 words (slug for filename)
   - Route is automatically determined by stage:
     - `constitution` → `history/prompts/constitution/`
     - Feature stages → `history/prompts/<feature-name>/` (spec, plan, tasks, red, green, refactor, explainer, misc)
     - `general` → `history/prompts/general/`

3) Create and Fill PHR (Shell first; fallback agent‑native)
   - Run: `.specify/scripts/bash/create-phr.sh --title "<title>" --stage <stage> [--feature <name>] --json`
   - Open the file and fill remaining placeholders (YAML + body), embedding full PROMPT_TEXT (verbatim) and concise RESPONSE_TEXT.
   - If the script fails:
     - Read `.specify/templates/phr-template.prompt.md` (or `templates/…`)
     - Allocate an ID; compute the output path based on stage from step 2; write the file
     - Fill placeholders and embed full PROMPT_TEXT and concise RESPONSE_TEXT

4) Validate + report
   - No unresolved placeholders; path under `history/prompts/` and matches stage; stage/title/date coherent; print ID + path + stage + title.
   - On failure: warn, don't block. Skip only for `/sp.phr`.

/sp.constitution You are a Spec-Kit documentation agent.

Your task is to generate a formal, authoritative `/spec/sp.constitution.md`
for a Full-Stack Web Application assignment.

PROJECT OVERVIEW
- Frontend: Next.js (App Router) using TypeScript
- Backend: FastAPI (Python)
- Architecture: Spec-Driven Development (Spec-Kit)
- Containerization: Docker + Docker Compose
- Communication: REST API (JSON)
- Target: Academic assignment / hackathon evaluation

CONSTITUTION OBJECTIVES
- Define non-negotiable architectural rules
- Enforce clear separation of concerns
- Establish security, scalability, and maintainability constraints
- Guide human developers and autonomous CLI agents

REQUIRED SECTIONS (MANDATORY)
1. Purpose & Scope
2. Technology Stack (explicitly mention Next.js with TypeScript)
3. Architectural Boundaries
4. Frontend Rules (Next.js + TypeScript)
5. Backend Rules (FastAPI)
6. API Communication Rules
7. Docker & Containerization Rules
8. Environment & Configuration Rules
9. Security & Validation Rules
10. Testing & Quality Constraints
11. Prohibited Practices
12. Agent Execution Constraints

STRICT RULES
- Frontend MUST be written in Next.js using TypeScript only
- Backend MUST be FastAPI (Python)
- No direct database access from frontend
- All services MUST run in Docker containers
- No hard-coded secrets
- All API communication via REST
- Clear enforcement language (MUST, MUST NOT, SHOULD)

STYLE & FORMAT
- Markdown format
- Professional, formal, authoritative tone
- Use bullet points and short paragraphs
- Suitable for automated agents and human reviewers
- Do NOT include implementation code
- Do NOT include planning or task breakdowns

OUTPUT
- Output ONLY the contents of `/spec/sp.constitution.md`
- Do not add explanations outside the document

## Response snapshot

I'll help you create a constitution for your Full-Stack Web Application. Let me first check if there's an existing constitution template to work with.

...

Now I'll create a comprehensive constitution for your Full-Stack Web Application based on the template and your requirements. Let me generate the content with all the required sections:

...

## Outcome

- ✅ Impact: Updated the project constitution with all required sections for a Full-Stack Web Application using Next.js and FastAPI
- 🧪 Tests: none
- 📁 Files: .specify/memory/constitution.md
- 🔁 Next prompts: none
- 🧠 Reflection: The constitution now contains all required sections with clear, enforceable rules for the tech stack and development practices

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): not applicable
- Prompt variant (if applicable): not applicable
- Next experiment (smallest change to try): not applicable