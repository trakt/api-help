import { showResponseSchema } from '../../../_internal/response/showResponseSchema.ts';
import { watchlistMetadataResponseSchema } from './watchlistMetadataResponseSchema.ts';

export const watchlistedShowsResponseSchema = watchlistMetadataResponseSchema
  .extend({
    show: showResponseSchema,
  });
