import { Request, Response } from "express";

import {
  CreateTransactionRequest,
  createTransaction
} from "../application/createTransaction";
import { TransactionReposity } from "../domain/TransactionRepository";

export const createTransactionsController =
  (transactionRepository: TransactionReposity) =>
  async (req: Request, res: Response) => {
    const { account_id, amount } = req.body as CreateTransactionRequest;

    // Here something happens
    await createTransaction(transactionRepository)({
      account_id,
      amount
    });
  };
