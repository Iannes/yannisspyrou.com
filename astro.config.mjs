import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react'; // Add this line
import mdx from '@astrojs/mdx';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  site: process.env.SITE_URL || 'https://www.yannisspyrou.com/',
  integrations: [
    tailwind(),
    react(),
    mdx(),
    sitemap(),
  ],
});
