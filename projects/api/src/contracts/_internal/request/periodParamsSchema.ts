import { z } from '../z.ts';

export const periodParamsSchema = z.object({
  period: z.enum([
    'daily',
    'weekly',
    'monthly',
    'yearly',
    'all',
  ]),
});
