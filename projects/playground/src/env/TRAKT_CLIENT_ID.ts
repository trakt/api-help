import { assertDefined } from '../utils/assertDefined.ts';

export const TRAKT_CLIENT_ID = assertDefined(
  Deno.env.get('TRAKT_CLIENT_ID'),
  'TRAKT_CLIENT_ID is not defined',
);
