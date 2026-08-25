// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ofanus.vercel.app',
  prefetch: true,
  integrations: [tailwind({
    applyBaseStyles: false, // We import globals.css manually
  }), react(), mdx(), sitemap()]
});