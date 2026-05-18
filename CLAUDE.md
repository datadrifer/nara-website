@AGENTS.md

# Cockpit (Architecture Visualization)

This is the Next.js cockpit — an interactive visualization of the Maddi v5 architecture. It is NOT the product itself.

See `../CLAUDE.md` for project-wide instructions and `../IMPLEMENTATION-PLAN.md` for the build plan and task tracking.

## ⛔ NaRa DS is a HARD rule here

Every visible page in this Next.js app — `/slide/*`, `/ds-nara`, `/brief/*`, `/architecture*`, `/tiers`, `/brand`, any mock or prototype — renders only on NaRa tokens.

- **Fonts:** PP Mondwest + PP NeueBit only. No `ui-sans-serif`, no Geist, no system fallbacks. Use `var(--font-mono)` / `var(--font-display)` or import from `app/ds-nara/tokens.ts`.
- **Colors:** Only `colors.*` or the `--slide-*` CSS vars. No raw hex, no ad-hoc `rgba(...)`.
- **Shape:** All corners square (`radius = 0`). No pills, no rounded buttons.
- **Brand lockups:** Banned. Use `ASSISTANT`, `MODEL`, etc. — never ChatGPT/OpenAI/Claude/GitHub/Figma.
- **Icons:** Prefer typographic glyphs (☑ ☒ ◯ ◇ + ↑ ↓ → ←). SVG only with `currentColor`.
- **"Outside world" mocks:** If a slide shows a chat composer, terminal, or search box, it is still NaRa — render it with NaRa tokens. There is no outside world inside NaRa.

The full rule with rationale is in `../CLAUDE.md`. Read it. Violations are treated as breaking a hard rule, not a design tradeoff.
