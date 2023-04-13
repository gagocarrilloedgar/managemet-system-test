import { useState } from "react";
import { useTransactionsContext } from "./TransactionsContext";

export const enum FormStatus {
  Loading,
  Success,
  Error,
  Initial
}

export function useTransactionForm(): {
  formStatus: FormStatus;
  submitForm: (formData: { accountId: string; amount: number }) => void;
  resetFormStatus: () => void;
} {
  const [formStatus, setFormStatus] = useState(FormStatus.Initial);

  const { createTransaction } = useTransactionsContext();

  const stopLoadinAfterTimeout = () => {
    setTimeout(() => {
      setFormStatus(FormStatus.Initial);
    }, 1000);
  };

  function submitForm(formData: { accountId: string; amount: number }) {
    setFormStatus(FormStatus.Loading);
    stopLoadinAfterTimeout();
    createTransaction({
      account_id: formData.accountId,
      amount: formData.amount
    })
      .then(() => {
        setFormStatus(FormStatus.Success);
      })
      .catch(() => {
        setFormStatus(FormStatus.Error);
      });
  }

  function resetFormStatus() {
    setFormStatus(FormStatus.Initial);
  }

  return {
    formStatus,
    submitForm,
    resetFormStatus
  };
}
