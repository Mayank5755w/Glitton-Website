/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Search, Menu, X, ArrowRight } from 'lucide-react';
import { ActivePage } from '../types';

interface HeaderProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  onSearch: (text: string) => void;
}

export default function Header({ activePage, setActivePage, onSearch }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchVal, setSearchVal] = useState('');

  // Nav items from image
  const navItems: { label: string; value: ActivePage }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Products', value: 'products' },
    { label: 'Catalog', value: 'catalog' },
    { label: 'Contact us', value: 'contact' },
  ];

  const handleNavClick = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchVal.trim()) {
      onSearch(searchVal);
      setActivePage('products');
      setIsSearchOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-900 text-white border-b-4 border-amber-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand/Logos from Screenshots */}
          <div 
            className="flex items-center space-x-3 cursor-pointer select-none"
            onClick={() => handleNavClick('home')}
            id="header-brand-logos"
          >
            {/* Professional Polish Tool Icon Badge */}
            <div className="bg-amber-500 p-2 rounded-sm text-slate-900">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.3C.5 6.7.9 9.7 2.9 11.7c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.4-2.4c.4-.4.4-1 0-1.4z"/>
              </svg>
            </div>

            {/* GLITTON */}
            <div className="flex flex-col items-start leading-none pr-3">
              <span className="text-2xl font-black tracking-tighter uppercase font-display">
                glitton<span className="text-[10px] align-super text-amber-500">TM</span>
              </span>
              <span className="text-[8px] font-mono tracking-[0.25em] text-neutral-400 mt-0.5">
                GERMANY
              </span>
            </div>

            {/* Vertical Divider line */}
            <div className="h-8 w-[1px] bg-slate-700 hidden sm:block"></div>

            {/* FLAMENCO */}
            <div className="pl-1 hidden sm:block">
              <span className="text-base tracking-[0.2em] font-light text-neutral-200 uppercase font-display font-semibold transition-colors hover:text-amber-500">
                FLAMENCO
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" id="header-desktop-nav">
            {navItems.map((item) => {
              const isActive = activePage === item.value;
              return (
                <button
                  key={item.value}
                  id={`nav-btn-${item.value}`}
                  onClick={() => handleNavClick(item.value)}
                  className={`text-xs font-bold tracking-widest uppercase transition-colors duration-200 pb-1 cursor-pointer ${
                    isActive ? 'text-amber-500 border-b-2 border-amber-500' : 'text-slate-300 hover:text-amber-400'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            {/* Sticky Search bar toggle */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-1.5 rounded-full hover:bg-slate-800 transition-colors text-slate-300 hover:text-amber-500 cursor-pointer"
              title="Search products"
              aria-label="Search"
              id="header-search-toggle"
            >
              <Search className="w-5 h-5" />
            </button>
          </nav>

          {/* Mobile Right Controls */}
          <div className="flex items-center md:hidden space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-1.5 rounded-full hover:bg-slate-800 text-slate-300 hover:text-amber-500"
              aria-label="Search mobile"
              id="header-search-toggle-mobile"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 rounded-full hover:bg-slate-800 text-slate-300 hover:text-amber-500"
              aria-label="Toggle menu"
              id="header-mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Floating Input Search Panel */}
      {isSearchOpen && (
        <div 
          className="absolute left-0 right-0 top-full bg-slate-900 border-b-2 border-amber-500 px-4 py-4 md:py-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200"
          id="search-overlay-panel"
        >
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center">
              <input
                type="text"
                placeholder="Search premium hinges, handles, telescopic channels..."
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                className="w-full bg-slate-800 text-white pl-4 pr-12 py-3 rounded-lg border border-slate-700 focus:outline-none focus:border-amber-500 text-sm placeholder-slate-400"
                autoFocus
              />
              <button
                type="submit"
                className="absolute right-3 p-1.5 bg-slate-700 hover:bg-amber-500 hover:text-slate-900 rounded-md text-slate-300 transition-colors cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            <div className="mt-2 text-xs text-neutral-400 pl-1 flex items-center justify-between">
              <span>Press enter or click arrow to search across products</span>
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="text-amber-500 hover:text-amber-400 underline"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Responsive mobile slide-out menu */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden bg-slate-900 border-b border-slate-800 py-4 px-6 animate-in fade-in duration-200"
          id="mobile-nav-panel"
        >
          <p className="text-[10px] tracking-[0.15em] text-amber-500 uppercase font-mono mb-3">Glitton Hardware Menu</p>
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => {
              const isActive = activePage === item.value;
              return (
                <button
                  key={item.value}
                  id={`mobile-nav-btn-${item.value}`}
                  onClick={() => handleNavClick(item.value)}
                  className={`text-left text-base text-slate-300 hover:text-amber-400 transition-colors py-2 border-b border-slate-800/50 cursor-pointer ${
                    isActive ? 'font-bold text-amber-500 border-l-4 border-l-amber-500 pl-3' : 'pl-1'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
          {/* Small mobile branding header panel info */}
          <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-neutral-500 flex flex-col space-y-1">
            <span className="font-semibold text-neutral-400">FAVIONA OVERSEAS EXIM PVT. LTD.</span>
            <span>Jamshedpur, Jharkhand</span>
            <span>+91 9204110077</span>
          </div>
        </div>
      )}
    </header>
  );
}
