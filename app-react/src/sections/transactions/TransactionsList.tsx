import { TransactionCard } from "./TransactionCard";
import { useFetchTransactions } from "./useFetchTransactions";

export const TransactionsList = () => {
  const { isLoading, transactions, accountBalance } = useFetchTransactions();

  // This can be improved by adding a custom component for loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // This can be improved by adding a custom component for empty state
  if (!isLoading && transactions.length === 0) {
    return <div>No transactions</div>;
  }

  return (
    <div
      style={{
        height: "100%",
        overflow: "auto"
      }}
    >
      {transactions.map((transaction, index) => (
        <TransactionCard
          key={transaction.transaction_id}
          accountId={transaction.account_id || ""}
          amount={transaction.amount || 0}
          balance={accountBalance}
          isLast={index === 0}
        />
      ))}
    </div>
  );
};
