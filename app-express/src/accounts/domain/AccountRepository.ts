import { Maybe } from "../../shared/types";
import { Account } from "./Account";

export interface AccountRepository {
  searchById(account_id: string): Promise<Maybe<Account>>;
  update(account: Account): Promise<void>;
  create(account: Account): Promise<void>;
}
