import { z } from '../z.ts';

export const movieIdsResponseSchema = z.object({
  trakt: z.number(),
  slug: z.string(),
  imdb: z.string(),
  tmdb: z.number(),
});
