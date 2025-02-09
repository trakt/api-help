import { z } from '../z.ts';

export const listSortSchema = z.object({
  sort: z.enum([
    'popular',
    'likes',
    'comments',
    'items',
    'added',
    'updated',
  ]),
});
