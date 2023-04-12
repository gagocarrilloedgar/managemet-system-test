import { Maybe } from "../../shared/types";
import { TransactionReposity } from "../domain/TransactionRepository";
import { Transaction } from "../domain/Transation";

export const InMemoryTransactionRepository = (): TransactionReposity => {
  const transactions: Transaction[] = [];

  const create = async (transaction: Transaction): Promise<void> => {
    transactions.push(transaction);
  };

  const searchById = async (
    transaction_id: string
  ): Promise<Maybe<Transaction>> =>
    transactions.find(
      (transaction) => transaction.transaction_id === transaction_id
    );

  const searchAll = async (): Promise<Transaction[]> => transactions;

  return {
    create,
    searchById,
    searchAll
  };
};
