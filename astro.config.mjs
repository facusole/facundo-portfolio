import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    resolve: {
      alias: {
        '@components': new URL('./src/components', import.meta.url).pathname,
        '@pages': new URL('./src/pages', import.meta.url).pathname,
        '@layouts': new URL('./src/layouts', import.meta.url).pathname,
        '@data': new URL('./src/data', import.meta.url).pathname
      }
    }
  }
});