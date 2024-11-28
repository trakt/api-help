import { z } from '../z.ts';

export const idParamsSchema = z.object({
  id: z.string(),
});
