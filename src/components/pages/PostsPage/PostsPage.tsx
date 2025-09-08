import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { theme } from '@/styles/theme'
import SEO from '@components/common/SEO'
import Header from '@components/layout/Header'
import Footer from '@components/layout/Footer'
import GlobalStyles from '@/styles/globalStyles'
import postsData from '@/data/posts.json'
import {
  PageContainer,
  MainContent,
  PostsContainer,
  PostsHeader,
  PostsTitle,
  PostsSubtitle,
  PostsGrid,
  PostCard,
  PostTitle,
  PostExcerpt,
  PostMeta,
  PostDate,
  PostCategory,
  ReadMoreButton
} from './PostsPage.styles'

interface Post {
  id: number
  title: string
  excerpt: string
  content: string
  category: string
  date: string
  readTime: string
}

const PostsPage: React.FC = () => {
  const [posts] = useState<Post[]>(postsData)
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const handleReadMore = (post: Post) => {
    setSelectedPost(post)
  }

  const handleBackToList = () => {
    setSelectedPost(null)
  }

  if (selectedPost) {
    return (
      <ThemeProvider theme={theme}>
        <SEO 
          title={`${selectedPost.title} - Contabiligrejinha`}
          description={selectedPost.excerpt}
          keywords={`${selectedPost.category.toLowerCase()}, contabilidade, reforma tributária`}
        />
        <GlobalStyles />
        <PageContainer>
          <Header />
          <MainContent>
            <PostsContainer>
              <motion.button 
                onClick={handleBackToList}
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
                  transition: 'all 0.3s ease'
                }}
              >
                <span style={{ fontSize: '18px' }}>←</span>
                Voltar para posts
              </motion.button>
              
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
                      {formatDate(selectedPost.date)}
                    </PostDate>
                    <PostCategory>
                      <span style={{ marginRight: '4px', fontSize: '16px' }}>🏷️</span>
                      {selectedPost.category}
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
                    {selectedPost.title}
                  </PostTitle>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.8',
                    color: theme.colors.text.primary,
                    whiteSpace: 'pre-line',
                    background: 'linear-gradient(135deg, #ffffff 0%, #fafbff 100%)',
                    padding: '2rem',
                    borderRadius: '16px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    border: '1px solid #e5e7eb'
                  }}
                >
                  {selectedPost.content}
                </motion.div>
              </motion.article>
            </PostsContainer>
          </MainContent>
          <Footer />
        </PageContainer>
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <SEO 
        title="Posts sobre Reforma Tributária - Contabiligrejinha"
        description="Fique por dentro das últimas novidades sobre a Reforma Tributária 2025 e como ela impacta sua contabilidade. Artigos especializados para contadores e empresários."
        keywords="reforma tributária, IVA dual, IBS, CBS, imposto seletivo, contabilidade, posts"
      />
      <GlobalStyles />
      <PageContainer>
        <Header />
        <MainContent>
          <PostsContainer>
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <PostsHeader>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <PostsTitle>
                    <span style={{ fontSize: '2.5rem', marginRight: '12px' }}>📊</span>
                    Posts sobre Reforma Tributária
                  </PostsTitle>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <PostsSubtitle>
                    <span style={{ fontSize: '1.2rem', marginRight: '8px' }}>💡</span>
                    Fique por dentro das últimas novidades sobre a Reforma Tributária 2025 
                    e como ela impacta sua contabilidade. Artigos especializados para 
                    contadores e empresários que querem se manter atualizados.
                  </PostsSubtitle>
                </motion.div>
              </PostsHeader>
            </motion.div>

            <PostsGrid
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, staggerChildren: 0.1 }}
            >
              <AnimatePresence>
                {posts.map((post, index) => (
                  <PostCard 
                    key={post.id}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -50, scale: 0.9 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      y: -8, 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <PostMeta>
                      <PostDate>
                        <span style={{ marginRight: '8px' }}>📅</span>
                        {formatDate(post.date)}
                      </PostDate>
                      <PostCategory>
                        <span style={{ marginRight: '4px' }}>🏷️</span>
                        {post.category}
                      </PostCategory>
                    </PostMeta>
                    
                    <PostTitle>
                      <span style={{ marginRight: '8px' }}>📄</span>
                      {post.title}
                    </PostTitle>
                    <PostExcerpt>{post.excerpt}</PostExcerpt>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ 
                        fontSize: theme.typography.fontSize.sm, 
                        color: theme.colors.text.muted,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}>
                        <span>⏱️</span>
                        {post.readTime} de leitura
                      </span>
                      <ReadMoreButton 
                        onClick={() => handleReadMore(post)}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        Ler mais
                        <span style={{ marginLeft: '6px' }}>→</span>
                      </ReadMoreButton>
                    </div>
                  </PostCard>
                ))}
              </AnimatePresence>
            </PostsGrid>
          </PostsContainer>
        </MainContent>
        <Footer />
      </PageContainer>
    </ThemeProvider>
  )
}

export default PostsPage