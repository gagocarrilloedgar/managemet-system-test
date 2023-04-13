import { TransactionRepository } from "../domain/TransactionRepository";

export const getAccountBalance =
  (repository: TransactionRepository) => async (accountId: string) => {
    const account = await repository.getAccountById(accountId);
    return account.balance;
  };
