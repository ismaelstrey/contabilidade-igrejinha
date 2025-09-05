import React from 'react'
import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
}

const SEO: React.FC<SEOProps> = ({
  title = 'Contabiligrejinha - Contabilidade para Pequenas Empresas',
  description = 'Escritório de contabilidade especializado em pequenas empresas. Serviços contábeis completos: abertura de empresa, departamento pessoal, fiscal e tributário. Mais de 15 anos de experiência.',
  keywords = 'contabilidade, pequenas empresas, escritório contábil, serviços contábeis, abertura de empresa, departamento pessoal, fiscal, tributário, MEI, Simples Nacional, consultoria empresarial',
  image = 'https://contabiligrejinha.com.br/og-image.jpg',
  url = 'https://contabiligrejinha.com.br/',
  type = 'website'
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Contabiligrejinha" />
      <meta name="theme-color" content="#2563eb" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Contabiligrejinha" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AccountingService",
          "name": "Contabiligrejinha",
          "description": description,
          "url": url,
          "telephone": "+55-11-99999-9999",
          "email": "contato@contabiligrejinha.com.br",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rua das Flores, 123",
            "addressLocality": "São Paulo",
            "addressRegion": "SP",
            "postalCode": "01234-567",
            "addressCountry": "BR"
          },
          "openingHours": "Mo-Fr 08:00-18:00",
          "priceRange": "$$",
          "serviceType": ["Contabilidade Geral", "Abertura de Empresa", "Departamento Pessoal", "Fiscal e Tributário"],
          "areaServed": "São Paulo, SP",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "150"
          }
        })}
      </script>
    </Helmet>
  )
}

export default SEO