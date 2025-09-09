import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import SEO from '@components/common/SEO'
import Breadcrumbs from '@components/common/Breadcrumbs'
import Header from '@components/layout/Header'
import Footer from '@components/layout/Footer'
import postsData from '@/data/posts.json'
import { generatePostSlug } from '@/utils/slugify'
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
  const navigate = useNavigate()

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const handleReadMore = (post: Post) => {
    const slug = generatePostSlug(post.title, post.id)
    navigate(`/posts/${slug}`)
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Posts', url: '/posts' }
  ]

  return (
    <>
      <SEO 
        title="Posts sobre Reforma Tributária - Contabiligrejinha"
        description="Fique por dentro das últimas novidades sobre a Reforma Tributária 2025 e como ela impacta sua contabilidade. Artigos especializados para contadores e empresários."
        keywords="reforma tributária, IVA dual, IBS, CBS, imposto seletivo, contabilidade, posts"
      />
      <PageContainer>
        <Header />
        <MainContent>
          <PostsContainer>
            <Breadcrumbs items={breadcrumbs} />
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
                        fontSize: '0.875rem', 
                        color: '#6b7280',
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
    </>
  )
}

export default PostsPage