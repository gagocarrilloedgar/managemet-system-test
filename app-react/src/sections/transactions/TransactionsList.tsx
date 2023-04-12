import { Transaction } from "../../modules/transactions/domain/Transactions";
import { TransactionCard } from "./TransactionCard";

interface TransactionsListProps {
  transactions: Partial<Transaction>[];
  balance: number;
}
export const TransactionsList = ({
  transactions,
  balance
}: TransactionsListProps) => {
  if (transactions.length === 0) {
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
          balance={balance}
          isLast={index === 0}
        />
      ))}
    </div>
  );
};
