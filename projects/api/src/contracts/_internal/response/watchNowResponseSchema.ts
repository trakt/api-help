import { z } from '../z.ts';

const sourceSchema = z.object({
  source: z.string(),
  link: z.string(),
  uhd: z.boolean(),
  currency: z.string(),
  prices: z.object({
    rent: z.string().nullable().optional(),
    purchase: z.string().nullable().optional(),
  }),
});

export const watchNowResponseSchema = z.record(
  z.string(),
  z.object({
    cable: z.array(z.unknown()),
    free: z.array(z.unknown()),
    cinema: z.array(z.unknown()),
    subscription: z.array(sourceSchema),
    purchase: z.array(sourceSchema),
  }),
);
