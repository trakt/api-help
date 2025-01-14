import { z } from '../z.ts';

export const characterResponseSchema = z.object({
  character: z.string(),
  characters: z.array(z.string()),
});
