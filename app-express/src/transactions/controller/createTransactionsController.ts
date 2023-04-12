import { Request, Response } from "express";

interface CreateTransactionRequest {
  account_id: string;
  amount: number;
}

interface CreateTransactionResponse {
  transaction_id: string;
  account_id: string;
  amount: number;
  created_at: Date;
}

export const createTransactionsController = async (
  req: Request,
  res: Response
) => {
  const { account_id, amount } = req.body as CreateTransactionRequest;

  // Here something happens
  res.status(201).json({
    transaction_id: "123",
    account_id,
    amount,
    created_at: new Date()
  } as CreateTransactionResponse);
};
