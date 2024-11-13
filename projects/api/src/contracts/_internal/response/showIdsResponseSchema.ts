import { z } from '../z.ts';
import { episodeIdsResponseSchema } from './episodeIdsResponseSchema.ts';

export const showIdsResponseSchema = episodeIdsResponseSchema.extend({
  slug: z.string(),
});
