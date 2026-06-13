/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ActivePage = 'home' | 'products' | 'catalog' | 'contact';

export type ProductCategory =
  | 'auto-hinges'
  | 'telescopic-channels'
  | 'sofa-legs'
  | 'cabinet-handles'
  | 'door-hardware'
  | 'glass-fittings';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  categoryName: string;
  itemCode: string;
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
