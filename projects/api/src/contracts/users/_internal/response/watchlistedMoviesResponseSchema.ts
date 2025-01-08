import { movieResponseSchema } from '../../../_internal/response/movieResponseSchema.ts';
import { watchlistMetadataResponseSchema } from './watchlistMetadataResponseSchema.ts';

export const watchlistedMoviesResponseSchema = watchlistMetadataResponseSchema
  .extend({
    movie: movieResponseSchema,
  });
