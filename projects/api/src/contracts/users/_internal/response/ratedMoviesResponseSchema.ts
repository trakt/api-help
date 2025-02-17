import { movieResponseSchema } from '../../../_internal/response/movieResponseSchema.ts';
import { z } from '../../../_internal/z.ts';
import { ratedResponseSchema } from './ratedResponseSchema.ts';

export const ratedMoviesResponseSchema = ratedResponseSchema.extend({
  type: z.literal('movie'),
  movie: movieResponseSchema,
});
