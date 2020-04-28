const { add } = require("./string-calc");
describe("string-calc", () => {
  //empty Case
  it("should return 0 on empty string", () => {
    expect(add("")).toEqual(0);
  });
  //Case 1
  it("should return 1 on '1'", () => {
    expect(add("1")).toEqual(1);
  });
  //Case 2 summarize
  it("should return the sum of '1,2'", () => {
    expect(add("1, 2")).toEqual(3);
  });
});
