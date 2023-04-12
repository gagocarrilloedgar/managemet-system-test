import { NewTransaction, Transaction } from "./Transactions";

export interface TransactionRepository {
  create(transaction: NewTransaction): Promise<Transaction>;
  searchAll(): Promise<Transaction[]>;
}
