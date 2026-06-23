/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product } from './types';

/* ============================================================================
   📁 HOW TO ADD A NEW CATEGORY
   ============================================================================
   1. Put your category thumbnail image inside: public/images/<your-folder>/
   2. Copy this template and paste it into PRODUCT_CATEGORIES below:

      { id: 'your-id', name: 'Your Category Name', description: 'Short description', image: '/images/your-folder/your-image.jpg' },

   3. Also add the same id to the ProductCategory type in types.ts:
      | 'your-id'

   That's it — the filter pill and homepage card appear automatically.
   ============================================================================ */

export const PRODUCT_CATEGORIES = [
  { id: 'auto-hinges', name: 'Auto Hinges', description: 'Advanced hydraulic soft-close solutions for smooth cabinet door operation', image: '/images/auto-hinge/auto-hinge.png' },
  { id: 'telescopic-channels', name: 'Telescopic Channels', description: 'Heavy-duty drawer sliders with seamless gliding and push-to-open mechanics', image: '/images/telescopic-channel/1.jpeg' },
  { id: 'sofa-legs', name: 'Sofa Legs', description: 'Architectural legs offering structural stability and high-end aesthetics', image: '/images/sofa-leg/sl17.png' },
  { id: 'cabinet-handles', name: 'Cabinet Handles', description: 'Luxurious pulls, T-bars, and profile edge handles to elevate cabinetry', image: '/images/cabinet-handle/ch1.png' },
  { id: 'door-hardware', name: 'Door Hardware', description: 'Secure mortise locksets, heavy-duty hinges, and professional closers', image: '/images/door-hardware/door-hardware.png' },
  { id: 'glass-fittings', name: 'Glass Fittings', description: 'Premium frameless glass connectors, patch fittings, and shower hinges', image: '/images/glass-fittings/glass-fitting.png' }

  // 👉 ADD NEW CATEGORIES HERE — paste template from instructions above

] as const;


/* ============================================================================
   📁 HOW TO ADD A NEW PRODUCT
   ============================================================================
   1. Put your product image inside: public/images/<category-folder>/
   2. Copy this template into the PRODUCTS array below (anywhere in the list):

      {
        id: 'prod-XX',                  // must be unique, just increase the number
        name: 'Your Product Name',
        category: 'auto-hinges',        // must match an id from PRODUCT_CATEGORIES above
        categoryName: 'Auto Hinges',    // must match the category's "name" field
        itemCode: 'YOUR-CODE-01',
        image: '/images/your-folder/your-image.jpg',
        brand: 'GLITTON'                // or 'FLAMENCO'
      },

   The fields below (material, finish, size, features, description) are kept
   in the data structure for future use, but are no longer shown on the site —
   only Name, Image, Brand, and Code are displayed. You can leave them blank
   ('') if you don't want to fill them in.
   ============================================================================ */

