# Thanh Dora — Quiet Atelier Portfolio

Personal portfolio, architectural case studies, printable CV, and engineering journal of **Thanh Dora (Lê Thành Đạt)**, built according to [ke-hoach-trang-web-profile.md](./ke-hoach-trang-web-profile.md).

## Aesthetic & Architecture ("Quiet Atelier")

- **Palette**: Warm Linen (`#F5F1EB`), Charcoal Ink (`#1C1917`), Botanical Sage (`#5F7A6A`), and Warm Stone (`#E8E2D9`, `#A89F91`) with instant **Light / Dark Mode** toggle (or press `T` anywhere).
- **Typography**: *Playfair Display* (Editorial Serif), *Manrope* (Clean Sans), and *JetBrains Mono* (Architectural Coordinates & Metadata).
- **Tech Stack**: [Astro 4](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/) + Content Collections (Markdown) + Sitemap + GitHub Actions CI/CD.

## Project Structure

```text
├── .github/workflows/deploy.yml   # Automated GitHub Pages CI/CD pipeline
├── public/                        # Static assets (favicon.svg, og-image.svg, robots.txt)
├── src/
│   ├── components/                # Header, Footer, ProjectVisual SVG schematics
│   ├── content/blog/              # Markdown technical essays & notes
│   ├── data/profile.ts            # Single source of truth for bio, skills, projects, experience
│   ├── layouts/BaseLayout.astro   # SEO, JSON-LD, theme initializer, tactile paper grain
│   ├── pages/
│   │   ├── index.astro            # One-page portfolio (#about, #skills, #projects, #experience, #contact)
│   │   ├── resume.astro           # Dedicated print-ready Curriculum Vitae (/resume)
│   │   ├── 404.astro              # Custom editorial 404 page
│   │   └── blog/                  # Markdown journal index & article pages (/blog)
│   └── styles/global.css          # CSS custom properties for Light/Dark Quiet Atelier theme
└── astro.config.mjs               # Configured for https://ThanhDora.github.io
```

## Quick Commands

```bash
# Start local development server at http://localhost:4321
npm run dev

# Build static production site into ./dist
npm run build

# Preview production build locally
npm run preview
```

## Customizing Content

1. **Personal Info, Skills, Projects & Timeline**: Edit [`src/data/profile.ts`](./src/data/profile.ts).
2. **Blog / Engineering Notes**: Add or edit `.md` files inside [`src/content/blog/`](./src/content/blog/).
3. **Switching to Custom Domain (`thanhdora.site` or `profile.thanhdora.site`)**:
   - Update `site` in [`astro.config.mjs`](./astro.config.mjs).
   - Create `public/CNAME` containing your custom domain (e.g., `profile.thanhdora.site`).
   - Add the `CNAME` / `A` records in Cloudflare DNS as documented in [`ke-hoach-trang-web-profile.md`](./ke-hoach-trang-web-profile.md).
