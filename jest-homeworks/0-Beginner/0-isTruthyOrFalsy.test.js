const isTruthyOrFalsy = require("./0-isTruthyOrFalsy");

describe("test isTruthyOrFalsy", () => {
  test("should return false for falsy value", () => {
    const bool = isTruthyOrFalsy(false);
    const bool1 = isTruthyOrFalsy("");
    const bool2 = isTruthyOrFalsy(undefined);
    const bool3 = isTruthyOrFalsy(null);
    const bool4 = isTruthyOrFalsy(0);
    expect(bool).toBe(false);
    expect(bool1).toBe(false);
    expect(bool2).toBe(false);
    expect(bool3).toBe(false);
    expect(bool4).toBe(false);
  });

  test("should return true for truthy value", () => {
    const bool = isTruthyOrFalsy("hello");
    const bool1 = isTruthyOrFalsy(true);
    const bool2 = isTruthyOrFalsy(10);
    expect(bool).toBe(true);
    expect(bool1).toBe(true);
    expect(bool2).toBe(true);
  });
});
