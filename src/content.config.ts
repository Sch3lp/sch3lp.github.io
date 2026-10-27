import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Posts keep their Jekyll filenames: YYYY-MM-DD-slug.md
const posts = defineCollection({
  loader: glob({
    pattern: '[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]-*.md',
    base: './src/content/posts',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
    published: z.boolean().default(true),
  }),
});

export const collections = { posts };
