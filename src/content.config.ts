import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One Markdown file per case study in src/content/work/.
const work = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/work' }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dates: z.string(),
    location: z.string(),
    summary: z.string(),
    order: z.number(),
  }),
});

export const collections = { work };
