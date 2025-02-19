import { ignoreQuerySchema } from '../../../_internal/request/ignoreQuerySchema.ts';
import { z } from '../../../_internal/z.ts';

export const recommendationsQuerySchema = z.object({
  limit: z.number().int().min(0).optional(),
  days: z.number().int().min(0).optional(),
}).merge(ignoreQuerySchema);
