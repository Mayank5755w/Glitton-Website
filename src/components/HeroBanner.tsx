/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import bannerImg from '../assets/images/herobanner.jpg';

export default function HeroBanner() {
  return (
    <div className="relative w-full bg-slate-900 border-b-2 border-amber-500/30" id="hero-banner-container">
      {/* Background Image - full width, natural aspect ratio */}
      <img
        src={bannerImg}
        alt="Premium Furniture Fittings Banner"
        className="w-full h-auto block"
        referrerPolicy="no-referrer"
        id="hero-banner-image"
      />

      {/* Subtle dot overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>
    </div>
  );
}
