/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../data';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    // Simulate sending form submission
    setFormSubmitted(true);
  };

  const fireWhatsAppForm = () => {
    const text = `*New Website Business Enquiry:*
- *Name:* ${formData.name}
- *Email:* ${formData.email || 'N/A'}
- *Phone:* ${formData.phone || 'N/A'}
- *Subject:* ${formData.subject}
- *Message:* ${formData.message}`;
    const url = `https://wa.me/919204110077?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noreferrer');
  };

  return (
    <div className="bg-[#f8fafc] py-12 px-4 sm:px-6 lg:px-8" id="contact-page-container">
      <div className="max-w-7xl mx-auto">
        
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

        {/* Layout: Info Card and Contact Form side-by-side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT PANEL: Contact Details */}
          <div className="lg:col-span-5 py-4 space-y-8 text-left" id="contact-info-panel-left">
            
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
            <div className="space-y-6 pt-4 border-t border-slate-150">
              
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
              <div className="flex items-start space-x-4">
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

          {/* RIGHT PANEL: Custom High-Performance Lead Capture Form */}
          <div className="lg:col-span-7 py-4 text-left">
            {!formSubmitted ? (
              <form onSubmit={handleFormSubmit} className="space-y-6" id="business-lead-capture-form">
                <div>
                  <span className="text-[10px] tracking-[0.2em] font-bold text-amber-600 uppercase font-mono block">VERIFIED BUSINESS ROUTINGS</span>
                  <h4 className="text-xl font-black tracking-tight text-slate-900 font-display mt-0.5 mb-1.5">
                    Send Technical Inquiry Route
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Once submitted, our engineering and procurement team reviews requested sizing parameters and drafts custom quotation sheets within 24 business hours.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Mayank Kumar"
                      className="w-full bg-slate-50 border border-slate-200 focus:outline-none focus:border-amber-500 focus:bg-white rounded-xl px-4 py-2.5 text-sm transition-all"
                    />
                  </div>

                  {/* Phone Num */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 92041 10077"
                      className="w-full bg-slate-50 border border-slate-200 focus:outline-none focus:border-amber-500 focus:bg-white rounded-xl px-4 py-2.5 text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email address */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Business Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. business@faviona.com"
                      className="w-full bg-slate-50 border border-slate-200 focus:outline-none focus:border-amber-500 focus:bg-white rounded-xl px-4 py-2.5 text-sm transition-all"
                    />
                  </div>

                  {/* Subject */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Inquiry Channel Category</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 focus:outline-none focus:border-amber-500 focus:bg-white rounded-xl px-3 py-2.5 text-sm cursor-pointer transition-all"
                    >
                      <option value="General Inquiry">General Corporate / Brand Information</option>
                      <option value="Distribution License">Become a Regional Distributor / Dealer</option>
                      <option value="Builders Project Rates">Builders / Project Bulk Supply Quotes</option>
                      <option value="Specific SKU Quote">Technical Product Drawings Request</option>
                    </select>
                  </div>
                </div>

                {/* Message text area */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Spec Requirements & Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Provide specific sizes, finishes, or item codes needed for your project (e.g. soft-close hinges quantities)..."
                    className="w-full bg-slate-50 border border-slate-200 focus:outline-none focus:border-amber-500 focus:bg-white rounded-xl px-4 py-2.5 text-sm transition-all"
                  ></textarea>
                </div>

                {/* Submits */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-amber-500 hover:text-white text-xs font-black uppercase tracking-widest py-3.5 px-6 rounded-xl transition-all shadow-md cursor-pointer"
                    id="btn-submit-contact-form"
                  >
                    <Send className="w-4.5 h-4.5" />
                    <span>Send Verification Message</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-12 px-4 space-y-6 animate-fade-in" id="contact-success-panel">
                <div className="p-3 bg-green-50 rounded-full w-14 h-14 flex items-center justify-center mx-auto border border-green-150 text-green-600">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-lg font-black text-slate-900 uppercase">Enquiry Logged!</h4>
                  <p className="text-sm text-slate-500 max-w-md mx-auto">
                    Thank you, <span className="font-extrabold text-slate-850">{formData.name}</span>. Your technical request regarding <span className="font-semibold text-slate-700">"{formData.subject}"</span> is logged directly on our corporate router.
                  </p>
                </div>

                {/* Fast Action Bypass directly to Whatsapp */}
                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 max-w-md mx-auto space-y-3.5 text-left">
                  <div className="flex items-start space-x-3">
                    <MessageSquare className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-extrabold text-emerald-800 uppercase tracking-widest text-[9px]">Priority Response Bypass!</p>
                      <p className="text-xs text-emerald-600 mt-1 leading-relaxed">
                        Forward this compiled specification route details directly to our real-time official WhatsApp business desk for immediate review in under 15 minutes.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={fireWhatsAppForm}
                    className="w-full inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2.5 px-4 rounded-xl cursor-pointer shadow-sm shadow-emerald-200"
                    id="btn-forward-wa-form"
                  >
                    <Send className="w-4 h-4 fill-white text-white rotate-45" />
                    <span>Instant Forward to WhatsApp</span>
                  </button>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: 'General Inquiry',
                        message: ''
                      });
                    }}
                    className="text-xs font-bold text-slate-500 hover:text-amber-600 cursor-pointer underline uppercase tracking-wider font-mono"
                  >
                    Submit Another Specification Sheet
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
