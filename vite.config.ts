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
          // Separar framer-motion em chunk próprio
          if (id.includes('framer-motion')) {
            return 'animations'
          }
          // Separar styled-components
          if (id.includes('styled-components')) {
            return 'styles'
          }
          // React Router em chunk separado
          if (id.includes('react-router')) {
            return 'router'
          }
          // React core em chunk separado e menor
          if (id.includes('react') && !id.includes('react-router')) {
            return 'react-core'
          }
          // Dividir vendor em chunks menores por funcionalidade
          if (id.includes('node_modules')) {
            // Utilitários pequenos juntos
            if (id.includes('helmet') || id.includes('path')) {
              return 'utils'
            }
            // Outras dependências
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