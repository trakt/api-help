import { z } from '../../../_internal/z.ts';

export const movieListResponseSchema = z.array(
  z.object({
    released: z.string(),
    movie: z.object({
      title: z.string(),
      year: z.number(),
      ids: z.object({
        trakt: z.number(),
        slug: z.string(),
        imdb: z.string(),
        tmdb: z.number(),
      }),
    }),
  }),
);
