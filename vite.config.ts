import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import styleX from 'vite-plugin-stylex'

export default defineConfig({
  plugins: [react(), styleX()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/')
    }
  }
})
