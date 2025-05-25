import react from '@vitejs/plugin-react';
import tailwindcss from "tailwindcss";
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  define: {
    'global': 'window',  // global을 window로 정의
  },
});