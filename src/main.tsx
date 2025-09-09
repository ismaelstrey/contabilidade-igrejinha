import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import GlobalStyles from './styles/globalStyles.ts'
import { applyFontFallback, loadFontsAsync } from './utils/fontLoader.ts'
import { ThemeProvider } from './contexts/ThemeContext'

// Aplica fallback de fontes imediatamente
applyFontFallback()

// Carrega fontes de forma assíncrona
loadFontsAsync()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)