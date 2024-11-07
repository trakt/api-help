import { z } from '../../../_internal/z.ts';

export const extendedQuerySchema = z.object({
  extended: z
    .enum(['full', 'cloud9', 'full,cloud9'])
    .optional(),
});
