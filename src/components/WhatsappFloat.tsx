/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { CONTACT_INFO } from '../data';

export default function WhatsappFloat() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tool tip after a small delay to attract positive attention
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    window.open(CONTACT_INFO.whatsappUrl, '_blank', 'noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end" id="whatsapp-float-container">
      {/* Dynamic Pop up Tooltip box */}
      {showTooltip && (
        <div 
          className="mb-3 bg-white text-neutral-800 text-xs font-semibold py-2 px-3 rounded-lg shadow-xl border border-neutral-100 flex items-center space-x-2 animate-in fade-in slide-in-from-bottom-2 duration-350 max-w-xs text-left"
          id="whatsapp-tooltip-box"
        >
          <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping"></div>
          <span>Inquire instantly on WhatsApp!</span>
          
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-neutral-400 hover:text-neutral-600 p-0.5 rounded-full"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Primary Floating Action WhatsApp button with pulse styling from index.css */}
      <button
        onClick={handleClick}
        className="whatsapp-float-btn w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg transition-transform hover:scale-110 cursor-pointer active:scale-95"
        title="Chat in WhatsApp"
        aria-label="Direct WhatsApp chat"
        id="whatsapp-floating-trigger-btn"
      >
        <MessageCircle className="w-8 h-8 fill-current stroke-[2.2]" />
      </button>
    </div>
  );
}
