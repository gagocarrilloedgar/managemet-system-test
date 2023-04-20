import { TransactionRepository } from "../domain/TransactionRepository";

export const getAllTransactions =
  (repository: TransactionRepository) => async () => {
    const transactions = await repository.searchAll();
    return transactions;
  };
