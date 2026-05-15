import styled from 'styled-components'
import { motion } from 'framer-motion'
import { theme } from '@/styles/theme'

interface ThemeProps {
  $themeMode?: 'light' | 'dark'
}

interface CategoryButtonProps {
  $isActive: boolean
}

interface CardVisualProps {
  $variant: number
}

const cardVisuals = [
  'linear-gradient(135deg, #0f766e 0%, #2563eb 100%)',
  'linear-gradient(135deg, #475569 0%, #0f766e 100%)',
  'linear-gradient(135deg, #1d4ed8 0%, #334155 100%)',
  'linear-gradient(135deg, #0369a1 0%, #059669 100%)'
]

export const PageContainer = styled.div<ThemeProps>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'linear-gradient(135deg, #08111f 0%, #0f172a 58%, #10251f 100%)'
      : 'linear-gradient(135deg, #f8fafc 0%, #ffffff 48%, #ecfdf5 100%)'};
`

export const MainContent = styled.main<ThemeProps>`
  flex: 1;
  padding: 104px 0 72px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 92px 0 56px;
  }
`

export const PostsContainer = styled.div`
  width: min(1180px, calc(100% - 2rem));
  margin: 0 auto;
`

export const PostsHero = styled(motion.section)`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: ${theme.spacing.xl};
  padding: ${theme.spacing['2xl']} 0 ${theme.spacing.xl};
`

export const PostsHeroCopy = styled.div`
  max-width: 820px;
`

export const Eyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  margin-bottom: ${theme.spacing.md};
  padding: 0.45rem 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: ${theme.borderRadius.full};
  background: ${({ theme }) => theme.colors.background.paper};
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.semibold};
`

export const PostsTitle = styled.h1`
  max-width: 780px;
  margin-bottom: ${theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${theme.typography.fontSize['5xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  line-height: 1;
  letter-spacing: 0;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.typography.fontSize['4xl']};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.typography.fontSize['3xl']};
  }
`

export const PostsSubtitle = styled.p`
  max-width: 720px;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.lg};
  line-height: 1.7;
`

export const FeaturedPost = styled.article`
  display: grid;
  grid-template-columns: minmax(300px, 0.85fr) minmax(0, 1.15fr);
  overflow: hidden;
  margin-bottom: ${theme.spacing.xl};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: ${theme.borderRadius.xl};
  background: ${({ theme }) => theme.colors.background.paper};
  box-shadow: ${({ theme }) => theme.mode === 'dark' ? '0 24px 58px rgba(0, 0, 0, 0.32)' : '0 24px 58px rgba(15, 23, 42, 0.1)'};
  cursor: pointer;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const FeaturedVisual = styled.div`
  min-height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${theme.spacing.xl};
  background:
    linear-gradient(135deg, rgba(15, 118, 110, 0.92), rgba(37, 99, 235, 0.86)),
    repeating-linear-gradient(45deg, rgba(255,255,255,0.18) 0 1px, transparent 1px 18px);
  color: #ffffff;

  svg {
    opacity: 0.92;
  }

  span {
    width: fit-content;
    padding: 0.45rem 0.7rem;
    border: 1px solid rgba(255, 255, 255, 0.34);
    border-radius: ${theme.borderRadius.full};
    background: rgba(255, 255, 255, 0.14);
    font-size: ${theme.typography.fontSize.sm};
    font-weight: ${theme.typography.fontWeight.bold};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    min-height: 220px;
  }
`

export const FeaturedContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.lg};
  }
`

export const PostsToolbar = styled.div`
  display: grid;
  grid-template-columns: minmax(280px, 0.9fr) minmax(0, 1.1fr);
  gap: ${theme.spacing.md};
  align-items: start;
  margin-bottom: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`

export const SearchBox = styled.label`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  min-height: 52px;
  padding: 0 ${theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: ${theme.borderRadius.lg};
  background: ${({ theme }) => theme.colors.background.paper};
  color: ${({ theme }) => theme.colors.text.secondary};

  input {
    width: 100%;
    border: 0;
    background: transparent;
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: ${theme.typography.fontSize.base};
  }
`

