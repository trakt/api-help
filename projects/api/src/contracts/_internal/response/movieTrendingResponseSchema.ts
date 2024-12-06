import { z } from '../z.ts';
import { movieResponseSchema } from './movieResponseSchema.ts';

export const movieTrendingResponseSchema = z.array(
  z.object({
    watchers: z.number(),
    movie: movieResponseSchema,
  }),
);
