import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist', // Default output directory
    rollupOptions: {
      output: {
        // This splits out large dependencies like React into separate chunks
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
    // This increases the chunk size warning limit
    chunkSizeWarningLimit: 1000, // Adjust this based on your needs
  },
});
