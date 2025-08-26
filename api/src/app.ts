import express from "express";
import router from "./routes";
import { errorHandler } from "./middlewares/error.handler";
import { notFoundHandler } from "./middlewares/not-found";
import { logger } from "./middlewares/logger";

const app = express();

app.use(express.json());

// middleware de logs
app.use(logger);

app.use("/api", router);

// si aucune route ne correspond
app.use(notFoundHandler);

app.use(errorHandler);

export default app;
