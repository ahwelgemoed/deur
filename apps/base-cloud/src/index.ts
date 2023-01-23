import * as dotenv from 'dotenv';

import { start } from './set-up-server';

dotenv.config();

(async () => {
  await start();
})();
