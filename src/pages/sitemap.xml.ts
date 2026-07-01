import { site } from '../data/site';
import { publicRoutes } from '../data/sitemap';

export const GET = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${publicRoutes
  .map((route) => {
    const loc = new URL(route, site.url).toString();
    return `  <url>
    <loc>${loc}</loc>
  </url>`;
  })
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
