# Seedrail Docs (`docs.seedrail.dev`)

Public user documentation site for Seedrail, built with [Astro Starlight](https://starlight.astro.build/) and deployed automatically to GitHub Pages (`https://docs.seedrail.dev`) via GitHub Actions.

Supports bilingual documentation out of the box:
- **English (default `/`)**: `src/content/docs/`
- **简体中文 (`/zh-cn/`)**: `src/content/docs/zh-cn/`

## Local Development & Build

Requires Node.js 22+ and `pnpm` 10+:

```bash
pnpm install
pnpm dev
```

Build the static site and offline full-text search index (Pagefind):

```bash
pnpm build
pnpm preview --port 4321 --host 127.0.0.1
```

## Directory Layout

- `src/content/docs/` — English documentation pages (root `/`)
- `src/content/docs/zh-cn/` — Simplified Chinese documentation pages (`/zh-cn/`)
- `src/components/` — Custom Starlight `Hero.astro` and `HomeSections.astro` landing sections
- `src/styles/custom.css` — Layered design tokens and component styles
- `public/CNAME` — Custom domain declaration (`docs.seedrail.dev`)
- `.github/workflows/deploy.yml` — Automated GitHub Pages build & deployment on pushes to `main`
