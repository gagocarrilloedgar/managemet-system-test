import { TransactionRepository } from "../domain/TransactionRepository";
import { NewTransaction, Transaction } from "../domain/Transactions";

import config from "../../../shared/config";

export function ApiTransactionRepository(): TransactionRepository {
  return {
    create,
    searchAll
  };
}

const transactionsUrl = `${config.apiUrl}/transactions`;

const create = async (transaction: NewTransaction): Promise<Transaction> => {
  return fetch(transactionsUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(transaction)
  }).then((response) => response.json());
};

const searchAll = async (): Promise<Transaction[]> => {
  return fetch(transactionsUrl).then((response) => response.json());
};
