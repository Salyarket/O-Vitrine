import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

// GET /api/projects
router.get("/", async (_req, res) => {
  const projects = await prisma.project.findMany();
  res.json(projects);
});

//smoke test
router.get("/ping", (_req, res) => {
  res.json({ message: "pong" });
});

export default router;
