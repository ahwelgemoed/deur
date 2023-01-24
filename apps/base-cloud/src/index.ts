import * as dotenv from 'dotenv';

import { bootstrap } from './server';

dotenv.config();

const server = bootstrap();

async function main() {
  try {
    await server.listen({ port: Number(process.env.SERVER_PORT_CLOUD), host: '0.0.0.0' });
    console.log(`🚀 Server listening on port ${process.env.SERVER_PORT_CLOUD}`);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

main();
