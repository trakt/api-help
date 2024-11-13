import { z } from '../z.ts';
import { showIdsResponseSchema } from './showIdsResponseSchema.ts';

export const showResponseSchema = z.object({
  title: z.string(),
  year: z.number(),
  /**
   * Available if requesting extended `full`.
   */
  runtime: z.number().optional(),
  ids: showIdsResponseSchema,
  /***
   * Available if requesting extended `cloud9`.
   */
  images: z
    .object({
      fanart: z.array(z.string()),
      poster: z.array(z.string()),
      logo: z.array(z.string()),
      clearart: z.array(z.string()),
      banner: z.array(z.string()),
      thumb: z.array(z.string()),
    })
    .optional(),
});
