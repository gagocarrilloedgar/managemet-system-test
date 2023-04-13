import React from "react";

import { TextField } from "@mui/material";

import { validateUuid } from "../../modules/transactions/domain/Transactions";
import { useFormData } from "./useFormData";
import { FormStatus, useTransactionForm } from "./useTransactionForm";

const initialState = {
  accountId: "",
  amount: 0
};

export const NewTransactionForm = () => {
  const { formData, updateForm, resetForm } = useFormData(initialState);
  const { formStatus, submitForm, resetFormStatus } = useTransactionForm();
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    const isTransactionValid = validateUuid(formData.accountId);

    setError(isTransactionValid ? "" : "Invalid account ID");
  }, [formData.accountId]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitForm(formData);
  };

  switch (formStatus) {
    case FormStatus.Loading:
      return <>...loading</>;
    case FormStatus.Success:
      return <SuccessNotification resetForm={resetForm} />;
    case FormStatus.Error:
      return <ErrorNotification resetForm={resetFormStatus} />;
    case FormStatus.Initial:
      return (
        <form data-type="transaction-form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Account ID"
            datatype="account-id"
            sx={{ marginBottom: "10px" }}
            value={formData.accountId}
            error={Boolean(formData.accountId && !!error)}
            helperText={formData.accountId && error}
            onChange={(event) => {
              updateForm({ accountId: event.target.value });
            }}
          />
          <TextField
            fullWidth
            label="Amount"
            datatype="amount"
            value={formData.amount}
            onChange={(event) => {
              updateForm({ amount: Number(event.target.value) });
            }}
          />
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
    default:
      return assertUnreachable(formStatus);
  }
};

function SuccessNotification({ resetForm }: { resetForm: () => void }) {
  return (
    <section>
      <h2>🚀 Transsaction created</h2>
      <button onClick={resetForm}>Create a new Transaction</button>
    </section>
  );
}

function ErrorNotification({ resetForm }: { resetForm: () => void }) {
  return (
    <section role="alert" className="error">
      <h2>🌋 You have an error in your form</h2>
      <button onClick={resetForm}>Ok, let me try again</button>
    </section>
  );
}

function assertUnreachable(_x: never): never {
  throw new Error("Didn't expect to get here");
}
