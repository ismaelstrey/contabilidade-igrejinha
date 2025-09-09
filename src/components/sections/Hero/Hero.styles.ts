import styled from 'styled-components'
import { theme } from '@/styles/theme'

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: ${({ theme }) => 
    theme.mode === 'dark'
      ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 30%, #334155 60%, #1e40af20 100%)'
      : `linear-gradient(135deg, ${theme.colors.neutral.gray50} 0%, ${theme.colors.neutral.white} 50%, ${theme.colors.primary.main}10 100%)`
  };
  padding-top: 80px;
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
        ? "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"grid\" width=\"10\" height=\"10\" patternUnits=\"userSpaceOnUse\"><path d=\"M 10 0 L 0 0 0 10\" fill=\"none\" stroke=\"%2364748b\" stroke-width=\"0.3\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23grid)\"/></svg>')"
        : "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"grid\" width=\"10\" height=\"10\" patternUnits=\"userSpaceOnUse\"><path d=\"M 10 0 L 0 0 0 10\" fill=\"none\" stroke=\"%23e5e7eb\" stroke-width=\"0.5\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23grid)\"/></svg>')"
    };
    opacity: ${({ theme }) => theme.mode === 'dark' ? '0.2' : '0.3'};
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => 
      theme.mode === 'dark'
        ? 'radial-gradient(ellipse at top, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(ellipse at bottom right, rgba(139, 92, 246, 0.1) 0%, transparent 50%)'
        : 'none'
    };
    z-index: -1;
    animation: ${({ theme }) => theme.mode === 'dark' ? 'gradientShift 8s ease-in-out infinite' : 'none'};
  }
  
  @keyframes gradientShift {
    0%, 100% { opacity: 0.1; }
    50% { opacity: 0.2; }
  }
`

export const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing['3xl']};
  align-items: center;
  
  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing['2xl']};
    text-align: center;
  }
`

export const HeroSubtitle = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${({ theme }) => 
    theme.mode === 'dark'
      ? '#60a5fa'
      : theme.colors.primary.main
  };
  margin-bottom: ${theme.spacing.sm};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 60px;
    height: 2px;
    background: ${({ theme }) => 
      theme.mode === 'dark'
        ? 'linear-gradient(90deg, #60a5fa, #a78bfa)'
        : theme.colors.primary.gradient
    };
    border-radius: 1px;
    animation: ${({ theme }) => theme.mode === 'dark' ? 'expandLine 2s ease-out' : 'none'};
  }
  
  @keyframes expandLine {
    0% { width: 0; }
    100% { width: 60px; }
  }
`

export const HeroTitle = styled.h1`
  font-size: ${theme.typography.fontSize['5xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${({ theme }) => 
    theme.mode === 'dark'
      ? theme.colors.text.primary
      : theme.colors.neutral.gray900
  };
  margin-bottom: ${theme.spacing.md};
  line-height: 1.1;
  position: relative;
  
  span {
    background: ${({ theme }) => 
      theme.mode === 'dark'
        ? 'linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6)'
        : theme.colors.primary.gradient
    };
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    background-size: 200% 200%;
    animation: ${({ theme }) => theme.mode === 'dark' ? 'gradientMove 3s ease-in-out infinite' : 'none'};
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${({ theme }) => 
        theme.mode === 'dark'
          ? 'linear-gradient(135deg, rgba(96, 165, 250, 0.1), rgba(167, 139, 250, 0.1))'
          : 'none'
      };
      border-radius: 4px;
      z-index: -1;
    }
  }
  
  @keyframes gradientMove {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.typography.fontSize['4xl']};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.typography.fontSize['3xl']};
  }
