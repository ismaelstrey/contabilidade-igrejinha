import styled, { css, keyframes } from 'styled-components'
import { theme } from '@/styles/theme'

// Animações para modo escuro
const glow = keyframes`
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
`

interface CarouselDotProps {
  isActive: boolean
}

export const TestimonialsContainer = styled.section<{ $themeMode?: 'light' | 'dark' }>`
  padding: ${theme.spacing['4xl']} 0;
  position: relative;
  background: ${({ $themeMode }) => 
    $themeMode === 'dark' 
      ? `linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)`
      : theme.colors.neutral.gray50
  };
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ $themeMode }) => 
      $themeMode === 'dark' 
        ? `radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
           radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`
        : 'none'
    };
    pointer-events: none;
  }
`

export const TestimonialsHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing['3xl']};
`

export const TestimonialsTitle = styled.h2<{ $themeMode?: 'light' | 'dark' }>`
  font-size: ${theme.typography.fontSize['4xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${({ $themeMode }) => 
    $themeMode === 'dark' ? '#f8fafc' : theme.colors.primary.dark
  };
  margin-bottom: ${theme.spacing.md};
  position: relative;
  
  ${({ $themeMode }) => $themeMode === 'dark' && css`
    background: linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 3px;
      background: linear-gradient(90deg, #3b82f6, #8b5cf6);
      border-radius: 2px;
      animation: ${glow} 2s ease-in-out infinite;
    }
  `}
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.typography.fontSize['3xl']};
  }
`

export const TestimonialsSubtitle = styled.p<{ $themeMode?: 'light' | 'dark' }>`
  font-size: ${theme.typography.fontSize.lg};
  color: ${({ $themeMode }) => 
    $themeMode === 'dark' ? '#cbd5e1' : theme.colors.neutral.gray600
  };
  max-width: 600px;
  margin: 0 auto;
  transition: color ${theme.transitions.normal};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.typography.fontSize.base};
  }
`

export const TestimonialsCarousel = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 0 ${theme.spacing.lg};
  }
`

export const TestimonialCard = styled.div<{ $themeMode?: 'light' | 'dark' }>`
  background: ${({ $themeMode }) => 
    $themeMode === 'dark' 
      ? `linear-gradient(135deg, 
          rgba(30, 41, 59, 0.8) 0%, 
          rgba(51, 65, 85, 0.6) 50%, 
          rgba(71, 85, 105, 0.4) 100%)`
      : theme.colors.neutral.white
  };
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing['2xl']};
  box-shadow: ${({ $themeMode }) => 
    $themeMode === 'dark' 
      ? `0 25px 50px -12px rgba(0, 0, 0, 0.5),
         0 0 0 1px rgba(59, 130, 246, 0.1),
         inset 0 1px 0 rgba(255, 255, 255, 0.1)`
      : theme.shadows.lg
  };
  text-align: center;
  min-height: 300px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  backdrop-filter: ${({ $themeMode }) => 
    $themeMode === 'dark' ? 'blur(10px)' : 'none'
  };
  border: ${({ $themeMode }) => 
    $themeMode === 'dark' ? '1px solid rgba(59, 130, 246, 0.2)' : 'none'
  };
  
  ${({ $themeMode }) => $themeMode === 'dark' && css`
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(59, 130, 246, 0.1),
        transparent
      );
      transition: left 0.5s ease;
    }
    
    &:hover::before {
      left: 100%;
    }
  `}
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xl};
    min-height: 250px;
  }
`

export const TestimonialContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
`

export const TestimonialRating = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.xs};
`

export const TestimonialMessage = styled.blockquote<{ $themeMode?: 'light' | 'dark' }>`
  font-size: ${theme.typography.fontSize.lg};
  font-style: italic;
  color: ${({ $themeMode }) => 
    $themeMode === 'dark' ? '#e2e8f0' : theme.colors.neutral.gray700
  };
  line-height: 1.7;
  margin: 0;
  position: relative;
  z-index: 1;
  transition: color ${theme.transitions.normal};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.typography.fontSize.base};
  }
`

export const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.md};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${theme.spacing.sm};
  }
`

export const AuthorPhoto = styled.div`
  width: 60px;
  height: 60px;
  border-radius: ${theme.borderRadius.full};
  overflow: hidden;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  svg {
    width: 100%;
    height: 100%;
  }
