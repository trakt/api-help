import { movieIdsResponseSchema } from '../../../_internal/response/movieIdsResponseSchema.ts';
import { z } from '../../../_internal/z.ts';

export const watchedMoviesResponseSchema = z.array(
  z.object({
    plays: z.number(),
    last_watched_at: z.string(),
    last_updated_at: z.string(),
    movie: z.object({
      title: z.string(),
      year: z.number(),
      ids: movieIdsResponseSchema,
    }),
  }),
);
