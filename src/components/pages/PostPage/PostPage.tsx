import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, CalendarDays, CheckCircle2, Clock3, FileText, Tag } from 'lucide-react'
import SEO from '@components/common/SEO'
import Breadcrumbs from '@components/common/Breadcrumbs'
import Header from '@components/layout/Header'
import Footer from '@components/layout/Footer'
import postsData from '@/data/posts.json'
import { extractIdFromSlug } from '@/utils/slugify'
import { useTheme } from '@/contexts/ThemeContext'
import { PageContainer, MainContent } from '../PostsPage/PostsPage.styles'
import {
  ArticleShell,
  BackLink,
  ArticleHero,
  HeroImage,
  ArticleHeader,
  ArticleMeta,
  MetaItem,
  CategoryPill,
  ArticleTitle,
  ArticleLead,
  ArticleLayout,
  ArticleBody,
  ArticleAside,
  AsideCard,
  InsightList,
  NotFoundCard
} from './PostPage.styles'

interface Post {
  id: number
  title: string
  excerpt: string
  content: string
  category: string
  date: string
  readTime: string
}

const postImages: Record<number, string> = {
  2: '/images/blog/iva-dual-ibs-cbs.svg'
}

const articleInsights = [
  'IBS substitui ICMS e ISS na esfera estadual e municipal.',
  'CBS substitui PIS e Cofins na esfera federal.',
  'A transição exige revisão de sistemas, créditos e rotinas fiscais.'
]

const PostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const { themeMode } = useTheme()
  
  const postId = slug ? extractIdFromSlug(slug) : null
  const post = postsData.find((p: Post) => p.id === postId)
  
  if (!post) {
    return (
      <>
        <SEO 
          title="Post não encontrado - Contabiligrejinha"
          description="O post que você está procurando não foi encontrado."
        />
        <PageContainer $themeMode={themeMode}>
          <Header />
          <MainContent>
            <ArticleShell>
              <NotFoundCard>
              <h1>Post não encontrado</h1>
              <p>O post que você está procurando não existe ou foi removido.</p>
              <button onClick={() => navigate('/posts')}>Voltar para posts</button>
              </NotFoundCard>
            </ArticleShell>
          </MainContent>
          <Footer />
        </PageContainer>
      </>
    )
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const currentUrl = `${window.location.origin}/posts/${slug}`
  const articleImage = postImages[post.id] || '/images/blog/iva-dual-ibs-cbs.svg'
  const paragraphs = post.content.split('\n\n').filter(Boolean)
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Posts', url: '/posts' },
    { name: post.title, url: currentUrl }
  ]

  return (
    <>
      <SEO 
        title={`${post.title} - Contabiligrejinha`}
        description={post.excerpt}
        keywords={`${post.category.toLowerCase()}, contabilidade, reforma tributária, ${post.title.toLowerCase()}`}
        url={currentUrl}
        type="article"
        article={{
          publishedTime: new Date(post.date).toISOString(),
          author: 'Contabiligrejinha',
          section: post.category,
          tags: [post.category, 'Contabilidade', 'Reforma Tributária'],
          readingTime: post.readTime
        }}
        breadcrumbs={breadcrumbs}
      />
      <PageContainer $themeMode={themeMode}>
        <Header />
        <MainContent>
          <ArticleShell>
            <Breadcrumbs items={breadcrumbs} />
            <BackLink
              href="/posts"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault()
                navigate('/posts')
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ArrowLeft size={17} />
              Voltar para posts
            </BackLink>
            
            <ArticleHero
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <HeroImage>
                <img src={articleImage} alt={`Imagem editorial do artigo: ${post.title}`} />
              </HeroImage>

              <ArticleHeader>
                <ArticleMeta>
                  <CategoryPill>
                    <Tag size={15} />
                    {post.category}
                  </CategoryPill>
                  <MetaItem>
                    <CalendarDays size={16} />
                    {formatDate(post.date)}
                  </MetaItem>
                  <MetaItem>
                    <Clock3 size={16} />
                    {post.readTime} de leitura
                  </MetaItem>
                </ArticleMeta>

                <ArticleTitle>
                  {post.title}
                </ArticleTitle>
                <ArticleLead>{post.excerpt}</ArticleLead>
              </ArticleHeader>
            </ArticleHero>

            <ArticleLayout>
              <ArticleBody
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                {paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </ArticleBody>

              <ArticleAside>
                <AsideCard>
                  <h2>Resumo do artigo</h2>
                  <p>Uma visão prática sobre como o IVA Dual muda a rotina fiscal e exige preparação antecipada.</p>
                </AsideCard>

                <AsideCard>
                  <h2>Pontos de atenção</h2>
                  <InsightList>
                    {articleInsights.map((insight) => (
                      <li key={insight}>
                        <CheckCircle2 size={16} />
                        {insight}
                      </li>
                    ))}
                  </InsightList>
                </AsideCard>

                <AsideCard>
                  <h2>Categoria</h2>
                  <p>
                    <FileText size={16} /> {post.category}
                  </p>
                </AsideCard>
              </ArticleAside>
            </ArticleLayout>
          </ArticleShell>
        </MainContent>
        <Footer />
      </PageContainer>
    </>
  )
}

export default PostPage
