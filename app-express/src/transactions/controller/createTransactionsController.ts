import { Request, Response } from "express";

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

    // Here something happens
    await createTransaction(transactionRepository)({
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
  };
