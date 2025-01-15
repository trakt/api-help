import { movieResponseSchema } from '../../../_internal/response/movieResponseSchema.ts';
import { z } from '../../../_internal/z.ts';

export const ratedMoviesResponseSchema = z.object({
  rated_at: z.string(),
  rating: z.number().int().min(1).max(10),
  type: z.literal('movie'),
  movie: movieResponseSchema,
});
