import { start } from './set-up-server';
import * as dotenv from 'dotenv';

dotenv.config();

(async () => {
  await start();
})();
