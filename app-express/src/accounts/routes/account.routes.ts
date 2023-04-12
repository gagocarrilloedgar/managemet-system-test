import { Router } from "express";
import { getAccountController } from "../controller/getAccountController";
import { updateAccountOnNewTransactionController } from "../controller/updateAccountOnNewTransactionController";
import { InMemoryAccountRepository } from "../infrastructure/InMemoryAccountRepository";

export const accountRoutes = (router: Router) => {
  const accountRepository = InMemoryAccountRepository();

  // Routes
  router.get("/accounts/:account_id", getAccountController(accountRepository));

  // Domain events
  updateAccountOnNewTransactionController(accountRepository);
};
