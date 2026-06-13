/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Search, Filter, MessageCircle, X, Check, Eye } from 'lucide-react';
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

  // Synchronize category selection if triggered from outside (homepage category click)
  useEffect(() => {
    if (initialCategoryFilter) {
      setSelectedCategory(initialCategoryFilter);
      clearCategoryFilter(); // Clear trigger to allow manual navigation
    }
  }, [initialCategoryFilter, clearCategoryFilter]);

  // Filter products based on search text, category, and brand
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesSearch =
         searchText.trim() === '' ||
         p.name.toLowerCase().includes(searchText.toLowerCase()) ||
         p.itemCode.toLowerCase().includes(searchText.toLowerCase()) ||
         p.description.toLowerCase().includes(searchText.toLowerCase()) ||
         p.finish.toLowerCase().includes(searchText.toLowerCase()) ||
         p.material.toLowerCase().includes(searchText.toLowerCase());

      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
      const matchesBrand = selectedBrand === 'ALL' || p.brand === selectedBrand;

      return matchesSearch && matchesCategory && matchesBrand;
    });
  }, [searchText, selectedCategory, selectedBrand]);

  const handleWhatsAppInquiry = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid opening modal if button is clicked
    const text = `Hi, I am interested in inquiring about the following product from your website:
- *Product Name:* ${product.name}
- *Item Code:* ${product.itemCode}
- *Finish:* ${product.finish}
- *Brand:* ${product.brand}

Please let me know the pricing and minimum order quantity. Thank you!`;
    const url = `https://wa.me/919204110077?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noreferrer');
  };

  return (
    <div className="bg-[#f8fafc] py-12 px-4 sm:px-6 lg:px-8" id="products-page-container">
      <div className="max-w-7xl mx-auto">
        
        {/* Page title and description */}
        <div className="text-center mb-10">
          <span className="text-amber-500 font-bold text-xs tracking-widest uppercase mb-1.5 block font-mono">FAVIONA EXPORT STANDARDS</span>
          <h2 className="text-2xl sm:text-3.5xl font-black text-slate-900 tracking-tight font-display uppercase">
            Product Catalog & Specifications
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-3 mb-4 rounded-full"></div>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto font-sans leading-relaxed">
            Discover precision-engineered German-certified auto hinges, heavy-duty telescopics, designer handles, and modern hardware options.
          </p>
        </div>

        {/* Controls Panel (Search and Filters) */}
        <div className="border-b border-slate-200 pb-8 mb-10 space-y-6" id="products-control-panel">
          
          {/* Row 1: Inline Search Input & Brand Filter */}
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* INLINE PRODUCT SEARCH */}
            <div className="relative w-full lg:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search by code, material, finish, or name..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full bg-slate-100 border border-slate-200/50 pl-10 pr-10 py-2.5 rounded-xl text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-all text-slate-900 font-medium"
                id="inline-product-search-input"
              />
              {searchText && (
                <button
                  onClick={() => setSearchText('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-0.5 rounded-full"
                  title="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* BRAND FILTER TABS */}
            <div className="flex gap-1.5 bg-slate-100 p-1.5 rounded-xl w-full sm:w-auto overflow-x-auto" id="brand-filters-container">
              {(['ALL', 'GLITTON', 'FLAMENCO'] as const).map((brand) => (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(brand)}
                  className={`flex-1 sm:flex-initial px-5 py-2 rounded-lg text-xs font-bold tracking-widest transition-all cursor-pointer ${
                    selectedBrand === brand
                      ? 'bg-slate-900 text-amber-500 shadow-md border-b-2 border-amber-500'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                  }`}
                  id={`filter-brand-${brand}`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          {/* Row 2: Category Slider Filter */}
          <div className="border-t border-slate-100 pt-4" id="category-filters-panel">
            <span className="text-xs tracking-[0.2em] uppercase font-bold text-slate-400 block mb-3 font-mono">
              Filter by Product Range
            </span>
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none" id="category-scroller">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`grow sm:grow-0 whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer border transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-slate-900 border-slate-900 text-amber-500 shadow'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-amber-500/50'
                }`}
                id="filter-cat-all"
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
                    id={`filter-cat-${cat.id}`}
                  >
                    {cat.name} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Products Results List / Grid */}
        <div id="products-results-area">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-white border-b-4 border-slate-300 rounded-3xl p-8 shadow-sm">
              <Filter className="w-10 h-10 mx-auto text-slate-300 stroke-[1.5] mb-3" />
              <p className="text-slate-600 font-semibold text-base mb-1">No products found</p>
              <p className="text-slate-400 text-sm max-w-sm mx-auto">
                We couldn't find matches for "{searchText}" in the selected category or brand. Try adjusting your filters.
              </p>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12" id="product-grid">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="group flex flex-col cursor-pointer relative border-b border-slate-200 pb-6 transition-all duration-300 animate-fade-in"
                  id={`product-card-${product.id}`}
                >
                  {/* Brand Tag overlay on Image */}
                  <span className={`absolute top-3 left-3 z-10 text-[10px] font-black tracking-[0.2em] px-2.5 py-1 rounded-md text-white shadow ${
                    product.brand === 'GLITTON' ? 'bg-slate-900 border border-amber-500/40 text-amber-500' : 'bg-amber-500 text-slate-900'
                  }`}>
                    {product.brand}
                  </span>

                  {/* Thumbnail Image display */}
                  <div className="aspect-video w-full overflow-hidden bg-slate-100 relative rounded-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/35 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="bg-amber-500 text-slate-900 text-xs font-black px-3.5 py-2 rounded shadow-md flex items-center space-x-1.5 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 tracking-wider">
                        <Eye className="w-4 h-4" />
                        <span>VIEW TECHNICAL SHEETS</span>
                      </span>
                    </div>
                  </div>

                  {/* Content box */}
                  <div className="pt-4 flex-grow flex flex-col justify-between">
                    <div>
                      {/* Sub-label showing category */}
                      <span className="text-xs text-amber-650 font-bold tracking-widest uppercase block mb-1">
                        {product.categoryName}
                      </span>
                      
                      {/* Name */}
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug group-hover:text-amber-600 transition-colors">
                        {product.name}
                      </h3>

                      {/* Code */}
                      <div className="mt-2 flex items-center space-x-2">
                        <span className="text-xs font-bold font-mono bg-slate-150 px-2.5 py-0.5 rounded border border-slate-200/60 text-slate-700">
                          CODE: {product.itemCode}
                        </span>
                      </div>

                      {/* Quick specs overview line */}
                      <div className="mt-4 space-y-2 text-sm text-slate-600 border-t border-slate-100 pt-3">
                        <div className="flex justify-between">
                          <span className="font-bold text-slate-400">Finish:</span>
                          <span className="text-slate-800 text-right font-semibold">{product.finish}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-bold text-slate-400">Material:</span>
                          <span className="text-slate-800 text-right font-semibold">{product.material}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-bold text-slate-400">Size:</span>
                          <span className="text-slate-800 text-right font-semibold font-mono text-xs">{product.size}</span>
                        </div>
                      </div>
                    </div>

                    {/* WhatsApp Quick Action Button */}
                    <div className="mt-5 pt-3 border-t border-slate-100">
                      <button
                        onClick={(e) => handleWhatsAppInquiry(product, e)}
                        className="w-full inline-flex items-center justify-center space-x-2 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-amber-500 hover:text-white text-xs font-black uppercase tracking-wider py-2.5 px-3 rounded-xl transition-all shadow-sm cursor-pointer"
                        id={`btn-wa-${product.id}`}
                      >
                        <MessageCircle className="w-4 h-4 fill-amber-500 text-slate-900 stroke-[1.5]" />
                        <span>INQUIRE PRICE SHEET</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Detail Specifications Modal Overlay */}
        {selectedProduct && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in"
            onClick={() => setSelectedProduct(null)}
            id="product-details-modal"
          >
            <div 
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative border-t-8 border-amber-500 animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button top-right */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-1.5 bg-slate-100 hover:bg-amber-500 hover:text-slate-900 text-slate-500 rounded-full transition-colors z-20 cursor-pointer"
                aria-label="Close dialog"
                id="btn-close-modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Photo Showcase banner */}
              <div className="aspect-video w-full overflow-hidden bg-slate-100 relative">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-5 left-6 text-white pr-10">
                  <span className={`text-[10px] font-black tracking-[0.2em] px-3 py-1 rounded text-slate-900 uppercase shadow-md ${
                    selectedProduct.brand === 'GLITTON' ? 'bg-amber-500' : 'bg-white'
                  }`}>
                    {selectedProduct.brand} ENGINEERED
                  </span>
                  <h3 className="text-lg sm:text-2xl font-black text-white mt-2 font-display uppercase tracking-tight">
                    {selectedProduct.name}
                  </h3>
                </div>
              </div>

              {/* Modal Details content space */}
              <div className="p-6 md:p-8 space-y-6 text-left">
                {/* Product Description */}
                <div>
                  <h4 className="text-[10px] font-bold text-amber-600 uppercase tracking-widest font-mono">
                    Engineering Specs Overview
                  </h4>
                  <p className="mt-1.5 text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                    {selectedProduct.description}
                  </p>
                </div>

                {/* Detailed Spec table */}
                <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div>
                    <span className="text-[10px] uppercase tracking-wide text-slate-400 font-bold font-mono">Origin / Brand</span>
                    <span className="block text-sm font-extrabold text-slate-800">{selectedProduct.brand} Germany Std</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wide text-slate-400 font-bold font-mono">Industry SKU Code</span>
                    <span className="block text-sm font-extrabold text-slate-800 font-mono text-amber-600">{selectedProduct.itemCode}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wide text-slate-400 font-bold font-mono">Core Alloy / Material</span>
                    <span className="block text-sm font-semibold text-slate-800">{selectedProduct.material}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wide text-slate-400 font-bold font-mono">Protective Surface Finish</span>
                    <span className="block text-sm font-semibold text-slate-800">{selectedProduct.finish}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-[10px] uppercase tracking-wide text-slate-400 font-bold font-mono">Operational Sizing Matrix</span>
                    <span className="block text-sm font-semibold text-slate-800 font-mono text-xs">{selectedProduct.size}</span>
                  </div>
                </div>

                {/* Key Features Bullet list */}
                <div>
                  <h4 className="text-[10px] font-bold text-amber-600 uppercase tracking-widest font-mono mb-2">
                    Industrial Capabilities & Testing
                  </h4>
                  <ul className="space-y-2">
                    {selectedProduct.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-700">
                        <span className="p-0.5 bg-amber-100 rounded text-amber-600 mr-2 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Action triggers */}
                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={(e) => {
                      handleWhatsAppInquiry(selectedProduct, e);
                      setSelectedProduct(null);
                    }}
                    className="flex-1 inline-flex items-center justify-center space-x-2 bg-slate-900 border border-slate-800 text-amber-500 hover:text-white text-sm font-bold py-3.5 px-4 rounded-xl transition-all shadow-lg active:scale-98 cursor-pointer"
                    id="modal-wa-primary-inquiry-btn"
                  >
                    <MessageCircle className="w-5 h-5 fill-amber-500 text-slate-900 stroke-[1.5]" />
                    <span>INQUIRE BULK QUOTATION (WHATSAPP)</span>
                  </button>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="px-6 py-3.5 border border-slate-200 hover:bg-slate-50 rounded-xl text-xs font-bold text-slate-600 transition-colors cursor-pointer uppercase tracking-wider"
                  >
                    Dismiss Specification Sheets
                  </button>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
