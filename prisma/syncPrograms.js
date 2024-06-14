const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function syncDenormalizedPrograms() {
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

  for (const program of programs) {
    await prisma.denormalizedProgram.upsert({
      where: { programId: program.id },
      update: {
        programName: program.name,
        sectorName: program.sector?.name,
        areaName: program.area?.name,
        planName: program.plan?.name,
        credentialName: program.credential?.name,
        descriptionText: program.description?.text,
        collegeName: program.college?.name,
        programAreaUrl: program.programAreaUrl?.url,
      },
      create: {
        programName: program.name,
        sectorName: program.sector?.name,
        areaName: program.area?.name,
        planName: program.plan?.name,
        credentialName: program.credential?.name,
        descriptionText: program.description?.text,
        collegeName: program.college?.name,
        programAreaUrl: program.programAreaUrl?.url,
        programId: program.id,
      },
    });
  }
}



// Run this function to initially populate or update the denormalized table.
syncDenormalizedPrograms()
  .then(() => console.log("Denormalized programs synced"))
  .catch((error) =>
    console.error("Error syncing denormalized programs:", error),
  )
  .finally(() => prisma.$disconnect());
