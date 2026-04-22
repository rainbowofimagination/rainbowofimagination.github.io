import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Replace with your GitHub Pages URL: https://<username>.github.io/<repo>/
export default defineConfig({
  site: 'https://rainbowofimagination.github.io',
  base: '/rainbowofimagination.github.io',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
    },
  },
});
