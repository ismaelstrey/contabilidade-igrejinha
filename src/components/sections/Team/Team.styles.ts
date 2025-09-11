import styled, { DefaultTheme } from 'styled-components'
import { theme } from '@/styles/theme'

interface TeamContainerProps {
  $themeMode: 'light' | 'dark'
}

interface TeamHeaderProps {
  $themeMode: 'light' | 'dark'
}

interface TeamGridProps {
  $themeMode: 'light' | 'dark'
}

interface TeamCardProps {
  $themeMode: 'light' | 'dark'
}

interface TeamPhotoProps {
  $themeMode: 'light' | 'dark'
}

interface TeamInfoProps {
  $themeMode: 'light' | 'dark'
}

interface TeamNameProps {
  $themeMode: 'light' | 'dark'
}

interface TeamPositionProps {
  $themeMode: 'light' | 'dark'
}

interface TeamDescriptionProps {
  $themeMode: 'light' | 'dark'
}

interface TeamQualificationsProps {
  $themeMode: 'light' | 'dark'
}

interface QualificationItemProps {
  $themeMode: 'light' | 'dark'
}

export const TeamContainer = styled.section.withConfig({
  shouldForwardProp: (prop) => prop !== '$themeMode'
})<TeamContainerProps>`
  padding: ${theme.spacing['4xl']} 0;
  background: ${({ $themeMode, theme }: { $themeMode?: 'light' | 'dark'; theme: DefaultTheme }) => 
    $themeMode === 'dark' 
      ? `linear-gradient(135deg, ${theme.colors?.background?.darker || '#0f172a'} 0%, ${theme.colors?.background?.dark || '#1e293b'} 50%, ${theme.colors?.background?.paper || '#334155'} 100%)`
      : `linear-gradient(135deg, ${theme.colors?.background?.light || '#ffffff'} 0%, ${theme.colors?.background?.paper || '#f8fafc'} 50%, ${theme.colors?.border?.light || '#f1f5f9'} 100%)`};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ $themeMode }) => 
      $themeMode === 'dark'
        ? 'radial-gradient(circle at 30% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)'
        : 'radial-gradient(circle at 30% 20%, rgba(168, 85, 247, 0.03) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(59, 130, 246, 0.03) 0%, transparent 50%)'};
    pointer-events: none;
  }
`

export const TeamHeader = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== '$themeMode'
})<TeamHeaderProps>`
  text-align: center;
  margin-bottom: ${theme.spacing['3xl']};
  position: relative;
  z-index: 1;
`

export const TeamTitle = styled.h2`
  font-size: ${theme.typography.fontSize['4xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  background: ${({ theme }: { theme: DefaultTheme }) => 
    `linear-gradient(135deg, ${theme.colors?.primary?.main || '#6366f1'} 0%, ${theme.colors?.primary?.light || '#8b5cf6'} 50%, ${theme.colors?.accent?.orange || '#f97316'} 100%)`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${theme.spacing.md};
  
  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize['3xl']};
  }
`

export const TeamSubtitle = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.neutral.gray600};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  opacity: 0.8;
  
  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize.base};
  }
`

export const TeamGrid = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== '$themeMode'
})<TeamGridProps>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing['2xl']};
  position: relative;
  z-index: 1;
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.xl};
  }
`

export const TeamCard = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== '$themeMode'
})<TeamCardProps>`
  background: ${({ $themeMode }) => 
    $themeMode === 'dark'
      ? 'linear-gradient(145deg, rgba(30, 41, 59, 0.8) 0%, rgba(51, 65, 85, 0.6) 100%)'
      : 'linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.8) 100%)'};
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing['2xl']};
  box-shadow: ${({ $themeMode }) => 
    $themeMode === 'dark'
      ? '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)'
      : '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)'};
  border: ${({ $themeMode }) => 
    $themeMode === 'dark'
      ? '1px solid rgba(255, 255, 255, 0.1)'
      : '1px solid rgba(0, 0, 0, 0.05)'};
  backdrop-filter: blur(10px);
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ $themeMode }) => 
      $themeMode === 'dark'
        ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)'
        : 'linear-gradient(135deg, rgba(168, 85, 247, 0.02) 0%, rgba(59, 130, 246, 0.02) 100%)'};
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: ${({ $themeMode }) => 
      $themeMode === 'dark'
        ? '0 35px 70px -12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1)'
        : '0 35px 70px -12px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.1)'};
    
    &::before {
      opacity: 1;
    }
  }
`

export const TeamPhoto = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== '$themeMode'
})<TeamPhotoProps>`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  margin: 0 auto ${theme.spacing.lg};
  overflow: hidden;
  border: 4px solid transparent;
  background: ${({ $themeMode, theme }: { $themeMode?: 'light' | 'dark'; theme: DefaultTheme }) => 
    $themeMode === 'dark'
      ? `linear-gradient(135deg, ${theme.colors?.primary?.main || '#6366f1'}, ${theme.colors?.primary?.light || '#8b5cf6'}, ${theme.colors?.accent?.orange || '#f97316'}) border-box`
      : `linear-gradient(135deg, ${theme.colors?.primary?.main || '#6366f1'}, ${theme.colors?.primary?.light || '#8b5cf6'}, ${theme.colors?.accent?.orange || '#f97316'}) border-box`};
  background-clip: padding-box;
  position: relative;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    padding: 4px;
    background: ${({ theme }: { theme: DefaultTheme }) => 
      `linear-gradient(135deg, ${theme.colors?.primary?.main || '#6366f1'}, ${theme.colors?.primary?.light || '#8b5cf6'}, ${theme.colors?.accent?.orange || '#f97316'})`};
    border-radius: inherit;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    -webkit-mask-composite: xor;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  svg {
    width: 100%;
    height: 100%;
    background: ${({ $themeMode, theme }: { $themeMode?: 'light' | 'dark'; theme: DefaultTheme }) => 
    $themeMode === 'dark'
      ? `linear-gradient(135deg, ${theme.colors?.background?.dark || '#1e293b'}, ${theme.colors?.background?.paper || '#334155'})`
      : `linear-gradient(135deg, ${theme.colors?.border?.light || '#f1f5f9'}, ${theme.colors?.border?.dark || '#e2e8f0'})`};
    color: ${({ $themeMode }) => 
      $themeMode === 'dark'
        ? '#64748b'
        : '#94a3b8'};
  }
  
  &:hover {
    transform: scale(1.05);
    
    img {
      transform: scale(1.1);
    }
  }
`

