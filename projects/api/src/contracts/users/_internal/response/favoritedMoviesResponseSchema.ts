import { movieResponseSchema } from '../../../_internal/response/movieResponseSchema.ts';
import { z } from '../../../_internal/z.ts';

export const favoritedMoviesResponseSchema = z.object({
  id: z.number(),
  listed_at: z.string(),
  notes: z.string().nullable(),
  type: z.literal('movie'),
  movie: movieResponseSchema,
  rank: z.number(),
});
