import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import mix from 'vite-plugin-mix';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    global: {},
  },
  plugins: [
    react(),
    tsconfigPaths(),
    mix({
      handler: './src/api/rooms.ts',
    }),
  ],
});
