/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, Filter, MessageCircle, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Product, ProductCategory } from '../types';
import { PRODUCTS, PRODUCT_CATEGORIES } from '../data';

interface ProductsPageProps {
  initialCategoryFilter?: ProductCategory | null;
  clearCategoryFilter: () => void;
  searchText: string;
  setSearchText: (text: string) => void;
}

const PINNED_COUNT = 5; // "All" + 4 category pills always visible

export default function ProductsPage({
  initialCategoryFilter,
  clearCategoryFilter,
  searchText,
  setSearchText
}: ProductsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');
  const [selectedBrand, setSelectedBrand] = useState<'ALL' | 'GLITTON' | 'FLAMENCO'>('ALL');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    if (initialCategoryFilter) {
      setSelectedCategory(initialCategoryFilter);
      clearCategoryFilter();
    }
  }, [initialCategoryFilter, clearCategoryFilter]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesSearch =
        searchText.trim() === '' ||
        p.name.toLowerCase().includes(searchText.toLowerCase()) ||
        p.specification.toLowerCase().includes(searchText.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
      const matchesBrand = selectedBrand === 'ALL' || p.brand === selectedBrand;
      return matchesSearch && matchesCategory && matchesBrand;
    });
  }, [searchText, selectedCategory, selectedBrand]);

  // Only categories that have products
  const activeCategories = useMemo(() =>
    PRODUCT_CATEGORIES
      .map((cat) => ({ cat, count: PRODUCTS.filter((p) => p.category === cat.id).length }))
      .filter(({ count }) => count > 0),
    []
  );

  const pinnedCategories = activeCategories.slice(0, PINNED_COUNT - 1); // -1 because "All" takes 1 slot
  const overflowCategories = activeCategories.slice(PINNED_COUNT - 1);
  const selectedInOverflow = overflowCategories.some(({ cat }) => cat.id === selectedCategory);

  const handleWhatsAppInquiry = (product: Product, e?: React.MouseEvent) => {
    e?.stopPropagation();
    const text = `Hi, I am interested in inquiring about the following product from your website:
- *Product Name:* ${product.name}
- *Specification:* ${product.specification}
- *Brand:* ${product.brand}

Please let me know the pricing and minimum order quantity. Thank you!`;
    const url = `https://wa.me/919204110077?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noreferrer');
  };

  const pillBase = 'whitespace-nowrap px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer border transition-all';
  const pillActive = 'bg-slate-900 border-slate-900 text-amber-500 shadow';
  const pillInactive = 'bg-slate-50 border-slate-200 text-slate-600 hover:border-amber-500/50';

  return (
    <div className="bg-[#f8fafc] py-12 px-4 sm:px-6 lg:px-8" id="products-page-container">
      <div className="max-w-7xl mx-auto">

        {/* Page title */}
        <div className="text-center mb-10">
          <span className="text-amber-500 font-bold text-xs tracking-widest uppercase mb-1.5 block font-mono">FAVIONA EXPORT STANDARDS</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-display uppercase">
            Product Catalog
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-3 mb-4 rounded-full"></div>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto font-sans leading-relaxed">
            Browse our range of premium furniture fittings and architectural hardware.
          </p>
        </div>

        {/* Controls Panel */}
        <div className="border-b border-slate-200 pb-8 mb-10 space-y-6" id="products-control-panel">

          {/* Search + Brand row */}
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative w-full lg:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search by name or spec..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full bg-slate-100 border border-slate-200/50 pl-10 pr-10 py-2.5 rounded-xl text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-all text-slate-900 font-medium"
              />
              {searchText && (
                <button
                  onClick={() => setSearchText('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-0.5 rounded-full"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex gap-1.5 bg-slate-100 p-1.5 rounded-xl w-full sm:w-auto">
              {(['ALL', 'GLITTON', 'FLAMENCO'] as const).map((brand) => (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(brand)}
                  className={`flex-1 sm:flex-initial px-5 py-2 rounded-lg text-xs font-bold tracking-widest transition-all cursor-pointer ${
                    selectedBrand === brand
                      ? 'bg-slate-900 text-amber-500 shadow-md border-b-2 border-amber-500'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          {/* Category filter row — 5 pinned + "More ▾" dropdown */}
          <div className="border-t border-slate-100 pt-4">
            <span className="text-xs tracking-[0.2em] uppercase font-bold text-slate-400 block mb-3 font-mono">
              Filter by Product Range
            </span>

            <div className="flex flex-wrap gap-2 items-center">
              {/* "All" pill */}
              <button
                onClick={() => setSelectedCategory('all')}
                className={`${pillBase} ${selectedCategory === 'all' ? pillActive : pillInactive}`}
              >
                All ({PRODUCTS.length})
              </button>

              {/* First N pinned category pills */}
              {pinnedCategories.map(({ cat, count }) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as ProductCategory)}
                  className={`${pillBase} ${selectedCategory === cat.id ? pillActive : pillInactive}`}
                >
                  {cat.name} ({count})
                </button>
              ))}

              {/* "More" dropdown — only if overflow exists */}
              {overflowCategories.length > 0 && (
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen((o) => !o)}
                    className={`${pillBase} flex items-center gap-1.5 ${
                      selectedInOverflow ? pillActive : pillInactive
                    }`}
                  >
                    {selectedInOverflow
                      ? (() => {
                          const found = overflowCategories.find(({ cat }) => cat.id === selectedCategory);
                          return found ? `${found.cat.name} (${found.count})` : 'More';
                        })()
                      : `More (${overflowCategories.length})`}
                    {dropdownOpen
                      ? <ChevronUp className="w-3 h-3 flex-shrink-0" />
                      : <ChevronDown className="w-3 h-3 flex-shrink-0" />}
                  </button>

                  {dropdownOpen && (
                    <div className="absolute left-0 top-full mt-2 z-50 bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden min-w-[220px]">
                      {/* Header */}
                      <div className="px-4 py-2.5 border-b border-slate-100 bg-slate-50">
                        <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase font-mono">
                          More Categories
                        </span>
                      </div>
                      {/* Scrollable list */}
                      <div className="max-h-72 overflow-y-auto py-1">
                        {overflowCategories.map(({ cat, count }) => (
                          <button
                            key={cat.id}
                            onClick={() => {
                              setSelectedCategory(cat.id as ProductCategory);
                              setDropdownOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2.5 text-xs font-bold uppercase tracking-wider flex items-center justify-between gap-4 transition-colors cursor-pointer ${
                              selectedCategory === cat.id
                                ? 'bg-slate-900 text-amber-500'
                                : 'text-slate-700 hover:bg-amber-50 hover:text-amber-700'
                            }`}
                          >
                            <span>{cat.name}</span>
                            <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                              selectedCategory === cat.id
                                ? 'bg-amber-500/20 text-amber-400'
                                : 'bg-slate-100 text-slate-500'
                            }`}>
                              {count}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div>
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-white border-b-4 border-slate-300 rounded-3xl p-8 shadow-sm">
              <Filter className="w-10 h-10 mx-auto text-slate-300 stroke-[1.5] mb-3" />
              <p className="text-slate-600 font-semibold text-base mb-1">No products found</p>
              <button
                onClick={() => {
                  setSearchText('');
                  setSelectedCategory('all');
                  setSelectedBrand('ALL');
                }}
                className="mt-4 px-5 py-2.5 bg-slate-900 text-amber-500 text-xs font-bold rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="group flex flex-col cursor-pointer rounded-xl bg-white border border-slate-200 overflow-hidden hover:border-amber-500 hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-square w-full overflow-hidden bg-slate-100 relative flex items-center justify-center p-3">
                    <span className={`absolute top-3 left-3 z-10 text-[10px] font-black tracking-[0.2em] px-2.5 py-1 rounded-md shadow ${
                      product.brand === 'GLITTON' ? 'bg-slate-900 border border-amber-500/40 text-amber-500' : 'bg-amber-500 text-slate-900'
                    }`}>
                      {product.brand}
                    </span>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="p-4 flex-grow flex flex-col">
                    <span className="text-[10px] text-amber-600 font-bold tracking-widest uppercase block mb-1">
                      {product.categoryName}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-amber-600 transition-colors">
                      {product.name}
                    </h3>
                    {product.specification && (
                      <span className="text-xs text-slate-500 font-mono mt-1 mb-4 block">
                        {product.specification}
                      </span>
                    )}
                    {!product.specification && <div className="mb-4" />}

                    <button
                      onClick={(e) => handleWhatsAppInquiry(product, e)}
                      className="mt-auto w-full inline-flex items-center justify-center space-x-2 bg-slate-900 hover:bg-slate-800 text-amber-500 hover:text-white text-xs font-black uppercase tracking-wider py-2.5 px-3 rounded-lg transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-amber-500 text-slate-900 stroke-[1.5]" />
                      <span>Inquire on WhatsApp</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal */}
        {selectedProduct && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          >
            <div
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden relative border-t-8 border-amber-500"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-3 right-3 p-1.5 bg-white/90 hover:bg-amber-500 hover:text-slate-900 text-slate-600 rounded-full transition-colors z-20 cursor-pointer shadow"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full bg-slate-100">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-auto object-contain max-h-[360px] mx-auto"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 space-y-4 text-left">
                <div>
                  <span className={`inline-block text-[10px] font-black tracking-[0.2em] px-2.5 py-1 rounded mb-2 ${
                    selectedProduct.brand === 'GLITTON' ? 'bg-slate-900 text-amber-500' : 'bg-amber-500 text-slate-900'
                  }`}>
                    {selectedProduct.brand}
                  </span>
                  <h3 className="text-lg font-black text-slate-900 leading-snug">
                    {selectedProduct.name}
                  </h3>
                  <span className="text-xs font-mono text-slate-400 mt-1 block">
                    {selectedProduct.specification}
                  </span>
                </div>

                <button
                  onClick={() => {
                    handleWhatsAppInquiry(selectedProduct);
                    setSelectedProduct(null);
                  }}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-slate-900 hover:bg-slate-800 text-amber-500 hover:text-white text-sm font-bold py-3.5 px-4 rounded-xl transition-all shadow-lg cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-amber-500 text-slate-900 stroke-[1.5]" />
                  <span>Inquire on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
