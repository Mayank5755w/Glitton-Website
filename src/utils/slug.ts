/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product } from '../types';
import { PRODUCTS } from '../data';

/**
 * Turns any string into a URL-safe slug.
 * "Glitton Hydraulic Auto Hinge 2D SS" -> "glitton-hydraulic-auto-hinge-2d-ss"
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Builds the canonical slug for a product page.
 * We append the product's stable id at the end (e.g. "...-prod-001") so:
 *  - the URL stays valid forever even if you rename the product later
 *  - two products with the same name never collide
 */
export function createProductSlug(product: Product): string {
  return `${slugify(product.name)}-${product.id}`;
}

/**
 * Given a slug from the URL, finds the matching product.
 * We only trust the trailing "prod-XXX" part — the descriptive text before it
 * is just for humans/SEO and can be wrong/stale without breaking the link.
 */
export function getProductBySlug(slug: string): Product | undefined {
  const match = slug.match(/(prod-\d+)$/);
  if (!match) return undefined;
  const id = match[1];
  return PRODUCTS.find((p) => p.id === id);
}

/**
 * Builds the slug for a category listing, used for /products/category/:slug style links
 * if you want them later. Currently categories are filtered via ?category= query param.
 */
export function slugifyCategory(categoryId: string): string {
  return categoryId; // category ids in types.ts are already kebab-case and unique
}
