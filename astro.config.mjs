import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.ourdigital.org',
  output: 'static',
  adapter: cloudflare(),
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
