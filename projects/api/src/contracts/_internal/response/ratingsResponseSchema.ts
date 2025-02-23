import { z } from '../z.ts';

const externalRatingsResponseSchema = z.object({
  rating: z.number().nullable(),
  link: z.string().nullable(),
});

export const ratingsResponseSchema = z.object({
  trakt: z.object({
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
  }),
  /***
   * Available if requesting extended `all`.
   */
  tmdb: externalRatingsResponseSchema.extend({
    votes: z.number().nullable(),
  }).optional(),
  /***
   * Available if requesting extended `all`.
   */
  imdb: externalRatingsResponseSchema.extend({
    votes: z.number().nullable(),
  }).optional(),
  /***
   * Available if requesting extended `all`.
   */
  metascore: externalRatingsResponseSchema.optional(),
  /***
   * Available if requesting extended `all`.
   */
  rotten_tomatoes: externalRatingsResponseSchema.extend({
    user_rating: z.number().nullable(),
  }).optional(),
});
