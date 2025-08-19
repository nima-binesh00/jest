const checkAge = require("./0-checkAge");
describe("test checkAge", () => {
  test("should number test checkAge", () => {
    const number = checkAge(20);
    const number2 = checkAge(16);
    expect(number).not.toBeUndefined();

    expect(number2).toBeUndefined();
  });
});
