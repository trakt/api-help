import { TRAKT_CLIENT_ID } from './src/env/TRAKT_CLIENT_ID.ts';
import { TRAKT_CLIENT_SECRET } from './src/env/TRAKT_CLIENT_SECRET.ts';
import { Environment, traktApi } from '@trakt/api';
import { store, StoreKey } from './src/utils/store.ts';
import { createDeviceTokenPoller } from './src/createDeviceTokenPoller.ts';

const api = traktApi({
  environment: Environment.production,
  apiKey: TRAKT_CLIENT_ID,
});

async function authDevice() {
  console.log('Requesting device token...');

  const result = await createDeviceTokenPoller(api)({
    client_id: TRAKT_CLIENT_ID,
    client_secret: TRAKT_CLIENT_SECRET,
  });

  return result;
}

const result = store.get(StoreKey.Auth) ?? await authDevice();
store.set(StoreKey.Auth, result);

const calendar = await api.calendars.shows({
  query: {
    extended: 'cloud9',
  },
  params: {
    target: 'my',
    start_date: '2024-10-25',
    days: 7,
  },
  extraHeaders: {
    Authorization: `Bearer ${result?.access_token}`,
  },
});

console.log('Calendar:', calendar);
