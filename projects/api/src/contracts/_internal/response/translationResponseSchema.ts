import { z } from '../z.ts';

export const translationResponseSchema = z.array(
  z.object({
    title: z.string().nullable(),
    overview: z.string().nullable(),
    tagline: z.string().nullable(),
    language: z.string(),
    country: z.string(),
  }),
);
