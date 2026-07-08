/**
 * Generates public/sitemap.xml from the live PRODUCTS and PRODUCT_CATEGORIES
 * arrays in src/data.ts. Runs automatically before every build (see the
 * "prebuild" script in package.json) so the sitemap can never drift out of
 * sync with the actual product list — add a product to data.ts, and its
 * page shows up in the next deploy's sitemap with zero manual work.
 *
 * Run manually with: npm run generate-sitemap
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PRODUCTS, PRODUCT_CATEGORIES } from '../src/data';
import { createProductSlug } from '../src/utils/slug';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_URL = 'https://www.faviona.in';
const TODAY = new Date().toISOString().split('T')[0];

interface UrlEntry {
  loc: string;
  changefreq: string;
  priority: string;
}

const urls: UrlEntry[] = [
  { loc: `${SITE_URL}/`, changefreq: 'weekly', priority: '1.0' },
  { loc: `${SITE_URL}/products`, changefreq: 'daily', priority: '0.9' },
  { loc: `${SITE_URL}/catalog`, changefreq: 'monthly', priority: '0.7' },
  { loc: `${SITE_URL}/contact`, changefreq: 'monthly', priority: '0.6' },
];

// One URL per category filter view
for (const cat of PRODUCT_CATEGORIES) {
  const hasProducts = PRODUCTS.some((p) => p.category === cat.id);
  if (hasProducts) {
    urls.push({
      loc: `${SITE_URL}/products?category=${cat.id}`,
      changefreq: 'weekly',
      priority: '0.7',
    });
  }
}

// One URL per product — this is the part that "self updates"
for (const product of PRODUCTS) {
  urls.push({
    loc: `${SITE_URL}/products/${createProductSlug(product)}`,
    changefreq: 'monthly',
    priority: '0.6',
  });
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outputPath, xml, 'utf-8');

console.log(`✅ sitemap.xml generated with ${urls.length} URLs (${PRODUCTS.length} products) -> ${outputPath}`);
