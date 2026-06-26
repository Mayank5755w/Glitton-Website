/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product } from './types';

export const PRODUCT_CATEGORIES = [
  { id: 'auto-hinges', name: 'Auto Hinges', description: 'Premium hydraulic soft-close cabinet hinges', image: '/images/auto-hinge/auto-hinge.png' },
  { id: 'telescopic-channels', name: 'Telescopic Channels', description: 'Smooth sliding heavy-duty drawer channels', image: '/images/telescopic-channel/1.jpeg' },
  { id: 'sofa-legs', name: 'Sofa Legs', description: 'Premium sofa and furniture support legs', image: '/images/sofa-leg/sl17.png' },

  { id: 'aldrops', name: 'Aldrops', description: 'Premium door aldrops', image: '/images/aldrop/aldrop4.png' },
  { id: 'cabinet-handles', name: 'Cabinet Handles', description: 'Designer cabinet and wardrobe handles', image: '/images/cabinet-handle/ch1.png' },

  { id: 'mirror-brackets', name: 'Glass Fitting', description: 'Mirror support brackets', image: '/images/mirror-bracket/mb5.png' },


  // 👉 ADD NEW CATEGORIES HERE

] as const;


export const PRODUCTS: Product[] = [

  /* ===========================
     AUTO HINGES (GLITTON) — Page 1
  =========================== */
  {
    id: 'prod-001',
    name: 'Glitton Hydraulic Auto Hinge 2D SS',
    category: 'auto-hinges',
    categoryName: 'Auto Hinges',
    specification: '2D / Stainless Steel / 0°-8°-15°',
    material: '', finish: '', size: '', features: [],
    image: '/images/auto-hinge/1.png',
    description: '',
    brand: 'GLITTON'
  },
  {
    id: 'prod-002',
    name: 'Glitton Hydraulic Auto Hinge 3D Titanium',
    category: 'auto-hinges',
    categoryName: 'Auto Hinges',
    specification: '3D / Titanium Finish / 0°-8°-15°',
    material: '', finish: '', size: '', features: [],
    image: '/images/auto-hinge/2.png',
    description: '',
    brand: 'GLITTON'
  },

  /* ===========================
     TELESCOPIC CHANNELS — Page 1
  =========================== */
  {
    id: 'prod-007',
    name: 'Glitton Telescopic Channel SS',
    category: 'telescopic-channels',
    categoryName: 'Telescopic Channels',
    specification: '10" / SS',
    material: '', finish: '', size: '', features: [],
    image: '/images/telescopic-channel/1.jpeg',
    description: '',
    brand: 'GLITTON'
  },
  
  {
    id: 'prod-013',
    name: 'Glitton Telescopic Channel Black',
    category: 'telescopic-channels',
    categoryName: 'Telescopic Channels',
    specification: '10" / Black',
    material: '', finish: '', size: '', features: [],
    image: '/images/telescopic-channel/2.jpeg',
    description: '',
    brand: 'GLITTON'
  },

  /* ===========================
     SOFA LEGS (FLAMENCO) — Pages 2–3
  =========================== */
  {
    id: 'prod-019',
    name: 'Flamenco Sofa Leg 3 Piece Cone',
    category: 'sofa-legs',
    categoryName: 'Sofa Legs',
    specification: '3" 4" 6" / Black',
    material: '', finish: '', size: '', features: [],
    image: '/images/sofa-leg/sl1.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-020',
    name: 'Flamenco Sofa Leg 3 Piece Cone',
    category: 'sofa-legs',
    categoryName: 'Sofa Legs',
    specification: '3" 4" 6" / Rose Gold',
    material: '', finish: '', size: '', features: [],
    image: '/images/sofa-leg/sl2.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-021',
    name: 'Flamenco Sofa Leg 3 Piece Cone',
    category: 'sofa-legs',
    categoryName: 'Sofa Legs',
    specification: '3" 4" 6" / Gold',
    material: '', finish: '', size: '', features: [],
    image: '/images/sofa-leg/sl3.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-022',
    name: 'Flamenco Sofa Leg T Shape',
    category: 'sofa-legs',
    categoryName: 'Sofa Legs',
    specification: '3" 4" / Black',
    material: '', finish: '', size: '', features: [],
    image: '/images/sofa-leg/sl4.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-023',
    name: 'Flamenco Sofa Leg T Shape',
    category: 'sofa-legs',
    categoryName: 'Sofa Legs',
    specification: '3" 4" / Rose Gold',
    material: '', finish: '', size: '', features: [],
    image: '/images/sofa-leg/sl5.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-024',
    name: 'Flamenco Sofa Leg T Shape',
    category: 'sofa-legs',
    categoryName: 'Sofa Legs',
    specification: '3" 4" / Gold',
    material: '', finish: '', size: '', features: [],
    image: '/images/sofa-leg/sl6.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-025',
    name: 'Flamenco Sofa Leg Pistol',
    category: 'sofa-legs',
    categoryName: 'Sofa Legs',
    specification: '5" / Black',
    material: '', finish: '', size: '', features: [],
    image: '/images/sofa-leg/sl7.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-026',
    name: 'Flamenco Sofa Leg Pistol',
    category: 'sofa-legs',
    categoryName: 'Sofa Legs',
    specification: '5" / Rose Gold',
    material: '', finish: '', size: '', features: [],
    image: '/images/sofa-leg/sl8.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-027',
    name: 'Flamenco Sofa Leg Pistol',
    category: 'sofa-legs',
    categoryName: 'Sofa Legs',
    specification: '5" / Gold',
    material: '', finish: '', size: '', features: [],
    image: '/images/sofa-leg/sl9.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-028',
    name: 'Flamenco Sofa Leg Triangle',
    category: 'sofa-legs',
    categoryName: 'Sofa Legs',
    specification: '4" / Black',
    material: '', finish: '', size: '', features: [],
    image: '/images/sofa-leg/sl10.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-029',
    name: 'Flamenco Sofa Leg Triangle',
    category: 'sofa-legs',
    categoryName: 'Sofa Legs',
    specification: '4" / Rose Gold',
    material: '', finish: '', size: '', features: [],
    image: '/images/sofa-leg/sl11.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-030',
    name: 'Flamenco Sofa Leg Triangle',
    category: 'sofa-legs',
    categoryName: 'Sofa Legs',
    specification: '4" / Gold',
    material: '', finish: '', size: '', features: [],
    image: '/images/sofa-leg/sl12.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-031',
    name: 'Flamenco Sofa Leg Lining',
    category: 'sofa-legs',
    categoryName: 'Sofa Legs',
    specification: '3" 4" 6" / 65mm Thick',
    material: '', finish: '', size: '', features: [],
    image: '/images/sofa-leg/sl13.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-032',
    name: 'Flamenco Sofa Leg Lining',
    category: 'sofa-legs',
    categoryName: 'Sofa Legs',
    specification: '3" 4" 6" / Silver',
    material: '', finish: '', size: '', features: [],
    image: '/images/sofa-leg/sl14.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-033',
    name: 'Flamenco Sofa Leg Drum',
    category: 'sofa-legs',
    categoryName: 'Sofa Legs',
    specification: '3" 4" 6" / 50mm / Silver',
    material: '', finish: '', size: '', features: [],
    image: '/images/sofa-leg/sl15.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-034',
    name: 'Flamenco Sofa Leg Taper',
    category: 'sofa-legs',
    categoryName: 'Sofa Legs',
    specification: '4" 6" 8" / Black',
    material: '', finish: '', size: '', features: [],
    image: '/images/sofa-leg/sl16.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-035',
    name: 'Flamenco Sofa Leg Taper',
    category: 'sofa-legs',
    categoryName: 'Sofa Legs',
    specification: '4" 6" 8" / Rose Gold',
    material: '', finish: '', size: '', features: [],
    image: '/images/sofa-leg/sl17.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-036',
    name: 'Flamenco Sofa Leg World Cup CP',
    category: 'sofa-legs',
    categoryName: 'Sofa Legs',
    specification: '3" 4" / Silver',
    material: '', finish: '', size: '', features: [],
    image: '/images/sofa-leg/sl18.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-037',
    name: 'Flamenco Sofa Leg Cubic',
    category: 'sofa-legs',
    categoryName: 'Sofa Legs',
    specification: '3" 4" / Rose Gold',
    material: '', finish: '', size: '', features: [],
    image: '/images/sofa-leg/sl19.png',
    description: '',
    brand: 'FLAMENCO'
  },

  /* ===========================
     SAFOT — Page 3
  =========================== */
  {
    id: 'prod-038',
    name: 'Flamenco Safot',
    category: 'safot',
    categoryName: 'Safot',
    specification: '3×16 / SS',
    material: '', finish: '', size: '', features: [],
    image: '/images/safot/safot1.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-039',
    name: 'Flamenco Safot Aluminium Heavy',
    category: 'safot',
    categoryName: 'Safot',
    specification: 'Aluminium Heavy',
    material: '', finish: '', size: '', features: [],
    image: '/images/safot/safot2.png',
    description: '',
    brand: 'FLAMENCO'
  },

  /* ===========================
     BUTT HINGES (FLAMENCO) — Page 4
  =========================== */
  {
    id: 'prod-040',
    name: 'Flamenco Butt Hinge SS Welded',
    category: 'butt-hinges',
    categoryName: 'Butt Hinges',
    specification: '3×16 / 4×12 / 4×14 / 5×12 / 5×14 / 6×10 / 6×12 SS Welded',
    material: '', finish: '', size: '', features: [],
    image: '/images/butt-hinges/bh1.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-041',
    name: 'Flamenco Butt Hinge SS Welded (Square)',
    category: 'butt-hinges',
    categoryName: 'Butt Hinges',
    specification: '3×3 / 4×3/4 SS Welded / 3×27×10 SS Welded',
    material: '', finish: '', size: '', features: [],
    image: '/images/butt-hinges/bh2.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-042',
    name: 'Flamenco Butt Hinge L (Large)',
    category: 'butt-hinges',
    categoryName: 'Butt Hinges',
    specification: '75×10×12 / 75×10×19 / 75×10×6 Welded',
    material: '', finish: '', size: '', features: [],
    image: '/images/butt-hinges/bh3.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-043',
    name: 'Flamenco Butt Lock',
    category: 'butt-hinges',
    categoryName: 'Butt Hinges',
    specification: '6mm / 12mm / 19mm',
    material: '', finish: '', size: '', features: [],
    image: '/images/butt-hinges/bh4.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-044',
    name: 'Flamenco Butt Parliament',
    category: 'butt-hinges',
    categoryName: 'Butt Hinges',
    specification: '4×4 Welded',
    material: '', finish: '', size: '', features: [],
    image: '/images/butt-hinges/bh5.png',
    description: '',
    brand: 'FLAMENCO'
  },

  /* ===========================
     ALDROPS (FLAMENCO) — Page 4
  =========================== */
  {
    id: 'prod-045',
    name: 'Flamenco Aldrop Kit',
    category: 'aldrops',
    categoryName: 'Aldrops',
    specification: '10"×12mm×14mm',
    material: '', finish: '', size: '', features: [],
    image: '/images/aldrop/aldrop1.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-046',
    name: 'Flamenco Aldrop 3D Two Tone 044 SS',
    category: 'aldrops',
    categoryName: 'Aldrops',
    specification: '3D / Two Tone / 044 SS',
    material: '', finish: '', size: '', features: [],
    image: '/images/aldrop/aldrop2.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-047',
    name: 'Flamenco Aldrop Two Tone 042 SS',
    category: 'aldrops',
    categoryName: 'Aldrops',
    specification: '10" / Two Tone / 042 SS',
    material: '', finish: '', size: '', features: [],
    image: '/images/aldrop/aldrop3.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-048',
    name: 'Flamenco Aldrop Pyramid Lez 043 SS',
    category: 'aldrops',
    categoryName: 'Aldrops',
    specification: '10" / Pyramid / Lez 043 SS',
    material: '', finish: '', size: '', features: [],
    image: '/images/aldrop/aldrop4.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-049',
    name: 'Flamenco Aldrop Lehar 045 SS',
    category: 'aldrops',
    categoryName: 'Aldrops',
    specification: '10" / Lehar / 14mm / 045 SS',
    material: '', finish: '', size: '', features: [],
    image: '/images/aldrop/aldrop5.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-050',
    name: 'Flamenco Aldrop 120/20 046 SS',
    category: 'aldrops',
    categoryName: 'Aldrops',
    specification: '10" / 120/20 / 14mm / 046 SS',
    material: '', finish: '', size: '', features: [],
    image: '/images/aldrop/aldrop6.png',
    description: '',
    brand: 'FLAMENCO'
  },

  /* ===========================
     CABINET HANDLES (FLAMENCO) — Page 5
  =========================== */
  {
    id: 'prod-051',
    name: 'Flamenco Cabinet Handle S Type',
    category: 'cabinet-handles',
    categoryName: 'Cabinet Handles',
    specification: '4" 5" 6" / SS',
    material: '', finish: '', size: '', features: [],
    image: '/images/cabinet-handle/ch1.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-052',
    name: 'Flamenco Cabinet Handle V Head',
    category: 'cabinet-handles',
    categoryName: 'Cabinet Handles',
    specification: '3" 4" 5" / SS',
    material: '', finish: '', size: '', features: [],
    image: '/images/cabinet-handle/ch2.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-053',
    name: 'Flamenco Cabinet Handle Arch',
    category: 'cabinet-handles',
    categoryName: 'Cabinet Handles',
    specification: '4" 5" 6" / SS',
    material: '', finish: '', size: '', features: [],
    image: '/images/cabinet-handle/ch3.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-054',
    name: 'Flamenco Cabinet Handle C Head',
    category: 'cabinet-handles',
    categoryName: 'Cabinet Handles',
    specification: '4" 5" 6" / SS',
    material: '', finish: '', size: '', features: [],
    image: '/images/cabinet-handle/ch4.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-055',
    name: 'Flamenco Cabinet Handle Square Head',
    category: 'cabinet-handles',
    categoryName: 'Cabinet Handles',
    specification: '4" 5" 6" / SS',
    material: '', finish: '', size: '', features: [],
    image: '/images/cabinet-handle/ch5.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-056',
    name: 'Flamenco Cabinet Handle Heavy Arch',
    category: 'cabinet-handles',
    categoryName: 'Cabinet Handles',
    specification: '4" 5" 6" / SS',
    material: '', finish: '', size: '', features: [],
    image: '/images/cabinet-handle/ch6.png',
    description: '',
    brand: 'FLAMENCO'
  },

  /* ===========================
     PIPE CONCEALED (FLAMENCO) — Page 5
  =========================== */
  {
    id: 'prod-057',
    name: 'Flamenco Pipe Concealed Heavy 502 SS',
    category: 'pipe-concealed',
    categoryName: 'Pipe Concealed',
    specification: '1" / Heavy 502 SS',
    material: '', finish: '', size: '', features: [],
    image: '/images/pipe-concealed/pc1.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-058',
    name: 'Flamenco Pipe Concealed Medium 501 SS',
    category: 'pipe-concealed',
    categoryName: 'Pipe Concealed',
    specification: '1" / Medium 501 SS',
    material: '', finish: '', size: '', features: [],
    image: '/images/pipe-concealed/pc2.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-059',
    name: 'Flamenco Pipe Concealed Light 500 SS',
    category: 'pipe-concealed',
    categoryName: 'Pipe Concealed',
    specification: '1" / Light 500 SS',
    material: '', finish: '', size: '', features: [],
    image: '/images/pipe-concealed/pc3.png',
    description: '',
    brand: 'FLAMENCO'
  },

  /* ===========================
     CURTAIN KNOBS (FLAMENCO) — Page 5
  =========================== */
  {
    id: 'prod-060',
    name: 'Flamenco Curtain Knob Diamond 517',
    category: 'curtain-knobs',
    categoryName: 'Curtain Knobs',
    specification: 'Diamond 517 / Big & Small',
    material: '', finish: '', size: '', features: [],
    image: '/images/curtain-knob/ck1.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-061',
    name: 'Flamenco Curtain Knob Gola 516',
    category: 'curtain-knobs',
    categoryName: 'Curtain Knobs',
    specification: 'Gola 516 / Big & Small',
    material: '', finish: '', size: '', features: [],
    image: '/images/curtain-knob/ck2.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-062',
    name: 'Flamenco Curtain Knob Egg 515',
    category: 'curtain-knobs',
    categoryName: 'Curtain Knobs',
    specification: 'Egg 515 / Big & Small',
    material: '', finish: '', size: '', features: [],
    image: '/images/curtain-knob/ck3.png',
    description: '',
    brand: 'FLAMENCO'
  },

  /* ===========================
     DOOR CLOSERS (FLAMENCO) — Page 6
  =========================== */
  {
    id: 'prod-063',
    name: 'Flamenco Door Closer Conceal 90kg Silver 311',
    category: 'door-closers',
    categoryName: 'Door Closers',
    specification: 'Conceal / 90kg / Silver 311',
    material: '', finish: '', size: '', features: [],
    image: '/images/door-closer/dc1.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-064',
    name: 'Flamenco Door Closer Pelmet 120kg Rose Gold PVD',
    category: 'door-closers',
    categoryName: 'Door Closers',
    specification: 'Pelmet / 120kg / PVD Rose Gold',
    material: '', finish: '', size: '', features: [],
    image: '/images/door-closer/dc2.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-065',
    name: 'Flamenco Door Closer Pelmet 120kg PVD Black',
    category: 'door-closers',
    categoryName: 'Door Closers',
    specification: 'Pelmet / 120kg / PVD Black',
    material: '', finish: '', size: '', features: [],
    image: '/images/door-closer/dc3.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-066',
    name: 'Flamenco Door Closer 90deg 90kg Black',
    category: 'door-closers',
    categoryName: 'Door Closers',
    specification: '90° / 90kg / Black',
    material: '', finish: '', size: '', features: [],
    image: '/images/door-closer/dc4.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-067',
    name: 'Flamenco Door Closer Premium Pelmet Silver 110kg',
    category: 'door-closers',
    categoryName: 'Door Closers',
    specification: 'Premium Pelmet / 110kg / Silver',
    material: '', finish: '', size: '', features: [],
    image: '/images/door-closer/dc5.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-068',
    name: 'Flamenco Door Closer Premium Pelmet Black 110kg',
    category: 'door-closers',
    categoryName: 'Door Closers',
    specification: 'Premium Pelmet / 110kg / Black',
    material: '', finish: '', size: '', features: [],
    image: '/images/door-closer/dc6.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-069',
    name: 'Flamenco Door Closer 90deg 90kg Silver',
    category: 'door-closers',
    categoryName: 'Door Closers',
    specification: '90° / 90kg / Silver',
    material: '', finish: '', size: '', features: [],
    image: '/images/door-closer/dc7.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-070',
    name: 'Flamenco Door Closer 70kg Silver',
    category: 'door-closers',
    categoryName: 'Door Closers',
    specification: '70kg / Silver',
    material: '', finish: '', size: '', features: [],
    image: '/images/door-closer/dc8.png',
    description: '',
    brand: 'FLAMENCO'
  },

  /* ===========================
     CONCEALED HANDLES (FLAMENCO) — Page 6
  =========================== */
  {
    id: 'prod-071',
    name: 'Flamenco Concealed Handle Rose Gold',
    category: 'concealed-handles',
    categoryName: 'Concealed Handles',
    specification: '160mm / 224mm / Rose Gold',
    material: '', finish: '', size: '', features: [],
    image: '/images/concealed-handle/ch1.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-072',
    name: 'Flamenco Concealed Handle Antique',
    category: 'concealed-handles',
    categoryName: 'Concealed Handles',
    specification: '224mm / Antique',
    material: '', finish: '', size: '', features: [],
    image: '/images/concealed-handle/ch2.png',
    description: '',
    brand: 'FLAMENCO'
  },

  /* ===========================
     JALI (FLAMENCO) — Page 7
  =========================== */
  {
    id: 'prod-073',
    name: 'Flamenco Jali SS',
    category: 'jali',
    categoryName: 'Jali',
    specification: '4×6 / 4×8 / 4×10 / SS',
    material: '', finish: '', size: '', features: [],
    image: '/images/jali/jali1.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-074',
    name: 'Flamenco Jali SS (Square)',
    category: 'jali',
    categoryName: 'Jali',
    specification: '6×6 / 6×8 / SS',
    material: '', finish: '', size: '', features: [],
    image: '/images/jali/jali2.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-075',
    name: 'Flamenco Jali Brown',
    category: 'jali',
    categoryName: 'Jali',
    specification: '4×6 / 4×8 / Brown',
    material: '', finish: '', size: '', features: [],
    image: '/images/jali/jali3.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-076',
    name: 'Flamenco Jali White',
    category: 'jali',
    categoryName: 'Jali',
    specification: '4×6 / 4×8 / White',
    material: '', finish: '', size: '', features: [],
    image: '/images/jali/jali4.png',
    description: '',
    brand: 'FLAMENCO'
  },

  /* ===========================
     MULTI LOCKS (FLAMENCO) — Page 7
  =========================== */
  {
    id: 'prod-077',
    name: 'Flamenco Multi Lock EZY',
    category: 'multi-locks',
    categoryName: 'Multi Locks',
    specification: 'EZY',
    material: '', finish: '', size: '', features: [],
    image: '/images/muli-lock/ml1.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-078',
    name: 'Flamenco Multi Lock Rock',
    category: 'multi-locks',
    categoryName: 'Multi Locks',
    specification: 'Rock',
    material: '', finish: '', size: '', features: [],
    image: '/images/muli-lock/ml2.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-079',
    name: 'Flamenco Multi Lock Dia MDM',
    category: 'multi-locks',
    categoryName: 'Multi Locks',
    specification: 'Dia MDM',
    material: '', finish: '', size: '', features: [],
    image: '/images/muli-lock/ml3.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-080',
    name: 'Flamenco Multi Lock Light Ultra',
    category: 'multi-locks',
    categoryName: 'Multi Locks',
    specification: 'Light Ultra',
    material: '', finish: '', size: '', features: [],
    image: '/images/muli-lock/ml4.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-081',
    name: 'Flamenco Multi Lock Wave',
    category: 'multi-locks',
    categoryName: 'Multi Locks',
    specification: 'Wave',
    material: '', finish: '', size: '', features: [],
    image: '/images/muli-lock/ml5.png',
    description: '',
    brand: 'FLAMENCO'
  },

  /* ===========================
     SS TOWER BOLTS (FLAMENCO) — Page 8
  =========================== */
  {
    id: 'prod-082',
    name: 'Flamenco SS Tower Bolt Matt Marble LTB',
    category: 'tower-bolts',
    categoryName: 'Tower Bolts',
    specification: '4" 6" 8" / Marble LTB',
    material: '', finish: '', size: '', features: [],
    image: '/images/ss-tower-bolt/ss1.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-083',
    name: 'Flamenco SS Tower Bolt Matt',
    category: 'tower-bolts',
    categoryName: 'Tower Bolts',
    specification: '4" 6" 8" / Matt',
    material: '', finish: '', size: '', features: [],
    image: '/images/ss-tower-bolt/ss2.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-084',
    name: 'Flamenco SS Tower Bolt Two Tone',
    category: 'tower-bolts',
    categoryName: 'Tower Bolts',
    specification: '4" 6" 8" / Two Tone',
    material: '', finish: '', size: '', features: [],
    image: '/images/ss-tower-bolt/ss3.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-085',
    name: 'Flamenco SS Tower Bolt Cram Polish',
    category: 'tower-bolts',
    categoryName: 'Tower Bolts',
    specification: '4" 6" 8" / Cram Polish',
    material: '', finish: '', size: '', features: [],
    image: '/images/ss-tower-bolt/ss4.png',
    description: '',
    brand: 'FLAMENCO'
  },

  /* ===========================
     ALUMINIUM TOWER BOLTS (FLAMENCO) — Page 8
  =========================== */
  {
    id: 'prod-086',
    name: 'Flamenco Aluminium Tower Bolt Antique',
    category: 'aluminium-tower-bolts',
    categoryName: 'Aluminium Tower Bolts',
    specification: '4" 6" 8" 12" / Antique',
    material: '', finish: '', size: '', features: [],
    image: '/images/aluminium-tower-bolt/atb1.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-087',
    name: 'Flamenco Aluminium Tower Bolt Rose Gold',
    category: 'aluminium-tower-bolts',
    categoryName: 'Aluminium Tower Bolts',
    specification: '4" 6" 8" 12" / Rose Gold',
    material: '', finish: '', size: '', features: [],
    image: '/images/aluminium-tower-bolt/atb2.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-088',
    name: 'Flamenco Aluminium Tower Bolt Rose Gold PVD',
    category: 'aluminium-tower-bolts',
    categoryName: 'Aluminium Tower Bolts',
    specification: '4" 5" 8" 12" / Rose Gold PVD',
    material: '', finish: '', size: '', features: [],
    image: '/images/aluminium-tower-bolt/atb3.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-089',
    name: 'Flamenco Aluminium Tower Bolt Zed Black',
    category: 'aluminium-tower-bolts',
    categoryName: 'Aluminium Tower Bolts',
    specification: '4" 6" 8" 12" / Zed Black',
    material: '', finish: '', size: '', features: [],
    image: '/images/aluminium-tower-bolt/atb4.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-090',
    name: 'Flamenco Aluminium Tower Bolt Silver',
    category: 'aluminium-tower-bolts',
    categoryName: 'Aluminium Tower Bolts',
    specification: '4" 6" 8" 12" / Silver',
    material: '', finish: '', size: '', features: [],
    image: '/images/aluminium-tower-bolt/atb5.png',
    description: '',
    brand: 'FLAMENCO'
  },
  

  /* ===========================
     ALUMINIUM LATCHES (FLAMENCO) — Page 9
  =========================== */
  {
    id: 'prod-091',
    name: 'Flamenco Aluminium Latch Baby Silver',
    category: 'aluminium-latches',
    categoryName: 'Aluminium Latches',
    specification: '4" / Baby Silver',
    material: '', finish: '', size: '', features: [],
    image: '/images/aluminium-latch/al1.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-092',
    name: 'Flamenco Aluminium Latch Baby Antique',
    category: 'aluminium-latches',
    categoryName: 'Aluminium Latches',
    specification: '4" / Baby Antique',
    material: '', finish: '', size: '', features: [],
    image: '/images/aluminium-latch/al2.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-092b',
    name: 'Aluminium Tower Bolt',
    category: 'aluminium-latches',
    categoryName: 'Aluminium Latches',
    specification: '4" / Antique,Rose Gold,Silver',
    material: '', finish: '', size: '', features: [],
    image: '/images/aluminium-latch/al3.png',
    description: '',
    brand: 'FLAMENCO'
  },

  /* ===========================
     MIRROR BRACKETS (FLAMENCO) — Page 9
  =========================== */
  {
    id: 'prod-093',
    name: 'Flamenco Mirror Cap SS',
    category: 'mirror-brackets',
    categoryName: 'Mirror Brackets',
    specification: '12mm / 20mm / 25mm / SS',
    material: '', finish: '', size: '', features: [],
    image: '/images/mirror-bracket/mb1.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-094',
    name: 'Flamenco Mirror Bracket SS Full',
    category: 'mirror-brackets',
    categoryName: 'Mirror Brackets',
    specification: 'SS / Full',
    material: '', finish: '', size: '', features: [],
    image: '/images/mirror-bracket/mb2.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-095',
    name: 'Flamenco Mirror Bracket Diamond Half',
    category: 'mirror-brackets',
    categoryName: 'Mirror Brackets',
    specification: 'Diamond / Half',
    material: '', finish: '', size: '', features: [],
    image: '/images/mirror-bracket/mb3.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-096',
    name: 'Flamenco Mirror Bracket SS Half',
    category: 'mirror-brackets',
    categoryName: 'Mirror Brackets',
    specification: 'SS / Half',
    material: '', finish: '', size: '', features: [],
    image: '/images/mirror-bracket/mb4.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-097',
    name: 'Flamenco Mirror Cap Diamond',
    category: 'mirror-brackets',
    categoryName: 'Mirror Brackets',
    specification: '20mm / 25mm / Diamond',
    material: '', finish: '', size: '', features: [],
    image: '/images/mirror-bracket/mb5.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-098',
    name: 'Flamenco Mirror Bracket Diamond SS Full',
    category: 'mirror-brackets',
    categoryName: 'Mirror Brackets',
    specification: 'Diamond SS / Full',
    material: '', finish: '', size: '', features: [],
    image: '/images/mirror-bracket/mb6.png',
    description: '',
    brand: 'FLAMENCO'
  },

  /* ===========================
     D BRACKETS (FLAMENCO) — Page 9
  =========================== */
  {
    id: 'prod-099',
    name: 'Flamenco D Bracket SS',
    category: 'd-brackets',
    categoryName: 'D Brackets',
    specification: '1.5"×12mm / 2"×12mm',
    material: '', finish: '', size: '', features: [],
    image: '/images/d-bracket/db1.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-100',
    name: 'Flamenco D Bracket SS',
    category: 'd-brackets',
    categoryName: 'D Brackets',
    specification: '1.5"×8mm / 2"×8mm',
    material: '', finish: '', size: '', features: [],
    image: '/images/d-bracket/db2.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-101',
    name: 'Flamenco D Bracket SS',
    category: 'd-brackets',
    categoryName: 'D Brackets',
    specification: '2"×10mm',
    material: '', finish: '', size: '', features: [],
    image: '/images/d-bracket/db3.png',
    description: '',
    brand: 'FLAMENCO'
  },

  /* ===========================
     F BRACKETS (FLAMENCO) — Page 10
  =========================== */
  {
    id: 'prod-102',
    name: 'Flamenco Glass F Bracket Adjustable SS',
    category: 'f-brackets',
    categoryName: 'F Brackets',
    specification: '4"–12" / 8mm–10mm / Adjustable SS',
    material: '', finish: '', size: '', features: [],
    image: '/images/f-bracket/fb1.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-103',
    name: 'Flamenco Glass F Bracket Fixed SS',
    category: 'f-brackets',
    categoryName: 'F Brackets',
    specification: '4"–12" / 8mm–12mm Glass / Fixed SS',
    material: '', finish: '', size: '', features: [],
    image: '/images/f-bracket/fb2.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-104',
    name: 'Flamenco Glass F Bracket SS (Small)',
    category: 'f-brackets',
    categoryName: 'F Brackets',
    specification: '1"–4" / 8mm–12mm Glass',
    material: '', finish: '', size: '', features: [],
    image: '/images/f-bracket/fb3.png',
    description: '',
    brand: 'FLAMENCO'
  },

  /* ===========================
     GLASS HARDWARE (FLAMENCO) — Page 10
  =========================== */
  {
    id: 'prod-105',
    name: 'Flamenco Hinge Play to Glass Corner',
    category: 'glass-hardware',
    categoryName: 'Glass Hardware',
    specification: 'Hinge Play / Glass Corner',
    material: '', finish: '', size: '', features: [],
    image: '/images/hinge-wall-to-glass/hw1.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-106',
    name: 'Flamenco Hinge Wall to Glass Center Hole',
    category: 'glass-hardware',
    categoryName: 'Glass Hardware',
    specification: 'Wall to Glass / Center Hole',
    material: '', finish: '', size: '', features: [],
    image: '/images/hinge-wall-to-glass/hw2.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-107',
    name: 'Flamenco Hinge Wall to Glass Mango Corner',
    category: 'glass-hardware',
    categoryName: 'Glass Hardware',
    specification: 'Wall to Glass / Mango Corner',
    material: '', finish: '', size: '', features: [],
    image: '/images/hinge-wall-to-glass/hw3.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-108',
    name: 'Flamenco Push Magnet Brass',
    category: 'glass-hardware',
    categoryName: 'Glass Hardware',
    specification: 'Push Magnet / Brass',
    material: '', finish: '', size: '', features: [],
    image: '/images/hinge-wall-to-glass/hw4.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-109',
    name: 'Flamenco Glass S/L Bracket SS',
    category: 'glass-hardware',
    categoryName: 'Glass Hardware',
    specification: '6" / 8" / 10" / 12" / SS',
    material: '', finish: '', size: '', features: [],
    image: '/images/hinge-wall-to-glass/hw5.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-110',
    name: 'Flamenco L Button Double/Single',
    category: 'glass-hardware',
    categoryName: 'Glass Hardware',
    specification: 'Double/Single / 2.5mm / 1.5mm',
    material: '', finish: '', size: '', features: [],
    image: '/images/hinge-wall-to-glass/hw6.png',
    description: '',
    brand: 'FLAMENCO'
  },

  /* ===========================
     SAFETY CORNER & STUD (FLAMENCO) — Page 10
  =========================== */
  {
    id: 'prod-111',
    name: 'Flamenco Safety Corner L',
    category: 'safety-corner-stud',
    categoryName: 'Safety Corner & Stud',
    specification: 'L Shape',
    material: '', finish: '', size: '', features: [],
    image: '/images/safety-corner/sc1.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-112',
    name: 'Flamenco Safety Corner Round',
    category: 'safety-corner-stud',
    categoryName: 'Safety Corner & Stud',
    specification: 'Round',
    material: '', finish: '', size: '', features: [],
    image: '/images/safety-corner/sc2.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-113',
    name: 'Flamenco SS Solid Stud',
    category: 'safety-corner-stud',
    categoryName: 'Safety Corner & Stud',
    specification: '19×19 / 19×25 / 25×25 / 25×35 / 25×50 / 25×75 / 25×100 / 25×150 / 25×200 / 25×250 / 25×300',
    material: '', finish: '', size: '', features: [],
    image: '/images/safety-corner/sc3.png',
    description: '',
    brand: 'FLAMENCO'
  },

  /* ===========================
     MAIN DOOR HANDLES (FLAMENCO) — Page 11
  =========================== */
  {
    id: 'prod-114',
    name: 'Flamenco Main Door Handle Rose Gold & Silver',
    category: 'main-door-handles',
    categoryName: 'Main Door Handles',
    specification: '200mm / 300mm / 400mm / Rose Gold & Silver',
    material: '', finish: '', size: '', features: [],
    image: '/images/main-door-handle/md1.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-115',
    name: 'Flamenco Main Door Handle Black & Grey',
    category: 'main-door-handles',
    categoryName: 'Main Door Handles',
    specification: '200mm / 300mm / 400mm / Black & Grey',
    material: '', finish: '', size: '', features: [],
    image: '/images/main-door-handle/md2.png',
    description: '',
    brand: 'FLAMENCO'
  },

  /* ===========================
     FOLDING TOWEL RACKS (FLAMENCO) — Page 11
  =========================== */
  {
    id: 'prod-116',
    name: 'Flamenco Folding Towel Rack Black',
    category: 'towel-racks',
    categoryName: 'Folding Towel Racks',
    specification: 'Folding / Black',
    material: '', finish: '', size: '', features: [],
    image: '/images/folding-towwl-rack/ftr1.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-117',
    name: 'Flamenco Folding Towel Rack Silver',
    category: 'towel-racks',
    categoryName: 'Folding Towel Racks',
    specification: 'Folding / Silver',
    material: '', finish: '', size: '', features: [],
    image: '/images/folding-towwl-rack/ftr2.png',
    description: '',
    brand: 'FLAMENCO'
  },

  /* ===========================
     DOOR FITTINGS (FLAMENCO) — Page 11
  =========================== */
  {
    id: 'prod-118',
    name: 'Flamenco Crem Bolt',
    category: 'door-fittings',
    categoryName: 'Door Fittings',
    specification: 'Crem Bolt',
    material: '', finish: '', size: '', features: [],
    image: '/images/door-fitting/df1.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-119',
    name: 'Flamenco Buffer',
    category: 'door-fittings',
    categoryName: 'Door Fittings',
    specification: 'Size 6 / 10',
    material: '', finish: '', size: '', features: [],
    image: '/images/door-fitting/df2.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-120',
    name: 'Flamenco Door Silencer',
    category: 'door-fittings',
    categoryName: 'Door Fittings',
    specification: '1" / 1.5" / 2" / 2.5" / 3"',
    material: '', finish: '', size: '', features: [],
    image: '/images/door-fitting/df3.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-121',
    name: 'Flamenco Door Magnet',
    category: 'door-fittings',
    categoryName: 'Door Fittings',
    specification: '1" / 2" / 3"',
    material: '', finish: '', size: '', features: [],
    image: '/images/door-fitting/df4.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-122',
    name: 'Flamenco Door Magnet Folder No. 5',
    category: 'door-fittings',
    categoryName: 'Door Fittings',
    specification: 'Folder Number 5',
    material: '', finish: '', size: '', features: [],
    image: '/images/door-fitting/df5.png',
    description: '',
    brand: 'FLAMENCO'
  },

  /* ===========================
     SCREWS & NAILS (FLAMENCO) — Page 12
  =========================== */
  {
    id: 'prod-123',
    name: 'Flamenco Screw',
    category: 'screws-nails',
    categoryName: 'Screws & Nails',
    specification: '10×75 (+) 3"',
    material: '', finish: '', size: '', features: [],
    image: '/images/screws/s1.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-124',
    name: 'Flamenco Screw',
    category: 'screws-nails',
    categoryName: 'Screws & Nails',
    specification: '10×60 (+) 2.5"',
    material: '', finish: '', size: '', features: [],
    image: '/images/screws/s2.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-125',
    name: 'Flamenco Screw',
    category: 'screws-nails',
    categoryName: 'Screws & Nails',
    specification: '10×50 (+) 2"',
    material: '', finish: '', size: '', features: [],
    image: '/images/screws/s3.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-126',
    name: 'Flamenco Screw',
    category: 'screws-nails',
    categoryName: 'Screws & Nails',
    specification: '8×38 (+) 1.5"',
    material: '', finish: '', size: '', features: [],
    image: '/images/screws/s4.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-127',
    name: 'Flamenco Screw',
    category: 'screws-nails',
    categoryName: 'Screws & Nails',
    specification: '7×30 (+) 1/4"',
    material: '', finish: '', size: '', features: [],
    image: '/images/screws/s5.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-128',
    name: 'Flamenco Screw',
    category: 'screws-nails',
    categoryName: 'Screws & Nails',
    specification: '6×25 (+) 1"',
    material: '', finish: '', size: '', features: [],
    image: '/images/screws/s6.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-129',
    name: 'Flamenco Screw',
    category: 'screws-nails',
    categoryName: 'Screws & Nails',
    specification: '5×19 (+) 3/4"',
    material: '', finish: '', size: '', features: [],
    image: '/images/screws/s7.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-130',
    name: 'Flamenco Nails',
    category: 'screws-nails',
    categoryName: 'Screws & Nails',
    specification: '17×3/4"',
    material: '', finish: '', size: '', features: [],
    image: '/images/nails/n1.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-131',
    name: 'Flamenco Nails WH',
    category: 'screws-nails',
    categoryName: 'Screws & Nails',
    specification: '17×3/4" WH',
    material: '', finish: '', size: '', features: [],
    image: '/images/nails/n2.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-132',
    name: 'Flamenco Nails WH',
    category: 'screws-nails',
    categoryName: 'Screws & Nails',
    specification: '14×1.5" WH',
    material: '', finish: '', size: '', features: [],
    image: '/images/nails/n3.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-133',
    name: 'Flamenco Nails',
    category: 'screws-nails',
    categoryName: 'Screws & Nails',
    specification: '20×3/4"',
    material: '', finish: '', size: '', features: [],
    image: '/images/nails/n4.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-134',
    name: 'Flamenco Nails',
    category: 'screws-nails',
    categoryName: 'Screws & Nails',
    specification: '12×2"',
    material: '', finish: '', size: '', features: [],
    image: '/images/nails/n5.png',
    description: '',
    brand: 'FLAMENCO'
  },

  /* ===========================
     KEY HANGERS (FLAMENCO) — Page 13
  =========================== */
  {
    id: 'prod-135',
    name: 'Flamenco Key Hanger Bi Gloss Jay Shri Krishna',
    category: 'key-hangers',
    categoryName: 'Key Hangers',
    specification: 'Bi Gloss / Jay Shri Krishna',
    material: '', finish: '', size: '', features: [],
    image: '/images/keyhanger/k1.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-136',
    name: 'Flamenco Key Hanger Car V JB Gold',
    category: 'key-hangers',
    categoryName: 'Key Hangers',
    specification: 'Car V / JB Gold',
    material: '', finish: '', size: '', features: [],
    image: '/images/keyhanger/k2.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-137',
    name: 'Flamenco Key Hanger Car V Antique Rose Gold',
    category: 'key-hangers',
    categoryName: 'Key Hangers',
    specification: 'Car V / Antique Rose Gold',
    material: '', finish: '', size: '', features: [],
    image: '/images/keyhanger/k3.png',
    description: '',
    brand: 'FLAMENCO'
  },

  /* ===========================
     CLOTH HANGERS (FLAMENCO) — Page 13
  =========================== */
  {
    id: 'prod-138',
    name: 'Flamenco Cloth Hanger (Small)',
    category: 'cloth-hangers',
    categoryName: 'Cloth Hangers',
    specification: 'Antique Brass / Antique Copper / Bi Gloss',
    material: '', finish: '', size: '', features: [],
    image: '/images/clothhanger/c1.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-139',
    name: 'Flamenco Cloth Hanger (Large)',
    category: 'cloth-hangers',
    categoryName: 'Cloth Hangers',
    specification: 'Antique Brass / Antique Copper / Bi Gloss',
    material: '', finish: '', size: '', features: [],
    image: '/images/clothhanger/c2.png',
    description: '',
    brand: 'FLAMENCO'
  },

  /* ===========================
     DOOR STOPPERS (FLAMENCO) — Page 13
  =========================== */
  {
    id: 'prod-140',
    name: 'Flamenco Door Stopper Round Single',
    category: 'door-stoppers',
    categoryName: 'Door Stoppers',
    specification: 'Round / Single',
    material: '', finish: '', size: '', features: [],
    image: '/images/door-stopper/ds1.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-141',
    name: 'Flamenco Door Stopper Square Single',
    category: 'door-stoppers',
    categoryName: 'Door Stoppers',
    specification: 'Square / Single',
    material: '', finish: '', size: '', features: [],
    image: '/images/door-stopper/ds2.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-142',
    name: 'Flamenco Door Stopper Square Double',
    category: 'door-stoppers',
    categoryName: 'Door Stoppers',
    specification: 'Square / Double',
    material: '', finish: '', size: '', features: [],
    image: '/images/door-stopper/ds3.png',
    description: '',
    brand: 'FLAMENCO'
  },
  {
    id: 'prod-142',
    name: 'Flamenco Door Stopper Square Double',
    category: 'door-stoppers',
    categoryName: 'Door Stoppers',
    specification: 'Square / Double',
    material: '', finish: '', size: '', features: [],
    image: '/images/door-stopper/ds4.png',
    description: '',
    brand: 'FLAMENCO'
  },

  // 👉 ADD NEW PRODUCTS HERE

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
