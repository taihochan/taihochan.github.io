import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
const baseURL = process.env.NODE_ENV === 'production' ? '/Components/self-intro/' : './';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  base: '/Components/self-intro/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
