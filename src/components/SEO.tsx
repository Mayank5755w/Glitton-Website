/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://www.faviona.in';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.jpg`; // add this image to /public (1200x630px recommended)

interface SEOProps {
  title: string;
  description: string;
  /** Path only, e.g. "/products" or "/products/some-slug". Leave empty for homepage. */
  path?: string;
  image?: string;
  /** Set true for pages that shouldn't be indexed (e.g. a not-found page) */
  noindex?: boolean;
  /** Optional JSON-LD structured data object(s) */
  structuredData?: object | object[];
}

export default function SEO({
  title,
  description,
  path = '',
  image = DEFAULT_OG_IMAGE,
  noindex = false,
  structuredData,
}: SEOProps) {
  const canonicalUrl = `${SITE_URL}${path}`;
  const jsonLdList = structuredData
    ? Array.isArray(structuredData)
      ? structuredData
      : [structuredData]
    : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Faviona Overseas" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLdList.map((data, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
}
