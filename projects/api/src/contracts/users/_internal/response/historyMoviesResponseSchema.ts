import { movieResponseSchema } from '../../../_internal/response/movieResponseSchema.ts';
import { z } from '../../../_internal/z.ts';
import { historyActionSchema } from './historyActionSchema.ts';

export const historyMoviesResponseSchema = z.object({
  id: z.number(),
  watched_at: z.string(),
  movie: movieResponseSchema,
  action: historyActionSchema,
  type: z.literal('movie'),
});
