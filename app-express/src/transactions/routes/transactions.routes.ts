import { Router } from "express";

import { createTransactionsController } from "../controller/createTransactionsController";
import { getTransactionController } from "../controller/getTransactionController";
import { getTransactionsController } from "../controller/getTransactionsController";
import { InMemoryTransactionRepository } from "../infrastructure/InMemoryTransactionRepositpory";

const TRANSACTIONS_ROUTES = "/transactions";

// Here we inject the router intest of creating so we can use another router in the future (for example, the async router)

export const transactionsRoutes = (router: Router) => {
  const transactionRepository = InMemoryTransactionRepository();

  router.post(
    TRANSACTIONS_ROUTES,
    createTransactionsController(transactionRepository)
  );

  router.get(
    TRANSACTIONS_ROUTES,
    getTransactionsController(transactionRepository)
  );

  router.get(
    `${TRANSACTIONS_ROUTES}/:transaction_id`,
    getTransactionController(transactionRepository)
  );
};
