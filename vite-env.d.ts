/// <reference types="vite/client" />

/**
 * Declaração de tipos para variáveis de ambiente do Vite
 * Estende a interface ImportMetaEnv para incluir as variáveis personalizadas
 */
interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_API_BASE_URL: string
  readonly VITE_JWT_SECRET: string
  readonly VITE_JWT_EXPIRES_IN: string
  readonly VITE_REFRESH_TOKEN_EXPIRES_IN: string
  readonly VITE_ADMIN_DEFAULT_ROLE: string
  readonly VITE_ADMIN_SESSION_TIMEOUT: string
}

/**
 * Estende a interface ImportMeta para incluir env
 */
interface ImportMeta {
  readonly env: ImportMetaEnv
}