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
  it("should return the sum of '1, 2'", () => {
    expect(add("1, 2")).toEqual(3);
  });
  //Step 2 List of any length
  it("should take strings of lists of any lengths", () => {
    expect(add("1,2,3,4,5,6,7,8,9,10,11,12")).toEqual(
      1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12
    );
  });
  //Step 3 allow new lines instead of commas
  it("should allow new lines instead of commas", () => {
    expect(
      add(`1,
       4`)
    ).toEqual(5);
  });
});
