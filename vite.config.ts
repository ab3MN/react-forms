/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

import babel from 'vite-plugin-babel';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  test: {
    coverage: {
      provider: 'istanbul',
    },
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests.setup.ts',
  },
  plugins: [
    react(),
    eslintPlugin({
      cache: false,
      include: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
      exclude: [],
    }),
    babel({
      filter: /\.[j]sx?$/,
      babelConfig: {
        presets: ['@babel/preset-typescript'],
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  server: {
    watch: {
      usePolling: true,
    },
  },
});
