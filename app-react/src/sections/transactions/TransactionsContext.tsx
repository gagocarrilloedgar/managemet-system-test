import React from "react";

import { createTransaction } from "../../modules/transactions/application/createTransactions";
import { getAccountBalance } from "../../modules/transactions/application/getAccountBalance";
import { getAllTransactions } from "../../modules/transactions/application/getAllTransactions";
import { TransactionRepository } from "../../modules/transactions/domain/TransactionRepository";
import {
  NewTransaction,
  Transaction
} from "../../modules/transactions/domain/Transactions";

export interface ContextState {
  transactions: Transaction[];
  accountBalance: number;
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
  const [accountBalance, setAccountBalance] = React.useState(0);

  const create = async (transaction: NewTransaction) => {
    const newTransaction = await createTransaction(repository)(transaction);

    setTransactions([...transactions, newTransaction]);
  };

  const loadTransactions = React.useCallback(async () => {
    const transactions = await getAllTransactions(repository)();
    setTransactions(transactions);
  }, [repository]);

  const loadAccountBalance = React.useCallback(async () => {
    const firstTransaction = transactions[0];
    const accountId = firstTransaction?.account_id;
    const balance = await getAccountBalance(repository)(accountId);
    setAccountBalance(balance);
  }, [repository, transactions]);

  React.useEffect(() => {
    loadTransactions();
  }, [loadTransactions]);

  React.useEffect(() => {
    loadAccountBalance();
  }, [loadAccountBalance]);

  return (
    <TransactionsContext.Provider
      value={{ transactions, createTransaction: create, accountBalance }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
