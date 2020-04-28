const { add } = require("./string-calc");
describe("string-calc", () => {
  //empty Case
  it("should return 0 on empty string", () => {
    expect(add("")).toEqual(0);
  });
});
