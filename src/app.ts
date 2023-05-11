import express from "express";
import "express-async-errors";
import connection from "./config/config";
import { NotFoundError } from "./errors";
import { errorHandler } from "./middlewares";
import todoRoutes from "./routes/todos";

export const createApp = () => {
  const app = express();

  app.use("/todos", todoRoutes);

  app.all("*", async (req, res) => {
    throw new NotFoundError("Route not found");
  });

  app.use(errorHandler);

  return app;
};
