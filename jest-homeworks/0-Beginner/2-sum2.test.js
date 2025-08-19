const sum = require("./2-sum2");
describe("test sum", () => {
  test("should sum throw", () => {
    expect(() => sum(true, 99)).toThrow("Input must be numbers");
    expect(() => sum(88, false)).toThrow("Input must be numbers");
    expect(() => sum("$%^&*&^%$", false)).toThrow("Input must be numbers");
  });
  test("should sum +", () => {
    const number = sum(88, 99);
    expect(number).toBe(187);
    expect(number).toBeGreaterThan(180);
  });
  test("should sum -", () => {
    const number = sum(-1, 5);
    const number2 = sum(-1, -7);
    expect(number).toBe(4);
    expect(number2).toBe(-8);
    expect(number).toBeLessThan(10);
  });
});
