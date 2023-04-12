export interface Account {
  account_id: string;
  balance: number;
}

export interface AccountTransaction {
  transaction_id: string;
  account_id: string;
  amount: number;
  created_at: Date;
}
