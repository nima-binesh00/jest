const getAverage = require("./1-getAverage");
describe("test getAverage", () => {
  test("should toBeGreaterThan", () => {
    const number = getAverage(6, 7, 6);
    expect(number).toBeGreaterThan(5);
  });
  test("should toBeLessThan", () => {
    const number = getAverage(4, 3, 2);
    expect(number).toBeLessThan(5);
  });
  test("should equle", () => {
    const number = getAverage(6, 5, 4);
    expect(number).toBe(5);
  });
});
