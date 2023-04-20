import React from "react";

import TextField from "@mui/material/TextField";

import { validateUuid } from "../../modules/transactions/domain/Transactions";
import { AlertMessageWithButton } from "../shared/AlertMessageWithButton";

import { useFormData } from "./useFormData";
import { FormStatus, useTransactionForm } from "./useTransactionForm";

const initialState = {
  accountId: "",
  amount: null
};

export const NewTransactionForm = () => {
  const { formData, updateForm, resetForm } = useFormData<{
    accountId: string;
    amount: null | number;
  }>(initialState);
  const { formStatus, submitForm, resetFormStatus } = useTransactionForm();
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    const isTransactionValid = validateUuid(formData.accountId);

    setError(isTransactionValid ? "" : "Invalid account ID");
  }, [formData.accountId]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitForm({
      accountId: formData.accountId,
      amount: formData.amount ?? 0
    });
    resetForm();
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
            data-type="account-id"
            sx={{ marginBottom: "10px" }}
            value={formData.accountId}
            error={Boolean(formData.accountId && !!error)}
            helperText={formData.accountId ? error : ""}
            onChange={(event) => {
              updateForm({ accountId: event.target.value });
            }}
          />
          <TextField
            fullWidth
            label="Amount"
            data-type="amount"
            type="number"
            value={formData.amount}
            onChange={(event) => {
              updateForm({ amount: Number(event.target.value) ?? 0 });
            }}
          />
          <input
            type="submit"
            data-type="transaction-submit"
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

const SuccessNotification = ({ resetForm }: { resetForm: () => void }) => {
  return (
    <AlertMessageWithButton
      resetForm={resetForm}
      title="🎉 Transaction created!"
      buttonActionText="Create a new Transaction"
    />
  );
};

const ErrorNotification = ({ resetForm }: { resetForm: () => void }) => {
  return (
    <AlertMessageWithButton
      resetForm={resetForm}
      title="😱 Something went wrong"
      buttonActionText="Ok, let me try again"
    />
  );
};

export const assertUnreachable = (_x: never): never => {
  throw new Error("Didn't expect to get here");
};