export const TeamInfo = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== '$themeMode'
})<TeamInfoProps>`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
  position: relative;
  z-index: 1;
`

export const TeamName = styled.h3.withConfig({
  shouldForwardProp: (prop) => prop !== '$themeMode'
})<TeamNameProps>`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${({ $themeMode, theme }: { $themeMode?: 'light' | 'dark'; theme: DefaultTheme }) => 
    $themeMode === 'dark' ? theme.colors?.text?.primary || '#f1f5f9' : theme.colors?.background?.dark || '#1e293b'};
  margin: 0;
  background: ${({ $themeMode, theme }: { $themeMode?: 'light' | 'dark'; theme: DefaultTheme }) => 
    $themeMode === 'dark'
      ? `linear-gradient(135deg, ${theme.colors?.text?.primary || '#f1f5f9'} 0%, ${theme.colors?.text?.secondary || '#cbd5e1'} 100%)`
      : `linear-gradient(135deg, ${theme.colors?.background?.dark || '#1e293b'} 0%, ${theme.colors?.text?.secondary || '#475569'} 100%)`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

export const TeamPosition = styled.p.withConfig({
  shouldForwardProp: (prop) => prop !== '$themeMode'
})<TeamPositionProps>`
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${({ $themeMode, theme }: { $themeMode?: 'light' | 'dark'; theme: DefaultTheme }) => 
    $themeMode === 'dark' ? theme.colors?.primary?.light || '#a78bfa' : theme.colors?.primary?.main || '#6366f1'};
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: ${({ $themeMode, theme }: { $themeMode?: 'light' | 'dark'; theme: DefaultTheme }) => 
    $themeMode === 'dark' 
      ? `linear-gradient(135deg, ${theme.colors?.primary?.light || '#a78bfa'} 0%, ${theme.colors?.accent?.orange || '#f97316'} 100%)`
      : `linear-gradient(135deg, ${theme.colors?.primary?.main || '#6366f1'} 0%, ${theme.colors?.primary?.light || '#8b5cf6'} 100%)`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

export const TeamDescription = styled.p.withConfig({
  shouldForwardProp: (prop) => prop !== '$themeMode'
})<TeamDescriptionProps>`
  font-size: ${theme.typography.fontSize.sm};
  color: ${({ $themeMode, theme }: { $themeMode?: 'light' | 'dark'; theme: DefaultTheme }) => 
    $themeMode === 'dark' ? theme.colors?.text?.muted || '#94a3b8' : theme.colors?.border?.dark || '#64748b'};
  line-height: 1.6;
  margin: ${theme.spacing.sm} 0;
  opacity: 0.9;
`

export const TeamQualifications = styled.ul.withConfig({
  shouldForwardProp: (prop) => prop !== '$themeMode'
})<TeamQualificationsProps>`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
  margin-top: ${theme.spacing.md};
  padding: 0;
  list-style: none;
  position: relative;
`

export const QualificationItem = styled.li.withConfig({
  shouldForwardProp: (prop) => prop !== '$themeMode'
})<QualificationItemProps>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  font-size: ${theme.typography.fontSize.sm};
  color: ${({ $themeMode, theme }: { $themeMode?: 'light' | 'dark'; theme: DefaultTheme }) => 
    $themeMode === 'dark' ? theme.colors?.text?.muted || '#94a3b8' : theme.colors?.border?.dark || '#64748b'};
  text-align: left;
  padding: ${theme.spacing.xs};
  border-radius: ${theme.borderRadius.md};
  background: ${({ $themeMode }) => 
    $themeMode === 'dark'
      ? 'rgba(30, 41, 59, 0.3)'
      : 'rgba(248, 250, 252, 0.5)'};
  border: 1px solid ${({ $themeMode }) => 
    $themeMode === 'dark'
      ? 'rgba(255, 255, 255, 0.05)'
      : 'rgba(0, 0, 0, 0.05)'};
  transition: all 0.2s ease;
  
  svg {
    color: ${({ $themeMode, theme }: { $themeMode?: 'light' | 'dark'; theme: DefaultTheme }) => 
    $themeMode === 'dark' ? theme.colors?.primary?.light || '#a78bfa' : theme.colors?.primary?.main || '#6366f1'};
    flex-shrink: 0;
  }
  
  &:hover {
    background: ${({ $themeMode }) => 
      $themeMode === 'dark'
        ? 'rgba(30, 41, 59, 0.5)'
        : 'rgba(248, 250, 252, 0.8)'};
    transform: translateX(4px);
  }
`