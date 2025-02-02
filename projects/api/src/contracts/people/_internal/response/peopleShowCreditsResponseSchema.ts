import { characterResponseSchema } from '../../../_internal/response/characterResponseSchema.ts';
import { showResponseSchema } from '../../../_internal/response/showResponseSchema.ts';
import { z } from '../../../_internal/z.ts';

export const peopleShowCreditsResponseSchema = z.object({
  cast: z.array(
    z.object({
      show: showResponseSchema,
      episode_count: z.number(),
      series_regular: z.boolean(),
    }).merge(characterResponseSchema),
  ).optional(),
});
