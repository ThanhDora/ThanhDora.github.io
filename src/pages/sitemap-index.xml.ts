import type { APIRoute } from 'astro';
import { PROFILE_DATA } from '../data/profile';

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site?.toString().replace(/\/$/, '') || 'https://thanhdora.github.io';

  // Add '/blog/' here when the journal is re-enabled (see src/pages/_blog/README.md).
  const staticPages = ['/', '/resume/', ...PROFILE_DATA.projects.map((p) => `/projects/${p.id}/`)];

  const urls = [
    ...staticPages.map(
      (path) => `  <url>
    <loc>${baseUrl}${path}</loc>
    <changefreq>weekly</changefreq>
    <priority>${path === '/' ? '1.0' : path.startsWith('/projects/') ? '0.7' : '0.8'}</priority>
  </url>`
    ),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
