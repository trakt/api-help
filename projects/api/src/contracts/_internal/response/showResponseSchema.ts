import { z } from '../z.ts';
import { imagesResponseSchema } from './imagesResponseSchema.ts';
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
  images: imagesResponseSchema.optional(),
});
