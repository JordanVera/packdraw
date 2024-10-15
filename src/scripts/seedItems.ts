const { PrismaClient } = require('@prisma/client');
const { items } = require('../constants/items'); // Adjust this import path as needed

const prisma = new PrismaClient();

async function seedItems() {
  console.log('Starting to seed items...');

  for (const item of items) {
    try {
      await prisma.item.create({
        data: {
          name: item.name,
          description: item.description,
          price: item.price,
          image: item.image,
          brand: item.brand,
        },
      });
      console.log(`Added item: ${item.name}`);
    } catch (error) {
      console.error(`Error adding item ${item.name}:`, error);
    }
  }

  console.log('Finished seeding items.');
}

seedItems()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
