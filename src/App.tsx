/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ActivePage, ProductCategory } from './types';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import Homepage from './components/Homepage';
import ProductsPage from './components/ProductsPage';
import CatalogPage from './components/CatalogPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import WhatsappFloat from './components/WhatsappFloat';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [searchText, setSearchText] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<ProductCategory | null>(null);

  // Synchronize routing based on URL Hash for real page-level SEO feel
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/products') || hash.startsWith('#products')) {
        setActivePage('products');
      } else if (hash.startsWith('#/catalog') || hash.startsWith('#catalog')) {
        setActivePage('catalog');
      } else if (hash.startsWith('#/contact') || hash.startsWith('#contact')) {
        setActivePage('contact');
      } else {
        setActivePage('home');
      }
    };

    // Listen to hash changes
    window.addEventListener('hashchange', handleHashChange);
    // Execute initially on page load
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Update URL Hash and scroll when activePage updates
  const handlePageChange = (page: ActivePage) => {
    window.location.hash = `#/${page}`;
    setActivePage(page);
  };

  const handleCategorySelection = (category: ProductCategory) => {
    setCategoryFilter(category);
    handlePageChange('products');
  };

  const clearCategoryFilter = () => {
    setCategoryFilter(null);
  };

  const handleHeaderSearch = (text: string) => {
    setSearchText(text);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfc] text-neutral-900 selection:bg-neutral-900 selection:text-white" id="main-app-container">
      
      {/* Dynamic Header on top */}
      <Header 
        activePage={activePage} 
        setActivePage={handlePageChange} 
        onSearch={handleHeaderSearch}
      />

      {/* Hero Banner Banner matching screenshots on all pages */}
      <HeroBanner />

      {/* Main Core View Router */}
      <main className="flex-grow animate-fade-in" id="main-content-router">
        {activePage === 'home' && (
          <Homepage 
            onCategorySelect={handleCategorySelection}
            setActivePage={handlePageChange}
          />
        )}
        {activePage === 'products' && (
          <ProductsPage 
            initialCategoryFilter={categoryFilter}
            clearCategoryFilter={clearCategoryFilter}
            searchText={searchText}
            setSearchText={setSearchText}
          />
        )}
        {activePage === 'catalog' && (
          <CatalogPage />
        )}
        {activePage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Sticky footer for usual footer buttons changing pages */}
      <Footer 
        setActivePage={handlePageChange} 
        activePage={activePage}
      />

      {/* Direct floating WhatsApp button on bottom right */}
      <WhatsappFloat />
    </div>
  );
}
