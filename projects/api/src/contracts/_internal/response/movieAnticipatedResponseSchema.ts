import { z } from '../z.ts';
import { movieResponseSchema } from './movieResponseSchema.ts';

export const movieAnticipatedResponseSchema = z.object({
  list_count: z.number(),
  movie: movieResponseSchema,
});
