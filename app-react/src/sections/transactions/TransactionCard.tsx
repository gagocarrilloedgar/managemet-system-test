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
  const title = `Transferred ${amount}$ ${
    isLast ? "from" : "to"
  } account ${accountId}`;

  const subHeader = isLast && `The current balance is ${balance}$`;

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
        <CardHeader title={title} subheader={subHeader} />
      </div>
    </Card>
  );
};
