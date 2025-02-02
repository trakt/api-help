import { z } from '../z.ts';

export const episodeIdsResponseSchema = z.object({
  trakt: z.number(),
  tvdb: z.number(),
  imdb: z.string().nullable(),
  tmdb: z.number(),
});
