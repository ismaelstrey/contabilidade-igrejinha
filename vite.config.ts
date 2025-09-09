import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@data': fileURLToPath(new URL('./src/data', import.meta.url)),
      '@hooks': fileURLToPath(new URL('./src/hooks', import.meta.url)),
      '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
      '@types': fileURLToPath(new URL('./src/types', import.meta.url)),
      '@styles': fileURLToPath(new URL('./src/styles', import.meta.url))
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  build: {
    outDir: 'dist',
    sourcemap: false, // Desabilitar sourcemaps em produção
    minify: 'terser',
    chunkSizeWarningLimit: 500, // Reduzir limite para chunks menores
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log em produção
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 2, // Múltiplas passadas para melhor compressão
        unsafe_arrows: true,
        unsafe_methods: true,
        unsafe_proto: true
      },
      mangle: {
        safari10: true
      },
      format: {
        comments: false
      }
    },
    rollupOptions: {
      treeshake: {
        moduleSideEffects: false
      },
      output: {
        manualChunks: (id) => {
          // Separar framer-motion em chunk próprio para lazy loading
          if (id.includes('framer-motion')) {
            return 'animations'
          }
          // Separar React e ReactDOM
          if (id.includes('react') || id.includes('react-dom')) {
            return 'react-vendor'
          }
          // Separar componentes de UI em chunks menores
          if (id.includes('/components/ui/') || id.includes('/components/common/')) {
            return 'ui-components'
          }
          // Separar páginas para code splitting
          if (id.includes('/pages/') || id.includes('Page.tsx')) {
            return 'pages'
          }
          // Separar utilitários e hooks
          if (id.includes('/hooks/') || id.includes('/utils/')) {
            return 'utilities'
          }
          // Separar outras bibliotecas grandes
          if (id.includes('node_modules')) {
            // Criar chunks específicos para bibliotecas grandes
            if (id.includes('styled-components') || id.includes('@emotion')) {
              return 'styling'
            }
            return 'vendor'
          }
        },
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    },
    cssCodeSplit: true,
    assetsInlineLimit: 4096
  },
  server: {
    port: 3000,
    open: true
  }
})