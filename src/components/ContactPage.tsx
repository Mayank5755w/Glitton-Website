/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../data';
import SEO from './SEO';

export default function ContactPage() {
  return (
    <div className="bg-[#f8fafc] py-12 px-4 sm:px-6 lg:px-8" id="contact-page-container">
      <SEO
        title="Contact Us | Faviona Overseas Exim Pvt. Ltd."
        description="Get in touch with Faviona Overseas for GLITTON and FLAMENCO furniture hardware inquiries, bulk pricing, distributor partnerships, and technical product drawings."
        path="/contact"
      />

      <div className="max-w-3xl mx-auto">

        {/* Upper Title Description */}
        <div className="text-center mb-12">
          <span className="text-amber-500 font-bold text-xs tracking-[0.2em] uppercase mb-1.5 block font-mono">BUSINESS DISTRIBUTION SERVICE</span>
          <h3 className="text-2xl sm:text-3.5xl font-black text-slate-900 tracking-tight font-display uppercase">
            Connect With Faviona
          </h3>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-3"></div>
          <p className="mt-3 text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
            Get in touch for commercial hardware custom specification distributions, builder bulk pricing, and custom design layouts.
          </p>
        </div>

        {/* Contact Info Panel */}
        <div className="py-4 space-y-8 text-left bg-white border border-slate-200 rounded-2xl p-8 shadow-sm" id="contact-info-panel-left">

          <div className="space-y-2">
            <span className="text-xs tracking-[0.2em] font-bold text-amber-600 uppercase font-mono block">CORPORATE EXPORT OFFICE</span>
            <h4 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 font-display">
              {CONTACT_INFO.companyName}
            </h4>
            <p className="text-sm sm:text-base text-slate-500 leading-normal">
              {CONTACT_INFO.subtitle}
            </p>
          </div>

          {/* List coordinates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pt-4 border-t border-slate-150">

            {/* Registered Office */}
            <div className="flex items-start space-x-4">
              <div className="p-2.5 bg-slate-100 rounded-xl text-slate-900 mt-1 flex-shrink-0">
                <MapPin className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <span className="text-[10px] tracking-wider text-slate-400 font-bold uppercase block font-mono">Registered Office</span>
                <p className="text-slate-700 text-sm font-semibold mt-1 leading-relaxed">
                  Kharangajhar, Telco Colony,<br />
                  Jamshedpur, Jharkhand – 831004
                </p>
              </div>
            </div>

            {/* Warehouse */}
            <div className="flex items-start space-x-4">
              <div className="p-2.5 bg-slate-100 rounded-xl text-slate-900 mt-1 flex-shrink-0">
                <MapPin className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <span className="text-[10px] tracking-wider text-slate-400 font-bold uppercase block font-mono">Warehouse Logistics Hub</span>
                <p className="text-slate-700 text-sm font-semibold mt-1 leading-relaxed">
                  Birsanagar Zone No. 4,<br />
                  Jamshedpur, Jharkhand – 831019
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="p-2.5 bg-slate-100 rounded-xl text-slate-900 mt-1 flex-shrink-0">
                <Phone className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <span className="text-[10px] tracking-wider text-slate-400 font-bold uppercase block font-mono">Commercial Desk</span>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                  className="block text-slate-900 text-base font-black mt-1 tracking-wider hover:text-amber-500 transition-colors font-mono"
                >
                  {CONTACT_INFO.phone}
                </a>
                <span className="text-xs text-slate-400 block mt-0.5">B2B Trade & Distributor Consults</span>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="p-2.5 bg-slate-100 rounded-xl text-slate-900 mt-1 flex-shrink-0">
                <Mail className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <span className="text-[10px] tracking-wider text-slate-400 font-bold uppercase block font-mono">Direct Email Account</span>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="block text-slate-900 text-sm font-black mt-1 hover:text-amber-500 transition-colors font-mono"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            {/* Business timings */}
            <div className="flex items-start space-x-4 sm:col-span-2">
              <div className="p-2.5 bg-slate-100 rounded-xl text-slate-900 mt-1 flex-shrink-0">
                <Clock className="w-5 h-5 text-slate-500" />
              </div>
              <div>
                <span className="text-[10px] tracking-wider text-slate-400 font-bold uppercase block font-mono">Operating Hours</span>
                <p className="text-slate-700 text-sm font-semibold mt-1">
                  Monday – Saturday (09:30 AM – 06:30 PM IST)
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
