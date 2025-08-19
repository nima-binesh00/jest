const simpleSum = require("./1-sum");
describe("test simpleSum", () => {
  test("test of the sum of 1 and 2", () => {
    const number = simpleSum(1, 2);
    expect(number).toBe(3);
  });
  test("should simpleSum new", () => {
    const numberone = 44;
    const numbertwo = 56;
    const number = simpleSum(numberone, numbertwo);
    expect(number).toBe(100);
  });
});
