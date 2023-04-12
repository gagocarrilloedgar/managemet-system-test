import { TextField } from "@mui/material";

export const NewTransactionForm = () => {
  return (
    <form data-type="transaction-form">
      <TextField
        fullWidth
        label="Account ID"
        datatype="account-id"
        sx={{ marginBottom: "10px" }}
      />
      <TextField fullWidth label="Amount" datatype="amount" />
      <input
        type="submit"
        datatype="transaction-type"
        style={{
          width: "150px",
          backgroundColor: "transparent",
          borderRadius: "5px",
          border: "1px solid #000",
          padding: "5px",
          marginTop: "10px"
        }}
        value="Submit"
      />
    </form>
  );
};
