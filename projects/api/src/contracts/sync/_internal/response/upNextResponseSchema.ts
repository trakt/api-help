import { z } from 'zod';
import { episodeResponseSchema } from '../../../_internal/response/episodeResponseSchema.ts';
import { showResponseSchema } from '../../../_internal/response/showResponseSchema.ts';

export const upNextResponseSchema = z.array(
  z.object({
    show: showResponseSchema,
    progress: z.object({
      aired: z.number(),
      completed: z.number(),
      last_watched_at: z.string(),
      reset_at: z.null(),
      next_episode: episodeResponseSchema,
      last_episode: episodeResponseSchema.or(z.null()),
    }),
  }),
);
