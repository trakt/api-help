import { z } from '../../../_internal/z.ts';

export const sortParamsSchema = z.object({
  sort: z.enum([
    'rank',
    'added',
    'title',
    'released',
    'runtime',
    'popularity',
    'percentage',
    'votes',
  ]),
});
