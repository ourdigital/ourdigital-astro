# OurDigital Website

Modern website for OurDigital Clinic built with Astro and deployed on Cloudflare Pages.

## Tech Stack

- **Framework:** [Astro](https://astro.build/) v4
- **Hosting:** [Cloudflare Pages](https://pages.cloudflare.com/)
- **Styling:** CSS with custom properties (design tokens)
- **Icons:** [Lucide](https://lucide.dev/)
- **Fonts:** Inter + Noto Sans KR (Google Fonts)
- **CMS:** Strapi (planned)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── Header.astro
│   ├── Footer.astro
│   ├── ServiceCard.astro
│   ├── InsightCard.astro
│   └── ...
├── layouts/        # Page layouts
│   └── BaseLayout.astro
├── pages/          # Route pages
│   ├── index.astro
│   ├── about.astro
│   ├── contact.astro
│   ├── insights.astro
│   ├── lab.astro
│   └── services/
│       ├── index.astro
│       ├── seo.astro
│       ├── content-marketing.astro
│       ├── performance-marketing.astro
│       └── brand-intelligence.astro
├── styles/         # Global styles
│   └── global.css
└── content/        # Markdown content (future)
```

## Deployment

### Cloudflare Pages

1. Connect your GitHub repository to Cloudflare Pages
2. Configure build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version:** 18+

### Environment Variables

```
# .env (create from .env.example)
STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your-api-token
PUBLIC_SITE_URL=https://www.ourdigital.org
```

## Design System

### Color Tokens

All colors use `--o-*` prefix:

| Token | HEX | Usage |
|-------|-----|-------|
| `--o-black` | #221814 | Primary text |
| `--o-olive` | #cedc00 | Primary accent, CTAs |
| `--o-green` | #287379 | Secondary accent |
| `--o-blue` | #0075c0 | Links |
| `--o-beige` | #f2f2de | Light backgrounds |
| `--o-gray` | #ebebeb | Section backgrounds |

### Component Classes

- **Buttons:** `.btn`, `.btn-primary`, `.btn-secondary`
- **Cards:** `.service-card`, `.insight-card`, `.resource-card`
- **Layout:** `.container`, `.section`, `.grid`

## Roadmap

- [ ] Complete service detail pages
- [ ] Integrate Strapi CMS for blog/insights
- [ ] Add i18n (Korean/English)
- [ ] Implement contact form backend
- [ ] Migrate Ghost blog content

## Related

- **Static HTML Reference:** `../ourdigital-lab-web/`
- **Live Site:** https://www.ourdigital.org/
