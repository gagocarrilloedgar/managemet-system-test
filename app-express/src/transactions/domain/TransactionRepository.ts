import { Maybe, Transaction } from "./Transation";

export interface TransactionReposity {
  create(transaction: Transaction): Promise<void>;
  searchById(transaction_id: string): Promise<Maybe<Transaction>>;
  searchAll(): Promise<Transaction[]>;
}
