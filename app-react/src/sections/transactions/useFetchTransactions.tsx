import React from "react";
import { useTransactionsContext } from "./TransactionsContext";

export const useFetchTransactions = () => {
  const [loading, setLoading] = React.useState(true);
  const { transactions, accountBalance } = useTransactionsContext();

  React.useEffect(() => {
    if (transactions.length > 0 && accountBalance !== 0) {
      setLoading(false);
    }
  }, [transactions, accountBalance]);

  return {
    isLoading: loading,
    transactions,
    accountBalance
  };
};
