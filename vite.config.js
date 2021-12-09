import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import replace from '@rollup/plugin-replace';
import glob from 'glob';

// TODO: 정규식 추가 개발 필요(tsx, jsx 지원)
const ROUTES = glob.sync('./src/pages/*/*.tsx').map(e => {
  const filterDirText = e.replace('./src/pages/', '');
  const isIndex = filterDirText.endsWith('/index.tsx');
  return filterDirText.replace(`${isIndex ? '/index' : ''}.tsx`, '');
});

export default defineConfig(({ mode, command }) => {
  const isLocal = mode === 'dev' && command === 'serve';
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
    plugins: [
      react(),
      replace({
        'window.VAR_ROUTES': JSON.stringify(ROUTES),
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
