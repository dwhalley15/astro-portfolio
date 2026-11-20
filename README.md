# Ortheyus — Developer Portfolio

A statically generated developer portfolio built with **Astro 7**, **TypeScript**, and **Tailwind CSS v4**, deployed on **Cloudflare Pages**.

**Live:** https://portfolio.ortheyus.uk/

## Tech Stack

| Technology | Purpose |
|---|---|
| Astro 7 | Static site generation and file-based routing |
| TypeScript | Typed data models and application logic |
| Tailwind CSS v4 | Responsive styling and custom design system |
| Astro Assets | Responsive images and WebP optimisation |
| Formspree | Serverless contact form submissions |
| Cloudflare Pages | Static hosting, CDN and deployment |
| Fontsource | Self-hosted web fonts |

## Architecture & Features

- Fully static HTML output with no client-side framework or hydration
- Dynamic routes generated at build time using `getStaticPaths()`
- Centralised TypeScript data for projects, articles and technologies
- Reusable Astro components and layouts
- Responsive images with automatic optimisation
- Optional privacy-enhanced YouTube embeds
- Asynchronous Formspree contact form
- Page-specific Open Graph and Twitter metadata
- Canonical URLs and JSON-LD structured data
- XML sitemap generated with `@astrojs/sitemap`
- Content Security Policy (CSP) and HTTP security headers
- Asset caching configured through Cloudflare Pages `_headers`
- Custom 404 page and robots.txt

## Getting Started

**Requirements:** Node.js and npm.

```bash
git clone <repository-url>
cd <repository-directory>
npm install
npm run dev
```

Development server: http://localhost:4321

### Commands

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Generate production build |
| `npm run preview` | Preview production build |
| `npx astro check` | Run Astro and TypeScript diagnostics |

## Project Structure

```text
public/
  _headers             # Cloudflare security and cache headers
  og/                  # Open Graph images
  robots.txt
  site.webmanifest

src/
  assets/              # Optimised project images
  components/          # Reusable Astro components
  data/
    projects.ts        # Typed project data
    notes.ts           # Typed article data
    stack.ts           # Technology stack
  layouts/
    BaseLayout.astro   # Shared layout, SEO and structured data
  pages/
    work/[slug].astro  # Generated project pages
    notes/[slug].astro # Generated article pages
  styles/
    global.css         # Tailwind theme and global styles

astro.config.mjs       # Astro, sitemap and CSP configuration
```

## SEO & Security

SEO is configured through `BaseLayout.astro`, with page-specific metadata and JSON-LD.

The sitemap is generated during production builds, including dynamically generated routes and article modification dates.

Security includes Astro's Content Security Policy, restricted third-party resources, and HTTP response headers configured in `public/_headers`.

## Build & Deployment

The site is deployed to **Cloudflare Pages** as a static application.

```bash
npm run build
```

| Setting | Value |
|---|---|
| Framework preset | Astro |
| Build command | `npm run build` |
| Output directory | `dist` |
| Runtime | Static — no server required |

## Author

**David Whalley — Ortheyus**

[Portfolio](https://portfolio.ortheyus.uk/) · [GitHub](https://github.com/dwhalley15) · [LinkedIn](https://www.linkedin.com/in/davidwhalleyprofile)

## License

All rights reserved. No licence currently specified.