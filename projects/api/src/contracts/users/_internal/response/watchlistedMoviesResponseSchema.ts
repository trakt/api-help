import { movieIdsResponseSchema } from '../../../_internal/response/movieIdsResponseSchema.ts';
import { z } from '../../../_internal/z.ts';
import { watchlistMetadataResponseSchema } from './watchlistMetadataResponseSchema.ts';

export const watchlistedMoviesResponseSchema = z.array(
  watchlistMetadataResponseSchema
    .extend({
      movie: z.object({
        title: z.string(),
        year: z.number(),
        ids: movieIdsResponseSchema,
      }),
    }),
);
