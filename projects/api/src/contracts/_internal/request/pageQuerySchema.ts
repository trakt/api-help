import { sortDirectionSchema } from '../response/sortDirectionSchema.ts';
import { z } from '../z.ts';

export const pageQuerySchema = z.object({
  page: z.number().optional(),
  sort_by: z.string().optional(),
  sort_how: sortDirectionSchema.optional(),
  limit: z.number().optional(),
});
