import styled from 'styled-components'
import { motion } from 'framer-motion'

interface ThemeProps {
  $themeMode?: 'light' | 'dark'
}

export const PageContainer = styled.div<ThemeProps>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme, $themeMode }) => 
    $themeMode === 'dark' 
      ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
      : theme.colors.background.paper};
  transition: ${({ theme }) => theme.transitions.normal};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ $themeMode }) => 
      $themeMode === 'dark'
        ? 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%)'
        : 'none'};
    pointer-events: none;
    z-index: 0;
  }
`

export const MainContent = styled.main<ThemeProps>`
  flex: 1;
  padding-top: ${({ theme }) => theme.spacing.xl};
  position: relative;
  z-index: 1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: ${({ theme }) => theme.spacing.lg};
  }
`

export const PostsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
`

export const PostsHeader = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  padding: 1.5rem 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 2px;
    background: #64748b;
    border-radius: 1px;
  }
`

export const PostsTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 1rem;
  text-align: center;
  letter-spacing: -0.025em;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
  }
`

export const PostsSubtitle = styled.p<ThemeProps>`
  font-size: 1.125rem;
  color: ${({ theme, $themeMode }) => 
    $themeMode === 'dark' ? '#94a3b8' : theme.colors.text.secondary};
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  font-weight: 400;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1rem;
    padding: 0 1rem;
  }
`

export const PostsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`

export const PostCard = styled(motion.article)<ThemeProps>`
  background: ${({ theme, $themeMode }) => 
    $themeMode === 'dark'
      ? 'rgba(30, 41, 59, 0.6)'
      : theme.colors.background.paper};
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: ${({ $themeMode }) => 
    $themeMode === 'dark'
      ? '0 2px 8px rgba(0, 0, 0, 0.3)'
      : '0 1px 3px rgba(0, 0, 0, 0.1)'};
  border: 1px solid ${({ $themeMode }) => 
    $themeMode === 'dark' ? 'rgba(148, 163, 184, 0.1)' : '#e2e8f0'};
  position: relative;
  cursor: pointer;
  backdrop-filter: ${({ $themeMode }) => 
    $themeMode === 'dark' ? 'blur(10px)' : 'none'};
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ $themeMode }) => 
      $themeMode === 'dark'
        ? '0 4px 12px rgba(0, 0, 0, 0.4)'
        : '0 4px 12px rgba(0, 0, 0, 0.15)'};
    border-color: ${({ $themeMode }) => 
      $themeMode === 'dark' ? 'rgba(148, 163, 184, 0.2)' : '#cbd5e1'};
  }
`

export const PostTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 0.75rem;
  line-height: 1.4;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`

export const PostExcerpt = styled.p<ThemeProps>`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme, $themeMode }) => 
    $themeMode === 'dark' ? '#cbd5e1' : theme.colors.text.secondary};
  line-height: 1.7;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: ${({ theme }) => theme.transitions.normal};
`

export const PostMeta = styled.div<ThemeProps>`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }
`

export const PostDate = styled.span<ThemeProps>`
  color: ${({ theme, $themeMode }) => 
    $themeMode === 'dark' ? '#94a3b8' : theme.colors.text.muted};
  font-size: 0.875rem;
  font-weight: 500;
`

export const PostCategory = styled.span`
  background: #f1f5f9;
  color: #475569;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.025em;
`

export const ReadMoreButton = styled(motion.button)`
  background: transparent;
  color: ${({ theme }) => theme.colors.primary.main};
  border: 1px solid ${({ theme }) => theme.colors.primary.main};
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary.main};
    color: white;
  }
`