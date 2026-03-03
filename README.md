# Portfolio Website

A minimal, single-page portfolio inspired by [brittanychiang.com](https://brittanychiang.com). Built with **Next.js 14** and **Tailwind CSS**.

## Features

- **Hero** — Name, tagline, and CTA
- **About** — Bio and tech stack with optional profile image placeholder
- **Experience** — Timeline of roles with company, period, description, and tech
- **Projects** — Project cards with description and tech tags
- **Responsive** — Fixed sidebar on desktop, hamburger menu on mobile
- **Dark theme** — Navy/slate palette with green accent (Halcyon-inspired)
- **Accessibility** — Skip to content link, semantic HTML, ARIA where needed

## Get started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

1. **Content** — Edit the placeholder text in:
   - `src/components/Hero.tsx` — Your name, title, and intro
   - `src/components/About.tsx` — Bio and tech list
   - `src/components/Experience.tsx` — Jobs array
   - `src/components/Projects.tsx` — Projects array
   - `src/components/Sidebar.tsx` — Nav labels and social links
2. **Meta** — Update `metadata` in `src/app/layout.tsx` (title, description).
3. **Profile image** — Replace the “You” placeholder in `About.tsx` with an `<Image>` or `<img>`.

## Build

```bash
npm run build
npm start
```

## Deploy

Deploy to [Vercel](https://vercel.com) (recommended) or any Node host that supports Next.js.
