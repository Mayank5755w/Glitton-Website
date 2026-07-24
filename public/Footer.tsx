/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Mail, ArrowUpRight } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CONTACT_INFO } from '../data';
import favionaLogoImg from '../assets/images/faviona.jpeg';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActivePath = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const handleNavClick = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white border-t-4 border-amber-500" id="glitton-footer-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
          {/* Column 1: Brand & Desc */}
          <div className="md:col-span-5 space-y-4 text-left">
            <img
              src={favionaLogoImg}
              alt="Faviona Overseas Exim Pvt. Ltd. Logo"
              className="h-14 w-auto object-contain rounded"
            />

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed font-sans mt-3">
              House of Premium Furniture Fittings & Architectural Hardware. Facilitating premium living aesthetics with engineering durability, functionality, and modern appeal.
            </p>

            <div className="flex items-center space-x-3 pt-1">
              <span className="text-sm font-black tracking-wider font-display text-white uppercase">
                GLITTON<span className="text-[10px] text-amber-500 font-bold ml-0.5">®</span>
              </span>
              <div className="h-4 w-[1.5px] bg-slate-800"></div>
              <span className="text-xs tracking-[0.2em] font-black text-amber-500 uppercase font-display">
                FLAMENCO
              </span>
            </div>

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
                { label: 'Homepage Portal', value: '/' },
                { label: 'Technical Specifications', value: '/products' },
                { label: 'Export Catalog Download', value: '/catalog' },
                { label: 'Regional Contact Desk', value: '/contact' }
              ] as const).map((link) => {
                const isActive = isActivePath(link.value);
                return (
                  <button
                    key={link.value}
                    id={`footer-link-${link.value.replace('/', '') || 'home'}`}
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