`

export const HeroDescription = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  color: ${({ theme }) => 
    theme.mode === 'dark'
      ? theme.colors.text.secondary
      : theme.colors.neutral.gray600
  };
  margin-bottom: ${theme.spacing.xl};
  line-height: 1.6;
  max-width: 500px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -10px;
    width: 3px;
    height: 100%;
    background: ${({ theme }) => 
      theme.mode === 'dark'
        ? 'linear-gradient(180deg, #60a5fa, transparent)'
        : 'none'
    };
    border-radius: 2px;
    opacity: 0.6;
  }
  
  @media (max-width: ${theme.breakpoints.desktop}) {
    max-width: 600px;
    margin: 0 auto ${theme.spacing.xl};
    
    &::before {
      display: none;
    }
  }
`

export const HeroButtons = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing['2xl']};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing.lg};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.md};
  }
`

export const StatItem = styled.div`
  text-align: left;
  
  @media (max-width: ${theme.breakpoints.desktop}) {
    text-align: center;
  }
`

export const StatNumber = styled.div`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${({ theme }) => 
    theme.mode === 'dark'
      ? '#60a5fa'
      : theme.colors.primary.main
  };
  margin-bottom: ${theme.spacing.xs};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => 
      theme.mode === 'dark'
        ? 'radial-gradient(circle at center, rgba(96, 165, 250, 0.1) 0%, transparent 70%)'
        : 'none'
    };
    border-radius: 8px;
    z-index: -1;
    animation: ${({ theme }) => theme.mode === 'dark' ? 'pulse 2s ease-in-out infinite' : 'none'};
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 0.5; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.05); }
  }
`

export const StatLabel = styled.div`
  font-size: ${theme.typography.fontSize.sm};
  color: ${({ theme }) => 
    theme.mode === 'dark'
      ? theme.colors.text.secondary
      : theme.colors.neutral.gray600
  };
  font-weight: ${theme.typography.fontWeight.medium};
  transition: color ${theme.transitions.normal};
`

export const HeroImage = styled.div`
  position: relative;
  height: 500px;
  
  @media (max-width: ${theme.breakpoints.desktop}) {
    height: 300px;
    order: -1;
  }
`

export const FloatingCard = styled.div`
  position: absolute;
  background: ${({ theme }) => 
    theme.mode === 'dark'
      ? 'linear-gradient(135deg, rgba(30, 41, 59, 0.9), rgba(51, 65, 85, 0.8))'
      : theme.colors.neutral.white
  };
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.md};
  box-shadow: ${({ theme }) => 
    theme.mode === 'dark'
      ? '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(96, 165, 250, 0.1)'
      : theme.shadows.lg
  };
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  min-width: 180px;
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => 
    theme.mode === 'dark'
      ? 'rgba(96, 165, 250, 0.2)'
      : theme.colors.neutral.gray100
  };
  transition: all ${theme.transitions.normal};
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
        ? 'linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.1), transparent)'
        : 'none'
    };
    transition: left 0.5s ease;
  }
  
  &:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: ${({ theme }) => 
      theme.mode === 'dark'
        ? '0 25px 30px -5px rgba(0, 0, 0, 0.4), 0 15px 15px -5px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(96, 165, 250, 0.2)'
        : '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
    };
    
    &::before {
      left: 100%;
    }
  }
  
  span {
    font-size: ${theme.typography.fontSize['2xl']};
    flex-shrink: 0;
    filter: ${({ theme }) => 
      theme.mode === 'dark'
        ? 'drop-shadow(0 0 8px rgba(96, 165, 250, 0.3))'
        : 'none'
    };
  }
  
  div {
    strong {
      display: block;
      font-size: ${theme.typography.fontSize.sm};
      font-weight: ${theme.typography.fontWeight.semibold};
      color: ${({ theme }) => 
        theme.mode === 'dark'
          ? theme.colors.text.primary
          : theme.colors.neutral.gray900
      };
      margin-bottom: 2px;
    }
    
    p {
      font-size: ${theme.typography.fontSize.xs};
      color: ${({ theme }) => 
        theme.mode === 'dark'
          ? theme.colors.text.secondary
          : theme.colors.neutral.gray600
      };
      margin: 0;
    }
  }
  
  @media (max-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
`