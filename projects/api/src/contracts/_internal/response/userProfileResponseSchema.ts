import { z } from '../z.ts';

export const profileResponseSchema = z.object({
  username: z.string(),
  private: z.boolean(),
  deleted: z.boolean(),
  name: z.string(),
  vip: z.boolean(),
  vip_ep: z.boolean(),
  ids: z.object({
    slug: z.string(),
    trakt: z.number(),
  }),
  /***
   * Available if requesting extended `full`.
   */
  joined_at: z.string().optional(),
  /***
   * Available if requesting extended `full`.
   */
  location: z.string().optional(),
  /***
   * Available if requesting extended `full`.
   */
  about: z.string().optional(),
  /***
   * Available if requesting extended `full`.
   */
  gender: z.string().optional(),
  /***
   * Available if requesting extended `full`.
   */
  age: z.number().or(z.null()).optional(),
  /***
   * Available if requesting extended `full`.
   */
  images: z.object({ avatar: z.object({ full: z.string() }) }).optional(),
});
