/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronRight, MessageCircle } from 'lucide-react';
import { PRODUCTS } from '../data';
import { getProductBySlug, createProductSlug } from '../utils/slug';
import SEO from './SEO';

const SITE_URL = 'https://www.faviona.in';

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;

  // Unknown / stale slug -> send to the products listing instead of a dead end
  if (!product) {
    return <Navigate to="/products" replace />;
  }

  // If the slug in the URL doesn't match our canonical slug (e.g. old bookmark),
  // redirect to the correct one so we never have two URLs for the same product.
  const canonicalSlug = createProductSlug(product);
  if (slug !== canonicalSlug) {
    return <Navigate to={`/products/${canonicalSlug}`} replace />;
  }

  const relatedProducts = PRODUCTS
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleWhatsAppInquiry = () => {
    const text = `Hi, I am interested in inquiring about the following product from your website:
- *Product Name:* ${product.name}
- *Specification:* ${product.specification}
- *Brand:* ${product.brand}

Please let me know the pricing and minimum order quantity. Thank you!`;
    const url = `https://wa.me/919204110077?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noreferrer');
  };

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description || `${product.name} — ${product.specification}. Premium ${product.brand} furniture hardware from Faviona Overseas.`,
    image: `${SITE_URL}${product.image}`,
    brand: {
      '@type': 'Brand',
      name: product.brand,
    },
    category: product.categoryName,
    sku: product.id,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'INR',
      url: `${SITE_URL}/products/${canonicalSlug}`,
      seller: {
        '@type': 'Organization',
        name: 'Faviona Overseas Exim Pvt. Ltd.',
      },
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE_URL}/products` },
      { '@type': 'ListItem', position: 3, name: product.categoryName, item: `${SITE_URL}/products?category=${product.category}` },
      { '@type': 'ListItem', position: 4, name: product.name, item: `${SITE_URL}/products/${canonicalSlug}` },
    ],
  };

  const seoTitle = `${product.name} | ${product.brand} | Faviona Overseas`;
  const seoDescription = product.description
    ? product.description
    : `${product.name} (${product.specification}) — premium ${product.brand} furniture hardware. Certified export quality from Faviona Overseas, Jamshedpur.`;

  return (
    <div className="bg-[#f8fafc] py-10 px-4 sm:px-6 lg:px-8" id="product-detail-page">
      <SEO
        title={seoTitle}
        description={seoDescription}
        path={`/products/${canonicalSlug}`}
        image={`${SITE_URL}${product.image}`}
        structuredData={[productJsonLd, breadcrumbJsonLd]}
      />

      <div className="max-w-5xl mx-auto">

        {/* Breadcrumb */}
        <nav className="flex items-center flex-wrap gap-1.5 text-xs text-slate-500 mb-8 font-medium" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
          <Link to="/products" className="hover:text-amber-600 transition-colors">Products</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
          <Link to={`/products?category=${product.category}`} className="hover:text-amber-600 transition-colors">
            {product.categoryName}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
          <span className="text-slate-800 font-bold truncate max-w-[200px]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">

          {/* Image */}
          <div className="bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center p-6 relative">
            <span className={`absolute top-4 left-4 z-10 text-[10px] font-black tracking-[0.2em] px-2.5 py-1 rounded-md shadow ${
              product.brand === 'GLITTON' ? 'bg-slate-900 border border-amber-500/40 text-amber-500' : 'bg-amber-500 text-slate-900'
            }`}>
              {product.brand}
            </span>
            <img
              src={product.image}
              alt={product.name}
              className="max-w-full max-h-[420px] w-auto h-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col text-left">
            <span className="text-xs text-amber-600 font-bold tracking-widest uppercase block mb-2 font-mono">
              {product.categoryName}
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug mb-3 font-display">
              {product.name}
            </h1>

            {product.specification && (
              <div className="mb-4">
                <span className="text-[10px] tracking-widest text-slate-400 font-bold uppercase block mb-1 font-mono">Specification</span>
                <span className="text-sm text-slate-700 font-mono bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 inline-block">
                  {product.specification}
                </span>
              </div>
            )}

            {product.description && (
              <p className="text-sm text-slate-600 leading-relaxed mb-6">{product.description}</p>
            )}

            <div className="mt-auto pt-4">
              <button
                onClick={handleWhatsAppInquiry}
                className="w-full inline-flex items-center justify-center space-x-2 bg-slate-900 hover:bg-slate-800 text-amber-500 hover:text-white text-sm font-black uppercase tracking-wider py-3.5 px-4 rounded-xl transition-all shadow-lg cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-amber-500 text-slate-900 stroke-[1.5]" />
                <span>Inquire on WhatsApp</span>
              </button>
              <p className="text-[11px] text-slate-400 mt-2 text-center">
                Contact our team for pricing, MOQ, and bulk export quotes.
              </p>
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-slate-800 mb-5 font-display">
              More in {product.categoryName}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {relatedProducts.map((rp) => (
                <Link
                  key={rp.id}
                  to={`/products/${createProductSlug(rp)}`}
                  className="group flex flex-col rounded-xl bg-white border border-slate-200 overflow-hidden hover:border-amber-500 hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-square w-full bg-slate-50 flex items-center justify-center p-3">
                    <img
                      src={rp.image}
                      alt={rp.name}
                      loading="lazy"
                      className="max-w-full max-h-full w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors leading-snug">
                      {rp.name}
                    </h3>
                    {rp.specification && (
                      <span className="text-[11px] text-slate-500 font-mono">{rp.specification}</span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
