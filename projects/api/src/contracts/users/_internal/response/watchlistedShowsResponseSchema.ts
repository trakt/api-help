import { showIdsResponseSchema } from '../../../_internal/response/showIdsResponseSchema.ts';
import { z } from '../../../_internal/z.ts';
import { watchlistMetadataResponseSchema } from './watchlistMetadataResponseSchema.ts';

export const watchlistedShowsResponseSchema = z.array(
  watchlistMetadataResponseSchema.extend({
    show: z.object({
      title: z.string(),
      year: z.number(),
      ids: showIdsResponseSchema,
    }),
  }),
);
