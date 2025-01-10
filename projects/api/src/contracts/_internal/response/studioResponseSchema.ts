import { z } from '../z.ts';

export const studioResponseSchema = z.object({
  name: z.string(),
  country: z.string().optional(),
  ids: z.object({
    slug: z.string(),
    trakt: z.number(),
    tmdb: z.number().optional(),
  }),
});
