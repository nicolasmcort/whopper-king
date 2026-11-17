import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages: https://nicolasmcort.github.io/whopper-king/
  base: process.env.GITHUB_PAGES === 'true' ? '/whopper-king/' : '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Lighthouse: source maps del JS grande (depuración / best practices)
    sourcemap: true,
  },
});
