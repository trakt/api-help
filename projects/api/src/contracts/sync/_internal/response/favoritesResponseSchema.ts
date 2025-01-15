import { z } from '../../../_internal/z.ts';
import { favoriteParamSchema } from '../request/favoritesParamSchema.ts';

export const favoritesResponseSchema = z.object({
  added: z.object({
    movies: z.number(),
    shows: z.number(),
  }),
  existing: z.object({
    movies: z.number(),
    shows: z.number(),
  }),
  not_found: favoriteParamSchema,
  list: z.object({
    updated_at: z.string(),
    item_count: z.number(),
  }),
});
