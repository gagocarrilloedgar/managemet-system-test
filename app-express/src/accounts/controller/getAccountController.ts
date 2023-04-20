import { Request, Response } from "express";
import httpStatus from "http-status";

import { getAccountById } from "../application/getAccountById";
import { AccountRepository } from "../domain/AccountRepository";

export const getAccountController =
  (accountRepository: AccountRepository) =>
  async (req: Request, res: Response) => {
    const { account_id } = req.params as { account_id: string };

    const account = await getAccountById(accountRepository)(account_id);

    return res.status(httpStatus.OK).json(account);
  };
