import { z } from '../z.ts';
import { showResponseSchema } from './showResponseSchema.ts';

export const showPopularResponseSchema = z.array(showResponseSchema);
