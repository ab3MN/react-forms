// vite.config.ts
import { defineConfig } from 'file:///C:/ab3/class-components/node_modules/vite/dist/node/index.js';
import react from 'file:///C:/ab3/class-components/node_modules/@vitejs/plugin-react-swc/index.mjs';
import babel from 'file:///C:/ab3/class-components/node_modules/vite-plugin-babel/dist/index.mjs';
import eslintPlugin from 'file:///C:/ab3/class-components/node_modules/vite-plugin-eslint/dist/index.mjs';
var vite_config_default = defineConfig({
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
export { vite_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxhYjNcXFxcY2xhc3MtY29tcG9uZW50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcYWIzXFxcXGNsYXNzLWNvbXBvbmVudHNcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L2FiMy9jbGFzcy1jb21wb25lbnRzL3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0LXN3Yyc7XHJcblxyXG5pbXBvcnQgYmFiZWwgZnJvbSAndml0ZS1wbHVnaW4tYmFiZWwnO1xyXG5pbXBvcnQgZXNsaW50UGx1Z2luIGZyb20gJ3ZpdGUtcGx1Z2luLWVzbGludCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHRlc3Q6IHtcclxuICAgIGNvdmVyYWdlOiB7XHJcbiAgICAgIHByb3ZpZGVyOiAnaXN0YW5idWwnLFxyXG4gICAgfSxcclxuICAgIGdsb2JhbHM6IHRydWUsXHJcbiAgICBlbnZpcm9ubWVudDogJ2pzZG9tJyxcclxuICAgIHNldHVwRmlsZXM6ICcuL3NyYy90ZXN0cy5zZXR1cC50cycsXHJcbiAgfSxcclxuICBwbHVnaW5zOiBbXHJcbiAgICByZWFjdCgpLFxyXG4gICAgZXNsaW50UGx1Z2luKHtcclxuICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICBpbmNsdWRlOiBbJy4vc3JjLyoqLyouanMnLCAnLi9zcmMvKiovKi5qc3gnLCAnLi9zcmMvKiovKi50cycsICcuL3NyYy8qKi8qLnRzeCddLFxyXG4gICAgICBleGNsdWRlOiBbXSxcclxuICAgIH0pLFxyXG4gICAgYmFiZWwoe1xyXG4gICAgICBmaWx0ZXI6IC9cXC5bal1zeD8kLyxcclxuICAgICAgYmFiZWxDb25maWc6IHtcclxuICAgICAgICBwcmVzZXRzOiBbJ0BiYWJlbC9wcmVzZXQtdHlwZXNjcmlwdCddLFxyXG4gICAgICAgIHBsdWdpbnM6IFtbJ2JhYmVsLXBsdWdpbi1yZWFjdC1jb21waWxlciddXSxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICB3YXRjaDoge1xyXG4gICAgICB1c2VQb2xsaW5nOiB0cnVlLFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUVsQixPQUFPLFdBQVc7QUFDbEIsT0FBTyxrQkFBa0I7QUFFekIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBLElBQ0osVUFBVTtBQUFBLE1BQ1IsVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxJQUNiLFlBQVk7QUFBQSxFQUNkO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixhQUFhO0FBQUEsTUFDWCxPQUFPO0FBQUEsTUFDUCxTQUFTLENBQUMsaUJBQWlCLGtCQUFrQixpQkFBaUIsZ0JBQWdCO0FBQUEsTUFDOUUsU0FBUyxDQUFDO0FBQUEsSUFDWixDQUFDO0FBQUEsSUFDRCxNQUFNO0FBQUEsTUFDSixRQUFRO0FBQUEsTUFDUixhQUFhO0FBQUEsUUFDWCxTQUFTLENBQUMsMEJBQTBCO0FBQUEsUUFDcEMsU0FBUyxDQUFDLENBQUMsNkJBQTZCLENBQUM7QUFBQSxNQUMzQztBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLFlBQVk7QUFBQSxJQUNkO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
