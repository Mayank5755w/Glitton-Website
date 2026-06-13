/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product } from './types';

export const PRODUCT_CATEGORIES = [
  { id: 'auto-hinges', name: 'Auto Hinges', description: 'Advanced hydraulic soft-close solutions for smooth cabinet door operation' },
  { id: 'telescopic-channels', name: 'Telescopic Channels', description: 'Heavy-duty drawer sliders with seamless gliding and push-to-open mechanics' },
  { id: 'sofa-legs', name: 'Sofa Legs', description: 'Architectural legs offering structural stability and high-end aesthetics' },
  { id: 'cabinet-handles', name: 'Cabinet Handles', description: 'Luxurious pulls, T-bars, and profile edge handles to elevate cabinetry' },
  { id: 'door-hardware', name: 'Door Hardware', description: 'Secure mortise locksets, heavy-duty hinges, and professional closers' },
  { id: 'glass-fittings', name: 'Glass Fittings', description: 'Premium frameless glass connectors, patch fittings, and shower hinges' }
] as const;

export const PRODUCTS: Product[] = [
  // --- Auto Hinges ---
  {
    id: 'prod-01',
    name: 'Glitton 3D Soft-Close Hydraulic Hinge',
    category: 'auto-hinges',
    categoryName: 'Auto Hinges',
    itemCode: 'GL-H101A',
    material: 'Cold Rolled Steel (Nickel-plated)',
    finish: 'Premium Nickel Satin',
    size: '110° Clip-on Full Overlay',
    features: ['3D multi-directional adjustment', 'Silent automatic hydraulic closing', 'Quick clip-on mounting'],
    image: 'https://picsum.photos/seed/hinge1/600/450',
    description: 'Our flagship 3D adjustable hydraulic hinge facilitates super smooth silent closing. Equipped with premium copper dampening cylinders to ensure lifetime leak-proof operation.',
    brand: 'GLITTON'
  },
  {
    id: 'prod-02',
    name: 'Flamenco Architectural Heavy-Duty Pivot Hinge',
    category: 'auto-hinges',
    categoryName: 'Auto Hinges',
    itemCode: 'FL-H202P',
    material: 'Grade 304 Stainless Steel',
    finish: 'Satin Brushed Steel',
    size: '120mm Heavy Duty Load',
    features: ['Corrosion resistant marine-grade', 'Smooth internal precision bearings', 'Supports door loads up to 80kg'],
    image: 'https://picsum.photos/seed/hinge2/600/450',
    description: 'Designed for residential and industrial architectural doors. The Flamenco Heavy Duty Pivot is crafted from solid grade 304 steel to stand up to high humidity and intense cycles.',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-03',
    name: 'Glitton Standard 90° Soft-Close Corner Hinge',
    category: 'auto-hinges',
    categoryName: 'Auto Hinges',
    itemCode: 'GL-H105C',
    material: 'Reinforced Carbon Steel',
    finish: 'Electroplated Double Nickel',
    size: '95° Inset Cup Size 35mm',
    features: ['Optimized for thick cabinet frames', 'Sturdy dual-spring return hinge', 'High cycle reliability'],
    image: 'https://picsum.photos/seed/hinge3/600/450',
    description: 'A superb choice for space-saving custom designs, crafted with a reinforced pivot knuckle and direct slide-on installation for seamless wooden cabinet matching.',
    brand: 'GLITTON'
  },

  // --- Telescopic Channels ---
  {
    id: 'prod-04',
    name: 'Glitton Soft-Close Premium Telescopic Slide',
    category: 'telescopic-channels',
    categoryName: 'Telescopic Channels',
    itemCode: 'GL-C201S',
    material: 'Cold Rolled Steel',
    finish: 'Electrophoretic Solid Black',
    size: '45mm Width, 18\" (450mm) Length',
    features: ['Triple ball-bearing race', 'Integrated pneumatic cylinder dampener', 'Holds stable up to 45kg load'],
    image: 'https://picsum.photos/seed/drawer1/600/450',
    description: 'Experience whisper-quiet kitchen drawers. Our premium telescopic channel uses hardened steel bearings along three full arrays, matching quick self-closing springs.',
    brand: 'GLITTON'
  },
  {
    id: 'prod-05',
    name: 'Flamenco Push-to-Open Heavy Runner',
    category: 'telescopic-channels',
    categoryName: 'Telescopic Channels',
    itemCode: 'FL-C302T',
    material: 'Hardened Zinc Plate Steel',
    finish: 'Brilliant Zinc Passivated',
    size: '45mm Width, 20\" (500mm) Length',
    features: ['Click and pop-out touch trigger', 'Full extension 3-fold travel', 'Quiet slide dampener bumper'],
    image: 'https://picsum.photos/seed/drawer2/600/450',
    description: 'Perfect for hands-free minimalist cabinet designs. Simply apply slight pressure on the drawer face and the high-grade mechanical rebound spring pushes it out for easy access.',
    brand: 'FLAMENCO'
  },

  // --- Sofa Legs ---
  {
    id: 'prod-06',
    name: 'Flamenco Architectural Cylinder Sofa Leg',
    category: 'sofa-legs',
    categoryName: 'Sofa Legs',
    itemCode: 'FL-L502C',
    material: 'Extra Thick Heavy Zinc-Tube',
    finish: 'High-Gloss Mirror Chrome',
    size: 'Height: 150mm (Adjustable +15mm)',
    features: ['Adjustable non-slip polymer base', 'Sleek cylindrical geometry', 'Load capacity 200kg per leg'],
    image: 'https://picsum.photos/seed/sofaleg1/600/450',
    description: 'Elevate modern lounge sofas or executive office seating with gorgeous architectural mirror chrome legs. They feature fine adjustable heights to correct uneven slate floors.',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-07',
    name: 'Glitton Minimalist Tapered Block Sofa Leg',
    category: 'sofa-legs',
    categoryName: 'Sofa Legs',
    itemCode: 'GL-L508G',
    material: 'Solid Casting Zinc Alloy',
    finish: 'Brushed Golden Brass',
    size: 'Height: 120mm, Top Plate 60x60mm',
    features: ['Warm high-end golden luster', 'Scuff-resistant clear lacquer coat', 'Sturdy pre-drilled flange mount'],
    image: 'https://picsum.photos/seed/sofaleg2/600/450',
    description: 'A luxurious solid brass-styled leg that brings mid-century modern styling to your custom furniture range. It provides absolute stability while fitting seamlessly with wood veneers.',
    brand: 'GLITTON'
  },

  // --- Cabinet Handles ---
  {
    id: 'prod-08',
    name: 'Glitton Architectural Solid T-Bar Handle',
    category: 'cabinet-handles',
    categoryName: 'Cabinet Handles',
    itemCode: 'GL-HNL12',
    material: 'Solid Zinc Alloy Extrusion',
    finish: 'Brushed Velvet Brass',
    size: 'Length: 224mm (C-C Hole Pitch: 160mm)',
    features: ['Subtle cross-ribbed grip detailing', 'Exposed solid structural endcaps', 'No fingerprint smudge finish'],
    image: 'https://picsum.photos/seed/handle1/600/450',
    description: 'Add a tactile signature to wardrobes and vanity drawers. Highly elegant, the solid brass look of the Glitton T-bar series sits beautifully on painted or grain cabinet faces.',
    brand: 'GLITTON'
  },
  {
    id: 'prod-09',
    name: 'Flamenco Concealed Profile Edge Pull',
    category: 'cabinet-handles',
    categoryName: 'Cabinet Handles',
    itemCode: 'FL-HNL35',
    material: '6063-T5 Aircraft Aluminum',
    finish: 'Electroscopic Matte Charcoal Black',
    size: 'Length: 150mm, Back-mount Bracket',
    features: ['Ultra slim 1.2mm protrusion', 'Secures on wood thickness 18-20mm', 'Screws included for easy back attachment'],
    image: 'https://picsum.photos/seed/handle2/600/450',
    description: 'An architectural hidden edge pull that mounts directly to the back of kitchen drawers. Crafted from rigid lightweight anodized aluminum to maintain slick flat surfaces without handle noise.',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-10',
    name: 'Glitton Modern Zinc D-Grip Handle',
    category: 'cabinet-handles',
    categoryName: 'Cabinet Handles',
    itemCode: 'GL-HNL08',
    material: 'Die-Cast Premium Zinc Alloy',
    finish: 'Pearl Satin Chrome',
    size: 'Length: 136mm (C-C Hole Pitch: 96mm)',
    features: ['Ergonomic finger comfort arc', 'Extra-thick mounting bosses', 'Classic universal alignment'],
    image: 'https://picsum.photos/seed/handle3/600/450',
    description: 'A classic workhorse handle crafted for offices and premium kitchens. Sturdy build that feels extremely substantial and reliable with every pull.',
    brand: 'GLITTON'
  },

  // --- Door Hardware ---
  {
    id: 'prod-11',
    name: 'Glitton Premium Brass Mortise Handle Lockset',
    category: 'door-hardware',
    categoryName: 'Door Hardware',
    itemCode: 'GL-DR801',
    material: 'Forged Virgin Brass / Heavy Duty Zinc',
    finish: 'Brushed Satin Gold with Titanium Coat',
    size: 'Escutcheon: 240x50mm, 85mm Center-to-Center',
    features: ['Ultra secure 3-bolt brass dead lock', 'High precision computerized dimple keys', 'Frictionless handle spring back'],
    image: 'https://picsum.photos/seed/doorlock/600/450',
    description: 'A statement lockset for entrance doors. The heavy gold-toned finish is protected with anti-oxidation physical vapor deposition (PVD) to resist scratching and chemical weathering.',
    brand: 'GLITTON'
  },
  {
    id: 'prod-12',
    name: 'Flamenco Overhead Hydraulic Door Closer',
    category: 'door-hardware',
    categoryName: 'Door Hardware',
    itemCode: 'FL-DR905',
    material: 'High-Strength Cast Aluminum Body',
    finish: 'Starlight Silver Metallic Powder Paint',
    size: 'Rack & Pinion Size 2-4 Adjustable',
    features: ['Dual speed adjustment valves (latch & close)', 'Built-in temperature expansion valves', 'Supports fire doors up to 85kg'],
    image: 'https://picsum.photos/seed/doorcloser/600/450',
    description: 'Designed for commercial egress and heavily utilized retail doors. Features smooth oil-filled mechanical closing that auto-adapts to seasonal draft changes dynamically.',
    brand: 'FLAMENCO'
  },

  // --- Glass Fittings ---
  {
    id: 'prod-13',
    name: 'Flamenco Glass-to-Glass 90° Shower Hinge',
    category: 'glass-fittings',
    categoryName: 'Glass Fittings',
    itemCode: 'FL-G401S',
    material: 'Solid Forged Brass Core',
    finish: 'Thick Polished Mirror Chrome',
    size: 'Suitable for 8mm - 12mm Frameless Glass',
    features: ['Self-closing mechanism from 25 degrees', 'Neoprene interior cushions to protect glass', 'Heavy capacity pivot holds 45kg/pair'],
    image: 'https://picsum.photos/seed/glasshinge/600/450',
    description: 'A beautiful mirror-polished mechanical glass hinge for premier shower cabins. It maintains absolute structural pressure on heavy-tempered glass walls without slips.',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-14',
    name: 'Glitton Stainless Steel Glass Corner Patch',
    category: 'glass-fittings',
    categoryName: 'Glass Fittings',
    itemCode: 'GL-G442P',
    material: 'Grade 316 Stainless Steel Cover Plate',
    finish: 'Brushed Hairline Stainless',
    size: 'Standard European Pivot Cutout Compatibility',
    features: ['Interior cast-iron structure core', 'Anti-aging non-slip high pressure inserts', 'Sleek geometric outer profile cover'],
    image: 'https://picsum.photos/seed/glasspatch/600/450',
    description: 'Perfect for frameless glass office doors and showcase entries. This patch fitting links seamlessly to overhead pivots or floor springs for reliable long-term service.',
    brand: 'GLITTON'
  }
];

export const BRANDS = {
  GLITTON: {
    name: 'GLITTON',
    tagline: 'Premium furniture fittings and hardware solutions.',
    description: 'Glitton represent precision engineering, durability, and practical design. We specialize in dynamic functional components like 3D hydraulic hinges, ball-bearing drawer sliders, and commercial locksets to power smooth, high-capacity home and trade environments.'
  },
  FLAMENCO: {
    name: 'FLAMENCO',
    tagline: 'Architectural and furniture hardware collection.',
    description: 'Flamenco focuses on architectural elegance, premium finishes, and clean geometric statements. From anodized edge pulls to gorgeous brass mortise sets, the Flamenco range is selected by interior designers and architects who prioritize styling signature touches.'
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
  catalogDownloadUrl: '#/catalog' // Redirect to download inside page, or mock pdf action
};
