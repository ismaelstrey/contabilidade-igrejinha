import styled, { DefaultTheme } from 'styled-components'
import { theme } from '@/styles/theme'

export const ServicesSection = styled.section`
  padding: ${theme.spacing['4xl']} 0;
  background: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)'
      : 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%)'
  };
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.1) 0%, transparent 50%)'
        : 'radial-gradient(ellipse at center, rgba(37, 99, 235, 0.05) 0%, transparent 50%)'
    };
    z-index: 0;
  }
`

export const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};
  position: relative;
  z-index: 1;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 0 ${theme.spacing.md};
  }
`

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing['3xl']};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: ${({ $themeMode, theme }: { $themeMode?: 'light' | 'dark'; theme: DefaultTheme }) =>
    $themeMode === 'dark'
      ? `linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)`
      : `linear-gradient(90deg, ${theme.colors?.primary?.dark || '#2563eb'}, ${theme.colors?.primary?.light || '#7c3aed'}, ${theme.colors?.info?.dark || '#0891b2'})`
  };
    border-radius: 2px;
    animation: shimmer 3s ease-in-out infinite;
  }
  
  @keyframes shimmer {
    0%, 100% { opacity: 0.7; transform: translateX(-50%) scale(1); }
    50% { opacity: 1; transform: translateX(-50%) scale(1.1); }
  }
`

export const SectionSubtitle = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.medium};
  background: ${({ $themeMode, theme }: { $themeMode?: 'light' | 'dark'; theme: DefaultTheme }) =>
    $themeMode === 'dark'
      ? `linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4)`
      : `linear-gradient(135deg, ${theme.colors?.primary?.dark || '#2563eb'}, ${theme.colors?.primary?.light || '#7c3aed'}, ${theme.colors?.success?.dark || '#059669'})`
  };
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${theme.spacing.sm};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  animation: gradientShift 4s ease-in-out infinite;
  
  @keyframes gradientShift {
    0%, 100% { filter: hue-rotate(0deg); }
    50% { filter: hue-rotate(30deg); }
  }
`

export const SectionTitle = styled.h2`
  font-size: ${theme.typography.fontSize['4xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${({ theme }) => 
    theme.mode === 'dark' ? '#f1f5f9' : theme.colors.text.primary
  };
  margin-bottom: ${theme.spacing.md};
  position: relative;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.typography.fontSize['3xl']};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: ${({ $themeMode, theme }: { $themeMode?: 'light' | 'dark'; theme: DefaultTheme }) =>
    $themeMode === 'dark'
      ? `linear-gradient(90deg, #8b5cf6, #06b6d4, #3b82f6)`
      : `linear-gradient(90deg, ${theme.colors?.warning?.dark || '#f97316'}, ${theme.colors?.error?.dark || '#dc2626'}, ${theme.colors?.primary?.light || '#7c3aed'})`
  };
    animation: expandLine 2s ease-out forwards;
  }

  @keyframes expandLine {
    to { width: 200px; }
  }
`

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.lg};
  }
`

export const ServiceCard = styled.div`
  background: ${({ $themeMode, theme }: { $themeMode?: 'light' | 'dark'; theme: DefaultTheme }) =>
    $themeMode === 'dark'
      ? `linear-gradient(145deg, #0f172a 0%, #1e293b 30%, #334155 70%, #1e293b 100%)`
      : `linear-gradient(145deg, ${theme.colors?.background?.light || '#ffffff'} 0%, ${theme.colors?.background?.paper || '#f8fafc'} 100%)`
  };
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing.xl};
  box-shadow: ${({ theme }) =>
    theme.mode === 'dark'
      ? '0 20px 40px rgba(0, 0, 0, 0.6), 0 8px 16px rgba(59, 130, 246, 0.1), 0 4px 8px rgba(168, 85, 247, 0.05)'
      : '0 10px 30px rgba(0, 0, 0, 0.1), 0 1px 8px rgba(0, 0, 0, 0.05)'
  };
  border: 1px solid ${({ theme }) =>
    theme.mode === 'dark' ? 'rgba(59, 130, 246, 0.2)' : theme.colors.neutral.gray100
  };
  transition: all ${theme.transitions.normal};
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ $themeMode, theme }: { $themeMode?: 'light' | 'dark'; theme: DefaultTheme }) =>
    $themeMode === 'dark'
      ? `linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4, #3b82f6)`
      : `linear-gradient(90deg, ${theme.colors?.primary?.dark || '#2563eb'}, ${theme.colors?.primary?.light || '#7c3aed'}, ${theme.colors?.info?.dark || '#0891b2'}, ${theme.colors?.success?.dark || '#059669'})`};
    background-size: 200% 100%;
    animation: gradientMove 3s ease-in-out infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.15), transparent)'
      : 'linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.05), transparent)'
  };
    transition: left 0.6s ease;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: ${({ theme }) =>
    theme.mode === 'dark'
      ? '0 30px 60px rgba(0, 0, 0, 0.7), 0 15px 30px rgba(59, 130, 246, 0.4), 0 8px 16px rgba(139, 92, 246, 0.3)'
      : '0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(37, 99, 235, 0.1)'
  };
    border-color: ${({ theme }) =>
    theme.mode === 'dark' ? 'rgba(59, 130, 246, 0.7)' : theme.colors.primary.light
  };

    &::after {
      left: 100%;
    }
  }
  
  @keyframes gradientMove {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
`

export const ServiceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: ${theme.spacing.md};
  text-align: center;
  color: ${({ theme }) =>
    theme.mode === 'dark'
      ? '#e2e8f0'
      : theme.colors.primary.main
  };
  position: relative;
  z-index: 1;
  transition: all ${theme.transitions.normal};

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    background: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(168, 85, 247, 0.2) 50%, transparent 70%)'
      : 'radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 70%)'
  };
    border-radius: 50%;
    z-index: -1;
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.7; }
    50% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
  }
`

export const ServiceTitle = styled.h3`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${({ theme }) =>
    theme.mode === 'dark' ? '#f1f5f9' : theme.colors.text.primary
  };
  margin-bottom: ${theme.spacing.sm};
  text-align: center;
  position: relative;
  transition: all ${theme.transitions.normal};

  &:hover {
    background: ${({ $themeMode, theme }: { $themeMode?: 'light' | 'dark'; theme: DefaultTheme }) =>
    $themeMode === 'dark'
      ? `linear-gradient(135deg, #3b82f6, #8b5cf6)`
      : `linear-gradient(135deg, ${theme.colors?.warning?.dark || '#f97316'}, ${theme.colors?.warning?.darker || '#ea580c'})`};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transform: translateY(-2px);
  }
