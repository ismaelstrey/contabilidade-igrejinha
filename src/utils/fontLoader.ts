/**
 * Utilitário para carregamento otimizado de fontes
 * Implementa estratégias de performance para reduzir o tempo de carregamento
 */

// Preload das fontes críticas
export const preloadCriticalFonts = (): void => {
  const fontUrls = [
    'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2',
    'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fAZ9hiA.woff2'
  ]

  fontUrls.forEach(url => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'font'
    link.type = 'font/woff2'
    link.crossOrigin = 'anonymous'
    link.href = url
    document.head.appendChild(link)
  })
}

// Carrega fontes de forma assíncrona
export const loadFontsAsync = (): Promise<void> => {
  return new Promise((resolve) => {
    if ('fonts' in document) {
      // Usa a Font Loading API se disponível
      Promise.all([
        document.fonts.load('400 1em Inter'),
        document.fonts.load('600 1em Inter'),
        document.fonts.load('700 1em Inter')
      ]).then(() => {
        document.documentElement.classList.add('fonts-loaded')
        resolve()
      }).catch(() => {
        // Fallback se houver erro
        setTimeout(() => {
          document.documentElement.classList.add('fonts-loaded')
          resolve()
        }, 3000)
      })
    } else {
      // Fallback para navegadores sem suporte
      setTimeout(() => {
        document.documentElement.classList.add('fonts-loaded')
        resolve()
      }, 1000)
    }
  })
}

// Detecta se as fontes já foram carregadas
export const areFontsLoaded = (): boolean => {
  return document.documentElement.classList.contains('fonts-loaded')
}

// Aplica fallback fonts enquanto as fontes principais carregam
export const applyFontFallback = (): void => {
  const style = document.createElement('style')
  style.textContent = `
    .font-loading {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    }
    .fonts-loaded {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    }
  `
  document.head.appendChild(style)
  document.documentElement.classList.add('font-loading')
}