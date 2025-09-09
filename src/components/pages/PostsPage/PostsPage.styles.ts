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
  margin-bottom: 4rem;
  text-align: center;
  padding: 2rem 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #db2777 100%);
    border-radius: 2px;
  }
`

export const PostsTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.h1};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: transparent;
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #db2777 100%);
  background-clip: text;
  -webkit-background-clip: text;
  margin-bottom: 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.2rem;
    flex-direction: column;
    gap: 8px;
  }
`

export const PostsSubtitle = styled.p<ThemeProps>`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme, $themeMode }) => 
    $themeMode === 'dark' ? '#e2e8f0' : theme.colors.text.secondary};
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: ${({ $themeMode }) => 
    $themeMode === 'dark'
      ? 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(51, 65, 85, 0.8) 100%)'
      : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'};
  padding: 1.5rem 2rem;
  border-radius: 16px;
  border: 1px solid ${({ $themeMode }) => 
    $themeMode === 'dark' ? 'rgba(148, 163, 184, 0.2)' : '#e2e8f0'};
  box-shadow: ${({ $themeMode }) => 
    $themeMode === 'dark'
      ? '0 2px 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(120, 119, 198, 0.1)'
      : '0 2px 10px rgba(0, 0, 0, 0.05)'};
  backdrop-filter: ${({ $themeMode }) => 
    $themeMode === 'dark' ? 'blur(10px)' : 'none'};
  transition: ${({ theme }) => theme.transitions.normal};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    padding: 1rem 1.5rem;
    font-size: 1rem;
  }
`

export const PostsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xxl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`

export const PostCard = styled(motion.article)<ThemeProps>`
  background: ${({ theme, $themeMode }) => 
    $themeMode === 'dark'
      ? 'linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(51, 65, 85, 0.9) 100%)'
      : `linear-gradient(135deg, ${theme.colors.background.paper} 0%, #fafbff 100%)`};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme, $themeMode }) => 
    $themeMode === 'dark'
      ? '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 20px rgba(120, 119, 198, 0.1)'
      : theme.shadows.card};
  border: 1px solid ${({ theme, $themeMode }) => 
    $themeMode === 'dark' ? 'rgba(148, 163, 184, 0.2)' : theme.colors.border.light};
  position: relative;
  overflow: hidden;
  cursor: pointer;
  backdrop-filter: ${({ $themeMode }) => 
    $themeMode === 'dark' ? 'blur(10px)' : 'none'};
  transition: ${({ theme }) => theme.transitions.normal};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ theme }) => theme.colors.primary.gradient};
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: ${({ theme, $themeMode }) => 
      $themeMode === 'dark'
        ? '0 12px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(120, 119, 198, 0.2)'
        : theme.shadows.cardHover};
    border-color: ${({ theme, $themeMode }) => 
      $themeMode === 'dark' ? 'rgba(120, 119, 198, 0.4)' : theme.colors.primary.light};
  }
`

export const PostTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.h3};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  background: ${({ theme }) => theme.colors.primary.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.3;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(4px);
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
  gap: 1.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  background: ${({ $themeMode }) => 
    $themeMode === 'dark'
      ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.8) 100%)'
      : 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)'};
  border-radius: 50px;
  border: 1px solid ${({ $themeMode }) => 
    $themeMode === 'dark' ? 'rgba(148, 163, 184, 0.2)' : '#cbd5e1'};
  box-shadow: ${({ $themeMode }) => 
    $themeMode === 'dark'
      ? '0 2px 8px rgba(0, 0, 0, 0.3), 0 0 15px rgba(120, 119, 198, 0.1)'
      : '0 2px 8px rgba(0, 0, 0, 0.06)'};
  backdrop-filter: ${({ $themeMode }) => 
    $themeMode === 'dark' ? 'blur(10px)' : 'none'};
  transition: ${({ theme }) => theme.transitions.normal};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: 0.8rem;
    padding: 0.8rem 1.5rem;
  }
`

export const PostDate = styled.span<ThemeProps>`
  color: ${({ theme, $themeMode }) => 
    $themeMode === 'dark' ? '#94a3b8' : theme.colors.text.muted};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  background: ${({ $themeMode }) => 
    $themeMode === 'dark'
      ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(37, 99, 235, 0.2) 100%)'
      : 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)'};
  border-radius: 25px;
  border: 1px solid ${({ $themeMode }) => 
    $themeMode === 'dark' ? 'rgba(59, 130, 246, 0.3)' : '#93c5fd'};
  transition: ${({ theme }) => theme.transitions.normal};
`

export const PostCategory = styled.span`
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.2);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

export const ReadMoreButton = styled(motion.button)`
  background: ${({ theme }) => theme.colors.primary.gradient};
  color: white;
  border: none;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(37, 99, 235, 0.4);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 6px 20px rgba(37, 99, 235, 0.6);
  }
`