import { movieIdsResponseSchema } from '../../../_internal/response/movieIdsResponseSchema.ts';
import { z } from '../../../_internal/z.ts';

export const searchMovieResponseSchema = z.object({
  type: z.literal('movie'),
  score: z.number(),
  movie: z.object({
    title: z.string(),
    year: z.number(),
    ids: movieIdsResponseSchema,
  }),
});
