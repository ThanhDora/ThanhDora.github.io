# Journal (disabled)

The blog routes live here with a leading underscore so Astro does not build them.
To re-enable once you have real posts:

1. Add Markdown posts to `src/content/blog/` (schema in `src/content/config.ts`).
2. Rename this folder back to `src/pages/blog`.
3. Uncomment the Journal entry in `src/components/Header.astro` and add `'/blog/'` to `staticPages` in `src/pages/sitemap-index.xml.ts`.