export const CategoryFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.xs};
  align-items: center;

  > span {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    margin-right: ${theme.spacing.xs};
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${theme.typography.fontSize.sm};
    font-weight: ${theme.typography.fontWeight.semibold};
  }
`

export const CategoryButton = styled.button<CategoryButtonProps>`
  min-height: 38px;
  padding: 0 ${theme.spacing.sm};
  border: 1px solid ${({ theme, $isActive }) => $isActive ? theme.colors.primary.main : theme.colors.border.light};
  border-radius: ${theme.borderRadius.full};
  background: ${({ theme, $isActive }) => $isActive ? theme.colors.primary.main : theme.colors.background.paper};
  color: ${({ theme, $isActive }) => $isActive ? theme.colors.neutral.white : theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.semibold};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme, $isActive }) => $isActive ? theme.colors.neutral.white : theme.colors.primary.main};
  }
`

export const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const PostCard = styled.article`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: ${theme.borderRadius.lg};
  background: ${({ theme }) => theme.colors.background.paper};
  box-shadow: ${({ theme }) => theme.mode === 'dark' ? '0 18px 42px rgba(0, 0, 0, 0.24)' : '0 18px 42px rgba(15, 23, 42, 0.06)'};
  cursor: pointer;
  transition: transform ${theme.transitions.normal}, border-color ${theme.transitions.normal}, box-shadow ${theme.transitions.normal};

  &:hover {
    transform: translateY(-6px);
    border-color: ${({ theme }) => theme.colors.primary.light};
    box-shadow: ${({ theme }) => theme.mode === 'dark' ? '0 24px 54px rgba(0, 0, 0, 0.34)' : '0 24px 54px rgba(15, 23, 42, 0.1)'};
  }
`

export const CardVisual = styled.div<CardVisualProps>`
  min-height: 154px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${theme.spacing.md};
  background: ${({ $variant }) => cardVisuals[$variant] || cardVisuals[0]};
  color: #ffffff;

  span {
    max-width: 100%;
    width: fit-content;
    padding: 0.35rem 0.6rem;
    border-radius: ${theme.borderRadius.full};
    background: rgba(255, 255, 255, 0.16);
    font-size: ${theme.typography.fontSize.xs};
    font-weight: ${theme.typography.fontWeight.bold};
  }
`

export const CardBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: ${theme.spacing.lg} ${theme.spacing.lg} 0;
`

export const PostMeta = styled.div<ThemeProps>`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.xs};
  align-items: center;
  margin-bottom: ${theme.spacing.md};
`

export const PostDate = styled.span<ThemeProps>`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
`

export const PostCategory = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 0 ${theme.spacing.xs};
  border-radius: ${theme.borderRadius.full};
  background: ${({ theme }) => theme.colors.primary.background || theme.colors.background.secondary};
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.bold};
`

export const PostTitle = styled.h2`
  margin-bottom: ${theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.bold};
  line-height: 1.25;
`

export const PostExcerpt = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.base};
  line-height: 1.7;
`

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.spacing.md};
  margin-top: auto;
  padding: ${theme.spacing.lg};
`

export const ReadTime = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.sm};
  white-space: nowrap;
`

export const ReadMoreButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.bold};

  &:hover {
    color: ${({ theme }) => theme.colors.primary.dark};
  }
`

export const EmptyState = styled.div`
  display: grid;
  place-items: center;
  gap: ${theme.spacing.xs};
  padding: ${theme.spacing['2xl']};
  border: 1px dashed ${({ theme }) => theme.colors.border.medium};
  border-radius: ${theme.borderRadius.lg};
  background: ${({ theme }) => theme.colors.background.paper};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: center;

  strong {
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: ${theme.typography.fontSize.lg};
  }

  p {
    margin: 0;
  }
`
