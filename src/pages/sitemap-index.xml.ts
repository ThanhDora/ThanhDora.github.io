import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site?.toString().replace(/\/$/, '') || 'https://ThanhDora.github.io';
  const posts = await getCollection('blog');

  const staticPages = ['', '/blog', '/resume'];

  const urls = [
    ...staticPages.map(
      (path) => `  <url>
    <loc>${baseUrl}${path || '/'}</loc>
    <changefreq>weekly</changefreq>
    <priority>${path === '' ? '1.0' : '0.8'}</priority>
  </url>`
    ),
    ...posts.map(
      (post) => `  <url>
    <loc>${baseUrl}/blog/${post.slug}/</loc>
    <lastmod>${post.data.pubDate.toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
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
