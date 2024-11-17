import { movieResponseSchema } from '../../_internal/response/movieResponseSchema.ts';
import { profileResponseSchema } from '../../_internal/response/userProfileResponseSchema.ts';
import { z } from '../../_internal/z.ts';

export const recommendedMovieResponse = z.array(
  movieResponseSchema
    .extend({
      favorited_by: z.array(
        profileResponseSchema
          .extend({
            notes: z.string(),
          }),
      ),
      recommended_by: z.array(
        profileResponseSchema
          .extend({
            notes: z.string(),
          }),
      ),
    }),
);
