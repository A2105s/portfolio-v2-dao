# Adarsh Singh — Portfolio

A personal portfolio site with an interactive ASCII koi pond as its front page. Built with Next.js 16, React 19, and Tailwind CSS.

> **Design credit:** this site is a tailored version of [Dao Ho's](https://www.daoho.dev/) portfolio ([github.com/Dao-Ho](https://github.com/Dao-Ho)). All credit for the original design, the koi pond, and the overall craft goes to him — this repository adapts his open-sourced work with Adarsh Singh's own content.

## Highlights

- **Interactive koi pond** — the landing page is a living pond of ASCII koi that swim, school, and rise to food pellets when you click. Each fish carries its own violet-blue markings, shaded like a real body lit from above.
- **Citation mentions** — names in the intro open hover cards styled like academic citations, with roles, dates, and a one-line summary.
- **Projects strip** — a sideways-gliding strip of project tiles; clicking feeds a slide transition into the (optional) project's own page.
- **Light and dark themes** — the pond, the paper, and every colour in between retheme cleanly.
- **View transitions** — the nav stays put while pages slide beneath it.

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router, Turbopack) + [React](https://react.dev/) 19
- [Tailwind CSS](https://tailwindcss.com/) + [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)
- [Motion](https://motion.dev/) for animation
- [PostHog](https://posthog.com/) + [Vercel Analytics](https://vercel.com/analytics) (optional)

## Getting Started

Requires **Node.js >= 20.9**.

```bash
# install dependencies
npm install

# start the dev server (http://localhost:3000)
npm run dev
```

Analytics are optional. To enable PostHog, create `.env.local`:

```bash
NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN=your_posthog_project_token
```

The site runs fine without it.

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server at `localhost:3000` |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` / `lint:fix` | ESLint |
| `npm run format` / `format:check` | Prettier |

## Where the Content Lives

Everything on the site is data-driven, so tailoring it means editing TypeScript objects rather than JSX:

| What | Where |
| --- | --- |
| Intro bio + social links | `src/app/components/front-page.tsx` |
| Experience cards (the hover citations) | `src/app/data/sources.ts` |
| Projects | `src/app/data/projects.ts` |
| Site metadata + share card | `src/app/layout.js`, `src/app/opengraph-image.png` |
| Koi colours | `src/app/components/koi-pond/renderer.ts` (the `DARK` / `LIGHT` palettes) |

## Licence & Credits

The original design and code are the work of **[Dao Ho](https://www.daoho.dev/)** — thank you for sharing it. This adaptation replaces the personal content (bio, experience, projects, branding) with Adarsh Singh's; the koi pond, layout system, and visual language are entirely his.
