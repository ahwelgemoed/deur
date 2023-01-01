import { PrismaClient } from "@prisma/client";

import Chance from "chance";

const chance = new Chance();

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);
  const startTime = Date.now();
  for (let i = 0; i < 5_000_000; i++) {
    await prisma.user.create({
      data: {
        name: chance.name(),
        email: chance.email(),
        clubId: chance.integer({ min: 0, max: 200 }),
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
