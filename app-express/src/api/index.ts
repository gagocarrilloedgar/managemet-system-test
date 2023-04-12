import express, { Request, Response } from "express";

import { transactionsRoutes } from "../transactions/routes";

const router = express.Router();

router.get("/ping", (req: Request, res: Response) => {
  res.send("pong");
});

transactionsRoutes(router);

export default router;
