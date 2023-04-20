import AppError from "../../shared/AppError";
import { Account } from "../domain/Account";
import { AccountRepository } from "../domain/AccountRepository";

export const getAccountById =
  (accountRepository: AccountRepository) =>
  async (id: string): Promise<Account> => {
    const account = await accountRepository.searchById(id);

    if (!account) throw new AppError("Account not found", 404);

    return account;
  };
