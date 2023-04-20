export interface Transaction {
  transaction_id: string;
  account_id: string;
  amount: number;
  created_at: Date;
}

export interface TransactionAccount {
  account_id: string;
  balance: number;
}

export type NewTransaction = Omit<Transaction, "transaction_id" | "created_at">;

export const ensureValidTransactionAccount = (account_id: string) => {
  if (!validateUuid(account_id)) throw new Error("Invalid account id");
};

export const validateUuid = (uuid: string): boolean => {
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
};
