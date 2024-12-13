import { movieResponseSchema } from '../../../_internal/response/movieResponseSchema.ts';
import { z } from '../../../_internal/z.ts';
import { watchlistMetadataResponseSchema } from './watchlistMetadataResponseSchema.ts';

export const watchlistedMoviesResponseSchema = z.array(
  watchlistMetadataResponseSchema
    .extend({
      movie: movieResponseSchema,
    }),
);
