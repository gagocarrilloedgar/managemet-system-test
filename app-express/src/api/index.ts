import { Request, Response, Router } from "express";

import { accountRoutes } from "../accounts/routes";
import { transactionsRoutes } from "../transactions/routes";

export const apiEndpoints = (router: Router) => {
  router.get("/ping", (_req: Request, res: Response) => {
    res.send("pong");
  });

  transactionsRoutes(router);
  accountRoutes(router);

  return router;
};
