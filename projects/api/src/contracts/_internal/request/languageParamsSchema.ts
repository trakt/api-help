import { z } from '../z.ts';

export const languageParamsSchema = z.object({ language: z.string() });
