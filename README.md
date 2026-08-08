# Personal site — bare starter

Empty on purpose. Folder structure is set up, accessibility basics are wired in,
nothing else is decided for you.

## Run it

```bash
npm install
npm run dev
```

## What's already here and why

- **`src/styles/index.css`** — a reset, CSS custom properties for tokens (colors,
  spacing, fonts), `prefers-reduced-motion` handling, and a `:focus-visible` outline.
  Change the token values, keep the reduced-motion query — add that *before* you add
  any animation, not as an afterthought.
- **`App.jsx`** — has a skip link, `<header>/<main>/<footer>` landmarks, and one `<h1>`.
  These are the accessibility non-negotiables; everything else in the file is yours.
- **Folder structure**:
  - `src/components/` — small reusable pieces (a button, a nav link, a tag)
  - `src/sections/` — big single-use page chunks (Hero, Work, About, Contact)
  - `src/data/` — content as data, kept separate from markup
  - `src/hooks/` — custom hooks once you have logic worth extracting
  - `src/assets/` — images/fonts you `import` into components
  - `public/` — files you link to directly by path (resume.pdf, favicon)

## A rough build order, if useful

1. Nav + header — get routing/scrolling between sections working before styling.
2. Hero — headline, one clear visual anchor.
3. One content section fully built end to end (copy, layout, responsive) before
   starting the next — resist building all sections' skeletons at once.
4. Pass a keyboard-only check: tab through the whole page, confirm you can reach
   and activate every link/button, and that focus is always visible.
5. Check color contrast on your final palette (WebAIM contrast checker) before
   calling it done — easy to fix early, annoying to fix after content is in.
6. Test at 375px width (small phone) and resize up — don't only design at
   desktop width and shrink down.

## Deploy

Push to GitHub, import into Vercel, done. See earlier notes for details if you
lost them — happy to repeat.
