import * as dotenv from 'dotenv';

import { bootstrap } from './server';

dotenv.config();

const server = bootstrap();

async function main() {
  try {
    await server.listen({ port: Number('3033'), host: '0.0.0.0' });
    console.log('🚀 Base- Local :: 3033-TRPC');
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

main();
