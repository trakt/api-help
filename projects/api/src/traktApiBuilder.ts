import { Environment } from './Environment.ts';
import { initClient } from '@ts-rest/core';
import { TRAKT_CLIENT_ID } from './env/TRAKT_CLIENT_ID.ts';
import { builder } from './contracts/_internal/builder.ts';
import { oauth } from './contracts/oauth.ts';

export type TraktApiOptions = {
  environment: Environment;
};

const contract = builder
  .router({
    oauth,
  });

export type TraktApi = ReturnType<typeof traktApiBuilder>;

export function traktApiBuilder({
  environment = Environment.production,
}: TraktApiOptions) {
  const contract = builder
    .router({
      oauth,
      calendars,
    });

  return initClient(contract, {
    baseUrl: environment,
    baseHeaders: {
      'Content-Type': 'application/json',
      'trakt-api-version': '2',
      'trakt-api-key': TRAKT_CLIENT_ID,
    },
  });
}
