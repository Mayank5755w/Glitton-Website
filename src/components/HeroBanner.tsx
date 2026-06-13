/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import bannerImg from '../assets/images/fittings_banner_1781324798812.jpg';

export default function HeroBanner() {
  return (
    <div className="relative w-full h-[240px] sm:h-[280px] md:h-[350px] lg:h-[380px] overflow-hidden bg-slate-900 border-b-2 border-amber-500/30" id="hero-banner-container">
      {/* Background Image */}
      <img
        src={bannerImg}
        alt="Premium Furniture Fittings Banner"
        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out scale-102"
        referrerPolicy="no-referrer"
        id="hero-banner-image"
      />

      {/* Radial grid technical overlay matching the Professional Polish drafting look */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>

      {/* Premium dark gradient overlay prioritizing text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/65 to-slate-900/25"></div>

      {/* Content Container */}
      <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-2xl text-left">
          
          
          {/* Main Overlay Title */}
          <h1 
            className="text-2xl sm:text-3.5xl md:text-4.5xl lg:text-5xl font-black text-white uppercase tracking-tight leading-none font-display drop-shadow-md select-none"
            id="hero-banner-title"
          >
            Premium <span className="text-amber-500">Furniture Fittings</span> <br className="hidden sm:inline" />
            & Architectural Hardware
          </h1>
        </div>
      </div>
    </div>
  );
}
