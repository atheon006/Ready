import type { APIRoute } from 'astro';
import { projects } from '@/data/projects';
import { site } from '@/data/profile';

export const GET: APIRoute = () => {
  const urls = ['/', ...projects.map((p) => `/projects/${p.slug}`)];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${new URL(u, site.url).toString()}</loc></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
