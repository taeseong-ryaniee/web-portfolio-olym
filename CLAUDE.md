# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands
- `npm run dev` — start the dev server (localhost:3000)
- `npm run build` — production build
- `npm start` — serve the production build
- `npm run lint` — ESLint (flat config: `eslint-config-next` core-web-vitals + typescript)
- No test suite exists in this repo.

## Architecture
- Next.js App Router, single-page site. `src/app/page.tsx` renders `HeroSection` + `ProjectsSection` — there's no routing beyond this one page.
- Content is data-driven: `src/lib/projects.json` holds the raw project records, read through the typed accessors in `src/lib/projects.ts` (`allProjects`, `getYears`, `getMockupImage`). Add or edit portfolio entries in the JSON, not in components.
- Image convention: each project's `id` must match a folder under `public/images/<id>/mockup.webp` — `getMockupImage` builds that path by convention and does not verify the file exists.
- `ProjectsSection` (`"use client"`) owns the year-filter state and splits `allProjects` into one featured (first) item plus the rest, driving the asymmetric magazine-style grid.
- `RevealOnScroll` is the app's one scroll-animation primitive — a generic `IntersectionObserver` wrapper that respects `prefers-reduced-motion`, used to stagger-reveal project cards.
- `ThemeToggle` persists dark mode to `localStorage` and toggles a `.dark` class on `document.documentElement`; Tailwind's dark variant is wired to that class via `@custom-variant dark (&:is(.dark *))` in `globals.css`.
- Styling is Tailwind v4 with CSS-first config (no `tailwind.config.js`) — theme tokens and the light/dark oklch color palettes live in `src/app/globals.css` under `@theme inline`. The Korean display/heading webfonts (Daehan-Bold, ChosunIlboMyungjo, Wanted Sans) are loaded via CDN `<link>`/`@font-face` rather than `next/font`.
- Deploys to Vercel (`.vercel/` project link present).

## Design System
Always read DESIGN.md before making any visual or UI decisions.
All font choices, colors, spacing, and aesthetic direction are defined there.
Do not deviate without explicit user approval.
In QA mode, flag any code that doesn't match DESIGN.md.

## Skill routing

When the user's request matches an available skill, ALWAYS invoke it using the Skill
tool as your FIRST action. Do NOT answer directly, do NOT use other tools first.
The skill has specialized workflows that produce better results than ad-hoc answers.

Key routing rules:
- Product ideas, "is this worth building", brainstorming → invoke office-hours
- Bugs, errors, "why is this broken", 500 errors → invoke investigate
- Ship, deploy, push, create PR → invoke ship
- QA, test the site, find bugs → invoke qa
- Code review, check my diff → invoke review
- Update docs after shipping → invoke document-release
- Weekly retro → invoke retro
- Design system, brand → invoke design-consultation
- Visual audit, design polish → invoke design-review
- Architecture review → invoke plan-eng-review
