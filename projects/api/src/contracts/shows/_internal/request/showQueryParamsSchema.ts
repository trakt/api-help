import { z } from '../../../_internal/z.ts';

export const showQueryParamsSchema = z.object({
  hidden: z.boolean().optional(),
  specials: z.boolean().optional(),
  count_specials: z.boolean().optional(),
});
