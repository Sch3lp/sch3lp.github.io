// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sch3lp.github.io',
  trailingSlash: 'ignore',
  redirects: {
    '/tagcloud': '/tags/',
  },
  image: {
    // Post images get a srcset, so small screens download small files.
    layout: 'constrained',
    responsiveStyles: true,
  },
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark-dimmed' },
    },
  },
});
