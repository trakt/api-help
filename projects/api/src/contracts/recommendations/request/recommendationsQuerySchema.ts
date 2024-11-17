import { z } from '../../_internal/z.ts';

export const recommendationsQuerySchema = z.object({
  ignore_collected: z.boolean().optional(),
  ignore_watchlisted: z.boolean().optional(),
  limit: z.number().int().positive().optional(),
  days: z.number().int().positive().optional(),
});
