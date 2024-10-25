import { TRAKT_CLIENT_ID } from './src/env/TRAKT_CLIENT_ID.ts';
import { TRAKT_CLIENT_SECRET } from './src/env/TRAKT_CLIENT_SECRET.ts';
import { Environment } from './src/Environment.ts';
import { type TraktApi, traktApiBuilder } from './src/traktApiBuilder.ts';
import type { OAuthDeviceTokenResponse } from './src/contracts/oauth/index.ts';

const api = traktApiBuilder({
  environment: Environment.production,
});

function createDeviceTokenPoller(api: TraktApi) {
  return async function ({
    client_id,
    client_secret,
  }: {
    client_id: string;
    client_secret: string;
  }): Promise<OAuthDeviceTokenResponse> {
    const codeResponse = await api.oauth.device.code({
      body: {
        client_id,
      },
    });

    if (codeResponse.status !== 200) {
      return Promise.reject(codeResponse.body);
    }

    console.log(
      `Go to: ${codeResponse.body.verification_url}/${codeResponse.body.user_code}`,
    );

    return new Promise(
      (resolve, reject) => {
        const codeExpiresAt = Date.now() + codeResponse.body.expires_in * 1000;

        const tokenInterval = setInterval(async () => {
          if (Date.now() > codeExpiresAt) {
            clearInterval(tokenInterval);
            reject('Code has expired');
          }

          const tokenResponse = await api.oauth.device
            .token({
              body: {
                code: codeResponse.body.device_code,
                client_id,
                client_secret,
              },
            })
            .catch(() => {
              // Trakt API does not return a correct body for 400 responses
              // throws error when trying to parse JSON
              return Promise.resolve({ status: 400, body: undefined });
            });

          if (tokenResponse.status === 200) {
            resolve(tokenResponse.body);
            clearInterval(tokenInterval);
          }
        }, codeResponse.body.interval * 1000);
      },
    );
  };
}

async function authDevice() {
  console.log('Requesting device token...');

  const result = await createDeviceTokenPoller(api)({
    client_id: TRAKT_CLIENT_ID,
    client_secret: TRAKT_CLIENT_SECRET,
  });

  return result;
}

const result = await authDevice();
console.log('Authenticated successfully', result);

const calendar = await api.calendars.shows({
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
