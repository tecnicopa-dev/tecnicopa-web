// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://tecnicopa.com',
  output: 'static',
  // Conserva el comportamiento de Astro 6: un espacio entre elementos inline.
  compressHTML: true,
  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});