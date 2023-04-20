import {
  NewTransaction,
  Transaction,
  TransactionAccount
} from "./Transactions";

export interface TransactionRepository {
  create(transaction: NewTransaction): Promise<Transaction>;
  searchAll(): Promise<Transaction[]>;
  getAccountById(account_id: string): Promise<TransactionAccount>;
}
