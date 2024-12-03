import { z } from '../z.ts';

export const translationResponseSchema = z.array(
  z.object({
    title: z.string(),
    overview: z.string(),
    tagline: z.string(),
    language: z.string(),
    country: z.string(),
  }),
);
