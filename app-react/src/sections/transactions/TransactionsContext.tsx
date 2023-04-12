import React from "react";

import { createTransaction } from "../../modules/transactions/application/createTransactions";
import { getAllTransactions } from "../../modules/transactions/application/getAllTransactions";
import { TransactionRepository } from "../../modules/transactions/domain/TransactionRepository";
import {
    NewTransaction,
    Transaction
} from "../../modules/transactions/domain/Transactions";

export interface ContextState {
  transactions: Transaction[];
  createTransaction: (transaction: NewTransaction) => Promise<void>;
}

export const TransactionsContext = React.createContext({} as ContextState);

export const useTransactionsContext = () =>
  React.useContext(TransactionsContext);

export const TransactionContextProvider = ({
  children,
  repository
}: React.PropsWithChildren<{ repository: TransactionRepository }>) => {
  const [transactions, setTransactions] = React.useState<Transaction[]>([]);

  const create = async (transaction: NewTransaction) => {
    const newTransaction = await createTransaction(repository)(transaction);

    setTransactions([...transactions, newTransaction]);
  };

  const loadTransactions = React.useCallback(async () => {
    const transactions = await getAllTransactions(repository)();
    setTransactions(transactions);
  }, [repository]);

  React.useEffect(() => {
    loadTransactions();
  }, [loadTransactions]);

  return (
    <TransactionsContext.Provider
      value={{ transactions, createTransaction: create }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
