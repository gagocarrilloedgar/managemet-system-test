import { uuid } from "../../../src/shared/uuid";

import { validateUuid } from "../../../src/transactions/domain/validateUuid";

describe("validateUuid", () => {
  it("should return true for a valid UUID", () => {
    const validUuid = uuid();
    expect(validateUuid(validUuid)).toBe(true);
  });

  it("should return false for an invalid UUID with too few characters", () => {
    const invalidUuid = uuid().slice(0, -1);
    expect(validateUuid(invalidUuid)).toBe(false);
  });

  it("should return false for an invalid UUID with too many characters", () => {
    const invalidUuid = uuid() + "0";
    expect(validateUuid(invalidUuid)).toBe(false);
  });

  it("should return false for an invalid UUID with invalid characters", () => {
    const invalidUuid = uuid().replace(/[a-f]/g, "g");
    expect(validateUuid(invalidUuid)).toBe(false);
  });

  it("should return false for an invalid UUID with incorrect format", () => {
    const invalidUuid = uuid().replace(/-/g, "");
    expect(validateUuid(invalidUuid)).toBe(false);
  });

  it("should return false for an empty string", () => {
    const emptyString = "invalid_uuid";
    expect(validateUuid(emptyString)).toBe(false);
  });
});
