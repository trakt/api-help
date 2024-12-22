import { z } from '../../../_internal/z.ts';

export const dateRangeParamsSchema = z.object({
  start_at: z.string().optional(),
  end_at: z.string().optional(),
});
