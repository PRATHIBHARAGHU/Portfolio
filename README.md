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

