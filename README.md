# Zema Interior and Finishing Works

Design-studio website for **Zema Interior and Finishing Works** — an Addis Ababa studio
combining interior design with turn-key finishing in a single "Concierge" contract.

**Studio:** Bole, Addis Ababa, Ethiopia · **Phone:** +251 718 044 064

## What's inside

- Full-screen project slider (9 portfolio projects with Ken Burns motion)
- Concierge services accordion & five-step process timeline
- Project detail modal with specs, scope, materials and indicative floor plans
- Journal, testimonials, validated contact form, toast notifications
- Marcellus + Archivo type pairing on an espresso / porcelain / bronze palette

## Tech stack

| Layer     | Tool                          |
| --------- | ----------------------------- |
| Framework | React 18 + TypeScript         |
| Bundler   | Vite 6                        |
| Styling   | Tailwind CSS 4                |
| Motion    | CSS keyframes + scroll reveals |

## Getting started

```bash
npm install
npm run dev        # local dev server on http://localhost:3000
npm run build      # production build → dist/
npm run typecheck  # TypeScript check
```

## Deploying to GitHub Pages

A workflow at `.github/workflows/deploy.yml` builds the site and publishes `dist/`
to the `gh-pages` branch on every push to `main`.

1. Push the repo to GitHub (see below).
2. In the repo: **Settings → Pages → Source → GitHub Actions** *(or select the `gh-pages` branch)*.
3. Visit `https://<username>.github.io/<repo-name>/`.

The workflow builds with a relative asset base, so it works under any repo name
without editing `vite.config.ts`.

## Pushing to GitHub

```bash
git init
git add .
git commit -m "Zema Interior and Finishing Works — studio site"
git branch -M main
git remote add origin https://github.com/<username>/zema-interior.git
git push -u origin main
```

## Project structure

```
src/
├── components/   # Header, HeroSlider, Services, Projects, ProjectModal, Contact…
├── data/         # site.ts — all projects, services, posts, contact details
├── hooks/        # useReveal — IntersectionObserver scroll reveals
├── App.tsx       # composition + active-section tracking
└── index.css     # Tailwind 4 theme tokens, keyframes, utilities
```

> To update contact details or portfolio content, edit `src/data/site.ts` —
> every section reads from that single source.
