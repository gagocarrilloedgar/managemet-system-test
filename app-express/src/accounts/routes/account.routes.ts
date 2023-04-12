import { Router } from "express";

import accounts from "../../../data/accounts.json";

import { getAccountController } from "../controller/getAccountController";
import { updateAccountOnNewTransactionController } from "../controller/updateAccountOnNewTransactionController";
import { InMemoryAccountRepository } from "../infrastructure/InMemoryAccountRepository";

const ACCOUNT_ROUTES = "/accounts";

export const accountRoutes = (router: Router) => {
  const accountRepository = InMemoryAccountRepository(accounts);

  // Routes
  router.get(
    `${ACCOUNT_ROUTES}/:account_id`,
    getAccountController(accountRepository)
  );

  // Domain events
  updateAccountOnNewTransactionController(accountRepository);
};
