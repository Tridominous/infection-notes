import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://Tridominous.github.io',
  base: '/infection-notes',
  integrations: [tailwind()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
