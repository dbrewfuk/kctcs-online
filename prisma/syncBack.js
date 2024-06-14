const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function syncBackToPrograms() {
  const denormalizedPrograms = await prisma.denormalizedProgram.findMany();

  for (const denormalizedProgram of denormalizedPrograms) {
    // Update the Program table
    await prisma.program.update({
      where: { id: denormalizedProgram.programId },
      data: { name: denormalizedProgram.programName },
    });

    // Update related tables if necessary
    if (denormalizedProgram.sectorName) {
      const sector = await prisma.sector.findFirst({
        where: { name: denormalizedProgram.sectorName },
      });
      if (sector) {
        await prisma.program.update({
          where: { id: denormalizedProgram.programId },
          data: { sectorid: sector.id },
        });
      }
    }

    if (denormalizedProgram.areaName) {
      const area = await prisma.area.findFirst({
        where: { name: denormalizedProgram.areaName },
      });
      if (area) {
        await prisma.program.update({
          where: { id: denormalizedProgram.programId },
          data: { areaid: area.id },
        });
      }
    }

    if (denormalizedProgram.planName) {
      const plan = await prisma.plan.findFirst({
        where: { name: denormalizedProgram.planName },
      });
      if (plan) {
        await prisma.program.update({
          where: { id: denormalizedProgram.programId },
          data: { planid: plan.id },
        });
      }
    }

    if (denormalizedProgram.credentialName) {
      const credential = await prisma.credential.findFirst({
        where: { name: denormalizedProgram.credentialName },
      });
      if (credential) {
        await prisma.program.update({
          where: { id: denormalizedProgram.programId },
          data: { credentialid: credential.id },
        });
      }
    }

    if (denormalizedProgram.descriptionText) {
      const description = await prisma.description.findFirst({
        where: { text: denormalizedProgram.descriptionText },
      });
      if (description) {
        await prisma.program.update({
          where: { id: denormalizedProgram.programId },
          data: { descriptionid: description.id },
        });
      }
    }

    if (denormalizedProgram.collegeName) {
      const college = await prisma.college.findFirst({
        where: { name: denormalizedProgram.collegeName },
      });
      if (college) {
        await prisma.program.update({
          where: { id: denormalizedProgram.programId },
          data: { collegeid: college.id },
        });
      }
    }

    if (denormalizedProgram.programAreaUrl) {
      const programAreaUrl = await prisma.programAreaUrl.findFirst({
        where: { url: denormalizedProgram.programAreaUrl },
      });
      if (programAreaUrl) {
        await prisma.program.update({
          where: { id: denormalizedProgram.programId },
          data: { programareaurlid: programAreaUrl.id },
        });
      }
    }
  }
}

// Run this function to sync changes back to normalized tables
syncBackToPrograms()
  .then(() => console.log("Programs synced back to normalized tables"))
  .catch((error) => console.error("Error syncing back programs:", error))
  .finally(() => prisma.$disconnect());
