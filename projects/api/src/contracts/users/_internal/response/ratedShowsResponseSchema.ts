import { showResponseSchema } from '../../../_internal/response/showResponseSchema.ts';
import { z } from '../../../_internal/z.ts';
import { ratedResponseSchema } from './ratedResponseSchema.ts';

// TODO discriminatory
export const ratedShowsResponseSchema = ratedResponseSchema.extend({
  type: z.literal('show'),
  show: showResponseSchema,
});
