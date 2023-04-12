import { Request, Response } from "express";

interface GetTransactionResponse {
  transaction_id: string;
  account_id: string;
  amount: number;
  created_at: Date;
}

export const getTransactionController = async (req: Request, res: Response) => {
  const { transaction_id } = req.params as { transaction_id: string };

  // Here something happens
  res.status(201).json({
    transaction_id: transaction_id,
    account_id: "123",
    amount: 123,
    created_at: new Date()
  } as GetTransactionResponse);
};
