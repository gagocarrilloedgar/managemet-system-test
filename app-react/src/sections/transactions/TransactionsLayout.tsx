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
        <TransactionsList />
      </CardColumn>
    </Grid>
  );
};
