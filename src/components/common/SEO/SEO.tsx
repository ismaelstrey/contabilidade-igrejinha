import React from 'react'
import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
  // Props específicas para artigos/posts
  article?: {
    publishedTime?: string
    modifiedTime?: string
    author?: string
    section?: string
    tags?: string[]
    readingTime?: string
  }
  // Props para breadcrumbs
  breadcrumbs?: Array<{
    name: string
    url: string
  }>
}

const SEO: React.FC<SEOProps> = ({
  title = 'Contabiligrejinha - Contabilidade para Pequenas Empresas',
  description = 'Escritório de contabilidade especializado em pequenas empresas. Serviços contábeis completos: abertura de empresa, departamento pessoal, fiscal e tributário. Mais de 15 anos de experiência.',
  keywords = 'contabilidade, pequenas empresas, escritório contábil, serviços contábeis, abertura de empresa, departamento pessoal, fiscal, tributário, MEI, Simples Nacional, consultoria empresarial',
  image = 'https://contabiligrejinha.com.br/og-image.jpg',
  url = 'https://contabiligrejinha.com.br/',
  type = 'website',
  article,
  breadcrumbs
}) => {
  const isArticle = type === 'article' && article
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
      
      {/* Article specific meta tags */}
      {isArticle && (
        <>
          <meta property="og:type" content="article" />
          <meta property="article:published_time" content={article.publishedTime} />
          {article.modifiedTime && <meta property="article:modified_time" content={article.modifiedTime} />}
          {article.author && <meta property="article:author" content={article.author} />}
          {article.section && <meta property="article:section" content={article.section} />}
          {article.tags && article.tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
          {article.readingTime && <meta name="twitter:label1" content="Tempo de leitura" />}
          {article.readingTime && <meta name="twitter:data1" content={article.readingTime} />}
        </>
      )}
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      {isArticle ? (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": title,
            "description": description,
            "image": image,
            "url": url,
            "datePublished": article.publishedTime,
            "dateModified": article.modifiedTime || article.publishedTime,
            "author": {
              "@type": "Person",
              "name": article.author || "Contabiligrejinha"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Contabiligrejinha",
              "logo": {
                "@type": "ImageObject",
                "url": "https://contabiligrejinha.com.br/logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": url
            },
            "articleSection": article.section,
            "keywords": article.tags?.join(', ') || keywords
          })}
        </script>
      ) : (
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
      )}
      
      {/* Breadcrumbs Structured Data */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbs.map((crumb, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": crumb.name,
              "item": crumb.url
            }))
          })}
        </script>
      )}
    </Helmet>
  )
}

export default SEO