import { TransactionReposity } from "../domain/TransactionRepository";

export const getTransactionById =
  (transactionRepository: TransactionReposity) =>
  async (transaction_id: string) => {
    const transaction = await transactionRepository.searchById(transaction_id);
    if (!transaction) throw new Error("Transaction not found");
    return transaction;
  };
