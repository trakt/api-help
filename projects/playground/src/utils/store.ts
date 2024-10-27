import { ensureDir, ensureFile } from '@std/fs';
import type { OAuthDeviceTokenResponse } from '@trakt/api';

const STORE_DIR = '.store';
const STORE_FILE = 'db.json';

export enum StoreKey {
  Auth = 'authorization',
}

type StoreKeyToValue = {
  [StoreKey.Auth]: OAuthDeviceTokenResponse;
};

export const store = await (async () => {
  const filePath = `${STORE_DIR}/${STORE_FILE}`;

  await ensureDir(STORE_DIR);
  await ensureFile(filePath);

  const dbRaw = new TextDecoder()
    .decode(await Deno.readFile(filePath));
  const db = dbRaw.length ? JSON.parse(dbRaw) : {};

  return {
    get: (key: StoreKey) => db[key] as StoreKeyToValue[typeof key] | undefined,
    set: (key: StoreKey, value: StoreKeyToValue[typeof key]) => {
      db[key] = value;
      Deno.writeTextFile(filePath, JSON.stringify(db));
    },
  };
})();
