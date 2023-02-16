import { PrismaClient } from '@deur/cloud-prisma-db';
import fetch from 'node-fetch';

const prisma = new PrismaClient();

async function main() {
  const allUsers = await prisma.user.findMany();
  const allLocations = await prisma.location.findMany();

  // Select random Location
  const randomLocation = allLocations[Math.floor(Math.random() * allLocations.length)];
  // Select random user
  const randomUser = allUsers[Math.floor(Math.random() * allUsers.length)];
  try {
    const res = await fetch('http://127.0.0.1:3030/v1/visit/log-visit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-location': randomLocation.id,
        'x-country': randomLocation.countryId,
      },
      body: JSON.stringify({
        cardNumber: randomUser.cardNumber,
      }),
    });

    const json: any = await res.json();

    console.table({ '🚀': 'Script Made this User Visit', ...json });
  } catch (error) {
    console.log('error', error);
  }
}
setInterval(main, 2000);
