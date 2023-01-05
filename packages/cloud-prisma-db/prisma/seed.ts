import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

import Chance from 'chance';

const chance = new Chance();

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);
  const startTime = Date.now();
  for (let i = 0; i < 50_000; i++) {
    await prisma.user.create({
      data: {
        name: faker.name.firstName(),
        birthDay: faker.date.past(),
        clubId: faker.datatype.number({ min: 1, max: 5000 }),
        email: faker.internet.email(),
        isAllowed: chance.bool(),
      },
    });
  }
  const endTime = Date.now();
  const duration = (endTime - startTime) / 1000 / 60;
  console.log(`Seeding finished.`);
  console.log(`Duration: ${duration} minutes`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
