import Express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
import { mainController } from "../controller";

export const createServer = () => {
  const app = Express();

  dotenv.config();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get("/", (req: Request, res: Response) => {
    res.send("Api");
  });

  app.use("/api", mainController());

  const port = process.env.PORT || "5000";

  app.listen(port, () => {
    console.log(`server is running on http://localhost:${port} ☂️`);
  });
};
