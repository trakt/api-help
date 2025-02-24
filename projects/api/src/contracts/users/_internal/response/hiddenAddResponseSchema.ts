import { bulkMediaRequestSchema } from '../../../_internal/request/bulkMediaRequestSchema.ts';
import { z } from '../../../_internal/z.ts';

export const hiddenAddResponseSchema = z.object({
  added: z.object({
    movies: z.number(),
    shows: z.number(),
    season: z.number(),
  }),
  not_found: bulkMediaRequestSchema,
});
