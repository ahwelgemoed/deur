import * as dotenv from 'dotenv';

import { bootstrap } from './server';

dotenv.config();

const server = bootstrap();

async function main() {
  try {
    await server.listen({ port: Number('3034'), host: '0.0.0.0' });
    console.log('🚀 Base- Local :: 3034');
    console.log('🚀 MQ Dashboard  ::  3034/ui');
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

main();
