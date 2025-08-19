const getUserWithDelay = require("./0-delayPromise");

describe("getUserWithDelay", () => {
  test("should return a user object after at least 1000 ms", async () => {
    const id = 5;
    const start = Date.now();

    const res = await getUserWithDelay(id);

    const end = Date.now();
    const duration = end - start;

    expect(duration).toBeGreaterThanOrEqual(1000);

    expect(res).toEqual({ id: id, name: `User ${id}` });
  });
});
