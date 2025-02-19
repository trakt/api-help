import { z } from '../z.ts';

export const ignoreQuerySchema = z.object({
  ignore_watched: z.boolean().optional(),
  ignore_collected: z.boolean().optional(),
  ignore_watchlisted: z.boolean().optional(),
});
