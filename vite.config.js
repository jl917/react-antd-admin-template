import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import { visualizer } from 'rollup-plugin-visualizer';
import replace from '@rollup/plugin-replace';
import glob from 'glob';

// TODO: 정규식 추가 개발 필요(tsx, jsx 지원)
const ROUTES = glob.sync('./src/components/*/*.entry.tsx').map(e => {
  return e.replace('./src/components/', '').replace('.entry.tsx', '');
});
console.log(ROUTES);

export default defineConfig(({ mode }) => {
  const config = defineConfig({
    root: './src',
    build: {
      outDir: '../dist',
      emptyOutDir: true,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    plugins: [react(), replace({
      'window.VAR_ROUTES': JSON.stringify(ROUTES),
    })],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: {
            'primary-color': '#ff0000',
          },
        },
      },
    },
  });

  if (mode === 'dev') {
    config.plugins.push(
      checker({
        typescript: true,
        eslint: {
          files: ['./'],
          extensions: ['js', 'cjs', 'mjs', 'jsx', 'ts', 'tsx'],
        },
      }),
    );
  }

  if (mode === 'analyz') {
    config.plugins.push(visualizer());
  }

  return config;
});
