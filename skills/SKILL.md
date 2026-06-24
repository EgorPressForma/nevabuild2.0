# NevaBuild — Design Skills

This folder contains three design skills for use in this project. Apply them whenever working on UI, visual design, or frontend code.

---

## Skills

### 1. [frontend-design.md](./frontend-design.md)
**Source:** `github.com/anthropics/claude-code/plugins/frontend-design`

Guidance for distinctive, intentional visual design. Use when making aesthetic decisions — typography pairings, color, layout, motion. Prevents generic AI-default outputs. Apply **always** when creating or restyling any page component.

---

### 2. [taste-skill.md](./taste-skill.md)
**Source:** `github.com/Leonxlnx/taste-skill`

Anti-slop frontend skill for landing pages, portfolios, and redesigns. Defines three dials (DESIGN_VARIANCE, MOTION_INTENSITY, VISUAL_DENSITY), strict guardrails (no em-dashes, no generic palettes, one accent color), and a 14-point preflight checklist. Use when **building or redesigning full page sections** with React/Next.js + Tailwind.

---

### 3. [ui-ux-pro-max.md](./ui-ux-pro-max.md)
**Source:** `github.com/nextlevelbuilder/ui-ux-pro-max-skill`

Comprehensive UI/UX design system covering accessibility, touch targets, responsive layout, typography, animation timing, forms, navigation, and data visualization across 10 stacks. Use for **component-level decisions** and quality control: contrast ratios, spacing consistency, interaction states, dark-mode compliance.

---

## When to use which

| Task | Skill(s) |
|------|----------|
| Starting a new page or section | frontend-design + taste-skill |
| Building a component (button, card, form) | ui-ux-pro-max |
| Reviewing existing UI for quality issues | ui-ux-pro-max |
| Choosing fonts, palette, or layout direction | frontend-design |
| Building a full landing page | all three |
| Animating elements | taste-skill + frontend-design |
