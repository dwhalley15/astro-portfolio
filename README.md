# Ortheyus — Developer Portfolio

My personal developer portfolio, built with **Astro** and **Tailwind CSS v4**.

A fast, fully static website showcasing my software development projects, technical experience, and notes on things I've learned along the way.

The design takes inspiration from retro arcade games, combining pixel-style typography, warm colours, bold borders, and playful interactions.

**Live website:** [portfolio.ortheyus.uk](https://portfolio.ortheyus.uk/)

## Tech Stack

- **Astro** — Static site generation and file-based routing
- **TypeScript** — Typed content and application logic
- **Tailwind CSS v4** — Styling and responsive layouts
- **Formspree** — Contact form submissions

The website is statically generated, with no client-side framework or hydration required for its core functionality.

## Features

- Fully responsive retro arcade-inspired design
- Statically generated pages with Astro
- Project portfolio with individual project pages
- Notes section with individual articles
- Featured projects and notes on the homepage
- Centralised TypeScript data files for managing content
- Reusable Astro components
- Responsive project imagery
- Contact form powered by Formspree
- Custom 404 page
- SEO metadata and canonical URLs
- Open Graph and Twitter sharing images
- Structured data using JSON-LD
- Automatically generated XML sitemap
- Robots.txt configuration
- Custom favicon and web app icons

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd <repository-directory>
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Available Commands

| Command | Description |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Start the local development server |
| `npm run build` | Build the production website |
| `npm run preview` | Preview the production build locally |
| `npx astro check` | Check Astro and TypeScript files |

## Project Structure

```text
/
├── public/
│   ├── og/                 # Open Graph images
│   ├── robots.txt          # Search engine crawling rules
│   ├── site.webmanifest    # Web app metadata
│   └── favicon.ico
├── src/
│   ├── components/         # Reusable Astro components
│   ├── data/
│   │   ├── projects.ts     # Portfolio project content
│   │   ├── notes.ts        # Notes and article content
│   │   └── stack.ts        # Technology stack
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── uses.astro
│   │   ├── 404.astro
│   │   ├── work/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   └── notes/
│   │       ├── index.astro
│   │       └── [slug].astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── README.md
```

## Managing Content

Content is stored in TypeScript files rather than a CMS or external database.

This keeps the website straightforward to maintain and allows Astro to generate all pages at build time.

### Adding a Project

Projects are managed in `src/data/projects.ts`.

Each project includes information such as:

- Slug and project name
- Year and category
- Description
- Technologies used
- Featured status
- Optional links, images, and detailed content
- Optional SEO metadata

To add a project, create a new entry in the `projects` array.

Astro automatically generates its detail page at:

```text
/work/<project-slug>/
```

Set `featured: true` to make the project eligible for display in the homepage's featured work section.

### Adding a Note

Notes are managed in `src/data/notes.ts`.

Each note contains:

- Slug and title
- Publication date
- Estimated reading time
- Description
- Article body
- Featured status
- Optional SEO metadata

Article sections use the following heading convention:

```text
## // section heading

Article paragraph text.

## // another section

More article text.
```

The note page template parses these headings and renders the article.

New notes are automatically generated at:

```text
/notes/<note-slug>/
```

Set `featured: true` to include a note in the homepage's selected notes section, which displays up to three featured articles.

### Updating the Technology Stack

The homepage's technology list is maintained in:

```text
src/data/stack.ts
```

Add, remove, or reorder entries in the exported `stack` array to update the displayed technologies.

## Design

The visual design is inspired by classic arcade games and retro computing.

### Typography

- **Monoton** — Display headings
- **Space Grotesk** — Body text
- **VT323** — Monospace and arcade-style interface text

### Styling

The website uses Tailwind CSS v4 with custom theme variables defined in `src/styles/global.css`.

The colour palette features burnt orange, cream, golden yellow, and terracotta.

Reusable styling includes decorative stripes, offset button shadows, bold borders, and subtle background textures.

## Contact Form

The contact page uses Formspree to handle form submissions without requiring a custom backend.

The form submits asynchronously and displays success or error feedback directly on the page.

To configure the form for a different account, update the Formspree endpoint in the contact page.

## SEO

SEO metadata is managed through `src/layouts/BaseLayout.astro`.

Supported features include:

- Custom page titles and descriptions
- Canonical URLs
- Open Graph metadata
- Twitter card metadata
- Page-specific sharing images
- JSON-LD structured data
- Optional `noindex` directives

The website uses structured data for the developer profile, project listings, and published notes.

### Sitemap

The XML sitemap is generated automatically using `@astrojs/sitemap` during production builds.

The production domain is configured in `astro.config.mjs`:

```javascript
site: "https://portfolio.ortheyus.uk"
```

After running `npm run build`, the generated files include:

```text
dist/sitemap-index.xml
dist/sitemap-0.xml
```

The sitemap includes statically generated project and note pages and excludes the custom 404 page.

### Robots.txt

The `public/robots.txt` file currently blocks search engine crawling while the website is being prepared:

```text
User-agent: *
Disallow: /

Sitemap: https://portfolio.ortheyus.uk/sitemap-index.xml
```

**Before launching publicly for search engine indexing**, update the crawling rules to allow search engines to access the website.

## Building and Deployment

Create a production build with:

```bash
npm run build
```

Astro generates the static website in the `dist/` directory.

Preview the build locally:

```bash
npm run preview
```

The generated files can be deployed to any hosting provider that supports static websites.

No application server or database is required to serve the portfolio.

## Author

**David Whalley (Ortheyus)**

Software developer.

- [Portfolio](https://portfolio.ortheyus.uk/)
- [GitHub](https://github.com/dwhalley15)
- [LinkedIn](https://www.linkedin.com/in/davidwhalleyprofile)
- [Instagram](https://www.instagram.com/ortheyus/)
- [YouTube](https://www.youtube.com/channel/UCWikZ6mdoqSzCTOvy8MjsLQ)

## License

No licence is currently specified. All rights reserved unless a licence is added to the repository.