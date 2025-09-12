export const theme = {
  colors: {
    primary: {
      main: '#2563eb',
      light: '#3b82f6',
      dark: '#1d4ed8',
      gradient: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
      background: '#dbeafe'
    },
    secondary: {
      main: '#10b981',
      light: '#34d399',
      dark: '#059669'
    },
    neutral: {
      white: '#ffffff',
      gray50: '#f9fafb',
      gray100: '#f3f4f6',
      gray200: '#e5e7eb',
      gray300: '#d1d5db',
      gray400: '#9ca3af',
      gray500: '#6b7280',
      gray600: '#4b5563',
      gray700: '#374151',
      gray800: '#1f2937',
      gray900: '#111827'
    },
    accent: {
      orange: '#f97316',
      yellow: '#eab308',
      red: '#ef4444'
    },
    warning: {
      main: '#f59e0b',
      light: '#fbbf24',
      dark: '#f97316',
      darker: '#ea580c',
      background: '#fef3c7'
    },
    success: {
      main: '#10b981',
      light: '#a7f3d0',
      dark: '#065f46',
      background: '#d1fae5'
    },
    text: {
      primary: '#111827',
      secondary: '#6b7280',
      muted: '#9ca3af'
    },
    background: {
      default: '#f9fafb',
      paper: '#ffffff',
      secondary: '#f3f4f6',
      sidebar: '#ffffff',
      main: '#ffffff',
      muted: '#f3f4f6',
      dark: '#111827',
      light: '#f9fafb',
      darker: '#1f2937'
    },
    foreground: {
      default: '#001514',
      muted: '#6b7280'
    },
    border: {
      light: '#e5e7eb',
      medium: '#d1d5db',
      dark: '#1f2937'
    },
    error: {
      main: '#ef4444',
      light: '#fecaca',
      dark: '#dc2626',
      error: '#fecaca'
    },
    info: {
      main: '#06b6d4',
      light: '#a5f3fc',
      dark: '#0891b2',
      background: '#e0f2fe'
    }
  },
  darkColors: {
    primary: {
      main: '#3b82f6',
      light: '#60a5fa',
      dark: '#2563eb',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
      warning: '#f59e0b',
      accent: '#f97316',
      background: '#1e3a8a',
      muted: '#374151',
      error: '#fecaca'
    },
    secondary: {
      main: '#10b981',
      light: '#34d399',
      dark: '#059669'
    },
    neutral: {
      white: '#ffffff',
      gray50: '#f9fafb',
      gray100: '#f3f4f6',
      gray200: '#e5e7eb',
      gray300: '#d1d5db',
      gray400: '#9ca3af',
      gray500: '#6b7280',
      gray600: '#4b5563',
      gray700: '#374151',
      gray800: '#1f2937',
      gray900: '#111827'
    },
    accent: {
      orange: '#f97316',
      yellow: '#eab308',
      red: '#ef4444'
    },
    text: {
      primary: '#f9fafb',
      secondary: '#d1d5db',
      muted: '#9ca3af'
    },
    background: {
      default: '#111827',
      paper: '#1f2937',
      secondary: '#374151',
      sidebar: '#1f2937',
      main: '#111827',
      primary: '#3b82f6',
      muted: '#374151',
      dark: '#111827',
      light: '#f9fafb',
      darker: '#1f2937'
    },
    foreground: {
      default: '#FEFEE3',
      muted: '#d1d5db'
    },
    border: {
      light: '#374151',
      medium: '#4b5563',
      dark: '#1f2937'
    },
    error: {
      main: '#ef4444',
      light: '#fecaca',
      dark: '#dc2626'
    },
    warning: {
      main: '#f59e0b',
      light: '#fbbf24',
      dark: '#f97316',
      darker: '#ea580c',
      background: '#fef3c7'
    },
    info: {
      main: '#06b6d4',
      light: '#a5f3fc',
      dark: '#0891b2',
      background: '#e0f2fe'
    },
    success: {
      main: '#10b981',
      light: '#a7f3d0',
      dark: '#065f46',
      background: '#d1fae5'
    }
  },
  typography: {
    fontFamily: {
      primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      h1: '2.25rem',
      h2: '1.875rem',
      h3: '1.5rem'
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    }
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem',
    '2xl': '4rem',
    '3xl': '6rem',
    '4xl': '8rem'
  },
  breakpoints: {
    sm: '640px',
    mobile: '480px',
    md: '768px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px'
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    card: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    cardHover: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px'
  },
  transitions: {
    fast: '0.15s ease-in-out',
    normal: '0.3s ease-in-out',
    slow: '0.5s ease-in-out'
  }
}

export type Theme = typeof theme