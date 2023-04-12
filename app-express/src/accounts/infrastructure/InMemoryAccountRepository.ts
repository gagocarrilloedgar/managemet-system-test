import { Account } from "../domain/Account";
import { AccountRepository } from "../domain/AccountRepository";

export const InMemoryAccountRepository = (
  initAccounts?: Account[]
): AccountRepository => {
  const accounts: Account[] = initAccounts ?? [];

  return {
    searchById: async (account_id: string) => {
      return accounts.find((account) => account.account_id === account_id);
    },
    update: async (updatedAccount: Account) => {
      const index = accounts.findIndex(
        (account) => account.account_id === updatedAccount.account_id
      );

      if (index === -1) throw new Error("Account not found");

      accounts[index].balance = updatedAccount.balance;
    }
  };
};
