import { z, defineCollection } from 'astro:content';

const mediaCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    artist: z.string(),
    source_url: z.string().url(),
    image: image(),
    alt_text: z.string(),
    skin_line: z.string(),
    media_type: z.string(),
  }),
});

export const collections = {
  'media': mediaCollection,
};