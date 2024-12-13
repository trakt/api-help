import { showResponseSchema } from '../../../_internal/response/showResponseSchema.ts';
import { z } from '../../../_internal/z.ts';
import { watchlistMetadataResponseSchema } from './watchlistMetadataResponseSchema.ts';

export const watchlistedShowsResponseSchema = z.array(
  watchlistMetadataResponseSchema.extend({
    show: showResponseSchema,
  }),
);
