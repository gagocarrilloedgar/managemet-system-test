import { Grid } from "@mui/material";

import { CardColumn } from "../shared/CardColumn";

export const TransactionsLayout = () => {
  return (
    <Grid container spacing={4}>
      <CardColumn title="New transaction" size={{ xl: 3, lg: 4 }}>
        fsdasf
      </CardColumn>
      <CardColumn title="Transactions" size={{ xl: 9, lg: 8 }} height="80vh">
        fsdasf
      </CardColumn>
    </Grid>
  );
};
