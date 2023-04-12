import { Request, Response } from "express";

import httpStatus from "http-status";

import { getTransactionByList } from "../application/getTransactionList";
import { TransactionReposity } from "../domain/TransactionRepository";

export const getTransactionsController =
  (transactionRepository: TransactionReposity) =>
  async (_req: Request, res: Response) => {
    const transactions = await getTransactionByList(transactionRepository)();

    res.status(httpStatus.OK).json(transactions);
  };
