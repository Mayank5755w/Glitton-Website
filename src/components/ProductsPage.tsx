/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Search, Filter, MessageCircle, X } from 'lucide-react';
import { Product, ProductCategory } from '../types';
import { PRODUCTS, PRODUCT_CATEGORIES } from '../data';

interface ProductsPageProps {
  initialCategoryFilter?: ProductCategory | null;
  clearCategoryFilter: () => void;
  searchText: string;
  setSearchText: (text: string) => void;
}

export default function ProductsPage({
  initialCategoryFilter,
  clearCategoryFilter,
  searchText,
  setSearchText
}: ProductsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');
  const [selectedBrand, setSelectedBrand] = useState<'ALL' | 'GLITTON' | 'FLAMENCO'>('ALL');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

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
         p.itemCode.toLowerCase().includes(searchText.toLowerCase());

      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
      const matchesBrand = selectedBrand === 'ALL' || p.brand === selectedBrand;

      return matchesSearch && matchesCategory && matchesBrand;
    });
  }, [searchText, selectedCategory, selectedBrand]);

  const handleWhatsAppInquiry = (product: Product, e?: React.MouseEvent) => {
    e?.stopPropagation();
    const text = `Hi, I am interested in inquiring about the following product from your website:
- *Product Name:* ${product.name}
- *Item Code:* ${product.itemCode}
- *Brand:* ${product.brand}

Please let me know the pricing and minimum order quantity. Thank you!`;
    const url = `https://wa.me/919204110077?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noreferrer');
  };

  return (
    <div className="bg-[#f8fafc] py-12 px-4 sm:px-6 lg:px-8" id="products-page-container">
      <div className="max-w-7xl mx-auto">

        {/* Page title */}
        <div className="text-center mb-10">
          <span className="text-amber-500 font-bold text-xs tracking-widest uppercase mb-1.5 block font-mono">FAVIONA EXPORT STANDARDS</span>
          <h2 className="text-2xl sm:text-3.5xl font-black text-slate-900 tracking-tight font-display uppercase">
            Product Catalog
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-3 mb-4 rounded-full"></div>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto font-sans leading-relaxed">
            Browse our range of premium furniture fittings and architectural hardware.
          </p>
        </div>

        {/* Controls Panel */}
        <div className="border-b border-slate-200 pb-8 mb-10 space-y-6" id="products-control-panel">

          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative w-full lg:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search by name or code..."
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

            <div className="flex gap-1.5 bg-slate-100 p-1.5 rounded-xl w-full sm:w-auto overflow-x-auto">
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

          <div className="border-t border-slate-100 pt-4">
            <span className="text-xs tracking-[0.2em] uppercase font-bold text-slate-400 block mb-3 font-mono">
              Filter by Product Range
            </span>
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`grow sm:grow-0 whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer border transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-slate-900 border-slate-900 text-amber-500 shadow'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-amber-500/50'
                }`}
              >
                All Categories ({PRODUCTS.length})
              </button>

              {PRODUCT_CATEGORIES.map((cat) => {
                const count = PRODUCTS.filter((p) => p.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer border transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-slate-900 border-slate-900 text-amber-500 shadow'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-amber-500/50'
                    }`}
                  >
                    {cat.name} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Product Grid — minimal cards */}
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
                  {/* Image — full image always visible, no cropping, on both mobile and desktop */}
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

                  {/* Minimal info: name only */}
                  <div className="p-4 flex-grow flex flex-col">
                    <span className="text-[10px] text-amber-600 font-bold tracking-widest uppercase block mb-1">
                      {product.categoryName}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-amber-600 transition-colors mb-4">
                      {product.name}
                    </h3>

                    {/* WhatsApp button */}
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

        {/* Minimal Modal: name + image + WhatsApp only */}
        {selectedProduct && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in"
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
                    Code: {selectedProduct.itemCode}
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
