/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Download, FileText, CheckCircle2, RotateCw, Sparkles, BookOpen } from 'lucide-react';
import { PRODUCT_CATEGORIES, PRODUCTS } from '../data';

export default function CatalogPage() {
  const [downloadState, setDownloadState] = useState<'idle' | 'loading' | 'success'>('idle');
  const [downloadProgress, setDownloadProgress] = useState(0);

  const triggerDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (downloadState !== 'idle') return;

    setDownloadState('loading');
    setDownloadProgress(10);

    // Simulate progressive download sequence
    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setDownloadState('success');
          
          // Generate a beautifully formatted CSV/Text Catalog file to download to trigger real browser reaction
          setTimeout(() => {
            try {
              const catalogHeader = "GLITTON HARDWARE CATALOG SPECIFICATIONS SHEET\nExported from Glitton Germany Official App\n\nNAME,BRAND,CODE,CATEGORY,MATERIAL,FINISH,SIZING\n";
              const catalogLines = PRODUCTS.map(p => 
                `"${p.name}","${p.brand}","${p.itemCode}","${p.categoryName}","${p.material}","${p.finish}","${p.size}"`
              ).join("\n");
              
              const blob = new Blob([catalogHeader + catalogLines], { type: 'text/csv;charset=utf-8;' });
              const url = URL.createObjectURL(blob);
              const link = document.createElement("a");
              link.setAttribute("href", url);
              link.setAttribute("download", "Glitton_Germany_Flamenco_Product_Catalog.csv");
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            } catch (err) {
              console.error("Failed to compile local CSV catalog file", err);
            }
          }, 300);

          return 100;
        }
        return prev + Math.floor(Math.random() * 20) + 15;
      });
    }, 150);
  };

  return (
    <div className="bg-[#f8fafc] py-16 px-4 sm:px-6 lg:px-8" id="catalog-page-container">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        {/* Title corresponding to Image 4 */}
        <div className="space-y-3">
          <span className="text-amber-500 font-bold text-xs tracking-widest uppercase mb-1 block font-mono">DIGITAL SPECIFICATION SUITE</span>
          <h2 className="text-3xl sm:text-4.5xl font-black text-slate-900 tracking-tight font-display uppercase">
            Product Catalog Manifest
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full"></div>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            Download our verified technical directories, installation spacing guides, and commercial order spreadsheets in a single dataset.
          </p>
        </div>

        {/* Download Action area */}
        <div className="max-w-md mx-auto py-4">
          {downloadState === 'idle' && (
            <div className="space-y-6" id="catalog-download-idle">
              <div className="p-4 bg-amber-100 rounded-full w-14 h-14 flex items-center justify-center mx-auto text-amber-600">
                <BookOpen className="w-6 h-6" />
              </div>

              <div className="text-sm text-slate-600 text-left space-y-2">
                <p className="font-extrabold text-slate-800 text-center uppercase tracking-widest text-xs mb-3">Specifications Included:</p>
                <div className="grid grid-cols-2 gap-3 mt-2">
                  <div className="p-3 bg-slate-100/60 rounded border border-slate-200/50 flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-sm"></div>
                    <span className="text-xs font-bold text-slate-700">Auto Hinges Range</span>
                  </div>
                  <div className="p-3 bg-slate-100/60 rounded border border-slate-200/50 flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-sm"></div>
                    <span className="text-xs font-bold text-slate-700">Telescopic Slides</span>
                  </div>
                  <div className="p-3 bg-slate-100/60 rounded border border-slate-200/50 flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-sm"></div>
                    <span className="text-xs font-bold text-slate-700">Premium Door Pulls</span>
                  </div>
                  <div className="p-3 bg-slate-100/60 rounded border border-slate-200/50 flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-sm"></div>
                    <span className="text-xs font-bold text-slate-700">Glass Connectors</span>
                  </div>
                </div>
              </div>

              {/* Exact rectangular amber button with slate-900 text from Professional Polish */}
              <button
                onClick={triggerDownload}
                className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 text-xs sm:text-sm font-black uppercase tracking-widest py-3.5 px-6 rounded shadow transition-transform active:scale-98 cursor-pointer text-center block"
                id="btn-download-catalog"
              >
                Download Catalog CSV
              </button>
            </div>
          )}

          {downloadState === 'loading' && (
            <div className="space-y-6 py-4" id="catalog-download-loading">
              <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
                <RotateCw className="w-10 h-10 text-amber-500 animate-spin" />
                <span className="absolute text-xs font-bold font-mono text-slate-800">{Math.min(downloadProgress, 99)}%</span>
              </div>
              <div className="space-y-1.5">
                <p className="text-sm sm:text-base font-black text-slate-900 uppercase tracking-wide">Compiling Engineering Catalog</p>
                <p className="text-xs sm:text-sm text-slate-400">Exporting GLITTON & FLAMENCO raw technical data sheet...</p>
              </div>

              {/* Mini Loading Bar */}
              <div className="w-full h-1.5 bg-slate-150 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-amber-500 transition-all duration-200" 
                  style={{ width: `${downloadProgress}%` }}
                ></div>
              </div>
            </div>
          )}

          {downloadState === 'success' && (
            <div className="space-y-6 animate-fade-in" id="catalog-download-success">
              <div className="p-3 bg-green-50 rounded-full w-14 h-14 flex items-center justify-center mx-auto border border-green-150 text-green-600">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              
              <div className="space-y-1">
                <p className="text-sm sm:text-base font-black text-slate-900">Catalog Compiled Successfully!</p>
                <p className="text-xs sm:text-sm text-slate-500 max-w-xs mx-auto leading-relaxed">
                  A comprehensive Excel-compatible specifications document has been compiled and downloaded securely.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setDownloadState('idle')}
                  className="px-5 py-2.5 bg-slate-900 text-amber-500 hover:bg-slate-800 text-xs font-bold rounded-lg cursor-pointer uppercase tracking-wider"
                >
                  Download Again
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Categories grid showing ranges as list layout beneath */}
        <div className="pt-10 border-t border-slate-200 max-w-3xl mx-auto space-y-6 text-left">
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400 font-mono text-center">
            Catalog Divisions Included Overview
          </h3>

          <div className="divide-y divide-slate-200">
            {PRODUCT_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="py-4 hover:border-amber-500 flex items-start space-x-4 transition-all duration-300">
                <FileText className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-sm sm:text-base font-black text-slate-900 leading-snug">{cat.name} Spec Sheets</h4>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-1">{cat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
