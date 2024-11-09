import { z } from '../../../_internal/z.ts';

export const profileParamsSchema = z.object({
  id: z.enum(['me']).or(z.string()),
});
