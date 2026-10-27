sch3lp.github.io
================

My blog, built with [Astro](https://astro.build) and deployed to GitHub Pages by `.github/workflows/deploy.yml`.

```bash
npm install
npm run dev     # http://localhost:4321, also shows drafts
npm run build   # static site in dist/
```

Posts live in `src/content/posts/` as `YYYY-MM-DD-slug.md` and are published at `/YYYY/MM/DD/slug/`.
Set `published: false` in the front matter to keep a post as a draft. Images go in `src/content/posts/<post-name>/` and are referenced as `![alt](./<post-name>/image.jpg)`,
so Astro optimises them at build time.
