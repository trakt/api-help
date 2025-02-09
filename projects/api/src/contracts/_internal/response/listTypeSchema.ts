import { z } from '../z.ts';

export const listTypeSchema = z.object({
  type: z.enum([
    'all',
    'personal',
    'official',
    'watchlist',
    'favorites',
  ]),
});
