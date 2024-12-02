import { z } from '../../../_internal/z.ts';

export const searchResultImagesSchema = z.object({
  /***
   * Available if requesting extended `cloud9`.
   */
  images: z.object({
    poster: z.array(z.string()),
  }).optional(),
});
