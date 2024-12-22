import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/AI_Content_Generator/', // Update this with your repository name
  plugins: [react()],
})
