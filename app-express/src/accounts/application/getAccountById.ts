import { Account } from "../domain/Account";
import { AccountRepository } from "../domain/AccountRepository";

export const getAccountById =
  (accountRepository: AccountRepository) =>
  async (id: string): Promise<Account> => {
    const account = await accountRepository.searchById(id);

    if (!account) throw new Error("Account not found");

    return account;
  };
