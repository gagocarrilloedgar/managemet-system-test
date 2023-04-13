import { subscribeToDomainEvent } from "../../shared/domainEvent";
import { udpateAccountOnTransactionCreated } from "../application/updateAccountOnTransactionCreated";
import { AccountTransaction } from "../domain/Account";
import { AccountRepository } from "../domain/AccountRepository";

export const updateAccountOnNewTransactionController = (
  accountRepository: AccountRepository
) => {
  const eventName = "transactions.created";

  const callback = async (payload: unknown) => {
    const transaction = payload as AccountTransaction;
    await udpateAccountOnTransactionCreated(accountRepository)(transaction);
  };

  subscribeToDomainEvent({ eventName, callback });
};
