/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';
import SEO from './SEO';

export default function NotFoundPage() {
  return (
    <div className="bg-[#f8fafc] py-24 px-4 sm:px-6 lg:px-8 text-center" id="not-found-page">
      <SEO
        title="Page Not Found | Faviona Overseas"
        description="The page you're looking for doesn't exist."
        path="/404"
        noindex
      />
      <div className="max-w-md mx-auto space-y-6">
        <span className="text-6xl font-black text-slate-200 font-display block">404</span>
        <h1 className="text-xl font-black text-slate-900">Page Not Found</h1>
        <p className="text-sm text-slate-500">
          The page you're looking for may have been moved or no longer exists.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-amber-500 hover:text-white text-xs font-black uppercase tracking-widest py-3 px-6 rounded-xl transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 bg-slate-50 border border-slate-200 hover:border-amber-500 text-slate-700 text-xs font-black uppercase tracking-widest py-3 px-6 rounded-xl transition-all"
          >
            <Search className="w-4 h-4" />
            <span>Browse Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
