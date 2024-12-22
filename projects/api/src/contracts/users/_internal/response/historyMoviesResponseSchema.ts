import { movieResponseSchema } from '../../../_internal/response/movieResponseSchema.ts';
import { z } from '../../../_internal/z.ts';

export const historyMoviesResponseSchema = z.array(
  z.object({
    id: z.number(),
    watched_at: z.string(),
    movie: movieResponseSchema,
  }),
);
