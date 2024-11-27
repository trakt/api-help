import { z } from '../../_internal/z.ts';

export const idParamsSchema = z.object({
  id: z.string(),
});
