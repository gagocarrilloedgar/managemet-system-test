import { TransactionRepository } from "../domain/TransactionRepository";
import {
    NewTransaction,
    ensureValidTransactionAccount
} from "../domain/Transactions";

export const createTransaction =
  (transactionRepository: TransactionRepository) =>
  async (transaction: NewTransaction) => {
    ensureValidTransactionAccount(transaction.account_id);

    return await transactionRepository.create(transaction);
  };
