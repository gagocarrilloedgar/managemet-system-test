import { Router } from "express";

import { createTransactionController } from "../controller/createTransactionsController";
import { getTransactionController } from "../controller/getTransactionController";
import { getTransactionsController } from "../controller/getTransactionsController";

const baseRoute = "/transactions";

// Here we inject the router intest of creating so we can use another router in the future (for example, the async router)

export const transactionsRoutes = (router: Router) => {
  router.post(baseRoute, createTransactionController);

  router.get(baseRoute, getTransactionsController);

  router.get(`${baseRoute}/:transaction_id`, getTransactionController);
};
