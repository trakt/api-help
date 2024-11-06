import { z } from '../../../_internal/z.ts';

export const extendedQuerySchema = z.object({ extended: z.enum(['cloud9']) });
