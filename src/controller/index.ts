import { Router } from "express";

export const mainController = () => {
  const app = Router();

  app.get("/", (req, res) => {
    res.send("test");
  });

  // app.use("/auth", authController());

  return app;
};
