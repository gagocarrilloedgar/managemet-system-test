import { uuid } from "../../../src/shared/uuid";
import {
    CreateTransactionRequest,
    createTransaction
} from "../../../src/transactions/application/createTransaction";
import { TransactionReposity } from "../../../src/transactions/domain/TransactionRepository";

// Mock the TransactionRepository interface
const mockTransactionRepository: TransactionReposity = {
  create: jest.fn(),
  searchById: jest.fn(),
  searchAll: jest.fn()
};

// Define test cases for the createTransaction function
describe("createTransaction", () => {
  test("should throw an error if the amount is negative", async () => {
    // Arrange
    const transactionRequest: CreateTransactionRequest = {
      account_id: uuid(),
      amount: -100
    };

    // Act & Assert
    await expect(
      createTransaction(mockTransactionRepository)(transactionRequest)
    ).rejects.toThrow("Amount cannot be negative");
  });

  test("should throw an error if the account_id is invalid", async () => {
    // Arrange
    const transactionRequest: CreateTransactionRequest = {
      account_id: "invalid_uuid",
      amount: 100
    };

    // Act & Assert
    await expect(
      createTransaction(mockTransactionRepository)(transactionRequest)
    ).rejects.toThrow("Invalid account id");
  });

  test("should call the create method of the transactionRepository with the correct parameters", async () => {
    // Arrange
    const transactionRequest: CreateTransactionRequest = {
      account_id: uuid(),
      amount: 100
    };
    const expectedTransaction = {
      transaction_id: expect.any(String),
      account_id: transactionRequest.account_id,
      amount: transactionRequest.amount,
      created_at: expect.any(Date)
    };

    // Act
    await createTransaction(mockTransactionRepository)(transactionRequest);

    // Assert
    expect(mockTransactionRepository.create).toHaveBeenCalledWith(
      expectedTransaction
    );
  });
});
