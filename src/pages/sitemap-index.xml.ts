import type { APIRoute } from 'astro';
import { PROFILE_DATA } from '../data/profile';
import { LOCALES, LOCALE_META, DEFAULT_LOCALE, localizePath } from '../i18n/config';

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site?.toString().replace(/\/$/, '') || 'https://thanhdora.github.io';

  // Locale-independent routes. Add '/blog/' here when the journal is re-enabled.
  const routes = ['/', '/resume/', ...PROFILE_DATA.projects.map((p) => `/projects/${p.id}/`)];
  const priority = (route: string) => (route === '/' ? '1.0' : route.startsWith('/projects/') ? '0.7' : '0.8');

  const urls = routes.flatMap((route) => {
    const alternates = [
      ...LOCALES.map((l) => `    <xhtml:link rel="alternate" hreflang="${LOCALE_META[l].hreflang}" href="${baseUrl}${localizePath(route, l)}"/>`),
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${localizePath(route, DEFAULT_LOCALE)}"/>`,
    ].join('\n');
    return LOCALES.map(
      (l) => `  <url>
    <loc>${baseUrl}${localizePath(route, l)}</loc>
${alternates}
    <changefreq>weekly</changefreq>
    <priority>${priority(route)}</priority>
  </url>`
    );
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
