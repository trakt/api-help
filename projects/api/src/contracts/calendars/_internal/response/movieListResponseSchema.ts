import { movieResponseSchema } from '../../../_internal/response/movieResponseSchema.ts';
import { z } from '../../../_internal/z.ts';

export const movieListResponseSchema = z.array(
  movieResponseSchema,
);
