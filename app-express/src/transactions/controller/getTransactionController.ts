import { Request, Response } from "express";

import httpStatus from "http-status";

import { getTransactionById } from "../application/getTransactionById";
import { TransactionReposity } from "../domain/TransactionRepository";

export const getTransactionController =
  (transactionRepository: TransactionReposity) =>
  async (req: Request, res: Response) => {
    const { transaction_id } = req.params as { transaction_id: string };

    const transaction = await getTransactionById(transactionRepository)(
      transaction_id
    );

    return res.status(httpStatus.OK).json(transaction);
  };
