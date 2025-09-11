/**
 * Configurações de performance e otimizações para SEO
 * Baseado no relatório de recomendações de SEO
 */

// Configurações de lazy loading
export const LAZY_LOADING_CONFIG = {
  // Componentes que devem ser carregados sob demanda
  LAZY_COMPONENTS: [
    'FAQPage',
    'TeamPage',
    'ContactPage',
    'PostPage'
  ],
  
  // Threshold para intersection observer
  INTERSECTION_THRESHOLD: 0.1,
  
  // Margem para preload
  ROOT_MARGIN: '50px'
};

// Configurações de code splitting
export const CODE_SPLITTING_CONFIG = {
  // Chunks que devem ser separados
  CHUNKS: {
    ANIMATIONS: 'animations', // framer-motion
    VENDOR: 'vendor',         // bibliotecas externas
    UI_COMPONENTS: 'ui-components',
    PAGES: 'pages',
    UTILITIES: 'utilities',
    STYLING: 'styling'
  },
  
  // Tamanho máximo dos chunks (em KB)
  MAX_CHUNK_SIZE: 250
};

// Configurações de cache
export const CACHE_CONFIG = {
  // Tempo de cache para diferentes tipos de recursos
  STATIC_ASSETS: '1y',      // CSS, JS, imagens
  API_RESPONSES: '5m',      // Respostas da API
  HTML_PAGES: '1h',         // Páginas HTML
  
  // Headers de cache
  CACHE_HEADERS: {
    'Cache-Control': 'public, max-age=31536000', // 1 ano
    'Expires': new Date(Date.now() + 31536000000).toUTCString()
  }
};

// Configurações de compressão
export const COMPRESSION_CONFIG = {
  // Tipos de arquivo para compressão
  COMPRESS_TYPES: [
    'text/html',
    'text/css',
    'text/javascript',
    'application/javascript',
    'application/json',
    'text/xml',
    'application/xml'
  ],
  
  // Nível de compressão
  COMPRESSION_LEVEL: 6,
  
  // Tamanho mínimo para compressão
  MIN_SIZE: 1024 // 1KB
};

// Configurações de preload
export const PRELOAD_CONFIG = {
  // Recursos críticos para preload
  CRITICAL_RESOURCES: [
    '/src/assets/fonts/inter-var.woff2',
    '/src/main.tsx'
  ],
  
  // Recursos para prefetch
  PREFETCH_RESOURCES: [
    '/api/company-info',
    '/api/services'
  ],
  
  // DNS para preconnect
  PRECONNECT_DOMAINS: [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com'
  ]
};

// Configurações de otimização de imagens
export const IMAGE_OPTIMIZATION = {
  // Formatos suportados em ordem de preferência
  FORMATS: ['webp', 'avif', 'jpg', 'png'],
  
  // Tamanhos responsivos
  BREAKPOINTS: {
    mobile: 480,
    tablet: 768,
    desktop: 1200,
    large: 1920
  },
  
  // Qualidade de compressão
  QUALITY: {
    webp: 80,
    jpg: 85,
    png: 90
  },
  
  // Lazy loading para imagens
  LAZY_LOADING: true,
  
  // Placeholder blur
  BLUR_PLACEHOLDER: true
};

// Configurações de SEO local
export const LOCAL_SEO_CONFIG = {
  // Informações da empresa
  BUSINESS_INFO: {
    name: 'Contabiligrejinha',
    city: 'Igrejinha',
    state: 'RS',
    region: 'Vale do Paranhana',
    coordinates: {
      lat: -29.5751,
      lng: -50.7939
    }
  },
  
  // Palavras-chave locais
  LOCAL_KEYWORDS: [
    'contabilidade Igrejinha RS',
    'escritório contábil Igrejinha',
    'contador Igrejinha',
    'contabilidade Vale do Paranhana'
  ],
  
  // Cidades atendidas
  SERVICE_AREAS: [
    'Igrejinha',
    'Três Coroas',
    'Gramado',
    'Canela',
    'Taquara',
    'Parobé'
  ]
};

// Configurações de monitoramento de performance
export const PERFORMANCE_MONITORING = {
  // Core Web Vitals targets
  TARGETS: {
    LCP: 2500,  // Largest Contentful Paint (ms)
    FID: 100,   // First Input Delay (ms)
    CLS: 0.1,   // Cumulative Layout Shift
    FCP: 1800,  // First Contentful Paint (ms)
    TTI: 3800   // Time to Interactive (ms)
  },
  
  // Métricas customizadas
  CUSTOM_METRICS: [
    'hero-load-time',
    'contact-form-ready',
    'navigation-responsive'
  ],
  
  // Sampling rate para analytics
  SAMPLING_RATE: 0.1 // 10%
};

// Configurações de bundle analysis
export const BUNDLE_CONFIG = {
  // Tamanho máximo do bundle principal
  MAX_BUNDLE_SIZE: 500, // KB
  
  // Chunks que devem ser analisados
  ANALYZE_CHUNKS: true,
  
  // Relatório de bundle
  GENERATE_REPORT: import.meta.env.PROD,
  
  // Threshold para warnings
  WARNING_THRESHOLD: 250 // KB
};

export default {
  LAZY_LOADING_CONFIG,
  CODE_SPLITTING_CONFIG,
  CACHE_CONFIG,
  COMPRESSION_CONFIG,
  PRELOAD_CONFIG,
  IMAGE_OPTIMIZATION,
  LOCAL_SEO_CONFIG,
  PERFORMANCE_MONITORING,
  BUNDLE_CONFIG
};