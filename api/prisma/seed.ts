import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // On vide la table Project avant de réinsérer
  await prisma.project.deleteMany();

  // On insère de nouveaux projets
  await prisma.project.createMany({
    data: [
      {
        title: "Site vitrine A",
        description: "Ma première Landing Page.",
        techs: ["HTML", "CSS"],
      },
      {
        title: "Portfolio de Béatrix",
        description: "Un site web dynamique.",
        techs: ["HTML", "CSS", "JS"],
      },
      {
        title: "O’Vitrine",
        description: "Le projet complet avec Node.js + Prisma.",
        techs: ["HTML", "CSS", "JS", "NodeJS", "Prisma"],
      },
      {
        title: "Les emplettes",
        description: "Application e-commerce",
        techs: ["React", "NodeJS", "Prisma", "PostgreSQL"],
      },
    ],
  });
}

main()
  .then(() => console.log("Seed OK ✨"))
  .catch((e) => console.error("Seed KO 😵‍💫", e))
  .finally(async () => {
    await prisma.$disconnect();
  });
