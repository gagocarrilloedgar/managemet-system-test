import { Card, CardHeader } from "@mui/material";

interface TransactionCardProps {
  accountId: string;
  amount: number;
  balance: number;
  isLast?: boolean;
}

export const TransactionCard = ({
  accountId,
  amount,
  balance,
  isLast
}: TransactionCardProps) => {
  return (
    <Card
      data-type="transaction-card"
      sx={{ marginBottom: "10px" }}
      variant="outlined"
    >
      <div
        data-type="transaction"
        data-account-id={accountId}
        data-amount={amount}
        data-balance={balance}
      >
        <CardHeader
          title={`Transferred ${amount}$ from account ${accountId}`}
          subheader={isLast && `The current balance is ${balance}$`}
        />
      </div>
    </Card>
  );
};
