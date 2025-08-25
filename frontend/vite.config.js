import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['@ffmpeg/ffmpeg', '@ffmpeg/util'],
  },
  server: {
    host: '0.0.0.0', // leb.Delete when deploying
    port: 3000,      // leb.Delete when deploying
    allowedHosts: [
      'bureung.site',
      'www.bureung.site', // www 서브도메인도 허용
      'localhost',
      '127.0.0.1'
    ],
    watch: {
      usePolling: true, // leb.Delete when deploying
    },
    preview: {
      port: 80,
      host: '0.0.0.0',
    },
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'unsafe-none',
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});