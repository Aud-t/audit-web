import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
  },
  optimizeDeps: {
    include: [
      'element-plus/es/components/row/style/index',
      'element-plus/es/components/col/style/index',
    ],
  },
});
