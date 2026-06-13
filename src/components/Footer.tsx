/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Mail, ArrowUpRight } from 'lucide-react';
import { ActivePage } from '../types';
import { CONTACT_INFO } from '../data';

interface FooterProps {
  setActivePage: (page: ActivePage) => void;
  activePage: ActivePage;
}

export default function Footer({ setActivePage, activePage }: FooterProps) {
  const handleNavClick = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white border-t-4 border-amber-500" id="glitton-footer-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
          {/* Column 1: Brand & Desc */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center space-x-3">
              <div className="flex flex-col items-start leading-none pr-3">
                <span className="text-xl font-black tracking-wider font-display text-white uppercase">
                  GLITTON<span className="text-[10px] text-amber-500 font-bold ml-0.5">®</span>
                </span>
                <span className="text-[7px] font-mono tracking-[0.25em] text-amber-500 mt-0.5">
                  GERMANY
                </span>
              </div>
              <div className="h-6 w-[1.5px] bg-slate-800"></div>
              <span className="text-xs tracking-[0.2em] font-black text-amber-500 uppercase font-display pl-1">
                FLAMENCO
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed font-sans mt-3">
              House of Premium Furniture Fittings & Architectural Hardware. Facilitating premium living aesthetics with engineering durability, functionality, and modern appeal.
            </p>

            <p className="text-[10px] text-slate-500 font-mono mt-2">
              Corporate Office: <span className="font-semibold text-slate-400">{CONTACT_INFO.companyName}</span>
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 text-left">
            <h4 className="text-xs uppercase font-extrabold tracking-[0.2em] text-slate-400 mb-4 font-mono">
              Quick Navigation
            </h4>
            <div className="flex flex-col space-y-2.5 items-start">
              {([
                { label: 'Homepage Portal', value: 'home' },
                { label: 'Technical Specifications', value: 'products' },
                { label: 'Export Catalog Download', value: 'catalog' },
                { label: 'Regional Contact Desk', value: 'contact' }
              ] as const).map((link) => {
                const isActive = activePage === link.value;
                return (
                  <button
                    key={link.value}
                    id={`footer-link-${link.value}`}
                    onClick={() => handleNavClick(link.value)}
                    className={`text-xs sm:text-sm text-left transition-colors cursor-pointer hover:text-amber-500 flex items-center group font-medium ${
                      isActive ? 'text-amber-500 font-bold' : 'text-slate-400'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 text-amber-500 transition-all" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Column 3: Contacts */}
          <div className="md:col-span-4 text-left space-y-4">
            <h4 className="text-xs uppercase font-extrabold tracking-[0.2em] text-slate-400 mb-4 font-mono">
              Inquiries & Office
            </h4>
            
            <div className="space-y-3">
              <a 
                href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`} 
                className="flex items-center space-x-2.5 text-slate-400 hover:text-amber-500 text-xs sm:text-sm font-mono tracking-wider transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4 text-amber-500" />
                <span>{CONTACT_INFO.phone}</span>
              </a>

              <a 
                href={`mailto:${CONTACT_INFO.email}`} 
                className="flex items-center space-x-2.5 text-slate-400 hover:text-amber-500 text-xs sm:text-sm font-mono tracking-wide transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4 text-amber-500" />
                <span>{CONTACT_INFO.email}</span>
              </a>
            </div>

            <div className="text-[10px] text-slate-500 font-sans leading-relaxed pt-2">
              <span className="font-semibold block text-slate-400 uppercase tracking-widest text-[9px] mb-1">Jamshedpur Logistics Hub:</span>
              Birsanagar Zone No. 4, Jamshedpur, Jharkhand – 831019
            </div>
          </div>

        </div>

        {/* Bottom Line Bar Content */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 font-sans gap-4">
          <p>© {new Date().getFullYear()} Faviona Overseas Exim Pvt. Ltd. All rights reserved.</p>
          <div className="flex space-x-6">
            <span className="hover:text-amber-500 transition-colors">ISO 9001:2015 Certified</span>
            <span>•</span>
            <span className="hover:text-amber-500 transition-colors">German Quality Assurance</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
