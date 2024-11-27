import { z } from '../../_internal/z.ts';

export const ratingsResponseSchema = z.object({
  rating: z.number(),
  votes: z.number(),
  distribution: z.object({
    1: z.number(),
    2: z.number(),
    3: z.number(),
    4: z.number(),
    5: z.number(),
    6: z.number(),
    7: z.number(),
    8: z.number(),
    9: z.number(),
    10: z.number(),
  }),
  /***
   * Available if requesting extended `all`.
   */
  tmdb: z.object({ rating: z.number(), votes: z.number() }).optional(),
  /***
   * Available if requesting extended `all`.
   */
  imdb: z.object({ rating: z.number(), votes: z.number() }).optional(),
  /***
   * Available if requesting extended `all`.
   */
  metascore: z.object({ rating: z.number() }).optional(),
  /***
   * Available if requesting extended `all`.
   */
  rotten_tomatoes: z.object({ rating: z.number(), user_rating: z.number() })
    .optional(),
});
