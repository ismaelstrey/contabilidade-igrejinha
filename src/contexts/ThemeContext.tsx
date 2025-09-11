import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'

// Tipos para o tema
export type ThemeMode = 'light' | 'dark'

interface ThemeContextType {
  themeMode: ThemeMode
  toggleTheme: () => void
  setTheme: (mode: ThemeMode) => void
}

// Contexto do tema
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// Hook para usar o contexto do tema
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider')
  }
  return context
}

// Função para detectar preferência do sistema
const getSystemTheme = (): ThemeMode => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  return 'light'
}

// Função para obter tema salvo ou do sistema
const getInitialTheme = (): ThemeMode => {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme') as ThemeMode
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      return savedTheme
    }
  }
  return getSystemTheme()
}

interface ThemeProviderProps {
  children: ReactNode
}

// Provider do tema
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(getInitialTheme)

  // Salva o tema no localStorage quando muda
  useEffect(() => {
    localStorage.setItem('theme', themeMode)
    
    // Adiciona classe no body para CSS global
    document.body.className = themeMode
  }, [themeMode])

  // Escuta mudanças na preferência do sistema
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleChange = (e: MediaQueryListEvent) => {
      // Só muda automaticamente se não há preferência salva
      const savedTheme = localStorage.getItem('theme')
      if (!savedTheme) {
        setThemeMode(e.matches ? 'dark' : 'light')
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const toggleTheme = () => {
    setThemeMode(prev => prev === 'light' ? 'dark' : 'light')
  }

  const setTheme = (mode: ThemeMode) => {
    setThemeMode(mode)
  }

  // Cria o tema com as cores apropriadas
  const currentTheme = {
    ...theme,
    mode: themeMode,
    colors: {
      ...theme.colors,
      // Cores que mudam baseado no tema
      text: {
        primary: themeMode === 'dark' ? '#f9fafb' : '#111827',
        secondary: themeMode === 'dark' ? '#d1d5db' : '#6b7280',
        muted: themeMode === 'dark' ? '#9ca3af' : '#9ca3af'
      },
      background: {
        paper: themeMode === 'dark' ? '#1f2937' : '#ffffff',
        main: themeMode === 'dark' ? '#111827' : '#ffffff',
        secondary: themeMode === 'dark' ? '#374151' : '#f9fafb'
      },
      border: {
        light: themeMode === 'dark' ? '#374151' : '#e5e7eb'
      }
    }
  }

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme, setTheme }}>
      <StyledThemeProvider theme={currentTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}