export const PRODUCTS: Product[] = [

  // --- Auto Hinges ---
  {
    id: 'prod-01',
    name: 'GLITTON Auto Soft-Close Hydraulic Hinge',
    category: 'auto-hinges',
    categoryName: 'Auto Hinges',
    itemCode: 'GL-AH-2D3D',
    material: '',
    finish: '',
    size: '',
    features: [],
    image: '/images/auto-hinge/auto-hinge.png',
    description: '',
    brand: 'GLITTON'
  },

  // --- Telescopic Channels ---
  {
    id: 'prod-02',
    name: 'Glitton Soft-Close Telescopic Channel',
    category: 'telescopic-channels',
    categoryName: 'Telescopic Channels',
    itemCode: 'GL-C201S',
    material: '',
    finish: '',
    size: '',
    features: [],
    image: '/images/telescopic-channel/telescopic-channel.jpeg',
    description: '',
    brand: 'GLITTON'
  },

  // --- Sofa Legs ---
  {
    id: 'prod-06',
    name: 'Flamenco Cylinder Sofa Leg – Chrome',
    category: 'sofa-legs',
    categoryName: 'Sofa Legs',
    itemCode: 'FL-L502C',
    material: '',
    finish: '',
    size: '',
    features: [],
    image: '/images/sofa-legs/sofa-leg.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-07',
    name: 'Flamenco Square Tapered Sofa Leg – Gold',
    category: 'sofa-legs',
    categoryName: 'Sofa Legs',
    itemCode: 'FL-L504G',
    material: '',
    finish: '',
    size: '',
    features: [],
    image: '/images/sofa-legs/sofa-leg.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-08',
    name: 'Flamenco Round Sofa Leg – Matte Black',
    category: 'sofa-legs',
    categoryName: 'Sofa Legs',
    itemCode: 'FL-L506B',
    material: '',
    finish: '',
    size: '',
    features: [],
    image: '/images/sofa-legs/sofa-leg.png',
    description: '',
    brand: 'FLAMENCO'
  },

  // --- Cabinet Handles ---
  {
    id: 'prod-09',
    name: 'Flamenco SS Hollow Square Profile Handle',
    category: 'cabinet-handles',
    categoryName: 'Cabinet Handles',
    itemCode: 'FL-HNL-SS-SQ',
    material: '',
    finish: '',
    size: '',
    features: [],
    image: '/images/cabinet-handles/cabinet-handle.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-10',
    name: 'Flamenco SS Hollow Round Profile Handle',
    category: 'cabinet-handles',
    categoryName: 'Cabinet Handles',
    itemCode: 'FL-HNL-SS-RD',
    material: '',
    finish: '',
    size: '',
    features: [],
    image: '/images/cabinet-handles/cabinet-handle.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-11',
    name: 'Flamenco Zinc Alloy Designer Handle – Gold',
    category: 'cabinet-handles',
    categoryName: 'Cabinet Handles',
    itemCode: 'FL-HNL-ZN-GD',
    material: '',
    finish: '',
    size: '',
    features: [],
    image: '/images/cabinet-handles/cabinet-handle.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-12',
    name: 'Flamenco Zinc Alloy Designer Handle – Chrome',
    category: 'cabinet-handles',
    categoryName: 'Cabinet Handles',
    itemCode: 'FL-HNL-ZN-CR',
    material: '',
    finish: '',
    size: '',
    features: [],
    image: '/images/cabinet-handles/cabinet-handle.png',
    description: '',
    brand: 'FLAMENCO'
  },

  // --- Door Hardware ---
  {
    id: 'prod-13',
    name: 'Glitton Mortise Door Lock Set',
    category: 'door-hardware',
    categoryName: 'Door Hardware',
    itemCode: 'GL-DR-ML-01',
    material: '',
    finish: '',
    size: '',
    features: [],
    image: '/images/door-hardware/door-hardware.png',
    description: '',
    brand: 'GLITTON'
  },
  {
    id: 'prod-14',
    name: 'Glitton Tower Bolt – SS Satin',
    category: 'door-hardware',
    categoryName: 'Door Hardware',
    itemCode: 'GL-DR-TB-SS',
    material: '',
    finish: '',
    size: '',
    features: [],
    image: '/images/door-hardware/door-hardware.png',
    description: '',
    brand: 'GLITTON'
  },

  // --- Glass Fittings ---
  {
    id: 'prod-15',
    name: 'Flamenco Glass-to-Glass 90° Shower Hinge',
    category: 'glass-fittings',
    categoryName: 'Glass Fittings',
    itemCode: 'FL-GF-GG-90',
    material: '',
    finish: '',
    size: '',
    features: [],
    image: '/images/glass-fittings/glass-fitting.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-16',
    name: 'Flamenco Glass-to-Wall Shower Hinge',
    category: 'glass-fittings',
    categoryName: 'Glass Fittings',
    itemCode: 'FL-GF-GW-90',
    material: '',
    finish: '',
    size: '',
    features: [],
    image: '/images/glass-fittings/glass-fitting.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-17',
    name: 'Flamenco Glass Door Patch Fitting',
    category: 'glass-fittings',
    categoryName: 'Glass Fittings',
    itemCode: 'FL-GF-PF-01',
    material: '',
    finish: '',
    size: '',
    features: [],
    image: '/images/glass-fittings/glass-fitting.png',
    description: '',
    brand: 'FLAMENCO'
  }

  // 👉 ADD NEW PRODUCTS HERE — paste template from instructions above

];

export const BRANDS = {
  GLITTON: {
    name: 'GLITTON',
    tagline: 'German-standard furniture fittings and hardware solutions.',
    description: 'Glitton represents precision engineering, durability, and practical design.'
  },
  FLAMENCO: {
    name: 'FLAMENCO',
    tagline: 'Architectural and furniture hardware collection.',
    description: 'Flamenco focuses on architectural elegance, premium finishes, and clean geometric statements.'
  }
};

export const CONTACT_INFO = {
  companyName: 'FAVIONA OVERSEAS EXIM PVT. LTD.',
  subtitle: 'House of Premium Furniture Fittings & Architectural Hardware',
  registeredOffice: 'Kharangajhar, Telco Colony, Jamshedpur, Jharkhand – 831004',
  warehouse: 'Birsanagar Zone No. 4, Jamshedpur, Jharkhand – 831019',
  phone: '+91 9204110077',
  email: 'favionaoverseas@gmail.com',
  whatsappUrl: 'https://wa.me/919204110077?text=Hi!%20I%20visited%20your%20Glitton%20Hardware%20website%20and%20want%20to%20inquire%20about%20your%20products.',
  catalogDownloadUrl: '#/catalog'
};
