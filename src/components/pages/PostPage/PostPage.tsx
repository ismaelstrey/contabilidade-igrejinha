import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '@components/common/SEO'
import Breadcrumbs from '@components/common/Breadcrumbs'
import Header from '@components/layout/Header'
import Footer from '@components/layout/Footer'
import postsData from '@/data/posts.json'
import { extractIdFromSlug } from '@/utils/slugify'
import {
  PageContainer,
  MainContent,
  PostsContainer,
  PostTitle,
  PostMeta,
  PostDate,
  PostCategory
} from '../PostsPage/PostsPage.styles'

interface Post {
  id: number
  title: string
  excerpt: string
  content: string
  category: string
  date: string
  readTime: string
}

const PostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  
  // Extrair ID do slug e encontrar o post
  const postId = slug ? extractIdFromSlug(slug) : null
  const post = postsData.find((p: Post) => p.id === postId)
  
  if (!post) {
    return (
      <>
        <SEO 
          title="Post não encontrado - Contabiligrejinha"
          description="O post que você está procurando não foi encontrado."
        />
        <PageContainer>
          <Header />
          <MainContent>
            <PostsContainer>
              <h1>Post não encontrado</h1>
              <p>O post que você está procurando não existe ou foi removido.</p>
              <button onClick={() => navigate('/posts')}>Voltar para posts</button>
            </PostsContainer>
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
      <PageContainer>
        <Header />
        <MainContent>
          <PostsContainer>
            <Breadcrumbs items={breadcrumbs} />
            <motion.a 
              href="/posts"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault()
                navigate('/posts')
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                border: 'none',
                color: 'white',
                fontSize: '16px',
                cursor: 'pointer',
                marginBottom: '2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '12px 24px',
                borderRadius: '50px',
                fontWeight: '600',
                boxShadow: '0 4px 15px rgba(37, 99, 235, 0.4)',
                transition: 'all 0.3s ease',
                textDecoration: 'none'
              }}
            >
              <span style={{ fontSize: '18px' }}>←</span>
              Voltar para posts
            </motion.a>
            
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <PostMeta style={{ marginBottom: '2rem' }}>
                  <PostDate>
                    <span style={{ marginRight: '8px', fontSize: '18px' }}>📅</span>
                    {formatDate(post.date)}
                  </PostDate>
                  <PostCategory>
                    <span style={{ marginRight: '4px', fontSize: '16px' }}>🏷️</span>
                    {post.category}
                  </PostCategory>
                </PostMeta>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <PostTitle as="h1" style={{ 
                  fontSize: '2.8rem', 
                  marginBottom: '2rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px'
                }}>
                  <span style={{ fontSize: '3rem' }}>📄</span>
                  {post.title}
                </PostTitle>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  color: '#1a202c',
                  whiteSpace: 'pre-line',
                  background: 'linear-gradient(135deg, #ffffff 0%, #fafbff 100%)',
                  padding: '2rem',
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  border: '1px solid #e5e7eb'
                }}
              >
                {post.content}
              </motion.div>
            </motion.article>
          </PostsContainer>
        </MainContent>
        <Footer />
      </PageContainer>
    </>
  )
}

export default PostPage