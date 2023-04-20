import { Maybe } from "../../shared/types";

import { Transaction } from "./Transation";

export interface TransactionReposity {
  create(transaction: Transaction): Promise<Transaction>;
  searchById(transaction_id: string): Promise<Maybe<Transaction>>;
  searchAll(): Promise<Transaction[]>;
}
