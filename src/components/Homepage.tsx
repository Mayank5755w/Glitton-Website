/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, ChevronRight, Phone, Mail } from 'lucide-react';
import { ProductCategory } from '../types';
import { PRODUCT_CATEGORIES, BRANDS, CONTACT_INFO } from '../data';

interface HomepageProps {
  onCategorySelect: (category: ProductCategory) => void;
  setActivePage: (page: 'home' | 'products' | 'catalog' | 'contact') => void;
}

export default function Homepage({ onCategorySelect, setActivePage }: HomepageProps) {
  
  const handleCategoryClick = (catId: ProductCategory) => {
    onCategorySelect(catId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#f8fafc]" id="homepage-root">
      {/* Upper Content Section */}
      <section className="max-w-5xl mx-auto px-4 py-12 md:py-16 text-left space-y-12" id="about-section">
        
        {/* ABOUT FAVIONA (Featured section with brand side-bar) */}
        <div className="border-l-4 border-amber-500 pl-6 md:pl-8 py-2">
          <h2 className="text-sm font-bold uppercase tracking-[0.25em] text-amber-600 mb-2 font-mono">
            ABOUT FAVIONA OVERSEAS
          </h2>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-sans">
            Faviona Overseas Exim Pvt. Ltd. is Jamshedpur's premier supplier of heavy-duty, certified furniture fittings and architectural hardware solutions. 
            Through our globally recognized brands <span className="font-extrabold text-slate-900 border-b border-amber-500 pb-0.5">GLITTON</span> and <span className="font-extrabold text-slate-900 border-b border-amber-500 pb-0.5">FLAMENCO</span>, 
            we engineer robust components tailored specifically to modern construction developers, boutique cabinet manufacturers, and architectural designers seeking world-class build durability.
          </p>
        </div>

        {/* OUR PRODUCT RANGE */}
        <div className="space-y-6">
          <div className="flex justify-between items-end border-b border-slate-200 pb-3">
            <h2 className="text-sm md:text-base font-black uppercase tracking-[0.2em] text-slate-800 font-display">
              Our Certified Product Categories
            </h2>
            <button 
              onClick={() => {
                setActivePage('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-bold text-amber-600 hover:text-amber-700 hover:underline uppercase tracking-wider hidden sm:block"
            >
              Browse Full Specs &rarr;
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="homepage-product-range-list">
            {PRODUCT_CATEGORIES.map((cat) => (
              <div 
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id as ProductCategory)}
                className="group bg-white border border-slate-200/80 rounded-xl p-5 flex flex-col sm:flex-row items-center sm:items-start gap-5 cursor-pointer hover:border-amber-500 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300 animate-fade-in"
                id={`cat-card-${cat.id}`}
              >
                {/* Premium Hardware Product Image — bigger, full image visible */}
                <div className="w-full sm:w-40 h-40 sm:h-36 bg-slate-50 rounded-lg overflow-hidden border border-slate-100 flex-shrink-0 relative flex items-center justify-center p-2">
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="max-w-full max-h-full w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content Details */}
                <div className="space-y-1.5 sm:space-y-2 flex-grow text-center sm:text-left">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors flex items-center gap-2">
                      <span className="w-1.5 h-3.5 bg-amber-500 rounded-xs inline-block sm:hidden flex-shrink-0"></span>
                      {cat.name}
                    </h3>
                    <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-amber-500 group-hover:translate-x-1 transition-all hidden sm:block" />
                  </div>
                  <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-sans line-clamp-2">
                    {cat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center sm:text-left">
            <button 
              onClick={() => {
                setActivePage('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center space-x-2 text-sm sm:text-base font-bold text-slate-900 hover:text-amber-600 transition-colors cursor-pointer group"
              id="view-all-products-link"
            >
              <span>Explore Entire Interactive Specs Sheet</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* OUR BRANDS from Screen 2 */}
        <div className="border-t border-slate-200 pt-10 space-y-6" id="brands-section">
          <h2 className="text-sm md:text-base font-black uppercase tracking-[0.2em] text-slate-800 font-display">
            Our Brand Architecture
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 pt-4">
            {/* GLITTON */}
            <div className="space-y-3">
              <span className="text-xs tracking-[0.2em] font-bold text-amber-600 block uppercase font-mono">Germany Standard</span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">{BRANDS.GLITTON.name}</h3>
              <p className="text-sm text-slate-800 font-bold tracking-wide">{BRANDS.GLITTON.tagline}</p>
              <p className="text-sm text-slate-500 leading-relaxed font-sans">
                {BRANDS.GLITTON.description}
              </p>
              <button 
                onClick={() => {
                  onCategorySelect('auto-hinges');
                }}
                className="pt-2 text-xs font-bold text-amber-600 hover:text-amber-700 hover:underline inline-flex items-center cursor-pointer uppercase tracking-wider"
              >
                <span>View Glitton Specifications</span>
                <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
              </button>
            </div>

            {/* FLAMENCO */}
            <div className="space-y-3 md:border-l md:border-slate-200 md:pl-8">
              <span className="text-xs tracking-[0.2em] font-bold text-amber-600 block uppercase font-mono">Architectural Elegance</span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">{BRANDS.FLAMENCO.name}</h3>
              <p className="text-sm text-slate-800 font-bold tracking-wide">{BRANDS.FLAMENCO.tagline}</p>
              <p className="text-sm text-slate-500 leading-relaxed font-sans">
                {BRANDS.FLAMENCO.description}
              </p>
              <button 
                onClick={() => {
                  onCategorySelect('cabinet-handles');
                }}
                className="pt-2 text-xs font-bold text-amber-600 hover:text-amber-700 hover:underline inline-flex items-center cursor-pointer uppercase tracking-wider"
              >
                <span>View Flamenco Specifications</span>
                <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM CONTACT PANEL from Screen 2 */}
        <div className="border-t border-slate-200 pt-10" id="quick-contact-panel">
          <div className="py-8 border-t border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs tracking-[0.25em] text-amber-600 font-bold uppercase font-mono block">TRUSTED WORLDWIDE EXPORTER</span>
              <h3 className="text-xl sm:text-2xl font-black tracking-wide font-display text-slate-900">{CONTACT_INFO.companyName}</h3>
              <p className="text-sm text-slate-500 max-w-md leading-normal">
                {CONTACT_INFO.subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-2 md:pt-0">
              <a 
                href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`} 
                className="inline-flex items-center space-x-3 text-slate-700 hover:text-amber-600 transition-colors group cursor-pointer"
              >
                <div className="p-2.5 bg-slate-100 rounded-lg group-hover:bg-amber-100 group-hover:text-amber-600 transition-colors">
                  <Phone className="w-5 h-5 text-slate-600 group-hover:text-inherit" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase font-mono tracking-wider">COMMERCIAL ENQUIRIES</span>
                  <span className="text-sm font-bold tracking-wider font-mono text-slate-900">{CONTACT_INFO.phone}</span>
                </div>
              </a>

              <a 
                href={`mailto:${CONTACT_INFO.email}`} 
                className="inline-flex items-center space-x-3 text-slate-700 hover:text-amber-600 transition-colors group cursor-pointer"
              >
                <div className="p-2.5 bg-slate-100 rounded-lg group-hover:bg-amber-100 group-hover:text-amber-600 transition-colors">
                  <Mail className="w-5 h-5 text-slate-600 group-hover:text-inherit" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase font-mono tracking-wider">EMAIL INBOX</span>
                  <span className="text-sm font-bold tracking-wide font-mono text-slate-900">{CONTACT_INFO.email}</span>
                </div>
              </a>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
