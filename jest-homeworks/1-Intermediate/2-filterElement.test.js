const filterElement = require("./2-filterElement");
describe("test filterElement", () => {
  const arre = ["apple", "nima", "Ali", "javad"];
  test("should ", () => {
    const res = filterElement(arre, "grape");
    expect(res).toEqual([]);
  });
  test("should ", () => {
    const res = filterElement(arre, "apple");
    expect(res).toEqual(["apple"]);
  });
});
