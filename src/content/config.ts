import { defineCollection, z } from 'astro:content';

const lectures = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number(),
    icon: z.string(),
    description: z.string(),
  }),
});

export const collections = { lectures };
