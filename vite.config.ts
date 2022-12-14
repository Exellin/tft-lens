import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { resolve } from 'path'

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      input: {
        video_overlay: resolve(__dirname, 'index.html'),
        config: resolve(__dirname, 'config.html')
      }
    }
  },
});
