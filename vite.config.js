import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // BASE_PATH is set by the GitHub Actions workflow for project pages.
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
})
