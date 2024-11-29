import { z } from '../../../_internal/z.ts';
import { searchMovieResponseSchema } from './searchMovieResponseSchema.ts';
import { searchShowResponseSchema } from './searchShowResponseSchema.ts';

export const searchResultResponseSchema = z.array(
  z.union([
    searchMovieResponseSchema,
    searchShowResponseSchema,
  ]),
);
