import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import replace from '@rollup/plugin-replace';

export default defineConfig(({ mode, command }) => {
  const isLocal = mode === 'dev' && command === 'serve';
  const config = defineConfig({
    root: './src',
    build: {
      outDir: '../dist',
      emptyOutDir: false,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    plugins: [
      react(),
      replace({
        // 'window.VAR_ROUTES': JSON.stringify(ROUTES),
        'window.IS_LOCAL': JSON.stringify(isLocal),
      }),
    ],
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
  // local 모드일 경우
  if (isLocal) {
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

  return config;
});
