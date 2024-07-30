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
          '@/core': path.resolve(__dirname, 'src/core'),
          '@/shiki': path.resolve(__dirname, 'src/shiki'),
          '@/store': path.resolve(__dirname, 'src/store'),
          '@/tests': path.resolve(__dirname, 'src/tests'),
          '@/types': path.resolve(__dirname, 'src/types'),
          '@/utils': path.resolve(__dirname, 'src/utils'),
          '@/assets': path.resolve(__dirname, 'src/assets'),
          '@/common': path.resolve(__dirname, 'src/common'),
          '@/config': path.resolve(__dirname, 'src/config'),
          '@/routes': path.resolve(__dirname, 'src/routes'),
          '@/styles': path.resolve(__dirname, 'src/styles'),
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
          '@/core': path.resolve(__dirname, 'src/core'),
          '@/shiki': path.resolve(__dirname, 'src/shiki'),
          '@/store': path.resolve(__dirname, 'src/store'),
          '@/tests': path.resolve(__dirname, 'src/tests'),
          '@/types': path.resolve(__dirname, 'src/types'),
          '@/utils': path.resolve(__dirname, 'src/utils'),
          '@/assets': path.resolve(__dirname, 'src/assets'),
          '@/common': path.resolve(__dirname, 'src/common'),
          '@/config': path.resolve(__dirname, 'src/config'),
          '@/routes': path.resolve(__dirname, 'src/routes'),
          '@/styles': path.resolve(__dirname, 'src/styles'),
        },
      },
    };
  }
});
