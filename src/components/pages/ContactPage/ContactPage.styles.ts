import styled from 'styled-components'

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