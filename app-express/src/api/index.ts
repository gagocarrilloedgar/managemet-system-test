import express, { Request, Response } from "express";

import { accountRoutes } from "../accounts/routes";
import { transactionsRoutes } from "../transactions/routes";

const router = express.Router();

router.get("/ping", (_req: Request, res: Response) => {
  res.send("pong");
});

transactionsRoutes(router);
accountRoutes(router);

export default router;