`

export const AuthorInfo = styled.div`
  text-align: left;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    text-align: center;
  }
`

export const AuthorName = styled.h3<{ $themeMode?: 'light' | 'dark' }>`
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${({ $themeMode }) => 
    $themeMode === 'dark' ? '#60a5fa' : theme.colors.primary.dark
  };
  margin: 0 0 ${theme.spacing.xs} 0;
  position: relative;
  z-index: 1;
  transition: color ${theme.transitions.normal};
`

export const AuthorCompany = styled.p<{ $themeMode?: 'light' | 'dark' }>`
  font-size: ${theme.typography.fontSize.sm};
  color: ${({ $themeMode }) => 
    $themeMode === 'dark' ? '#94a3b8' : theme.colors.neutral.gray500
  };
  margin: 0;
  position: relative;
  z-index: 1;
  transition: color ${theme.transitions.normal};
`

export const CarouselControls = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  pointer-events: none;
`

export const CarouselButton = styled.button<{ $themeMode?: 'light' | 'dark' }>`
  width: 48px;
  height: 48px;
  border-radius: ${theme.borderRadius.full};
  background: ${({ $themeMode }) => 
    $themeMode === 'dark' 
      ? 'rgba(30, 41, 59, 0.8)'
      : theme.colors.neutral.white
  };
  border: ${({ $themeMode }) => 
    $themeMode === 'dark' 
      ? '2px solid rgba(59, 130, 246, 0.5)'
      : `2px solid ${theme.colors.primary.main}`
  };
  color: ${({ $themeMode }) => 
    $themeMode === 'dark' ? '#60a5fa' : theme.colors.primary.main
  };
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${theme.transitions.fast};
  pointer-events: all;
  box-shadow: ${({ $themeMode }) => 
    $themeMode === 'dark' 
      ? `0 10px 25px -5px rgba(0, 0, 0, 0.3),
         0 0 0 1px rgba(59, 130, 246, 0.1)`
      : theme.shadows.md
  };
  backdrop-filter: ${({ $themeMode }) => 
    $themeMode === 'dark' ? 'blur(10px)' : 'none'
  };
  
  &:hover {
    background: ${({ $themeMode }) => 
      $themeMode === 'dark' 
        ? 'rgba(59, 130, 246, 0.2)'
        : theme.colors.primary.main
    };
    color: ${({ $themeMode }) => 
      $themeMode === 'dark' ? '#ffffff' : theme.colors.neutral.white
    };
    transform: scale(1.1);
    box-shadow: ${({ $themeMode }) => 
      $themeMode === 'dark' 
        ? `0 15px 35px -5px rgba(59, 130, 246, 0.3),
           0 0 0 1px rgba(59, 130, 246, 0.3)`
        : `0 15px 35px -5px rgba(0, 0, 0, 0.2)`
    };
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 40px;
    height: 40px;
  }
`

export const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.xl};
`

interface CarouselDotStyledProps extends CarouselDotProps {
  $themeMode?: 'light' | 'dark'
}

export const CarouselDot = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'isActive' && prop !== '$themeMode'
})<CarouselDotStyledProps>`
  width: 12px;
  height: 12px;
  border-radius: ${theme.borderRadius.full};
  border: none;
  cursor: pointer;
  transition: all ${theme.transitions.fast};
  position: relative;
  
  ${({ isActive, $themeMode }) => isActive ? css`
    background: ${$themeMode === 'dark' ? '#3b82f6' : theme.colors.primary.main};
    transform: scale(1.2);
    box-shadow: ${$themeMode === 'dark' 
      ? '0 0 10px rgba(59, 130, 246, 0.5)'
      : '0 2px 4px rgba(0, 0, 0, 0.1)'
    };
    
    ${$themeMode === 'dark' && css`
      animation: ${glow} 2s ease-in-out infinite;
      
      &::after {
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        border-radius: ${theme.borderRadius.full};
        background: linear-gradient(45deg, #3b82f6, #8b5cf6);
        z-index: -1;
        opacity: 0.3;
      }
    `}
  ` : css`
    background: ${$themeMode === 'dark' 
      ? 'rgba(148, 163, 184, 0.3)' 
      : theme.colors.neutral.gray300
    };
    
    &:hover {
      background: ${$themeMode === 'dark' 
        ? 'rgba(59, 130, 246, 0.5)' 
        : theme.colors.primary.light
      };
      transform: scale(1.1);
    }
  `}
`