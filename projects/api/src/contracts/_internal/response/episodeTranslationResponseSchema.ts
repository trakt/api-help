import { z } from '../z.ts';

export const episodeTranslationResponseSchema = z.array(
  z.object({
    title: z.string().nullable(),
    overview: z.string().nullable(),
    language: z.string(),
    country: z.string(),
  }),
);
