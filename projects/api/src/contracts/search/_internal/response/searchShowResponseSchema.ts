import { showIdsResponseSchema } from '../../../_internal/response/showIdsResponseSchema.ts';
import { z } from '../../../_internal/z.ts';

export const searchShowResponseSchema = z.object({
  type: z.literal('show'),
  score: z.number(),
  show: z.object({
    title: z.string(),
    year: z.number(),
    ids: showIdsResponseSchema,
  }),
});
