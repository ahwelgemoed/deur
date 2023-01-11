import { faker } from '@faker-js/faker';
import { PrismaClient } from './generated';
const prisma = new PrismaClient();

const counties = [
  { name: 'Germany', code: 'DE' },
  { name: 'France', code: 'FR' },
  { name: 'Italy', code: 'IT' },
  { name: 'Spain', code: 'ES' },
  { name: 'Netherlands', code: 'NL' },
  { name: 'Belgium', code: 'BE' },
  { name: 'Portugal', code: 'PT' },
  { name: 'Switzerland', code: 'CH' },
];

const deviceTypes = ['Gate_iPad', 'Gate_Scanner', 'Inside_iPad', 'Inside_Scanner', 'Admin_iPad'];

async function main() {
  console.log(`Start seeding ...`);
  const startTime = Date.now();
  deviceTypes.forEach(async (deviceType) => {
    await prisma.deviceTypes.create({
      data: {
        name: deviceType,
      },
    });
  });

  // Loop over Countries
  for (let i = 0; i < counties.length; i++) {
    const country = counties[i];
    console.log(`Seeding ${country.name} @ ${Date.now().toLocaleString()}`);
    const createdCountry = await prisma.country.create({
      data: {
        name: country.name,
        code: country.code,
      },
    });
    // Create 1000 Locations
    for (let i = 0; i < 500; i++) {
      const createdLocation = await prisma.location.create({
        data: {
          name: faker.address.cityName(),
          countryId: createdCountry.id,
        },
      });
      // Create 10000 Users per  Location
      for (let i = 0; i < 2000; i++) {
        await prisma.user.create({
          data: {
            cardNumber: faker.datatype.uuid(),
            name: faker.name.firstName(),
            birthDay: faker.date.past(),
            email: faker.internet.email(),
            isAllowed: faker.datatype.boolean(),
            locationId: createdLocation.id,
          },
        });
      }
    }
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
