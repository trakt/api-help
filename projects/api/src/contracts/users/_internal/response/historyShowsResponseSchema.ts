import { episodeResponseSchema } from '../../../_internal/response/episodeResponseSchema.ts';
import { showResponseSchema } from '../../../_internal/response/showResponseSchema.ts';
import { z } from '../../../_internal/z.ts';

export const historyShowsResponseSchema = z.array(
  z.object({
    id: z.number(),
    watched_at: z.string(),
    episode: episodeResponseSchema,
    show: showResponseSchema,
  }),
);
