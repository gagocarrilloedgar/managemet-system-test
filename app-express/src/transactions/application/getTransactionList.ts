import { TransactionReposity } from "../domain/TransactionRepository";

export const getTransactionByList =
  (transactionRepository: TransactionReposity) => () =>
    transactionRepository.searchAll();
