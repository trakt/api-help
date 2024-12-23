import { z } from '../z.ts';

export const countryParamsSchema = z.object({
  country: z.string(),
});
