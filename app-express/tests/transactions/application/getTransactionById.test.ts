import { getTransactionById } from "../../../src/transactions/application/getTransactionById";

import {
    mockTransactionRepository,
    transactionMock
} from "./mockTransactionRepository";

describe("getTransactionById", () => {
  it("should return the transaction when found", async () => {
    const result = await getTransactionById(mockTransactionRepository)(
      transactionMock.transaction_id
    );

    expect(result).toEqual(transactionMock);
    expect(mockTransactionRepository.searchById).toHaveBeenCalledWith(
      transactionMock.transaction_id
    );
  });

  it("should throw an error when the transaction is not found", async () => {
    await expect(
      getTransactionById(mockTransactionRepository)("invalid_id")
    ).rejects.toThrow("Transaction not found");
  });
});