`

export const ServiceDescription = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${({ theme }) =>
    theme.mode === 'dark' ? '#cbd5e1' : theme.colors.text.secondary
  };
  margin-bottom: ${theme.spacing.lg};
  line-height: 1.6;
  text-align: center;
  flex-grow: 1;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 1px;
    background: ${({ $themeMode, theme }: { $themeMode?: 'light' | 'dark'; theme: DefaultTheme }) =>
    $themeMode === 'dark'
      ? `linear-gradient(90deg, transparent, #3b82f6, transparent)`
      : `linear-gradient(90deg, transparent, ${theme.colors?.primary?.main || '#3b82f6'}, transparent)`};
  }
`

export const ServiceFeatures = styled.ul`
  list-style: none;
  margin-bottom: ${theme.spacing.lg};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 0;
    right: 0;
    height: 1px;
    background: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent)'
      : 'linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.2), transparent)'
  };
  }
`

export const ServiceFeature = styled.li`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  font-size: ${theme.typography.fontSize.sm};
  color: ${({ theme }) =>
    theme.mode === 'dark' ? '#94a3b8' : theme.colors.text.secondary
  };
  margin-bottom: ${theme.spacing.xs};
  padding: ${theme.spacing.xs};
  border-radius: ${theme.borderRadius.sm};
  transition: all ${theme.transitions.fast};
  position: relative;

  &:hover {
    background: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'rgba(59, 130, 246, 0.15)'
      : 'rgba(37, 99, 235, 0.05)'
  };
    transform: translateX(4px);
  }

  span {
    background: ${({ $themeMode, theme }: { $themeMode?: 'light' | 'dark'; theme: DefaultTheme }) =>
    $themeMode === 'dark'
      ? `linear-gradient(135deg, #10b981, #34d399)`
      : `linear-gradient(135deg, ${theme.colors?.success?.dark || '#059669'}, ${theme.colors?.success?.main || '#10b981'})`};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: ${theme.typography.fontWeight.bold};
    flex-shrink: 0;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 16px;
      height: 16px;
      background: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)'
      : 'radial-gradient(circle, rgba(5, 150, 105, 0.1) 0%, transparent 70%)'
  };
      border-radius: 50%;
      z-index: -1;
    }
  }
`

export const ServicePrice = styled.div`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  background: ${({ $themeMode, theme }: { $themeMode?: 'light' | 'dark'; theme: DefaultTheme }) =>
    $themeMode === 'dark'
      ? `linear-gradient(135deg, #fbbf24, #f59e0b)`
      : `linear-gradient(135deg, ${theme.colors?.warning?.dark || '#f97316'}, ${theme.colors?.warning?.darker || '#ea580c'})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  margin-bottom: ${theme.spacing.md};
  padding: ${theme.spacing.sm};
  background-color: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'rgba(251, 191, 36, 0.1)'
      : 'rgba(249, 115, 22, 0.1)'
  };
  border-radius: ${theme.borderRadius.md};
  border: 1px solid ${({ theme }) =>
    theme.mode === 'dark'
      ? 'rgba(251, 191, 36, 0.2)'
      : 'rgba(249, 115, 22, 0.2)'
  };
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'linear-gradient(90deg, transparent, rgba(251, 191, 36, 0.1), transparent)'
      : 'linear-gradient(90deg, transparent, rgba(249, 115, 22, 0.1), transparent)'
  };
    animation: shimmerPrice 3s ease-in-out infinite;
  }

  @keyframes shimmerPrice {
    0% { left: -100%; }
    50% { left: 100%; }
    100% { left: 100%; }
  }
`