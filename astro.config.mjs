import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    resolve: {
      alias: {
        '@components': '/src/components',
        '@pages': '/src/pages',
        '@layouts': '/src/layouts',
        '@data': '/src/data'
      }
    }
  }
});