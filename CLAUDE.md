# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Multi-Agent Workspace Protocol

**This workspace is shared by multiple AI agents.** Follow these rules:

**Before starting:**
1. Read `../README.md` for house rules
2. Read `../docs/PROGRESS.md` for recent changes
3. Read latest `../docs/HAND-OFF-LOG-*.md` for session context

**Before finishing:**
1. Update `../docs/PROGRESS.md` with your changes
2. Create `../docs/HAND-OFF-LOG-{YYYY-MM-DD}.md` for hand-off

---

## Project Overview

Astro-based website for OurDigital Clinic, a Korean digital marketing consultancy. Deployed on Cloudflare Pages with planned Strapi CMS integration.

## Commands

```bash
# Development
npm run dev          # Start dev server at localhost:4321
npm run build        # Build for production
npm run preview      # Preview production build

# Deployment (via Cloudflare Pages)
# Automatic on git push to main branch
```

## Architecture

```
src/
├── components/      # Reusable Astro components
├── layouts/         # BaseLayout.astro (shared across all pages)
├── pages/           # File-based routing
├── styles/          # global.css (design tokens + components)
└── content/         # Future: Markdown/MDX content collections
```

### Key Files

| File | Purpose |
|------|---------|
| `src/layouts/BaseLayout.astro` | Main layout with head, header, footer |
| `src/styles/global.css` | All CSS (migrated from static site) |
| `src/components/Header.astro` | Navigation with mobile menu |
| `src/components/Footer.astro` | Site footer |
| `astro.config.mjs` | Astro + Cloudflare config |

### Component Pattern

```astro
---
// Frontmatter: imports, props, data fetching
import Component from '@components/Component.astro';

interface Props {
  title: string;
}
const { title } = Astro.props;
---

<!-- Template -->
<div class="component">
  <h1>{title}</h1>
  <slot />
</div>

<style>
  /* Scoped styles (optional) */
</style>
```

### Path Aliases

- `@/*` → `src/*`
- `@components/*` → `src/components/*`
- `@layouts/*` → `src/layouts/*`
- `@styles/*` → `src/styles/*`

## Design System

**Color tokens use `--o-*` prefix** (NOT `--d-*`):

| Token | HEX | Usage |
|-------|-----|-------|
| `--o-black` | #221814 | Primary text |
| `--o-olive` | #cedc00 | Primary accent, CTAs |
| `--o-green` | #287379 | Secondary accent |
| `--o-blue` | #0075c0 | Links |

**CSS classes:** Same as static site - `.btn`, `.service-card`, `.section`, `.grid`, etc.

## Strapi Integration (Future)

```astro
---
// Fetch from Strapi
const response = await fetch(`${import.meta.env.STRAPI_URL}/api/articles`);
const { data } = await response.json();
---
```

Environment variables:
- `STRAPI_URL` - Strapi API URL
- `STRAPI_API_TOKEN` - API token for authenticated requests
- `PUBLIC_SITE_URL` - Public site URL

## Deployment

**Cloudflare Pages** auto-deploys on push to main.

Build settings:
- Build command: `npm run build`
- Output directory: `dist`
- Node version: 18+

## Migration Status

- [x] Project structure created
- [x] Base layout and components
- [x] Homepage migrated
- [x] Services pages (index + placeholders)
- [x] About, Contact, Insights, Lab pages
- [x] Legal pages (privacy, terms, cookies)
- [ ] Service detail pages (full content)
- [ ] Strapi CMS integration
- [ ] Ghost content migration
- [ ] i18n support

## Reference

- **Static HTML source:** `../ourdigital-lab-web/`
- **Live WordPress site:** https://www.ourdigital.org/
