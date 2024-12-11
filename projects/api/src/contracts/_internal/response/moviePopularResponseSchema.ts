import { z } from '../z.ts';
import { movieResponseSchema } from './movieResponseSchema.ts';

export const moviePopularResponseSchema = z.array(movieResponseSchema);
