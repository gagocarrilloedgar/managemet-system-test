import { uuid } from "../../../src/shared/uuid";
import { TransactionReposity } from "../../../src/transactions/domain/TransactionRepository";

export const transactionMock = {
  transaction_id: uuid(),
  account_id: uuid(),
  amount: 123,
  created_at: new Date()
};

export const mockTransactionRepository: TransactionReposity = {
  searchById: jest.fn((transaction_id: string) => {
    if (transaction_id === transactionMock.transaction_id) {
      return Promise.resolve(transactionMock);
    }
    return Promise.resolve(undefined);
  }),
  create: jest.fn(),
  searchAll: jest.fn()
};
