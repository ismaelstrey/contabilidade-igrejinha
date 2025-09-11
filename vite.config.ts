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
      '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@data': fileURLToPath(new URL('./src/data', import.meta.url)),
      '@hooks': fileURLToPath(new URL('./src/hooks', import.meta.url)),
      '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
      '@types': fileURLToPath(new URL('./src/types', import.meta.url)),
      '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
      '@contexts': fileURLToPath(new URL('./src/contexts', import.meta.url))
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
        manualChunks: {
          // Chunk para React e ReactDOM
          'react-vendor': ['react', 'react-dom'],
          // Chunk para framer-motion
          'animations': ['framer-motion'],
          // Chunk para styled-components
          'styling': ['styled-components'],
          // Chunk para react-router
          'router': ['react-router-dom']
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