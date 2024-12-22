import { z } from '../z.ts';

export const studiosResponseSchema = z.array(
  z.object({
    name: z.string(),
    country: z.string().optional(),
    ids: z.object({
      slug: z.string(),
    }),
  }),
);
