import { Router } from "express";
import projectsRouter from "./project.router";

const router = Router();

router.use("/projects", projectsRouter);

export default router;
