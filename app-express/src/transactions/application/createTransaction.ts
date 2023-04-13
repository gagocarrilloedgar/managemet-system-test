import AppError from "../../shared/AppError";
import { uuid } from "../../shared/uuid";

import { TransactionReposity } from "../domain/TransactionRepository";
import { validateUuid } from "../domain/validateUuid";

export interface CreateTransactionRequest {
  account_id: string;
  amount: number;
}

export const createTransaction =
  (transactionRepository: TransactionReposity) =>
  async (transactionRequest: CreateTransactionRequest) => {
    if (!validateUuid(transactionRequest.account_id))
      throw new AppError("Specified content type not allowed.", 415);

    return await transactionRepository.create({
      transaction_id: uuid(),
      account_id: transactionRequest.account_id,
      amount: transactionRequest.amount,
      created_at: new Date()
    });
  };
