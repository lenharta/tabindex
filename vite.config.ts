/// <reference types='vitest'/>

/** @type {import('vite').UserConfig} */

import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd(), '');

  if (command === 'serve') {
    return {
      plugins: [react()],
      test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/tests/setup.ts',
        css: true,
      },
      server: {
        port: 3000,
        proxy: {
          '/api': {
            target: 'http://jsonplaceholder.typicode.com',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ''),
          },
        },
      },
      resolve: {
        alias: {
          '@/*': path.resolve(__dirname, 'src'),
          '@/app': path.resolve(__dirname, 'src/app'),
          '@/utils': path.resolve(__dirname, 'src/utils'),
          '@/types': path.resolve(__dirname, 'src/types'),
          '@/tests': path.resolve(__dirname, 'src/tests'),
          '@/shiki': path.resolve(__dirname, 'src/shiki'),
          '@/store': path.resolve(__dirname, 'src/store'),
          '@/routes': path.resolve(__dirname, 'src/routes'),
          '@/common': path.resolve(__dirname, 'src/common'),
          '@/assets': path.resolve(__dirname, 'src/assets'),
          '@/styles': path.resolve(__dirname, 'src/styles'),
          '@/components': path.resolve(__dirname, 'src/components'),
        },
      },
      define: {
        __APP_ENV__: env.APP_ENV,
      },
    };
  } else {
    return {
      plugins: [react()],
      resolve: {
        alias: {
          '@/*': path.resolve(__dirname, 'src'),
          '@/app': path.resolve(__dirname, 'src/app'),
          '@/utils': path.resolve(__dirname, 'src/utils'),
          '@/types': path.resolve(__dirname, 'src/types'),
          '@/tests': path.resolve(__dirname, 'src/tests'),
          '@/store': path.resolve(__dirname, 'src/store'),
          '@/shiki': path.resolve(__dirname, 'src/shiki'),
          '@/routes': path.resolve(__dirname, 'src/routes'),
          '@/common': path.resolve(__dirname, 'src/common'),
          '@/assets': path.resolve(__dirname, 'src/assets'),
          '@/styles': path.resolve(__dirname, 'src/styles'),
          '@/components': path.resolve(__dirname, 'src/components'),
        },
      },
    };
  }
});
