/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import Homepage from './components/Homepage';
import ProductsPage from './components/ProductsPage';
import ProductDetailPage from './components/ProductDetailPage';
import CatalogPage from './components/CatalogPage';
import ContactPage from './components/ContactPage';
import NotFoundPage from './components/NotFoundPage';
import Footer from './components/Footer';
import WhatsappFloat from './components/WhatsappFloat';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div
      className="flex flex-col min-h-screen bg-[#fcfcfc] text-neutral-900 selection:bg-neutral-900 selection:text-white"
      id="main-app-container"
    >
      {/* Resets scroll position on every route change */}
      <ScrollToTop />

      {/* Dynamic Header on top */}
      <Header />

      {/* Hero Banner matching screenshots on all pages */}
      <HeroBanner />

      {/* Main Core View Router */}
      <main className="flex-grow animate-fade-in" id="main-content-router">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:slug" element={<ProductDetailPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Sticky footer for usual footer buttons changing pages */}
      <Footer />

      {/* Direct floating WhatsApp button on bottom right */}
      <WhatsappFloat />
    </div>
  );
}
