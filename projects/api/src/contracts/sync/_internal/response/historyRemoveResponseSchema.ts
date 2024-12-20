import { z } from '../../../_internal/z.ts';
import { historyRequestSchema } from '../request/historyRequestSchema.ts';

export const historyRemoveResponseSchema = z.object({
  removed: z.object({ movies: z.number(), episodes: z.number() }),
  not_found: historyRequestSchema,
});
