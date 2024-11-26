import { z } from '../z.ts';

type Combinations<T extends readonly string[]> = T extends
  readonly [infer F extends string, ...infer R extends string[]]
  ? F | `${F},${Combinations<R>}` | Combinations<R>
  : never;

type ExtendedParamsFrom<T extends string[]> = Combinations<T>;

export const extendedQuerySchemaFactory = <T extends string[]>() =>
  z.object({
    extended: z
      .custom<ExtendedParamsFrom<T>>()
      .optional(),
  });
