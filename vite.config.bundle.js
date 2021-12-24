import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: './src',
  publicDir: false,
  build: {
    watch: true,
    lib: {
      name: 'dashboard',
      entry: './components/dashboard/index.tsx',
      formats: ['umd'],
      fileName: 'dashboard',
    },
    outDir: './public/entry',
    emptyOutDir: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    react()
  ],
});