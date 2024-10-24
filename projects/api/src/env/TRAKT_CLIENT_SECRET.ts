import { assertDefined } from '../utils/assertDefined.ts';

export const TRAKT_CLIENT_SECRET = assertDefined(
  Deno.env.get('TRAKT_CLIENT_SECRET'),
  'TRAKT_CLIENT_SECRET is not defined',
);
