import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  server: {
    proxy: {
      // Dev'de /api/* isteklerini `vercel dev` (5175) üzerine yönlendir.
      // Prod'da bu proxy yok; Vercel routing /api/*'i serverless function olarak servis eder.
      '/api': {
        target: 'http://localhost:5175',
        changeOrigin: true,
      },
    },
  },
})
