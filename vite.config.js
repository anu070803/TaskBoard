import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,          // <-- make describe/it/expect available globally
    environment: 'jsdom',   // <-- needed for React Testing Library
    setupFiles: './src/setupTests.js', // <-- points to your new setupTests.js
  },
});
