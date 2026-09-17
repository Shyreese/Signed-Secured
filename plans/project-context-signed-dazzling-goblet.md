# Strip wireframe section labels from the homepage

## Context
During the responsive homepage rebuild, the small uppercase eyebrow labels from the Figma
wireframe ("SECTION 1 — HERO", "SECTION 2 — STATS", etc.) were carried into `src/App.tsx` as a
`SectionLabel` component. These are internal design-tool annotations, not real page copy, and must
not appear in the live build. Everything else about the current design stays exactly as is.

## Approach
Edit `src/App.tsx` only:
1. Delete the `SectionLabel` component definition (around line 25).
2. Remove all 8 `<SectionLabel ...>...</SectionLabel>` usages (Hero, Stats, Services, WhyTrust,
   Pricing, Testimonials, ServiceArea, CTA).

Each label is the first child of its section's inner container, followed by margin-spaced siblings
(`mt-*`), so deleting it leaves spacing intact. No other files, styles, copy, or layout change.

## Verification
- `npx vite build` compiles with no unused-symbol / reference errors.
- Confirm no "SECTION" eyebrow text renders in any section on the running dev server.
