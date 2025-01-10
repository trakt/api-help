import { showIdsResponseSchema } from '../../../_internal/response/showIdsResponseSchema.ts';
import { z } from '../../../_internal/z.ts';

export const watchedShowsResponseSchema = z.array(z.object({
  plays: z.number(),
  last_watched_at: z.string(),
  last_updated_at: z.string(),
  reset_at: z.string().nullable().optional(),
  show: z.object({
    aired_episodes: z.number(),
    title: z.string(),
    year: z.number(),
    ids: showIdsResponseSchema,
  }),
  /***
   * Omitted if requesting extended `noseasons`.
   */
  seasons: z.array(
    z.object({
      number: z.number(),
      episodes: z.array(
        z.object({
          number: z.number(),
          plays: z.number(),
          last_watched_at: z.string(),
        }),
      ),
    }),
  ).optional(),
}));
