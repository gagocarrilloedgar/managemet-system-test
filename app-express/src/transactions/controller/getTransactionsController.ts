import { Request, Response } from "express";

interface TransactionResponse {
  transaction_id: string;
  account_id: string;
  amount: number;
  created_at: Date;
}

type GetTransactionsResponse = TransactionResponse[];

export const getTransactionsController = async (
  req: Request,
  res: Response
) => {
  // Here something happens
  res.status(201).json([
    {
      transaction_id: "123",
      account_id: "123",
      amount: 123,
      created_at: new Date()
    }
  ] as GetTransactionsResponse);
};
