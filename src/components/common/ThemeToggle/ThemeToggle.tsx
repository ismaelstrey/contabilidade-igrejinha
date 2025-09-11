import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useTheme } from '../../../contexts/ThemeContext'

// Estilos do botão toggle
const ToggleButton = styled(motion.button)`
  position: relative;
  width: 60px;
  height: 30px;
  background: ${({ theme }) => 
    theme.mode === 'dark' 
      ? `linear-gradient(135deg, ${theme.colors?.background?.dark || '#1f2937'} 0%, ${theme.colors?.background?.darker || '#374151'} 100%)`
      : `linear-gradient(135deg, ${theme.colors?.background?.light || '#f3f4f6'} 0%, ${theme.colors?.border?.light || '#e5e7eb'} 100%)`
  };
  border: 2px solid ${({ theme }) => theme.colors.border.light};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: ${({ theme }) => theme.mode === 'dark' ? 'flex-end' : 'flex-start'};
  padding: 2px;
  transition: all ${({ theme }) => theme.transitions.normal};
  box-shadow: ${({ theme }) => theme.shadows.sm};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.md};
    transform: translateY(-1px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary.main}33;
  }
`

// Círculo interno do toggle
const ToggleCircle = styled(motion.div)`
  width: 22px;
  height: 22px;
  background: ${({ theme }) => 
    theme.mode === 'dark'
      ? `linear-gradient(135deg, ${theme.colors?.warning?.light || '#fbbf24'} 0%, ${theme.colors?.warning?.main || '#f59e0b'} 100%)`
      : `linear-gradient(135deg, ${theme.colors?.primary?.light || '#60a5fa'} 0%, ${theme.colors?.primary?.main || '#3b82f6'} 100%)`
  };
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    background: ${({ theme }) => 
      theme.mode === 'dark'
        ? theme.colors?.warning?.light || '#fbbf24'
        : theme.colors?.neutral?.white || '#ffffff'
    };
    border-radius: 50%;
    opacity: 0.8;
  }
`

// Ícone do sol
const SunIcon = styled.div`
  width: 14px;
  height: 14px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background: ${({ theme }) => theme.colors?.neutral?.white || '#ffffff'};
    border-radius: 50%;
    box-shadow: 
      0 0 0 2px ${({ theme }) => theme.colors?.neutral?.white || '#ffffff'},
      12px 0 0 -10px ${({ theme }) => theme.colors?.neutral?.white || '#ffffff'},
      -12px 0 0 -10px ${({ theme }) => theme.colors?.neutral?.white || '#ffffff'},
      0 12px 0 -10px ${({ theme }) => theme.colors?.neutral?.white || '#ffffff'},
      0 -12px 0 -10px ${({ theme }) => theme.colors?.neutral?.white || '#ffffff'},
      8px 8px 0 -10px ${({ theme }) => theme.colors?.neutral?.white || '#ffffff'},
      -8px -8px 0 -10px ${({ theme }) => theme.colors?.neutral?.white || '#ffffff'},
      8px -8px 0 -10px ${({ theme }) => theme.colors?.neutral?.white || '#ffffff'},
      -8px 8px 0 -10px ${({ theme }) => theme.colors?.neutral?.white || '#ffffff'};
  }
`

// Ícone da lua
const MoonIcon = styled.div`
  width: 14px;
  height: 14px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 10px;
    height: 10px;
    background: ${({ theme }) => theme.colors?.background?.dark || '#1f2937'};
    border-radius: 50%;
    box-shadow: 2px -2px 0 0 ${({ theme }) => theme.colors?.background?.dark || '#1f2937'};
  }
`

// Container do componente
const ThemeToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`

// Label opcional
const ThemeLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`

interface ThemeToggleProps {
  showLabel?: boolean
  className?: string
}

/**
 * Componente para alternar entre tema claro e escuro
 * @param showLabel - Se deve mostrar o label do tema atual
 * @param className - Classes CSS adicionais
 */
export const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  showLabel = false,
  className 
}) => {
  const { themeMode, toggleTheme } = useTheme()

  const handleToggle = () => {
    toggleTheme()
  }

  return (
    <ThemeToggleContainer className={className}>
      {showLabel && (
        <ThemeLabel>
          {themeMode === 'dark' ? 'Escuro' : 'Claro'}
        </ThemeLabel>
      )}
      
      <ToggleButton
        onClick={handleToggle}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        aria-label={`Alternar para tema ${themeMode === 'dark' ? 'claro' : 'escuro'}`}
        title={`Alternar para tema ${themeMode === 'dark' ? 'claro' : 'escuro'}`}
      >
        <ToggleCircle
          layout
          transition={{
            type: 'spring',
            stiffness: 700,
            damping: 30
          }}
        >
          {themeMode === 'dark' ? <MoonIcon /> : <SunIcon />}
        </ToggleCircle>
      </ToggleButton>
    </ThemeToggleContainer>
  )
}

export default ThemeToggle