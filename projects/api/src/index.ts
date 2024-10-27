import { Environment } from './Environment.ts';
import { initClient } from '@ts-rest/core';
import { traktContract } from './contracts/traktContract.ts';

export type * from './contracts/oauth/index.ts';
export type * from './contracts/calendars/index.ts';

export { traktContract };
export { Environment };

export type TraktApiOptions = {
  /**
   * Trakt API environment target (production, staging, development)
   */
  environment: Environment;
  /**
   * Trakt API key (client id from trakt.tv API application)
   */
  apiKey: string;
};

export type TraktApi = ReturnType<typeof traktApiFactory>;

export function traktApiFactory({
  environment,
  apiKey,
}: TraktApiOptions) {
  return initClient(traktContract, {
    baseUrl: environment,
    baseHeaders: {
      'Content-Type': 'application/json',
      'trakt-api-version': '2',
      'trakt-api-key': apiKey,
    },
  });
}

export function traktApi({
  environment = Environment.production,
  apiKey,
}: TraktApiOptions): TraktApi {
  return traktApiFactory({
    environment,
    apiKey,
  });
}
