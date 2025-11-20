import './globals.css'

export const metadata = {
  title: 'Ciengarnia',
  description: 'Curated collection of fine books',
  robots: 'index, follow',
}

export default function RootLayout({ children }) {
  // Schema.org structured data for Organization
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ciengarnia',
    url: 'https://ciengarnia.com',
    logo: 'https://ciengarnia.com/logo.png',
    description: 'Ciengarnia is a family-run bookstore dedicated to curating exceptional literary works for discerning collectors and readers.',
    contact: {
      '@type': 'ContactPoint',
      telephone: '+1 (555) 123-4567',
      contactType: 'Customer Service',
      email: 'contact@ciengarnia.com',
    },
    sameAs: [],
  };

  // Schema.org structured data for WebSite (enables search box in results)
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ciengarnia',
    url: 'https://ciengarnia.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://ciengarnia.com?search={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}