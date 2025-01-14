import { characterResponseSchema } from '../../../_internal/response/characterResponseSchema.ts';
import { movieResponseSchema } from '../../../_internal/response/movieResponseSchema.ts';
import { z } from '../../../_internal/z.ts';

export const peopleMovieCreditsResponseSchema = z.object({
  cast: z.array(
    z.object({
      movie: movieResponseSchema,
    }).merge(characterResponseSchema),
  ).optional(),
});
