/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ActivePage = 'home' | 'products' | 'catalog' | 'contact';

/**
 * 👉 When you add a new category in data.ts (PRODUCT_CATEGORIES),
 *    add its id here too, in the same format: | 'your-id'
 */
export type ProductCategory =
  | 'auto-hinges'
  | 'telescopic-channels'
  | 'sofa-legs'
  | 'butt-hinges'
  | 'aldrops'
  | 'cabinet-handles'
  | 'pipe-concealed'
  | 'curtain-knobs'
  | 'door-closers'
  | 'concealed-handles'
  | 'jali'
  | 'multi-locks'
  | 'tower-bolts'
  | 'aluminium-tower-bolts'
  | 'aluminium-latches'
  | 'mirror-brackets'
  | 'd-brackets'
  | 'f-brackets'
  | 'glass-hardware'
  | 'main-door-handles'
  | 'towel-racks'
  | 'door-fittings'
  | 'screws-nails'
  | 'key-hangers'
  | 'cloth-hangers'
  | 'door-stoppers'
  | 'safot'
  | 'safety-corner-stud';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  categoryName: string;
  specification: string;   // free text: size, metal type, finish, or any short spec
  material: string;
  finish: string;
  size: string;
  features: string[];
  image: string;
  description: string;
  brand: 'GLITTON' | 'FLAMENCO';
}

export interface SearchQuery {
  text: string;
  category?: ProductCategory;
  brand?: 'GLITTON' | 'FLAMENCO' | 'ALL';
}
