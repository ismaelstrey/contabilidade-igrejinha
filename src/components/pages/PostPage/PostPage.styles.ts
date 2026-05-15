import styled from 'styled-components'
import { motion } from 'framer-motion'
import { theme } from '@/styles/theme'

export const ArticleShell = styled.div`
  width: min(1120px, calc(100% - 2rem));
  margin: 0 auto;
`

export const BackLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  margin: ${theme.spacing.lg} 0;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.bold};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`

export const ArticleHero = styled(motion.article)`
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: ${theme.borderRadius.xl};
  background: ${({ theme }) => theme.colors.background.paper};
  box-shadow: ${({ theme }) => theme.mode === 'dark' ? '0 24px 58px rgba(0, 0, 0, 0.34)' : '0 24px 58px rgba(15, 23, 42, 0.1)'};
`

export const HeroImage = styled.figure`
  margin: 0;
  background: ${({ theme }) => theme.colors.background.secondary};

  img {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 7;
    object-fit: cover;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    img {
      aspect-ratio: 16 / 10;
    }
  }
`

export const ArticleHeader = styled.header`
  padding: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.lg};
  }
`

export const ArticleMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.xs};
  align-items: center;
  margin-bottom: ${theme.spacing.md};
`

export const MetaItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  min-height: 30px;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
`

export const CategoryPill = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 30px;
  padding: 0 ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.full};
  background: ${({ theme }) => theme.colors.primary.background || theme.colors.background.secondary};
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.bold};
`

export const ArticleTitle = styled.h1`
  max-width: 900px;
  margin-bottom: ${theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${theme.typography.fontSize['5xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  line-height: 1.04;
  letter-spacing: 0;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.typography.fontSize['4xl']};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.typography.fontSize['3xl']};
  }
`

export const ArticleLead = styled.p`
  max-width: 850px;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.lg};
  line-height: 1.75;
`

export const ArticleLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 300px;
  gap: ${theme.spacing.xl};
  margin-top: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`

export const ArticleBody = styled(motion.div)`
  padding: ${theme.spacing.xl};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: ${theme.borderRadius.xl};
  background: ${({ theme }) => theme.colors.background.paper};
  color: ${({ theme }) => theme.colors.text.primary};
  box-shadow: ${({ theme }) => theme.mode === 'dark' ? '0 18px 42px rgba(0, 0, 0, 0.22)' : '0 18px 42px rgba(15, 23, 42, 0.06)'};

  p {
    margin: 0 0 ${theme.spacing.lg};
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${theme.typography.fontSize.lg};
    line-height: 1.9;
  }

  p:first-child {
    color: ${({ theme }) => theme.colors.text.primary};
    font-weight: ${theme.typography.fontWeight.medium};
  }

  p:last-child {
    margin-bottom: 0;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.lg};
  }
`

export const ArticleAside = styled.aside`
  position: sticky;
  top: 96px;
  align-self: start;
  display: grid;
  gap: ${theme.spacing.md};

  @media (max-width: ${theme.breakpoints.desktop}) {
    position: static;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

export const AsideCard = styled.div`
  padding: ${theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: ${theme.borderRadius.lg};
  background: ${({ theme }) => theme.colors.background.paper};

  h2 {
    margin-bottom: ${theme.spacing.sm};
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: ${theme.typography.fontSize.lg};
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.text.secondary};
    line-height: 1.65;
  }
`

export const InsightList = styled.ul`
  display: grid;
  gap: ${theme.spacing.sm};
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    display: flex;
    align-items: flex-start;
    gap: ${theme.spacing.xs};
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${theme.typography.fontSize.sm};
    line-height: 1.5;
  }

  svg {
    margin-top: 0.1rem;
    color: ${({ theme }) => theme.colors.secondary.main};
    flex-shrink: 0;
  }
`

export const NotFoundCard = styled.div`
  padding: ${theme.spacing.xl};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: ${theme.borderRadius.xl};
  background: ${({ theme }) => theme.colors.background.paper};
`
