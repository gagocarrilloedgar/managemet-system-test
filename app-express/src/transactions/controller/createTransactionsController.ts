import { Request, Response } from "express";

import AppError from "../../shared/AppError";
import { publishDomainEvent } from "../../shared/domainEvent";
import {
  CreateTransactionRequest,
  createTransaction
} from "../application/createTransaction";
import { TransactionReposity } from "../domain/TransactionRepository";

export const createTransactionsController =
  (transactionRepository: TransactionReposity) =>
  async (req: Request, res: Response) => {
    const { account_id, amount } = req.body as CreateTransactionRequest;

    if (!account_id || !amount)
      throw new AppError(
        "	Mandatory body parameters missing or have incorrect type",
        400
      );
    // Here something happens
    const createdTransaction = await createTransaction(transactionRepository)({
      account_id,
      amount
    });

    // Here we publish the event to the event bus (locally for now)
    publishDomainEvent({
      eventName: "transactions.created",
      payload: {
        account_id,
        amount
      }
    });

    res.status(201).send({ ...createdTransaction });
  };
