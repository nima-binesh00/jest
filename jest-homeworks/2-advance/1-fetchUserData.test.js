const fetchUserData = require("./1-fetchUserData");

global.fetch = jest.fn();

describe("fetchUserData", () => {
  test("should return mocked user data", async () => {
    const userId = 1;

    const mockData = { id: userId, name: "Mock User" };

    fetch.mockResolvedValueOnce({
      json: async () => mockData,
    });

    const res = await fetchUserData(userId);

    expect(res).toEqual(mockData);

    expect(fetch).toHaveBeenCalledWith(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
  });
});
