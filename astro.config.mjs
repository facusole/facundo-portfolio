import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    resolve: {
      alias: [
        { find: '@components', replacement: '/src/components' },
        { find: '@pages', replacement: '/src/pages' },
        { find: '@layouts', replacement: '/src/layouts' },
        { find: '@data', replacement: '/src/data' }
      ]
    }
  }
});