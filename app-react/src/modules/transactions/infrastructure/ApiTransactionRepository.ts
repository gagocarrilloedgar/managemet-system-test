import { TransactionRepository } from "../domain/TransactionRepository";
import {
  NewTransaction,
  Transaction,
  TransactionAccount
} from "../domain/Transactions";

import config from "../../../shared/config";

export function ApiTransactionRepository(): TransactionRepository {
  return {
    create,
    searchAll,
    getAccountById
  };
}

const transactionsUrl = `${config.apiUrl}/transactions`;

const create = async (transaction: NewTransaction): Promise<Transaction> => {
  try {
    const fetchResponse = await fetch(transactionsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(transaction)
    });

    return fetchResponse.json();
  } catch (error) {
    throw new Error("Error creating transaction");
  }
};

const searchAll = async (): Promise<Transaction[]> => {
  try {
    const response = await fetch(transactionsUrl);
    return response.json();
  } catch (error) {
    throw new Error("Error fetching transactions");
  }
};

const accountsUrl = `${config.apiUrl}/accounts`;

export const getAccountById = async (
  account_id: string
): Promise<TransactionAccount> => {
  try {
    const response = await fetch(`${accountsUrl}/${account_id}`);
    return response.json();
  } catch (error) {
    throw new Error("Error fetching account");
  }
};
