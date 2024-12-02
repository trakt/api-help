import { z } from '../z.ts';

export const seasonIdsResponseSchema = z.object({
  trakt: z.number(),
  tvdb: z.number(),
  tmdb: z.number(),
});
