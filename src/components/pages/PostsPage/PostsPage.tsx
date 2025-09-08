import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
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
              <button 
                onClick={handleBackToList}
                style={{
                  background: 'none',
                  border: 'none',
                  color: theme.colors.primary.main,
                  fontSize: '16px',
                  cursor: 'pointer',
                  marginBottom: '2rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                ← Voltar para posts
              </button>
              
              <article>
                <PostMeta>
                  <PostDate>{formatDate(selectedPost.date)}</PostDate>
                  <PostCategory>{selectedPost.category}</PostCategory>
                </PostMeta>
                
                <PostTitle as="h1" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                  {selectedPost.title}
                </PostTitle>
                
                <div style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  color: theme.colors.text.primary,
                  whiteSpace: 'pre-line'
                }}>
                  {selectedPost.content}
                </div>
              </article>
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
            <PostsHeader>
              <PostsTitle>Posts sobre Reforma Tributária</PostsTitle>
              <PostsSubtitle>
                Fique por dentro das últimas novidades sobre a Reforma Tributária 2025 
                e como ela impacta sua contabilidade. Artigos especializados para 
                contadores e empresários que querem se manter atualizados.
              </PostsSubtitle>
            </PostsHeader>

            <PostsGrid>
              {posts.map((post) => (
                <PostCard key={post.id}>
                  <PostMeta>
                    <PostDate>{formatDate(post.date)}</PostDate>
                    <PostCategory>{post.category}</PostCategory>
                  </PostMeta>
                  
                  <PostTitle>{post.title}</PostTitle>
                  <PostExcerpt>{post.excerpt}</PostExcerpt>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ 
                      fontSize: theme.typography.fontSize.sm, 
                      color: theme.colors.text.muted 
                    }}>
                      {post.readTime} de leitura
                    </span>
                    <ReadMoreButton onClick={() => handleReadMore(post)}>
                      Ler mais
                    </ReadMoreButton>
                  </div>
                </PostCard>
              ))}
            </PostsGrid>
          </PostsContainer>
        </MainContent>
        <Footer />
      </PageContainer>
    </ThemeProvider>
  )
}

export default PostsPage