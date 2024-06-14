const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const programs = await prisma.program.findMany({
    include: {
      sector: true,
      area: true,
      plan: true,
      credential: true,
      description: true,
      college: true,
      programAreaUrl: true,
    },
  });
  console.log(programs);
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
