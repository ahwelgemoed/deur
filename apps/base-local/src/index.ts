import { start } from './set-up-server';
import * as dotenv from 'dotenv';

dotenv.config();

(async () => {
  // await setUpLocalDatabase();
  await start();
})();

// TODO:: MOVE TO ENV and SETUP LOCAL DATABASE
