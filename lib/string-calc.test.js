const { stringCalc } = require("./string-Calc");
describe("string-calc", () => {
  it("should return zero", () => {
    expect(stringCalc()).toBe(0);
  });
});
