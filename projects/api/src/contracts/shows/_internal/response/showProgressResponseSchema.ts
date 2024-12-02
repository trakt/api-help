import { progressResponseSchema } from '../../../_internal/response/progressResponseSchema.ts';
import { seasonIdsResponseSchema } from '../../../_internal/response/seasonIdsResponseSchema.ts';
import { z } from '../../../_internal/z.ts';

export const showProgressResponseSchema = progressResponseSchema.extend({
  seasons: z.array(
    z.object({
      number: z.number(),
      title: z.string(),
      aired: z.number(),
      completed: z.number(),
      episodes: z.array(
        z.object({
          number: z.number(),
          completed: z.boolean(),
          last_watched_at: z.string().nullable(),
        }),
      ),
    }),
  ),
  hidden_seasons: z.array(
    z.object({
      number: z.number(),
      ids: seasonIdsResponseSchema,
    }),
  ),
});
