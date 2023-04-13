import { AccountTransaction } from "../domain/Account";
import { AccountRepository } from "../domain/AccountRepository";

export const udpateAccountOnTransactionCreated =
  (accountRepository: AccountRepository) =>
  async (transaction: AccountTransaction) => {
    const account = await accountRepository.searchById(transaction.account_id);

    if (!account)
      return await accountRepository.create({
        account_id: transaction.account_id,
        balance: transaction.amount
      });

    const udpatedAccount = {
      ...account,
      balance: account.balance + transaction.amount
    };

    await accountRepository.update(udpatedAccount);
  };
