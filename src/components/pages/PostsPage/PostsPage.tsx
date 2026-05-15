import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CalendarDays, Clock3, FileText, Search, SlidersHorizontal, Sparkles } from 'lucide-react'
import SEO from '@components/common/SEO'
import Breadcrumbs from '@components/common/Breadcrumbs'
import Header from '@components/layout/Header'
import Footer from '@components/layout/Footer'
import postsData from '@/data/posts.json'
import { generatePostSlug } from '@/utils/slugify'
import { useTheme } from '@/contexts/ThemeContext'
import {
  PageContainer,
  MainContent,
  PostsContainer,
  PostsHero,
  PostsHeroCopy,
  Eyebrow,
  PostsTitle,
  PostsSubtitle,
  FeaturedPost,
  FeaturedVisual,
  FeaturedContent,
  PostMeta,
  PostDate,
  PostCategory,
  PostTitle,
  PostExcerpt,
  PostsToolbar,
  SearchBox,
  CategoryFilters,
  CategoryButton,
  PostsGrid,
  PostCard,
  CardVisual,
  CardBody,
  CardFooter,
  ReadTime,
  ReadMoreButton,
  EmptyState
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

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

const PostsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('Todos')
  const posts = postsData as Post[]
  const navigate = useNavigate()
  const { themeMode } = useTheme()

  const categories = useMemo(() => {
    return ['Todos', ...Array.from(new Set(posts.map((post) => post.category)))]
  }, [posts])

  const featuredPost = posts[0]

  const filteredPosts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase()

    return posts
      .filter((post) => post.id !== featuredPost.id)
      .filter((post) => activeCategory === 'Todos' || post.category === activeCategory)
      .filter((post) => {
        if (!normalizedSearch) return true

        return [post.title, post.excerpt, post.category].some((field) =>
          field.toLowerCase().includes(normalizedSearch)
        )
      })
  }, [activeCategory, featuredPost.id, posts, searchTerm])

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
        description="Artigos sobre Reforma Tributária, Simples Nacional, gestão fiscal e impactos para pequenas empresas."
        keywords="reforma tributária, IVA dual, IBS, CBS, imposto seletivo, contabilidade, posts"
      />
      <PageContainer $themeMode={themeMode}>
        <Header />
        <MainContent>
          <PostsContainer>
            <Breadcrumbs items={breadcrumbs} />

            <PostsHero
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            >
              <PostsHeroCopy>
                <Eyebrow>
                  <Sparkles size={16} />
                  Conteúdo estratégico
                </Eyebrow>
                <PostsTitle>Atualizações fiscais sem linguagem complicada</PostsTitle>
                <PostsSubtitle>
                  Guias práticos sobre Reforma Tributária, obrigações fiscais e decisões contábeis para empresas que querem se antecipar.
                </PostsSubtitle>
              </PostsHeroCopy>
            </PostsHero>

            {featuredPost && (
              <FeaturedPost
                as={motion.article}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
                onClick={() => handleReadMore(featuredPost)}
              >
                <FeaturedVisual aria-hidden="true">
                  <FileText size={54} />
                  <span>Especial</span>
                </FeaturedVisual>

                <FeaturedContent>
                  <PostMeta>
                    <PostCategory>{featuredPost.category}</PostCategory>
                    <PostDate>
                      <CalendarDays size={16} />
                      {formatDate(featuredPost.date)}
                    </PostDate>
                    <ReadTime>
                      <Clock3 size={16} />
                      {featuredPost.readTime}
                    </ReadTime>
                  </PostMeta>

                  <PostTitle as="h2">{featuredPost.title}</PostTitle>
                  <PostExcerpt>{featuredPost.excerpt}</PostExcerpt>

                  <ReadMoreButton type="button" onClick={() => handleReadMore(featuredPost)}>
                    Ler artigo em destaque <ArrowRight size={17} />
                  </ReadMoreButton>
                </FeaturedContent>
              </FeaturedPost>
            )}

            <PostsToolbar>
              <SearchBox>
                <Search size={18} />
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Buscar por assunto, categoria ou palavra-chave"
                  aria-label="Buscar posts"
                />
              </SearchBox>

              <CategoryFilters aria-label="Filtrar posts por categoria">
                <span>
                  <SlidersHorizontal size={16} />
                  Filtros
                </span>
                {categories.map((category) => (
                  <CategoryButton
                    key={category}
                    type="button"
                    $isActive={activeCategory === category}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </CategoryButton>
                ))}
              </CategoryFilters>
            </PostsToolbar>

            {filteredPosts.length > 0 ? (
              <PostsGrid>
                {filteredPosts.map((post, index) => (
                  <PostCard
                    key={post.id}
                    as={motion.article}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: index * 0.04, ease: 'easeOut' }}
                    viewport={{ once: true, margin: '-80px' }}
                    onClick={() => handleReadMore(post)}
                  >
                    <CardVisual $variant={index % 4} aria-hidden="true">
                      <FileText size={34} />
                      <span>{post.category}</span>
                    </CardVisual>

                    <CardBody>
                      <PostMeta>
                        <PostCategory>{post.category}</PostCategory>
                        <PostDate>
                          <CalendarDays size={15} />
                          {formatDate(post.date)}
                        </PostDate>
                      </PostMeta>

                      <PostTitle>{post.title}</PostTitle>
                      <PostExcerpt>{post.excerpt}</PostExcerpt>
                    </CardBody>

                    <CardFooter>
                      <ReadTime>
                        <Clock3 size={15} />
                        {post.readTime}
                      </ReadTime>
                      <ReadMoreButton type="button" onClick={() => handleReadMore(post)}>
                        Ler mais <ArrowRight size={16} />
                      </ReadMoreButton>
                    </CardFooter>
                  </PostCard>
                ))}
              </PostsGrid>
            ) : (
              <EmptyState>
                <FileText size={32} />
                <strong>Nenhum post encontrado</strong>
                <p>Tente buscar por outro termo ou selecione outra categoria.</p>
              </EmptyState>
            )}
          </PostsContainer>
        </MainContent>
        <Footer />
      </PageContainer>
    </>
  )
}

export default PostsPage
