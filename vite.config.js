import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'
import del from 'rollup-plugin-delete'

export default defineConfig(({ mode }) => {
  const config = defineConfig({
    root: './src',
    build: {
      outDir: '../dist'
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, './src')
      }
    },
    plugins: [react()],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: {
            'primary-color': '#ff0000'
          },
        }
      }
    },
  })

  if (mode === 'dev') {
    config.plugins.push(checker({
      typescript: true,
      eslint: {
        files: ['./'],
        extensions: ['js', 'cjs', 'mjs', 'jsx', 'ts', 'tsx'],
      }
    }))
  }

  if (mode !== 'dev') {
    config.plugins.push(del({ targets: 'dist/*' }))
  }

  return config;
})