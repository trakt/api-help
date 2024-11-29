import type { CombinationsFrom } from '../../../../types/CombinationsFrom.ts';
import { z } from '../../../_internal/z.ts';

export const searchTypeParamFactory = <T extends string[]>() =>
  z.object({
    type: z
      .custom<CombinationsFrom<T>>()
      .optional(),
  });
