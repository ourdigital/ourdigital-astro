import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://dev.ourdigital.org',
  output: 'static',
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
  },
  build: {
    assets: 'assets',
  },
  vite: {
    css: {
      devSourcemap: true,
    },
  },
});
