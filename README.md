# Prathibha R — Portfolio

A premium, single-page personal portfolio built with React, TypeScript, Vite, Tailwind CSS v4, Framer Motion, and Lucide React.

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Framer Motion (page-load and scroll-reveal animations)
- Lucide React (icons)
- lottie-react (AI-network illustration, self-authored Lottie JSON at `src/assets/lottie/ai-network.json`)
- Self-hosted fonts: Space Grotesk (display) and Inter (body) via `@fontsource`

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # type-check and build for production
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  components/
    layout/     Navbar, Footer, AmbientBackground
    ui/         Button, Card, Badge, SectionHeading, ThemeToggle, brand icons, illustration
  sections/     One folder per page section (Hero, About, Skills, Experience,
                Projects, Timeline, Achievements, Contact), each with its own
                component(s) and a barrel `index.ts`
  data/         Typed content for every section — edit these files to update
                copy, projects, skills, timeline entries, etc.
  hooks/        useTheme, useActiveSection, useScrollLock, useContactForm
  context/      ThemeContext (dark/light mode, persisted to localStorage)
  utils/        cn (classnames) and Framer Motion variants
```

## Things to replace before deploying

- `public/resume/Prathibha-R-Resume.pdf` — placeholder file, swap in the real resume PDF (keep the same filename, or update the path in `src/data/navigation.ts` and `src/sections/Hero/Hero.tsx`).
- `src/data/navigation.ts` — GitHub/LinkedIn/email URLs are placeholders.
- `src/data/projects.ts` — GitHub and live demo URLs are placeholders.
- `src/hooks/useContactForm.ts` — the contact form currently opens the visitor's email client via a `mailto:` link (`CONTACT_EMAIL`). Swap in a real form backend (e.g. Formspree, a serverless function, or your own API) if you'd prefer in-page submission.
- `src/assets/lottie/ai-network.json` — a self-authored Lottie animation (used because this environment couldn't reach external asset CDNs). Swap in any `.json` export from LottieFiles or After Effects/Bodymovin if you want a different illustration — just keep the same import in `src/components/ui/AINetworkIllustration.tsx`.

## Notes

- Dark/light theme is toggled from the navbar and persisted across visits.
- All content lives in `src/data/*.ts` as typed objects — no copy is hardcoded inside components.
- Respects `prefers-reduced-motion`.
