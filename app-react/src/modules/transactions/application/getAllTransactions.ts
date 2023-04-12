import { TransactionRepository } from "../domain/TransactionRepository";

export const getAllTransactions =
  (repository: TransactionRepository) => async () => {
    return await repository.searchAll();
  };
