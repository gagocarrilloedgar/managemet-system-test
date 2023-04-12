import { AccountTransaction } from "../domain/Account";
import { AccountRepository } from "../domain/AccountRepository";

export const udpateAccountOnTransactionCreated =
  (accountRepository: AccountRepository) =>
  async (transaction: AccountTransaction) => {
    const account = await accountRepository.searchById(transaction.account_id);

    if (!account) throw new Error("Account not found");

    const udpatedAccount = {
      ...account,
      balance: account.balance + transaction.amount
    };

    await accountRepository.update(udpatedAccount);
  };
