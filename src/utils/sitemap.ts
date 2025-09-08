import postsData from '@/data/posts.json'
import { generatePostSlug } from './slugify'

interface SitemapUrl {
  loc: string
  lastmod: string
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: string
}

interface Post {
  id: number
  title: string
  excerpt: string
  content: string
  category: string
  date: string
  readTime: string
}

/**
 * Gera o sitemap dinâmico com todas as URLs do site
 */
export const generateSitemap = (): SitemapUrl[] => {
  const baseUrl = 'https://contabiligrejinha.com.br'
  const currentDate = new Date().toISOString().split('T')[0]
  
  const staticUrls: SitemapUrl[] = [
    {
      loc: baseUrl,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '1.0'
    },
    {
      loc: `${baseUrl}/posts`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: '0.9'
    },
    {
      loc: `${baseUrl}/equipe`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.7'
    },
    {
      loc: `${baseUrl}/faq`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.6'
    },
    {
      loc: `${baseUrl}/contato`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    }
  ]
  
  // Adicionar URLs dos posts
  const postUrls: SitemapUrl[] = postsData.map((post: Post) => {
    const slug = generatePostSlug(post.title, post.id)
    const postDate = new Date(post.date).toISOString().split('T')[0]
    
    return {
      loc: `${baseUrl}/posts/${slug}`,
      lastmod: postDate,
      changefreq: 'monthly',
      priority: '0.8'
    }
  })
  
  return [...staticUrls, ...postUrls]
}

/**
 * Gera o XML do sitemap
 */
export const generateSitemapXML = (): string => {
  const urls = generateSitemap()
  
  const urlsXML = urls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('')
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlsXML}
</urlset>`
}

/**
 * Gera o robots.txt
 */
export const generateRobotsTxt = (): string => {
  const baseUrl = 'https://contabiligrejinha.com.br'
  
  return `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml`
}