import { Grid } from "@mui/material";

import { CardColumn } from "../shared/CardColumn";
import { NewTransactionForm } from "./NewTransactionForm";
import { TransactionsList } from "./TransactionsList";

export const TransactionsLayout = () => {
  return (
    <Grid container spacing={4}>
      <CardColumn title="Submit new transaction" size={{ xl: 3, lg: 4 }}>
        <NewTransactionForm />
      </CardColumn>
      <CardColumn title="Transactions" size={{ xl: 9, lg: 8 }} height="80vh">
        <TransactionsList transactions={dummyTransactions} balance={1000} />
      </CardColumn>
    </Grid>
  );
};

const dummyTransactions = [
  {
    account_id: "1",
    amount: 100,
    transaction_id: "1"
  },
  {
    account_id: "2",
    amount: 200,
    transaction_id: "2"
  },
  {
    account_id: "1",
    amount: 100,
    transaction_id: "3"
  },
  {
    account_id: "2",
    amount: 200,
    transaction_id: "4"
  },
  {
    account_id: "1",
    amount: 100,
    transaction_id: "5"
  },
  {
    account_id: "2",
    amount: 200,
    transaction_id: "6"
  },
  {
    account_id: "2",
    amount: 200,
    transaction_id: "7"
  },
  {
    account_id: "2",
    amount: 600,
    transaction_id: "8"
  }
];
