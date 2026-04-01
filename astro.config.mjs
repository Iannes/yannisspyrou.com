import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react'; // Add this line
import mdx from '@astrojs/mdx';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

const siteUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:4321' : 'https://www.yannisspyrou.com/';

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  site: siteUrl,
  integrations: [
    tailwind(),
    react(),
    mdx(),
    sitemap(),
  ],
});
