const { add } = require("./string-calc");
describe("string-calc", () => {
  //Empty Case
  it("should return 0 on empty string", () => {
    expect(add("")).toEqual(0);
  });
  //Case 1
  it('should return 1 on "1"', () => {
    expect(add("1")).toEqual(1);
  });
  //case 1+2
  it('should return the sum of the string "1, 2"', () => {
    expect(add("1, 2")).toEqual(3);
  });
  //case Length of 10
  it("should strings of lists of any lengths", () => {
    expect(add("1,2,3,4,5,6,7,8,9,10")).toEqual(
      1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10
    );
  });
});
