import AppError from "../../shared/AppError";
import { TransactionReposity } from "../domain/TransactionRepository";

export const getTransactionById =
  (transactionRepository: TransactionReposity) =>
  async (transaction_id: string) => {
    const transaction = await transactionRepository.searchById(transaction_id);
    if (!transaction) throw new AppError("Transaction not found", 404);

    return transaction;
  };
