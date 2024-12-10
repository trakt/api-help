import { sortDirectionSchema } from '../response/sortDirectionSchema.ts';
import { z } from '../z.ts';

export const sortQuerySchema = z.object({
  sort_by: z.string().optional(),
  sort_how: sortDirectionSchema.optional(),
});
