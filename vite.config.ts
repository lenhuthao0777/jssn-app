import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@app': path.resolve(__dirname, './src/app'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
    },
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      // axios: './src/services/AxiosClient.ts',
    }),
  ],
  // server: {
  //   port: 1101,
  //   origin: 'https://max.technology.com.vn:1101',
  // },
})
