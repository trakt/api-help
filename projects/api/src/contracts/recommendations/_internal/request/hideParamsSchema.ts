import { z } from '../../../_internal/z.ts';

export const hideParamsSchema = z.object({
  id: z.number().or(z.string()).describe(
    'Trakt ID, Trakt slug, or IMDB ID Example: 922.',
  ),
});
